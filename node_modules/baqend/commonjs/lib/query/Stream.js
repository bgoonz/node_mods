"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stream = void 0;
var observable_1 = require("../util/observable");
var util_1 = require("../util");
var intersection_1 = require("../intersection");
var Stream = /** @class */ (function () {
    function Stream() {
    }
    /**
     * Creates a live updating object stream for a query
     *
     * @param entityManager The owning entity manager of this query
     * @param query The query options
     * @param query.query The serialized query
     * @param query.bucket The Bucket on which the streaming query is performed
     * @param query.sort the sort string
     * @param query.limit the count, i.e. the number of items in the result
     * @param query.offset offset, i.e. the number of items to skip
     * @param query.initial Indicates if the initial result should be returned
     * @param options an object containing parameters
     * @return The query result as a live updating stream of objects
     */
    Stream.createEventStream = function (entityManager, query, options) {
        var opt = options || {};
        opt.reconnects = 0;
        return Stream.streamObservable(entityManager, query, opt, function (msg, next) {
            var type = msg.type, eventProps = __rest(msg, ["type"]);
            if (msg.type === 'result') {
                msg.data.forEach(function (obj, index) {
                    var event = __assign(__assign(__assign({ matchType: 'add', operation: 'none', initial: true }, eventProps), { data: Stream.resolveObject(entityManager, obj) }), (query.sort && { index: index }));
                    next(event);
                });
            }
            if (msg.type === 'match') {
                next(__assign(__assign({ initial: false }, eventProps), { data: Stream.resolveObject(entityManager, msg.data) }));
            }
        });
    };
    /**
     * Creates a live updating result stream for a query
     *
     * @alias query.Stream.createStreamResult<T>
     * @param entityManager The owning entity manager of this query
     * @param query The query options
     * @param query.query The serialized query
     * @param query.bucket The Bucket on which the streaming query is performed
     * @param query.sort the sort string
     * @param query.limit the count, i.e. the number of items in the result
     * @param query.offset offset, i.e. the number of items to skip
     * @param options an object containing parameters
     * @return The query result as a live updating query result
     */
    Stream.createResultStream = function (entityManager, query, options) {
        var opt = options || {};
        opt.initial = true;
        opt.matchTypes = 'all';
        opt.operations = 'any';
        var result;
        var ordered = !!query.sort;
        return Stream.streamObservable(entityManager, query, opt, function (event, next) {
            if (event.type === 'result') {
                result = event.data.map(function (obj) { return Stream.resolveObject(entityManager, obj); });
                next(result.slice());
            }
            if (event.type === 'match') {
                var obj = Stream.resolveObject(entityManager, event.data);
                if (event.matchType === 'remove' || event.matchType === 'changeIndex') {
                    // if we have removed the instance our self, we do not have the cached instances anymore
                    // therefore we can't find it anymore in the result by identity
                    for (var i = 0, len = result.length; i < len; i += 1) {
                        if (result[i].id === event.data.id) {
                            result.splice(i, 1);
                            break;
                        }
                    }
                }
                if (event.matchType === 'add' || event.matchType === 'changeIndex') {
                    if (ordered) {
                        result.splice(event.index, 0, obj);
                    }
                    else {
                        result.push(obj);
                    }
                }
                next(result.slice());
            }
        });
    };
    Stream.streamObservable = function (entityManager, query, options, mapper) {
        var opt = Stream.parseOptions(options);
        var socket = entityManager.entityManagerFactory.websocket;
        var observable = new observable_1.Observable(function (subscriber) {
            var id = util_1.uuid();
            var stream = socket.openStream(entityManager.tokenStorage, id);
            stream.send(__assign(__assign({ type: 'subscribe' }, query), opt));
            var closed = false;
            var next = subscriber.next.bind(subscriber);
            var subscription = stream.subscribe({
                complete: function () {
                    closed = true;
                    subscriber.complete();
                },
                error: function (e) {
                    closed = true;
                    subscriber.error(e);
                },
                next: function (msg) {
                    mapper(msg, next);
                },
            });
            return function () {
                if (!closed) { // send unsubscribe only when we aren't completed by the socket and call it only once
                    stream.send({ type: 'unsubscribe' });
                    subscription.unsubscribe();
                    closed = true;
                }
            };
        });
        return Stream.cachedObservable(observable, opt);
    };
    Stream.cachedObservable = function (observable, options) {
        var subscription = null;
        var observers = [];
        return new observable_1.Observable(function (observer) {
            if (!subscription) {
                var remainingRetries_1 = options.reconnects;
                var backoff_1 = 1;
                var subscriptionObserver_1 = {
                    next: function (msg) {
                        // reset the backoff if we get a message
                        backoff_1 = 1;
                        observers.forEach(function (o) { return o.next(msg); });
                    },
                    error: function (e) {
                        observers.forEach(function (o) { return o.error(e); });
                    },
                    complete: function () {
                        if (remainingRetries_1 !== 0) {
                            remainingRetries_1 = remainingRetries_1 < 0 ? -1 : remainingRetries_1 - 1;
                            setTimeout(function () {
                                subscription = observable.subscribe(subscriptionObserver_1);
                            }, backoff_1 * 1000);
                            backoff_1 *= 2;
                        }
                        else {
                            observers.forEach(function (o) { return o.complete(); });
                        }
                    },
                };
                subscription = observable.subscribe(subscriptionObserver_1);
            }
            observers.push(observer);
            return function () {
                observers.splice(observers.indexOf(observer), 1);
                if (!observers.length && subscription) {
                    subscription.unsubscribe();
                    subscription = null;
                }
            };
        });
    };
    /**
     * Parses the StreamOptions
     *
     * @param [options] object containing partial options
     * @returns an object containing VALID options
     */
    Stream.parseOptions = function (options) {
        var opt = options || {};
        var verified = {
            initial: opt.initial === undefined || !!opt.initial,
            matchTypes: Stream.normalizeMatchTypes(opt.matchTypes),
            operations: Stream.normalizeOperations(opt.operations),
            reconnects: Stream.normalizeReconnects(opt.reconnects),
        };
        if (verified.matchTypes.indexOf('all') === -1 && verified.operations.indexOf('any') === -1) {
            throw new Error('Only subscriptions for either operations or matchTypes are allowed. You cannot subscribe to a query using matchTypes and operations at the same time!');
        }
        return verified;
    };
    Stream.normalizeMatchTypes = function (list) {
        return Stream.normalizeSortedSet(list, 'all', 'match types', ['add', 'change', 'changeIndex', 'match', 'remove']);
    };
    Stream.normalizeReconnects = function (reconnects) {
        if (reconnects === undefined) {
            return -1;
        }
        return reconnects < 0 ? -1 : Number(reconnects);
    };
    Stream.normalizeOperations = function (list) {
        return Stream.normalizeSortedSet(list, 'any', 'operations', ['delete', 'insert', 'none', 'update']);
    };
    Stream.normalizeSortedSet = function (list, wildcard, itemType, allowedItems) {
        if (!list) {
            return [wildcard];
        }
        var li = Array.isArray(list) ? list : [list];
        if (li.length === 0) { // undefined or empty list --> default value
            return [wildcard];
        }
        // sort, remove duplicates and check whether all values are allowed
        li.sort();
        var item;
        var lastItem = null;
        for (var i = li.length - 1; i >= 0; i -= 1) {
            item = li[i];
            if (!item) { // undefined and null item in the list --> invalid!
                throw new Error('undefined and null not allowed!');
            }
            if (item === lastItem) { // remove duplicates
                li.splice(i, 1);
            }
            if (item === wildcard) {
                return [wildcard];
            }
            if (allowedItems.indexOf(item) === -1) { // raise error on invalid elements
                throw new Error(item + " not allowed for " + itemType + "! (permitted: " + allowedItems + ".)");
            }
            lastItem = item;
        }
        return li;
    };
    Stream.resolveObject = function (entityManager, object) {
        var entity = entityManager.getReference(object.id);
        var metadata = intersection_1.Metadata.get(entity);
        if (!object.version) {
            metadata.setRemoved();
            entityManager.removeReference(entity);
        }
        else if (entity.version <= object.version) {
            metadata.type.fromJsonValue(metadata, object, entity, { persisting: true });
        }
        return entity;
    };
    return Stream;
}());
exports.Stream = Stream;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RyZWFtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbGliL3F1ZXJ5L1N0cmVhbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaURBQTBFO0FBQzFFLGdDQUF3QztBQU14QyxnREFBMkM7QUE4RDNDO0lBQUE7SUFrUkEsQ0FBQztJQWpSQzs7Ozs7Ozs7Ozs7OztPQWFHO0lBQ0ksd0JBQWlCLEdBQXhCLFVBQTJDLGFBQTRCLEVBQUUsS0FBYyxFQUNyRixPQUE0QjtRQUM1QixJQUFNLEdBQUcsR0FBRyxPQUFPLElBQUksRUFBRSxDQUFDO1FBQzFCLEdBQUcsQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLE9BQU8sTUFBTSxDQUFDLGdCQUFnQixDQUFtQixhQUFhLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxVQUFDLEdBQUcsRUFBRSxJQUFJO1lBQzVFLElBQUEsSUFBSSxHQUFvQixHQUFHLEtBQXZCLEVBQUssVUFBVSxVQUFLLEdBQUcsRUFBN0IsUUFBdUIsQ0FBRixDQUFTO1lBRXBDLElBQUksR0FBRyxDQUFDLElBQUksS0FBSyxRQUFRLEVBQUU7Z0JBQ3pCLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQUMsR0FBRyxFQUFFLEtBQUs7b0JBQzFCLElBQU0sS0FBSyxnQ0FDVCxTQUFTLEVBQUUsS0FBSyxFQUNoQixTQUFTLEVBQUUsTUFBTSxFQUNqQixPQUFPLEVBQUUsSUFBSSxJQUNWLFVBQVUsS0FDYixJQUFJLEVBQUUsTUFBTSxDQUFDLGFBQWEsQ0FBQyxhQUFhLEVBQUUsR0FBRyxDQUFDLEtBQzNDLENBQUMsS0FBSyxDQUFDLElBQUksSUFBSSxFQUFFLEtBQUssT0FBQSxFQUFFLENBQUMsQ0FDN0IsQ0FBQztvQkFFRixJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ2QsQ0FBQyxDQUFDLENBQUM7YUFDSjtZQUVELElBQUksR0FBRyxDQUFDLElB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
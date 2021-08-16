"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Node = void 0;
var binding_1 = require("../binding");
var Query_1 = require("./Query");
var message = __importStar(require("../message"));
var intersection_1 = require("../intersection");
var Stream_1 = require("./Stream");
/**
 * A Query Node saves the state of the query being built
 */
var Node = /** @class */ (function (_super) {
    __extends(Node, _super);
    function Node() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * The offset how many results should be skipped
         */
        _this.firstResult = 0;
        /**
         * The limit how many objects should be returned
         * @type number
         * @readonly
         */
        _this.maxResults = -1;
        /**
         * The properties which should be used sort the result
         */
        _this.order = {};
        return _this;
    }
    Node.prototype.eventStream = function (options, onNext, onError, onComplete) {
        if (options instanceof Function) {
            return this.eventStream({}, options, onNext, onError);
        }
        var observable = Stream_1.Stream.createEventStream(this.entityManager, this.createRealTimeQuery(), options);
        if (onNext instanceof Function) {
            return observable.subscribe(onNext, onError, onComplete);
        }
        return observable;
    };
    Node.prototype.resultStream = function (options, onNext, onError, onComplete) {
        if (options instanceof Function) {
            return this.resultStream({}, options, onNext, onError);
        }
        var observable = Stream_1.Stream.createResultStream(this.entityManager, this.createRealTimeQuery(), options);
        if (onNext instanceof Function) {
            return observable.subscribe(onNext, onError, onComplete);
        }
        return observable;
    };
    /**
     * @inheritDoc
     */
    Node.prototype.resultList = function (options, doneCallback, failCallback) {
        var _this = this;
        var _a;
        if (options instanceof Function) {
            return this.resultList({}, options, doneCallback);
        }
        var type = this.resultClass ? this.entityManager.metamodel.entity(this.resultClass) : null;
        if (!type) {
            throw new Error('Only typed queries can be executed.');
        }
        var query = this.serializeQuery();
        var sort = this.serializeSort();
        var uriSize = (((_a = this.entityManager.connection) === null || _a === void 0 ? void 0 : _a.host.length) || 0) + query.length + sort.length;
        var msg;
        if (uriSize > Query_1.Query.MAX_URI_SIZE) {
            msg = new message.AdhocQueryPOST(type.name, this.firstResult, this.maxResults, sort)
                .entity(query, 'text');
        }
        else {
            msg = new message.AdhocQuery(type.name, query, this.firstResult, this.maxResults, sort);
        }
        return this.entityManager.send(msg)
            .then(function (response) { return _this.createResultList(response.entity, options); })
            .then(doneCallback, failCallback);
    };
    /**
     * @inheritDoc
     */
    Node.prototype.singleResult = function (options, doneCallback, failCallback) {
        var _this = this;
        var _a;
        if (options instanceof Function) {
            return this.singleResult({}, options, doneCallback);
        }
        var type = this.resultClass ? this.entityManager.metamodel.entity(this.resultClass) : null;
        if (!type) {
            throw new Error('Only typed queries can be executed.');
        }
        var query = this.serializeQuery();
        var sort = this.serializeSort();
        var uriSize = (((_a = this.entityManager.connection) === null || _a === void 0 ? void 0 : _a.host.length) || 0) + query.length;
        var msg;
        if (uriSize > Query_1.Query.MAX_URI_SIZE) {
            msg = new message.AdhocQueryPOST(type.name, this.firstResult, 1, sort)
                .entity(query, 'text');
        }
        else {
            msg = new message.AdhocQuery(type.name, query, this.firstResult, 1, sort);
        }
        return this.entityManager.send(msg)
            .then(function (response) { return _this.createResultList(response.entity, options); })
            .then(function (list) { return (list.length ? list[0] : null); })
            .then(doneCallback, failCallback);
    };
    /**
     * @inheritDoc
     */
    Node.prototype.count = function (doneCallback, failCallback) {
        var _a;
        var type = this.resultClass ? this.entityManager.metamodel.entity(this.resultClass) : null;
        if (!type) {
            throw new Error('Only typed queries can be executed.');
        }
        var query = this.serializeQuery();
        var uriSize = (((_a = this.entityManager.connection) === null || _a === void 0 ? void 0 : _a.host.length) || 0) + query.length;
        var msg;
        if (uriSize > Query_1.Query.MAX_URI_SIZE) {
            msg = new message.AdhocCountQueryPOST(type.name)
                .entity(query, 'text');
        }
        else {
            msg = new message.AdhocCountQuery(type.name, query);
        }
        return this.entityManager.send(msg)
            .then(function (response) { return response.entity.count; })
            .then(doneCallback, failCallback);
    };
    Node.prototype.serializeQuery = function () {
        return JSON.stringify(this, function argSerializer(k, v) {
            // this referees here to the object which owns the key k
            var typedValue = this[k];
            if (typedValue instanceof Date) {
                return { $date: v };
            }
            if (typedValue instanceof binding_1.Entity) {
                return typedValue.id;
            }
            return v;
        });
    };
    Node.prototype.serializeSort = function () {
        return JSON.stringify(this.order);
    };
    Node.prototype.createResultList = function (result, options) {
        var _this = this;
        if (result.length) {
            return Promise.all(result.map(function (el) {
                if (el.id) {
                    var entity = _this.entityManager.getReference(_this.resultClass, el.id);
                    var metadata = intersection_1.Metadata.get(entity);
                    metadata.type.fromJsonValue(metadata, el, entity, { persisting: true });
                    return _this.entityManager.resolveDepth(entity, options);
                }
                return _this.entityManager.load(Object.keys(el)[0]);
            }))
                .then(function (objects) { return objects.filter(function (val) { return !!val; }); });
        }
        return Promise.resolve([]);
    };
    Node.prototype.createRealTimeQuery = function () {
        var type = this.resultClass ? this.entityManager.metamodel.entity(this.resultClass) : null;
        if (!type) {
            throw new Error('Only typed queries can be executed.');
        }
        var query = {
            bucket: type.name,
            query: this.serializeQuery(),
        };
        var sort = this.serializeSort();
        if (sort && sort !== '{}') {
            query.sort = sort;
        }
        if (this.maxResults > 0) {
            query.limit = this.maxResults;
        }
        if (this.firstResult > 0) {
            query.offset = this.firstResult;
        }
        return query;
    };
    Node.prototype.addOrder = function (fieldOrSort, order) {
        if (typeof fieldOrSort === 'string') {
            this.order[fieldOrSort] = order;
        }
        else {
            this.order = fieldOrSort;
        }
        return this;
    };
    Node.prototype.addOffset = function (offset) {
        this.firstResult = offset;
        return this;
    };
    Node.prototype.addLimit = function (limit) {
        this.maxResults = limit;
        return this;
    };
    return Node;
}(Query_1.Query));
exports.Node = Node;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTm9kZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9xdWVyeS9Ob2RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxzQ0FBb0M7QUFHcEMsaUNBWWlCO0FBQ2pCLGtEQUFzQztBQUd0QyxnREFBMkM7QUFDM0MsbUNBQWtDO0FBRWxDOztHQUVHO0FBQ0g7SUFBNEMsd0JBQVE7SUFBcEQ7UUFBQSxxRUFxT0M7UUFwT0M7O1dBRUc7UUFDSSxpQkFBVyxHQUFXLENBQUMsQ0FBQztRQUUvQjs7OztXQUlHO1FBQ0ksZ0JBQVUsR0FBVyxDQUFDLENBQUMsQ0FBQztRQUUvQjs7V0FFRztRQUNJLFdBQUssR0FBZ0MsRUFBRSxDQUFDOztJQXFOakQsQ0FBQztJQWhOQywwQkFBVyxHQUFYLFVBQVksT0FBbUQsRUFBRSxNQUE0QyxFQUMzRyxPQUF5QyxFQUFFLFVBQTZCO1FBRXhFLElBQUksT0FBTyxZQUFZLFFBQVEsRUFBRTtZQUMvQixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxFQUFFLE9BQStCLEVBQUUsTUFBc0IsRUFBRSxPQUEyQixDQUFDLENBQUM7U0FDbkg7UUFFRCxJQUFNLFVBQVUsR0FBRyxlQUFNLENBQUMsaUJBQWlCLENBQUksSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsbUJBQW1CLEVBQUUsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUV4RyxJQUFJLE1BQU0sWUFBWSxRQUFRLEVBQUU7WUFDOUIsT0FBTyxVQUFVLENBQUMsU0FBUyxDQUFDLE1BQThCLEVBQUUsT0FBTyxFQUFFLFVBQVUsQ0FBQyxDQUFDO1NBQ2xGO1FBRUQsT0FBTyxVQUFVLENBQUM7SUFDcEIsQ0FBQztJQUtELDJCQUFZLEdBQVosVUFBYSxPQUFxRCxFQUFFLE1BQTZDLEVBQy9HLE9BQXlDLEVBQUUsVUFBNkI7UUFDeEUsSUFBSSxPQUFPLFlBQVksUUFBUSxFQUFF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
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
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
exports.EntityManager = void 0;
var messages = __importStar(require("./message"));
var binding_1 = require("./binding");
var util_1 = require("./util");
var connector_1 = require("./connector");
var caching_1 = require("./caching");
var GeoPoint_1 = require("./GeoPoint");
var query_1 = require("./query");
var error_1 = require("./error");
var metamodel_1 = require("./metamodel");
var intersection_1 = require("./intersection");
var Message_1 = require("./connector/Message");
var DB_PREFIX = '/db/';
var EntityManager = /** @class */ (function (_super) {
    __extends(EntityManager, _super);
    /**
     * @param entityManagerFactory The factory which of this entityManager instance
     */
    function EntityManager(entityManagerFactory) {
        var _this = _super.call(this) || this;
        /**
         * Constructor for a new List collection
         */
        _this.List = Array;
        /**
         * Constructor for a new Set collection
         */
        _this.Set = Set;
        /**
         * Constructor for a new Map collection
         */
        _this.Map = Map;
        /**
         * Constructor for a new GeoPoint
         */
        _this.GeoPoint = GeoPoint_1.GeoPoint;
        /**
         * Log messages can created by calling log directly as function, with a specific log level or with the helper
         * methods, which a members of the log method.
         *
         * Logs will be filtered by the client logger and the before they persisted. The default log level is
         * 'info' therefore all log messages below the given message aren't persisted.
         *
         * Examples:
         * <pre class="prettyprint">
         // default log level ist info
         db.log('test message %s', 'my string');
         // info: test message my string
      
         // pass a explicit log level as the first argument, one of ('trace', 'debug', 'info', 'warn', 'error')
         db.log('warn', 'test message %d', 123);
         // warn: test message 123
      
         // debug log level will not be persisted by default, since the default logging level is info
         db.log('debug', 'test message %j', {number: 123}, {});
         // debug: test message {"number":123}
         // data = {}
      
         // One additional json object can be provided, which will be persisted together with the log entry
         db.log('info', 'test message %s, %s', 'first', 'second', {number: 123});
         // info: test message first, second
         // data = {number: 123}
      
         //use the log level helper
         db.log.info('test message', 'first', 'second', {number: 123});
         // info: test message first second
         // data = {number: 123}
      
         //change the default log level to trace, i.e. all log levels will be persisted, note that the log level can be
         //additionally configured in the baqend
         db.log.level = 'trace';
      
         //trace will be persisted now
         db.log.trace('test message', 'first', 'second', {number: 123});
         // info: test message first second
         // data = {number: 123}
         * </pre>
         */
        _this.log = intersection_1.Logger.create(_this);
        /**
         * The connector used for requests
         */
        _this.connection = null;
        /**
         * All managed and cached entity instances
         * @type Map<String,Entity>
         * @private
         */
        _this.entities = {};
        _this.modules = new intersection_1.Modules(_this);
        /**
         * The current logged in user object
         */
        _this.me = null;
        /**
         * The current registered device object
         */
        _this.deviceMe = null;
        /**
         * Returns the tokenStorage which will be used to authorize all requests.
         */
        _this.tokenStorage = null; // is never null after em is ready
        /**
         * The bloom filter which contains staleness information of cached objects
         */
        _this.bloomFilter = null;
        /**
         * Set of object ids that were revalidated after the Bloom filter was loaded.
         */
        _this.cacheWhiteList = null;
        /**
         * Set of object ids that were updated but are not yet included in the bloom filter.
         * This set essentially implements revalidation by side effect which does not work in Chrome.
         */
        _this.cacheBlackList = null;
        /**
         * Bloom filter refresh interval in seconds.
         */
        _this.bloomFilterRefresh = 60;
        /**
         * Bloom filter refresh Promise
         */
        _this.bloomFilterLock = new util_1.Lockable();
        /**
         * A File factory for file objects.
         * The file factory can be called to create new instances for files.
         * The created instances implements the {@link File} interface
         */
        _this.File = null; // is never null after the em is ready
        _this.entityManagerFactory = entityManagerFactory;
        _this.metamodel = entityManagerFactory.metamodel;
        _this.code = entityManagerFactory.code;
        return _this;
    }
    Object.defineProperty(EntityManager.prototype, "isOpen", {
        /**
         * Determine whether the entity manager is open.
         * true until the entity manager has been closed
         */
        get: function () {
            return !!this.connection;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EntityManager.prototype, "token", {
        /**
         * The authentication token if the user is logged in currently
         */
        get: function () {
            return this.tokenStorage.token;
        },
        /**
         * The authentication token if the user is logged in currently
         * @param value
         */
        set: function (value) {
            this.tokenStorage.update(value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EntityManager.prototype, "isCachingDisabled", {
        /**
         * Whether caching is disabled
         * @deprecated
         */
        get: function () {
            return !this.isCachingEnabled();
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Whether caching is enabled
     */
    EntityManager.prototype.isCachingEnabled = function () {
        return !!this.bloomFilter;
    };
    Object.defineProperty(EntityManager.prototype, "isDeviceRegistered", {
        /**
         * Returns true if the device token is already registered, otherwise false.
         */
        get: function () {
            return !!this.deviceMe;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Connects this entityManager, used for synchronous and asynchronous initialization
     * @param connector
     * @param connectData
     * @param tokenStorage The used tokenStorage for token persistence
     */
    EntityManager.prototype.connected = function (connector, connectData, tokenStorage) {
        this.connection = connector;
        this.tokenStorage = tokenStorage;
        this.bloomFilterRefresh = this.entityManagerFactory.staleness;
        this.File = binding_1.FileFactory.create(this);
        this._createObjectFactory(this.metamodel.embeddables);
        this._createObjectFactory(this.metamodel.entities);
        if (connectData) {
            if (connectData.device) {
                this._updateDevice(connectData.device);
            }
            if (connectData.user && tokenStorage.token) {
                this._updateUser(connectData.user, true);
            }
            if (this.bloomFilterRefresh > 0 && connectData.bloomFilter && util_1.atob && !util_1.isNode) {
                this._updateBloomFilter(connectData.bloomFilter);
            }
        }
    };
    /**
     * @param types
     * @return    * @private
     */
    EntityManager.prototype._createObjectFactory = function (types) {
        var values = Object.values(types);
        var _loop_1 = function (i) {
            var type = values[i];
            var name_1 = type.name;
            if (this_1[name_1]) {
                type.typeConstructor = this_1[name_1];
                Object.defineProperty(this_1, name_1, {
                    value: type.createObjectFactory(this_1),
                });
            }
            else {
                Object.defineProperty(this_1, name_1, {
                    get: function () {
                        Object.defineProperty(this, name_1, {
                            value: type.createObjectFactory(this),
                        });
                        return this[name_1];
                    },
                    set: function (typeConstructor) {
                        type.typeConstructor = typeConstructor;
                    },
                    configurable: true,
                });
            }
        };
        var this_1 = this;
        for (var i = 0; i < values.length; i += 1) {
            _loop_1(i);
        }
    };
    EntityManager.prototype.send = function (message, ignoreCredentialError) {
        var _this = this;
        if (ignoreCredentialError === void 0) { ignoreCredentialError = true; }
        if (!this.connection) {
            throw new Error('This EntityManager is not connected.');
        }
        var msg = message;
        msg.tokenStorage(this.tokenStorage);
        var result = this.connection.send(msg);
        if (!ignoreCredentialError) {
            result = result.catch(function (e) {
                if (e.status === connector_1.StatusCode.BAD_CREDENTIALS) {
                    _this._logout();
                }
                throw e;
            });
        }
        return result;
    };
    /**
     * Get an instance whose state may be lazily fetched
     *
     * If the requested instance does not exist in the database, the
     * EntityNotFoundError is thrown when the instance state is first accessed.
     * The application should not expect that the instance state will be available upon detachment,
     * unless it was accessed by the application while the entity manager was open.
     *
     * @param entityClass
     * @param key
     * @return
     */
    EntityManager.prototype.getReference = function (entityClass, key) {
        var id = null;
        var type;
        if (key) {
            var keyAsStr = key;
            type = this.metamodel.entity(entityClass);
            if (keyAsStr.indexOf(DB_PREFIX) === 0) {
                id = keyAsStr;
            }
            else {
                id = type.ref + "/" + encodeURIComponent(keyAsStr);
            }
        }
        else if (typeof entityClass === 'string') {
            var keyIndex = entityClass.indexOf('/', DB_PREFIX.length); // skip /db/
            if (keyIndex !== -1) {
                id = entityClass;
            }
            type = this.metamodel.entity(keyIndex !== -1 ? entityClass.substring(0, keyIndex) : entityClass);
        }
        else {
            type = this.metamodel.entity(entityClass);
        }
        var entity = this.entities[id];
        if (!entity) {
            entity = type.create();
            var metadata = intersection_1.Metadata.get(entity);
            if (id) {
                metadata.id = id;
            }
            metadata.setUnavailable();
            this._attach(entity);
        }
        return entity;
    };
    /**
     * Creates an instance of {@link Builder<T>} for query creation and execution
     *
     * The query results are instances of the resultClass argument.
     *
     * @param resultClass - the type of the query result
     * @return A query builder to create one ore more queries for the specified class
     */
    EntityManager.prototype.createQueryBuilder = function (resultClass) {
        return new query_1.Builder(this, resultClass);
    };
    /**
     * Clear the persistence context, causing all managed entities to become detached
     *
     * Changes made to entities that have not been flushed to the database will not be persisted.
     *
     * @return
     */
    EntityManager.prototype.clear = function () {
        this.entities = {};
    };
    /**
     * Close an application-managed entity manager
     *
     * After the close method has been invoked, all methods on the EntityManager instance
     * and any Query and TypedQuery objects obtained from it will throw the IllegalStateError
     * except for transaction, and isOpen (which will return false). If this method
     * is called when the entity manager is associated with an active transaction,
     * the persistence context remains managed until the transaction completes.
     *
     * @return
     */
    EntityManager.prototype.close = function () {
        this.connection = null;
        return this.clear();
    };
    /**
     * Check if the instance is a managed entity instance belonging to the current persistence context
     *
     * @param entity - entity instance
     * @return boolean indicating if entity is in persistence context
     */
    EntityManager.prototype.contains = function (entity) {
        return !!entity && !!entity.id && this.entities[entity.id] === entity;
    };
    /**
     * Check if an object with the id from the given entity is already attached
     *
     * @param entity - entity instance
     * @return boolean indicating if entity with same id is attached
     */
    EntityManager.prototype.containsById = function (entity) {
        return !!(entity && entity.id && this.entities[entity.id]);
    };
    /**
     * Remove the given entity from the persistence context, causing a managed entity to become detached
     *
     * Unflushed changes made to the entity if any (including removal of the entity),
     * will not be synchronized to the database. Entities which previously referenced the detached entity will continue
     * to reference it.
     *
     * @param entity The entity instance to detach.
     * @return
     */
    EntityManager.prototype.detach = function (entity) {
        var _this = this;
        var state = intersection_1.Metadata.get(entity);
        return state.withLock(function () {
            _this.removeReference(entity);
            return Promise.resolve(entity);
        });
    };
    /**
     * Resolve the depth by loading the referenced objects of the given entity
     *
     * @param entity - entity instance
     * @param [options] The load options
     * @return
     */
    EntityManager.prototype.resolveDepth = function (entity, options) {
        var _this = this;
        if (!options || !options.depth) {
            return Promise.resolve(entity);
        }
        var resolved = options.resolved || [];
        var promises = [];
        var subOptions = __assign(__assign({}, options), { resolved: resolved, depth: options.depth === true ? true : options.depth - 1 });
        this.getSubEntities(entity, 1).forEach(function (subEntity) {
            if (subEntity !== null && resolved.indexOf(subEntity) === -1 && subEntity.id) {
                resolved.push(subEntity);
                promises.push(_this.load(subEntity.id, undefined, subOptions));
            }
        });
        return Promise.all(promises).then(function () { return entity; });
    };
    /**
     * Search for an entity of the specified oid
     *
     * If the entity instance is contained in the persistence context, it is returned from there.
     *
     * @param entityClass - entity class
     * @param oid - Object ID
     * @param [options] The load options.
     * @return the loaded entity or null
     */
    EntityManager.prototype.load = function (entityClass, oid, options) {
        var _this = this;
        var opt = options || {};
        var entity = this.getReference(entityClass, oid);
        var state = intersection_1.Metadata.get(entity);
        if (!opt.refresh && opt.local && state.isAvailable) {
            return this.resolveDepth(entity, opt);
        }
        var msg = new messages.GetObject(state.bucket, state.key);
        this.ensureCacheHeader(entity.id, msg, opt.refresh);
        return this.send(msg).then(function (response) {
            // refresh object if loaded older version from cache
            // chrome doesn't using cache when ifNoneMatch is set
            if (entity.version && entity.version > response.entity.version) {
                opt.refresh = true;
                return _this.load(entityClass, oid, opt);
            }
            _this.addToWhiteList(response.entity.id);
            if (response.status !== connector_1.StatusCode.NOT_MODIFIED) {
                state.type.fromJsonValue(state, response.entity, entity, { persisting: true });
            }
            return _this.resolveDepth(entity, opt);
        }, function (e) {
            if (e.status === connector_1.StatusCode.OBJECT_NOT_FOUND) {
                _this.removeReference(entity);
                state.setRemoved();
                return null;
            }
            throw e;
        });
    };
    /**
     * @param entity
     * @param options
     * @return
     */
    EntityManager.prototype.insert = function (entity, options) {
        var _this = this;
        var opt = options || {};
        var isNew;
        return this._save(entity, opt, function (state, json) {
            if (state.version) {
                throw new error_1.PersistentError('Existing objects can\'t be inserted.');
            }
            isNew = !state.id;
            return new messages.CreateObject(state.bucket, json);
        }).then(function (val) {
            if (isNew) {
                _this._attach(entity);
            }
            return val;
        });
    };
    /**
     * @param entity
     * @param options
     * @return
     */
    EntityManager.prototype.update = function (entity, options) {
        var opt = options || {};
        return this._save(entity, opt, function (state, json) {
            if (!state.version) {
                throw new error_1.PersistentError('New objects can\'t be inserted.');
            }
            if (opt.force) {
                var version = json.version, jsonWithoutVersion = __rest(json, ["version"]);
                return new messages.ReplaceObject(state.bucket, state.key, jsonWithoutVersion)
                    .ifMatch('*');
            }
            return new messages.ReplaceObject(state.bucket, state.key, json)
                .ifMatch("" + state.version);
        });
    };
    /**
     * @param entity
     * @param options The save options
     * @param withoutLock Set true to save the entity without locking
     * @return
     */
    EntityManager.prototype.save = function (entity, options, withoutLock) {
        if (withoutLock === void 0) { withoutLock = false; }
        var opt = options || {};
        var msgFactory = function (state, json) {
            if (opt.force) {
                if (!state.id) {
                    throw new error_1.PersistentError('New special objects can\'t be forcefully saved.');
                }
                var version = json.version, jsonWithoutVersion = __rest(json, ["version"]);
                return new messages.ReplaceObject(state.bucket, state.key, jsonWithoutVersion);
            }
            if (state.version) {
                return new messages.ReplaceObject(state.bucket, state.key, json)
                    .ifMatch(state.version);
            }
            return new messages.CreateObject(state.bucket, json);
        };
        return withoutLock ? this._locklessSave(entity, opt, msgFactory) : this._save(entity, opt, msgFactory);
    };
    /**
     * @param entity
     * @param cb pre-safe callback
     * @return
     */
    EntityManager.prototype.optimisticSave = function (entity, cb) {
        var _this = this;
        return intersection_1.Metadata.get(entity).withLock(function () { return _this._optimisticSave(entity, cb); });
    };
    /**
     * @param entity
     * @param cb pre-safe callback
     * @return
     * @private
     */
    EntityManager.prototype._optimisticSave = function (entity, cb) {
        var _this = this;
        var abort = false;
        var abortFn = function () {
            abort = true;
        };
        var promise = Promise.resolve(cb(entity, abortFn));
        if (abort) {
            return Promise.resolve(entity);
        }
        return promise.then(function () { return (_this.save(entity, {}, true)
            .catch(function (e) {
            if (e.status === 412) {
                return _this.refresh(entity, {})
                    .then(function () { return _this._optimisticSave(entity, cb); });
            }
            throw e;
        })); });
    };
    /**
     * Save the object state without locking
     * @param entity
     * @param options
     * @param msgFactory
     * @return
     * @private
     */
    EntityManager.prototype._locklessSave = function (entity, options, msgFactory) {
        var _this = this;
        this.attach(entity);
        var state = intersection_1.Metadata.get(entity);
        var refPromises;
        var json;
        if (state.isAvailable) {
            // getting json will check all collections changes, therefore we must do it before proofing the dirty state
            json = state.type.toJsonValue(state, entity, {
                persisting: true,
            });
        }
        if (state.isDirty) {
            if (!options.refresh) {
                state.setPersistent();
            }
            var sendPromise = this.send(msgFactory(state, json)).then(function (response) {
                if (state.id && state.id !== response.entity.id) {
                    _this.removeReference(entity);
                    state.id = response.entity.id;
                    _this._attach(entity);
                }
                state.type.fromJsonValue(state, response.entity, entity, {
                    persisting: options.refresh,
                    onlyMetadata: !options.refresh,
                });
                return entity;
            }, function (e) {
                if (e.status === connector_1.StatusCode.OBJECT_NOT_FOUND) {
                    _this.removeReference(entity);
                    state.setRemoved();
                    return null;
                }
                state.setDirty();
                throw e;
            });
            refPromises = [sendPromise];
        }
        else {
            refPromises = [Promise.resolve(entity)];
        }
        var subOptions = __assign({}, options);
        subOptions.depth = 0;
        this.getSubEntities(entity, options.depth).forEach(function (sub) {
            refPromises.push(_this._save(sub, subOptions, msgFactory));
        });
        return Promise.all(refPromises).then(function () { return entity; });
    };
    /**
     * Save and lock the object state
     * @param entity
     * @param options
     * @param msgFactory
     * @return
     * @private
     */
    EntityManager.prototype._save = function (entity, options, msgFactory) {
        var _this = this;
        this.ensureBloomFilterFreshness();
        var state = intersection_1.Metadata.get(entity);
        if (state.version) {
            this.addToBlackList(entity.id);
        }
        return state.withLock(function () { return _this._locklessSave(entity, options, msgFactory); });
    };
    /**
     * Returns all referenced sub entities for the given depth and root entity
     * @param entity
     * @param depth
     * @param [resolved]
     * @param initialEntity
     * @return
     */
    EntityManager.prototype.getSubEntities = function (entity, depth, resolved, initialEntity) {
        if (resolved === void 0) { resolved = []; }
        if (!depth) {
            return resolved;
        }
        var obj = initialEntity || entity;
        var state = intersection_1.Metadata.get(entity);
        var iter = state.type.references();
        for (var item = iter.next(); !item.done; item = iter.next()) {
            var value = item.value;
            var subEntities = this.getSubEntitiesByPath(entity, value.path);
            for (var i = 0, len = subEntities.length; i < len; i += 1) {
                var subEntity = subEntities[i];
                if (resolved.indexOf(subEntity) === -1 && subEntity !== obj) {
                    resolved.push(subEntity);
                    this.getSubEntities(subEntity, depth === true ? depth : depth - 1, resolved, obj);
                }
            }
        }
        return resolved;
    };
    /**
     * Returns all referenced one level sub entities for the given path
     * @param entity
     * @param path
     * @return
     */
    EntityManager.prototype.getSubEntitiesByPath = function (entity, path) {
        var _this = this;
        var subEntities = [entity];
        path.forEach(function (attributeName) {
            var tmpSubEntities = [];
            subEntities.forEach(function (subEntity) {
                var curEntity = subEntity[attributeName];
                if (!curEntity) {
                    return;
                }
                var attribute = _this.metamodel.managedType(subEntity.constructor).getAttribute(attributeName);
                if (attribute instanceof metamodel_1.PluralAttribute) {
                    var iter = curEntity.entries();
                    for (var item = iter.next(); !item.done; item = iter.next()) {
                        var entry = item.value;
                        tmpSubEntities.push(entry[1]);
                        if (attribute instanceof metamodel_1.MapAttribute && attribute.keyType.isEntity) {
                            tmpSubEntities.push(entry[0]);
                        }
                    }
                }
                else {
                    tmpSubEntities.push(curEntity);
                }
            });
            subEntities = tmpSubEntities;
        });
        return subEntities;
    };
    /**
     * Delete the entity instance.
     * @param entity
     * @param options The delete options
     * @return
     */
    EntityManager.prototype.delete = function (entity, options) {
        var _this = this;
        var opt = options || {};
        this.attach(entity);
        var state = intersection_1.Metadata.get(entity);
        return state.withLock(function () {
            if (!state.version && !opt.force) {
                throw new error_1.IllegalEntityError(entity);
            }
            var msg = new messages.DeleteObject(state.bucket, state.key);
            _this.addToBlackList(entity.id);
            if (!opt.force) {
                msg.ifMatch("" + state.version);
            }
            var refPromises = [_this.send(msg).then(function () {
                    _this.removeReference(entity);
                    state.setRemoved();
                    return entity;
                })];
            var subOptions = __assign({}, opt);
            subOptions.depth = 0;
            _this.getSubEntities(entity, opt.depth).forEach(function (sub) {
                refPromises.push(_this.delete(sub, subOptions));
            });
            return Promise.all(refPromises).then(function () { return entity; });
        });
    };
    /**
     * Synchronize the persistence context to the underlying database.
     *
     * @return
     */
    EntityManager.prototype.flush = function () {
        throw new Error('Not implemented.');
    };
    /**
     * Make an instance managed and persistent.
     * @param entity - entity instance
     * @return
     */
    EntityManager.prototype.persist = function (entity) {
        this.attach(entity);
    };
    /**
     * Refresh the state of the instance from the database, overwriting changes made to the entity, if any.
     * @param entity - entity instance
     * @param options The refresh options
     * @return
     */
    EntityManager.prototype.refresh = function (entity, options) {
        if (!entity.id) {
            // entity is not persisted so far
            return Promise.resolve(entity);
        }
        return this.load(entity.id, undefined, __assign(__assign({}, options), { refresh: true }));
    };
    /**
     * Attach the instance to this database context, if it is not already attached
     * @param entity The entity to attach
     * @return
     */
    EntityManager.prototype.attach = function (entity) {
        if (!this.contains(entity)) {
            var type = this.metamodel.entity(entity.constructor);
            if (!type) {
                throw new error_1.IllegalEntityError(entity);
            }
            if (this.containsById(entity)) {
                throw new error_1.EntityExistsError(entity);
            }
            this._attach(entity);
        }
    };
    EntityManager.prototype._attach = function (entity) {
        var metadata = intersection_1.Metadata.get(entity);
        if (metadata.isAttached) {
            if (metadata.db !== this) {
                throw new error_1.EntityExistsError(entity);
            }
        }
        else {
            metadata.db = this;
        }
        if (!metadata.id) {
            if (metadata.type.name !== 'User' && metadata.type.name !== 'Role' && metadata.type.name !== 'logs.AppLog') {
                metadata.id = DB_PREFIX + metadata.type.name + "/" + util_1.uuid();
            }
        }
        if (metadata.id) {
            this.entities[metadata.id] = entity;
        }
    };
    EntityManager.prototype.removeReference = function (entity) {
        var state = intersection_1.Metadata.get(entity);
        if (!state || !state.id) {
            throw new error_1.IllegalEntityError(entity);
        }
        delete this.entities[state.id];
    };
    EntityManager.prototype.register = function (user, password, loginOption) {
        var _this = this;
        var login = loginOption > binding_1.LoginOption.NO_LOGIN;
        if (this.me && login) {
            throw new error_1.PersistentError('User is already logged in.');
        }
        return this.withLock(function () {
            var msg = new messages.Register({ user: user, password: password, login: login });
            return _this._userRequest(msg, loginOption);
        });
    };
    EntityManager.prototype.login = function (username, password, loginOption) {
        var _this = this;
        if (this.me) {
            throw new error_1.PersistentError('User is already logged in.');
        }
        return this.withLock(function () {
            var msg = new messages.Login({ username: username, password: password });
            return _this._userRequest(msg, loginOption);
        });
    };
    EntityManager.prototype.logout = function () {
        var _this = this;
        return this.withLock(function () { return _this.send(new messages.Logout()).then(_this._logout.bind(_this)); });
    };
    EntityManager.prototype.loginWithOAuth = function (provider, options) {
        if (!this.connection) {
            throw new Error('This EntityManager is not connected.');
        }
        if (this.me) {
            throw new error_1.PersistentError('User is already logged in.');
        }
        var opt = __assign({ title: "Login with " + provider, timeout: 5 * 60 * 1000, state: {}, loginOption: true, oAuthVersion: 2, open: util_1.openWindow }, options);
        if (opt.deviceCode) {
            return this._loginOAuthDevice(provider.toLowerCase(), opt);
        }
        if (opt.oAuthVersion !== 1 && !opt.path && !opt.deviceCode) {
            throw new Error('No OAuth path is provided to start the OAuth flow.');
        }
        if (opt.redirect) {
            Object.assign(opt.state, { redirect: opt.redirect, loginOption: opt.loginOption });
        }
        var oAuthEndpoint = "" + this.connection.origin + this.connection.basePath + "/db/User/OAuth/" + provider.toLowerCase();
        var url = opt.oAuthVersion === 1 ? oAuthEndpoint : Message_1.appendQueryParams(opt.path, {
            client_id: opt.clientId,
            scope: opt.scope,
            state: JSON.stringify(opt.state),
            redirect_uri: oAuthEndpoint,
        });
        var windowOptions = {
            title: opt.title,
            width: opt.width,
            height: opt.height,
        };
        if (opt.redirect) {
            // use oauth via redirect by opening the login in the same window
            return opt.open(url, __assign({ target: '_self' }, windowOptions)) || url;
        }
        var req = this._userRequest(new connector_1.OAuthMessage(), opt.loginOption);
        if (!opt.open(url, windowOptions)) {
            throw new Error('The OAuth flow with a Pop-Up can only be issued in browsers. Add a redirect URL to the options to return to your app via that redirect after the OAuth flow succeed.');
        }
        return new Promise(function (resolve, reject) {
            var timeout = setTimeout(function () {
                reject(new error_1.PersistentError('OAuth login timeout.'));
            }, opt.timeout);
            req.then(resolve, reject).then(function () {
                clearTimeout(timeout);
            });
        });
    };
    EntityManager.prototype._loginOAuthDevice = function (provider, opt) {
        var _this = this;
        return this._userRequest(new messages.OAuth2(provider, opt.deviceCode), opt.loginOption)
            .catch(function () { return new Promise(function (resolve) { return setTimeout(resolve, 5000); })
            .then(function () { return _this._loginOAuthDevice(provider, opt); }); });
    };
    EntityManager.prototype.renew = function (loginOption) {
        var _this = this;
        return this.withLock(function () {
            var msg = new messages.Me();
            return _this._userRequest(msg, loginOption);
        });
    };
    EntityManager.prototype.newPassword = function (username, password, newPassword) {
        var _this = this;
        return this.withLock(function () {
            var msg = new messages.NewPassword({ username: username, password: password, newPassword: newPassword });
            return _this.send(msg, true).then(function (response) { return _this._updateUser(response.entity); });
        });
    };
    EntityManager.prototype.newPasswordWithToken = function (token, newPassword, loginOption) {
        var _this = this;
        return this.withLock(function () { return (_this._userRequest(new messages.NewPassword({ token: token, newPassword: newPassword }), loginOption)); });
    };
    EntityManager.prototype.resetPassword = function (username) {
        return this.send(new messages.ResetPassword({ username: username }));
    };
    EntityManager.prototype.changeUsername = function (username, newUsername, password) {
        return this.send(new messages.ChangeUsername({ username: username, newUsername: newUsername, password: password }));
    };
    EntityManager.prototype._updateUser = function (obj, updateMe) {
        if (updateMe === void 0) { updateMe = false; }
        var user = this.getReference(obj.id);
        var metadata = intersection_1.Metadata.get(user);
        metadata.type.fromJsonValue(metadata, obj, user, { persisting: true });
        if (updateMe) {
            this.me = user;
        }
        return user;
    };
    EntityManager.prototype._logout = function () {
        this.me = null;
        this.token = null;
    };
    EntityManager.prototype._userRequest = function (msg, loginOption) {
        var _this = this;
        var opt = loginOption === undefined ? true : loginOption;
        var login = opt > binding_1.LoginOption.NO_LOGIN;
        if (login) {
            this.tokenStorage.temporary = opt < binding_1.LoginOption.PERSIST_LOGIN;
        }
        return this.send(msg, !login)
            .then(function (response) { return (response.entity ? _this._updateUser(response.entity, login) : null); }, function (e) {
            if (e.status === connector_1.StatusCode.OBJECT_NOT_FOUND) {
                if (login) {
                    _this._logout();
                }
                return null;
            }
            throw e;
        });
    };
    /**
     * @param deviceType The OS of the device (IOS/Android)
     * @param subscription WebPush subscription
     * @param device
     * @return
     */
    EntityManager.prototype.registerDevice = function (deviceType, subscription, device) {
        var _this = this;
        var msg = new messages.DeviceRegister({ devicetype: deviceType, subscription: subscription, device: device });
        msg.withCredentials = true;
        return this.send(msg)
            .then(function (response) { return _this._updateDevice(response.entity); });
    };
    EntityManager.prototype._updateDevice = function (obj) {
        var device = this.getReference(obj.id);
        var metadata = intersection_1.Metadata.get(device);
        metadata.type.fromJsonValue(metadata, obj, device, { persisting: true });
        this.deviceMe = device;
        return device;
    };
    EntityManager.prototype.checkDeviceRegistration = function () {
        return this.send(new messages.DeviceRegistered())
            .then(function () { return true; }, function (e) {
            if (e.status === connector_1.StatusCode.OBJECT_NOT_FOUND) {
                return false;
            }
            throw e;
        });
    };
    EntityManager.prototype.pushDevice = function (pushMessage) {
        return this.send(new messages.DevicePush(pushMessage.toJSON()));
    };
    /**
     * The given entity will be checked by the validation code of the entity type.
     *
     * @param entity
     * @return result
     */
    EntityManager.prototype.validate = function (entity) {
        var type = intersection_1.Metadata.get(entity).type;
        var result = new intersection_1.ValidationResult();
        var iter = type.attributes();
        for (var item = iter.next(); !item.done; item = iter.next()) {
            var validate = new intersection_1.Validator(item.value.name, entity);
            result.fields[validate.key] = validate;
        }
        var validationCode = type.validationCode;
        if (validationCode) {
            validationCode(result.fields);
        }
        return result;
    };
    /**
     * Adds the given object id to the cacheWhiteList if needed.
     * @param objectId The id to add.
     * @return
     */
    EntityManager.prototype.addToWhiteList = function (objectId) {
        if (this.isCachingEnabled()) {
            if (this.bloomFilter.contains(objectId)) {
                this.cacheWhiteList.add(objectId);
            }
            this.cacheBlackList.delete(objectId);
        }
    };
    /**
     * Adds the given object id to the cacheBlackList if needed.
     * @param objectId The id to add.
     * @return
     */
    EntityManager.prototype.addToBlackList = function (objectId) {
        if (this.isCachingEnabled() && objectId) {
            if (!this.bloomFilter.contains(objectId)) {
                this.cacheBlackList.add(objectId);
            }
            this.cacheWhiteList.delete(objectId);
        }
    };
    EntityManager.prototype.refreshBloomFilter = function () {
        var _this = this;
        if (!this.isCachingEnabled()) {
            return Promise.resolve(null);
        }
        var msg = new messages.GetBloomFilter();
        msg.noCache();
        return this.send(msg).then(function (response) {
            _this._updateBloomFilter(response.entity);
            return _this.bloomFilter;
        });
    };
    EntityManager.prototype._updateBloomFilter = function (bloomFilter) {
        this.bloomFilter = new caching_1.BloomFilter(bloomFilter);
        this.cacheWhiteList = new Set();
        this.cacheBlackList = new Set();
    };
    /**
     * Checks the freshness of the bloom filter and does a reload if necessary
     */
    EntityManager.prototype.ensureBloomFilterFreshness = function () {
        var _this = this;
        if (!this.isCachingEnabled()) {
            return;
        }
        var now = new Date().getTime();
        var refreshRate = this.bloomFilterRefresh * 1000;
        if (this.bloomFilterLock.isReady && now - this.bloomFilter.creation > refreshRate) {
            this.bloomFilterLock.withLock(function () { return _this.refreshBloomFilter(); });
        }
    };
    /**
     * Checks for a given id, if revalidation is required, the resource is stale or caching was disabled
     * @param id The object id to check
     * @return Indicates if the resource must be revalidated
     */
    EntityManager.prototype.mustRevalidate = function (id) {
        if (util_1.isNode) {
            return false;
        }
        this.ensureBloomFilterFreshness();
        if (!this.isCachingEnabled() || !this.bloomFilterLock.isReady) {
            return true;
        }
        return !this.cacheWhiteList.has(id) && (this.cacheBlackList.has(id) || this.bloomFilter.contains(id));
    };
    /**
     * @param id To check the bloom filter
     * @param message To attach the headers
     * @param refresh To force the reload headers
     * @return
     */
    EntityManager.prototype.ensureCacheHeader = function (id, message, refresh) {
        var noCache = refresh || !id || this.mustRevalidate(id);
        if (noCache) {
            message.noCache();
        }
    };
    /**
     * Creates a absolute url for the given relative one
     * @param relativePath the relative url
     * @param authorize indicates if authorization credentials should be generated and be attached to the url
     * @return a absolute url which is optionally signed with a resource token which authenticates the currently
     * logged in user
     */
    EntityManager.prototype.createURL = function (relativePath, authorize) {
        var _this = this;
        var connection = this.connection;
        if (!connection) {
            throw new Error('This EntityManager is not connected.');
        }
        return this.tokenStorage.signPath(connection.basePath + relativePath, authorize)
            .then(function (path) {
            var url = connection.origin + path;
            if (_this.mustRevalidate(relativePath)) {
                url += (authorize ? '&' : '?') + "BCB";
            }
            return url;
        });
    };
    /**
     * Requests a perpetual token for the given user
     *
     * Only users with the admin role are allowed to request an API token.
     *
     * @param entityClass
     * @param user The user object or id of the user object
     * @return
     */
    EntityManager.prototype.requestAPIToken = function (entityClass, user) {
        var userObj = this._getUserReference(entityClass, user);
        var msg = new messages.UserToken(userObj.key);
        return this.send(msg).then(function (resp) { return resp.entity; });
    };
    /**
     * Revoke all created tokens for the given user
     *
     * This method will revoke all previously issued tokens and the user must login again.
     *
     * @param entityClass
     * @param user The user object or id of the user object
     */
    EntityManager.prototype.revokeAllTokens = function (entityClass, user) {
        var userObj = this._getUserReference(entityClass, user);
        var msg = new messages.RevokeUserToken(userObj.key);
        return this.send(msg);
    };
    EntityManager.prototype._getUserReference = function (entityClass, user) {
        if (typeof user === 'string') {
            return this.getReference(entityClass, user);
        }
        return user;
    };
    __decorate([
        util_1.deprecated('EntityManager.isCachingEnabled()')
    ], EntityManager.prototype, "isCachingDisabled", null);
    return EntityManager;
}(util_1.Lockable));
exports.EntityManager = EntityManager;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRW50aXR5TWFuYWdlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2xpYi9FbnRpdHlNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsa0RBQXNDO0FBQ3RDLHFDQVFtQjtBQUNuQiwrQkFRZ0I7QUFDaEIseUNBRXFCO0FBQ3JCLHFDQUF3QztBQUN4Qyx1Q0FBc0M7QUFLdEMsaUNBQWtDO0FBQ2xDLGlDQUFpRjtBQUNqRix5Q0FFcUI7QUFFckIsK0NBU3dCO0FBQ3hCLCtDQUF3RDtBQUV4RCxJQUFNLFNBQVMsR0FBRyxNQUFNLENBQUM7QUFJekI7SUFBbUMsaUNBQVE7SUFtTHpDOztPQUVHO0lBQ0gsdUJBQVksb0JBQTBDO1FBQXRELFlBQ0UsaUJBQU8sU0FJUjtRQTFMRDs7V0FFRztRQUNhLFVBQUksR0FBRyxLQUFLLENBQUM7UUFFN0I7O1dBRUc7UUFDYSxTQUFHLEdBQUcsR0FBRyxDQUFDO1FBRTFCOztXQUVHO1FBQ2EsU0FBRyxHQUFHLEdBQUcsQ0FBQztRQUUxQjs7V0FFRztRQUNhLGNBQVEsR0FBRyxtQkFBUSxDQUFDO1FBZ0RwQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7V0F5Q0c7UUFDYSxTQUFHLEdBQVcscUJBQU0sQ0FBQyxNQUFNLENBQUMsS0FBSSxDQUFDLENBQUM7UUFFbEQ7O1dBRUc7UUFDSSxnQkFBVSxHQUFzQixJQUFJLENBQUM7UUFFNUM7Ozs7V0FJRztRQUNLLGNBQVEsR0FBNkIsRUFBRSxDQUFDO1FBUWhDLGFBQU8sR0FBWSxJQUFJLHNCQUFPLENBQUMsS0FBSSxDQUFDLENBQUM7UUFFckQ7O1dBRUc7UUFDSSxRQUFFLEdBQXNCLElBQUksQ0FBQztRQUVwQzs7V0FFRztRQUNJLGNBQVEsR0FBd0IsSUFBSSxDQUFDO1FBRTVDOztXQUVHO1FBQ0ks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
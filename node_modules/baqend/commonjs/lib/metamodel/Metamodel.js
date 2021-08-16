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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Metamodel = void 0;
var ManagedType_1 = require("./ManagedType");
var EntityType_1 = require("./EntityType");
var binding_1 = require("../binding");
var ModelBuilder_1 = require("./ModelBuilder");
var DbIndex_1 = require("./DbIndex");
var util_1 = require("../util");
var connector_1 = require("../connector");
var message = __importStar(require("../message"));
var Metamodel = /** @class */ (function (_super) {
    __extends(Metamodel, _super);
    /**
     * Constructs a new metamodel instance which represents the complete schema of one baqend app
     * @param entityManagerFactory
     */
    function Metamodel(entityManagerFactory) {
        var _this = _super.call(this) || this;
        /**
         * Defines if the Metamodel has been finalized
         */
        _this.isInitialized = false;
        _this.entities = {};
        _this.embeddables = {};
        _this.baseTypes = {};
        _this.enhancer = new binding_1.Enhancer();
        _this.entityManagerFactory = entityManagerFactory;
        return _this;
    }
    /**
     * Prepare the Metamodel for custom schema creation
     * @param jsonMetamodel initialize the metamodel with the serialized json schema
     * @return
     */
    Metamodel.prototype.init = function (jsonMetamodel) {
        if (this.isInitialized) {
            throw new Error('Metamodel is already initialized.');
        }
        this.fromJSON(jsonMetamodel || []);
        this.isInitialized = true;
    };
    /**
     * @param arg
     * @return
     */
    Metamodel.prototype.getRef = function (arg) {
        var ref;
        if (typeof arg === 'string') {
            ref = arg;
            if (ref.indexOf('/db/') !== 0) {
                ref = "/db/" + arg;
            }
        }
        else {
            ref = binding_1.Enhancer.getIdentifier(arg);
        }
        return ref;
    };
    /**
     * Return the metamodel entity type representing the entity.
     *
     * @param typeConstructor - the type of the represented entity
     * @return the metamodel entity type or null if the class is not a managed entity
     */
    Metamodel.prototype.entity = function (typeConstructor) {
        var ref = this.getRef(typeConstructor);
        return ref ? this.entities[ref] : null;
    };
    /**
     * Return the metamodel basic type representing the native class.
     * @param typeConstructor - the type of the represented native class
     * @return the metamodel basic type
     */
    Metamodel.prototype.baseType = function (typeConstructor) {
        var ref = null;
        if (typeof typeConstructor === 'string') {
            ref = this.getRef(typeConstructor);
        }
        else {
            var baseTypesNames = Object.keys(this.baseTypes);
            for (var i = 0, len = baseTypesNames.length; i < len; i += 1) {
                var name_1 = baseTypesNames[i];
                var type = this.baseTypes[name_1];
                if (!type.noResolving && type.typeConstructor === typeConstructor) {
                    ref = name_1;
                    break;
                }
            }
        }
        return ref ? this.baseTypes[ref] : null;
    };
    /**
     * Return the metamodel embeddable type representing the embeddable class.
     * @param typeConstructor - the type of the represented embeddable class
     * @return the metamodel embeddable type or null if the class is not a managed embeddable
     */
    Metamodel.prototype.embeddable = function (typeConstructor) {
        var ref = this.getRef(typeConstructor);
        return ref ? this.embeddables[ref] : null;
    };
    /**
     * Return the metamodel managed type representing the entity, mapped superclass, or embeddable class.
     *
     * @param typeConstructor - the type of the represented managed class
     * @return the metamodel managed type
     */
    Metamodel.prototype.managedType = function (typeConstructor) {
        return this.entity(typeConstructor) || this.embeddable(typeConstructor);
    };
    /**
     * @param type
     * @return the added type
     */
    Metamodel.prototype.addType = function (type) {
        var types = {};
        if (type.isBasic) {
            types = this.baseTypes;
        }
        else if (type.isEmbeddable) {
            type.init(this.enhancer);
            types = this.embeddables;
        }
        else if (type.isEntity) {
            var entityType = type;
            entityType.init(this.enhancer);
            types = this.entities;
            if (entityType.superType === null && entityType.ref !== EntityType_1.EntityType.Object.ref) {
                entityType.superType = this.entity(EntityType_1.EntityType.Object.ref);
            }
        }
        if (types[type.ref]) {
            throw new Error("The type " + type.ref + " is already declared.");
        }
        types[type.ref] = type;
        return type;
    };
    /**
     * Load all schema data from the server
     * @return
     */
    Metamodel.prototype.load = function () {
        var _this = this;
        if (!this.isInitialized) {
            return this.withLock(function () {
                var msg = new message.GetAllSchemas();
                return _this.entityManagerFactory.send(msg).then(function (response) {
                    _this.init(response.entity);
                    return _this;
                });
            });
        }
        throw new Error('Metamodel is already initialized.');
    };
    /**
     * Store all local schema data on the server, or the provided one
     *
     * Note: The schema must be initialized, by init or load
     *
     * @param managedType The specific type to persist, if omitted the complete schema
     * will be updated
     * @return
     */
    Metamodel.prototype.save = function (managedType) {
        var _this = this;
        return this.sendUpdate(managedType || this.toJSON()).then(function () { return _this; });
    };
    /**
     * Update the metamodel with the schema
     *
     * The provided data object will be forwarded to the UpdateAllSchemas resource.
     * The underlying schema of this Metamodel object will be replaced by the result.
     *
     * @param data The JSON which will be send to the UpdateAllSchemas resource.
     * @return
     */
    Metamodel.prototype.update = function (data) {
        var _this = this;
        return this.sendUpdate(data).then(function (response) {
            _this.fromJSON(response.entity);
            return _this;
        });
    };
    Metamodel.prototype.sendUpdate = function (data) {
        var _this = this;
        return this.withLock(function () {
            var msg;
            if (data instanceof ManagedType_1.ManagedType) {
                msg = new message.UpdateSchema(data.name, data.toJSON());
            }
            else {
                msg = new message.UpdateAllSchemas(data);
            }
            return _this.entityManagerFactory.send(msg);
        });
    };
    /**
     * Get the current schema types as json
     * @return the json data
     */
    Metamodel.prototype.toJSON = function () {
        var _this = this;
        if (!this.isInitialized) {
            throw new Error('Metamodel is not initialized.');
        }
        return [].concat(Object.keys(this.entities).map(function (ref) { return _this.entities[ref].toJSON(); }), Object.keys(this.embeddables).map(function (ref) { return _this.embeddables[ref].toJSON(); }));
    };
    /**
     * Replace the current schema by the provided one in json
     * @param json The json schema data
     * @return
     */
    Metamodel.prototype.fromJSON = function (json) {
        var _this = this;
        var builder = new ModelBuilder_1.ModelBuilder();
        var models = builder.buildModels(json);
        this.baseTypes = {};
        this.embeddables = {};
        this.entities = {};
        Object.keys(models).forEach(function (ref) { return _this.addType(models[ref]); });
    };
    /**
     * Creates an index
     *
     * @param bucket Name of the Bucket
     * @param index Will be applied for the given bucket
     * @return
     */
    Metamodel.prototype.createIndex = function (bucket, index) {
        var msg = new message.CreateDropIndex(bucket, __assign(__assign({}, index.toJSON()), { drop: false }));
        return this.entityManagerFactory.send(msg);
    };
    /**
     * Drops an index
     *
     * @param bucket Name of the Bucket
     * @param index Will be dropped for the given bucket
     * @return
     */
    Metamodel.prototype.dropIndex = function (bucket, index) {
        var msg = new message.CreateDropIndex(bucket, __assign(__assign({}, index.toJSON()), { drop: true }));
        return this.entityManagerFactory.send(msg);
    };
    /**
     * Drops all indexes
     *
     * @param bucket Indexes will be dropped for the given bucket
     * @return
     */
    Metamodel.prototype.dropAllIndexes = function (bucket) {
        var msg = new message.DropAllIndexes(bucket);
        return this.entityManagerFactory.send(msg);
    };
    /**
     * Loads all indexes for the given bucket
     *
     * @param bucket Current indexes will be loaded for the given bucket
     * @return
     */
    Metamodel.prototype.getIndexes = function (bucket) {
        var msg = new message.ListIndexes(bucket);
        return this.entityManagerFactory.send(msg)
            .then(function (response) { return response.entity.map(function (el) { return new DbIndex_1.DbIndex(el.keys, el.unique); }); })
            .catch(function (e) {
            if (e.status === connector_1.StatusCode.BUCKET_NOT_FOUND || e.status === connector_1.StatusCode.OBJECT_NOT_FOUND) {
                return null;
            }
            throw e;
        });
    };
    return Metamodel;
}(util_1.Lockable));
exports.Metamodel = Metamodel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWV0YW1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbGliL21ldGFtb2RlbC9NZXRhbW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkNBQTRDO0FBQzVDLDJDQUEwQztBQUMxQyxzQ0FBK0M7QUFDL0MsK0NBQThDO0FBQzlDLHFDQUFvQztBQUNwQyxnQ0FFaUI7QUFDakIsMENBQTBDO0FBQzFDLGtEQUFzQztBQU10QztJQUErQiw2QkFBUTtJQWdCckM7OztPQUdHO0lBQ0gsbUJBQVksb0JBQTBDO1FBQXRELFlBQ0UsaUJBQU8sU0FFUjtRQXRCRDs7V0FFRztRQUNJLG1CQUFhLEdBQVksS0FBSyxDQUFDO1FBSS9CLGNBQVEsR0FBd0MsRUFBRSxDQUFDO1FBRW5ELGlCQUFXLEdBQTRDLEVBQUUsQ0FBQztRQUUxRCxlQUFTLEdBQXVDLEVBQUUsQ0FBQztRQUVuRCxjQUFRLEdBQWEsSUFBSSxrQkFBUSxFQUFFLENBQUM7UUFRekMsS0FBSSxDQUFDLG9CQUFvQixHQUFHLG9CQUFvQixDQUFDOztJQUNuRCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILHdCQUFJLEdBQUosVUFBSyxhQUF1QjtRQUMxQixJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDdEIsTUFBTSxJQUFJLEtBQUssQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDO1NBQ3REO1FBRUQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLElBQUksRUFBRSxDQUFDLENBQUM7UUFDbkMsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7SUFDNUIsQ0FBQztJQUVEOzs7T0FHRztJQUNILDBCQUFNLEdBQU4sVUFBTyxHQUF1QztRQUM1QyxJQUFJLEdBQUcsQ0FBQztRQUNSLElBQUksT0FBTyxHQUFHLEtBQUssUUFBUSxFQUFFO1lBQzNCLEdBQUcsR0FBRyxHQUFHLENBQUM7WUFFVixJ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
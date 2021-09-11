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
exports.EntityType = void 0;
// eslint-disable-next-line max-classes-per-file
var binding_1 = require("../binding");
var ManagedType_1 = require("./ManagedType");
var Type_1 = require("./Type");
var BasicType_1 = require("./BasicType");
var SingularAttribute_1 = require("./SingularAttribute");
var PluralAttribute_1 = require("./PluralAttribute");
var Attribute_1 = require("./Attribute");
var intersection_1 = require("../intersection");
var EntityType = /** @class */ (function (_super) {
    __extends(EntityType, _super);
    /**
     * @param ref
     * @param superType
     * @param typeConstructor
     */
    function EntityType(ref, superType, typeConstructor) {
        var _this = _super.call(this, ref, typeConstructor) || this;
        _this.declaredId = null;
        _this.declaredVersion = null;
        _this.declaredAcl = null;
        _this.loadPermission = new intersection_1.Permission();
        _this.updatePermission = new intersection_1.Permission();
        _this.deletePermission = new intersection_1.Permission();
        _this.queryPermission = new intersection_1.Permission();
        _this.schemaSubclassPermission = new intersection_1.Permission();
        _this.insertPermission = new intersection_1.Permission();
        _this.superType = superType;
        return _this;
    }
    Object.defineProperty(EntityType.prototype, "persistenceType", {
        /**
         * @inheritDoc
         */
        get: function () {
            return Type_1.PersistenceType.ENTITY;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EntityType.prototype, "id", {
        get: function () {
            return this.declaredId || this.superType.id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EntityType.prototype, "version", {
        get: function () {
            return this.declaredVersion || this.superType.version;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EntityType.prototype, "acl", {
        get: function () {
            return this.declaredAcl || this.superType.acl;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * @inheritDoc
     */
    EntityType.prototype.createProxyClass = function () {
        var typeConstructor = this.superType.typeConstructor;
        if (typeConstructor === Object) {
            switch (this.name) {
                case 'User':
                    typeConstructor = binding_1.User;
                    break;
                case 'Role':
                    typeConstructor = binding_1.Role;
                    break;
                default:
                    typeConstructor = binding_1.Entity;
                    break;
            }
        }
        return this.enhancer.createProxy(typeConstructor);
    };
    /**
     * Gets all on this class referencing attributes
     *
     * @param db The instances will be found by this EntityManager
     * @param [options] Some options to pass
     * @param [options.classes] An array of class names to filter for, null for no filter
     * @return A map from every referencing class to a set of its referencing attribute names
     */
    EntityType.prototype.getReferencing = function (db, options) {
        var opts = __assign({}, options);
        var entities = db.metamodel.entities;
        var referencing = new Map();
        var names = Object.keys(entities);
        for (var i = 0, len = names.length; i < len; i += 1) {
            var name_1 = names[i];
            // Skip class if not in class filter
            if (!opts.classes || opts.classes.indexOf(name_1) !== -1) {
                var entity = entities[name_1];
                var iter = entity.attributes();
                for (var el = iter.next(); !el.done; el = iter.next()) {
                    var attr = el.value;
                    // Filter only referencing singular and collection attributes
                    if ((attr instanceof SingularAttribute_1.SingularAttribute && attr.type === this)
                        || (attr instanceof PluralAttribute_1.PluralAttribute && attr.elementType === this)) {
                        var typeReferences = referencing.get(attr.declaringType) || new Set();
                        typeReferences.add(attr.name);
                        referencing.set(attr.declaringType, typeReferences);
                    }
                }
            }
        }
        return referencing;
    };
    /**
     * @inheritDoc
     */
    EntityType.prototype.createObjectFactory = function (db) {
        switch (this.name) {
            case 'User':
                return binding_1.UserFactory.create(this, db);
            case 'Device':
                return binding_1.DeviceFactory.create(this, db);
            default:
                return binding_1.EntityFactory.create(this, db);
        }
    };
    /**
     * @param state The root object state, can be <code>null</code> if a currentObject is provided
     * @param jsonObject The json data to merge
     * @param currentObject The object where the jsonObject will be merged into, if the current object is null,
     * a new instance will be created
     * @param options The options used to apply the json
     * @param [options.persisting=false] indicates if the current state will be persisted.
     * Used to update the internal change tracking state of collections and mark the object persistent or dirty afterwards
     * @param [options.onlyMetadata=false] Indicates if only the metadata should be updated
     * @return The merged entity instance
     */
    EntityType.prototype.fromJsonValue = function (state, jsonObject, currentObject, options) {
        var _a, _b;
        // handle references
        if (typeof jsonObject === 'string') {
            return ((_a = state.db) === null || _a === void 0 ? void 0 : _a.getReference(jsonObject)) || null;
        }
        if (!jsonObject || typeof jsonObject !== 'object') {
            return null;
        }
        var json = jsonObject;
        var opt = __assign({ persisting: false, onlyMetadata: false }, options);
        var obj;
        if (currentObject) {
            var currentObjectState = intersection_1.Metadata.get(currentObject);
            // merge state into the current object if:
            // 1. The provided json does not contains an id and we have an already created object for it
            // 2. The object was created without an id and was later fetched from the server (e.g. User/Role)
            // 3. The provided json has the same id as the current object, they can differ on embedded json for a reference
            if (!json.id || !currentObjectState.id || json.id === currentObjectState.id) {
                obj = currentObject;
            }
        }
        if (!obj) {
            obj = (_b = state.db) === null || _b === void 0 ? void 0 : _b.getReference(this.typeConstructor, json.id);
        }
        if (!obj) {
            return null;
        }
        var objectState = intersection_1.Metadata.get(obj);
        // deserialize our properties
        objectState.enable(false);
        _super.prototype.fromJsonValue.call(this, objectState, json, obj, opt);
        objectState.enable(true);
        if (opt.persisting) {
            objectState.setPersistent();
        }
        else if (!opt.onlyMetadata) {
            objectState.setDirty();
        }
        return obj;
    };
    /**
     * Converts the given object to json
     * @param state The root object state
     * @param object The object to convert
     * @param [options=false] to json options by default excludes the metadata
     * @param [options.excludeMetadata=false] Excludes the metadata form the serialized json
     * @param [options.depth=0] Includes up to depth referenced objects into the serialized json
     * @param [options.persisting=false] indicates if the current state will be persisted.
     *  Used to update the internal change tracking state of collections and mark the object persistent if its true
     * @return JSON-Object
     */
    EntityType.prototype.toJsonValue = function (state, object, options) {
        var _a = options || {}, _b = _a.depth, depth = _b === void 0 ? 0 : _b, _c = _a.persisting, persisting = _c === void 0 ? false : _c;
        var isInDepth = depth === true || depth > -1;
        // check if object is already loaded in state
        var objectState = object && intersection_1.Metadata.get(object);
        if (isInDepth && objectState && objectState.isAvailable) {
            // serialize our properties
            objectState.enable(false);
            var json = _super.prototype.toJsonValue.call(this, objectState, object, __assign(__assign({}, options), { persisting: persisting, depth: typeof depth === 'boolean' ? depth : depth - 1 }));
            objectState.enable(true);
            return json;
        }
        if (state.db && object instanceof this.typeConstructor) {
            object.attach(state.db);
            return object.id;
        }
        return null;
    };
    EntityType.prototype.toString = function () {
        return "EntityType(" + this.ref + ")";
    };
    EntityType.prototype.toJSON = function () {
        var _a = _super.prototype.toJSON.call(this), acl = _a.acl, json = __rest(_a, ["acl"]);
        return __assign(__assign({}, json), { acl: __assign(__assign({}, acl), { schemaSubclass: this.schemaSubclassPermission.toJSON(), load: this.loadPermission.toJSON(), insert: this.insertPermission.toJSON(), update: this.updatePermission.toJSON(), delete: this.deletePermission.toJSON(), query: this.queryPermission.toJSON() }) });
    };
    EntityType.Object = /** @class */ (function (_super) {
        __extends(ObjectType, _super);
        function ObjectType() {
            var _this = _super.call(this, EntityType.Object.ref, null, Object) || this;
            _this.declaredId = new /** @class */ (function (_super) {
                __extends(class_1, _super);
                function class_1() {
                    return _super.call(this, 'id', BasicType_1.BasicType.String, true) || this;
                }
                class_1.prototype.getJsonValue = function (state) {
                    return state.id || undefined;
                };
                class_1.prototype.setJsonValue = function (state, object, jsonValue) {
                    if (!state.id) {
                        // eslint-disable-next-line no-param-reassign
                        state.id = jsonValue;
                    }
                };
                return class_1;
            }(SingularAttribute_1.SingularAttribute))();
            _this.declaredId.init(_this, 0);
            _this.declaredId.isId = true;
            _this.declaredVersion = new /** @class */ (function (_super) {
                __extends(class_2, _super);
                function class_2() {
                    return _super.call(this, 'version', BasicType_1.BasicType.Integer, true) || this;
                }
                class_2.prototype.getJsonValue = function (state) {
                    return state.version || undefined;
                };
                class_2.prototype.setJsonValue = function (state, object, jsonValue) {
                    if (jsonValue) {
                        // eslint-disable-next-line no-param-reassign
                        state.version = jsonValue;
                    }
                };
                return class_2;
            }(SingularAttribute_1.SingularAttribute))();
            _this.declaredVersion.init(_this, 1);
            _this.declaredVersion.isVersion = true;
            _this.declaredAcl = new /** @class */ (function (_super) {
                __extends(class_3, _super);
                function class_3() {
                    return _super.call(this, 'acl', BasicType_1.BasicType.JsonObject, true) || this;
                }
                class_3.prototype.getJsonValue = function (state, object, options) {
                    var persisted = Attribute_1.Attribute.attachState(object, {});
                    var persistedAcl = persisted.acl || {};
                    var acl = state.acl.toJSON();
                    var unchanged = Object.keys(acl).every(function (permission) {
                        var oldPermission = (persistedAcl[permission] || {});
                        var newPermission = acl[permission];
                        var newKeys = Object.keys(newPermission);
                        var oldKeys = Object.keys(oldPermission);
                        return newKeys.length === oldKeys.length
                            && newKeys.every(function (ref) { return oldPermission[ref] === newPermission[ref]; });
                    });
                    if (!unchanged) {
                        state.setDirty();
                    }
                    if (options.persisting) {
                        persisted.acl = acl;
                    }
                    return acl;
                };
                class_3.prototype.setJsonValue = function (state, object, jsonValue, options) {
                    var acl = (jsonValue || {});
                    if (options.persisting) {
                        var persistedState = Attribute_1.Attribute.attachState(object, {});
                        persistedState.acl = acl;
                    }
                    state.acl.fromJSON(acl);
                };
                return class_3;
            }(SingularAttribute_1.SingularAttribute))();
            _this.declaredAcl.init(_this, 2);
            _this.declaredAcl.isAcl = true;
            _this.declaredAttributes = [_this.declaredId, _this.declaredVersion, _this.declaredAcl];
            return _this;
        }
        Object.defineProperty(ObjectType, "ref", {
            get: function () {
                return '/db/Object';
            },
            enumerable: false,
            configurable: true
        });
        ObjectType.prototype.createProxyClass = function () {
            return _super.prototype.createProxyClass.call(this);
        };
        ObjectType.prototype.fromJsonValue = function (state, jsonObject, currentObject, options) {
            return _super.prototype.fromJsonValue.call(this, state, jsonObject, currentObject, options);
        };
        ObjectType.prototype.createObjectFactory = function () {
            throw new Error("Objects can't be directly created and persisted");
        };
        return ObjectType;
    }(EntityType));
    return EntityType;
}(ManagedType_1.ManagedType));
exports.EntityType = EntityType;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRW50aXR5VHlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9tZXRhbW9kZWwvRW50aXR5VHlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0RBQWdEO0FBQ2hELHNDQUVvQjtBQUdwQiw2Q0FBNEM7QUFDNUMsK0JBQXlDO0FBQ3pDLHlDQUF3QztBQUN4Qyx5REFBd0Q7QUFHeEQscURBQW9EO0FBQ3BELHlDQUF3QztBQUN4QyxnREFBcUU7QUFFckU7SUFBa0QsOEJBQWM7SUFxSjlEOzs7O09BSUc7SUFDSCxvQkFBWSxHQUFXLEVBQUUsU0FBMEIsRUFBRSxlQUEwQjtRQUEvRSxZQUNFLGtCQUFNLEdBQUcsRUFBRSxlQUFlLENBQUMsU0FFNUI7UUE3Q00sZ0JBQVUsR0FBcUMsSUFBSSxDQUFDO1FBRXBELHFCQUFlLEdBQXFDLElBQUksQ0FBQztRQUV6RCxpQkFBVyxHQUFrQyxJQUFJLENBQUM7UUFFbEQsb0JBQWMsR0FBZSxJQUFJLHlCQUFVLEVBQUUsQ0FBQztRQUU5QyxzQkFBZ0IsR0FBZSxJQUFJLHlCQUFVLEVBQUUsQ0FBQztRQUVoRCxzQkFBZ0IsR0FBZSxJQUFJLHlCQUFVLEVBQUUsQ0FBQztRQUVoRCxxQkFBZSxHQUFlLElBQUkseUJBQVUsRUFBRSxDQUFDO1FBRS9DLDhCQUF3QixHQUFlLElBQUkseUJBQVUsRUFBRSxDQUFDO1FBRXhELHNCQUFnQixHQUFlLElBQUkseUJBQVUsRUFBRSxDQUFDO1FBNEJyRCxLQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQzs7SUFDN0IsQ0FBQztJQXhCRCxzQkFBSSx1Q0FBZTtRQUhuQjs7V0FFRzthQUNIO1lBQ0UsT0FBTyxzQkFBZSxDQUFDLE1BQU0sQ0FBQztRQUNoQyxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLDBCQUFFO2FBQU47WUFDRSxPQUFPLElBQUksQ0FBQyxVQUFVLElBQUksSUFB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
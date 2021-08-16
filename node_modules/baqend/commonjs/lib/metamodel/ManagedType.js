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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManagedType = void 0;
var Type_1 = require("./Type");
var binding_1 = require("../binding");
var intersection_1 = require("../intersection");
var ManagedType = /** @class */ (function (_super) {
    __extends(ManagedType, _super);
    /**
     * @param ref or full class name
     * @param typeConstructor The type constructor of the managed lass
     */
    function ManagedType(ref, typeConstructor) {
        var _this = _super.call(this, ref.indexOf('/db/') !== 0 ? "/db/" + ref : ref, typeConstructor) || this;
        _this.enhancer = null;
        _this.declaredAttributes = [];
        _this.schemaAddPermission = new intersection_1.Permission();
        _this.schemaReplacePermission = new intersection_1.Permission();
        _this.metadata = null;
        _this.superType = null;
        _this._validationCode = null;
        return _this;
    }
    Object.defineProperty(ManagedType.prototype, "validationCode", {
        /**
         * @type Function
         */
        get: function () {
            return this._validationCode;
        },
        /**
         * @param code
         */
        set: function (code) {
            this._validationCode = code;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ManagedType.prototype, "typeConstructor", {
        /**
         * The Managed class
         */
        get: function () {
            if (!this._typeConstructor) {
                this.typeConstructor = this.createProxyClass();
            }
            return this._typeConstructor;
        },
        /**
         * The Managed class constructor
         * @param typeConstructor The managed class constructor
         */
        set: function (typeConstructor) {
            if (this._typeConstructor) {
                throw new Error('Type constructor has already been set.');
            }
            var isEntity = typeConstructor.prototype instanceof binding_1.Entity;
            if (this.isEntity) {
                if (!isEntity) {
                    throw new TypeError('Entity classes must extends the Entity class.');
                }
            }
            else if (!(typeConstructor.prototype instanceof binding_1.Managed) || isEntity) {
                throw new TypeError('Embeddable classes must extends the Managed class.');
            }
            this.enhancer.enhance(this, typeConstructor);
            this._typeConstructor = typeConstructor;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Initialize this type
     * @param enhancer The class enhancer used to instantiate an instance of this managed class
     */
    ManagedType.prototype.init = function (enhancer) {
        this.enhancer = enhancer;
        if (this._typeConstructor && !binding_1.Enhancer.getIdentifier(this._typeConstructor)) {
            binding_1.Enhancer.setIdentifier(this._typeConstructor, this.ref);
        }
    };
    /**
     * Creates a new instance of the managed type, without invoking any constructors
     *
     * This method is used to create object instances which are loaded form the backend.
     *
     * @return The created instance
     */
    ManagedType.prototype.create = function () {
        var instance = Object.create(this.typeConstructor.prototype);
        binding_1.Managed.init(instance);
        return instance;
    };
    /**
     * An iterator which returns all attributes declared by this type and inherited form all super types
     * @return
     */
    ManagedType.prototype.attributes = function () {
        var _a;
        var iter;
        var index = 0;
        var type = this;
        if (this.superType) {
            iter = this.superType.attributes();
        }
        return _a = {},
            _a[Symbol.iterator] = function () {
                return this;
            },
            _a.next = function () {
                if (iter) {
                    var item = iter.next();
                    if (!item.done) {
                        return item;
                    }
                    iter = null;
                }
                if (index < type.declaredAttributes.length) {
                    var value = type.declaredAttributes[index];
                    index += 1;
                    return { value: value, done: false };
                }
                return { done: true, value: undefined };
            },
            _a;
    };
    /**
     * Adds an attribute to this type
     * @param attr The attribute to add
     * @param order Position of the attribute
     * @return
     */
    ManagedType.prototype.addAttribute = function (attr, order) {
        if (this.getAttribute(attr.name)) {
            throw new Error("An attribute with the name " + attr.name + " is already declared.");
        }
        var initOrder;
        if (!attr.order) {
            initOrder = typeof order === 'undefined' ? this.declaredAttributes.length : order;
        }
        else {
            initOrder = attr.order;
        }
        attr.init(this, initOrder);
        this.declaredAttributes.push(attr);
        if (this._typeConstructor && this.name !== 'Object') {
            this.enhancer.enhanceProperty(this._typeConstructor, attr);
        }
    };
    /**
     * Removes an attribute from this type
     * @param name The Name of the attribute which will be removed
     * @return
     */
    ManagedType.prototype.removeAttribute = function (name) {
        var length = this.declaredAttributes.length;
        this.declaredAttributes = this.declaredAttributes.filter(function (val) { return val.name !== name; });
        if (length === this.declaredAttributes.length) {
            throw new Error("An Attribute with the name " + name + " is not declared.");
        }
    };
    /**
     * @param name
     * @return
     */
    ManagedType.prototype.getAttribute = function (name) {
        var attr = this.getDeclaredAttribute(name);
        if (!attr && this.superType) {
            attr = this.superType.getAttribute(name);
        }
        return attr;
    };
    /**
     * @param val Name or order of the attribute
     * @return
     */
    ManagedType.prototype.getDeclaredAttribute = function (val) {
        return this.declaredAttributes.filter(function (attr) { return attr.name === val || attr.order === val; })[0] || null;
    };
    /**
     * @inheritDoc
     */
    ManagedType.prototype.fromJsonValue = function (state, jsonObject, currentObject, options) {
        if (!jsonObject || !currentObject) {
            return null;
        }
        var iter = this.attributes();
        for (var el = iter.next(); !el.done; el = iter.next()) {
            var attribute = el.value;
            if (!options.onlyMetadata || attribute.isMetadata) {
                attribute.setJsonValue(state, currentObject, jsonObject[attribute.name], options);
            }
        }
        return currentObject;
    };
    /**
     * @inheritDoc
     */
    ManagedType.prototype.toJsonValue = function (state, object, options) {
        if (!(object instanceof this.typeConstructor)) {
            return null;
        }
        var value = {};
        var iter = this.attributes();
        for (var el = iter.next(); !el.done; el = iter.next()) {
            var attribute = el.value;
            if (!options.excludeMetadata || !attribute.isMetadata) {
                value[attribute.name] = attribute.getJsonValue(state, object, options);
            }
        }
        return value;
    };
    /**
     * Converts ths type schema to json
     * @return
     */
    ManagedType.prototype.toJSON = function () {
        var fields = {};
        this.declaredAttributes.forEach(function (attribute) {
            if (!attribute.isMetadata) {
                fields[attribute.name] = attribute;
            }
        });
        return __assign(__assign(__assign({ class: this.ref, fields: fields, acl: {
                schemaAdd: this.schemaAddPermission.toJSON(),
                schemaReplace: this.schemaReplacePermission.toJSON(),
            } }, (this.superType && { superClass: this.superType.ref })), (this.isEmbeddable && { embedded: true })), (this.metadata && { metadata: this.metadata }));
    };
    /**
     * Returns iterator to get all referenced entities
     * @return
     */
    ManagedType.prototype.references = function () {
        var _a;
        var attributes = this.attributes();
        var attribute;
        var embeddedAttributes;
        return _a = {},
            _a[Symbol.iterator] = function () {
                return this;
            },
            _a.next = function () {
                for (;;) {
                    if (embeddedAttributes) {
                        var item_1 = embeddedAttributes.next();
                        if (!item_1.done) {
                            return { value: { path: [attribute.name].concat(item_1.value.path) } };
                        }
                        embeddedAttributes = null;
                    }
                    var item = attributes.next();
                    if (item.done) {
                        // currently TS requires a undefined value here https://github.com/microsoft/TypeScript/issues/38479
                        return { done: true, value: undefined };
                    }
                    attribute = item.value;
                    var type = attribute.isCollection
                        ? attribute.elementType
                        : attribute.type;
                    if (type.isEntity) {
                        return { value: { path: [attribute.name] } };
                    }
                    if (type.isEmbeddable) {
                        embeddedAttributes = type.references();
                    }
                }
            },
            _a;
    };
    /**
     * Retrieves whether this type has specific metadata
     *
     * @param key
     * @return
     */
    ManagedType.prototype.hasMetadata = function (key) {
        return !!this.metadata && !!this.metadata[key];
    };
    /**
     * Gets some metadata of this type
     *
     * @param key
     * @return
     */
    ManagedType.prototype.getMetadata = function (key) {
        if (!this.hasMetadata(key)) {
            return null;
        }
        return this.metadata[key];
    };
    return ManagedType;
}(Type_1.Type));
exports.ManagedType = ManagedType;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWFuYWdlZFR5cGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9saWIvbWV0YW1vZGVsL01hbmFnZWRUeXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0JBQThCO0FBRTlCLHNDQUVvQjtBQU9wQixnREFBMkQ7QUFFM0Q7SUFBNkQsK0JBQU87SUE2RGxFOzs7T0FHRztJQUNILHFCQUFZLEdBQVcsRUFBRSxlQUEwQjtRQUFuRCxZQUNFLGtCQUFNLEdBQUcsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFPLEdBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLGVBQWUsQ0FBQyxTQUN2RTtRQWxFTSxjQUFRLEdBQW9CLElBQUksQ0FBQztRQUVqQyx3QkFBa0IsR0FBcUIsRUFBRSxDQUFDO1FBRTFDLHlCQUFtQixHQUFlLElBQUkseUJBQVUsRUFBRSxDQUFDO1FBRW5ELDZCQUF1QixHQUFlLElBQUkseUJBQVUsRUFBRSxDQUFDO1FBRXZELGNBQVEsR0FBcUMsSUFBSSxDQUFDO1FBRWxELGVBQVMsR0FBMkIsSUFBSSxDQUFDO1FBRXpDLHFCQUFlLEdBQW9CLElBQUksQ0FBQzs7SUFzRC9DLENBQUM7SUFqREQsc0JBQUksdUNBQWM7UUFIbEI7O1dBRUc7YUFDSDtZQUNFLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQztRQUM5QixDQUFDO1FBRUQ7O1dBRUc7YUFDSCxVQUFtQixJQUFxQjtZQUN0QyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztRQUM5QixDQUFDOzs7T0FQQTtJQVlELHNCQUFJLHdDQUFlO1FBSG5COztXQUVHO2FBQ0g7WUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFO2dCQUMxQixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO2FBQ2hEO1lBQ0Qs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
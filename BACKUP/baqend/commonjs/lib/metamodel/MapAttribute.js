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
exports.MapAttribute = void 0;
var PluralAttribute_1 = require("./PluralAttribute");
var Attribute_1 = require("./Attribute");
var error_1 = require("../error");
var MapAttribute = /** @class */ (function (_super) {
    __extends(MapAttribute, _super);
    /**
     * @param name
     * @param keyType
     * @param elementType
     */
    function MapAttribute(name, keyType, elementType) {
        var _this = _super.call(this, name, Map, elementType) || this;
        _this.keyType = keyType;
        return _this;
    }
    Object.defineProperty(MapAttribute, "ref", {
        /**
         * Get the type id for this map type
         * @return
         */
        get: function () {
            return '/db/collection.Map';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MapAttribute.prototype, "collectionType", {
        /**
         * @inheritDoc
         */
        get: function () {
            return PluralAttribute_1.CollectionType.MAP;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * @inheritDoc
     */
    MapAttribute.prototype.getJsonValue = function (state, object, options) {
        var value = this.getValue(object);
        if (!(value instanceof this.typeConstructor)) {
            return null;
        }
        var persisting = {};
        var persistedState = Attribute_1.Attribute.attachState(value) || {};
        var changed = Attribute_1.Attribute.attachSize(value) !== value.size;
        var json = {};
        var iter = value.entries();
        for (var el = iter.next(); !el.done; el = iter.next()) {
            var entry = el.value;
            if (entry[0] === null || entry[0] === undefined) {
                throw new error_1.PersistentError('Map keys can\'t be null nor undefined.');
            }
            var jsonKey = this.keyValue(this.keyType.toJsonValue(state, entry[0], options));
            json[jsonKey] = this.elementType.toJsonValue(state, entry[1], options);
            persisting[jsonKey] = [entry[0], entry[1]];
            changed = changed || (persistedState[jsonKey] || [])[1] !== entry[1];
        }
        if (options.persisting) {
            Attribute_1.Attribute.attachState(value, persisting, true);
            Attribute_1.Attribute.attachSize(value, value.size);
        }
        if (changed) {
            state.setDirty();
        }
        return json;
    };
    /**
     * @inheritDoc
     */
    MapAttribute.prototype.setJsonValue = function (state, object, json, options) {
        var value = null;
        if (json) {
            value = this.getValue(object);
            if (!(value instanceof this.typeConstructor)) {
                // eslint-disable-next-line new-cap
                value = new this.typeConstructor();
            }
            var persisting = {};
            var persistedState = Attribute_1.Attribute.attachState(value) || {};
            value.clear();
            var jsonKeys = Object.keys(json);
            for (var i = 0, len = jsonKeys.length; i < len; i += 1) {
                var jsonKey = jsonKeys[i];
                var persistedEntry = persistedState[jsonKey] || [];
                // ensures that "false" keys will be converted to false, disallow null as keys
                var key = this.keyType.fromJsonValue(state, jsonKey, persistedEntry[0], options);
                var val = this.elementType.fromJsonValue(state, json[jsonKey], persistedEntry[1], options);
                persisting[jsonKey] = [key, val];
                value.set(key, val);
            }
            if (options.persisting) {
                Attribute_1.Attribute.attachState(value, persisting, true);
                Attribute_1.Attribute.attachSize(value, value.size);
            }
        }
        this.setValue(object, value);
    };
    /**
     * @inheritDoc
     */
    MapAttribute.prototype.toJSON = function () {
        return __assign({ type: MapAttribute.ref + "[" + this.keyType.ref + "," + this.elementType.ref + "]" }, _super.prototype.toJSON.call(this));
    };
    return MapAttribute;
}(PluralAttribute_1.PluralAttribute));
exports.MapAttribute = MapAttribute;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWFwQXR0cmlidXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbGliL21ldGFtb2RlbC9NYXBBdHRyaWJ1dGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxREFBb0U7QUFDcEUseUNBQXdDO0FBQ3hDLGtDQUEyQztBQU0zQztJQUF3QyxnQ0FBMkM7SUFrQmpGOzs7O09BSUc7SUFDSCxzQkFBWSxJQUFZLEVBQUUsT0FBZ0IsRUFBRSxXQUFvQjtRQUFoRSxZQUNFLGtCQUFNLElBQUksRUFBRSxHQUFHLEVBQUUsV0FBVyxDQUFDLFNBRTlCO1FBREMsS0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7O0lBQ3pCLENBQUM7SUFuQkQsc0JBQVcsbUJBQUc7UUFKZDs7O1dBR0c7YUFDSDtZQUNFLE9BQU8sb0JBQW9CLENBQUM7UUFDOUIsQ0FBQzs7O09BQUE7SUFLRCxzQkFBSSx3Q0FBYztRQUhsQjs7V0FFRzthQUNIO1lBQ0UsT0FBTyxnQ0FBYyxDQUFDLEdBQUcsQ0FBQztRQUM1QixDQUFDOzs7T0FBQTtJQVlEOztPQUVHO0lBQ0gsbUNBQVksR0FBWixVQUFhLEtBQW1CLEVBQUUsTUFBZSxFQUMvQyxPQUFxRjtRQUNyRixJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRXBDLElBQUksQ0FBQyxDQUFDLEtBQUssWUFBWSxJQUFJLENBQUMsZUFBZSxDQUFDLEVBQUU7WUFDNUMsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUVELElBQU0sVUFBVSxHQUE0QyxFQUFFLENBQUM7UUFDL0QsSUFBTSxjQUFjLEdBQTRDLHFCQUFTLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNuRyxJQUFJLE9BQU8sR0FBRyxxQkFBUyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxLQUFLLENBQUMsSUFBSSxDQUFD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
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
exports.SetAttribute = void 0;
var PluralAttribute_1 = require("./PluralAttribute");
var Attribute_1 = require("./Attribute");
var SetAttribute = /** @class */ (function (_super) {
    __extends(SetAttribute, _super);
    /**
     * @param name The name of the attribute
     * @param elementType The element type of the collection
     */
    function SetAttribute(name, elementType) {
        return _super.call(this, name, Set, elementType) || this;
    }
    Object.defineProperty(SetAttribute, "ref", {
        /**
         * Get the type id for this set type
         * @return
         */
        get: function () {
            return '/db/collection.Set';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SetAttribute.prototype, "collectionType", {
        /**
         * @inheritDoc
         */
        get: function () {
            return PluralAttribute_1.CollectionType.SET;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * @inheritDoc
     */
    SetAttribute.prototype.getJsonValue = function (state, object, options) {
        var value = this.getValue(object);
        if (!(value instanceof this.typeConstructor)) {
            return null;
        }
        var persisting = {};
        var persistedState = Attribute_1.Attribute.attachState(value) || {};
        var changed = Attribute_1.Attribute.attachSize(value) !== value.size;
        var json = [];
        var iter = value.values();
        for (var item = iter.next(); !item.done; item = iter.next()) {
            var el = item.value;
            var jsonValue = this.elementType.toJsonValue(state, el, options);
            json.push(jsonValue);
            var keyValue = this.keyValue(jsonValue);
            persisting[keyValue] = el;
            changed = changed || persistedState[keyValue] !== el;
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
    SetAttribute.prototype.setJsonValue = function (state, object, json, options) {
        var value = null;
        if (json) {
            value = this.getValue(object);
            if (!(value instanceof this.typeConstructor)) {
                value = new this.typeConstructor(); // eslint-disable-line new-cap
            }
            var persisting = {};
            var persistedState = Attribute_1.Attribute.attachState(value) || {};
            value.clear();
            for (var i = 0, len = json.length; i < len; i += 1) {
                var jsonValue = json[i];
                var keyValue = this.keyValue(jsonValue);
                var el = this.elementType.fromJsonValue(state, jsonValue, persistedState[keyValue], options);
                value.add(el);
                persisting[keyValue] = el;
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
    SetAttribute.prototype.toJSON = function () {
        return __assign({ type: SetAttribute.ref + "[" + this.elementType.ref + "]" }, _super.prototype.toJSON.call(this));
    };
    return SetAttribute;
}(PluralAttribute_1.PluralAttribute));
exports.SetAttribute = SetAttribute;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2V0QXR0cmlidXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbGliL21ldGFtb2RlbC9TZXRBdHRyaWJ1dGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxREFBb0U7QUFDcEUseUNBQXdDO0FBTXhDO0lBQXFDLGdDQUFpQztJQWdCcEU7OztPQUdHO0lBQ0gsc0JBQVksSUFBWSxFQUFFLFdBQW9CO2VBQzVDLGtCQUFNLElBQUksRUFBRSxHQUFHLEVBQUUsV0FBVyxDQUFDO0lBQy9CLENBQUM7SUFqQkQsc0JBQVcsbUJBQUc7UUFKZDs7O1dBR0c7YUFDSDtZQUNFLE9BQU8sb0JBQW9CLENBQUM7UUFDOUIsQ0FBQzs7O09BQUE7SUFLRCxzQkFBSSx3Q0FBYztRQUhsQjs7V0FFRzthQUNIO1lBQ0UsT0FBTyxnQ0FBYyxDQUFDLEdBQUcsQ0FBQztRQUM1QixDQUFDOzs7T0FBQTtJQVVEOztPQUVHO0lBQ0gsbUNBQVksR0FBWixVQUFhLEtBQW1CLEVBQUUsTUFBZSxFQUMvQyxPQUFxRjtRQUNyRixJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRXBDLElBQUksQ0FBQyxDQUFDLEtBQUssWUFBWSxJQUFJLENBQUMsZUFBZSxDQUFDLEVBQUU7WUFDNUMsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUVELElBQU0sVUFBVSxHQUFnQyxFQUFFLENBQUM7UUFDbkQsSUFBTSxjQUFjLEdBQVkscUJBQVMsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ25FLElBQUksT0FBTyxHQUFHLHFCQUFTLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLEtBQUssQ0FBQyxJQUFJLENBQUM7UUFFekQsSUFBTSxJQUFJLEdBQWMsRUFBRSxDQUFDO1FBQzNCLElBQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUs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
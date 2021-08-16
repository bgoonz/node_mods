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
exports.ListAttribute = void 0;
var PluralAttribute_1 = require("./PluralAttribute");
var Attribute_1 = require("./Attribute");
var ListAttribute = /** @class */ (function (_super) {
    __extends(ListAttribute, _super);
    /**
     * @param name
     * @param elementType
     */
    function ListAttribute(name, elementType) {
        return _super.call(this, name, Array, elementType) || this;
    }
    Object.defineProperty(ListAttribute, "ref", {
        /**
         * Get the type id for this list type
         */
        get: function () {
            return '/db/collection.List';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ListAttribute.prototype, "collectionType", {
        /**
         * @inheritDoc
         */
        get: function () {
            return PluralAttribute_1.CollectionType.LIST;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * @inheritDoc
     */
    ListAttribute.prototype.getJsonValue = function (state, object, options) {
        var value = this.getValue(object);
        if (!(value instanceof this.typeConstructor)) {
            return null;
        }
        var len = value.length;
        var persisting = new Array(len);
        var attachedState = Attribute_1.Attribute.attachState(value);
        var persistedState = attachedState || [];
        var changed = !attachedState || attachedState.length !== len;
        var json = new Array(len);
        for (var i = 0; i < len; i += 1) {
            var el = value[i];
            json[i] = this.elementType.toJsonValue(state, el, options);
            persisting[i] = el;
            changed = changed || persistedState[i] !== el;
        }
        if (options.persisting) {
            Attribute_1.Attribute.attachState(value, persisting, true);
        }
        if (changed) {
            state.setDirty();
        }
        return json;
    };
    /**
     * @inheritDoc
     */
    ListAttribute.prototype.setJsonValue = function (state, object, json, options) {
        var value = null;
        if (json) {
            value = this.getValue(object);
            var len = json.length;
            if (!(value instanceof this.typeConstructor)) {
                value = new this.typeConstructor(len); // eslint-disable-line new-cap
            }
            var persisting = new Array(len);
            var persistedState = Attribute_1.Attribute.attachState(value) || [];
            // clear additional items
            if (len < value.length) {
                value.splice(len, value.length - len);
            }
            for (var i = 0; i < len; i += 1) {
                var el = this.elementType.fromJsonValue(state, json[i], persistedState[i], options);
                value[i] = el;
                persisting[i] = el;
            }
            if (options.persisting) {
                Attribute_1.Attribute.attachState(value, persisting, true);
            }
        }
        this.setValue(object, value);
    };
    /**
     * @inheritDoc
     */
    ListAttribute.prototype.toJSON = function () {
        return __assign({ type: ListAttribute.ref + "[" + this.elementType.ref + "]" }, _super.prototype.toJSON.call(this));
    };
    return ListAttribute;
}(PluralAttribute_1.PluralAttribute));
exports.ListAttribute = ListAttribute;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGlzdEF0dHJpYnV0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9tZXRhbW9kZWwvTGlzdEF0dHJpYnV0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFEQUFvRTtBQUNwRSx5Q0FBd0M7QUFNeEM7SUFBc0MsaUNBQW1DO0lBZXZFOzs7T0FHRztJQUNILHVCQUFZLElBQVksRUFBRSxXQUFvQjtlQUM1QyxrQkFBTSxJQUFJLEVBQUUsS0FBSyxFQUFFLFdBQVcsQ0FBQztJQUNqQyxDQUFDO0lBakJELHNCQUFXLG9CQUFHO1FBSGQ7O1dBRUc7YUFDSDtZQUNFLE9BQU8scUJBQXFCLENBQUM7UUFDL0IsQ0FBQzs7O09BQUE7SUFLRCxzQkFBSSx5Q0FBYztRQUhsQjs7V0FFRzthQUNIO1lBQ0UsT0FBTyxnQ0FBYyxDQUFDLElBQUksQ0FBQztRQUM3QixDQUFDOzs7T0FBQTtJQVVEOztPQUVHO0lBQ0gsb0NBQVksR0FBWixVQUFhLEtBQW1CLEVBQUUsTUFBZSxFQUMvQyxPQUFxRjtRQUNyRixJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRXBDLElBQUksQ0FBQyxDQUFDLEtBQUssWUFBWSxJQUFJLENBQUMsZUFBZSxDQUFDLEVBQUU7WUFDNUMsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUVELElBQU0sR0FBRyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUM7UUFDekIsSUFBTSxVQUFVLEdBQWlCLElBQUksS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2hELElBQU0sYUFBYSxHQUFzQixxQkFBUyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN0RSxJQUFNLGNBQWMsR0FBRyxhQUFhLElBQUksRUFBRSxDQUFDO1FBRTNDLElBQUksT0FBTyxHQUFHLENBQUMsYUFBYSxJQUFJLGFBQWEsQ0FBQyxNQUFNLEtBQUss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
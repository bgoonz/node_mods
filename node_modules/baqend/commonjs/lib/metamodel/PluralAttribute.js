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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PluralAttribute = exports.CollectionType = void 0;
var Attribute_1 = require("./Attribute");
var CollectionType;
(function (CollectionType) {
    CollectionType[CollectionType["COLLECTION"] = 0] = "COLLECTION";
    CollectionType[CollectionType["LIST"] = 1] = "LIST";
    CollectionType[CollectionType["MAP"] = 2] = "MAP";
    CollectionType[CollectionType["SET"] = 3] = "SET";
})(CollectionType = exports.CollectionType || (exports.CollectionType = {}));
var PluralAttribute = /** @class */ (function (_super) {
    __extends(PluralAttribute, _super);
    /**
     * @param name - The attribute name
     * @param typeConstructor - The collection constructor of the attribute
     * @param elementType - The type of the elements of the attribute collection
     */
    function PluralAttribute(name, typeConstructor, elementType) {
        var _this = _super.call(this, name) || this;
        _this.elementType = elementType;
        _this.typeConstructor = typeConstructor;
        return _this;
    }
    Object.defineProperty(PluralAttribute.prototype, "persistentAttributeType", {
        /**
         * @inheritDoc
         */
        get: function () {
            return Attribute_1.PersistentAttributeType.ELEMENT_COLLECTION;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Retrieves a serialized string value of the given json which can be used as object keys
     * @param json The json of which the key should be retrieved
     * @return A serialized version of the json
     */
    PluralAttribute.prototype.keyValue = function (json) {
        if (json && typeof json === 'object' && 'id' in json) {
            return String(json.id);
        }
        return String(json);
    };
    PluralAttribute.CollectionType = CollectionType;
    return PluralAttribute;
}(Attribute_1.Attribute));
exports.PluralAttribute = PluralAttribute;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGx1cmFsQXR0cmlidXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbGliL21ldGFtb2RlbC9QbHVyYWxBdHRyaWJ1dGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEseUNBQWlFO0FBRWpFLElBQVksY0FLWDtBQUxELFdBQVksY0FBYztJQUN4QiwrREFBYyxDQUFBO0lBQ2QsbURBQVEsQ0FBQTtJQUNSLGlEQUFPLENBQUE7SUFDUCxpREFBTyxDQUFBO0FBQ1QsQ0FBQyxFQUxXLGNBQWMsR0FBZCxzQkFBYyxLQUFkLHNCQUFjLFFBS3pCO0FBRUQ7SUFBb0QsbUNBQVk7SUFtQjlEOzs7O09BSUc7SUFDSCx5QkFBc0IsSUFBWSxFQUFFLGVBQXlCLEVBQUUsV0FBb0I7UUFBbkYsWUFDRSxrQkFBTSxJQUFJLENBQUMsU0FHWjtRQUZDLEtBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBQy9CLEtBQUksQ0FBQyxlQUFlLEdBQUcsZUFBZSxDQUFDOztJQUN6QyxDQUFDO0lBYkQsc0JBQUksb0RBQXVCO1FBSDNCOztXQUVHO2FBQ0g7WUFDRSxPQUFPLG1DQUF1QixDQUFDLGtCQUFrQixDQUFDO1FBQ3BELENBQUM7OztPQUFBO0lBYUQ7Ozs7T0FJRztJQUNPLGtDQUFRLEdBQWxCLFVBQW1CLElBQVU7UUFDM0IsSUFBSSxJQUFJLElBQUksT0FBTyxJQUFJLEtBQUssUUFBUSxJQUFJLElBQUksSUFBSSxJQUFJLEVBQUU7WUFDcEQsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ3hCO1FBRUQsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdEIsQ0FBQztJQXhDc0IsOEJBQWMsR0FBRyxjQUFjLENBQUM7SUF5Q3pELHNCQUFDO0NBQUEsQUExQ0QsQ0FBb0QscUJBQVMsR0EwQzVEO0FBMUNxQiwwQ0FBZSJ9
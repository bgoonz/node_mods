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
exports.CollectionAttribute = void 0;
var PluralAttribute_1 = require("./PluralAttribute");
var CollectionAttribute = /** @class */ (function (_super) {
    __extends(CollectionAttribute, _super);
    /**
     * @param name - the name of the attribute
     * @param typeConstructor - The collection constructor of the attribute
     * @param elementType - The element type of the collection
     */
    function CollectionAttribute(name, typeConstructor, elementType) {
        var _this = _super.call(this, name, typeConstructor, elementType) || this;
        _this = _super.call(this, name, typeConstructor, elementType) || this;
        return _this;
    }
    Object.defineProperty(CollectionAttribute.prototype, "collectionType", {
        /**
         * @inheritDoc
         */
        get: function () {
            return PluralAttribute_1.CollectionType.COLLECTION;
        },
        enumerable: false,
        configurable: true
    });
    return CollectionAttribute;
}(PluralAttribute_1.PluralAttribute));
exports.CollectionAttribute = CollectionAttribute;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29sbGVjdGlvbkF0dHJpYnV0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9tZXRhbW9kZWwvQ29sbGVjdGlvbkF0dHJpYnV0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxREFBb0U7QUFJcEU7SUFBd0QsdUNBQXFCO0lBUTNFOzs7O09BSUc7SUFDSCw2QkFBc0IsSUFBWSxFQUFFLGVBQXlCLEVBQUUsV0FBb0I7UUFBbkYsWUFDRSxrQkFBTSxJQUFJLEVBQUUsZUFBZSxFQUFFLFdBQVcsQ0FBQyxTQUUxQztRQURDLFFBQUEsa0JBQU0sSUFBSSxFQUFFLGVBQWUsRUFBRSxXQUFXLENBQUMsU0FBQzs7SUFDNUMsQ0FBQztJQVpELHNCQUFJLCtDQUFjO1FBSGxCOztXQUVHO2FBQ0g7WUFDRSxPQUFPLGdDQUFjLENBQUMsVUFBVSxDQUFDO1FBQ25DLENBQUM7OztPQUFBO0lBV0gsMEJBQUM7QUFBRCxDQUFDLEFBakJELENBQXdELGlDQUFlLEdBaUJ0RTtBQWpCcUIsa0RBQW1CIn0=
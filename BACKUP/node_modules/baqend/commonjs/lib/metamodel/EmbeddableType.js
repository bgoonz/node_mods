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
exports.EmbeddableType = void 0;
var ManagedType_1 = require("./ManagedType");
var Type_1 = require("./Type");
var binding_1 = require("../binding");
var EmbeddableType = /** @class */ (function (_super) {
    __extends(EmbeddableType, _super);
    function EmbeddableType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(EmbeddableType.prototype, "persistenceType", {
        /**
         * @inheritDoc
         */
        get: function () {
            return Type_1.PersistenceType.EMBEDDABLE;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * @inheritDoc
     */
    EmbeddableType.prototype.createProxyClass = function () {
        return this.enhancer.createProxy(binding_1.Managed);
    };
    /**
     * @inheritDoc
     */
    EmbeddableType.prototype.createObjectFactory = function (db) {
        return binding_1.ManagedFactory.create(this, db);
    };
    /**
     * @inheritDoc
     */
    EmbeddableType.prototype.fromJsonValue = function (state, jsonObject, currentObject, options) {
        var obj = currentObject;
        if (jsonObject) {
            if (!(obj instanceof this.typeConstructor)) {
                obj = this.create();
            }
        }
        return _super.prototype.fromJsonValue.call(this, state, jsonObject, obj, options);
    };
    EmbeddableType.prototype.toString = function () {
        return "EmbeddableType(" + this.ref + ")";
    };
    return EmbeddableType;
}(ManagedType_1.ManagedType));
exports.EmbeddableType = EmbeddableType;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRW1iZWRkYWJsZVR5cGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9saWIvbWV0YW1vZGVsL0VtYmVkZGFibGVUeXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDZDQUE0QztBQUM1QywrQkFBeUM7QUFDekMsc0NBQXFEO0FBS3JEO0lBQXVELGtDQUFjO0lBQXJFOztJQXlDQSxDQUFDO0lBckNDLHNCQUFJLDJDQUFlO1FBSG5COztXQUVHO2FBQ0g7WUFDRSxPQUFPLHNCQUFlLENBQUMsVUFBVSxDQUFDO1FBQ3BDLENBQUM7OztPQUFBO0lBRUQ7O09BRUc7SUFDSCx5Q0FBZ0IsR0FBaEI7UUFDRSxPQUFPLElBQUksQ0FBQyxRQUFTLENBQUMsV0FBVyxDQUFDLGlCQUFPLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRUQ7O09BRUc7SUFDSCw0Q0FBbUIsR0FBbkIsVUFBb0IsRUFBaUI7UUFDbkMsT0FBTyx3QkFBYyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVEOztPQUVHO0lBQ0gsc0NBQWEsR0FBYixVQUFjLEtBQW1CLEVBQUUsVUFBZ0IsRUFBRSxhQUF1QixFQUMxRSxPQUF3RDtRQUN4RCxJQUFJLEdBQUcsR0FBRyxhQUFhLENBQUM7UUFFeEIsSUFBSSxVQUFVLEVBQUU7WUFDZCxJQUFJLENBQUMsQ0FBQyxHQUFHLFlBQVksSUFBSSxDQUFDLGVBQWUsQ0FBQyxFQUFFO2dCQUMxQyxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO2FBQ3JCO1NBQ0Y7UUFFRCxPQUFPLGlCQUFNLGFBQWEsWUFBQyxLQUFLLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBRUQsaUNBQVEsR0FBUjtRQUNFLE9BQU8sb0JBQWtCLElBQUksQ0FBQyxHQUFHLE1BQUcsQ0FBQztJQUN2QyxDQUFDO0lBQ0gscUJBQUM7QUFBRCxDQUFDLEFBekNELENBQXVELHlCQUFXLEdBeUNqRTtBQXpDWSx3Q0FBYyJ9
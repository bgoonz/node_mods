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
exports.Operator = void 0;
var Node_1 = require("./Node");
/**
 * An Operator saves the state of a combined query
 */
var Operator = /** @class */ (function (_super) {
    __extends(Operator, _super);
    /**
     * @param entityManager The owning entity manager of this query
     * @param resultClass The query result class
     * @param operator The operator used to join the childes
     * @param childes The childes to join
     */
    function Operator(entityManager, resultClass, operator, childes) {
        var _this = _super.call(this, entityManager, resultClass) || this;
        _this.operator = operator;
        _this.childes = childes;
        return _this;
    }
    Operator.prototype.toJSON = function () {
        var json = {};
        json[this.operator] = this.childes;
        return json;
    };
    return Operator;
}(Node_1.Node));
exports.Operator = Operator;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT3BlcmF0b3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9saWIvcXVlcnkvT3BlcmF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsK0JBQThCO0FBSTlCOztHQUVHO0FBQ0g7SUFBZ0QsNEJBQU87SUFXckQ7Ozs7O09BS0c7SUFDSCxrQkFBWSxhQUE0QixFQUFFLFdBQXFCLEVBQUUsUUFBZ0IsRUFBRSxPQUFrQjtRQUFyRyxZQUNFLGtCQUFNLGFBQWEsRUFBRSxXQUFXLENBQUMsU0FHbEM7UUFGQyxLQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixLQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQzs7SUFDekIsQ0FBQztJQUVELHlCQUFNLEdBQU47UUFDRSxJQUFNLElBQUksR0FBc0MsRUFBRSxDQUFDO1FBQ25ELElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUNuQyxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFDSCxlQUFDO0FBQUQsQ0FBQyxBQTVCRCxDQUFnRCxXQUFJLEdBNEJuRDtBQTVCWSw0QkFBUSJ9
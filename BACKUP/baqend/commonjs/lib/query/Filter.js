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
exports.Filter = void 0;
var Node_1 = require("./Node");
var Condition_1 = require("./Condition");
var Filter = /** @class */ (function (_super) {
    __extends(Filter, _super);
    function Filter() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * The actual filters of this node
         */
        _this.filter = {};
        return _this;
    }
    /**
     * @inheritDoc
     */
    Filter.prototype.addFilter = function (field, filter, value) {
        if (field !== null) {
            if (typeof field !== 'string') {
                throw new Error('Field must be a string.');
            }
            if (filter) {
                var currentFilter = this.filter[field];
                var fieldFilter = void 0;
                if (typeof currentFilter === 'object' && Object.getPrototypeOf(currentFilter) === Object.prototype) {
                    fieldFilter = currentFilter;
                }
                else {
                    fieldFilter = {};
                    this.filter[field] = fieldFilter;
                }
                fieldFilter[filter] = value;
            }
            else {
                this.filter[field] = value;
            }
        }
        else {
            Object.assign(this.filter, value);
        }
        return this;
    };
    Filter.prototype.toJSON = function () {
        return this.filter;
    };
    return Filter;
}(Node_1.Node));
exports.Filter = Filter;
Object.assign(Filter.prototype, Condition_1.Condition);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmlsdGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbGliL3F1ZXJ5L0ZpbHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQkFBOEI7QUFDOUIseUNBQXdDO0FBV3hDO0lBQThDLDBCQUFPO0lBQXJEO1FBQUEscUVBdUNDO1FBdENDOztXQUVHO1FBQ2EsWUFBTSxHQUFpQixFQUFFLENBQUM7O0lBbUM1QyxDQUFDO0lBakNDOztPQUVHO0lBQ0gsMEJBQVMsR0FBVCxVQUFVLEtBQW9CLEVBQUUsTUFBcUIsRUFBRSxLQUFVO1FBQy9ELElBQUksS0FBSyxLQUFLLElBQUksRUFBRTtZQUNsQixJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsRUFBRTtnQkFDN0IsTUFBTSxJQUFJLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO2FBQzVDO1lBRUQsSUFBSSxNQUFNLEVBQUU7Z0JBQ1YsSUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDekMsSUFBSSxXQUFXLFNBQWMsQ0FBQztnQkFDOUIsSUFBSSxPQUFPLGFBQWEsS0FBSyxRQUFRLElBQUksTUFBTSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsS0FBSyxNQUFNLENBQUMsU0FBUyxFQUFFO29CQUNsRyxXQUFXLEdBQUcsYUFBNkIsQ0FBQztpQkFDN0M7cUJBQU07b0JBQ0wsV0FBVyxHQUFHLEVBQUUsQ0FBQztvQkFDakIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxXQUFXLENBQUM7aUJBQ2xDO2dCQUVELFdBQVcsQ0FBQyxNQUFNLENBQUMsR0FBRyxLQUFLLENBQUM7YUFDN0I7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxLQUFLLENBQUM7YUFDNUI7U0FDRjthQUFNO1lBQ0wsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQ25DO1FBRUQsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQsdUJBQU0sR0FBTjtRQUNFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNyQixDQUFDO0lBQ0gsYUFBQztBQUFELENBQUMsQUF2Q0QsQ0FBOEMsV0FBSSxHQXVDakQ7QUF2Q1ksd0JBQU07QUF5Q25CLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxxQkFBUyxDQUFDLENBQUMifQ==
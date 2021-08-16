"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Accessor = void 0;
var Accessor = /** @class */ (function () {
    function Accessor() {
    }
    /**
     * @param object
     * @param attribute
     * @return
     */
    Accessor.prototype.getValue = function (object, attribute) {
        return object[attribute.name];
    };
    /**
     * @param object
     * @param attribute
     * @param value
     */
    Accessor.prototype.setValue = function (object, attribute, value) {
        // eslint-disable-next-line no-param-reassign
        object[attribute.name] = value;
    };
    return Accessor;
}());
exports.Accessor = Accessor;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWNjZXNzb3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9saWIvYmluZGluZy9BY2Nlc3Nvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFHQTtJQUFBO0lBbUJBLENBQUM7SUFsQkM7Ozs7T0FJRztJQUNILDJCQUFRLEdBQVIsVUFBWSxNQUFlLEVBQUUsU0FBdUI7UUFDbEQsT0FBTyxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBYSxDQUFDO0lBQzVDLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsMkJBQVEsR0FBUixVQUFZLE1BQWUsRUFBRSxTQUF1QixFQUFFLEtBQVE7UUFDNUQsNkNBQTZDO1FBQzdDLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDO0lBQ2pDLENBQUM7SUFDSCxlQUFDO0FBQUQsQ0FBQyxBQW5CRCxJQW1CQztBQW5CWSw0QkFBUSJ9
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Role = void 0;
var User_1 = require("./User");
var Entity_1 = require("./Entity");
var enumerable_1 = require("../util/enumerable");
var Role = /** @class */ (function (_super) {
    __extends(Role, _super);
    function Role() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * A set of users which have this role
         */
        _this.users = null;
        /**
         * The name of the role
         */
        _this.name = null;
        return _this;
    }
    /**
     * Test if the given user has this role
     * @param user The user to check
     * @return <code>true</code> if the given user has this role,
     * otherwise <code>false</code>
     */
    Role.prototype.hasUser = function (user) {
        return !!this.users && this.users.has(user);
    };
    /**
     * Add the given user to this role
     * @param user The user to add
     */
    Role.prototype.addUser = function (user) {
        if (user instanceof User_1.User) {
            if (!this.users) {
                this.users = new Set();
            }
            this.users.add(user);
        }
        else {
            throw new Error('Only user instances can be added to a role.');
        }
    };
    /**
     * Remove the given user from this role
     * @param user The user to remove
     */
    Role.prototype.removeUser = function (user) {
        if (user instanceof User_1.User) {
            if (this.users) {
                this.users.delete(user);
            }
        }
        else {
            throw new Error('Only user instances can be removed from a role.');
        }
    };
    __decorate([
        enumerable_1.enumerable(false)
    ], Role.prototype, "hasUser", null);
    __decorate([
        enumerable_1.enumerable(false)
    ], Role.prototype, "addUser", null);
    __decorate([
        enumerable_1.enumerable(false)
    ], Role.prototype, "removeUser", null);
    return Role;
}(Entity_1.Entity));
exports.Role = Role;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUm9sZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9iaW5kaW5nL1JvbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsK0JBQThCO0FBQzlCLG1DQUFrQztBQUNsQyxpREFBZ0Q7QUFFaEQ7SUFBMEIsd0JBQU07SUFBaEM7UUFBQSxxRUFxREM7UUFwREM7O1dBRUc7UUFDSSxXQUFLLEdBQTJCLElBQUksQ0FBQztRQUU1Qzs7V0FFRztRQUNJLFVBQUksR0FBa0IsSUFBSSxDQUFDOztJQTRDcEMsQ0FBQztJQTFDQzs7Ozs7T0FLRztJQUVILHNCQUFPLEdBQVAsVUFBUSxJQUFnQjtRQUN0QixPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFRDs7O09BR0c7SUFFSCxzQkFBTyxHQUFQLFVBQVEsSUFBZ0I7UUFDdEIsSUFBSSxJQUFJLFlBQVksV0FBSSxFQUFFO1lBQ3hCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFO2dCQUNmLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQzthQUN4QjtZQUVELElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3RCO2FBQU07WUFDTCxNQUFNLElBQUksS0FBSyxDQUFDLDZDQUE2QyxDQUFDLENBQUM7U0FDaEU7SUFDSCxDQUFDO0lBRUQ7OztPQUdHO0lBRUgseUJBQVUsR0FBVixVQUFXLElBQWdCO1FBQ3pCLElBQUksSUFBSSxZQUFZLFdBQUksRUFBRTtZQUN4QixJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7Z0JBQ2QsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDekI7U0FDRjthQUFNO1lBQ0wsTUFBTSxJQUFJLEtBQUssQ0FBQyxpREFBaUQsQ0FBQyxDQUFDO1NBQ3BFO0lBQ0gsQ0FBQztJQWxDRDtRQURDLHVCQUFVLENBQUMsS0FBSyxDQUFDO3VDQUdqQjtJQU9EO1FBREMsdUJBQVUsQ0FBQyxLQUFLLENBQUM7dUNBV2pCO0lBT0Q7UUFEQyx1QkFBVSxDQUFDLEtBQUssQ0FBQzswQ0FTakI7SUFDSCxXQUFDO0NBQUEsQUFyREQsQ0FBMEIsZUFBTSxHQXFEL0I7QUFyRFksb0JBQUkifQ==
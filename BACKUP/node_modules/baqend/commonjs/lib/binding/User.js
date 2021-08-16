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
exports.User = void 0;
var enumerable_1 = require("../util/enumerable");
var Entity_1 = require("./Entity");
var User = /** @class */ (function (_super) {
    __extends(User, _super);
    function User() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Change the password of the given user
     *
     * @param currentPassword Current password of the user
     * @param password New password of the user
     * @param doneCallback Called when the operation succeed.
     * @param failCallback Called when the operation failed.
     * @return
     */
    User.prototype.newPassword = function (currentPassword, password, doneCallback, failCallback) {
        return this._metadata.db.newPassword(this.username, currentPassword, password).then(doneCallback, failCallback);
    };
    /**
     * Change the username of the current user
     *
     * @param newUsername New username for the current user
     * @param password The password of the current user
     * @param doneCallback Called when the operation succeed.
     * @param failCallback Called when the operation failed.
     * @return
     */
    User.prototype.changeUsername = function (newUsername, password, doneCallback, failCallback) {
        return this._metadata.db.changeUsername(this.username, newUsername, password).then(doneCallback, failCallback);
    };
    /**
     * Requests a perpetual token for the user
     *
     * Only users with the admin role are allowed to request an API token.
     *
     * @param doneCallback Called when the operation succeed.
     * @param failCallback Called when the operation failed.
     * @return
     */
    User.prototype.requestAPIToken = function (doneCallback, failCallback) {
        return this._metadata.db.requestAPIToken(this.constructor, this)
            .then(doneCallback, failCallback);
    };
    __decorate([
        enumerable_1.enumerable(false)
    ], User.prototype, "newPassword", null);
    __decorate([
        enumerable_1.enumerable(false)
    ], User.prototype, "changeUsername", null);
    __decorate([
        enumerable_1.enumerable(false)
    ], User.prototype, "requestAPIToken", null);
    return User;
}(Entity_1.Entity));
exports.User = User;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9iaW5kaW5nL1VzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaURBQWdEO0FBQ2hELG1DQUFrQztBQUlsQztJQUEwQix3QkFBTTtJQUFoQzs7SUFxREEsQ0FBQztJQTFDQzs7Ozs7Ozs7T0FRRztJQUVILDBCQUFXLEdBQVgsVUFBWSxlQUF1QixFQUFFLFFBQWdCLEVBQUUsWUFBa0IsRUFBRSxZQUFrQjtRQUMzRixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBVSxFQUFFLGVBQWUsRUFBRSxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLFlBQVksQ0FBQyxDQUFDO0lBQ3BILENBQUM7SUFFRDs7Ozs7Ozs7T0FRRztJQUVILDZCQUFjLEdBQWQsVUFBZSxXQUFtQixFQUFFLFFBQWdCLEVBQUUsWUFBa0IsRUFBRSxZQUFrQjtRQUMxRixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsUUFBVSxFQUFFLFdBQVcsRUFBRSxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLFlBQVksQ0FBQyxDQUFDO0lBQ25ILENBQUM7SUFFRDs7Ozs7Ozs7T0FRRztJQUVILDhCQUFlLEdBQWYsVUFBZ0IsWUFBa0IsRUFBRSxZQUFrQjtRQUNwRCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsV0FBZ0MsRUFBRSxJQUFJLENBQUM7YUFDbEYsSUFBSSxDQUFDLFlBQVksRUFBRSxZQUFZLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBL0JEO1FBREMsdUJBQVUsQ0FBQyxLQUFLLENBQUM7MkNBR2pCO0lBWUQ7UUFEQyx1QkFBVSxDQUFDLEtBQUssQ0FBQzs4Q0FHakI7SUFZRDtRQURDLHVCQUFVLENBQUMsS0FBSyxDQUFDOytDQUlqQjtJQUNILFdBQUM7Q0FBQSxBQXJERCxDQUEwQixlQUFNLEdBcUQvQjtBQXJEWSxvQkFBSSJ9
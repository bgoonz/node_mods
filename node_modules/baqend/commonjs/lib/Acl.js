"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Acl = void 0;
var Permission_1 = require("./intersection/Permission");
/**
 * Creates a new Acl object, with an empty rule set for an object
 */
var Acl = /** @class */ (function () {
    function Acl() {
        /**
         * The read permission of the object
         */
        this.read = new Permission_1.Permission();
        /**
         * The write permission of the object
         */
        this.write = new Permission_1.Permission();
    }
    /**
     * Removes all acl rules, read and write access is public afterwards
     *
     * @return
     * */
    Acl.prototype.clear = function () {
        this.read.clear();
        this.write.clear();
    };
    /**
     * Copies permissions from another ACL
     *
     * @param acl The ACL to copy from
     * @return
     */
    Acl.prototype.copy = function (acl) {
        this.read.copy(acl.read);
        this.write.copy(acl.write);
        return this;
    };
    /**
     * Gets whenever all users and roles have the permission to read the object
     *
     * @return <code>true</code> If public access is allowed
     */
    Acl.prototype.isPublicReadAllowed = function () {
        return this.read.isPublicAllowed();
    };
    /**
     * Sets whenever all users and roles should have the permission to read the object
     *
     * Note: All other allow read rules will be removed.
     *
     * @return
     * */
    Acl.prototype.setPublicReadAllowed = function () {
        return this.read.setPublicAllowed();
    };
    /**
     * Checks whenever the user or role is explicit allowed to read the object
     *
     * @param userOrRole The user or role to check for
     * @return <code>true</code> if read access is explicitly allowed for the given user or role
     */
    Acl.prototype.isReadAllowed = function (userOrRole) {
        return this.read.isAllowed(userOrRole);
    };
    /**
     * Checks whenever the user or role is explicit denied to read the object
     *
     * @param userOrRole The user or role to check for
     * @return <code>true</code> if read access is explicitly denied for the given user or role
     */
    Acl.prototype.isReadDenied = function (userOrRole) {
        return this.read.isDenied(userOrRole);
    };
    /**
     * Allows the given user or rule to read the object
     *
     * @param userOrRole The user or role to allow
     * @return this acl object
     */
    Acl.prototype.allowReadAccess = function () {
        var _a;
        var userOrRole = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            userOrRole[_i] = arguments[_i];
        }
        (_a = this.read).allowAccess.apply(_a, userOrRole);
        return this;
    };
    /**
     * Denies the given user or rule to read the object
     *
     * @param userOrRole The user or role to deny
     * @return this acl object
     */
    Acl.prototype.denyReadAccess = function () {
        var _a;
        var userOrRole = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            userOrRole[_i] = arguments[_i];
        }
        (_a = this.read).denyAccess.apply(_a, userOrRole);
        return this;
    };
    /**
     * Deletes any read allow/deny rule for the given user or role
     *
     * @param userOrRole The user or role
     * @return this acl object
     */
    Acl.prototype.deleteReadAccess = function () {
        var _a;
        var userOrRole = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            userOrRole[_i] = arguments[_i];
        }
        (_a = this.read).deleteAccess.apply(_a, userOrRole);
        return this;
    };
    /**
     * Gets whenever all users and roles have the permission to write the object
     *
     * @return <code>true</code> If public access is allowed
     */
    Acl.prototype.isPublicWriteAllowed = function () {
        return this.write.isPublicAllowed();
    };
    /**
     * Sets whenever all users and roles should have the permission to write the object
     *
     * Note: All other allow write rules will be removed.
     *
     * @return
     * */
    Acl.prototype.setPublicWriteAllowed = function () {
        return this.write.setPublicAllowed();
    };
    /**
     * Checks whenever the user or role is explicit allowed to write the object
     *
     * @param userOrRole The user or role to check for
     * @return <code>true</code> if write access is explicitly allowed for the given user or role
     */
    Acl.prototype.isWriteAllowed = function (userOrRole) {
        return this.write.isAllowed(userOrRole);
    };
    /**
     * Checks whenever the user or role is explicit denied to write the object
     *
     * @param userOrRole The user or role to check for
     * @return <code>true</code> if write access is explicitly denied for the given user or role
     */
    Acl.prototype.isWriteDenied = function (userOrRole) {
        return this.write.isDenied(userOrRole);
    };
    /**
     * Allows the given user or rule to write the object
     *
     * @param userOrRole The user or role to allow
     * @return this acl object
     */
    Acl.prototype.allowWriteAccess = function () {
        var _a;
        var userOrRole = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            userOrRole[_i] = arguments[_i];
        }
        (_a = this.write).allowAccess.apply(_a, userOrRole);
        return this;
    };
    /**
     * Denies the given user or rule to write the object
     *
     * @param userOrRole The user or role to deny
     * @return this acl object
     */
    Acl.prototype.denyWriteAccess = function () {
        var _a;
        var userOrRole = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            userOrRole[_i] = arguments[_i];
        }
        (_a = this.write).denyAccess.apply(_a, userOrRole);
        return this;
    };
    /**
     * Deletes any write allow/deny rule for the given user or role
     *
     * @param userOrRole The user or role
     * @return this acl object
     */
    Acl.prototype.deleteWriteAccess = function () {
        var _a;
        var userOrRole = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            userOrRole[_i] = arguments[_i];
        }
        (_a = this.write).deleteAccess.apply(_a, userOrRole);
        return this;
    };
    /**
     * A JSON representation of the set of rules
     *
     * @return
     */
    Acl.prototype.toJSON = function () {
        return {
            read: this.read.toJSON(),
            write: this.write.toJSON(),
        };
    };
    /**
     * Sets the acl rules form JSON
     *
     * @param json The json encoded acls
     * @return
     */
    Acl.prototype.fromJSON = function (json) {
        this.read.fromJSON(json.read || {});
        this.write.fromJSON(json.write || {});
    };
    return Acl;
}());
exports.Acl = Acl;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWNsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vbGliL0FjbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx3REFBdUQ7QUFJdkQ7O0dBRUc7QUFDSDtJQUFBO1FBQ0U7O1dBRUc7UUFDTSxTQUFJLEdBQWUsSUFBSSx1QkFBVSxFQUFFLENBQUM7UUFFN0M7O1dBRUc7UUFDTSxVQUFLLEdBQWUsSUFBSSx1QkFBVSxFQUFFLENBQUM7SUFnTWhELENBQUM7SUE5TEM7Ozs7U0FJSztJQUNMLG1CQUFLLEdBQUw7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsa0JBQUksR0FBSixVQUFLLEdBQVE7UUFDWCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzNCLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxpQ0FBbUIsR0FBbkI7UUFDRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDckMsQ0FBQztJQUVEOzs7Ozs7U0FNSztJQUNMLGtDQUFvQixHQUFwQjtRQUNFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQ3RDLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILDJCQUFhLEdBQWIsVUFBYyxVQUF5QjtRQUNyQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILDBCQUFZLEdBQVosVUFBYSxVQUF5QjtRQUNwQyxPQUFPLElBQUks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
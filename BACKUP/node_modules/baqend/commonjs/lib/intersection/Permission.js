"use strict";
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
exports.Permission = void 0;
/**
 * An aggregation of access rules for given object metadata.
 */
var Permission = /** @class */ (function () {
    function Permission() {
        this.rules = {};
    }
    /**
     * Returns a list of user and role references of all rules
     * @return a list of references
     */
    Permission.prototype.allRules = function () {
        return Object.keys(this.rules);
    };
    /**
     * Removes all rules from this permission object
     * @return
     */
    Permission.prototype.clear = function () {
        this.rules = {};
    };
    /**
     * Copies permissions from another permission object
     * @param permission The permission to copy from
     * @return
     */
    Permission.prototype.copy = function (permission) {
        this.rules = __assign({}, permission.rules);
        return this;
    };
    /**
     * Gets whenever all users and roles have the permission to perform the operation
     * @return <code>true</code> If public access is allowed
     */
    Permission.prototype.isPublicAllowed = function () {
        var _this = this;
        if ('*' in this.rules) {
            return false;
        }
        return !this.allRules().some(function (ref) { return _this.rules[ref] === 'allow'; });
    };
    /**
     * Sets whenever all users and roles should have the permission to perform the operation
     *
     * Note: All other allow rules will be removed.
     *
     * @return
     */
    Permission.prototype.setPublicAllowed = function () {
        var _this = this;
        this.allRules().forEach(function (ref) {
            if (_this.rules[ref] === 'allow') {
                delete _this.rules[ref];
            }
        });
    };
    /**
     * Returns the actual rule of the given user or role.
     * @param userOrRole The user or role to check for
     * @return The actual access rule or undefined if no rule was found
     */
    Permission.prototype.getRule = function (userOrRole) {
        return this.rules[this.ref(userOrRole)];
    };
    /**
     * Checks whenever the user or role is explicit allowed to perform the operation.
     *
     * @param userOrRole The user or role to check for
     * @return <code>true</code> If the given user or role is allowed
     */
    Permission.prototype.isAllowed = function (userOrRole) {
        return this.rules[this.ref(userOrRole)] === 'allow';
    };
    /**
     * Checks whenever the user or role is explicit denied to perform the operation.
     *
     * @param userOrRole The user or role to check for
     * @return <code>true</code> If the given user or role is denied
     */
    Permission.prototype.isDenied = function (userOrRole) {
        return this.rules[this.ref(userOrRole)] === 'deny';
    };
    /**
     * Allows the given users or rules to perform the operation
     * @param userOrRole The users or roles to allow
     * @return this permission object
     */
    Permission.prototype.allowAccess = function () {
        var userOrRole = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            userOrRole[_i] = arguments[_i];
        }
        for (var i = 0; i < userOrRole.length; i += 1) {
            this.rules[this.ref(userOrRole[i])] = 'allow';
        }
        return this;
    };
    /**
     * Denies the given users or rules to perform the operation
     * @param userOrRole The users or roles to deny
     * @return this permission object
     */
    Permission.prototype.denyAccess = function () {
        var userOrRole = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            userOrRole[_i] = arguments[_i];
        }
        for (var i = 0; i < userOrRole.length; i += 1) {
            this.rules[this.ref(userOrRole[i])] = 'deny';
        }
        return this;
    };
    /**
     * Deletes any allow/deny rules for the given users or roles
     * @param userOrRole The users or roles to delete rules for
     * @return this permission object
     */
    Permission.prototype.deleteAccess = function () {
        var userOrRole = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            userOrRole[_i] = arguments[_i];
        }
        for (var i = 0; i < userOrRole.length; i += 1) {
            delete this.rules[this.ref(userOrRole[i])];
        }
        return this;
    };
    /**
     * A Json representation of the set of rules
     * @return
     */
    Permission.prototype.toJSON = function () {
        return __assign({}, this.rules);
    };
    /**
     * Sets the permission rules from json
     * @param json The permission json representation
     * @return
     */
    Permission.prototype.fromJSON = function (json) {
        this.rules = json;
    };
    /**
     * Creates a permission from the given rules.
     * @param json The rules.
     * @return The permission.
     */
    Permission.fromJSON = function (json) {
        var permission = new this();
        permission.fromJSON(json);
        return permission;
    };
    /**
     * Resolves user and role references and validate given references
     * @param userOrRole The user, role or reference
     * @return The resolved and validated reference
     */
    Permission.prototype.ref = function (userOrRole) {
        var ref = typeof userOrRole === 'string' ? userOrRole : userOrRole.id;
        if (ref.indexOf('/db/User/') === 0 || ref.indexOf('/db/Role/') === 0) {
            return ref;
        }
        throw new TypeError('The given object isn\'t a user, role or a valid reference.');
    };
    Permission.BASE_PERMISSIONS = ['load', 'update', 'delete', 'query', 'insert'];
    return Permission;
}());
exports.Permission = Permission;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGVybWlzc2lvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9pbnRlcnNlY3Rpb24vUGVybWlzc2lvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQU1BOztHQUVHO0FBQ0g7SUFBQTtRQUdTLFVBQUssR0FBOEIsRUFBRSxDQUFDO0lBcUsvQyxDQUFDO0lBbktDOzs7T0FHRztJQUNILDZCQUFRLEdBQVI7UUFDRSxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFRDs7O09BR0c7SUFDSCwwQkFBSyxHQUFMO1FBQ0UsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7SUFDbEIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCx5QkFBSSxHQUFKLFVBQUssVUFBc0I7UUFDekIsSUFBSSxDQUFDLEtBQUssZ0JBQVEsVUFBVSxDQUFDLEtBQUssQ0FBRSxDQUFDO1FBQ3JDLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVEOzs7T0FHRztJQUNILG9DQUFlLEdBQWY7UUFBQSxpQkFNQztRQUxDLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDckIsT0FBTyxLQUFLLENBQUM7U0FDZDtRQUVELE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUMsR0FBRyxJQUFLLE9BQUEsS0FBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsS0FBSyxPQUFPLEVBQTNCLENBQTJCLENBQUMsQ0FBQztJQUNyRSxDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0gscUNBQWdCLEdBQWhCO1FBQUEsaUJBTUM7UUFMQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsT0FBTyxDQUFDLFVBQUMsR0FBRztZQUMxQixJQUFJLEtBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEtBQUssT0FBTyxFQUFFO2dCQUMvQixP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
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
exports.UserFactory = exports.LoginOption = void 0;
var EntityFactory_1 = require("./EntityFactory");
var LoginOption;
(function (LoginOption) {
    /**
     * Do not login the user after a successful registration
     */
    LoginOption[LoginOption["NO_LOGIN"] = -1] = "NO_LOGIN";
    /**
     * Login in after a successful registration and keep the token in a nonpermanent storage, i.e SessionStorage
     */
    LoginOption[LoginOption["SESSION_LOGIN"] = 0] = "SESSION_LOGIN";
    /**
     * Login in after a successful registration and keep the token in a persistent storage, i.e LocalStorage
     */
    LoginOption[LoginOption["PERSIST_LOGIN"] = 1] = "PERSIST_LOGIN";
})(LoginOption = exports.LoginOption || (exports.LoginOption = {}));
/**
 * Creates a new instance of the managed type of this factory
 */
var UserFactory = /** @class */ (function (_super) {
    __extends(UserFactory, _super);
    function UserFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(UserFactory.prototype, "LoginOption", {
        get: function () {
            return LoginOption;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UserFactory.prototype, "me", {
        /**
         * The current logged in user, or <code>null</code> if the user is not logged in
         */
        get: function () {
            return this.db.me;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Register a new user with the given username and password, if the username is not used by an another user.
     * @param user The username as a string or a <User> Object, which must contain the username.
     * @param password The password for the given user
     * @param [loginOption=true] The default logs the user in after a successful
     * registration and keeps the user logged in over multiple sessions
     * @param doneCallback Called when the operation succeed.
     * @param failCallback Called when the operation failed.
     * @return The created user object, for the new registered user.
     */
    UserFactory.prototype.register = function (user, password, loginOption, doneCallback, failCallback) {
        if (loginOption instanceof Function) {
            return this.register(user, password, true, loginOption, doneCallback);
        }
        var userObj = typeof user === 'string' ? this.fromJSON({ username: user }) : user;
        return this.db.register(userObj, password, loginOption === undefined ? true : loginOption)
            .then(doneCallback, failCallback);
    };
    /**
     * Log in the user with the given username and password and starts a user session
     * @param username The username of the user
     * @param password The password of the user
     * @param [loginOption=true] The default keeps the user logged in over
     * multiple sessions
     * @param doneCallback Called when the operation succeed.
     * @param failCallback Called when the operation failed.
     * @return
     */
    UserFactory.prototype.login = function (username, password, loginOption, doneCallback, failCallback) {
        if (loginOption instanceof Function) {
            return this.login(username, password, true, loginOption, doneCallback);
        }
        return this.db.login(username, password, loginOption === undefined ? true : loginOption)
            .then(doneCallback, failCallback);
    };
    /**
     * Log in the user assiciated with the given token and starts a user session.
     * @param token The user token.
     * @param [loginOption=true] The default keeps the user logged in over
     * multiple sessions
     * @param doneCallback Called when the operation succeed.
     * @param failCallback Called when the operation failed.
     * @return
     */
    UserFactory.prototype.loginWithToken = function (token, loginOption, doneCallback, failCallback) {
        if (loginOption instanceof Function) {
            return this.loginWithToken(token, true, loginOption, doneCallback);
        }
        this.db.token = token;
        return this.db.renew(loginOption).then(doneCallback, failCallback);
    };
    /**
     * Log out the current logged in user and ends the active user session
     * @param doneCallback Called when the operation succeed.
     * @param failCallback Called when the operation failed.
     * @return
     */
    UserFactory.prototype.logout = function (doneCallback, failCallback) {
        return this.db.logout().then(doneCallback, failCallback);
    };
    UserFactory.prototype.newPassword = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        // detect signature newPassword(token, newPassword, [loginOption=true][, doneCallback[, failCallback]])
        if (typeof args[2] === 'string') {
            var _a = args, username = _a[0], password = _a[1], newPassword_1 = _a[2], doneCallback_1 = _a[3], failCallback_1 = _a[4];
            return this.db.newPassword(username, password, newPassword_1).then(doneCallback_1, failCallback_1);
        }
        // eslint-disable-next-line prefer-const
        var _b = args, token = _b[0], newPassword = _b[1], loginOption = _b[2], doneCallback = _b[3], failCallback = _b[4];
        if (loginOption instanceof Function) {
            failCallback = doneCallback;
            doneCallback = loginOption;
            loginOption = true;
        }
        return this.db.newPasswordWithToken(token, newPassword, loginOption).then(doneCallback, failCallback);
    };
    /**
     * Sends an email with a link to reset the password for the given username
     *
     * The username must be a valid email address.
     *
     * @param username Username (email) to identify the user
     * @param doneCallback Called when the operation succeed.
     * @param failCallback Called when the operation failed.
     * @return
     */
    UserFactory.prototype.resetPassword = function (username, doneCallback, failCallback) {
        return this.db.resetPassword(username).then(doneCallback, failCallback);
    };
    /**
     * Sends an email with a link to change the current username
     *
     * The user is identified by their current username and password.
     * The username must be a valid email address.
     *
     * @param username Current username (email) to identify the user
     * @param newUsername New username (email) to change the current username to
     * @param password The current password of the user. Has to be passed to the function for security reason
     * @param doneCallback Called when the operation succeed.
     * @param failCallback Called when the operation failed.
     * @return
     */
    UserFactory.prototype.changeUsername = function (username, newUsername, password, doneCallback, failCallback) {
        return this.db.changeUsername(username, newUsername, password).then(doneCallback, failCallback);
    };
    /**
     * Requests a perpetual token for the given user
     *
     * Only users with the admin role are allowed to request an API token.
     *
     * @param user The user object or id of the user object
     * @param doneCallback Called when the operation succeed.
     * @param failCallback Called when the operation failed.
     * @return
     */
    UserFactory.prototype.requestAPIToken = function (user, doneCallback, failCallback) {
        return this.db.requestAPIToken(this.managedType.typeConstructor, user).then(doneCallback, failCallback);
    };
    /**
     * Revoke all created tokens for the given user
     *
     * This method will revoke all previously issued tokens and the user must login again.
     *
     * @param user The user object or id of the user object
     * @param doneCallback Called when the operation succeed.
     * @param failCallback Called when the operation failed.
     * @return
     */
    UserFactory.prototype.revokeAllTokens = function (user, doneCallback, failCallback) {
        return this.db.revokeAllTokens(this.managedType.typeConstructor, user).then(doneCallback, failCallback);
    };
    /**
     * @property oauth default properties
     * @property google default oauth properties for Google
     * @property facebook default oauth properties for Facebook
     * @property github default oauth properties for GitHub
     * @property twitter default oauth properties for Twitter
     * @property linkedin default oauth properties for LinkedIn
     * @property {Object} oauth.salesforce default oauth properties for Salesforce
     */
    UserFactory.DefaultOptions = {
        google: {
            width: 585,
            height: 545,
            scope: 'email',
            path: 'https://accounts.google.com/o/oauth2/auth?response_type=code&access_type=online',
        },
        facebook: {
            width: 1140,
            height: 640,
            scope: 'email',
            path: 'https://www.facebook.com/v7.0/dialog/oauth?response_type=code',
        },
        github: {
            width: 1040,
            height: 580,
            scope: 'user:email',
            path: 'https://github.com/login/oauth/authorize?response_type=code&access_type=online',
        },
        twitter: {
            version: 1,
            width: 740,
            height: 730,
        },
        linkedin: {
            width: 630,
            height: 530,
            scope: 'r_liteprofile',
            path: 'https://www.linkedin.com/oauth/v2/authorization?response_type=code',
        },
        salesforce: {
            width: 585,
            height: 545,
            scope: 'email',
        },
    };
    return UserFactory;
}(EntityFactory_1.EntityFactory));
exports.UserFactory = UserFactory;
['Google', 'Facebook', 'GitHub', 'Twitter', 'LinkedIn', 'Salesforce'].forEach(function (name) {
    var methodName = "loginWith" + name;
    // do not use a lambda here since we will loose the this context
    UserFactory.prototype[methodName] = function loginWithOAuth(clientID, options, doneCallback, failCallback) {
        if (options instanceof Function) {
            return this[methodName](clientID, {}, options, doneCallback);
        }
        var opt = __assign(__assign(__assign({}, UserFactory.DefaultOptions[name.toLowerCase()]), (typeof clientID === 'string' ? { clientId: clientID } : clientID)), options || {});
        return this.db.loginWithOAuth(name, opt).then(doneCallback, failCallback);
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlckZhY3RvcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9saWIvYmluZGluZy9Vc2VyRmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlEQUFnRDtBQUloRCxJQUFZLFdBYVg7QUFiRCxXQUFZLFdBQVc7SUFDckI7O09BRUc7SUFDSCxzREFBYSxDQUFBO0lBQ2I7O09BRUc7SUFDSCwrREFBaUIsQ0FBQTtJQUNqQjs7T0FFRztJQUNILCtEQUFpQixDQUFBO0FBQ25CLENBQUMsRUFiVyxXQUFXLEdBQVgsbUJBQVcsS0FBWCxtQkFBVyxRQWF0QjtBQUVEOztHQUVHO0FBQ0g7SUFBaUMsK0JBQXlCO0lBQTFEOztJQTBPQSxDQUFDO0lBek9DLHNCQUFXLG9DQUFXO2FBQXRCO1lBQ0UsT0FBTyxXQUFXLENBQUM7UUFDckIsQ0FBQzs7O09BQUE7SUFtREQsc0JBQUksMkJBQUU7UUFITjs7V0FFRzthQUNIO1lBQ0UsT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztRQUNwQixDQUFDOzs7T0FBQTtJQUVEOzs7Ozs7Ozs7T0FTRztJQUNILDhCQUFRLEdBQVIsVUFBUyxJQUF5QixFQUFFLFFBQWdCLEVBQUUsV0FBOEMsRUFDbEcsWUFBa0IsRUFBRSxZQUFrQjtRQUN0QyxJQUFJLFdBQVcsWUFBWSxRQUFRLEVBQUU7WUFDbkMsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxZQUFZLENBQUMsQ0FBQztTQUN2RTtRQUVELElBQU0sT0FBTyxHQUFHLE9BQU8sSUFBSSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDcEYsT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsUUFBUSxFQUFFLFdBQVcsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDO2FBQ3ZGLElBQUksQ0FBQyxZQUFZLEVBQUUsWUFBWSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVEOzs7Ozs7Ozs7T0FTRztJQUNILDJCQUFLLEdBQUwsVUFBTSxRQUFnQixFQUFFLFFBQWdCLEVBQUUsV0FBOEMsRUFBRSxZQUFrQixFQUMxRyxZQUFrQjtRQUNsQixJQUFJLFdBQVcsWUFBWSxRQUFRLEVBQUU7WUFDbkMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxZQUFZLENBQUMsQ0FBQztTQUN4RTtRQUVELE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxXQUFXLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQzthQUNyRixJQUFJLENBQUMsWUFBWSxFQUFFLFlBQVksQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFRDs7Ozs7Ozs7T0FRRztJQUNILG9DQUFjLEdBQWQsVUFBZSxLQUFhLEVBQUUsV0FBOEMsRUFBRSxZQUFrQixFQUM5RixZQUFrQjtRQUNsQixJQUFJLFdBQVcsWUFBWSxRQUFRLEVBQUU7WUFDbkMsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLFlBQVksQ0FBQyxDQUFDO1NBQ3BFO1FBRUQsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxZQUFZLENBQUMsQ0FBQztJQUNyRSxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCw0QkFBTSxHQUFOLFVBQU8sWUFBa0IsRUFBRSxZQUFrQjtRQUMzQyxPQUFPLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxZQUFZLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBOEJELGlDQUFXLEdBQVg7UUFBWSxjQUFjO2FBQWQsVUFBYyxFQUFkLHFCQUFjLEVBQWQsSUFBYztZQUFkLHlCQUFjOztRQUN4Qix1R0FBdUc7UUFDdkcsSUFBSSxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxRQUFRLEVBQUU7WUFDekIsSUFBQSxLQUFnRSxJQUEwQyxFQUF6RyxRQUFRLFFBQUEsRUFBRSxRQUFRLFFBQUEsRUFBRSxhQUFXLFFBQUEsRUFBRSxjQUFZLFFBQUEsRUFBRSxjQUFZLFFBQThDLENBQUM7WUFDakgsT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLGFBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFZLEVBQUUsY0FBWSxDQUFDLENBQUM7U0FDOUY7UUFFRCx3Q0FBd0M7UUFDcEMsSUFBQSxLQUFnRSxJQUNLLEVBRHBFLEtBQUssUUFBQSxFQUFFLFdBQVcsUUFBQSxFQUFFLFdBQVcsUUFBQSxFQUFFLFlBQVksUUFBQSxFQUFFLFlBQVksUUFDUyxDQUFDO1FBQzFFLElBQUksV0FBVyxZQUFZLFFBQVEsRUFBRTtZQUNuQyxZQUFZLEdBQUcsWUFBWSxDQUFDO1lBQzVCLFlBQVksR0FBRyxXQUFXLENBQUM7WUFDM0IsV0FBVyxHQUFHLElBQUksQ0FBQztTQUNwQjtRQUVELE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLEVBQUUsV0FBVyxFQUFFLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsWUFBWSxDQUFDLENBQUM7SUFDeEcsQ0FBQztJQUVEOzs7Ozs7Ozs7T0FTRztJQUNILG1DQUFhLEdBQWIsVUFBYyxRQUFnQixFQUFFLFlBQWtCLEVBQUUsWUFBa0I7UUFDcEUsT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLFlBQVksQ0FBQyxDQUFDO0lBQzFFLENBQUM7SUFFRDs7Ozs7Ozs7Ozs7O09BWUc7SUFDSCxvQ0FBYyxHQUFkLFVBQWUsUUFBZ0IsRUFBRSxXQUFtQixFQUFFLFFBQWdCLEVBQUUsWUFBa0IsRUFDeEYsWUFBa0I7UUFDbEIsT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQUUsV0FBVyxFQUFFLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsWUFBWSxDQUFDLENBQUM7SUFDbEcsQ0FBQztJQUVEOzs7Ozs7Ozs7T0FTRztJQUNILHFDQUFlLEdBQWYsVUFBZ0IsSUFBZ0IsRUFBRSxZQUFrQixFQUFFLFlBQWtCO1FBQ3RFLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxZQUFZLENBQUMsQ0FBQztJQUMxRyxDQUFDO0lBRUQ7Ozs7Ozs7OztPQVNHO0lBQ0gscUNBQWUsR0FBZixVQUFnQixJQUFnQixFQUFFLFlBQWtCLEVBQUUsWUFBa0I7UUFDdEUsT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLFlBQVksQ0FBQyxDQUFDO0lBQzFHLENBQUM7SUFwT0Q7Ozs7Ozs7O09BUUc7SUFDb0IsMEJBQWMsR0FBRztRQUN0QyxNQUFNLEVBQUU7WUFDTixLQUFLLEVBQUUsR0FBRztZQUNWLE1BQU0sRUFBRSxHQUFHO1lBQ1gsS0FBSyxFQUFFLE9BQU87WUFDZCxJQUFJLEVBQUUsaUZBQWlGO1NBQ3hGO1FBQ0QsUUFBUSxFQUFFO1lBQ1IsS0FBSyxFQUFFLElBQUk7WUFDWCxNQUFNLEVBQUUsR0FBRztZQUNYLEtBQUssRUFBRSxPQUFPO1lBQ2QsSUFBSSxFQUFFLCtEQUErRDtTQUN0RTtRQUNELE1BQU0sRUFBRTtZQUNOLEtBQUssRUFBRSxJQUFJO1lBQ1gsTUFBTSxFQUFFLEdBQUc7WUFDWCxLQUFLLEVBQUUsWUFBWTtZQUNuQixJQUFJLEVBQUUsZ0ZBQWdGO1NBQ3ZGO1FBQ0QsT0FBTyxFQUFFO1lBQ1AsT0FBTyxFQUFFLENBQUM7WUFDVixLQUFLLEVBQUUsR0FBRztZQUNWLE1BQU0sRUFBRSxHQUFHO1NBQ1o7UUFDRCxRQUFRLEVBQUU7WUFDUixLQUFLLEVBQUUsR0FBRztZQUNWLE1BQU0sRUFBRSxHQUFHO1lBQ1gsS0FBSyxFQUFFLGVBQWU7WUFDdEIsSUFBSSxFQUFFLG9FQUFvRTtTQUMzRTtRQUNELFVBQVUsRUFBRTtZQUNWLEtBQUssRUFBRSxHQUFHO1lBQ1YsTUFBTSxFQUFFLEdBQUc7WUFDWCxLQUFLLEVBQUUsT0FBTztTQUNmO0tBQ0YsQ0FBQztJQXlMSixrQkFBQztDQUFBLEFBMU9ELENBQWlDLDZCQUFhLEdBME83QztBQTFPWSxrQ0FBVztBQWtaeEIsQ0FBQyxRQUFRLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFDLElBQUk7SUFDakYsSUFBTSxVQUFVLEdBQUcsY0FBWSxJQUFNLENBQUM7SUFDdEMsZ0VBQWdFO0lBQy9ELFdBQVcsQ0FBQyxTQUFpQixDQUFDLFVBQVUsQ0FBQyxHQUFHLFNBQVMsY0FBYyxDQUFDLFFBQStCLEVBQ2xHLE9BQWdDLEVBQUUsWUFBa0IsRUFBRSxZQUFrQjtRQUN4RSxJQUFJLE9BQU8sWUFBWSxRQUFRLEVBQUU7WUFDL0IsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsWUFBWSxDQUFDLENBQUM7U0FDOUQ7UUFFRCxJQUFNLEdBQUcsa0NBQ0gsV0FBVyxDQUFDLGNBQXNCLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLEdBQ3ZELENBQUMsT0FBTyxRQUFRLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEdBQ2xFLE9BQU8sSUFBSSxFQUFFLENBQ2pCLENBQUM7UUFFRixPQUFPLElBQUksQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLFlBQVksQ0FBQyxDQUFDO0lBQzVFLENBQUMsQ0FBQztBQUNKLENBQUMsQ0FBQyxDQUFDIn0=
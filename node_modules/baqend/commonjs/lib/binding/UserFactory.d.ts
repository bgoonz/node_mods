import { EntityFactory } from './EntityFactory';
import type * as model from '../model';
import { JsonMap, OpenWindowHandler } from '../util';
export declare enum LoginOption {
    /**
     * Do not login the user after a successful registration
     */
    NO_LOGIN = -1,
    /**
     * Login in after a successful registration and keep the token in a nonpermanent storage, i.e SessionStorage
     */
    SESSION_LOGIN = 0,
    /**
     * Login in after a successful registration and keep the token in a persistent storage, i.e LocalStorage
     */
    PERSIST_LOGIN = 1
}
/**
 * Creates a new instance of the managed type of this factory
 */
export declare class UserFactory extends EntityFactory<model.User> {
    get LoginOption(): typeof LoginOption;
    /**
     * @property oauth default properties
     * @property google default oauth properties for Google
     * @property facebook default oauth properties for Facebook
     * @property github default oauth properties for GitHub
     * @property twitter default oauth properties for Twitter
     * @property linkedin default oauth properties for LinkedIn
     * @property {Object} oauth.salesforce default oauth properties for Salesforce
     */
    static readonly DefaultOptions: {
        google: {
            width: number;
            height: number;
            scope: string;
            path: string;
        };
        facebook: {
            width: number;
            height: number;
            scope: string;
            path: string;
        };
        github: {
            width: number;
            height: number;
            scope: string;
            path: string;
        };
        twitter: {
            version: number;
            width: number;
            height: number;
        };
        linkedin: {
            width: number;
            height: number;
            scope: string;
            path: string;
        };
        salesforce: {
            width: number;
            height: number;
            scope: string;
        };
    };
    /**
     * The current logged in user, or <code>null</code> if the user is not logged in
     */
    get me(): model.User | null;
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
    register(user: string | model.User, password: string, loginOption?: boolean | LoginOption | Function, doneCallback?: any, failCallback?: any): Promise<model.User>;
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
    login(username: string, password: string, loginOption?: boolean | LoginOption | Function, doneCallback?: any, failCallback?: any): Promise<model.User>;
    /**
     * Log in the user assiciated with the given token and starts a user session.
     * @param token The user token.
     * @param [loginOption=true] The default keeps the user logged in over
     * multiple sessions
     * @param doneCallback Called when the operation succeed.
     * @param failCallback Called when the operation failed.
     * @return
     */
    loginWithToken(token: string, loginOption?: boolean | LoginOption | Function, doneCallback?: any, failCallback?: any): Promise<model.User>;
    /**
     * Log out the current logged in user and ends the active user session
     * @param doneCallback Called when the operation succeed.
     * @param failCallback Called when the operation failed.
     * @return
     */
    logout(doneCallback?: any, failCallback?: any): Promise<any>;
    /**
     * Change the password of the given user
     *
     * @param username Username to identify the user
     * @param password Current password of the user
     * @param newPassword New password of the user
     * @param doneCallback Called when the operation succeed.
     * @param failCallback Called when the operation failed.
     * @return
     */
    newPassword(username: string, password: string, newPassword: string, doneCallback?: any, failCallback?: any): Promise<model.User>;
    /**
     * Change the password of a user, which will be identified by the given token from the reset password e-mail
     *
     * @see resetPassword
     * @param token Token from the reset password e-mail
     * @param newPassword New password of the user
     * @param [loginOption=true]
     * The default keeps the user logged in over multiple sessions
     * @param doneCallback Called when the operation succeed.
     * @param failCallback Called when the operation failed.
     * @return
     */
    newPassword(token: string, newPassword: string, loginOption?: boolean | LoginOption, doneCallback?: any, failCallback?: any): Promise<model.User>;
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
    resetPassword(username: string, doneCallback?: any, failCallback?: any): Promise<any>;
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
    changeUsername(username: string, newUsername: string, password: string, doneCallback?: any, failCallback?: any): Promise<any>;
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
    requestAPIToken(user: model.User, doneCallback?: any, failCallback?: any): Promise<any>;
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
    revokeAllTokens(user: model.User, doneCallback?: any, failCallback?: any): Promise<any>;
}
export interface UserFactory extends EntityFactory<model.User> {
    /**
     * Logs the user in with Google via OAuth
     *
     * Prompts the user for the Google login in a new window. Before using OAuth you need to setup your application
     * on the provider website, add the redirect uri: <code>https://example.net/db/User/OAuth/google</code> and copy the
     * client id and the client secret to your Baqend dashboard settings. When the returned promise succeeds the user is
     * logged in.
     *
     * @param options
     * @param doneCallback Called when the operation succeed.
     * @param failCallback Called when the operation failed.
     * @return
     */
    loginWithGoogle(options: OAuthOptions, doneCallback?: any, failCallback?: any): Promise<model.User>;
    /**
     * Logs the user in with Facebook via OAuth
     *
     * Prompts the user for the Facebook login in a new window. Before using OAuth you need to setup your application
     * on the provider website, add the redirect uri: https://example.net/db/User/OAuth/facebook and copy the client id
     * and the client secret to your Baqend dashboard settings. When the returned promise succeeds the user is logged in.
     *
     * @param options
     * @param doneCallback Called when the operation succeed.
     * @param failCallback Called when the operation failed.
     * @return
     */
    loginWithFacebook(options: OAuthOptions, doneCallback?: any, failCallback?: any): Promise<model.User>;
    /**
     * Logs the user in with GitHub via OAuth
     *
     * Prompts the user for the GitHub login in a new window. Before using OAuth you need to setup your application
     * on the provider website, add the redirect uri: https://example.net/db/User/OAuth/github and copy the client id
     * and the client secret to your Baqend dashboard settings. When the returned promise succeeds the user is logged in.
     *
     * @param options
     * @param doneCallback Called when the operation succeed.
     * @param failCallback Called when the operation failed.
     * @return
     */
    loginWithGitHub(options: OAuthOptions, doneCallback?: any, failCallback?: any): Promise<model.User>;
    /**
     * Logs the user in with Twitter via OAuth
     *
     * Prompts the user for the Twitter login in a new window. Before using OAuth you need to setup your application
     * on the provider website, add the redirect uri: https://example.net/db/User/OAuth/twitter and copy the client id
     * and the client secret to your Baqend dashboard settings. When the returned promise succeeds the user is logged in.
     *
     * @param options
     * @param doneCallback Called when the operation succeed.
     * @param failCallback Called when the operation failed.
     * @return
     */
    loginWithTwitter(options: OAuthOptions, doneCallback?: any, failCallback?: any): Promise<model.User>;
    /**
     * Logs the user in with LinkedIn via OAuth
     *
     * Prompts the user for the LinkedIn login in a new window. Before using OAuth you need to setup your application
     * on the provider website, add the redirect uri: https://example.net/db/User/OAuth/linkedin and copy the client id
     * and the client secret to your Baqend dashboard settings. When the returned promise succeeds the user is logged in.
     *
     * @param options
     * @param doneCallback Called when the operation succeed.
     * @param failCallback Called when the operation failed.
     * @return
     */
    loginWithLinkedIn(options: OAuthOptions, doneCallback?: any, failCallback?: any): Promise<model.User>;
    /**
     * Logs the user in with Salesforce via OAuth
     *
     * Prompts the user for the Salesforce login in a new window. Before using OAuth you need to setup your application
     * on the provider website, add the redirect uri: <code>https://example.net/db/User/OAuth/salesforce</code> and copy the
     * client id and the client secret to your Baqend dashboard settings. When the returned promise succeeds the user is
     * logged in.
     *
     * @param options
     * @param doneCallback Called when the operation succeed.
     * @param failCallback Called when the operation failed.
     * @return
     */
    loginWithSalesforce(options: OAuthOptions, doneCallback?: any, failCallback?: any): Promise<model.User>;
    /**
     * Creates a new user object
     *
     * @param properties Additional properties which will be applied to the created instance
     * @return A new created user
     */
    new (properties?: {
        [property: string]: any;
    }): model.User;
}
export interface OAuthOptions {
    /**
     * The default keeps the user logged in over multiple sessions
     */
    loginOption?: LoginOption | boolean;
    /**
     * Sets the title of the popup window
     */
    title?: string;
    /**
     * Defines the width of the popup window
     */
    width?: number;
    /**
     * Defines the height of the popup window
     */
    height?: number;
    /**
     * The range of rights requested from the OAuth users profile
     */
    scope?: string;
    /**
     * The state which will be send as part of the OAuth flow
     */
    state?: JsonMap;
    /**
     * Timout after the OAuth flow will be aborted
     */
    timeout?: number;
    /**
     * if set this changes the oauth behaviour to redirect mode,
     * i.e. this site is closed to open the providers login page.
     * Once the login is finished this redirect url will be opened with the logged-in user's token attached.
     */
    redirect?: string;
    /**
     * The client id provided by the OAuth provider
     */
    clientId?: string;
    /**
     * The device code which was received from the OAuth provider, when the device OAuth flow is used
     */
    deviceCode?: string;
    /**
     * The OAuth login endpoint to start the login process.
     * This option is not required on OAuth1 flow, or the OAuth2 device flow
     */
    path?: string;
    /**
     * The OAuth login flow version. Can be 1 or 2. Defaults to 2
     */
    oAuthVersion?: number;
    /**
     * An optional open callback which will be used to open up the OAuth Pop-Up window
     */
    open?: OpenWindowHandler;
}

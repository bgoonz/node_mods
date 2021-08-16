import { Entity } from './Entity';
import type * as model from '../model';
import { JsonMap } from '../util';
export declare class User extends Entity {
    /**
     * The users username or email address
     */
    username?: string | null;
    /**
     * Indicates if the user is currently inactive, which disallow user login
     */
    inactive?: boolean | null;
    /**
     * Change the password of the given user
     *
     * @param currentPassword Current password of the user
     * @param password New password of the user
     * @param doneCallback Called when the operation succeed.
     * @param failCallback Called when the operation failed.
     * @return
     */
    newPassword(currentPassword: string, password: string, doneCallback?: any, failCallback?: any): Promise<model.User>;
    /**
     * Change the username of the current user
     *
     * @param newUsername New username for the current user
     * @param password The password of the current user
     * @param doneCallback Called when the operation succeed.
     * @param failCallback Called when the operation failed.
     * @return
     */
    changeUsername(newUsername: string, password: string, doneCallback?: any, failCallback?: any): Promise<any>;
    /**
     * Requests a perpetual token for the user
     *
     * Only users with the admin role are allowed to request an API token.
     *
     * @param doneCallback Called when the operation succeed.
     * @param failCallback Called when the operation failed.
     * @return
     */
    requestAPIToken(doneCallback?: any, failCallback?: any): Promise<JsonMap>;
}

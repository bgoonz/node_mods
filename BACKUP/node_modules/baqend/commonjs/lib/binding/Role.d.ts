import type * as model from '../model';
import { Entity } from './Entity';
export declare class Role extends Entity {
    /**
     * A set of users which have this role
     */
    users: Set<model.User> | null;
    /**
     * The name of the role
     */
    name: string | null;
    /**
     * Test if the given user has this role
     * @param user The user to check
     * @return <code>true</code> if the given user has this role,
     * otherwise <code>false</code>
     */
    hasUser(user: model.User): boolean;
    /**
     * Add the given user to this role
     * @param user The user to add
     */
    addUser(user: model.User): void;
    /**
     * Remove the given user from this role
     * @param user The user to remove
     */
    removeUser(user: model.User): void;
}

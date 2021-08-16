import { Permission } from './intersection/Permission';
import type { TrustedEntity } from './intersection';
import type { JsonMap } from './util';
/**
 * Creates a new Acl object, with an empty rule set for an object
 */
export declare class Acl {
    /**
     * The read permission of the object
     */
    readonly read: Permission;
    /**
     * The write permission of the object
     */
    readonly write: Permission;
    /**
     * Removes all acl rules, read and write access is public afterwards
     *
     * @return
     * */
    clear(): void;
    /**
     * Copies permissions from another ACL
     *
     * @param acl The ACL to copy from
     * @return
     */
    copy(acl: Acl): this;
    /**
     * Gets whenever all users and roles have the permission to read the object
     *
     * @return <code>true</code> If public access is allowed
     */
    isPublicReadAllowed(): boolean;
    /**
     * Sets whenever all users and roles should have the permission to read the object
     *
     * Note: All other allow read rules will be removed.
     *
     * @return
     * */
    setPublicReadAllowed(): void;
    /**
     * Checks whenever the user or role is explicit allowed to read the object
     *
     * @param userOrRole The user or role to check for
     * @return <code>true</code> if read access is explicitly allowed for the given user or role
     */
    isReadAllowed(userOrRole: TrustedEntity): boolean;
    /**
     * Checks whenever the user or role is explicit denied to read the object
     *
     * @param userOrRole The user or role to check for
     * @return <code>true</code> if read access is explicitly denied for the given user or role
     */
    isReadDenied(userOrRole: TrustedEntity): boolean;
    /**
     * Allows the given user or rule to read the object
     *
     * @param userOrRole The user or role to allow
     * @return this acl object
     */
    allowReadAccess(...userOrRole: TrustedEntity[]): this;
    /**
     * Denies the given user or rule to read the object
     *
     * @param userOrRole The user or role to deny
     * @return this acl object
     */
    denyReadAccess(...userOrRole: TrustedEntity[]): this;
    /**
     * Deletes any read allow/deny rule for the given user or role
     *
     * @param userOrRole The user or role
     * @return this acl object
     */
    deleteReadAccess(...userOrRole: TrustedEntity[]): this;
    /**
     * Gets whenever all users and roles have the permission to write the object
     *
     * @return <code>true</code> If public access is allowed
     */
    isPublicWriteAllowed(): boolean;
    /**
     * Sets whenever all users and roles should have the permission to write the object
     *
     * Note: All other allow write rules will be removed.
     *
     * @return
     * */
    setPublicWriteAllowed(): void;
    /**
     * Checks whenever the user or role is explicit allowed to write the object
     *
     * @param userOrRole The user or role to check for
     * @return <code>true</code> if write access is explicitly allowed for the given user or role
     */
    isWriteAllowed(userOrRole: TrustedEntity): boolean;
    /**
     * Checks whenever the user or role is explicit denied to write the object
     *
     * @param userOrRole The user or role to check for
     * @return <code>true</code> if write access is explicitly denied for the given user or role
     */
    isWriteDenied(userOrRole: TrustedEntity): boolean;
    /**
     * Allows the given user or rule to write the object
     *
     * @param userOrRole The user or role to allow
     * @return this acl object
     */
    allowWriteAccess(...userOrRole: TrustedEntity[]): this;
    /**
     * Denies the given user or rule to write the object
     *
     * @param userOrRole The user or role to deny
     * @return this acl object
     */
    denyWriteAccess(...userOrRole: TrustedEntity[]): this;
    /**
     * Deletes any write allow/deny rule for the given user or role
     *
     * @param userOrRole The user or role
     * @return this acl object
     */
    deleteWriteAccess(...userOrRole: TrustedEntity[]): this;
    /**
     * A JSON representation of the set of rules
     *
     * @return
     */
    toJSON(): JsonMap;
    /**
     * Sets the acl rules form JSON
     *
     * @param json The json encoded acls
     * @return
     */
    fromJSON(json: JsonMap): void;
}

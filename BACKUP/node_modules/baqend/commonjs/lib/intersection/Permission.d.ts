import type * as model from '../model';
import type { Json, JsonMap } from '../util';
export declare type TrustedEntity = model.User | model.Role | string;
export declare type BasePermission = ['load', 'update', 'delete', 'query', 'insert'];
/**
 * An aggregation of access rules for given object metadata.
 */
export declare class Permission {
    static readonly BASE_PERMISSIONS: BasePermission;
    rules: {
        [ref: string]: string;
    };
    /**
     * Returns a list of user and role references of all rules
     * @return a list of references
     */
    allRules(): string[];
    /**
     * Removes all rules from this permission object
     * @return
     */
    clear(): void;
    /**
     * Copies permissions from another permission object
     * @param permission The permission to copy from
     * @return
     */
    copy(permission: Permission): Permission;
    /**
     * Gets whenever all users and roles have the permission to perform the operation
     * @return <code>true</code> If public access is allowed
     */
    isPublicAllowed(): boolean;
    /**
     * Sets whenever all users and roles should have the permission to perform the operation
     *
     * Note: All other allow rules will be removed.
     *
     * @return
     */
    setPublicAllowed(): void;
    /**
     * Returns the actual rule of the given user or role.
     * @param userOrRole The user or role to check for
     * @return The actual access rule or undefined if no rule was found
     */
    getRule(userOrRole: TrustedEntity): string;
    /**
     * Checks whenever the user or role is explicit allowed to perform the operation.
     *
     * @param userOrRole The user or role to check for
     * @return <code>true</code> If the given user or role is allowed
     */
    isAllowed(userOrRole: TrustedEntity): boolean;
    /**
     * Checks whenever the user or role is explicit denied to perform the operation.
     *
     * @param userOrRole The user or role to check for
     * @return <code>true</code> If the given user or role is denied
     */
    isDenied(userOrRole: TrustedEntity): boolean;
    /**
     * Allows the given users or rules to perform the operation
     * @param userOrRole The users or roles to allow
     * @return this permission object
     */
    allowAccess(...userOrRole: TrustedEntity[]): Permission;
    /**
     * Denies the given users or rules to perform the operation
     * @param userOrRole The users or roles to deny
     * @return this permission object
     */
    denyAccess(...userOrRole: TrustedEntity[]): Permission;
    /**
     * Deletes any allow/deny rules for the given users or roles
     * @param userOrRole The users or roles to delete rules for
     * @return this permission object
     */
    deleteAccess(...userOrRole: TrustedEntity[]): Permission;
    /**
     * A Json representation of the set of rules
     * @return
     */
    toJSON(): JsonMap;
    /**
     * Sets the permission rules from json
     * @param json The permission json representation
     * @return
     */
    fromJSON(json: Json): void;
    /**
     * Creates a permission from the given rules.
     * @param json The rules.
     * @return The permission.
     */
    static fromJSON(json: JsonMap): Permission;
    /**
     * Resolves user and role references and validate given references
     * @param userOrRole The user, role or reference
     * @return The resolved and validated reference
     */
    private ref;
}

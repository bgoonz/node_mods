import { Acl } from '../Acl';
import { Lockable } from '../util';
import type { EntityManager } from '../EntityManager';
import type { Entity, Managed } from '../binding';
import type { EntityType, ManagedType } from '../metamodel';
export interface ManagedState {
    db?: EntityManager;
    type: ManagedType<any>;
    /**
     * Indicates the the object is modified by the user
     */
    setDirty(): void;
}
export declare enum MetadataState {
    UNAVAILABLE = -1,
    PERSISTENT = 0,
    DIRTY = 1
}
/**
 * The Metadata instance tracks the state of an object and checks if the object state was changed since last
 * load/update. The metadata keeps therefore the state of:
 * - in which state the object currently is
 * - which db managed the instance
 * - the metadata of the object (id, version, bucket)
 * - which is the owning object (root object) of an embedded object
 *
 * {@link Metadata#get(object)} can be used on any managed object to retrieve the metadata of the root object
 */
export declare class Metadata extends Lockable implements ManagedState {
    entityManager: EntityManager | null;
    type: EntityType<any>;
    decodedKey: string | null;
    id: string | null;
    state: MetadataState;
    version: number | null;
    enabled: boolean;
    acl: Acl;
    /**
     * Creates temporary metadata instance for the given embeddable type
     *
     * @param type The type of the object
     * @param db a EntityManager which will be attached to the state
     * @return The created metadata for the object
     */
    static create<T extends Managed>(type: ManagedType<T>, db?: EntityManager): ManagedState;
    /**
     * Creates a metadata instance for the given entity type
     *
     * @param type The type of the object
     * @param db a optional EntityManager which will be attached to the state
     * @return The created metadata for the object
     */
    static create<T extends Entity>(type: EntityType<T>, db?: EntityManager): ManagedState | Metadata;
    /**
     * Returns the metadata of the managed object
     * @param managed
     * @return
     */
    static get(managed: Entity): Metadata;
    /**
     * @type EntityManager
     */
    get db(): EntityManager;
    /**
     * @param db
     */
    set db(db: EntityManager);
    /**
     * @type string
     * @readonly
     */
    get bucket(): string;
    /**
     * @type string
     * @readonly
     */
    get key(): string | null;
    /**
     * @param value
     */
    set key(value: string | null);
    /**
     * Indicates if this object already belongs to an db
     * <code>true</code> if this object belongs already to an db otherwise <code>false</code>
     * @type boolean
     * @readonly
     */
    get isAttached(): boolean;
    /**
     * Indicates if this object is represents a db object, but was not loaded up to now
     * @type boolean
     * @readonly
     */
    get isAvailable(): boolean;
    /**
     * Indicates if this object represents the state of the db and was not modified in any manner
     * @type boolean
     * @readonly
     */
    get isPersistent(): boolean;
    /**
     * Indicates that this object was modified and the object was not written back to the db
     * @type boolean
     * @readonly
     */
    get isDirty(): boolean;
    /**
     * @param type
     */
    constructor(type: EntityType<any>);
    /**
     * Enable/Disable state change tracking of this object
     * @param newStateTrackingState The new change tracking state
     * @return
     */
    enable(newStateTrackingState: boolean): void;
    /**
     * Throws the corresponding error if a property is accessed before the owning object is loaded
     * @throws an exception if the object properties aren't available and the object is enabled
     */
    throwUnloadedPropertyAccess(property: string): void;
    /**
     * Indicates that the associated object isn't available
     * @return
     */
    setUnavailable(): void;
    /**
     * Indicates that the associated object is not stale
     *
     * An object is stale if it correlates the database state and is not modified by the user.
     *
     * @return
     */
    setPersistent(): void;
    /**
     * Indicates the the object is modified by the user
     * @return
     */
    setDirty(): void;
    /**
     * Indicates the the object is removed
     * @return
     */
    setRemoved(): void;
}

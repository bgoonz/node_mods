import { Managed } from './Managed';
import { EntityPartialUpdateBuilder } from '../partialupdate';
import { Json } from '../util';
import { Metadata, ValidationResult } from '../intersection';
import type { EntityManager } from '../EntityManager';
export interface Entity {
    /**
     * Contains the metadata of this managed object
     */
    _metadata: Metadata;
}
export declare class Entity extends Managed {
    /**
     * Date of the creation of the object
     * @name createdAt
     * @readonly
     * @memberOf Entity.prototype
     * @type Date
     */
    createdAt?: Date | null;
    /**
     * Last update date of the object
     * @name updatedAt
     * @readonly
     * @memberOf Entity.prototype
     * @type Date
     */
    updatedAt?: Date | null;
    /**
     * The unique id of this object
     *
     * Sets the unique id of this object, if the id is not formatted as an valid id,
     * it will be used as the key component of the id has the same affect as setting the key
     *
     * @type string
     */
    get id(): string | null;
    set id(value: string | null);
    /**
     * The unique key part of the id
     * When the key of the unique id is set an error will be thrown if an id is already set.
     * @type string
     */
    get key(): string | null;
    set key(value: string | null);
    /**
     * The version of this object
     * @type number
     * @readonly
     */
    get version(): number | null;
    /**
     * The object read/write permissions
     * @type Acl
     * @readonly
     */
    get acl(): import("..").Acl;
    /**
     * Attach this object to the given db
     * @param db The db which will be used for future crud operations
     * @return
     */
    attach(db: EntityManager): void;
    /**
     * Waits on the previously requested operation on this object completes
     * operations on this object is completed.
     * @return A promise which completes successfully, when the previously requested
     * operation completes
     */
    ready(): Promise<this>;
    /**
     * Waits on the previously requested operation on this object completes
     * @param doneCallback The callback which will be invoked when the previously
     * operations on this object is completed.
     * @return A promise which completes successfully, when the previously requested
     * operation completes
     */
    ready<R>(doneCallback: (entity: this) => R): Promise<R>;
    /**
     * Saves the object. Inserts the object if it doesn't exists and updates the object if the object exist.
     * @param [options] The save options
     * @param [options.force=false] Force the save operation, the version will not be validated.
     * @param [options.depth=0] The object depth which will be saved. Depth 0 save this object only,
     * <code>true</code> saves the objects by reachability.
     * @param [options.refresh=false] Refresh the local object state from remote.
     * @param doneCallback Called when the operation succeed.
     * @param failCallback Called when the operation failed.
     * @return A Promise that will be fulfilled when the asynchronous operation completes.
     */
    save(options?: {
        force?: boolean;
        depth?: number | boolean;
        refresh?: boolean;
    }, doneCallback?: any, failCallback?: any): Promise<this>;
    /**
     * Inserts a new object. Inserts the object if it doesn't exists and raise an error if the object already exist.
     * @param [options] The insertion options
     * @param [options.depth=0] The object depth which will be inserted. Depth 0 insert this object only,
     * <code>true</code> inserts objects by reachability.
     * @param [options.refresh=false] Refresh the local object state from remote.
     * @param doneCallback Called when the operation succeed.
     * @param failCallback Called when the operation failed.
     * @return A Promise that will be fulfilled when the asynchronous operation completes.
     * @method
     */
    insert(options?: {
        depth?: number | boolean;
        refresh?: boolean;
    }, doneCallback?: any, failCallback?: any): Promise<this>;
    /**
     * Updates an existing object
     *
     * Updates the object if it exists and raise an error if the object doesn't exist.
     *
     * @param [options] The update options
     * @param [options.force=false] Force the update operation,
     * the version will not be validated, only existence will be checked.
     * @param [options.depth=0] The object depth which will be updated. Depth 0 updates this object only,
     * <code>true</code> updates objects by reachability.
     * @param [options.refresh=false] Refresh the local object state from remote.
     * @param doneCallback Called when the operation succeed.
     * @param failCallback Called when the operation failed.
     * @return A Promise that will be fulfilled when the asynchronous operation completes.
     * @method
     */
    update(options?: {
        force?: boolean;
        depth?: number | boolean;
        refresh?: boolean;
    }, doneCallback?: any, failCallback?: any): Promise<this>;
    /**
     * Resolves the referenced object in the specified depth
     *
     * Only unresolved objects will be loaded unless the refresh option is specified.
     *
     * Removed objects will be marked as removed.
     * @param [options] The load options
     * @param [options.depth=0] The object depth which will be loaded. Depth set to <code>true</code>
     * loads objects by reachability.
     * @param [options.refresh=false] Refresh the local object state from remote.
     * @param doneCallback Called when the operation succeed.
     * @param failCallback Called when the operation failed.
     * @return A Promise that will be fulfilled when the asynchronous operation completes.
     * @method
     */
    load(options?: {
        depth?: number | boolean;
        refresh?: boolean;
    }, doneCallback?: any, failCallback?: any): Promise<this>;
    /**
     * Deletes an existing object
     *
     * @param [options] The remove options
     * @param [options.force=false] Force the remove operation, the version will not be validated.
     * @param [options.depth=0] The object depth which will be removed. Depth 0 removes this object only,
     * <code>true</code> removes objects by reachability.
     * @param doneCallback Called when the operation succeed.
     * @param failCallback Called when the operation failed.
     * @return A Promise that will be fulfilled when the asynchronous operation completes.
     * @method
     */
    delete(options?: {
        force?: boolean;
        depth?: number | boolean;
    }, doneCallback?: any, failCallback?: any): Promise<this>;
    /**
     * Saves the object and repeats the operation if the object is out of date
     *
     * In each pass the callback will be called. Ths first parameter of the callback is the entity and the second one
     * is a function to abort the process.
     *
     * @param cb Will be called in each pass
     * @param doneCallback Called when the operation succeed.
     * @param failCallback Called when the operation failed.
     * @return A Promise that will be fulfilled when the asynchronous operation completes.
     * @method
     */
    optimisticSave(cb: (entity: this, abort: () => void) => any, doneCallback?: any, failCallback?: any): Promise<this>;
    attr(): void;
    /**
     * Validates the entity by using the validation code of the entity type
     *
     * @return Contains the result of the Validation
     * @method
     */
    validate(): ValidationResult;
    /**
     * Starts a partial update on this entity
     *
     * @param operations initial operations which should be executed
     * @return
     */
    partialUpdate(operations?: Json): EntityPartialUpdateBuilder<this>;
    /**
     * Get all objects which refer to this object
     *
     * @param [options] Some options to pass
     * @param [options.classes] An array of class names to filter for, null for no filter
     * @return A promise resolving with an array of all referencing objects
     * @method
     */
    getReferencing(options?: {
        classes: string[];
    }): Promise<Entity[]>;
    /**
     * Returns this object identifier or the baqend type of this object
     * @return the object id or type whatever is available
     */
    toString(): string;
    /**
     * Converts the object to an JSON-Object
     * @param [options=false] to json options by default excludes the metadata
     * @param [options.excludeMetadata=false] Excludes the metadata form the serialized json
     * @param [options.depth=0] Includes up to depth referenced objects into the serialized json
     * @return JSON-Object
     * @method
     */
    toJSON(options?: boolean | {
        excludeMetadata?: boolean;
        depth?: boolean | number;
    }): Json;
}

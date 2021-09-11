import { ManagedFactory } from './ManagedFactory';
import type { Entity } from './Entity';
import { Json } from '../util';
import { Builder } from '../query';
import { EntityPartialUpdateBuilder } from '../partialupdate';
export declare class EntityFactory<T extends Entity> extends ManagedFactory<T> {
    /**
     * Creates a new instance of the factory type
     *
     * @param args Constructor arguments used for instantiation, the constructor will not be called
     * when no arguments are passed
     * @return A new created instance of T
     */
    newInstance(args?: any[] | IArguments): T;
    /**
     * Loads the instance for the given id, or null if the id does not exists.
     * @param id The id to query
     * @param [options] The load options
     * @param [options.depth=0] The object depth which will be loaded. Depth 0 loads only this object,
     * <code>true</code> loads the objects by reachability.
     * @param [options.refresh=false] Indicates whether the object should be revalidated (cache bypass).
     * @param [options.local=false] Indicates whether the local copy (from the entity manager)
     * of an object should be returned if it exists. This value might be stale.
     * @param doneCallback Called when the operation succeed.
     * @param failCallback Called when the operation failed.
     * @return A Promise that will be fulfilled when the asynchronous operation completes.
     */
    load(id: string, options?: {
        depth?: number | boolean;
        refresh?: boolean;
        local?: boolean;
    }, doneCallback?: any, failCallback?: any): Promise<T | null>;
    /**
     * Gets an unloaded reference for the given id.
     * @param id The id of an object to get a reference for.
     * @return An unloaded reference to the object with the given id.
     */
    ref(id: string): T;
    /**
     * Creates a new instance and sets the DatabaseObject to the given json
     * @param json
     * @return instance
     */
    fromJSON(json: Json): T;
    /**
     * Creates a new query for this class
     * @return The query builder
     */
    find(): Builder<T>;
    /**
     * Creates a new partial update for this class
     * @param id The id to partial update
     * @param [partialUpdate] An initial partial update to execute
     * @return A partial update builder for the given entity id
     */
    partialUpdate(id: string, partialUpdate?: Json): EntityPartialUpdateBuilder<T>;
}

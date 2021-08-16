import { Class, Json } from '../util';
import type { ManagedState } from '../intersection/Metadata';
export interface Managed {
    /**
     * The managed properties of this object
     */
    [property: string]: any;
    /**
     * Contains the metadata of this managed object
     */
    _metadata: ManagedState;
}
export declare class Managed {
    /**
     * Initialize the given instance
     * @param instance The managed instance to initialize
     * @param properties The optional properties to set on the instance
     */
    static init(instance: Managed, properties?: {
        [property: string]: any;
    }): void;
    /**
     * Creates a subclass of this class
     * @param {Class<*>} childClass
     * @return {Class<*>} The extended child class
     */
    static extend(childClass: Class<any> | Function): Class<any> | Function;
    /**
     * The default constructor, copy all given properties to this object
     * @param properties - The optional properties to copy
     */
    constructor(properties?: {
        [property: string]: any;
    });
    /**
     * Returns this object identifier or the baqend type of this object
     * @return the object id or type whatever is available
     */
    toString(): string;
    /**
     * Converts the managed object to an JSON-Object.
     * @return JSON-Object
     * @method
     */
    toJSON(): Json;
}

import { Class, Json } from '../util';
import { ManagedState } from '../intersection';
export declare enum PersistenceType {
    BASIC = 0,
    EMBEDDABLE = 1,
    ENTITY = 2,
    MAPPED_SUPERCLASS = 3
}
export declare abstract class Type<T> {
    readonly ref: string;
    readonly name: string;
    _typeConstructor?: Class<T>;
    /**
     * The persistent type of this type
     */
    get persistenceType(): number;
    /**
     * @type boolean
     * @readonly
     */
    get isBasic(): boolean;
    /**
     * @type boolean
     * @readonly
     */
    get isEmbeddable(): boolean;
    /**
     * @type boolean
     * @readonly
     */
    get isEntity(): boolean;
    /**
     * @type boolean
     * @readonly
     */
    get isMappedSuperclass(): boolean;
    /**
     * The type constructor of this type
     */
    get typeConstructor(): Class<T>;
    /**
     * @param typeConstructor - sets the type constructor of this type if it is not already set
     */
    set typeConstructor(typeConstructor: Class<T>);
    /**
     * @param ref
     * @param typeConstructor
     */
    protected constructor(ref: string, typeConstructor?: Class<T>);
    /**
     * Merge the json data into the current object instance and returns the merged object
     * @param state The root object state
     * @param jsonValue The json data to merge
     * @param currentValue The object where the jsonObject will be merged into, if the current object is null,
     *  a new instance will be created
     * @param options additional options which are applied through the conversion
     * @param [options.onlyMetadata=false] Indicates that only the metadata should be updated of the object
     * @param [options.persisting=false] indicates if the current state will be persisted.
     * Used to update the internal change tracking state of collections and mark the object persistent or dirty afterwards
     * @return The merged object instance
     */
    abstract fromJsonValue(state: ManagedState, jsonValue: Json, currentValue: T | null, options: {
        persisting: boolean;
        onlyMetadata?: boolean;
    }): T | null;
    /**
     * Converts the given object to json
     * @param state The root object state
     * @param object The object to convert
     * @param options additional options which are applied through the conversion
     * @param [options.excludeMetadata=false] Indicates that no metadata should be exposed on the generated json
     * @param [options.depth=0] The object depth to serialize
     * @param [options.persisting=false] indicates if the current state will be persisted.
     *  Used to update the internal change tracking state of collections and mark the object persistent if its true
     * @return The converted object as json
     */
    abstract toJsonValue(state: ManagedState, object: T | null, options: {
        excludeMetadata?: boolean;
        depth?: number | boolean;
        persisting: boolean;
    }): Json;
}

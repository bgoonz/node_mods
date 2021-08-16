import { JsonMap } from '../util';
declare type IndexSpec = {
    [name: string]: string;
}[];
/**
 * Creates a new index instance which is needed to create an
 * database index.
 */
export declare class DbIndex {
    static readonly ASC = "asc";
    static readonly DESC = "desc";
    static readonly GEO: 'geo';
    /**
     * An array of mappings from field to index type which are parts of this index/compound index
     */
    keys: IndexSpec;
    unique: boolean;
    /**
     * Returns DbIndex Object created from the given JSON
     * @param json
     * @return
     */
    static fromJSON(json: JsonMap): DbIndex;
    /**
     * @param keys The name of the field which will be used
     * for the index,
     * an object of an field and index type combination or
     * an array of objects to create an compound index
     * @param unique Indicates if the index will be unique
     */
    constructor(keys: string | {
        [name: string]: string;
    } | IndexSpec, unique?: boolean);
    /**
     * Indicates if this index is for the given field or includes it in a compound index
     * @param name The name of the field to check for
     * @return <code>true</code> if the index contains this field
     */
    hasKey(name: string): boolean;
    /**
     * Indicates if this index is a compound index of multiple attributes
     * @type boolean
     * @readonly
     */
    get isCompound(): boolean;
    /**
     * Indicates if this index is an unique index
     * @type boolean
     * @readonly
     */
    get isUnique(): boolean;
    /**
     * Returns a JSON representation of the Index object
     *
     * @return A Json of this Index object
     */
    toJSON(): JsonMap;
}
export {};

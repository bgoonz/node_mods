import { ManagedType } from './ManagedType';
import { EntityType } from './EntityType';
import { Enhancer, Managed } from '../binding';
import { DbIndex } from './DbIndex';
import { Class, Json, JsonArray, JsonMap, Lockable } from '../util';
import type { EntityManagerFactory } from '../EntityManagerFactory';
import type { EmbeddableType } from './EmbeddableType';
import type { BasicType } from './BasicType';
import type { Type } from './Type';
export declare class Metamodel extends Lockable {
    /**
     * Defines if the Metamodel has been finalized
     */
    isInitialized: boolean;
    entityManagerFactory: EntityManagerFactory;
    entities: {
        [name: string]: EntityType<any>;
    };
    embeddables: {
        [name: string]: EmbeddableType<any>;
    };
    baseTypes: {
        [name: string]: BasicType<any>;
    };
    enhancer: Enhancer;
    /**
     * Constructs a new metamodel instance which represents the complete schema of one baqend app
     * @param entityManagerFactory
     */
    constructor(entityManagerFactory: EntityManagerFactory);
    /**
     * Prepare the Metamodel for custom schema creation
     * @param jsonMetamodel initialize the metamodel with the serialized json schema
     * @return
     */
    init(jsonMetamodel?: JsonMap): void;
    /**
     * @param arg
     * @return
     */
    getRef(arg: Class<Managed> | Function | string): string | null;
    /**
     * Return the metamodel entity type representing the entity.
     *
     * @param typeConstructor - the type of the represented entity
     * @return the metamodel entity type or null if the class is not a managed entity
     */
    entity(typeConstructor: Class<any> | Function | string): EntityType<any> | null;
    /**
     * Return the metamodel basic type representing the native class.
     * @param typeConstructor - the type of the represented native class
     * @return the metamodel basic type
     */
    baseType(typeConstructor: Class<any> | string): BasicType<any> | null;
    /**
     * Return the metamodel embeddable type representing the embeddable class.
     * @param typeConstructor - the type of the represented embeddable class
     * @return the metamodel embeddable type or null if the class is not a managed embeddable
     */
    embeddable(typeConstructor: Class<any> | Function | string): EmbeddableType<any> | null;
    /**
     * Return the metamodel managed type representing the entity, mapped superclass, or embeddable class.
     *
     * @param typeConstructor - the type of the represented managed class
     * @return the metamodel managed type
     */
    managedType(typeConstructor: Class<any> | Function | string): ManagedType<any> | null;
    /**
     * @param type
     * @return the added type
     */
    addType(type: Type<any>): Type<any>;
    /**
     * Load all schema data from the server
     * @return
     */
    load(): Promise<Metamodel>;
    /**
     * Store all local schema data on the server, or the provided one
     *
     * Note: The schema must be initialized, by init or load
     *
     * @param managedType The specific type to persist, if omitted the complete schema
     * will be updated
     * @return
     */
    save(managedType?: ManagedType<any>): Promise<Metamodel>;
    /**
     * Update the metamodel with the schema
     *
     * The provided data object will be forwarded to the UpdateAllSchemas resource.
     * The underlying schema of this Metamodel object will be replaced by the result.
     *
     * @param data The JSON which will be send to the UpdateAllSchemas resource.
     * @return
     */
    update(data: JsonMap | JsonArray): Promise<Metamodel>;
    private sendUpdate;
    /**
     * Get the current schema types as json
     * @return the json data
     */
    toJSON(): JsonArray;
    /**
     * Replace the current schema by the provided one in json
     * @param json The json schema data
     * @return
     */
    fromJSON(json: Json): void;
    /**
     * Creates an index
     *
     * @param bucket Name of the Bucket
     * @param index Will be applied for the given bucket
     * @return
     */
    createIndex(bucket: string, index: DbIndex): Promise<any>;
    /**
     * Drops an index
     *
     * @param bucket Name of the Bucket
     * @param index Will be dropped for the given bucket
     * @return
     */
    dropIndex(bucket: string, index: DbIndex): Promise<any>;
    /**
     * Drops all indexes
     *
     * @param bucket Indexes will be dropped for the given bucket
     * @return
     */
    dropAllIndexes(bucket: string): Promise<any>;
    /**
     * Loads all indexes for the given bucket
     *
     * @param bucket Current indexes will be loaded for the given bucket
     * @return
     */
    getIndexes(bucket: string): Promise<DbIndex[]>;
}

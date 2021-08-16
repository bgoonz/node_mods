import { Class, Json, JsonMap, JsonArray } from '../util';
import { File } from '../binding';
import { GeoPoint } from '../GeoPoint';
import { PersistenceType, Type } from './Type';
import { ManagedState } from '../intersection';
export declare class BasicType<T> extends Type<T> {
    static readonly Boolean: {
        fromJsonValue(state: ManagedState, json: Json, currentValue: Boolean | null): Boolean | null;
        /**
         * Indicates if this type is not the main type of the constructor
         */
        noResolving: boolean;
        /**
         * @inheritDoc
         */
        readonly persistenceType: PersistenceType;
        /**
         * @inheritDoc
         */
        toJsonValue(state: ManagedState, currentValue: Boolean | null): Json;
        toString(): string;
        readonly ref: string;
        readonly name: string;
        _typeConstructor?: Class<Boolean> | undefined;
        readonly isBasic: boolean;
        readonly isEmbeddable: boolean;
        readonly isEntity: boolean;
        readonly isMappedSuperclass: boolean;
        typeConstructor: Class<Boolean>;
    };
    static readonly Double: {
        fromJsonValue(state: ManagedState, json: Json, currentValue: Number | null): number | Number | null;
        /**
         * Indicates if this type is not the main type of the constructor
         */
        noResolving: boolean;
        /**
         * @inheritDoc
         */
        readonly persistenceType: PersistenceType;
        /**
         * @inheritDoc
         */
        toJsonValue(state: ManagedState, currentValue: Number | null): Json;
        toString(): string;
        readonly ref: string;
        readonly name: string;
        _typeConstructor?: Class<Number> | undefined;
        readonly isBasic: boolean;
        readonly isEmbeddable: boolean;
        readonly isEntity: boolean;
        readonly isMappedSuperclass: boolean;
        typeConstructor: Class<Number>;
    };
    static readonly Integer: {
        fromJsonValue(state: ManagedState, json: Json, currentValue: number | null): number | Number | null;
        /**
         * Indicates if this type is not the main type of the constructor
         */
        noResolving: boolean;
        /**
         * @inheritDoc
         */
        readonly persistenceType: PersistenceType;
        /**
         * @inheritDoc
         */
        toJsonValue(state: ManagedState, currentValue: Number | null): Json;
        toString(): string;
        readonly ref: string;
        readonly name: string;
        _typeConstructor?: Class<Number> | undefined;
        readonly isBasic: boolean;
        readonly isEmbeddable: boolean;
        readonly isEntity: boolean;
        readonly isMappedSuperclass: boolean;
        typeConstructor: Class<Number>;
    };
    static readonly String: {
        fromJsonValue(state: ManagedState, json: Json, currentValue: String | null): String | null;
        /**
         * Indicates if this type is not the main type of the constructor
         */
        noResolving: boolean;
        /**
         * @inheritDoc
         */
        readonly persistenceType: PersistenceType;
        /**
         * @inheritDoc
         */
        toJsonValue(state: ManagedState, currentValue: String | null): Json;
        toString(): string;
        readonly ref: string;
        readonly name: string;
        _typeConstructor?: Class<String> | undefined;
        readonly isBasic: boolean;
        readonly isEmbeddable: boolean;
        readonly isEntity: boolean;
        readonly isMappedSuperclass: boolean;
        typeConstructor: Class<String>;
    };
    static readonly DateTime: {
        toJsonValue(state: ManagedState, value: Date | null): string | null;
        fromJsonValue(state: ManagedState, json: Json, currentValue: Date | null): Date | null;
        /**
         * Indicates if this type is not the main type of the constructor
         */
        noResolving: boolean;
        /**
         * @inheritDoc
         */
        readonly persistenceType: PersistenceType;
        toString(): string;
        readonly ref: string;
        readonly name: string;
        _typeConstructor?: Class<Date> | undefined;
        readonly isBasic: boolean;
        readonly isEmbeddable: boolean;
        readonly isEntity: boolean;
        readonly isMappedSuperclass: boolean;
        typeConstructor: Class<Date>;
    };
    static readonly Date: {
        toJsonValue(state: ManagedState, value: Date | null): string | null;
        fromJsonValue(state: ManagedState, json: Json, currentValue: Date | null): Date | null;
        /**
         * Indicates if this type is not the main type of the constructor
         */
        noResolving: boolean;
        /**
         * @inheritDoc
         */
        readonly persistenceType: PersistenceType;
        toString(): string;
        readonly ref: string;
        readonly name: string;
        _typeConstructor?: Class<Date> | undefined;
        readonly isBasic: boolean;
        readonly isEmbeddable: boolean;
        readonly isEntity: boolean;
        readonly isMappedSuperclass: boolean;
        typeConstructor: Class<Date>;
    };
    static readonly Time: {
        toJsonValue(state: ManagedState, value: Date | null): string | null;
        fromJsonValue(state: ManagedState, json: Json, currentValue: Date | null): Date | null;
        /**
         * Indicates if this type is not the main type of the constructor
         */
        noResolving: boolean;
        /**
         * @inheritDoc
         */
        readonly persistenceType: PersistenceType;
        toString(): string;
        readonly ref: string;
        readonly name: string;
        _typeConstructor?: Class<Date> | undefined;
        readonly isBasic: boolean;
        readonly isEmbeddable: boolean;
        readonly isEntity: boolean;
        readonly isMappedSuperclass: boolean;
        typeConstructor: Class<Date>;
    };
    static readonly File: {
        toJsonValue(state: ManagedState, value: File | null): string | null;
        fromJsonValue(state: ManagedState, json: Json, currentValue: File | null): File | null;
        /**
         * Indicates if this type is not the main type of the constructor
         */
        noResolving: boolean;
        /**
         * @inheritDoc
         */
        readonly persistenceType: PersistenceType;
        toString(): string;
        readonly ref: string;
        readonly name: string;
        _typeConstructor?: Class<File> | undefined;
        readonly isBasic: boolean;
        readonly isEmbeddable: boolean;
        readonly isEntity: boolean;
        readonly isMappedSuperclass: boolean;
        typeConstructor: Class<File>;
    };
    static readonly GeoPoint: {
        toJsonValue(state: ManagedState, value: GeoPoint | null): JsonMap | null;
        fromJsonValue(state: ManagedState, json: Json): GeoPoint | null;
        /**
         * Indicates if this type is not the main type of the constructor
         */
        noResolving: boolean;
        /**
         * @inheritDoc
         */
        readonly persistenceType: PersistenceType;
        toString(): string;
        readonly ref: string;
        readonly name: string;
        _typeConstructor?: Class<GeoPoint> | undefined;
        readonly isBasic: boolean;
        readonly isEmbeddable: boolean;
        readonly isEntity: boolean;
        readonly isMappedSuperclass: boolean;
        typeConstructor: Class<GeoPoint>;
    };
    static readonly JsonArray: {
        toJsonValue(state: ManagedState, value: Array<any> | null): any[] | null;
        fromJsonValue(state: ManagedState, json: Json): JsonArray | null;
        /**
         * Indicates if this type is not the main type of the constructor
         */
        noResolving: boolean;
        /**
         * @inheritDoc
         */
        readonly persistenceType: PersistenceType;
        toString(): string;
        readonly ref: string;
        readonly name: string;
        _typeConstructor?: Class<JsonArray> | undefined;
        readonly isBasic: boolean;
        readonly isEmbeddable: boolean;
        readonly isEntity: boolean;
        readonly isMappedSuperclass: boolean;
        typeConstructor: Class<JsonArray>;
    };
    static readonly JsonObject: {
        fromJsonValue(state: ManagedState, json: Json, currentValue: JsonMap | null): JsonMap | null;
        toJsonValue(state: ManagedState, value: JsonMap | null): JsonMap | null;
        /**
         * Indicates if this type is not the main type of the constructor
         */
        noResolving: boolean;
        /**
         * @inheritDoc
         */
        readonly persistenceType: PersistenceType;
        toString(): string;
        readonly ref: string;
        readonly name: string;
        _typeConstructor?: Class<JsonMap> | undefined;
        readonly isBasic: boolean;
        readonly isEmbeddable: boolean;
        readonly isEntity: boolean;
        readonly isMappedSuperclass: boolean;
        typeConstructor: Class<JsonMap>;
    };
    /**
     * Indicates if this type is not the main type of the constructor
     */
    noResolving: boolean;
    /**
     * @inheritDoc
     */
    get persistenceType(): PersistenceType;
    /**
     * Creates a new instance of a native db type
     * @param ref The db ref of this type
     * @param typeConstructor The javascript class of this type
     * @param noResolving Indicates if this type is not the main type of the constructor
     */
    constructor(ref: string, typeConstructor: Class<T>, noResolving?: boolean);
    /**
     * @inheritDoc
     */
    toJsonValue(state: ManagedState, currentValue: T | null): Json;
    /**
     * @inheritDoc
     */
    fromJsonValue(state: ManagedState, json: Json, currentValue: T | null): T | null;
    toString(): string;
}

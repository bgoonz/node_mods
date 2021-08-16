import { Entity, EntityFactory } from '../binding';
import { Class, Json, JsonMap } from '../util';
import { ManagedType } from './ManagedType';
import { PersistenceType } from './Type';
import { SingularAttribute } from './SingularAttribute';
import type { Acl } from '../Acl';
import type { EntityManager } from '../EntityManager';
import { Attribute } from './Attribute';
import { Permission, ManagedState } from '../intersection';
export declare class EntityType<T extends Entity> extends ManagedType<T> {
    static Object: {
        new (): {
            createProxyClass(): Class<any>;
            fromJsonValue(state: ManagedState, jsonObject: Json, currentObject: any | null, options: {
                persisting?: boolean;
                onlyMetadata?: boolean;
            }): any | null;
            createObjectFactory(): EntityFactory<any>;
            declaredId: SingularAttribute<String> | null;
            declaredVersion: SingularAttribute<Number> | null;
            declaredAcl: SingularAttribute<Acl> | null;
            loadPermission: Permission;
            updatePermission: Permission;
            deletePermission: Permission;
            queryPermission: Permission;
            schemaSubclassPermission: Permission;
            insertPermission: Permission;
            /**
             * @inheritDoc
             */
            readonly persistenceType: PersistenceType;
            readonly id: SingularAttribute<String>;
            readonly version: SingularAttribute<Number>;
            readonly acl: SingularAttribute<Acl>;
            /**
             * Gets all on this class referencing attributes
             *
             * @param db The instances will be found by this EntityManager
             * @param [options] Some options to pass
             * @param [options.classes] An array of class names to filter for, null for no filter
             * @return A map from every referencing class to a set of its referencing attribute names
             */
            getReferencing(db: EntityManager, options?: {
                classes?: string[] | undefined;
            } | undefined): Map<ManagedType<any>, Set<string>>;
            /**
             * Converts the given object to json
             * @param state The root object state
             * @param object The object to convert
             * @param [options=false] to json options by default excludes the metadata
             * @param [options.excludeMetadata=false] Excludes the metadata form the serialized json
             * @param [options.depth=0] Includes up to depth referenced objects into the serialized json
             * @param [options.persisting=false] indicates if the current state will be persisted.
             *  Used to update the internal change tracking state of collections and mark the object persistent if its true
             * @return JSON-Object
             */
            toJsonValue(state: ManagedState, object: any, options?: {
                excludeMetadata?: boolean | undefined;
                depth?: number | boolean | undefined;
                persisting?: boolean | undefined;
            } | undefined): Json;
            toString(): string;
            toJSON(): JsonMap;
            enhancer: import("../binding").Enhancer | null;
            declaredAttributes: Attribute<any>[];
            schemaAddPermission: Permission;
            schemaReplacePermission: Permission;
            metadata: {
                [key: string]: string;
            } | null;
            superType: EntityType<any> | null;
            _validationCode: Function | null;
            validationCode: Function | null;
            typeConstructor: Class<any>;
            init(enhancer: import("../binding").Enhancer): void;
            create(): any;
            attributes(): IterableIterator<Attribute<any>>;
            addAttribute(attr: Attribute<any>, order?: number | undefined): void;
            removeAttribute(name: string): void;
            getAttribute(name: string): Attribute<any> | null;
            getDeclaredAttribute(val: string | number): Attribute<any> | null;
            references(): IterableIterator<{
                path: string[];
            }>;
            hasMetadata(key: string): boolean;
            getMetadata(key: string): string | null;
            readonly ref: string;
            readonly name: string;
            _typeConstructor?: Class<any> | undefined;
            readonly isBasic: boolean;
            readonly isEmbeddable: boolean;
            readonly isEntity: boolean;
            readonly isMappedSuperclass: boolean;
        };
        readonly ref: string;
        Object: any;
    };
    declaredId: SingularAttribute<String> | null;
    declaredVersion: SingularAttribute<Number> | null;
    declaredAcl: SingularAttribute<Acl> | null;
    loadPermission: Permission;
    updatePermission: Permission;
    deletePermission: Permission;
    queryPermission: Permission;
    schemaSubclassPermission: Permission;
    insertPermission: Permission;
    /**
     * @inheritDoc
     */
    get persistenceType(): PersistenceType;
    get id(): SingularAttribute<String>;
    get version(): SingularAttribute<Number>;
    get acl(): SingularAttribute<Acl>;
    /**
     * @param ref
     * @param superType
     * @param typeConstructor
     */
    constructor(ref: string, superType: EntityType<any>, typeConstructor?: Class<T>);
    /**
     * @inheritDoc
     */
    createProxyClass(): Class<T>;
    /**
     * Gets all on this class referencing attributes
     *
     * @param db The instances will be found by this EntityManager
     * @param [options] Some options to pass
     * @param [options.classes] An array of class names to filter for, null for no filter
     * @return A map from every referencing class to a set of its referencing attribute names
     */
    getReferencing(db: EntityManager, options?: {
        classes?: string[];
    }): Map<ManagedType<any>, Set<string>>;
    /**
     * @inheritDoc
     */
    createObjectFactory(db: EntityManager): EntityFactory<T>;
    /**
     * @param state The root object state, can be <code>null</code> if a currentObject is provided
     * @param jsonObject The json data to merge
     * @param currentObject The object where the jsonObject will be merged into, if the current object is null,
     * a new instance will be created
     * @param options The options used to apply the json
     * @param [options.persisting=false] indicates if the current state will be persisted.
     * Used to update the internal change tracking state of collections and mark the object persistent or dirty afterwards
     * @param [options.onlyMetadata=false] Indicates if only the metadata should be updated
     * @return The merged entity instance
     */
    fromJsonValue(state: ManagedState, jsonObject: Json, currentObject: T | null, options: {
        persisting?: boolean;
        onlyMetadata?: boolean;
    }): T | null;
    /**
     * Converts the given object to json
     * @param state The root object state
     * @param object The object to convert
     * @param [options=false] to json options by default excludes the metadata
     * @param [options.excludeMetadata=false] Excludes the metadata form the serialized json
     * @param [options.depth=0] Includes up to depth referenced objects into the serialized json
     * @param [options.persisting=false] indicates if the current state will be persisted.
     *  Used to update the internal change tracking state of collections and mark the object persistent if its true
     * @return JSON-Object
     */
    toJsonValue(state: ManagedState, object: T | null, options?: {
        excludeMetadata?: boolean;
        depth?: number | boolean;
        persisting?: boolean;
    }): Json;
    toString(): string;
    toJSON(): JsonMap;
}

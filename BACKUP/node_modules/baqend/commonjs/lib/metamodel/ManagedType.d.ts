import { Type } from './Type';
import { Class, Json, JsonMap } from '../util';
import { Enhancer, Managed, ManagedFactory } from '../binding';
import type { Attribute } from './Attribute';
import type { EntityManager } from '../EntityManager';
import type { EntityType } from './EntityType';
import { Permission, ManagedState } from '../intersection';
export declare abstract class ManagedType<T extends Managed> extends Type<T> {
    enhancer: Enhancer | null;
    declaredAttributes: Attribute<any>[];
    schemaAddPermission: Permission;
    schemaReplacePermission: Permission;
    metadata: {
        [key: string]: string;
    } | null;
    superType: EntityType<any> | null;
    _validationCode: Function | null;
    /**
     * @type Function
     */
    get validationCode(): Function | null;
    /**
     * @param code
     */
    set validationCode(code: Function | null);
    /**
     * The Managed class
     */
    get typeConstructor(): Class<T>;
    /**
     * The Managed class constructor
     * @param typeConstructor The managed class constructor
     */
    set typeConstructor(typeConstructor: Class<T>);
    /**
     * @param ref or full class name
     * @param typeConstructor The type constructor of the managed lass
     */
    constructor(ref: string, typeConstructor?: Class<T>);
    /**
     * Initialize this type
     * @param enhancer The class enhancer used to instantiate an instance of this managed class
     */
    init(enhancer: Enhancer): void;
    /**
     * Creates an ProxyClass for this type
     * @return the crated proxy class for this type
     */
    abstract createProxyClass(): Class<T>;
    /**
     * Creates an ObjectFactory for this type and the given EntityManager
     * @param db The created instances will be attached to this EntityManager
     * @return the crated object factory for the given EntityManager
     */
    abstract createObjectFactory(db: EntityManager): ManagedFactory<T>;
    /**
     * Creates a new instance of the managed type, without invoking any constructors
     *
     * This method is used to create object instances which are loaded form the backend.
     *
     * @return The created instance
     */
    create(): T;
    /**
     * An iterator which returns all attributes declared by this type and inherited form all super types
     * @return
     */
    attributes(): IterableIterator<Attribute<any>>;
    /**
     * Adds an attribute to this type
     * @param attr The attribute to add
     * @param order Position of the attribute
     * @return
     */
    addAttribute(attr: Attribute<any>, order?: number): void;
    /**
     * Removes an attribute from this type
     * @param name The Name of the attribute which will be removed
     * @return
     */
    removeAttribute(name: string): void;
    /**
     * @param name
     * @return
     */
    getAttribute(name: string): Attribute<any> | null;
    /**
     * @param val Name or order of the attribute
     * @return
     */
    getDeclaredAttribute(val: string | number): Attribute<any> | null;
    /**
     * @inheritDoc
     */
    fromJsonValue(state: ManagedState, jsonObject: Json, currentObject: T | null, options: {
        onlyMetadata?: boolean;
        persisting: boolean;
    }): T | null;
    /**
     * @inheritDoc
     */
    toJsonValue(state: ManagedState, object: T | null, options: {
        excludeMetadata?: boolean;
        depth?: number | boolean;
        persisting: boolean;
    }): Json;
    /**
     * Converts ths type schema to json
     * @return
     */
    toJSON(): JsonMap;
    /**
     * Returns iterator to get all referenced entities
     * @return
     */
    references(): IterableIterator<{
        path: string[];
    }>;
    /**
     * Retrieves whether this type has specific metadata
     *
     * @param key
     * @return
     */
    hasMetadata(key: string): boolean;
    /**
     * Gets some metadata of this type
     *
     * @param key
     * @return
     */
    getMetadata(key: string): string | null;
}

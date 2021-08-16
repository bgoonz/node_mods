import { Factory } from './Factory';
import type { EntityManager } from '../EntityManager';
import type { ManagedType } from '../metamodel';
import type { Managed } from './Managed';
import type { Json } from '../util';
export declare class ManagedFactory<T extends Managed> extends Factory<T> {
    /**
     * Creates a new ManagedFactory for the given type
     * @param managedType The metadata of type T
     * @param db The entity manager instance
     */
    static create<T extends Managed>(managedType: ManagedType<T>, db: EntityManager): ManagedFactory<T>;
    /**
     * Methods that are added to object instances
     * This property is an alias for this factory type prototype
     * @name methods
     */
    methods: {
        [methodName: string]: any;
    };
    /**
     * The managed type of this factory
     */
    managedType: ManagedType<T>;
    /**
     * The owning EntityManager where this factory belongs to
     */
    db: EntityManager;
    /**
     * Creates a new instance and sets the Managed Object to the given json
     * @param json
     * @return A new created instance of T
     */
    fromJSON(json: Json): T;
    /**
     * Adds methods to instances of this factories type
     * @param methods The methods to add
     * @return
     */
    addMethods(methods: {
        [name: string]: Function;
    }): void;
    /**
     * Add a method to instances of this factories type
     * @param name The method name to add
     * @param fn The Method to add
     * @return
     */
    addMethod(name: string, fn: Function): void;
}

import { Class } from '../util/Class';
import { Attribute, ManagedType } from '../metamodel';
import type { Managed } from './Managed';
export declare class Enhancer {
    /**
     * @param superClass
     * @return typeConstructor
     */
    createProxy<T extends S, S>(superClass: Class<S>): Class<T>;
    /**
     * @param typeConstructor
     * @returns type the managed type metadata for this class
     */
    static getBaqendType(typeConstructor: Class<any> | Function): ManagedType<any> | null;
    /**
     * @param typeConstructor
     * @return
     */
    static getIdentifier(typeConstructor: Class<any> | Function): string | null;
    /**
     * @param typeConstructor
     * @param identifier
     */
    static setIdentifier(typeConstructor: Class<any>, identifier: string): void;
    /**
     * @param type
     * @param typeConstructor
     */
    enhance<T extends Managed>(type: ManagedType<T>, typeConstructor: Class<T>): void;
    /**
     * Enhance the prototype of the type
     * @param proto
     * @param type
     */
    enhancePrototype<T extends Managed>(proto: T, type: ManagedType<T>): void;
    /**
     * @param proto
     * @param attribute
     */
    enhanceProperty<T>(proto: T, attribute: Attribute<any>): void;
}

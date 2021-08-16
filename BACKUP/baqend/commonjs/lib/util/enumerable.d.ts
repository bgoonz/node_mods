/**
 * This decorator modifies the enumerable flag of an class member
 * @param value - the enumerable value of the property descriptor
 */
export declare function enumerable(value: boolean): (target: any, propertyKey: string, descriptor: PropertyDescriptor) => void;

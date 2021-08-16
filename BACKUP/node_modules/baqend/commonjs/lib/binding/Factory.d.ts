import { Class } from '../util/Class';
/**
 * This factory creates instances of type T, by invoking the {@link #new()} method
 * or by instantiating this factory directly
 */
export interface InstanceFactory<T> {
    /**
     * Creates a new instance of the factory type
     * @param args Constructor arguments used for instantiation
     * @return A new created instance of *
     * @instance
     */
    new (...args: any[]): T;
}
export declare class Factory<T> {
    private static extend;
    /**
     * Creates a new Factory for the given type
     * @param type - the type constructor of T
     * @return A new object factory to created instances of T
     */
    protected static createFactory<F extends Factory<T>, T>(this: Class<F>, type: Class<T>): F & InstanceFactory<T>;
    type: Class<T>;
    prototype: T;
    /**
     * Creates a new instance of the factory type
     * @param args Constructor arguments used for instantiation
     * @return A new created instance of *
     * @instance
     */
    new(...args: any[]): T;
    /**
     * Creates a new instance of the factory type
     * @param args Constructor arguments used for instantiation
     * @return A new created instance of *
     * @instance
     */
    newInstance(args?: any[] | IArguments): T;
}

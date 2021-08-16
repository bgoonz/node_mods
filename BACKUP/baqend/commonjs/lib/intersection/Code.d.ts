import type { EntityManagerFactory } from '../EntityManagerFactory';
import type { Metamodel, ManagedType } from '../metamodel';
/**
 * Representation of a Code which runs on Baqend.
 */
export declare class Code {
    metamodel: Metamodel;
    entityManagerFactory: EntityManagerFactory;
    /**
     * @param metamodel
     * @param entityManagerFactory
     */
    constructor(metamodel: Metamodel, entityManagerFactory: EntityManagerFactory);
    /**
     * Converts the given function to a string
     * @param fn The JavaScript function to serialize
     * @return The serialized function
     */
    functionToString(fn: Function): string;
    /**
     * Converts the given string to a module wrapper function
     * @param signature The expected parameters of the function
     * @param code The JavaScript function to deserialize
     * @return The deserialized function
     */
    stringToFunction(signature: string[], code: string): Function;
    /**
     * Loads a list of all available modules without handlers
     *
     * @return
     */
    loadModules(): Promise<string[]>;
    /**
     * Loads Baqend code which will be identified by the given bucket and code type
     *
     * @param type The entity type for the handler or the Name of the
     * Baqend code
     * @param codeType The type of the code
     * @param asFunction set it to <code>true</code>, to parse the code as a function and return it
     * instead of a string
     * @return The code as parsed function
     */
    loadCode(type: ManagedType<any> | string, codeType: string, asFunction: true): Promise<Function>;
    /**
     * Loads Baqend code which will be identified by the given bucket and code type
     *
     * @param type The entity type for the handler or the Name of the
     * Baqend code
     * @param codeType The type of the code
     * @param asFunction set it to <code>true</code>, to parse the code as a function and return it
     * instead of a string
     * @return The code as string
     */
    loadCode(type: ManagedType<any> | string, codeType: string, asFunction?: false): Promise<string>;
    /**
     * Saves Baqend code which will be identified by the given bucket and code type
     *
     * @param type The entity type for the handler or the Name of the
     * Baqend code
     * @param codeType The type of the code
     * @param fn Baqend code as a string
     * @return The stored code as a string
     */
    saveCode(type: ManagedType<any> | string, codeType: string, fn: string): Promise<string>;
    /**
     * Saves Baqend code which will be identified by the given bucket and code type
     *
     * @param type The entity type for the handler or the Name of the
     * Baqend code
     * @param codeType The type of the code
     * @param fn Baqend code as a function
     * @return The stored code as a parsed function
     */
    saveCode(type: ManagedType<any> | string, codeType: string, fn: Function): Promise<Function>;
    /**
     * Deletes Baqend code identified by the given bucket and code type
     *
     * @param type The entity type for the handler or the Name of the
     * Baqend code
     * @param codeType The type of the code
     * @return succeed if the code was deleted
     */
    deleteCode(type: ManagedType<any> | string, codeType: string): Promise<any>;
    /**
     * @param bucket
     * @param codeType
     * @param [asFunction=false]
     * @param code
     * @return
     * @private
     */
    parseCode(bucket: string, codeType: string, asFunction: boolean, code: string | null): string | null | Function;
}

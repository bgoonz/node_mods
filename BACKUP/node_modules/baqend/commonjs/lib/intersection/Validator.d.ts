import validator from 'validator';
import { Entity } from '../binding';
import { ManagedType } from '../metamodel';
declare type Validators = Omit<typeof validator, // Extract<typeof validator, Function>,
// Extract<typeof validator, Function>,
'version' | 'blacklist' | 'escape' | 'unescape' | 'ltrim' | 'normalizeEmail' | 'rtrim' | 'stripLow' | 'toBoolean' | 'toDate' | 'toFloat' | 'toInt' | 'trim' | 'whitelist' | 'toString'>;
export interface Validator extends Pick<Validators, keyof Validators> {
}
export declare class Validator {
    /**
     * Compiles the given validation code for the managedType
     * @param managedType The managedType of the code
     * @param validationCode The validation code
     * @return the parsed validation function
     */
    static compile(managedType: ManagedType<any>, validationCode: string): Function;
    /**
     * The cached errors of the validation
     */
    private errors;
    /**
     * Entity to get the value of the attribute
     */
    private entity;
    /**
     * Name of the attribute
     */
    key: string;
    /**
     * Gets the value of the attribute
     * @return Value
     */
    get value(): any;
    /**
     * Checks if the attribute is valid
     * @return
     */
    get isValid(): boolean;
    /**
     * Executes the given validation function to validate the value.
     *
     * The value will be passed as the first parameter to the validation function and
     * the library {@link https://github.com/chriso/validator.js} as the second one.
     * If the function returns true the value is valid, otherwise it's invalid.
     *
     * @param fn will be used to validate the value
     * @return
     */
    is(fn: Function): Validator;
    /**
     * Executes the given validation function to validate the value.
     *
     * The value will be passed as the first parameter to the validation function and
     * the library {@link https://github.com/chriso/validator.js} as the second one.
     * If the function returns true the value is valid, otherwise it's invalid.
     *
     * @param error The error message which will be used if the value is invalid
     * @param fn will be used to validate the value
     * @return
     */
    is(error: string, fn: Function): Validator;
    constructor(key: string, entity: Entity);
    callMethod(method: keyof typeof validator, errorMessage: string | null, argumentList: any[]): this;
    toStringValue(): string | Date;
    toJSON(): {
        isValid: boolean;
        errors: string[];
    };
}
export {};

import { JsonMap } from '../util/Json';
import { Validator } from './Validator';
export declare class ValidationResult {
    fields: {
        [property: string]: Validator;
    };
    /**
     * Indicates if all fields are valid
     * @return <code>true</code> if all fields are valid
     */
    get isValid(): boolean;
    toJSON(): JsonMap;
}

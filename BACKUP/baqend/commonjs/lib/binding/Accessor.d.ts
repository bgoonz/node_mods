import { Managed } from './Managed';
import { Attribute } from '../metamodel';
export declare class Accessor {
    /**
     * @param object
     * @param attribute
     * @return
     */
    getValue<T>(object: Managed, attribute: Attribute<T>): T | null;
    /**
     * @param object
     * @param attribute
     * @param value
     */
    setValue<T>(object: Managed, attribute: Attribute<T>, value: T): void;
}

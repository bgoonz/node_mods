import { Attribute, PersistentAttributeType } from './Attribute';
import { Type } from './Type';
import { Class, Json } from '../util';
import { Managed } from '../binding';
import { ManagedState } from '../intersection';
export declare class SingularAttribute<T> extends Attribute<T> {
    type: Type<T>;
    /**
     * The constructor of the element type of this attribute
     */
    get typeConstructor(): Class<T>;
    /**
     * @inheritDoc
     */
    get persistentAttributeType(): PersistentAttributeType.BASIC | PersistentAttributeType.EMBEDDED | PersistentAttributeType.ONE_TO_MANY;
    /**
     * @param name
     * @param type
     * @param isMetadata <code>true</code> if the attribute is an metadata attribute
     */
    constructor(name: string, type: Type<T>, isMetadata?: boolean);
    /**
     * @inheritDoc
     */
    getJsonValue(state: ManagedState, object: Managed, options: {
        excludeMetadata?: boolean;
        depth?: number | boolean;
        persisting: boolean;
    }): Json | undefined;
    /**
     * @inheritDoc
     */
    setJsonValue(state: ManagedState, object: Managed, jsonValue: Json, options: {
        onlyMetadata?: boolean;
        persisting: boolean;
    }): void;
    /**
     * @inheritDoc
     */
    toJSON(): {
        type: string;
    };
}

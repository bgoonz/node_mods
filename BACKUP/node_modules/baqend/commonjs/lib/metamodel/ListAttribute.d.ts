import { CollectionType, PluralAttribute } from './PluralAttribute';
import { JsonArray } from '../util';
import { Type } from './Type';
import { Managed } from '../binding';
import { ManagedState } from '../intersection/Metadata';
export declare class ListAttribute<E> extends PluralAttribute<Array<E | null>, E> {
    /**
     * Get the type id for this list type
     */
    static get ref(): string;
    /**
     * @inheritDoc
     */
    get collectionType(): CollectionType;
    /**
     * @param name
     * @param elementType
     */
    constructor(name: string, elementType: Type<E>);
    /**
     * @inheritDoc
     */
    getJsonValue(state: ManagedState, object: Managed, options: {
        excludeMetadata?: boolean;
        depth?: number | boolean;
        persisting: boolean;
    }): JsonArray | null;
    /**
     * @inheritDoc
     */
    setJsonValue(state: ManagedState, object: Managed, json: JsonArray, options: {
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

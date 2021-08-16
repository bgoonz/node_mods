import { CollectionType, PluralAttribute } from './PluralAttribute';
import { Type } from './Type';
import { JsonArray } from '../util';
import { Managed } from '../binding';
import { ManagedState } from '../intersection';
export declare class SetAttribute<T> extends PluralAttribute<Set<T | null>, T> {
    /**
     * Get the type id for this set type
     * @return
     */
    static get ref(): string;
    /**
     * @inheritDoc
     */
    get collectionType(): CollectionType;
    /**
     * @param name The name of the attribute
     * @param elementType The element type of the collection
     */
    constructor(name: string, elementType: Type<T>);
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

import { CollectionType, PluralAttribute } from './PluralAttribute';
import { Type } from './Type';
import { Json, JsonMap } from '../util';
import { Managed } from '../binding';
import { ManagedState } from '../intersection';
export declare class MapAttribute<K, V> extends PluralAttribute<Map<K | null, V | null>, V> {
    keyType: Type<K>;
    /**
     * Get the type id for this map type
     * @return
     */
    static get ref(): string;
    /**
     * @inheritDoc
     */
    get collectionType(): CollectionType;
    /**
     * @param name
     * @param keyType
     * @param elementType
     */
    constructor(name: string, keyType: Type<K>, elementType: Type<V>);
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
    setJsonValue(state: ManagedState, object: Managed, json: JsonMap, options: {
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

import { ManagedType } from './ManagedType';
import { PersistenceType } from './Type';
import { Managed, ManagedFactory } from '../binding';
import { Class, Json } from '../util';
import type { EntityManager } from '../EntityManager';
import { ManagedState } from '../intersection';
export declare class EmbeddableType<T extends Managed> extends ManagedType<T> {
    /**
     * @inheritDoc
     */
    get persistenceType(): PersistenceType;
    /**
     * @inheritDoc
     */
    createProxyClass(): Class<T>;
    /**
     * @inheritDoc
     */
    createObjectFactory(db: EntityManager): ManagedFactory<T>;
    /**
     * @inheritDoc
     */
    fromJsonValue(state: ManagedState, jsonObject: Json, currentObject: T | null, options: {
        onlyMetadata?: boolean;
        persisting: boolean;
    }): T | null;
    toString(): string;
}

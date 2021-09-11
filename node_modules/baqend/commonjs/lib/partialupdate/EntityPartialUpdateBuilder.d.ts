import { PartialUpdateBuilder } from './PartialUpdateBuilder';
import { JsonMap } from '../util';
import { Entity } from '../binding';
export declare class EntityPartialUpdateBuilder<T extends Entity> extends PartialUpdateBuilder<T> {
    readonly entity: T;
    /**
     * @param entity
     * @param operations
     */
    constructor(entity: T, operations: JsonMap);
    /**
     * @inheritDoc
     */
    execute(): Promise<T>;
}

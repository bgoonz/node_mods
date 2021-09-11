import { Node } from './Node';
import { Condition } from './Condition';
import { Json } from '../util';
import type { Entity } from '../binding';
export declare type FilterObject = {
    [key: string]: NestedFilter | Json | Entity | Date;
};
export declare type NestedFilter = {
    [filter: string]: Json | Entity | Date;
};
/**
 * A Filter saves the state for a filtered query
 */
export interface Filter<T extends Entity> extends Node<T>, Condition<T> {
}
export declare class Filter<T extends Entity> extends Node<T> {
    /**
     * The actual filters of this node
     */
    readonly filter: FilterObject;
    /**
     * @inheritDoc
     */
    addFilter(field: string | null, filter: string | null, value: any): Filter<T>;
    toJSON(): FilterObject;
}

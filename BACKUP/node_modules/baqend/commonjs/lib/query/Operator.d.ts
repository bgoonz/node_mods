import { Entity } from '../binding';
import { Node } from './Node';
import type { EntityManager } from '../EntityManager';
import { Class } from '../util';
/**
 * An Operator saves the state of a combined query
 */
export declare class Operator<T extends Entity> extends Node<T> {
    /**
     * The operator used to join the child queries
     */
    readonly operator: string;
    /**
     * The child Node of this query, it is always one
     */
    readonly childes: Node<T>[];
    /**
     * @param entityManager The owning entity manager of this query
     * @param resultClass The query result class
     * @param operator The operator used to join the childes
     * @param childes The childes to join
     */
    constructor(entityManager: EntityManager, resultClass: Class<T>, operator: string, childes: Node<T>[]);
    toJSON(): {
        [operator: string]: Node<T>[];
    };
}

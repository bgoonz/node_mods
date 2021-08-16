import { Observable, Subscription } from 'rxjs';
import { Filter } from './Filter';
import { Condition } from './Condition';
import { Operator } from './Operator';
import { CompleteCallback, FailCallback, NextEventCallback, NextResultCallback, Query, EventStreamOptions, ResultStreamOptions, ResultOptions, ResultListCallback, SingleResultCallback, CountCallback } from './Query';
import type { Entity } from '../binding';
import { Node } from './Node';
import { RealtimeEvent } from './RealtimeEvent';
/**
 * The Query Builder allows creating filtered and combined queries
 */
export interface Builder<T extends Entity> extends Query<T>, Condition<T> {
}
export declare class Builder<T extends Entity> extends Query<T> {
    /**
     * Joins the conditions by an logical AND
     * @param args The query nodes to join
     * @return Returns a new query which joins the given queries by a logical AND
     */
    and(...args: Array<Query<T> | Query<T>[]>): Operator<T>;
    /**
     * Joins the conditions by an logical OR
     * @param args The query nodes to join
     * @return Returns a new query which joins the given queries by a logical OR
     */
    or(...args: Array<Query<T> | Query<T>[]>): Operator<T>;
    /**
     * Joins the conditions by an logical NOR
     * @param args The query nodes to join
     * @return Returns a new query which joins the given queries by a logical NOR
     */
    nor(...args: Array<Query<T> | Query<T>[]>): Operator<T>;
    /**
     * @inheritDoc
     */
    eventStream(options?: EventStreamOptions): Observable<RealtimeEvent<T>>;
    eventStream(options?: EventStreamOptions | NextEventCallback<T>, onNext?: NextEventCallback<T> | FailCallback, onError?: FailCallback | CompleteCallback, onComplete?: CompleteCallback): Subscription;
    /**
     * @inheritDoc
     */
    resultStream(options?: ResultStreamOptions): Observable<T[]>;
    resultStream(options?: ResultStreamOptions | NextResultCallback<T>, onNext?: NextResultCallback<T> | FailCallback, onError?: FailCallback | CompleteCallback, onComplete?: CompleteCallback): Subscription;
    /**
     * @inheritDoc
     */
    resultList(options?: ResultOptions | ResultListCallback<T>, doneCallback?: ResultListCallback<T> | FailCallback, failCallback?: FailCallback): Promise<T[]>;
    /**
     * @inheritDoc
     */
    singleResult(options?: ResultOptions | SingleResultCallback<T>, doneCallback?: SingleResultCallback<T> | FailCallback, failCallback?: FailCallback): Promise<T | null>;
    /**
     * @inheritDoc
     */
    count(doneCallback?: CountCallback, failCallback?: FailCallback): Promise<any>;
    addOperator(operator: string, args: Node<T>[]): Operator<T>;
    addOrder(fieldOrSort: string | {
        [field: string]: 1 | -1;
    }, order?: 1 | -1): Filter<T>;
    addFilter(field: string | null, filter: string | null, value: any): Filter<T>;
    addOffset(offset: number): Filter<T>;
    addLimit(limit: number): Filter<T>;
}

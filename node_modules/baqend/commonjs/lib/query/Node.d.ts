import { Observable, Subscription } from 'rxjs';
import { Entity } from '../binding';
import { CompleteCallback, CountCallback, EventStreamOptions, FailCallback, NextEventCallback, NextResultCallback, Query, ResultListCallback, ResultOptions, ResultStreamOptions, SingleResultCallback } from './Query';
import { RealtimeEvent } from './RealtimeEvent';
/**
 * A Query Node saves the state of the query being built
 */
export declare class Node<T extends Entity> extends Query<T> {
    /**
     * The offset how many results should be skipped
     */
    firstResult: number;
    /**
     * The limit how many objects should be returned
     * @type number
     * @readonly
     */
    maxResults: number;
    /**
     * The properties which should be used sort the result
     */
    order: {
        [field: string]: 1 | -1;
    };
    eventStream(options?: EventStreamOptions): Observable<RealtimeEvent<T>>;
    eventStream(options?: EventStreamOptions | NextEventCallback<T>, onNext?: NextEventCallback<T> | FailCallback, onError?: FailCallback | CompleteCallback, onComplete?: CompleteCallback): Subscription;
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
    private serializeQuery;
    private serializeSort;
    private createResultList;
    private createRealTimeQuery;
    addOrder(fieldOrSort: string | {
        [field: string]: 1 | -1;
    }, order?: 1 | -1): this;
    addOffset(offset: number): this;
    addLimit(limit: number): this;
}

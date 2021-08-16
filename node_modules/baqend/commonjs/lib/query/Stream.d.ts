import { Observable } from '../util/observable';
import { JsonMap } from '../util';
import { ChannelMessage } from '../connector';
import { MatchType, Operation, RealtimeEvent } from './RealtimeEvent';
import { Entity } from '../binding';
import type { EntityManager } from '../EntityManager';
import { EventStreamOptions, ResultStreamOptions } from './Query';
declare type InitialResultEvent = ChannelMessage & {
    /**
     * The event type can be initial result, match event or an error
     */
    type: 'result';
    /**
     * the database entity this event was generated for, e.g. an entity that just entered or left the result set, or
     * an array of entities, if this event type is an initial result
     */
    data: JsonMap[];
};
declare type MatchEvent = ChannelMessage & {
    /**
     * The event type can be initial result, match event or an error
     */
    type: 'match';
    /**
     * the database entity this event was generated for, e.g. an entity that just entered or left the result set, or
     * an array of entities, if this event type is an initial result
     */
    data: JsonMap;
    /**
     * the operation by which the entity was altered
     * 'none' if unknown or not applicable
     */
    operation: Operation;
    /**
     * indicates how the transmitted entity relates to the query result.
     Every event is delivered with one of the following match types:
     <ul>
     <li> 'match': the entity matches the query. </li>
     <li> 'add': the entity entered the result set, i.e. it did not match before and is matching now. </li>
     <li> 'change': the entity was updated, but remains a match </li>
     <li> 'changeIndex' (for sorting queries only): the entity was updated and remains a match, but changed its position
     within the query result </li>
     <li> 'remove': the entity was a match before, but is not matching any longer </li>
     </ul>
     */
    matchType: MatchType;
    /**
     * for sorting queries only: the position of the matching entity in the ordered result (-1 for non-matching entities)
     */
    index: number;
};
declare type ErrorEvent = ChannelMessage & {
    /**
     * The event type can be initial result, match event or an error
     */
    type: 'error';
};
declare type BaseEvent = InitialResultEvent | MatchEvent | ErrorEvent;
export declare class Stream {
    /**
     * Creates a live updating object stream for a query
     *
     * @param entityManager The owning entity manager of this query
     * @param query The query options
     * @param query.query The serialized query
     * @param query.bucket The Bucket on which the streaming query is performed
     * @param query.sort the sort string
     * @param query.limit the count, i.e. the number of items in the result
     * @param query.offset offset, i.e. the number of items to skip
     * @param query.initial Indicates if the initial result should be returned
     * @param options an object containing parameters
     * @return The query result as a live updating stream of objects
     */
    static createEventStream<T extends Entity>(entityManager: EntityManager, query: JsonMap, options?: EventStreamOptions): Observable<RealtimeEvent<T>>;
    /**
     * Creates a live updating result stream for a query
     *
     * @alias query.Stream.createStreamResult<T>
     * @param entityManager The owning entity manager of this query
     * @param query The query options
     * @param query.query The serialized query
     * @param query.bucket The Bucket on which the streaming query is performed
     * @param query.sort the sort string
     * @param query.limit the count, i.e. the number of items in the result
     * @param query.offset offset, i.e. the number of items to skip
     * @param options an object containing parameters
     * @return The query result as a live updating query result
     */
    static createResultStream<T extends Entity>(entityManager: EntityManager, query: JsonMap, options?: ResultStreamOptions): Observable<T[]>;
    static streamObservable<R>(entityManager: EntityManager, query: JsonMap, options: EventStreamOptions, mapper: (event: BaseEvent, next: (result: R) => any) => any): Observable<R>;
    static cachedObservable<T>(observable: Observable<T>, options: JsonMap): Observable<T>;
    /**
     * Parses the StreamOptions
     *
     * @param [options] object containing partial options
     * @returns an object containing VALID options
     */
    static parseOptions(options?: EventStreamOptions): JsonMap;
    static normalizeMatchTypes(list: string | string[] | undefined): string[];
    static normalizeReconnects(reconnects: number | undefined | string): number;
    static normalizeOperations(list: string | string[] | undefined): string[];
    static normalizeSortedSet(list: string | string[] | undefined, wildcard: string, itemType: string, allowedItems: string[]): string[];
    static resolveObject<T extends Entity>(entityManager: EntityManager, object: JsonMap): T;
}
export {};

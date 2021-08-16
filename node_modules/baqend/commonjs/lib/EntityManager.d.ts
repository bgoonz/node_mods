import { FileFactory, UserFactory, Entity, ManagedFactory, EntityFactory, DeviceFactory, LoginOption, OAuthOptions } from './binding';
import { Class, JsonMap, Lockable } from './util';
import { Message, Connector } from './connector';
import { BloomFilter } from './caching';
import { GeoPoint } from './GeoPoint';
import type { ConnectData, EntityManagerFactory } from './EntityManagerFactory';
import * as model from './model';
import type { Metamodel } from './metamodel';
import { Builder } from './query';
import { Code, Logger, Modules, PushMessage, TokenStorage, ValidationResult } from './intersection';
export declare class EntityManager extends Lockable {
    /**
     * Constructor for a new List collection
     */
    readonly List: ArrayConstructor;
    /**
     * Constructor for a new Set collection
     */
    readonly Set: SetConstructor;
    /**
     * Constructor for a new Map collection
     */
    readonly Map: MapConstructor;
    /**
     * Constructor for a new GeoPoint
     */
    readonly GeoPoint: typeof GeoPoint;
    /**
     * Determine whether the entity manager is open.
     * true until the entity manager has been closed
     */
    get isOpen(): boolean;
    /**
     * The authentication token if the user is logged in currently
     */
    get token(): string | null;
    /**
     * Whether caching is disabled
     * @deprecated
     */
    get isCachingDisabled(): boolean;
    /**
     * Whether caching is enabled
     */
    isCachingEnabled(): this is {
        bloomFilter: BloomFilter;
        cacheWhiteList: Set<string>;
        cacheBlackList: Set<string>;
    };
    /**
     * Returns true if the device token is already registered, otherwise false.
     */
    get isDeviceRegistered(): boolean;
    /**
     * The authentication token if the user is logged in currently
     * @param value
     */
    set token(value: string | null);
    /**
     * Log messages can created by calling log directly as function, with a specific log level or with the helper
     * methods, which a members of the log method.
     *
     * Logs will be filtered by the client logger and the before they persisted. The default log level is
     * 'info' therefore all log messages below the given message aren't persisted.
     *
     * Examples:
     * <pre class="prettyprint">
     // default log level ist info
     db.log('test message %s', 'my string');
     // info: test message my string
  
     // pass a explicit log level as the first argument, one of ('trace', 'debug', 'info', 'warn', 'error')
     db.log('warn', 'test message %d', 123);
     // warn: test message 123
  
     // debug log level will not be persisted by default, since the default logging level is info
     db.log('debug', 'test message %j', {number: 123}, {});
     // debug: test message {"number":123}
     // data = {}
  
     // One additional json object can be provided, which will be persisted together with the log entry
     db.log('info', 'test message %s, %s', 'first', 'second', {number: 123});
     // info: test message first, second
     // data = {number: 123}
  
     //use the log level helper
     db.log.info('test message', 'first', 'second', {number: 123});
     // info: test message first second
     // data = {number: 123}
  
     //change the default log level to trace, i.e. all log levels will be persisted, note that the log level can be
     //additionally configured in the baqend
     db.log.level = 'trace';
  
     //trace will be persisted now
     db.log.trace('test message', 'first', 'second', {number: 123});
     // info: test message first second
     // data = {number: 123}
     * </pre>
     */
    readonly log: Logger;
    /**
     * The connector used for requests
     */
    connection: Connector | null;
    /**
     * All managed and cached entity instances
     * @type Map<String,Entity>
     * @private
     */
    private entities;
    readonly entityManagerFactory: EntityManagerFactory;
    readonly metamodel: Metamodel;
    readonly code: Code;
    readonly modules: Modules;
    /**
     * The current logged in user object
     */
    me: model.User | null;
    /**
     * The current registered device object
     */
    deviceMe: model.Device | null;
    /**
     * Returns the tokenStorage which will be used to authorize all requests.
     */
    tokenStorage: TokenStorage;
    /**
     * The bloom filter which contains staleness information of cached objects
     */
    bloomFilter: BloomFilter | null;
    /**
     * Set of object ids that were revalidated after the Bloom filter was loaded.
     */
    cacheWhiteList: Set<string> | null;
    /**
     * Set of object ids that were updated but are not yet included in the bloom filter.
     * This set essentially implements revalidation by side effect which does not work in Chrome.
     */
    cacheBlackList: Set<string> | null;
    /**
     * Bloom filter refresh interval in seconds.
     */
    bloomFilterRefresh: number;
    /**
     * Bloom filter refresh Promise
     */
    readonly bloomFilterLock: Lockable;
    /**
     * A File factory for file objects.
     * The file factory can be called to create new instances for files.
     * The created instances implements the {@link File} interface
     */
    File: FileFactory;
    /**
     * @param entityManagerFactory The factory which of this entityManager instance
     */
    constructor(entityManagerFactory: EntityManagerFactory);
    /**
     * Connects this entityManager, used for synchronous and asynchronous initialization
     * @param connector
     * @param connectData
     * @param tokenStorage The used tokenStorage for token persistence
     */
    connected(connector: Connector, connectData: ConnectData, tokenStorage: TokenStorage): void;
    /**
     * @param types
     * @return    * @private
     */
    private _createObjectFactory;
    send(message: Message, ignoreCredentialError?: boolean): Promise<import("./connector").Response>;
    /**
     * Get an instance whose state may be lazily fetched
     *
     * If the requested instance does not exist in the database, the
     * EntityNotFoundError is thrown when the instance state is first accessed.
     * The application should not expect that the instance state will be available upon detachment,
     * unless it was accessed by the application while the entity manager was open.
     *
     * @param entityClass
     * @param key
     * @return
     */
    getReference<T extends Entity>(entityClass: Class<T> | string, key?: string): T;
    /**
     * Creates an instance of {@link Builder<T>} for query creation and execution
     *
     * The query results are instances of the resultClass argument.
     *
     * @param resultClass - the type of the query result
     * @return A query builder to create one ore more queries for the specified class
     */
    createQueryBuilder<T extends Entity>(resultClass: Class<T>): Builder<T>;
    /**
     * Clear the persistence context, causing all managed entities to become detached
     *
     * Changes made to entities that have not been flushed to the database will not be persisted.
     *
     * @return
     */
    clear(): void;
    /**
     * Close an application-managed entity manager
     *
     * After the close method has been invoked, all methods on the EntityManager instance
     * and any Query and TypedQuery objects obtained from it will throw the IllegalStateError
     * except for transaction, and isOpen (which will return false). If this method
     * is called when the entity manager is associated with an active transaction,
     * the persistence context remains managed until the transaction completes.
     *
     * @return
     */
    close(): void;
    /**
     * Check if the instance is a managed entity instance belonging to the current persistence context
     *
     * @param entity - entity instance
     * @return boolean indicating if entity is in persistence context
     */
    contains(entity: Entity): boolean;
    /**
     * Check if an object with the id from the given entity is already attached
     *
     * @param entity - entity instance
     * @return boolean indicating if entity with same id is attached
     */
    containsById(entity: Entity): boolean;
    /**
     * Remove the given entity from the persistence context, causing a managed entity to become detached
     *
     * Unflushed changes made to the entity if any (including removal of the entity),
     * will not be synchronized to the database. Entities which previously referenced the detached entity will continue
     * to reference it.
     *
     * @param entity The entity instance to detach.
     * @return
     */
    detach(entity: Entity): Promise<Entity>;
    /**
     * Resolve the depth by loading the referenced objects of the given entity
     *
     * @param entity - entity instance
     * @param [options] The load options
     * @return
     */
    resolveDepth<T extends Entity>(entity: T, options?: {
        refresh?: boolean;
        local?: boolean;
        depth?: number | boolean;
        resolved?: Entity[];
    }): Promise<T>;
    /**
     * Search for an entity of the specified oid
     *
     * If the entity instance is contained in the persistence context, it is returned from there.
     *
     * @param entityClass - entity class
     * @param oid - Object ID
     * @param [options] The load options.
     * @return the loaded entity or null
     */
    load<T extends Entity>(entityClass: Class<T> | string, oid?: string, options?: {
        refresh?: boolean;
        local?: boolean;
        resolved?: Entity[];
    }): Promise<T | null>;
    /**
     * @param entity
     * @param options
     * @return
     */
    insert(entity: Entity, options?: {
        depth?: number | boolean;
        refresh?: boolean;
    }): Promise<Entity>;
    /**
     * @param entity
     * @param options
     * @return
     */
    update(entity: Entity, options?: {
        force?: boolean;
        depth?: number | boolean;
        refresh?: boolean;
    }): Promise<Entity>;
    /**
     * @param entity
     * @param options The save options
     * @param withoutLock Set true to save the entity without locking
     * @return
     */
    save<E extends Entity>(entity: E, options?: {
        force?: boolean;
        depth?: number | boolean;
        refresh?: boolean;
    }, withoutLock?: boolean): Promise<E>;
    /**
     * @param entity
     * @param cb pre-safe callback
     * @return
     */
    optimisticSave<E extends Entity>(entity: E, cb: (entity: E, abort: () => void) => any): Promise<E>;
    /**
     * @param entity
     * @param cb pre-safe callback
     * @return
     * @private
     */
    private _optimisticSave;
    /**
     * Save the object state without locking
     * @param entity
     * @param options
     * @param msgFactory
     * @return
     * @private
     */
    private _locklessSave;
    /**
     * Save and lock the object state
     * @param entity
     * @param options
     * @param msgFactory
     * @return
     * @private
     */
    private _save;
    /**
     * Returns all referenced sub entities for the given depth and root entity
     * @param entity
     * @param depth
     * @param [resolved]
     * @param initialEntity
     * @return
     */
    getSubEntities(entity: Entity, depth?: boolean | number, resolved?: Entity[], initialEntity?: Entity): Entity[];
    /**
     * Returns all referenced one level sub entities for the given path
     * @param entity
     * @param path
     * @return
     */
    getSubEntitiesByPath(entity: Entity, path: string[]): Entity[];
    /**
     * Delete the entity instance.
     * @param entity
     * @param options The delete options
     * @return
     */
    delete<T extends Entity>(entity: T, options?: {
        force?: boolean;
        depth?: number | boolean;
    }): Promise<T>;
    /**
     * Synchronize the persistence context to the underlying database.
     *
     * @return
     */
    flush(): Promise<any>;
    /**
     * Make an instance managed and persistent.
     * @param entity - entity instance
     * @return
     */
    persist(entity: Entity): void;
    /**
     * Refresh the state of the instance from the database, overwriting changes made to the entity, if any.
     * @param entity - entity instance
     * @param options The refresh options
     * @return
     */
    refresh<T extends Entity>(entity: T, options: {
        depth?: number | boolean;
    }): Promise<T | null>;
    /**
     * Attach the instance to this database context, if it is not already attached
     * @param entity The entity to attach
     * @return
     */
    attach(entity: Entity): void;
    private _attach;
    removeReference(entity: Entity): void;
    register(user: model.User, password: string, loginOption: LoginOption | boolean): Promise<model.User | null>;
    login(username: string, password: string, loginOption: LoginOption | boolean): Promise<model.User | null>;
    logout(): Promise<void>;
    loginWithOAuth(provider: string, options: OAuthOptions): any | string | Promise<model.User | null>;
    private _loginOAuthDevice;
    renew(loginOption?: LoginOption | boolean): Promise<model.User | null>;
    newPassword(username: string, password: string, newPassword: string): Promise<model.User>;
    newPasswordWithToken(token: string, newPassword: string, loginOption?: LoginOption | boolean): Promise<model.User | null>;
    resetPassword(username: string): Promise<import("./connector").Response>;
    changeUsername(username: string, newUsername: string, password: string): Promise<import("./connector").Response>;
    private _updateUser;
    private _logout;
    private _userRequest;
    /**
     * @param deviceType The OS of the device (IOS/Android)
     * @param subscription WebPush subscription
     * @param device
     * @return
     */
    registerDevice(deviceType: string, subscription: PushSubscription | {
        token: string;
    }, device: model.Device | null): Promise<model.Device>;
    private _updateDevice;
    checkDeviceRegistration(): Promise<boolean>;
    pushDevice(pushMessage: PushMessage): Promise<import("./connector").Response>;
    /**
     * The given entity will be checked by the validation code of the entity type.
     *
     * @param entity
     * @return result
     */
    validate(entity: Entity): ValidationResult;
    /**
     * Adds the given object id to the cacheWhiteList if needed.
     * @param objectId The id to add.
     * @return
     */
    addToWhiteList(objectId: string): void;
    /**
     * Adds the given object id to the cacheBlackList if needed.
     * @param objectId The id to add.
     * @return
     */
    addToBlackList(objectId: string | null): void;
    refreshBloomFilter(): Promise<BloomFilter | null>;
    private _updateBloomFilter;
    /**
     * Checks the freshness of the bloom filter and does a reload if necessary
     */
    ensureBloomFilterFreshness(): void;
    /**
     * Checks for a given id, if revalidation is required, the resource is stale or caching was disabled
     * @param id The object id to check
     * @return Indicates if the resource must be revalidated
     */
    mustRevalidate(id: string): boolean;
    /**
     * @param id To check the bloom filter
     * @param message To attach the headers
     * @param refresh To force the reload headers
     * @return
     */
    ensureCacheHeader(id: string | null, message: Message, refresh?: boolean): void;
    /**
     * Creates a absolute url for the given relative one
     * @param relativePath the relative url
     * @param authorize indicates if authorization credentials should be generated and be attached to the url
     * @return a absolute url which is optionally signed with a resource token which authenticates the currently
     * logged in user
     */
    createURL(relativePath: string, authorize?: boolean): Promise<string>;
    /**
     * Requests a perpetual token for the given user
     *
     * Only users with the admin role are allowed to request an API token.
     *
     * @param entityClass
     * @param user The user object or id of the user object
     * @return
     */
    requestAPIToken(entityClass: Class<model.User>, user: model.User | string): Promise<JsonMap>;
    /**
     * Revoke all created tokens for the given user
     *
     * This method will revoke all previously issued tokens and the user must login again.
     *
     * @param entityClass
     * @param user The user object or id of the user object
     */
    revokeAllTokens(entityClass: Class<model.User>, user: model.User | string): Promise<any>;
    private _getUserReference;
}
export interface EntityManager extends Lockable {
    [Class: string]: EntityFactory<any> | ManagedFactory<any> | any;
    /**
     * An User factory for user objects.
     * The User factory can be called to create new instances of users or can be used to register/login/logout users.
     * The created instances implements the {@link model.User} interface
     */
    readonly User: UserFactory;
    /**
     * An Role factory for role objects.
     * The Role factory can be called to create new instances of roles, later on users can be attached to roles to manage
     * the access permissions through this role
     * The created instances implements the {@link model.Role} interface
     */
    readonly Role: EntityFactory<model.Role>;
    /**
     * An Device factory for user objects.
     * The Device factory can be called to create new instances of devices or can be used to register, push to and
     * check registration status of devices.
     */
    readonly Device: DeviceFactory;
}

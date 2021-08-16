import { EntityManager } from './EntityManager';
import { Connector, Message, Response, WebSocketConnector } from './connector';
import { JsonMap, Lockable } from './util';
import { TokenStorage, TokenStorageFactory, Code } from './intersection';
import { Metamodel } from './metamodel';
declare const CONNECTED: unique symbol;
declare const WS: unique symbol;
export declare type ConnectData = {
    bloomFilterRefresh?: number;
    schema?: JsonMap;
    token?: string;
    device?: JsonMap;
    user?: JsonMap;
    bloomFilter?: JsonMap;
    websocket?: string;
};
export declare class EntityManagerFactory extends Lockable {
    connection: Connector | null;
    metamodel: Metamodel;
    code: Code;
    tokenStorageFactory: TokenStorageFactory;
    tokenStorage: TokenStorage | null;
    staleness: number | null;
    connectData?: ConnectData;
    private [WS]?;
    private [CONNECTED]?;
    /**
     * Retrieves the websocket connection if the websocket SDK is available
     */
    get websocket(): WebSocketConnector;
    /**
     * Creates a new EntityManagerFactory connected to the given destination
     * @param [options] The destination to connect with, or an options object
     * @param [options.host] The destination to connect with
     * @param [options.port=80|443] The optional destination port to connect with
     * @param [options.secure=false] <code>true</code> To use a secure ssl encrypted connection
     * @param [options.basePath="/v1"] The base path of the api
     * @param [options.schema=null] The serialized schema as json used to initialize the metamodel
     * @param [options.tokenStorage] The tokenStorage which should be used by this emf
     * @param [options.tokenStorageFactory] The tokenStorage factory implementation which
     * should be used for token storage
     * @param [options.staleness=60] The maximum staleness of objects that are acceptable while reading cached
     * data
     */
    constructor(options?: {
        host?: string;
        port?: number;
        secure?: boolean;
        basePath?: string;
        schema?: JsonMap;
        tokenStorage?: TokenStorage;
        tokenStorageFactory?: TokenStorageFactory;
        staleness?: number;
    } | string);
    /**
     * Apply additional configurations to this EntityManagerFactory
     * @param options The additional configuration options
     * @param [options.tokenStorage] The tokenStorage which should be used by this emf
     * @param [options.tokenStorageFactory] The tokenStorage factory implementation which
     * should be used for token storage
     * @param [options.staleness=60] The maximum staleness of objects that are acceptable while reading cached
     * data, <code>0</code> to always bypass the browser cache
     * @return
     */
    configure(options: {
        tokenStorage?: TokenStorage;
        tokenStorageFactory?: TokenStorageFactory;
        staleness?: number;
    }): void;
    /**
     * Connects this EntityManager to the given destination
     * @param hostOrApp The host or the app name to connect with
     * @param [secure=true] <code>true</code> To use a secure connection
     * @param [basePath="/v1"] The base path of the api
     * @return
     */
    connect(hostOrApp: string, secure?: boolean, basePath?: string): Promise<this>;
    /**
     * Connects this EntityManager to the given destination
     * @param hostOrApp The host or the app name to connect with
     * @param [port=80|443] The port to connect to
     * @param [secure=false] <code>true</code> To use a secure connection
     * @param [basePath="/v1"] The base path of the api
     * @return
     */
    connect(hostOrApp: string, port?: number, secure?: boolean, basePath?: string): Promise<this>;
    /**
     * Creates a new Metamodel instance, which is not connected
     * @return A new Metamodel instance
     */
    createMetamodel(): Metamodel;
    /**
     * Create a new application-managed EntityManager.
     *
     * @param useSharedTokenStorage The token storage to persist the authorization token, or
     * <code>true</code> To use the shared token storage of the emf.
     * <code>false</code> To use a instance based storage.
     *
     * @return a new entityManager
     */
    createEntityManager(useSharedTokenStorage?: boolean): EntityManager;
    send(msg: Message): Promise<Response>;
}
export {};

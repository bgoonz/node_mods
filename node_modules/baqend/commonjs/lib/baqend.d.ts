import { EntityManager } from './EntityManager';
import { TokenStorage, TokenStorageFactory } from './intersection';
export interface baqend extends EntityManager {
    /**
     * Configures the DB with additional config options
     * @param options The additional configuration options
     * @param [options.tokenStorage] The tokenStorage which should be used by this emf
     * @param [options.tokenStorageFactory] The tokenStorage factory implementation which should
     * be used for token storage
     * @param [options.staleness=60] The maximum staleness of objects that are acceptable while reading cached
     * data, <code>0</code> to always bypass the browser cache
     */
    configure(options: {
        tokenStorage?: TokenStorage;
        tokenStorageFactory?: TokenStorageFactory;
        staleness?: number;
    }): this;
    /**
     * Connects the DB with the server and calls the callback on success
     * @param hostOrApp The host or the app name to connect with
     * @param [secure=false] <code>true</code> To use a secure connection
     * @param doneCallback The callback, called when a connection is established and the
     * SDK is ready to use
     * @param failCallback When an error occurred while initializing the SDK
     * @return A initialized EntityManager
     */
    connect(hostOrApp: string, secure?: boolean, doneCallback?: any, failCallback?: any): Promise<EntityManager>;
}
export declare const db: baqend;

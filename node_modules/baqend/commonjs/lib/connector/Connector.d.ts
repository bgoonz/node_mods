/// <reference types="node" />
import type { ReadStream } from 'fs';
import { Message } from './Message';
import { Json, Class, JsonLike } from '../util';
export declare type Receiver = (response: Response) => void;
export declare type RequestBody = string | Blob | Buffer | ArrayBuffer | FormData | Json | JsonLike | ReadStream;
export declare type RequestBodyType = 'json' | 'text' | 'blob' | 'buffer' | 'arraybuffer' | 'data-url' | 'base64' | 'form' | 'stream';
export declare type ResponseBodyType = 'json' | 'text' | 'blob' | 'arraybuffer' | 'data-url' | 'base64' | 'stream';
export declare type Request = {
    method: string;
    path: string;
    type?: RequestBodyType;
    entity?: any;
    headers: {
        [headerName: string]: string;
    };
};
export declare type Response = {
    status: number;
    headers: {
        [headerName: string]: string;
    };
    entity?: any;
    error?: Error;
};
export declare abstract class Connector {
    readonly host: string;
    readonly port: number;
    readonly secure: boolean;
    readonly basePath: string;
    static readonly DEFAULT_BASE_PATH = "/v1";
    static readonly HTTP_DOMAIN = ".app.baqend.com";
    /**
     * An array of all exposed response headers
     */
    static readonly RESPONSE_HEADERS: string[];
    /**
     * Array of all available connector implementations
     */
    static readonly connectors: (Class<Connector> & typeof Connector)[];
    /**
     * Array of all created connections
     */
    static readonly connections: {
        [origin: string]: Connector;
    };
    /**
     * Indicates id this connector is usable in the current runtime environment
     * This method must be overwritten in subclass implementations
     * @param host - the host to connect to
     * @param port - the port to connect to
     * @param secure - <code>true</code> for an secure connection
     * @param basePath - The base path of the api endpoint
     * @return <code>true</code> if this connector is usable in the current environment
     */
    static isUsable(host: string, port: number, secure: boolean, basePath: string): boolean;
    /**
     * @param host or location
     * @param port
     * @param secure=true <code>true</code> for an secure connection
     * @param basePath The basepath of the api
     * @return
     */
    static create(host: string, port?: number, secure?: boolean, basePath?: string): Connector;
    static toUri(host: string, port: number, secure: boolean, basePath: string): string;
    /**
     * the origin do not contains the base path
     */
    readonly origin: string;
    /**
     * The connector will detect if gzip is supported.
     * Returns true if supported otherwise false.
     */
    gzip: boolean;
    /**
     * @param host - the host to connect to
     * @param port - the port to connect to
     * @param secure - <code>true</code> for an secure connection
     * @param basePath - The base path of the api endpoint
     */
    constructor(host: string, port: number, secure: boolean, basePath: string);
    /**
     * @param message
     * @return
     */
    send(message: Message): Promise<Response>;
    /**
     * Handle the actual message send
     * @param message
     * @param request
     * @param receive
     */
    abstract doSend(message: Message, request: Request, receive: Receiver): void;
    /**
     * @param message
     * @return
     */
    prepareRequest(message: Message): Promise<Message> | Message;
    /**
     * Convert the message entity to the sendable representation
     * @param message The message to send
     * @return
     */
    protected abstract toFormat(message: Message): void;
    /**
     * @param message
     * @param response The received response headers and data
     * @return
     */
    prepareResponse(message: Message, response: Response): Promise<any>;
    /**
     * Convert received data to the requested response entity type
     * @param response The response object
     * @param entity The received data
     * @param type The requested response format
     * @return
     */
    protected abstract fromFormat(response: Response, entity: any, type: ResponseBodyType | null): any;
}

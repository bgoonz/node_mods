import type { Request, RequestBody, RequestBodyType, Response, ResponseBodyType } from './Connector';
import { Acl } from '../Acl';
import { TokenStorage } from '../intersection/TokenStorage';
export declare type RestSpecification = {
    method: string;
    status: number[];
    path: string;
};
export declare type MessageSpec = {
    status: number[];
    dynamic: boolean;
    method: string;
    path: string[];
    query: string[];
};
/**
 * The progress callback is called, when you send a message to the server and a progress is noticed
 * @param event The Progress Event
 * @return unused
 */
export declare type ProgressListener = (event: ProgressEvent) => any;
export declare const StatusCode: {
    NOT_MODIFIED: number;
    BAD_CREDENTIALS: number;
    BUCKET_NOT_FOUND: number;
    INVALID_PERMISSION_MODIFICATION: number;
    INVALID_TYPE_VALUE: number;
    OBJECT_NOT_FOUND: number;
    OBJECT_OUT_OF_DATE: number;
    PERMISSION_DENIED: number;
    QUERY_DISPOSED: number;
    QUERY_NOT_SUPPORTED: number;
    SCHEMA_NOT_COMPATIBLE: number;
    SCHEMA_STILL_EXISTS: number;
    SYNTAX_ERROR: number;
    TRANSACTION_INACTIVE: number;
    TYPE_ALREADY_EXISTS: number;
    TYPE_STILL_REFERENCED: number;
    SCRIPT_ABORTION: number;
};
/**
 * Appends the given query parameters to the url
 * @param url - on which the parameters will be appended
 * @param queryParams - The Query parameters which should be appended
 * @return The URL with the appended parameters
 */
export declare function appendQueryParams(url: string, queryParams: string | {
    [key: string]: string | undefined;
}): string;
export declare abstract class Message {
    static readonly StatusCode: {
        NOT_MODIFIED: number;
        BAD_CREDENTIALS: number;
        BUCKET_NOT_FOUND: number;
        INVALID_PERMISSION_MODIFICATION: number;
        INVALID_TYPE_VALUE: number;
        OBJECT_NOT_FOUND: number;
        OBJECT_OUT_OF_DATE: number;
        PERMISSION_DENIED: number;
        QUERY_DISPOSED: number;
        QUERY_NOT_SUPPORTED: number;
        SCHEMA_NOT_COMPATIBLE: number;
        SCHEMA_STILL_EXISTS: number;
        SYNTAX_ERROR: number;
        TRANSACTION_INACTIVE: number;
        TYPE_ALREADY_EXISTS: number;
        TYPE_STILL_REFERENCED: number;
        SCRIPT_ABORTION: number;
    };
    static readonly BINARY: {
        blob: boolean;
        buffer: boolean;
        stream: boolean;
        arraybuffer: boolean;
        'data-url': boolean;
        base64: boolean;
    };
    withCredentials: boolean;
    progressCallback: null | ProgressListener;
    request: Request;
    private _tokenStorage;
    private _responseType;
    /**
     * Returns the specification of this message
     */
    get spec(): MessageSpec;
    /**
     * Creates a new message class with the given message specification
     * @return A created message object for the specification
     */
    static create<T>(specification: RestSpecification): T;
    get isBinary(): boolean;
    /**
     * @param args The path arguments
     */
    constructor(...args: string[]);
    /**
     * Gets the tokenStorage which stored credentials are used to authorize this message
     * @return The header value
     */
    tokenStorage(): TokenStorage | null;
    /**
     * Sets the tokenStorage which stored credentials are used to authorize this message
     * @param value The new tokenStorage used to authorize this message
     * @return This message object
     */
    tokenStorage(value: TokenStorage | null): this;
    /**
     * Gets the request path
     * @return The path of the message value
     */
    path(): string;
    /**
     * Sets the request path
     * @param path The new path value, any query parameters provided with the path will be merged with the
     * exiting query params
     * @return This message object
     */
    path(path: string): this;
    /**
     * Gets the value of a the specified request header
     * @param name The header name
     * @return The header value
     */
    header(name: string): string;
    /**
     * Sets the value of a the specified request header
     * @param name The header name
     * @param value The header value if omitted the value will be returned
     * @return This message object
     */
    header(name: string, value: string | null): this;
    header(name: string, value?: string | null): this | string;
    /**
     * Sets the entity type
     * @param data - The data to send
     * @param type - the type of the data one of 'json'|'text'|'blob'|'arraybuffer'
     * defaults detect the type based on the body data
     * @return This message object
     */
    entity(data: RequestBody, type?: RequestBodyType): this;
    /**
     * Get the mimeType
     * @return This message object
     */
    mimeType(): string;
    /**
     * Sets the mimeType
     * @param mimeType the mimeType of the data
     * @return This message object
     */
    mimeType(mimeType: string | null): this;
    /**
     * Gets the contentLength
     * @return
     */
    contentLength(): number;
    /**
     * Sets the contentLength
     * @param contentLength the content length of the data
     * @return This message object
     */
    contentLength(contentLength: number): this;
    /**
     * Gets the request conditional If-Match header
     * @return This message object
     */
    ifMatch(): string;
    /**
     * Sets the request conditional If-Match header
     * @param eTag the If-Match ETag value
     * @return This message object
     */
    ifMatch(eTag: string | number | null): this;
    /**
     * Gets the request a ETag based conditional header
     * @return
     */
    ifNoneMatch(): string;
    /**
     * Sets the request a ETag based conditional header
     * @param eTag The ETag value
     * @return This message object
     */
    ifNoneMatch(eTag: string): this;
    /**
     * Gets the request date based conditional header
     * @return
     */
    ifUnmodifiedSince(): string;
    /**
     * Sets the request date based conditional header
     * @param date The date value
     * @return This message object
     */
    ifUnmodifiedSince(date: Date): this;
    /**
     * Indicates that the request should not be served by a local cache
     * @return
     */
    noCache(): this;
    /**
     * Gets the cache control header
     * @return
     */
    cacheControl(): string;
    /**
     * Sets the cache control header
     * @param value The cache control flags
     * @return This message object
     */
    cacheControl(value: string): this;
    /**
     * Gets the ACL of a file into the Baqend-Acl header
     * @return
     */
    acl(): string;
    /**
     * Sets and encodes the ACL of a file into the Baqend-Acl header
     * @param acl the file ACLs
     * @return This message object
     */
    acl(acl: Acl): this;
    /**
     * Gets and encodes the custom headers of a file into the Baqend-Custom-Headers header
     * @return
     */
    customHeaders(): string;
    /**
     * Sets and encodes the custom headers of a file into the Baqend-Custom-Headers header
     * @param customHeaders the file custom headers
     * @return This message object
     */
    customHeaders(customHeaders: {
        [headers: string]: string;
    }): this;
    /**
     * Gets the request accept header
     * @return
     */
    accept(): string;
    /**
     * Sets the request accept header
     * @param accept the accept header value
     * @return This message object
     */
    accept(accept: string): this;
    /**
     * Gets the response type which should be returned
     * @return This message object
     */
    responseType(): ResponseBodyType | null;
    /**
     * Sets the response type which should be returned
     * @param type The response type one of 'json'|'text'|'blob'|'arraybuffer' defaults to 'json'
     * @return This message object
     */
    responseType(type: ResponseBodyType | null): this;
    /**
     * Gets the progress callback
     * @return The callback set
     */
    progress(): ProgressListener | null;
    /**
     * Sets the progress callback
     * @param callback
     * @return This message object
     */
    progress(callback: ProgressListener | null): this;
    /**
     * Adds the given string to the request path
     *
     * If the parameter is an object, it will be serialized as a query string.
     *
     * @param query which will added to the request path
     * @return
     */
    addQueryString(query: string | {
        [key: string]: string;
    }): this;
    formatETag(eTag?: string | number | null): string | undefined | null;
    /**
     * Handle the receive
     * @param response The received response headers and data
     * @return
     */
    doReceive(response: Response): void;
}
export declare class OAuthMessage extends Message {
    get spec(): {
        method: string;
        dynamic: boolean;
        path: string[];
        query: never[];
        status: number[];
    };
}

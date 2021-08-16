import type { EntityManager } from '../EntityManager';
import { RequestBody, RequestBodyType, ResponseBodyType, Message } from '../connector';
/**
 * An executor of Modules running on Baqend.
 */
export declare class Modules {
    entityManager: EntityManager;
    /**
     * @param entityManager
     */
    constructor(entityManager: EntityManager);
    /**
     * Calls the module, which is identified by the given bucket
     *
     * The optional query parameter will be attached as GET-parameters.
     *
     * @param bucket Name of the module
     * @param query GET-Parameter as key-value-pairs or query string
     * @param options Additional request options
     * @param options.responseType The type used to provide the response data, defaults to text oder json
     * depends on the received data, can be one of arraybuffer, blob, json, text, base64, data-url
     * @param doneCallback
     * @param failCallback
     * @return
     */
    get(bucket: string, query?: {
        [param: string]: string;
    } | string | Function, options?: {
        responseType?: ResponseBodyType;
    } | Function, doneCallback?: any, failCallback?: any): Promise<any>;
    /**
     * Calls the module, which is identified by the given bucket
     *
     * @param bucket Name of the module
     * @param [body] The POST-body data to send
     * @param options Additional request options
     * @param options.requestType A optional type hint used to correctly interpret the provided data, can be one
     * of arraybuffer, blob, json, text, base64, data-url, form
     * @param options.mimeType The mimType of the body. Defaults to the mimeType of the provided data if
     * it is a file object, blob or data-url
     * @param options.responseType The type used to provide the response data, defaults to text oder json
     * depends on the received data, can be one of arraybuffer, blob, json, text, base64, data-url
     * @param doneCallback
     * @param failCallback
     * @return
     */
    post(bucket: string, body: RequestBody, options?: {
        requestType?: RequestBodyType;
        mimeType?: string;
        responseType?: ResponseBodyType;
    }, doneCallback?: any, failCallback?: any): Promise<any>;
    send(msg: Message, doneCallback?: any, failCallback?: any): Promise<any>;
}

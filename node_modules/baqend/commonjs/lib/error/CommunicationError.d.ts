import { PersistentError } from './PersistentError';
import { Json } from '../util';
import { Message, Response } from '../connector';
export declare class CommunicationError extends PersistentError {
    /**
     * The reason of the error
     */
    reason: string;
    /**
     * The error response status code of this error
     */
    status: number;
    /**
     * Additional Data to keep with the error
     */
    data?: Json;
    /**
     * @param httpMessage The http message which was send
     * @param response The received entity headers and content
     */
    constructor(httpMessage: Message | null, response: Response);
}

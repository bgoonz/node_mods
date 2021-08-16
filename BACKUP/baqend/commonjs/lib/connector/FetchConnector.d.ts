import { Connector, Request, Response, ResponseBodyType } from './Connector';
import { Message } from './Message';
export declare class FetchConnector extends Connector {
    /**
     * Indicates if this connector implementation is usable for the given host and port
     * @return
     */
    static isUsable(): boolean;
    /**
     * @inheritDoc
     */
    doSend(message: Message, request: Request, receive: (response: Response) => void): Promise<void>;
    /**
     * @inheritDoc
     */
    fromFormat(response: Response, rawEntity: any, type: ResponseBodyType | null): any;
    /**
     * @inheritDoc
     */
    toFormat(message: Message): void;
}

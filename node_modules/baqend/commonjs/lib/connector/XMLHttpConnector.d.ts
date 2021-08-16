import { Connector, Receiver, Request, Response, ResponseBodyType } from './Connector';
import { Message } from './Message';
export declare class XMLHttpConnector extends Connector {
    private oAuthHandle?;
    /**
     * @inheritDoc
     */
    static isUsable(host: string, port: number, secure: boolean, basePath: string): boolean;
    /**
     * @inheritDoc
     */
    doSend(message: Message, request: Request, receive: Receiver): void;
    /**
     * @inheritDoc
     */
    fromFormat(response: Response, entity: any, type: ResponseBodyType | null): any;
    /**
     * @inheritDoc
     */
    toFormat(message: Message): void;
}

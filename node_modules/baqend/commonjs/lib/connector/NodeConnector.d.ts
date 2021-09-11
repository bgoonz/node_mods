import { Connector, Request, Response, ResponseBodyType } from './Connector';
import { Message } from './Message';
export declare class NodeConnector extends Connector {
    private cookie;
    private http;
    static isUsable(): boolean;
    constructor(host: string, port: number, secure: boolean, basePath: string);
    /**
     * @inheritDoc
     */
    doSend(message: Message, request: Request, receive: (response: Response) => void): void;
    /**
     * Parse the cookie header
     * @param header
     * @return
     */
    parseCookie(header: string): string | null;
    /**
     * @inheritDoc
     */
    toFormat(message: Message): void;
    /**
     * @inheritDoc
     */
    fromFormat(response: Response, entity: any, type: ResponseBodyType | null): any;
}

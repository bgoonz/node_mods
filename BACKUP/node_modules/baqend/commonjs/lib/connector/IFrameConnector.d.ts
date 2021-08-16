import { Receiver, Request } from './Connector';
import { XMLHttpConnector } from './XMLHttpConnector';
import { Message } from './Message';
export declare class IFrameConnector extends XMLHttpConnector {
    static readonly style = "width:1px;height:1px;position:absolute;top:-10px;left:-10px;";
    private mid;
    private messages;
    private iframe?;
    private queue;
    private connected;
    /**
     * Indicates if this connector implementation is usable for the given host and port
     * @param host
     * @param port
     * @param secure
     * @return
     */
    static isUsable(host: string, port: number, secure: boolean): boolean;
    constructor(host: string, port: number, secure: boolean, basePath: string);
    load(path: string): void;
    onLoad(): void;
    /**
     * @inheritDoc
     */
    doSend(message: Message, request: Request, receive: Receiver): void;
    postMessage(msg: string): void;
    doReceive(event: MessageEvent): void;
}

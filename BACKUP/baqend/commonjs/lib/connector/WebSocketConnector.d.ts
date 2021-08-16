import { WebSocket } from '../util/websocket';
import { Observable } from '../util/observable';
import { JsonMap } from '../util';
import { TokenStorage } from '../intersection';
export interface ObservableStream extends Observable<ChannelMessage> {
    /**
     * Sends a message through the websocket channel
     * @param message - The message to send
     */
    send(message: JsonMap): void;
}
export declare type ChannelMessage = {
    /**
     * The unique channel id of the message
     */
    id: string;
    /**
     * The message type
     */
    type: string;
    /**
     * server-time from the instant at which the event was generated
     */
    date: Date;
};
export declare class WebSocketConnector {
    /**
     * Map of all available connectors to their respective websocket connections
     */
    private static websockets;
    private observers;
    private socket;
    private url;
    /**
     *url The websocket connect script url
     *a websocket connection
     */
    static create(url: string): WebSocketConnector;
    /**
     *url
     */
    constructor(url: string);
    open(): Promise<WebSocket>;
    close(): void;
    /**
     *tokenStorage
     *id subscription ID
     *The channel for sending and receiving messages
     */
    openStream(tokenStorage: TokenStorage, id: string): ObservableStream;
}

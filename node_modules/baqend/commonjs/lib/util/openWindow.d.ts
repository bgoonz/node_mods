/**
 * An window open handler which can be used to open up the OAuth Window
 * @param url Thw URl which should be opened in the Popup
 * @param options Additional window options
 * @param target The target of the window
 * @param title title of the window, if no target was set
 * @return An optional opened window handle which will be returned by the redirect based OAuth flow.
 * If <code>null</code> is returned it indicates that the open window have bee failed
 */
export declare type OpenWindowHandler = (url: string, options: {
    title: string;
    target?: string;
    [option: string]: string | number | undefined;
}) => any | null;
export declare const openWindow: OpenWindowHandler;

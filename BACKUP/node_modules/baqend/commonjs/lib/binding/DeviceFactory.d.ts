import { PushMessage } from '../intersection';
import type * as model from '../model';
import { EntityFactory } from './EntityFactory';
export declare class DeviceFactory extends EntityFactory<model.Device> {
    /**
     * Push message will be used to send a push notification to a set of devices
     */
    get PushMessage(): typeof PushMessage;
    /**
     * The current registered device, or <code>null</code> if the device is not registered
     * @type model.Device
     */
    get me(): model.Device | null;
    /**
     * Returns true if the devices is already registered, otherwise false.
     * @type boolean
     */
    get isRegistered(): boolean;
    /**
     * Loads the Public VAPID Key which can be used to subscribe a Browser for Web Push notifications
     * @return The public VAPID Web Push subscription key
     */
    loadWebPushKey(): Promise<ArrayBuffer>;
    /**
     * Register a new device with the given device token and OS.
     * @param os The OS of the device (IOS/Android)
     * @param tokenOrSubscription The FCM device token, APNS device token or WebPush subscription
     * @param doneCallback Called when the operation succeed.
     * @param failCallback Called when the operation failed.
     * @return The registered device
     */
    register(os: string, tokenOrSubscription: string | PushSubscription, doneCallback?: any, failCallback?: any): Promise<model.Device>;
    /**
     * Register a new device with the given device token and OS.
     * @param os The OS of the device (IOS/Android)
     * @param tokenOrSubscription The FCM device token, APNS device token or WebPush
     * subscription
     * @param device An optional device entity to set custom field values
     * @param doneCallback Called when the operation succeed.
     * @param failCallback Called when the operation failed.
     * @return The registered device
     */
    register(os: string, tokenOrSubscription: string | PushSubscription, device: model.Device | null, doneCallback?: any, failCallback?: any): Promise<model.Device>;
    /**
     * Uses the info from the given {@link PushMessage} message to send an push notification.
     * @param pushMessage to send an push notification.
     * @param doneCallback Called when the operation succeed.
     * @param failCallback Called when the operation failed.
     * @return
     */
    push(pushMessage: PushMessage, doneCallback?: any, failCallback?: any): Promise<void>;
}

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeviceFactory = void 0;
var message = __importStar(require("../message"));
var intersection_1 = require("../intersection");
var EntityFactory_1 = require("./EntityFactory");
var DeviceFactory = /** @class */ (function (_super) {
    __extends(DeviceFactory, _super);
    function DeviceFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DeviceFactory.prototype, "PushMessage", {
        /**
         * Push message will be used to send a push notification to a set of devices
         */
        get: function () {
            return intersection_1.PushMessage;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DeviceFactory.prototype, "me", {
        /**
         * The current registered device, or <code>null</code> if the device is not registered
         * @type model.Device
         */
        get: function () {
            return this.db.deviceMe;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DeviceFactory.prototype, "isRegistered", {
        /**
         * Returns true if the devices is already registered, otherwise false.
         * @type boolean
         */
        get: function () {
            return this.db.isDeviceRegistered;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Loads the Public VAPID Key which can be used to subscribe a Browser for Web Push notifications
     * @return The public VAPID Web Push subscription key
     */
    DeviceFactory.prototype.loadWebPushKey = function () {
        var msg = new message.VAPIDPublicKey();
        msg.responseType('arraybuffer');
        return this.db.send(msg).then(function (response) { return response.entity; });
    };
    DeviceFactory.prototype.register = function (os, tokenOrSubscription, device, doneCallback, failCallback) {
        if (device instanceof Function) {
            return this.register(os, tokenOrSubscription, null, device, doneCallback);
        }
        var subscription = typeof tokenOrSubscription === 'string' ? { token: tokenOrSubscription } : tokenOrSubscription;
        return this.db.registerDevice(os, subscription, device).then(doneCallback, failCallback);
    };
    /**
     * Uses the info from the given {@link PushMessage} message to send an push notification.
     * @param pushMessage to send an push notification.
     * @param doneCallback Called when the operation succeed.
     * @param failCallback Called when the operation failed.
     * @return
     */
    DeviceFactory.prototype.push = function (pushMessage, doneCallback, failCallback) {
        return this.db.pushDevice(pushMessage).then(doneCallback, failCallback);
    };
    return DeviceFactory;
}(EntityFactory_1.EntityFactory));
exports.DeviceFactory = DeviceFactory;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGV2aWNlRmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9iaW5kaW5nL0RldmljZUZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGtEQUFzQztBQUN0QyxnREFBOEM7QUFFOUMsaURBQWdEO0FBRWhEO0lBQW1DLGlDQUEyQjtJQUE5RDs7SUErRUEsQ0FBQztJQTNFQyxzQkFBVyxzQ0FBVztRQUh0Qjs7V0FFRzthQUNIO1lBQ0UsT0FBTywwQkFBVyxDQUFDO1FBQ3JCLENBQUM7OztPQUFBO0lBTUQsc0JBQUksNkJBQUU7UUFKTjs7O1dBR0c7YUFDSDtZQUNFLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUM7UUFDMUIsQ0FBQzs7O09BQUE7SUFNRCxzQkFBSSx1Q0FBWTtRQUpoQjs7O1dBR0c7YUFDSDtZQUNFLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQztRQUNwQyxDQUFDOzs7T0FBQTtJQUVEOzs7T0FHRztJQUNILHNDQUFjLEdBQWQ7UUFDRSxJQUFNLEdBQUcsR0FBRyxJQUFJLE9BQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN6QyxHQUFHLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ2hDLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsUUFBUSxJQUFLLE9BQUEsUUFBUSxDQUFDLE1BQU0sRUFBZixDQUFlLENBQUMsQ0FBQztJQUMvRCxDQUFDO0lBMEJELGdDQUFRLEdBQVIsVUFBUyxFQUFVLEVBQUUsbUJBQThDLEVBQUUsTUFBc0MsRUFDekcsWUFBa0IsRUFBRSxZQUFrQjtRQUN0QyxJQUFJLE1BQU0sWUFBWSxRQUFRLEVBQUU7WUFDOUIsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRSxtQkFBbUIsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFlBQVksQ0FBQyxDQUFDO1NBQzNFO1FBRUQsSUFBTSxZQUFZLEdBQUcsT0FBTyxtQkFBbUIsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLG1CQUFtQixFQUFFLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixDQUFDO1FBRXBILE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUMsRUFBRSxFQUFFLFlBQVksRUFBRSxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLFlBQVksQ0FBQyxDQUFDO0lBQzNGLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSCw0QkFBSSxHQUFKLFVBQUssV0FBd0IsRUFBRSxZQUFrQixFQUFFLFlBQWtCO1FBQ25FLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxZQUFZLENBQUMsQ0FBQztJQUMxRSxDQUFDO0lBQ0gsb0JBQUM7QUFBRCxDQUFDLEFBL0VELENBQW1DLDZCQUFhLEdBK0UvQztBQS9FWSxzQ0FBYSJ9
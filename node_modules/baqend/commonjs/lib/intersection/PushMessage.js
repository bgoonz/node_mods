"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PushMessage = void 0;
var binding_1 = require("../binding");
/**
 * PushMessages are used to send a push notification to a set of devices
 */
var PushMessage = /** @class */ (function () {
    /**
     * Push message will be used to send a push notification to a set of devices
     *
     * @param [devices] The Set of device references which
     * will receive this push notification.
     * @param message The message of the push notification.
     * @param subject The subject of the push notification.
     * @param [options] The options object which can contain additional information and data
     * @param [badge] The badge for iOS or Web Push devices
     * @param [data] The data object which can contain additional information.
     */
    function PushMessage(devices, message, subject, options, badge, data) {
        var opts = typeof options === 'string' ? { sound: options, badge: badge, data: data } : (options || {});
        this.devices = PushMessage.initDevices(devices);
        this.message = message;
        this.subject = subject;
        Object.assign(this, opts);
    }
    /**
     * Instantiates a set of devices from the given parameter
     * @param devices
     * @return
     */
    PushMessage.initDevices = function (devices) {
        if (devices instanceof Set) {
            return devices;
        }
        if (devices instanceof binding_1.Entity) {
            return new Set([devices]);
        }
        if (!devices || devices[Symbol.iterator]) {
            return new Set(devices);
        }
        throw new Error('Only Sets, Lists and Arrays can be used as devices.');
    };
    /**
     * Adds a new object to the set of devices
     * @param device will be added to the device set to receive the push notification
     * @return
     */
    PushMessage.prototype.addDevice = function (device) {
        this.devices.add(device);
    };
    /**
     * Converts the push message to JSON
     * @return
     */
    PushMessage.prototype.toJSON = function () {
        if (!this.devices || !this.devices.size) {
            throw new Error('Set of devices is empty.');
        }
        return Object.assign({}, this, {
            devices: Array.from(this.devices, function (device) { return device.id; }),
        });
    };
    return PushMessage;
}());
exports.PushMessage = PushMessage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHVzaE1lc3NhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9saWIvaW50ZXJzZWN0aW9uL1B1c2hNZXNzYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHNDQUFvQztBQXdFcEM7O0dBRUc7QUFDSDtJQWdCRTs7Ozs7Ozs7OztPQVVHO0lBQ0gscUJBQVksT0FBa0UsRUFBRSxPQUFnQixFQUFFLE9BQWdCLEVBQ2hILE9BQXFDLEVBQUUsS0FBdUIsRUFBRSxJQUFXO1FBQzNFLElBQU0sSUFBSSxHQUFHLE9BQU8sT0FBTyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLEtBQUssT0FBQSxFQUFFLElBQUksTUFBQSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBRTdGLElBQUksQ0FBQyxPQUFPLEdBQUcsV0FBVyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUV2QixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNZLHVCQUFXLEdBQTFCLFVBQTJCLE9BQW1FO1FBQzVGLElBQUksT0FBTyxZQUFZLEdBQUcsRUFBRTtZQUMxQixPQUFPLE9BQU8sQ0FBQztTQUNoQjtRQUVELElBQUksT0FBTyxZQUFZLGdCQUFNLEVBQUU7WUFDN0IsT0FBTyxJQUFJLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7U0FDM0I7UUFFRCxJQUFJLENBQUMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDeEMsT0FBTyxJQUFJLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUN6QjtRQUVELE1BQU0sSUFBSSxLQUFLLENBQUMscURBQXFELENBQUMsQ0FBQztJQUN6RSxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILCtCQUFTLEdBQVQsVUFBVSxNQUFvQjtRQUM1QixJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsNEJBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUU7WUFDdkMsTUFBTSxJQUFJLEtBQUssQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO1NBQzdDO1FBRUQsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQWEsRUFBRSxJQUFJLEVBQUU7WUFDeEMsT0FBTyxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxVQUFDLE1BQU0sSUFBSyxPQUFBLE1BQU0sQ0FBQyxFQUFFLEVBQVQsQ0FBUyxDQUFDO1NBQ3pELENBQUMsQ0FBQztJQUNMLENBQUM7SUFDSCxrQkFBQztBQUFELENBQUMsQUFqRkQsSUFpRkM7QUFqRlksa0NBQVcifQ==
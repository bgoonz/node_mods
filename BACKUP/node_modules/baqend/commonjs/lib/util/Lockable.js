"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Lockable = void 0;
/**
 * This base class provides an lock interface to execute exclusive operations
 */
var Lockable = /** @class */ (function () {
    function Lockable() {
        /**
         * Indicates if there is currently an onging exclusive operation
         * @type boolean
         * @private
         */
        this.isLocked = false;
        /**
         * A promise which represents the state of the least exclusive operation
         * @type Promise
         * @private
         */
        this.readyPromise = Promise.resolve(this);
    }
    Object.defineProperty(Lockable.prototype, "isReady", {
        /**
         * Indicates if there is currently no exclusive operation executed
         * <code>true</code> If no exclusive lock is hold
         */
        get: function () {
            return !this.isLocked;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Waits on the previously requested operation and calls the doneCallback if the operation is fulfilled
     * @param doneCallback The callback which will be invoked when the previously
     * operations on this object is completed.
     * @param failCallback When the lock can't be released caused by a none
     * recoverable error
     * @return A promise which completes successfully, when the previously requested
     * operation completes
     */
    Lockable.prototype.ready = function (doneCallback, failCallback) {
        return this.readyPromise.then(doneCallback, failCallback);
    };
    /**
     * Try to aquire an exclusive lock and executes the given callback.
     * @param callback The exclusive operation to execute
     * @param [critical=false] Indicates if the operation is critical. If the operation is critical and the
     * operation fails, then the lock will not be released
     * @return A promise
     * @throws If the lock can't be aquired
     * @protected
     */
    Lockable.prototype.withLock = function (callback, critical) {
        var _this = this;
        if (critical === void 0) { critical = false; }
        if (this.isLocked) {
            throw new Error('Current operation has not been finished.');
        }
        try {
            this.isLocked = true;
            var result = callback().then(function (res) {
                _this.isLocked = false;
                return res;
            }, function (e) {
                if (!critical) {
                    _this.isLocked = false;
                }
                throw e;
            });
            this.readyPromise = result.then(function () { return _this; }, function (e) {
                if (!critical) {
                    return _this;
                }
                throw e;
            });
            return result;
        }
        catch (e) {
            if (critical) {
                this.readyPromise = Promise.reject(e);
            }
            else {
                this.isLocked = false;
            }
            throw e;
        }
    };
    return Lockable;
}());
exports.Lockable = Lockable;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9ja2FibGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9saWIvdXRpbC9Mb2NrYWJsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQTs7R0FFRztBQUNIO0lBS0U7UUFDRTs7OztXQUlHO1FBQ0gsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFFdEI7Ozs7V0FJRztRQUNILElBQUksQ0FBQyxZQUFZLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBTUQsc0JBQUksNkJBQU87UUFKWDs7O1dBR0c7YUFDSDtZQUNFLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3hCLENBQUM7OztPQUFBO0lBRUQ7Ozs7Ozs7O09BUUc7SUFDSCx3QkFBSyxHQUFMLFVBQU0sWUFBa0MsRUFBRSxZQUFvQztRQUM1RSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxZQUFZLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBRUQ7Ozs7Ozs7O09BUUc7SUFDSCwyQkFBUSxHQUFSLFVBQVksUUFBMEIsRUFBRSxRQUFnQjtRQUF4RCxpQkFpQ0M7UUFqQ3VDLHlCQUFBLEVBQUEsZ0JBQWdCO1FBQ3RELElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixNQUFNLElBQUksS0FBSyxDQUFDLDBDQUEwQyxDQUFDLENBQUM7U0FDN0Q7UUFFRCxJQUFJO1lBQ0YsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7WUFDckIsSUFBTSxNQUFNLEdBQUcsUUFBUSxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUMsR0FBRztnQkFDakMsS0FBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7Z0JBQ3RCLE9BQU8sR0FBRyxDQUFDO1lBQ2IsQ0FBQyxFQUFFLFVBQUMsQ0FBQztnQkFDSCxJQUFJLENBQUMsUUFBUSxFQUFFO29CQUNiLEtBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO2lCQUN2QjtnQkFDRCxNQUFNLENBQUMsQ0FBQztZQUNWLENBQUMsQ0FBQyxDQUFDO1lBRUgsSUFBSSxDQUFDLFlBQVksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLGNBQU0sT0FBQSxLQUFJLEVBQUosQ0FBSSxFQUFFLFVBQUMsQ0FBQztnQkFDNUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtvQkFDYixPQUFPLEtBQUksQ0FBQztpQkFDYjtnQkFDRCxNQUFNLENBQUMsQ0FBQztZQUNWLENBQUMsQ0FBQyxDQUFDO1lBRUgsT0FBTyxNQUFNLENBQUM7U0FDZjtRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ1YsSUFBSSxRQUFRLEVBQUU7Z0JBQ1osSUFBSSxDQUFDLFlBQVksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ3ZDO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO2FBQ3ZCO1lBQ0QsTUFBTSxDQUFDLENBQUM7U0FDVDtJQUNILENBQUM7SUFDSCxlQUFDO0FBQUQsQ0FBQyxBQXJGRCxJQXFGQztBQXJGWSw0QkFBUSJ9
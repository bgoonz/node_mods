"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersistentError = void 0;
// eslint-disable-next-line @typescript-eslint/no-redeclare
exports.PersistentError = (function () {
    function PersistentErrorConstructor(message, cause) {
        if (Object.prototype.hasOwnProperty.call(Error, 'captureStackTrace')) {
            Error.captureStackTrace(this, this.constructor);
        }
        else {
            this.stack = (new Error()).stack;
        }
        this.message = (message || 'An unexpected persistent error occurred.');
        this.name = this.constructor.name;
        if (cause) {
            this.cause = cause;
            if (cause.stack) {
                this.stack += "\nCaused By: " + cause.stack;
            }
        }
    }
    // custom errors must be manually extended, since JS Errors can't be super called in a class hierarchy,
    // otherwise the super call destroys the origin 'this' reference
    PersistentErrorConstructor.prototype = Object.create(Error.prototype, {
        constructor: {
            value: PersistentErrorConstructor,
            writable: true,
            enumerable: false,
            configurable: true,
        },
    });
    return PersistentErrorConstructor;
})();
exports.PersistentError.of = function of(error) {
    if (error instanceof exports.PersistentError) {
        return error;
    }
    return new exports.PersistentError(null, error);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGVyc2lzdGVudEVycm9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbGliL2Vycm9yL1BlcnNpc3RlbnRFcnJvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFvQ0EsMkRBQTJEO0FBQzlDLFFBQUEsZUFBZSxHQUFHLENBQUM7SUFDOUIsU0FBUywwQkFBMEIsQ0FBd0IsT0FBc0IsRUFBRSxLQUFhO1FBQzlGLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxtQkFBbUIsQ0FBQyxFQUFFO1lBQ3BFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQ2pEO2FBQU07WUFDTCxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsSUFBSSxLQUFLLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQztTQUNsQztRQUVELElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxPQUFPLElBQUksMENBQTBDLENBQUMsQ0FBQztRQUN2RSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDO1FBRWxDLElBQUksS0FBSyxFQUFFO1lBQ1QsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7WUFDbkIsSUFBSSxLQUFLLENBQUMsS0FBSyxFQUFFO2dCQUNmLElBQUksQ0FBQyxLQUFLLElBQUksa0JBQWdCLEtBQUssQ0FBQyxLQUFPLENBQUM7YUFDN0M7U0FDRjtJQUNILENBQUM7SUFFRCx1R0FBdUc7SUFDdkcsZ0VBQWdFO0lBQ2hFLDBCQUEwQixDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUU7UUFDcEUsV0FBVyxFQUFFO1lBQ1gsS0FBSyxFQUFFLDBCQUEwQjtZQUNqQyxRQUFRLEVBQUUsSUFBSTtZQUNkLFVBQVUsRUFBRSxLQUFLO1lBQ2pCLFlBQVksRUFBRSxJQUFJO1NBQ25CO0tBQ0YsQ0FBQyxDQUFDO0lBRUgsT0FBTywwQkFBK0QsQ0FBQztBQUN6RSxDQUFDLENBQUMsRUFBRSxDQUFDO0FBRUwsdUJBQWUsQ0FBQyxFQUFFLEdBQUcsU0FBUyxFQUFFLENBQUMsS0FBWTtJQUMzQyxJQUFJLEtBQUssWUFBWSx1QkFBZSxFQUFFO1FBQ3BDLE9BQU8sS0FBSyxDQUFDO0tBQ2Q7SUFFRCxPQUFPLElBQUksdUJBQWUsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDMUMsQ0FBQyxDQUFDIn0=
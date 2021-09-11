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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommunicationError = void 0;
var PersistentError_1 = require("./PersistentError");
var CommunicationError = /** @class */ (function (_super) {
    __extends(CommunicationError, _super);
    /**
     * @param httpMessage The http message which was send
     * @param response The received entity headers and content
     */
    function CommunicationError(httpMessage, response) {
        var _this = this;
        var entity = response.entity || response.error || {};
        var state = (response.status === 0 ? 'Request' : 'Response');
        var message = entity.message
            || (httpMessage && "Handling the " + state + " for " + httpMessage.request.method + " " + httpMessage.request.path)
            || 'A communication error occurred.';
        _this = _super.call(this, message, entity) || this;
        _this.name = entity.className || 'CommunicationError';
        _this.reason = entity.reason || 'Communication failed';
        _this.status = response.status;
        if (entity.data) {
            _this.data = entity.data;
        }
        var cause = entity;
        while (cause && cause.stackTrace) {
            _this.stack += "\nServerside Caused by: " + cause.className + " " + cause.message;
            var stackTrace = cause.stackTrace;
            for (var i = 0; i < stackTrace.length; i += 1) {
                var el = stackTrace[i];
                _this.stack += "\n    at " + el.className + "." + el.methodName;
                _this.stack += " (" + el.fileName + ":" + el.lineNumber + ")";
            }
            cause = cause.cause;
        }
        return _this;
    }
    return CommunicationError;
}(PersistentError_1.PersistentError));
exports.CommunicationError = CommunicationError;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29tbXVuaWNhdGlvbkVycm9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbGliL2Vycm9yL0NvbW11bmljYXRpb25FcnJvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxREFBb0Q7QUFJcEQ7SUFBd0Msc0NBQWU7SUFnQnJEOzs7T0FHRztJQUNILDRCQUFZLFdBQTJCLEVBQUUsUUFBa0I7UUFBM0QsaUJBK0JDO1FBOUJDLElBQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxNQUFNLElBQUksUUFBUSxDQUFDLEtBQUssSUFBSSxFQUFFLENBQUM7UUFDdkQsSUFBTSxLQUFLLEdBQUcsQ0FBQyxRQUFRLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUMvRCxJQUFNLE9BQU8sR0FBRyxNQUFNLENBQUMsT0FBTztlQUN2QixDQUFDLFdBQVcsSUFBSSxrQkFBZ0IsS0FBSyxhQUFRLFdBQVcsQ0FBQyxPQUFPLENBQUMsTUFBTSxTQUFJLFdBQVcsQ0FBQyxPQUFPLENBQUMsSUFBTSxDQUFDO2VBQ3RHLGlDQUFpQyxDQUFDO1FBRXpDLFFBQUEsa0JBQU0sT0FBTyxFQUFFLE1BQU0sQ0FBQyxTQUFDO1FBRXZCLEtBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLFNBQVMsSUFBSSxvQkFBb0IsQ0FBQztRQUNyRCxLQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLElBQUksc0JBQXNCLENBQUM7UUFDdEQsS0FBSSxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDO1FBRTlCLElBQUksTUFBTSxDQUFDLElBQUksRUFBRTtZQUNmLEtBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQztTQUN6QjtRQUVELElBQUksS0FBSyxHQUFHLE1BQU0sQ0FBQztRQUNuQixPQUFPLEtBQUssSUFBSSxLQUFLLENBQUMsVUFBVSxFQUFFO1lBQ2hDLEtBQUksQ0FBQyxLQUFLLElBQUksNkJBQTJCLEtBQUssQ0FBQyxTQUFTLFNBQUksS0FBSyxDQUFDLE9BQVMsQ0FBQztZQUVwRSxJQUFBLFVBQVUsR0FBSyxLQUFLLFdBQVYsQ0FBVztZQUM3QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUM3QyxJQUFNLEVBQUUsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBRXpCLEtBQUksQ0FBQyxLQUFLLElBQUksY0FBWSxFQUFFLENBQUMsU0FBUyxTQUFJLEVBQUUsQ0FBQyxVQUFZLENBQUM7Z0JBQzFELEtBQUksQ0FBQyxLQUFLLElBQUksT0FBSyxFQUFFLENBQUMsUUFBUSxTQUFJLEVBQUUsQ0FBQyxVQUFVLE1BQUcsQ0FBQzthQUNwRDtZQUVELEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDO1NBQ3JCOztJQUNILENBQUM7SUFDSCx5QkFBQztBQUFELENBQUMsQUFwREQsQ0FBd0MsaUNBQWUsR0FvRHREO0FBcERZLGdEQUFrQiJ9
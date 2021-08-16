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
exports.RollbackError = void 0;
var PersistentError_1 = require("./PersistentError");
var RollbackError = /** @class */ (function (_super) {
    __extends(RollbackError, _super);
    function RollbackError(cause) {
        return _super.call(this, 'The transaction has been roll backed', cause) || this;
    }
    return RollbackError;
}(PersistentError_1.PersistentError));
exports.RollbackError = RollbackError;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUm9sbGJhY2tFcnJvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9lcnJvci9Sb2xsYmFja0Vycm9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFEQUFvRDtBQUVwRDtJQUFtQyxpQ0FBZTtJQUNoRCx1QkFBWSxLQUFZO2VBQ3RCLGtCQUFNLHNDQUFzQyxFQUFFLEtBQUssQ0FBQztJQUN0RCxDQUFDO0lBQ0gsb0JBQUM7QUFBRCxDQUFDLEFBSkQsQ0FBbUMsaUNBQWUsR0FJakQ7QUFKWSxzQ0FBYSJ9
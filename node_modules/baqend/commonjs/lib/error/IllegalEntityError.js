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
exports.IllegalEntityError = void 0;
var PersistentError_1 = require("./PersistentError");
var IllegalEntityError = /** @class */ (function (_super) {
    __extends(IllegalEntityError, _super);
    /**
     * @param entity - The entity which cause the error
     */
    function IllegalEntityError(entity) {
        var _this = _super.call(this, "Entity " + entity + " is not a valid entity") || this;
        _this.entity = entity;
        return _this;
    }
    return IllegalEntityError;
}(PersistentError_1.PersistentError));
exports.IllegalEntityError = IllegalEntityError;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSWxsZWdhbEVudGl0eUVycm9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbGliL2Vycm9yL0lsbGVnYWxFbnRpdHlFcnJvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxREFBb0Q7QUFHcEQ7SUFBd0Msc0NBQWU7SUFNckQ7O09BRUc7SUFDSCw0QkFBWSxNQUFjO1FBQTFCLFlBQ0Usa0JBQU0sWUFBVSxNQUFNLDJCQUF3QixDQUFDLFNBRWhEO1FBREMsS0FBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7O0lBQ3ZCLENBQUM7SUFDSCx5QkFBQztBQUFELENBQUMsQUFiRCxDQUF3QyxpQ0FBZSxHQWF0RDtBQWJZLGdEQUFrQiJ9
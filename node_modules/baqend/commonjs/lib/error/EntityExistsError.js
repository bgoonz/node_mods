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
exports.EntityExistsError = void 0;
var PersistentError_1 = require("./PersistentError");
var EntityExistsError = /** @class */ (function (_super) {
    __extends(EntityExistsError, _super);
    /**
     * @param entity - The entity which cause the error
     */
    function EntityExistsError(entity) {
        var _this = _super.call(this, "The entity " + entity + " is managed by a different db.") || this;
        _this.entity = entity;
        return _this;
    }
    return EntityExistsError;
}(PersistentError_1.PersistentError));
exports.EntityExistsError = EntityExistsError;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRW50aXR5RXhpc3RzRXJyb3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9saWIvZXJyb3IvRW50aXR5RXhpc3RzRXJyb3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEscURBQW9EO0FBR3BEO0lBQXVDLHFDQUFlO0lBTXBEOztPQUVHO0lBQ0gsMkJBQVksTUFBYztRQUExQixZQUNFLGtCQUFNLGdCQUFjLE1BQU0sbUNBQWdDLENBQUMsU0FFNUQ7UUFEQyxLQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQzs7SUFDdkIsQ0FBQztJQUNILHdCQUFDO0FBQUQsQ0FBQyxBQWJELENBQXVDLGlDQUFlLEdBYXJEO0FBYlksOENBQWlCIn0=
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
exports.GlobalStorage = void 0;
var TokenStorage_1 = require("./TokenStorage");
var GlobalStorage = /** @class */ (function (_super) {
    __extends(GlobalStorage, _super);
    function GlobalStorage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Creates a global token storage instance for the given origin
     * A global token storage use a global variable to store the actual origin tokens
     * @param origin
     * @return
     */
    GlobalStorage.create = function (origin) {
        return Promise.resolve(new GlobalStorage(origin, GlobalStorage.tokens[origin]));
    };
    /**
     * @inheritDoc
     */
    GlobalStorage.prototype.saveToken = function (origin, token, temporary) {
        if (!temporary) {
            if (token) {
                GlobalStorage.tokens[origin] = token;
            }
            else {
                delete GlobalStorage.tokens[origin];
            }
        }
    };
    GlobalStorage.tokens = {};
    return GlobalStorage;
}(TokenStorage_1.TokenStorage));
exports.GlobalStorage = GlobalStorage;
TokenStorage_1.TokenStorage.GLOBAL = GlobalStorage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2xvYmFsU3RvcmFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9pbnRlcnNlY3Rpb24vR2xvYmFsU3RvcmFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBOEM7QUFFOUM7SUFBbUMsaUNBQVk7SUFBL0M7O0lBeUJBLENBQUM7SUF0QkM7Ozs7O09BS0c7SUFDSSxvQkFBTSxHQUFiLFVBQWMsTUFBYztRQUMxQixPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxhQUFhLENBQUMsTUFBTSxFQUFFLGFBQWEsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2xGLENBQUM7SUFFRDs7T0FFRztJQUNILGlDQUFTLEdBQVQsVUFBVSxNQUFjLEVBQUUsS0FBYSxFQUFFLFNBQWtCO1FBQ3pELElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDZCxJQUFJLEtBQUssRUFBRTtnQkFDVCxhQUFhLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEtBQUssQ0FBQzthQUN0QztpQkFBTTtnQkFDTCxPQUFPLGFBQWEsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDckM7U0FDRjtJQUNILENBQUM7SUF2QmMsb0JBQU0sR0FBaUMsRUFBRSxDQUFDO0lBd0IzRCxvQkFBQztDQUFBLEFBekJELENBQW1DLDJCQUFZLEdBeUI5QztBQXpCWSxzQ0FBYTtBQTJCMUIsMkJBQVksQ0FBQyxNQUFNLEdBQUcsYUFBYSxDQUFDIn0=
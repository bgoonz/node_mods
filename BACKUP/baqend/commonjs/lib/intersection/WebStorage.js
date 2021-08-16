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
exports.WebStorage = void 0;
var TokenStorage_1 = require("./TokenStorage");
/**
 * @ignore
 */
var WebStorage = /** @class */ (function (_super) {
    __extends(WebStorage, _super);
    function WebStorage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WebStorage.isAvailable = function () {
        try {
            // firefox throws an exception if cookies are disabled
            if (typeof localStorage === 'undefined') {
                return false;
            }
            localStorage.setItem('bq_webstorage_test', 'bq');
            localStorage.removeItem('bq_webstorage_test');
            return true;
        }
        catch (e) {
            return false;
        }
    };
    /**
     * Creates a global web storage instance for the given origin
     * A web token storage use the localStorage or sessionStorage to store the origin tokens
     * @param origin
     * @return
     */
    WebStorage.create = function (origin) {
        var temporary = false;
        var token = localStorage.getItem("BAT:" + origin);
        if (!token && typeof sessionStorage !== 'undefined') {
            token = sessionStorage.getItem("BAT:" + origin);
            temporary = !!token;
        }
        return Promise.resolve(new WebStorage(origin, token, temporary));
    };
    /**
     * @inheritDoc
     */
    WebStorage.prototype.saveToken = function (origin, token, temporary) {
        var webStorage = temporary ? sessionStorage : localStorage;
        if (token) {
            webStorage.setItem("BAT:" + origin, token);
        }
        else {
            webStorage.removeItem("BAT:" + origin);
        }
    };
    return WebStorage;
}(TokenStorage_1.TokenStorage));
exports.WebStorage = WebStorage;
if (WebStorage.isAvailable()) {
    TokenStorage_1.TokenStorage.WEB_STORAGE = WebStorage;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV2ViU3RvcmFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9pbnRlcnNlY3Rpb24vV2ViU3RvcmFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBOEM7QUFFOUM7O0dBRUc7QUFDSDtJQUFnQyw4QkFBWTtJQUE1Qzs7SUE2Q0EsQ0FBQztJQTVDUSxzQkFBVyxHQUFsQjtRQUNFLElBQUk7WUFDRixzREFBc0Q7WUFDdEQsSUFBSSxPQUFPLFlBQVksS0FBSyxXQUFXLEVBQUU7Z0JBQ3ZDLE9BQU8sS0FBSyxDQUFDO2FBQ2Q7WUFFRCxZQUFZLENBQUMsT0FBTyxDQUFDLG9CQUFvQixFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ2pELFlBQVksQ0FBQyxVQUFVLENBQUMsb0JBQW9CLENBQUMsQ0FBQztZQUM5QyxPQUFPLElBQUksQ0FBQztTQUNiO1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDVixPQUFPLEtBQUssQ0FBQztTQUNkO0lBQ0gsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0ksaUJBQU0sR0FBYixVQUFjLE1BQWM7UUFDMUIsSUFBSSxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLElBQUksS0FBSyxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsU0FBTyxNQUFRLENBQUMsQ0FBQztRQUVsRCxJQUFJLENBQUMsS0FBSyxJQUFJLE9BQU8sY0FBYyxLQUFLLFdBQVcsRUFBRTtZQUNuRCxLQUFLLEdBQUcsY0FBYyxDQUFDLE9BQU8sQ0FBQyxTQUFPLE1BQVEsQ0FBQyxDQUFDO1lBQ2hELFNBQVMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDO1NBQ3JCO1FBRUQsT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksVUFBVSxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQztJQUNuRSxDQUFDO0lBRUQ7O09BRUc7SUFDSCw4QkFBUyxHQUFULFVBQVUsTUFBYyxFQUFFLEtBQW9CLEVBQUUsU0FBa0I7UUFDaEUsSUFBTSxVQUFVLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQztRQUM3RCxJQUFJLEtBQUssRUFBRTtZQUNULFVBQVUsQ0FBQyxPQUFPLENBQUMsU0FBTyxNQUFRLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDNUM7YUFBTTtZQUNMLFVBQVUsQ0FBQyxVQUFVLENBQUMsU0FBTyxNQUFRLENBQUMsQ0FBQztTQUN4QztJQUNILENBQUM7SUFDSCxpQkFBQztBQUFELENBQUMsQUE3Q0QsQ0FBZ0MsMkJBQVksR0E2QzNDO0FBN0NZLGdDQUFVO0FBK0N2QixJQUFJLFVBQVUsQ0FBQyxXQUFXLEVBQUUsRUFBRTtJQUM1QiwyQkFBWSxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUM7Q0FDdkMifQ==
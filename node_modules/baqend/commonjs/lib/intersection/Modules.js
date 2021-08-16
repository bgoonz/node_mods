"use strict";
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
exports.Modules = void 0;
var message = __importStar(require("../message"));
/**
 * An executor of Modules running on Baqend.
 */
var Modules = /** @class */ (function () {
    /**
     * @param entityManager
     */
    function Modules(entityManager) {
        this.entityManager = entityManager;
    }
    /**
     * Calls the module, which is identified by the given bucket
     *
     * The optional query parameter will be attached as GET-parameters.
     *
     * @param bucket Name of the module
     * @param query GET-Parameter as key-value-pairs or query string
     * @param options Additional request options
     * @param options.responseType The type used to provide the response data, defaults to text oder json
     * depends on the received data, can be one of arraybuffer, blob, json, text, base64, data-url
     * @param doneCallback
     * @param failCallback
     * @return
     */
    Modules.prototype.get = function (bucket, query, options, doneCallback, failCallback) {
        if (query instanceof Function) {
            return this.get(bucket, {}, query, options, doneCallback);
        }
        if (options instanceof Function) {
            return this.get(bucket, query, {}, options, doneCallback);
        }
        var opt = options || {};
        var msg = new message.GetBaqendModule(bucket)
            .addQueryString(query || '')
            .responseType(opt.responseType || null);
        return this.send(msg, doneCallback, failCallback);
    };
    /**
     * Calls the module, which is identified by the given bucket
     *
     * @param bucket Name of the module
     * @param [body] The POST-body data to send
     * @param options Additional request options
     * @param options.requestType A optional type hint used to correctly interpret the provided data, can be one
     * of arraybuffer, blob, json, text, base64, data-url, form
     * @param options.mimeType The mimType of the body. Defaults to the mimeType of the provided data if
     * it is a file object, blob or data-url
     * @param options.responseType The type used to provide the response data, defaults to text oder json
     * depends on the received data, can be one of arraybuffer, blob, json, text, base64, data-url
     * @param doneCallback
     * @param failCallback
     * @return
     */
    Modules.prototype.post = function (bucket, body, options, doneCallback, failCallback) {
        if (typeof options === 'function') {
            return this.post(bucket, body, {}, options, doneCallback);
        }
        var opt = options || {};
        var msg = new message.PostBaqendModule(bucket)
            .entity(body, opt.requestType)
            .mimeType(opt.mimeType || null)
            .responseType(opt.responseType || null);
        return this.send(msg, doneCallback, failCallback);
    };
    Modules.prototype.send = function (msg, doneCallback, failCallback) {
        return this.entityManager.send(msg)
            .then(function (response) { return response.entity; })
            .then(doneCallback, failCallback);
    };
    return Modules;
}());
exports.Modules = Modules;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTW9kdWxlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9pbnRlcnNlY3Rpb24vTW9kdWxlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsa0RBQXNDO0FBTXRDOztHQUVHO0FBQ0g7SUFHRTs7T0FFRztJQUNILGlCQUFZLGFBQTRCO1FBQ3RDLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO0lBQ3JDLENBQUM7SUFFRDs7Ozs7Ozs7Ozs7OztPQWFHO0lBQ0gscUJBQUcsR0FBSCxVQUFJLE1BQWMsRUFBRSxLQUF1RCxFQUN6RSxPQUF3RCxFQUFFLFlBQWtCLEVBQUUsWUFBa0I7UUFDaEcsSUFBSSxLQUFLLFlBQVksUUFBUSxFQUFFO1lBQzdCLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsWUFBWSxDQUFDLENBQUM7U0FDM0Q7UUFFRCxJQUFJLE9BQU8sWUFBWSxRQUFRLEVBQUU7WUFDL0IsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxZQUFZLENBQUMsQ0FBQztTQUMzRDtRQUVELElBQU0sR0FBRyxHQUFHLE9BQU8sSUFBSSxFQUFFLENBQUM7UUFFMUIsSUFBTSxHQUFHLEdBQUcsSUFBSSxPQUFPLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQzthQUM1QyxjQUFjLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQzthQUMzQixZQUFZLENBQUMsR0FBRyxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsQ0FBQztRQUUxQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLFlBQVksRUFBRSxZQUFZLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBRUQ7Ozs7Ozs7Ozs7Ozs7OztPQWVHO0lBQ0gsc0JBQUksR0FBSixVQUFLLE1BQWMsRUFBRSxJQUFpQixFQUFFLE9BQ0wsRUFBRSxZQUFrQixFQUFFLFlBQWtCO1FBQ3pFLElBQUksT0FBTyxPQUFPLEtBQUssVUFBVSxFQUFFO1lBQ2pDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsWUFBWSxDQUFDLENBQUM7U0FDM0Q7UUFFRCxJQUFNLEdBQUcsR0FBRyxPQUFPLElBQUksRUFBRSxDQUFDO1FBRTFCLElBQU0sR0FBRyxHQUFHLElBQUksT0FBTyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQzthQUM3QyxNQUFNLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxXQUFXLENBQUM7YUFDN0IsUUFBUSxDQUFDLEdBQUcsQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDO2FBQzlCLFlBQVksQ0FBQyxHQUFHLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxDQUFDO1FBRTFDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsWUFBWSxFQUFFLFlBQVksQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFFRCxzQkFBSSxHQUFKLFVBQUssR0FBWSxFQUFFLFlBQWtCLEVBQUUsWUFBa0I7UUFDdkQsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7YUFDaEMsSUFBSSxDQUFDLFVBQUMsUUFBUSxJQUFLLE9BQUEsUUFBUSxDQUFDLE1BQU0sRUFBZixDQUFlLENBQUM7YUFDbkMsSUFBSSxDQUFDLFlBQVksRUFBRSxZQUFZLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBQ0gsY0FBQztBQUFELENBQUMsQUFoRkQsSUFnRkM7QUFoRlksMEJBQU8ifQ==
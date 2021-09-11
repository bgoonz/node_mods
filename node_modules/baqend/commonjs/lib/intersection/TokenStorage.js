"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenStorage = void 0;
var util_1 = require("../util");
var TokenStorage = /** @class */ (function () {
    /**
     * @param origin The origin where the token belongs to
     * @param token The initial token
     * @param temporary If the token should be saved temporary or permanently
     */
    function TokenStorage(origin, token, temporary) {
        this.tokenData = token ? TokenStorage.parse(token) : null;
        this.origin = origin;
        this.temporary = !!temporary;
    }
    /**
     * Parse a token string in its components
     * @param token The token string to parse, time values are returned as timestamps
     * @return The parsed token data
     */
    TokenStorage.parse = function (token) {
        return {
            val: token,
            createdAt: parseInt(token.substring(0, 8), 16) * 1000,
            expireAt: parseInt(token.substring(8, 16), 16) * 1000,
            sig: token.substring(token.length - 40),
            data: token.substring(0, token.length - 40),
        };
    };
    Object.defineProperty(TokenStorage.prototype, "token", {
        /**
         * Get the stored token
         * @return The token or undefined, if no token is available
         */
        get: function () {
            return this.tokenData ? this.tokenData.val : null;
        },
        enumerable: false,
        configurable: true
    });
    TokenStorage.create = function (origin) {
        return Promise.resolve(new TokenStorage(origin));
    };
    /**
     * Use the underlying storage implementation to save the token
     * @param origin The origin where the token belongs to
     * @param token The initial token
     * @param temporary If the token should be saved temporary or permanently
     * @return
     */
    TokenStorage.prototype.saveToken = function (origin, token, temporary) {
        // eslint-disable-next-line no-underscore-dangle
        if (this._saveToken !== TokenStorage.prototype._saveToken) {
            // eslint-disable-next-line no-console
            console.log('Using deprecated TokenStorage._saveToken implementation.');
            // eslint-disable-next-line no-underscore-dangle
            this._saveToken(origin, token, temporary);
        }
    };
    /**
     * Use the underlying storage implementation to save the token
     * @param origin The origin where the token belongs to
     * @param token The initial token
     * @param temporary If the token should be saved temporary or permanently
     * @return
     * @deprecated Use TokenStorage#saveToken instead
     * @protected
     */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    TokenStorage.prototype._saveToken = function (origin, token, temporary) { };
    /**
     * Update the token for the givin origin, the operation may be asynchronous
     * @param token The token to store or <code>null</code> to remove the token
     */
    TokenStorage.prototype.update = function (token) {
        var t = token ? TokenStorage.parse(token) : null;
        if (this.tokenData && t && this.tokenData.expireAt > t.expireAt) {
            // an older token was fetched from the cache, so ignore it
            return;
        }
        this.tokenData = t;
        this.saveToken(this.origin, token, this.temporary);
    };
    /**
     * Derives a resource token from the stored origin token and signs the resource with the generated resource token
     *
     * @param resource The resource which will be accessible with the returned token
     * @param sign Sign the given resource with a token, if sign is false the resource will only be encoded to a path
     * @return A resource token which can only be used to access the specified resource
     */
    TokenStorage.prototype.signPath = function (resource, sign) {
        if (sign === void 0) { sign = true; }
        var tokenData = this.tokenData;
        var result = Promise.resolve(resource.split('/').map(encodeURIComponent).join('/'));
        if (!tokenData || !sign) {
            return result;
        }
        return result.then(function (path) { return TokenStorage.hmac(path + tokenData.data, tokenData.sig)
            .then(function (hash) { return path + "?BAT=" + (tokenData.data + hash); }); })
            .catch(function (e) {
            // eslint-disable-next-line no-console
            console.warn('Can\'t sign the resource, run the SDK on a secured origin, or provide an alternative hmac implementation on TokenStorage.hmac', e);
            return result;
        });
    };
    TokenStorage.hmac = util_1.hmac;
    return TokenStorage;
}());
exports.TokenStorage = TokenStorage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVG9rZW5TdG9yYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbGliL2ludGVyc2VjdGlvbi9Ub2tlblN0b3JhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsZ0NBQStCO0FBcUIvQjtJQWlERTs7OztPQUlHO0lBQ0gsc0JBQVksTUFBYyxFQUFFLEtBQXFCLEVBQUUsU0FBbUI7UUFDcEUsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUMxRCxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDL0IsQ0FBQztJQXBDRDs7OztPQUlHO0lBQ0ksa0JBQUssR0FBWixVQUFhLEtBQWE7UUFDeEIsT0FBTztZQUNMLEdBQUcsRUFBRSxLQUFLO1lBQ1YsU0FBUyxFQUFFLFFBQVEsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsR0FBRyxJQUFJO1lBQ3JELFFBQVEsRUFBRSxRQUFRLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLEdBQUcsSUFBSTtZQUNyRCxHQUFHLEVBQUUsS0FBSyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztZQUN2QyxJQUFJLEVBQUUsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7U0FDNUMsQ0FBQztJQUNKLENBQUM7SUFNRCxzQkFBSSwrQkFBSztRQUpUOzs7V0FHRzthQUNIO1lBQ0UsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMs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
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hmac = void 0;
function hmac(message, key) {
    var encoder = new TextEncoder();
    return Promise.resolve(crypto.subtle.importKey('raw', // raw format of the key - should be Uint8Array
    encoder.encode(key), {
        name: 'HMAC',
        hash: { name: 'SHA-1' },
    }, false, // export = false
    ['sign', 'verify']))
        .then(function (cryptoKey) { return crypto.subtle.sign('HMAC', cryptoKey, encoder.encode(message)); })
        .then(function (signature) {
        var byteArray = new Uint8Array(signature);
        return byteArray.reduce(function (token, x) { return token + x.toString(16).padStart(2, '0'); }, '');
    });
}
exports.hmac = hmac;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG1hYy1icm93c2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbGliL3V0aWwvaG1hYy1icm93c2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLFNBQWdCLElBQUksQ0FBQyxPQUFlLEVBQUUsR0FBVztJQUMvQyxJQUFNLE9BQU8sR0FBRyxJQUFJLFdBQVcsRUFBRSxDQUFDO0lBRWxDLE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FDcEIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQ3JCLEtBQUssRUFBRSwrQ0FBK0M7SUFDdEQsT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFDbkI7UUFDRSxJQUFJLEVBQUUsTUFBTTtRQUNaLElBQUksRUFBRSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUU7S0FDeEIsRUFDRCxLQUFLLEVBQUUsaUJBQWlCO0lBQ3hCLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUNuQixDQUNGO1NBQ0UsSUFBSSxDQUFDLFVBQUMsU0FBUyxJQUFLLE9BQUEsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLFNBQVMsRUFBRSxPQUFPLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQTlELENBQThELENBQUM7U0FDbkYsSUFBSSxDQUFDLFVBQUMsU0FBUztRQUNkLElBQU0sU0FBUyxHQUFHLElBQUksVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzVDLE9BQU8sU0FBUyxDQUFDLE1BQU0sQ0FBQyxVQUFDLEtBQUssRUFBRSxDQUFDLElBQUssT0FBQSxLQUFLLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUF2QyxDQUF1QyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3JGLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQXBCRCxvQkFvQkMifQ==
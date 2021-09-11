"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.atob = void 0;
// This implementation is based on https://github.com/mathiasbynens/base64/blob/master/src/base64.js
var TABLE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
function atob(input) {
    var str = input.length % 4 === 0 ? input.replace(/==?$/, '') : input;
    var length = str.length;
    var bitCounter = 0;
    var bitStorage = 0;
    var output = '';
    for (var position = 0; position < length; position += 1) {
        var buffer = TABLE.indexOf(str.charAt(position));
        var isModFour = bitCounter % 4;
        bitStorage = isModFour ? (bitStorage * 64) + buffer : buffer;
        bitCounter += 1;
        // Unless this is the first of a group of 4 characters…
        if (!isModFour) {
            // …convert the first 8 bits to a single ASCII character.
            // eslint-disable-next-line no-bitwise
            output += String.fromCharCode(0xFF & (bitStorage >> ((-2 * bitCounter) & 6)));
        }
    }
    return output;
}
exports.atob = atob;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXRvYi1ybi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi91dGlsL2F0b2Itcm4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsb0dBQW9HO0FBQ3BHLElBQU0sS0FBSyxHQUFHLGtFQUFrRSxDQUFDO0FBRWpGLFNBQWdCLElBQUksQ0FBQyxLQUFhO0lBQ2hDLElBQU0sR0FBRyxHQUFHLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUMvRCxJQUFBLE1BQU0sR0FBSyxHQUFHLE9BQVIsQ0FBUztJQUV2QixJQUFJLFVBQVUsR0FBRyxDQUFDLENBQUM7SUFDbkIsSUFBSSxVQUFVLEdBQUcsQ0FBQyxDQUFDO0lBQ25CLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQztJQUNoQixLQUFLLElBQUksUUFBUSxHQUFHLENBQUMsRUFBRSxRQUFRLEdBQUcsTUFBTSxFQUFFLFFBQVEsSUFBSSxDQUFDLEVBQUU7UUFDdkQsSUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDbkQsSUFBTSxTQUFTLEdBQUcsVUFBVSxHQUFHLENBQUMsQ0FBQztRQUNqQyxVQUFVLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztRQUM3RCxVQUFVLElBQUksQ0FBQyxDQUFDO1FBRWhCLHVEQUF1RDtRQUN2RCxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2QseURBQXlEO1lBQ3pELHNDQUFzQztZQUN0QyxNQUFNLElBQUksTUFBTSxDQUFDLFlBQVksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxVQUFVLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUMvRTtLQUNGO0lBRUQsT0FBTyxNQUFNLENBQUM7QUFDaEIsQ0FBQztBQXRCRCxvQkFzQkMifQ==
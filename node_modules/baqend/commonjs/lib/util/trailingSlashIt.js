"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.trailingSlashIt = void 0;
/**
 * Adds a trailing slash to a string if it is missing
 * @param str
 * @return
 * @name trailingSlashIt
 * @memberOf prototype
 * @function
 */
function trailingSlashIt(str) {
    if (str.charAt(str.length - 1) !== '/') {
        return str + "/";
    }
    return str;
}
exports.trailingSlashIt = trailingSlashIt;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhaWxpbmdTbGFzaEl0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbGliL3V0aWwvdHJhaWxpbmdTbGFzaEl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBOzs7Ozs7O0dBT0c7QUFDSCxTQUFnQixlQUFlLENBQUMsR0FBVztJQUN6QyxJQUFJLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsS0FBSyxHQUFHLEVBQUU7UUFDdEMsT0FBVSxHQUFHLE1BQUcsQ0FBQztLQUNsQjtJQUVELE9BQU8sR0FBRyxDQUFDO0FBQ2IsQ0FBQztBQU5ELDBDQU1DIn0=
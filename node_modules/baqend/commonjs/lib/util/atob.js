"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.atob = void 0;
/**
 * Converts Base64-encoded data to string.
 *
 * @param input Base64-encoded data.
 * @return Binary-encoded data string.
 */
function atob(input) {
    return Buffer.from(input, 'base64').toString('binary');
}
exports.atob = atob;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXRvYi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi91dGlsL2F0b2IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUE7Ozs7O0dBS0c7QUFDSCxTQUFnQixJQUFJLENBQUMsS0FBYTtJQUNoQyxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUN6RCxDQUFDO0FBRkQsb0JBRUMifQ==
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.enumerable = void 0;
/**
 * This decorator modifies the enumerable flag of an class member
 * @param value - the enumerable value of the property descriptor
 */
function enumerable(value) {
    return function decorate(target, propertyKey, descriptor) {
        // eslint-disable-next-line no-param-reassign
        descriptor.enumerable = value;
    };
}
exports.enumerable = enumerable;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW51bWVyYWJsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi91dGlsL2VudW1lcmFibGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUE7OztHQUdHO0FBQ0gsU0FBZ0IsVUFBVSxDQUFDLEtBQWM7SUFDdkMsT0FBTyxTQUFTLFFBQVEsQ0FDdEIsTUFBVyxFQUNYLFdBQW1CLEVBQ25CLFVBQThCO1FBRTlCLDZDQUE2QztRQUM3QyxVQUFVLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztJQUNoQyxDQUFDLENBQUM7QUFDSixDQUFDO0FBVEQsZ0NBU0MifQ==
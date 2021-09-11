"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Managed = void 0;
var enumerable_1 = require("../util/enumerable");
var Enhancer_1 = require("./Enhancer");
var intersection_1 = require("../intersection");
var Managed = /** @class */ (function () {
    /**
     * The default constructor, copy all given properties to this object
     * @param properties - The optional properties to copy
     */
    function Managed(properties) {
        Managed.init(this, properties);
    }
    /**
     * Initialize the given instance
     * @param instance The managed instance to initialize
     * @param properties The optional properties to set on the instance
     */
    Managed.init = function (instance, properties) {
        var type = Enhancer_1.Enhancer.getBaqendType(instance.constructor);
        if (type.isEntity) {
            Object.defineProperty(instance, '_metadata', {
                value: intersection_1.Metadata.create(type),
                configurable: true,
            });
        }
        if (properties) {
            Object.assign(instance, properties);
        }
    };
    /**
     * Creates a subclass of this class
     * @param {Class<*>} childClass
     * @return {Class<*>} The extended child class
     */
    Managed.extend = function (childClass) {
        // eslint-disable-next-line no-param-reassign
        childClass.prototype = Object.create(this.prototype, {
            constructor: {
                value: childClass,
                configurable: true,
                writable: true,
            },
        });
        // eslint-disable-next-line no-param-reassign
        childClass.extend = Managed.extend;
        return childClass;
    };
    /**
     * Returns this object identifier or the baqend type of this object
     * @return the object id or type whatever is available
     */
    Managed.prototype.toString = function () {
        var type = Enhancer_1.Enhancer.getBaqendType(this.constructor);
        return type.ref;
    };
    /**
     * Converts the managed object to an JSON-Object.
     * @return JSON-Object
     * @method
     */
    Managed.prototype.toJSON = function () {
        var type = Enhancer_1.Enhancer.getBaqendType(this.constructor);
        return type.toJsonValue(intersection_1.Metadata.create(type), this, { persisting: false });
    };
    __decorate([
        enumerable_1.enumerable(false)
    ], Managed.prototype, "toString", null);
    __decorate([
        enumerable_1.enumerable(false)
    ], Managed.prototype, "toJSON", null);
    return Managed;
}());
exports.Managed = Managed;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWFuYWdlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9iaW5kaW5nL01hbmFnZWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsaURBQWdEO0FBRWhELHVDQUFzQztBQUN0QyxnREFBMkM7QUFlM0M7SUF1Q0U7OztPQUdHO0lBQ0gsaUJBQVksVUFBd0M7UUFDbEQsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDakMsQ0FBQztJQTVDRDs7OztPQUlHO0lBQ0ksWUFBSSxHQUFYLFVBQVksUUFBaUIsRUFBRSxVQUF3QztRQUNyRSxJQUFNLElBQUksR0FBRyxtQkFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFFLENBQUM7UUFDM0QsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLE1BQU0sQ0FBQyxjQUFjLENBQUMsUUFBUSxFQUFFLFdBQVcsRUFBRTtnQkFDM0MsS0FBSyxFQUFFLHVCQUFRLENBQUMsTUFBTSxDQUFDLElBQXVCLENBQUM7Z0JBQy9DLFlBQVksRUFBRSxJQUFJO2FBQ25CLENBQUMsQ0FBQztTQUNKO1FBRUQsSUFBSSxVQUFVLEVBQUU7WUFDZCxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxVQUFVLENBQUMsQ0FBQztTQUNyQztJQUNILENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksY0FBTSxHQUFiLFVBQWMsVUFBaUM7UUFDN0MsNkNBQTZDO1FBQzdDLFVBQVUsQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ25ELFdBQVcsRUFBRTtnQkFDWCxLQUFLLEVBQUUsVUFBVTtnQkFDakIsWUFBWSxFQUFFLElBQUk7Z0JBQ2xCLFFBQVEsRUFBRSxJQUFJO2FBQ2Y7U0FDRixDQUFDLENBQUM7UUFDSCw2Q0FBNkM7UUFDNUMsVUFBa0IsQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQztRQUM1QyxPQUFPLFVBQVUsQ0FBQztJQUNwQixDQUFDO0lBVUQ7OztPQUdHO0lBRUgsMEJBQVEsR0FBUjtRQUNFLElBQU0sSUFBSSxHQUFHLG1CQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUN0RCxPQUFPLElBQUssQ0FBQyxHQUFHLENBQUM7SUFDbkIsQ0FBQztJQUVEOzs7O09BSUc7SUFFSCx3QkFBTSxHQUFOO1FBQ0UsSUFBTSxJQUFJLEdBQUcsbUJBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBRSxDQUFDO1FBQ3ZELE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyx1QkFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztJQUM5RSxDQUFDO0lBZEQ7UUFEQyx1QkFBVSxDQUFDLEtBQUssQ0FBQzsyQ0FJakI7SUFRRDtRQURDLHVCQUFVLENBQUMsS0FBSyxDQUFDO3lDQUlqQjtJQUNILGNBQUM7Q0FBQSxBQW5FRCxJQW1FQztBQW5FWSwwQkFBTyJ9
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Factory = void 0;
var Factory = /** @class */ (function () {
    function Factory() {
        this.type = null;
        this.prototype = null;
    }
    Factory.extend = function (target, proto) {
        if (proto !== Factory.prototype) {
            this.extend(target, Object.getPrototypeOf(proto));
        }
        var properties = Object.getOwnPropertyNames(proto);
        for (var j = 0, len = properties.length; j < len; j += 1) {
            var prop = properties[j];
            Object.defineProperty(target, prop, Object.getOwnPropertyDescriptor(proto, prop));
        }
        return target;
    };
    /**
     * Creates a new Factory for the given type
     * @param type - the type constructor of T
     * @return A new object factory to created instances of T
     */
    Factory.createFactory = function (type) {
        // We want te explicitly name the created factory and give the constructor a properly argument name
        var factory = Factory.extend((function FactoryConstructor() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return factory.newInstance(args);
        }), this.prototype);
        // lets instanceof work properly
        factory.prototype = type.prototype;
        factory.type = type;
        return factory;
    };
    /**
     * Creates a new instance of the factory type
     * @param args Constructor arguments used for instantiation
     * @return A new created instance of *
     * @instance
     */
    Factory.prototype.new = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return this.newInstance(args);
    };
    /**
     * Creates a new instance of the factory type
     * @param args Constructor arguments used for instantiation
     * @return A new created instance of *
     * @instance
     */
    Factory.prototype.newInstance = function (args) {
        if (!args || args.length === 0) {
            // eslint-disable-next-line new-cap
            return new this.type();
        }
        // es6 constructors can't be called, therefore bind all arguments and invoke the constructor
        // then with the bounded parameters
        // The first argument is shift out by invocation with `new`.
        var a = [null];
        Array.prototype.push.apply(a, args);
        var boundConstructor = (Function.prototype.bind.apply(this.type, a));
        // eslint-disable-next-line new-cap
        return new boundConstructor();
    };
    return Factory;
}());
exports.Factory = Factory;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9iaW5kaW5nL0ZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBZ0JBO0lBQUE7UUFpQ1MsU0FBSSxHQUFhLElBQVcsQ0FBQztRQUU3QixjQUFTLEdBQU0sSUFBVyxDQUFDO0lBaUNwQyxDQUFDO0lBbkVnQixjQUFNLEdBQXJCLFVBQWlELE1BQVMsRUFBRSxLQUFRO1FBQ2xFLElBQUksS0FBSyxLQUFLLE9BQU8sQ0FBQyxTQUFTLEVBQUU7WUFDL0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1NBQ25EO1FBRUQsSUFBTSxVQUFVLEdBQUcsTUFBTSxDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxVQUFVLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUN4RCxJQUFNLElBQUksR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDM0IsTUFBTSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQyx3QkFBd0IsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFFLENBQUMsQ0FBQztTQUNwRjtRQUVELE9BQU8sTUFBZSxDQUFDO0lBQ3pCLENBQUM7SUFFRDs7OztPQUlHO0lBQ2MscUJBQWEsR0FBOUIsVUFBd0UsSUFBYztRQUNwRixtR0FBbUc7UUFDbkcsSUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFNBQVMsa0JBQWtCO1lBQUMsY0FBYztpQkFBZCxVQUFjLEVBQWQscUJBQWMsRUFBZCxJQUFjO2dCQUFkLHlCQUFjOztZQUN4RSxPQUFPLE9BQU8sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbkMsQ0FBQyxDQUFhLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRWhDLGdDQUFnQztRQUNoQyxPQUFPLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDbkMsT0FBTyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFFcEIsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQztJQU1EOzs7OztPQUtHO0lBQ0gscUJBQUcsR0FBSDtRQUFJLGNBQWM7YUFBZCxVQUFjLEVBQWQscUJBQWMsRUFBZCxJQUFjO1lBQWQseUJBQWM7O1FBQ2hCLE9BQU8sSUFBSSxDQUFDLFdBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCw2QkFBVyxHQUFYLFVBQVksSUFBeUI7UUFDbkMsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUM5QixtQ0FBbUM7WUFDbkMsT0FBTyxJQUFJLElBQUksQ0FBQyxJQUFLLEVBQUUsQ0FBQztTQUN6QjtRQUVELDRGQUE0RjtRQUM1RixtQ0FBbUM7UUFDbkMsNERBQTREO1FBQzVELElBQU0sQ0FBQyxHQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxJQUFhLENBQUMsQ0FBQztRQUM3QyxJQUFNLGdCQUFnQixHQUFHLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN4RSxtQ0FBbUM7UUFDbkMsT0FBTyxJQUFJLGdCQUFnQixFQUFFLENBQUM7SUFDaEMsQ0FBQztJQUNILGNBQUM7QUFBRCxDQUFDLEFBcEVELElBb0VDO0FBcEVZLDBCQUFPIn0=
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
exports.ManagedFactory = void 0;
var Factory_1 = require("./Factory");
var intersection_1 = require("../intersection");
var ManagedFactory = /** @class */ (function (_super) {
    __extends(ManagedFactory, _super);
    function ManagedFactory() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Methods that are added to object instances
         * This property is an alias for this factory type prototype
         * @name methods
         */
        _this.methods = null;
        /**
         * The managed type of this factory
         */
        _this.managedType = null;
        /**
         * The owning EntityManager where this factory belongs to
         */
        _this.db = null;
        return _this;
    }
    /**
     * Creates a new ManagedFactory for the given type
     * @param managedType The metadata of type T
     * @param db The entity manager instance
     */
    ManagedFactory.create = function (managedType, db) {
        var factory = this.createFactory(managedType.typeConstructor);
        factory.methods = factory.prototype;
        factory.managedType = managedType;
        factory.db = db;
        return factory;
    };
    /**
     * Creates a new instance and sets the Managed Object to the given json
     * @param json
     * @return A new created instance of T
     */
    ManagedFactory.prototype.fromJSON = function (json) {
        var instance = this.newInstance();
        return this.managedType.fromJsonValue(intersection_1.Metadata.create(this.managedType, this.db), json, instance, {
            persisting: false,
        });
    };
    /**
     * Adds methods to instances of this factories type
     * @param methods The methods to add
     * @return
     */
    ManagedFactory.prototype.addMethods = function (methods) {
        Object.assign(this.methods, methods);
    };
    /**
     * Add a method to instances of this factories type
     * @param name The method name to add
     * @param fn The Method to add
     * @return
     */
    ManagedFactory.prototype.addMethod = function (name, fn) {
        this.methods[name] = fn;
    };
    return ManagedFactory;
}(Factory_1.Factory));
exports.ManagedFactory = ManagedFactory;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWFuYWdlZEZhY3RvcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9saWIvYmluZGluZy9NYW5hZ2VkRmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxQ0FBb0M7QUFLcEMsZ0RBQTJDO0FBRTNDO0lBQXVELGtDQUFVO0lBQWpFO1FBQUEscUVBK0RDO1FBL0NDOzs7O1dBSUc7UUFDSSxhQUFPLEdBQWtDLElBQVcsQ0FBQztRQUU1RDs7V0FFRztRQUNJLGlCQUFXLEdBQW1CLElBQVcsQ0FBQztRQUVqRDs7V0FFRztRQUNJLFFBQUUsR0FBa0IsSUFBVyxDQUFDOztJQWdDekMsQ0FBQztJQTlEQzs7OztPQUlHO0lBQ1cscUJBQU0sR0FBcEIsVUFBd0MsV0FBMkIsRUFBRSxFQUFpQjtRQUNwRixJQUFNLE9BQU8sR0FBc0IsSUFBSSxDQUFDLGFBQWEsQ0FBdUIsV0FBVyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBRXpHLE9BQU8sQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQztRQUNwQyxPQUFPLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztRQUNsQyxPQUFPLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUVoQixPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDO0lBbUJEOzs7O09BSUc7SUFDSCxpQ0FBUSxHQUFSLFVBQVMsSUFBVTtRQUNqQixJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDcEMsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyx1QkFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFO1lBQ2hHLFVBQVUsRUFBRSxLQUFLO1NBQ2xCLENBQUUsQ0FBQztJQUNOLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsbUNBQVUsR0FBVixVQUFXLE9BQXFDO1FBQzlDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCxrQ0FBUyxHQUFULFVBQVUsSUFBWSxFQUFFLEVBQVk7UUFDbEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUNILHFCQUFDO0FBQUQsQ0FBQyxBQS9ERCxDQUF1RCxpQkFBTyxHQStEN0Q7QUEvRFksd0NBQWMifQ==
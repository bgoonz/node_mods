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
exports.EntityFactory = void 0;
var ManagedFactory_1 = require("./ManagedFactory");
var intersection_1 = require("../intersection");
var EntityFactory = /** @class */ (function (_super) {
    __extends(EntityFactory, _super);
    function EntityFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Creates a new instance of the factory type
     *
     * @param args Constructor arguments used for instantiation, the constructor will not be called
     * when no arguments are passed
     * @return A new created instance of T
     */
    EntityFactory.prototype.newInstance = function (args) {
        var instance = _super.prototype.newInstance.call(this, args);
        intersection_1.Metadata.get(instance).db = this.db;
        return instance;
    };
    /**
     * Loads the instance for the given id, or null if the id does not exists.
     * @param id The id to query
     * @param [options] The load options
     * @param [options.depth=0] The object depth which will be loaded. Depth 0 loads only this object,
     * <code>true</code> loads the objects by reachability.
     * @param [options.refresh=false] Indicates whether the object should be revalidated (cache bypass).
     * @param [options.local=false] Indicates whether the local copy (from the entity manager)
     * of an object should be returned if it exists. This value might be stale.
     * @param doneCallback Called when the operation succeed.
     * @param failCallback Called when the operation failed.
     * @return A Promise that will be fulfilled when the asynchronous operation completes.
     */
    EntityFactory.prototype.load = function (id, options, doneCallback, failCallback) {
        if (typeof options === 'function') {
            return this.load(id, {}, options, doneCallback);
        }
        return this.db.load(this.managedType.typeConstructor, id, options).then(doneCallback, failCallback);
    };
    /**
     * Gets an unloaded reference for the given id.
     * @param id The id of an object to get a reference for.
     * @return An unloaded reference to the object with the given id.
     */
    EntityFactory.prototype.ref = function (id) {
        return this.db.getReference(this.managedType.ref, id);
    };
    /**
     * Creates a new instance and sets the DatabaseObject to the given json
     * @param json
     * @return instance
     */
    EntityFactory.prototype.fromJSON = function (json) {
        var obj = this.db.getReference(this.managedType.ref, json.id);
        return this.managedType.fromJsonValue(intersection_1.Metadata.get(obj), json, obj, { persisting: false });
    };
    /**
     * Creates a new query for this class
     * @return The query builder
     */
    EntityFactory.prototype.find = function () {
        return this.db.createQueryBuilder(this.managedType.typeConstructor);
    };
    /**
     * Creates a new partial update for this class
     * @param id The id to partial update
     * @param [partialUpdate] An initial partial update to execute
     * @return A partial update builder for the given entity id
     */
    EntityFactory.prototype.partialUpdate = function (id, partialUpdate) {
        return this.ref(id).partialUpdate(partialUpdate);
    };
    return EntityFactory;
}(ManagedFactory_1.ManagedFactory));
exports.EntityFactory = EntityFactory;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRW50aXR5RmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9iaW5kaW5nL0VudGl0eUZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbURBQWtEO0FBS2xELGdEQUEyQztBQUUzQztJQUFxRCxpQ0FBaUI7SUFBdEU7O0lBd0VBLENBQUM7SUF2RUM7Ozs7OztPQU1HO0lBQ0gsbUNBQVcsR0FBWCxVQUFZLElBQXlCO1FBQ25DLElBQU0sUUFBUSxHQUFHLGlCQUFNLFdBQVcsWUFBQyxJQUFJLENBQUMsQ0FBQztRQUN6Qyx1QkFBUSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQztRQUNwQyxPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDO0lBRUQ7Ozs7Ozs7Ozs7OztPQVlHO0lBQ0gsNEJBQUksR0FBSixVQUFLLEVBQVUsRUFBRSxPQUEyRSxFQUFFLFlBQWtCLEVBQzlHLFlBQWtCO1FBQ2xCLElBQUksT0FBTyxPQUFPLEtBQUssVUFBVSxFQUFFO1lBQ2pDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxZQUFZLENBQUMsQ0FBQztTQUNqRDtRQUVELE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxlQUFlLEVBQUUsRUFBRSxFQUFFLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsWUFBWSxDQUFDLENBQUM7SUFDdEcsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCwyQkFBRyxHQUFILFVBQUksRUFBVTtRQUNaLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxnQ0FBUSxHQUFSLFVBQVMsSUFBVTtRQUNqQixJQUFNLEdBQUcsR0FBTSxJQUFJLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBRyxJQUFnQixDQUFDLEVBQVksQ0FBQyxDQUFDO1FBQzFGLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsdUJBQVEsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsQ0FBRSxDQUFDO0lBQzlGLENBQUM7SUFFRDs7O09BR0c7SUFDSCw0QkFBSSxHQUFKO1FBQ0UsT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDdEUsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gscUNBQWEsR0FBYixVQUFjLEVBQVUsRUFBRSxhQUFvQjtRQUM1QyxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFDSCxvQkFBQztBQUFELENBQUMsQUF4RUQsQ0FBcUQsK0JBQWMsR0F3RWxFO0FBeEVZLHNDQUFhIn0=
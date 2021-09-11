"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.flatArgs = exports.Query = void 0;
/**
 * An abstract Query which allows retrieving results
 */
var Query = /** @class */ (function () {
    /**
     * @param entityManager - The owning EntityManager of this query
     * @param resultClass - The result class of this query
     */
    function Query(entityManager, resultClass) {
        this.entityManager = entityManager;
        this.resultClass = resultClass;
    }
    /**
     * Add an ascending sort for the specified field to this query
     * @param field The field to sort
     * @return The resulting Query
     */
    Query.prototype.ascending = function (field) {
        return this.addOrder(field, 1);
    };
    /**
     * Add an decending sort for the specified field to this query
     * @param field The field to sort
     * @return The resulting Query
     */
    Query.prototype.descending = function (field) {
        return this.addOrder(field, -1);
    };
    /**
     * Sets the sort of the query and discard all existing paramaters
     * @param sort The new sort of the query which is an object whose keys are fields and the
     * values are either +1 for ascending order or -1 for descending order
     * @return The resulting Query
     *
     * @see http://docs.mongodb.org/manual/reference/method/cursor.sort/
     */
    Query.prototype.sort = function (sort) {
        if (typeof sort !== 'object' || Object.getPrototypeOf(sort) !== Object.prototype) {
            throw new Error('sort must be an object.');
        }
        return this.addOrder(sort);
    };
    /**
     * Sets the offset of the query, i.e. how many elements should be skipped
     * @param offset The offset of this query
     * @return The resulting Query
     *
     * @see http://docs.mongodb.org/manual/reference/method/cursor.skip/
     */
    Query.prototype.offset = function (offset) {
        if (offset < 0) {
            throw new Error('The offset can\'t be nagative.');
        }
        return this.addOffset(offset);
    };
    /**
     * Sets the limit of this query, i.e hox many objects should be returnd
     * @param limit The limit of this query
     * @return The resulting Query
     *
     * @see http://docs.mongodb.org/manual/reference/method/cursor.limit/
     */
    Query.prototype.limit = function (limit) {
        if (limit < 0) {
            throw new Error('The limit can\'t be nagative.');
        }
        return this.addLimit(limit);
    };
    Query.MAX_URI_SIZE = 2000;
    return Query;
}());
exports.Query = Query;
function flatArgs(args) {
    return Array.prototype.concat.apply([], args);
}
exports.flatArgs = flatArgs;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUXVlcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9saWIvcXVlcnkvUXVlcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBUUE7O0dBRUc7QUFDSDtJQUdFOzs7T0FHRztJQUNILGVBQ2tCLGFBQTRCLEVBQzVCLFdBQXFCO1FBRHJCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLGdCQUFXLEdBQVgsV0FBVyxDQUFVO0lBQ3BDLENBQUM7SUFFSjs7OztPQUlHO0lBQ0gseUJBQVMsR0FBVCxVQUFVLEtBQWE7UUFDckIsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILDBCQUFVLEdBQVYsVUFBVyxLQUFhO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRUQ7Ozs7Ozs7T0FPRztJQUNILG9CQUFJLEdBQUosVUFBSyxJQUFpQztRQUNwQyxJQUFJLE9BQU8sSUFBSSxLQUFLLFFBQVEsSUFBSSxNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLE1BQU0sQ0FBQyxTQUFTLEVBQUU7WUFDaEYsTUFBTSxJQUFJLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1NBQzVDO1FBRUQsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSCxzQkFBTSxHQUFOLFVBQU8sTUFBYztRQUNuQixJQUFJLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDZCxNQUFNLElBQUksS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7U0FDbkQ7UUFFRCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNILHFCQUFLLEdBQUwsVUFBTSxLQUFhO1FBQ2pCLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRTtZQUNiLE1BQU0sSUFBSSxLQUFLLENBQUMsK0JBQStCLENBQUMsQ0FBQztTQUNsRDtRQUVELE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBekVzQixrQkFBWSxHQUFHLElBQUksQ0FBQztJQXlRN0MsWUFBQztDQUFBLEFBMVFELElBMFFDO0FBMVFxQixzQkFBSztBQTRRM0IsU0FBZ0IsUUFBUSxDQUFDLElBQVc7SUFDbEMsT0FBTyxLQUFLLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ2hELENBQUM7QUFGRCw0QkFFQyJ9
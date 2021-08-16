"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbIndex = void 0;
/**
 * Creates a new index instance which is needed to create an
 * database index.
 */
var DbIndex = /** @class */ (function () {
    /**
     * @param keys The name of the field which will be used
     * for the index,
     * an object of an field and index type combination or
     * an array of objects to create an compound index
     * @param unique Indicates if the index will be unique
     */
    function DbIndex(keys, unique) {
        if (typeof keys === 'string') {
            var key = {};
            key[keys] = DbIndex.ASC;
            this.keys = [key];
        }
        else if (Array.isArray(keys)) {
            this.keys = keys;
        }
        else if (keys) {
            this.keys = [keys];
        }
        else {
            throw new Error('The keys parameter must be an String, Object or Array.');
        }
        this.unique = unique === true;
    }
    /**
     * Returns DbIndex Object created from the given JSON
     * @param json
     * @return
     */
    DbIndex.fromJSON = function (json) {
        return new DbIndex(json.keys, json.unique);
    };
    /**
     * Indicates if this index is for the given field or includes it in a compound index
     * @param name The name of the field to check for
     * @return <code>true</code> if the index contains this field
     */
    DbIndex.prototype.hasKey = function (name) {
        for (var i = 0; i < this.keys.length; i += 1) {
            if (this.keys[i][name]) {
                return true;
            }
        }
        return false;
    };
    Object.defineProperty(DbIndex.prototype, "isCompound", {
        /**
         * Indicates if this index is a compound index of multiple attributes
         * @type boolean
         * @readonly
         */
        get: function () {
            return this.keys.length > 1;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DbIndex.prototype, "isUnique", {
        /**
         * Indicates if this index is an unique index
         * @type boolean
         * @readonly
         */
        get: function () {
            return this.unique;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Returns a JSON representation of the Index object
     *
     * @return A Json of this Index object
     */
    DbIndex.prototype.toJSON = function () {
        return {
            unique: this.unique,
            keys: this.keys,
        };
    };
    DbIndex.ASC = 'asc';
    DbIndex.DESC = 'desc';
    return DbIndex;
}());
exports.DbIndex = DbIndex;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGJJbmRleC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9tZXRhbW9kZWwvRGJJbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFJQTs7O0dBR0c7QUFDSDtJQXVCRTs7Ozs7O09BTUc7SUFDSCxpQkFBWSxJQUFxRCxFQUFFLE1BQWdCO1FBQ2pGLElBQUksT0FBTyxJQUFJLEtBQUssUUFBUSxFQUFFO1lBQzVCLElBQU0sR0FBRyxHQUE0QixFQUFFLENBQUM7WUFDeEMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUM7WUFDeEIsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ25CO2FBQU0sSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQzlCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1NBQ2xCO2FBQU0sSUFBSSxJQUFJLEVBQUU7WUFDZixJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDcEI7YUFBTTtZQUNMLE1BQU0sSUFBSSxLQUFLLENBQUMsd0RBQXdELENBQUMsQ0FBQztTQUMzRTtRQUVELElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxLQUFLLElBQUksQ0FBQztJQUNoQyxDQUFDO0lBOUJEOzs7O09BSUc7SUFDVyxnQkFBUSxHQUF0QixVQUF1QixJQUFhO1FBQ2xDLE9BQU8sSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLElBQWlCLEVBQUUsSUFBSSxDQUFDLE1BQWlCLENBQUMsQ0FBQztJQUNyRSxDQUFDO0lBeUJEOzs7O09BSUc7SUFDSCx3QkFBTSxHQUFOLFVBQU8sSUFBWTtRQUNqQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUM1QyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ3RCLE9BQU8sSUFBSSxDQUFDO2FBQ2I7U0FDRjtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQU9ELHNCQUFJLCtCQUFVO1FBTGQ7Ozs7V0FJRzthQUNIO1lBQ0UsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDOUIsQ0FBQzs7O09BQUE7SUFPRCxzQkFBSSw2QkFBUTtRQUxaOzs7O1dBSUc7YUFDSDtZQUNFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNyQixDQUFDOzs7T0FBQTtJQUVEOzs7O09BSUc7SUFDSCx3QkFBTSxHQUFOO1FBQ0UsT0FBTztZQUNMLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtZQUNuQixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7U0FDaEIsQ0FBQztJQUNKLENBQUM7SUF2RnNCLFdBQUcsR0FBRyxLQUFLLENBQUM7SUFFWixZQUFJLEdBQUcsTUFBTSxDQUFDO0lBc0Z2QyxjQUFDO0NBQUEsQUF6RkQsSUF5RkM7QUF6RlksMEJBQU8ifQ==
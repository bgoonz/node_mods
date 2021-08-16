"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PartialUpdateBuilder = void 0;
var UpdateOperation_1 = require("./UpdateOperation");
var ALLOWED_OPERATIONS = [
    '$add',
    '$and',
    '$currentDate',
    '$dec',
    '$inc',
    '$max',
    '$min',
    '$mul',
    '$or',
    '$pop',
    '$push',
    '$put',
    '$remove',
    '$rename',
    '$replace',
    '$set',
    '$shift',
    '$unshift',
    '$xor',
];
var PartialUpdateBuilder = /** @class */ (function () {
    /**
     * @param operations
     */
    function PartialUpdateBuilder(operations) {
        this.operations = [];
        if (operations) {
            this.addOperations(operations);
        }
    }
    /**
     * Sets a field to a given value
     *
     * @param field The field to set
     * @param value The value to set to
     * @return
     */
    PartialUpdateBuilder.prototype.set = function (field, value) {
        var val = value;
        if (val instanceof Set) {
            val = Array.from(val);
        }
        else if (val instanceof Map) {
            var newValue_1 = {};
            val.forEach(function (v, k) {
                newValue_1[k] = v;
            });
            val = newValue_1;
        }
        return this.addOperation(field, '$set', val);
    };
    /**
     * Increments a field by a given value
     *
     * @param field The field to increment
     * @param by The number to increment by, defaults to 1
     * @return
     */
    PartialUpdateBuilder.prototype.inc = function (field, by) {
        return this.addOperation(field, '$inc', typeof by === 'number' ? by : 1);
    };
    /**
     * Decrements a field by a given value
     *
     * @param field The field to decrement
     * @param by The number to decrement by, defaults to 1
     * @return
     */
    PartialUpdateBuilder.prototype.dec = function (field, by) {
        return this.inc(field, typeof by === 'number' ? -by : -1);
    };
    /**
     * Multiplies a field by a given number
     *
     * @param field The field to multiply
     * @param multiplicator The number to multiply by
     * @return
     */
    PartialUpdateBuilder.prototype.mul = function (field, multiplicator) {
        if (typeof multiplicator !== 'number') {
            throw new Error('Multiplicator must be a number.');
        }
        return this.addOperation(field, '$mul', multiplicator);
    };
    /**
     * Divides a field by a given number
     *
     * @param field The field to divide
     * @param divisor The number to divide by
     * @return
     */
    PartialUpdateBuilder.prototype.div = function (field, divisor) {
        if (typeof divisor !== 'number') {
            throw new Error('Divisor must be a number.');
        }
        return this.addOperation(field, '$mul', 1 / divisor);
    };
    /**
     * Sets the highest possible value of a field
     *
     * @param field The field to compare with
     * @param value The highest possible value
     * @return
     */
    PartialUpdateBuilder.prototype.min = function (field, value) {
        if (typeof value !== 'number') {
            throw new Error('Value must be a number');
        }
        return this.addOperation(field, '$min', value);
    };
    /**
     * Sets the smallest possible value of a field
     *
     * @param field The field to compare with
     * @param value The smalles possible value
     * @return
     */
    PartialUpdateBuilder.prototype.max = function (field, value) {
        if (typeof value !== 'number') {
            throw new Error('Value must be a number');
        }
        return this.addOperation(field, '$max', value);
    };
    /**
     * Removes an item from an array or map
     *
     * @param field The field to perform the operation on
     * @param item The item to add
     * @return
     */
    PartialUpdateBuilder.prototype.remove = function (field, item) {
        return this.addOperation(field, '$remove', item);
    };
    /**
     * Puts an item from an array or map
     *
     * @param field The field to perform the operation on
     * @param key The map key to put the value to or an object of arguments
     * @param [value] The value to put if a key was used
     * @return
     */
    PartialUpdateBuilder.prototype.put = function (field, key, value) {
        var obj = {};
        if (typeof key === 'string' || typeof key === 'number') {
            obj[key] = value;
        }
        else if (typeof key === 'object') {
            Object.assign(obj, key);
        }
        return this.addOperation(field, '$put', obj);
    };
    /**
     * Pushes an item into a list
     *
     * @param field The field to perform the operation on
     * @param item The item to add
     * @return
     */
    PartialUpdateBuilder.prototype.push = function (field, item) {
        return this.addOperation(field, '$push', item);
    };
    /**
     * Unshifts an item into a list
     *
     * @param field The field to perform the operation on
     * @param item The item to add
     * @return
     */
    PartialUpdateBuilder.prototype.unshift = function (field, item) {
        return this.addOperation(field, '$unshift', item);
    };
    /**
     * Pops the last item out of a list
     *
     * @param field The field to perform the operation on
     * @return
     */
    PartialUpdateBuilder.prototype.pop = function (field) {
        return this.addOperation(field, '$pop');
    };
    /**
     * Shifts the first item out of a list
     *
     * @param field The field to perform the operation on
     * @return
     */
    PartialUpdateBuilder.prototype.shift = function (field) {
        return this.addOperation(field, '$shift');
    };
    /**
     * Adds an item to a set
     *
     * @param field The field to perform the operation on
     * @param item The item to add
     * @return
     */
    PartialUpdateBuilder.prototype.add = function (field, item) {
        return this.addOperation(field, '$add', item);
    };
    /**
     * Replaces an item at a given index
     *
     * @param path The path to perform the operation on
     * @param index The index where the item will be replaced
     * @param item The item to replace with
     * @return
     */
    PartialUpdateBuilder.prototype.replace = function (path, index, item) {
        if (this.hasOperationOnPath(path)) {
            throw new Error("You cannot update " + path + " multiple times");
        }
        return this.addOperation(path + "." + index, '$replace', item);
    };
    /**
     * Sets a datetime field to the current moment
     *
     * @param field The field to perform the operation on
     * @return
     */
    PartialUpdateBuilder.prototype.currentDate = function (field) {
        return this.addOperation(field, '$currentDate');
    };
    /**
     * Performs a bitwise AND on a path
     *
     * @param path The path to perform the operation on
     * @param bitmask The bitmask taking part in the operation
     * @return
     */
    PartialUpdateBuilder.prototype.and = function (path, bitmask) {
        return this.addOperation(path, '$and', bitmask);
    };
    /**
     * Performs a bitwise OR on a path
     *
     * @param path The path to perform the operation on
     * @param bitmask The bitmask taking part in the operation
     * @return
     */
    PartialUpdateBuilder.prototype.or = function (path, bitmask) {
        return this.addOperation(path, '$or', bitmask);
    };
    /**
     * Performs a bitwise XOR on a path
     *
     * @param path The path to perform the operation on
     * @param bitmask The bitmask taking part in the operation
     * @return
     */
    PartialUpdateBuilder.prototype.xor = function (path, bitmask) {
        return this.addOperation(path, '$xor', bitmask);
    };
    /**
     * Renames a field
     *
     * @param oldPath The old field name
     * @param newPath The new field name
     * @return
     */
    PartialUpdateBuilder.prototype.rename = function (oldPath, newPath) {
        return this.addOperation(oldPath, '$rename', newPath);
    };
    /**
     * Returns a JSON representation of this partial update
     *
     * @return
     */
    PartialUpdateBuilder.prototype.toJSON = function () {
        return this.operations.reduce(function (json, operation) {
            var _a, _b;
            return (__assign(__assign({}, json), (_a = {}, _a[operation.name] = __assign(__assign({}, json[operation.name]), (_b = {}, _b[operation.path] = operation.value, _b)), _a)));
        }, {});
    };
    /**
     * Executes the partial update
     *
     * @return The promise resolves when the partial update has been executed successfully
     * @abstract
     */
    PartialUpdateBuilder.prototype.execute = function () {
        throw new Error('Cannot call "execute" on abstract PartialUpdateBuilder');
    };
    /**
     * Adds an update operation on the partial update
     *
     * @param path The path which gets modified by the operation
     * @param operator The operator of the operation to add
     * @param [value] The value used to execute the operation
     * @return
     * @private
     */
    PartialUpdateBuilder.prototype.addOperation = function (path, operator, value) {
        if (typeof path !== 'string') {
            throw new Error('Path must be a string');
        }
        if (ALLOWED_OPERATIONS.indexOf(operator) === -1) {
            throw new Error("Operation invalid: " + operator);
        }
        if (this.hasOperationOnPath(path)) {
            throw new Error("You cannot update " + path + " multiple times");
        }
        // Check for illegal values
        if (typeof value === 'number') {
            if (Number.isNaN(value)) {
                throw new Error('NaN is not a supported value');
            }
            if (!Number.isFinite(value)) {
                throw new Error('Infinity is not a supported value');
            }
        }
        // Add the new operation
        var normalizedValue = typeof value === 'undefined' ? null : value;
        var updateOperation = new UpdateOperation_1.UpdateOperation(operator, path, normalizedValue);
        this.operations.push(updateOperation);
        return this;
    };
    /**
     * Adds initial operations
     *
     * @param json
     * @private
     */
    PartialUpdateBuilder.prototype.addOperations = function (json) {
        var _this = this;
        Object.keys(json).forEach(function (key) {
            var pathValueDictionary = json[key];
            Object.keys(pathValueDictionary).forEach(function (path) {
                var value = pathValueDictionary[path];
                _this.operations.push(new UpdateOperation_1.UpdateOperation(key, path, value));
            });
        });
    };
    /**
     * Checks whether an operation on the field exists already
     *
     * @param path The path where the operation is executed on
     * @return True, if the operation does exist
     * @private
     */
    PartialUpdateBuilder.prototype.hasOperationOnPath = function (path) {
        return this.operations.some(function (op) { return op.path === path; });
    };
    return PartialUpdateBuilder;
}());
exports.PartialUpdateBuilder = PartialUpdateBuilder;
// aliases
Object.assign(PartialUpdateBuilder.prototype, {
    increment: PartialUpdateBuilder.prototype.inc,
    decrement: PartialUpdateBuilder.prototype.dec,
    multiply: PartialUpdateBuilder.prototype.mul,
    divide: PartialUpdateBuilder.prototype.div,
    atMost: PartialUpdateBuilder.prototype.min,
    atLeast: PartialUpdateBuilder.prototype.max,
    toNow: PartialUpdateBuilder.prototype.currentDate,
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGFydGlhbFVwZGF0ZUJ1aWxkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9saWIvcGFydGlhbHVwZGF0ZS9QYXJ0aWFsVXBkYXRlQnVpbGRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLHFEQUFvRDtBQUlwRCxJQUFNLGtCQUFrQixHQUFHO0lBQ3pCLE1BQU07SUFDTixNQUFNO0lBQ04sY0FBYztJQUNkLE1BQU07SUFDTixNQUFNO0lBQ04sTUFBTTtJQUNOLE1BQU07SUFDTixNQUFNO0lBQ04sS0FBSztJQUNMLE1BQU07SUFDTixPQUFPO0lBQ1AsTUFBTTtJQUNOLFNBQVM7SUFDVCxTQUFTO0lBQ1QsVUFBVTtJQUNWLE1BQU07SUFDTixRQUFRO0lBQ1IsVUFBVTtJQUNWLE1BQU07Q0FDUCxDQUFDO0FBb0VGO0lBR0U7O09BRUc7SUFDSCw4QkFBWSxVQUFtQjtRQUx4QixlQUFVLEdBQXNCLEVBQUUsQ0FBQztRQU14QyxJQUFJLFVBQVUsRUFBRTtZQUNkLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDaEM7SUFDSCxDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0gsa0NBQUcsR0FBSCxVQUFJLEtBQWEsRUFBRSxLQUFVO1FBQzNCLElBQUksR0FBRyxHQUFHLEtBQUssQ0FBQztRQUNoQixJQUFJLEdBQUcsWUFBWSxHQUFHLEVBQUU7WUFDdEIsR0FBRyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDdkI7YUFBTSxJQUFJLEdBQUcsWUFBWSxHQUFHLEVBQUU7WUFDN0IsSUFBTSxVQUFRLEdBQTJCLEVBQUUsQ0FBQztZQUM1QyxHQUFHLENBQUMsT0FBTyxDQUFDLFVBQUMsQ0FBTSxFQUFFLENBQVM7Z0JBQzVCLFVBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDbEIsQ0FBQyxDQUFDLENBQUM7WUFDSCxHQUFHLEdBQUcsVUFBUSxD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
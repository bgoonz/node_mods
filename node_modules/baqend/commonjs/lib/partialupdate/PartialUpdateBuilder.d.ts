import { UpdateOperation } from './UpdateOperation';
import { Json, JsonMap } from '../util';
import { Entity } from '../binding';
export interface PartialUpdateBuilder<T extends Entity> {
    /**
     * Increments a field by a given value
     *
     * @param field The field to increment
     * @param by The number to increment by, defaults to 1
     * @return
     */
    increment(field: string, by?: number): this;
    /**
     * Decrements a field by a given value
     *
     * @param field The field to decrement
     * @param by The number to decrement by, defaults to 1
     * @return
     */
    decrement(field: string, by?: number): this;
    /**
     * Multiplies a field by a given number
     *
     * @param field The field to multiply
     * @param multiplicator The number to multiply by
     * @return
     */
    multiply(field: string, multiplicator: number): this;
    /**
     * Divides a field by a given number
     *
     * @param field The field to divide
     * @param divisor The number to divide by
     * @return
     */
    divide(field: string, divisor: number): this;
    /**
     * Sets the highest possible value of a field
     *
     * @param field The field to compare with
     * @param value The highest possible value
     * @return
     */
    atMost(field: string, value: number): this;
    /**
     * Sets the smallest possible value of a field
     *
     * @param field The field to compare with
     * @param value The smalles possible value
     * @return
     */
    atLeast(field: string, value: number): this;
    /**
     * Sets a datetime field to the current moment
     *
     * @method
     * @param field The field to perform the operation on
     * @return
     */
    toNow(field: string): this;
}
export declare class PartialUpdateBuilder<T extends Entity> {
    operations: UpdateOperation[];
    /**
     * @param operations
     */
    constructor(operations: JsonMap);
    /**
     * Sets a field to a given value
     *
     * @param field The field to set
     * @param value The value to set to
     * @return
     */
    set(field: string, value: any): this;
    /**
     * Increments a field by a given value
     *
     * @param field The field to increment
     * @param by The number to increment by, defaults to 1
     * @return
     */
    inc(field: string, by?: number): this;
    /**
     * Decrements a field by a given value
     *
     * @param field The field to decrement
     * @param by The number to decrement by, defaults to 1
     * @return
     */
    dec(field: string, by?: number): this;
    /**
     * Multiplies a field by a given number
     *
     * @param field The field to multiply
     * @param multiplicator The number to multiply by
     * @return
     */
    mul(field: string, multiplicator: number): this;
    /**
     * Divides a field by a given number
     *
     * @param field The field to divide
     * @param divisor The number to divide by
     * @return
     */
    div(field: string, divisor: number): this;
    /**
     * Sets the highest possible value of a field
     *
     * @param field The field to compare with
     * @param value The highest possible value
     * @return
     */
    min(field: string, value: number): this;
    /**
     * Sets the smallest possible value of a field
     *
     * @param field The field to compare with
     * @param value The smalles possible value
     * @return
     */
    max(field: string, value: number): this;
    /**
     * Removes an item from an array or map
     *
     * @param field The field to perform the operation on
     * @param item The item to add
     * @return
     */
    remove(field: string, item: any): this;
    /**
     * Puts an item from an array or map
     *
     * @param field The field to perform the operation on
     * @param key The map key to put the value to or an object of arguments
     * @param [value] The value to put if a key was used
     * @return
     */
    put(field: string, key: string | number | {
        [key: string]: any;
    }, value?: any): this;
    /**
     * Pushes an item into a list
     *
     * @param field The field to perform the operation on
     * @param item The item to add
     * @return
     */
    push(field: string, item: any): this;
    /**
     * Unshifts an item into a list
     *
     * @param field The field to perform the operation on
     * @param item The item to add
     * @return
     */
    unshift(field: string, item: any): this;
    /**
     * Pops the last item out of a list
     *
     * @param field The field to perform the operation on
     * @return
     */
    pop(field: string): this;
    /**
     * Shifts the first item out of a list
     *
     * @param field The field to perform the operation on
     * @return
     */
    shift(field: string): this;
    /**
     * Adds an item to a set
     *
     * @param field The field to perform the operation on
     * @param item The item to add
     * @return
     */
    add(field: string, item: any): this;
    /**
     * Replaces an item at a given index
     *
     * @param path The path to perform the operation on
     * @param index The index where the item will be replaced
     * @param item The item to replace with
     * @return
     */
    replace(path: string, index: number, item: any): this;
    /**
     * Sets a datetime field to the current moment
     *
     * @param field The field to perform the operation on
     * @return
     */
    currentDate(field: string): this;
    /**
     * Performs a bitwise AND on a path
     *
     * @param path The path to perform the operation on
     * @param bitmask The bitmask taking part in the operation
     * @return
     */
    and(path: string, bitmask: number): this;
    /**
     * Performs a bitwise OR on a path
     *
     * @param path The path to perform the operation on
     * @param bitmask The bitmask taking part in the operation
     * @return
     */
    or(path: string, bitmask: number): this;
    /**
     * Performs a bitwise XOR on a path
     *
     * @param path The path to perform the operation on
     * @param bitmask The bitmask taking part in the operation
     * @return
     */
    xor(path: string, bitmask: number): this;
    /**
     * Renames a field
     *
     * @param oldPath The old field name
     * @param newPath The new field name
     * @return
     */
    rename(oldPath: string, newPath: string): this;
    /**
     * Returns a JSON representation of this partial update
     *
     * @return
     */
    toJSON(): Json;
    /**
     * Executes the partial update
     *
     * @return The promise resolves when the partial update has been executed successfully
     * @abstract
     */
    execute(): Promise<T>;
    /**
     * Adds an update operation on the partial update
     *
     * @param path The path which gets modified by the operation
     * @param operator The operator of the operation to add
     * @param [value] The value used to execute the operation
     * @return
     * @private
     */
    addOperation(path: string, operator: string, value?: any): this;
    /**
     * Adds initial operations
     *
     * @param json
     * @private
     */
    addOperations(json: JsonMap): void;
    /**
     * Checks whether an operation on the field exists already
     *
     * @param path The path where the operation is executed on
     * @return True, if the operation does exist
     * @private
     */
    hasOperationOnPath(path: string): boolean;
}

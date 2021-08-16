"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Validator = void 0;
var FallBachValLib = {};
var valLib = FallBachValLib;
try {
    // we load this module as an optional external dependency
    // eslint-disable-next-line global-require
    valLib = require('validator');
}
catch (e) {
    // ignore loading optional module error
}
var Validator = /** @class */ (function () {
    function Validator(key, entity) {
        /**
         * The cached errors of the validation
         */
        this.errors = [];
        this.key = key;
        this.entity = entity;
    }
    /**
     * Compiles the given validation code for the managedType
     * @param managedType The managedType of the code
     * @param validationCode The validation code
     * @return the parsed validation function
     */
    Validator.compile = function (managedType, validationCode) {
        var keys = [];
        var iter = managedType.attributes();
        for (var el = iter.next(); !el.done; el = iter.next()) {
            var attr = el.value;
            keys.push(attr.name);
        }
        // eslint-disable-next-line @typescript-eslint/no-implied-eval,no-new-func
        var fn = new (Function.bind.apply(Function, __spreadArray(__spreadArray([void 0], keys), [validationCode])))();
        return function onValidate(argObj) {
            if (valLib === FallBachValLib) {
                throw new Error('Validation code will not be executed. Make sure that the validator package is correctly provided as an external dependency.');
            }
            var args = keys.map(function (name) { return argObj[name]; });
            return fn.apply({}, args);
        };
    };
    Object.defineProperty(Validator.prototype, "value", {
        /**
         * Gets the value of the attribute
         * @return Value
         */
        get: function () {
            return this.entity[this.key];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Validator.prototype, "isValid", {
        /**
         * Checks if the attribute is valid
         * @return
         */
        get: function () {
            return this.errors.length === 0;
        },
        enumerable: false,
        configurable: true
    });
    Validator.prototype.is = function (error, fn) {
        if (error instanceof Function) {
            return this.is('is', error);
        }
        if (fn(this.value, valLib) === false) {
            this.errors.push(error);
        }
        return this;
    };
    Validator.prototype.callMethod = function (method, errorMessage, argumentList) {
        var args = argumentList || [];
        try {
            args.unshift(this.toStringValue());
            if (valLib[method].apply(this, args) === false) {
                this.errors.push(errorMessage || method);
            }
        }
        catch (e) {
            this.errors.push(errorMessage || e.message);
        }
        return this;
    };
    Validator.prototype.toStringValue = function () {
        var value = this.value;
        if (typeof value === 'string' || value instanceof Date) {
            return value;
        }
        return JSON.stringify(value);
    };
    Validator.prototype.toJSON = function () {
        return {
            isValid: this.isValid,
            errors: this.errors,
        };
    };
    return Validator;
}());
exports.Validator = Validator;
var OTHER_VALIDATORS = ['contains', 'equals', 'matches'];
Object.keys(valLib).forEach(function (name) {
    if (name.startsWith('is') || OTHER_VALIDATORS.includes(name)) {
        // use function here to keep the correct this context
        Validator.prototype[name] = function validate() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var error = typeof args[0] === 'string' ? args.shift() : null;
            return this.callMethod(name, error, args);
        };
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmFsaWRhdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbGliL2ludGVyc2VjdGlvbi9WYWxpZGF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFJQSxJQUFNLGNBQWMsR0FBRyxFQUFFLENBQUM7QUFDMUIsSUFBSSxNQUFNLEdBQThCLGNBQWMsQ0FBQztBQUN2RCxJQUFJO0lBQ0YseURBQXlEO0lBQ3pELDBDQUEwQztJQUMxQyxNQUFNLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0NBQy9CO0FBQUMsT0FBTyxDQUFDLEVBQUU7SUFDVix1Q0FBdUM7Q0FDeEM7QUFTRDtJQStGRSxtQkFBWSxHQUFXLEVBQUUsTUFBYztRQXBFdkM7O1dBRUc7UUFDSyxXQUFNLEdBQWEsRUFBRSxDQUFDO1FBa0U1QixJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNmLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQ3ZCLENBQUM7SUFqR0Q7Ozs7O09BS0c7SUFDSSxpQkFBTyxHQUFkLFVBQWUsV0FBNkIsRUFBRSxjQUFzQjtRQUNsRSxJQUFNLElBQUksR0FBYSxFQUFFLENBQUM7UUFDMUIsSUFBTSxJQUFJLEdBQUcsV0FBVyxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ3RDLEtBQUssSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksRUFBRSxFQUFFO1lBQ3JELElBQU0sSUFBSSxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUM7WUFDdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDdEI7UUFFRCwwRUFBMEU7UUFDMUUsSUFBTSxFQUFFLFFBQU8sUUFBUSxZQUFSLFFBQVEsd0NBQUksSUFBSSxJQUFFLGNBQWMsTUFBQyxDQUFDO1FBQ2pELE9BQU8s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
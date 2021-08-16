"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Code = void 0;
var message = __importStar(require("../message"));
var connector_1 = require("../connector");
var Validator_1 = require("./Validator");
/**
 * Representation of a Code which runs on Baqend.
 */
var Code = /** @class */ (function () {
    /**
     * @param metamodel
     * @param entityManagerFactory
     */
    function Code(metamodel, entityManagerFactory) {
        this.metamodel = metamodel;
        this.entityManagerFactory = entityManagerFactory;
    }
    /**
     * Converts the given function to a string
     * @param fn The JavaScript function to serialize
     * @return The serialized function
     */
    Code.prototype.functionToString = function (fn) {
        if (!fn) {
            return '';
        }
        var str = fn.toString();
        str = str.substring(str.indexOf('{') + 1, str.lastIndexOf('}'));
        if (str.charAt(0) === '\n') {
            str = str.substring(1);
        }
        if (str.charAt(str.length - 1) === '\n') {
            str = str.substring(0, str.length - 1);
        }
        return str;
    };
    /**
     * Converts the given string to a module wrapper function
     * @param signature The expected parameters of the function
     * @param code The JavaScript function to deserialize
     * @return The deserialized function
     */
    Code.prototype.stringToFunction = function (signature, code) {
        // eslint-disable-next-line @typescript-eslint/no-implied-eval
        return new Function(signature /* typings are incorrect here */, code); // eslint-disable-line no-new-func
    };
    /**
     * Loads a list of all available modules without handlers
     *
     * @return
     */
    Code.prototype.loadModules = function () {
        var msg = new message.GetAllModules();
        return this.entityManagerFactory.send(msg)
            .then(function (response) { return response.entity; });
    };
    Code.prototype.loadCode = function (type, codeType, asFunction) {
        var _this = this;
        if (asFunction === void 0) { asFunction = false; }
        var bucket = typeof type === 'string' ? type : type.name;
        var msg = new message.GetBaqendCode(bucket, codeType)
            .responseType('text');
        return this.entityManagerFactory.send(msg)
            .then(function (response) { return _this.parseCode(bucket, codeType, asFunction, response.entity); }, function (e) {
            if (e.status === connector_1.StatusCode.OBJECT_NOT_FOUND) {
                return null;
            }
            throw e;
        });
    };
    Code.prototype.saveCode = function (type, codeType, fn) {
        var _this = this;
        var bucket = typeof type === 'string' ? type : type.name;
        var msg = new message.SetBaqendCode(bucket, codeType)
            .entity(fn instanceof Function ? this.functionToString(fn) : fn, 'text')
            .responseType('text');
        return this.entityManagerFactory.send(msg)
            .then(function (response) { return _this.parseCode(bucket, codeType, fn instanceof Function, response.entity); });
    };
    /**
     * Deletes Baqend code identified by the given bucket and code type
     *
     * @param type The entity type for the handler or the Name of the
     * Baqend code
     * @param codeType The type of the code
     * @return succeed if the code was deleted
     */
    Code.prototype.deleteCode = function (type, codeType) {
        var _this = this;
        var bucket = typeof type === 'string' ? type : type.name;
        var msg = new message.DeleteBaqendCode(bucket, codeType);
        return this.entityManagerFactory.send(msg)
            .then(function () { return _this.parseCode(bucket, codeType, false, null); });
    };
    /**
     * @param bucket
     * @param codeType
     * @param [asFunction=false]
     * @param code
     * @return
     * @private
     */
    Code.prototype.parseCode = function (bucket, codeType, asFunction, code) {
        if (codeType === 'validate') {
            var type = this.metamodel.entity(bucket);
            type.validationCode = code === null ? null : Validator_1.Validator.compile(type, code);
            return asFunction ? type.validationCode : code;
        }
        return code && asFunction ? this.stringToFunction(['module', 'exports'], code) : code;
    };
    return Code;
}());
exports.Code = Code;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29kZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9pbnRlcnNlY3Rpb24vQ29kZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsa0RBQXNDO0FBQ3RDLDBDQUEwQztBQUkxQyx5Q0FBd0M7QUFFeEM7O0dBRUc7QUFDSDtJQUtFOzs7T0FHRztJQUNILGNBQVksU0FBb0IsRUFBRSxvQkFBMEM7UUFDMUUsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDM0IsSUFBSSxDQUFDLG9CQUFvQixHQUFHLG9CQUFvQixDQUFDO0lBQ25ELENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsK0JBQWdCLEdBQWhCLFVBQWlCLEVBQVk7UUFDM0IsSUFBSSxDQUFDLEVBQUUsRUFBRTtZQUNQLE9BQU8sRUFBRSxDQUFDO1NBQ1g7UUFFRCxJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDeEIsR0FBRyxHQUFHLEdBQUcsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2hFLElBQUksR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUFJLEVBQUU7WUFDMUIsR0FBRyxHQUFHLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDeEI7UUFFRCxJQUFJLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsS0FBSyxJQUFJLEVBQUU7WUFDdkMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDeEM7UUFFRCxPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7SUFFRDs7Ozs7T0FLRztJ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
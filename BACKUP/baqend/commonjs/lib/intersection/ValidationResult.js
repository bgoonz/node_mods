"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationResult = void 0;
var ValidationResult = /** @class */ (function () {
    function ValidationResult() {
        this.fields = {};
    }
    Object.defineProperty(ValidationResult.prototype, "isValid", {
        /**
         * Indicates if all fields are valid
         * @return <code>true</code> if all fields are valid
         */
        get: function () {
            var _this = this;
            return Object.keys(this.fields).every(function (key) { return _this.fields[key].isValid; });
        },
        enumerable: false,
        configurable: true
    });
    ValidationResult.prototype.toJSON = function () {
        var _this = this;
        var json = {};
        Object.keys(this.fields).forEach(function (key) {
            json[key] = _this.fields[key].toJSON();
        });
        return json;
    };
    return ValidationResult;
}());
exports.ValidationResult = ValidationResult;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmFsaWRhdGlvblJlc3VsdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9pbnRlcnNlY3Rpb24vVmFsaWRhdGlvblJlc3VsdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFHQTtJQUFBO1FBQ1MsV0FBTSxHQUFzQyxFQUFFLENBQUM7SUFpQnhELENBQUM7SUFYQyxzQkFBSSxxQ0FBTztRQUpYOzs7V0FHRzthQUNIO1lBQUEsaUJBRUM7WUFEQyxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFDLEdBQUcsSUFBSyxPQUFBLEtBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxFQUF4QixDQUF3QixDQUFDLENBQUM7UUFDM0UsQ0FBQzs7O09BQUE7SUFFRCxpQ0FBTSxHQUFOO1FBQUEsaUJBTUM7UUFMQyxJQUFNLElBQUksR0FBWSxFQUFFLENBQUM7UUFDekIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUMsR0FBRztZQUNuQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUN4QyxDQUFDLENBQUMsQ0FBQztRQUNILE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUNILHVCQUFDO0FBQUQsQ0FBQyxBQWxCRCxJQWtCQztBQWxCWSw0Q0FBZ0IifQ==
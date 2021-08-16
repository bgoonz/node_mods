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
exports.Builder = void 0;
var Filter_1 = require("./Filter");
var Condition_1 = require("./Condition");
var Operator_1 = require("./Operator");
var Query_1 = require("./Query");
var Node_1 = require("./Node");
var Builder = /** @class */ (function (_super) {
    __extends(Builder, _super);
    function Builder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Joins the conditions by an logical AND
     * @param args The query nodes to join
     * @return Returns a new query which joins the given queries by a logical AND
     */
    Builder.prototype.and = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return this.addOperator('$and', Query_1.flatArgs(args));
    };
    /**
     * Joins the conditions by an logical OR
     * @param args The query nodes to join
     * @return Returns a new query which joins the given queries by a logical OR
     */
    Builder.prototype.or = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return this.addOperator('$or', Query_1.flatArgs(args));
    };
    /**
     * Joins the conditions by an logical NOR
     * @param args The query nodes to join
     * @return Returns a new query which joins the given queries by a logical NOR
     */
    Builder.prototype.nor = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return this.addOperator('$nor', Query_1.flatArgs(args));
    };
    Builder.prototype.eventStream = function (options, onNext, onError, onComplete) {
        return this.where({}).eventStream(options, onNext, onError, onComplete);
    };
    Builder.prototype.resultStream = function (options, onNext, onError, onComplete) {
        return this.where({}).resultStream(options, onNext, onError, onComplete);
    };
    /**
     * @inheritDoc
     */
    Builder.prototype.resultList = function (options, doneCallback, failCallback) {
        return this.where({}).resultList(options, doneCallback, failCallback);
    };
    /**
     * @inheritDoc
     */
    Builder.prototype.singleResult = function (options, doneCallback, failCallback) {
        return this.where({}).singleResult(options, doneCallback, failCallback);
    };
    /**
     * @inheritDoc
     */
    Builder.prototype.count = function (doneCallback, failCallback) {
        return this.where({}).count(doneCallback, failCallback);
    };
    Builder.prototype.addOperator = function (operator, args) {
        if (args.length < 2) {
            throw new Error("Only two or more queries can be joined with an " + operator + " operator.");
        }
        args.forEach(function (arg, index) {
            if (!(arg instanceof Node_1.Node)) {
                throw new Error("Argument at index " + index + " is not a query.");
            }
        });
        return new Operator_1.Operator(this.entityManager, this.resultClass, operator, args);
    };
    Builder.prototype.addOrder = function (fieldOrSort, order) {
        return new Filter_1.Filter(this.entityManager, this.resultClass).addOrder(fieldOrSort, order);
    };
    Builder.prototype.addFilter = function (field, filter, value) {
        return new Filter_1.Filter(this.entityManager, this.resultClass).addFilter(field, filter, value);
    };
    Builder.prototype.addOffset = function (offset) {
        return new Filter_1.Filter(this.entityManager, this.resultClass).addOffset(offset);
    };
    Builder.prototype.addLimit = function (limit) {
        return new Filter_1.Filter(this.entityManager, this.resultClass).addLimit(limit);
    };
    return Builder;
}(Query_1.Query));
exports.Builder = Builder;
Object.assign(Builder.prototype, Condition_1.Condition);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQnVpbGRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9xdWVyeS9CdWlsZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLG1DQUFrQztBQUNsQyx5Q0FBd0M7QUFDeEMsdUNBQXNDO0FBQ3RDLGlDQVFpQjtBQUVqQiwrQkFBOEI7QUFPOUI7SUFBK0MsMkJBQVE7SUFBdkQ7O0lBdUdBLENBQUM7SUF0R0M7Ozs7T0FJRztJQUNILHFCQUFHLEdBQUg7UUFBSSxjQUFxQzthQUFyQyxVQUFxQyxFQUFyQyxxQkFBcUMsRUFBckMsSUFBcUM7WUFBckMseUJBQXFDOztRQUN2QyxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLGdCQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILG9CQUFFLEdBQUY7UUFBRyxjQUFxQzthQUFyQyxVQUFxQyxFQUFyQyxxQkFBcUMsRUFBckMsSUFBcUM7WUFBckMseUJBQXFDOztRQUN0QyxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLGdCQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILHFCQUFHLEdBQUg7UUFBSSxjQUFxQzthQUFyQyxVQUFxQyxFQUFyQyxxQkFBcUMsRUFBckMsSUFBcUM7WUFBckMseUJBQXFDOztRQUN2QyxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLGdCQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBUUQsNkJBQVcsR0FBWCxVQUFZLE9BQW1ELEVBQUUsTUFBNEMsRUFDM0csT0FBeUMsRUFDekMsVUFBNkI7UUFDN0IsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE9BQU8s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
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Condition = void 0;
var Query_1 = require("./Query");
// eslint-disable-next-line @typescript-eslint/no-redeclare
exports.Condition = {
    where: function (conditions) {
        return this.addFilter(null, null, conditions);
    },
    equal: function (field, value) {
        return this.addFilter(field, null, value);
    },
    notEqual: function (field, value) {
        return this.addFilter(field, '$ne', value);
    },
    greaterThan: function (field, value) {
        return this.addFilter(field, '$gt', value);
    },
    greaterThanOrEqualTo: function (field, value) {
        return this.addFilter(field, '$gte', value);
    },
    lessThan: function (field, value) {
        return this.addFilter(field, '$lt', value);
    },
    lessThanOrEqualTo: function (field, value) {
        return this.addFilter(field, '$lte', value);
    },
    between: function (field, greaterValue, lessValue) {
        return this
            .addFilter(field, '$gt', greaterValue)
            .addFilter(field, '$lt', lessValue);
    },
    in: function (field) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return this.addFilter(field, '$in', Query_1.flatArgs(args));
    },
    notIn: function (field) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return this.addFilter(field, '$nin', Query_1.flatArgs(args));
    },
    isNull: function (field) {
        return this.equal(field, null);
    },
    isNotNull: function (field) {
        return this.addFilter(field, '$exists', true)
            .addFilter(field, '$ne', null);
    },
    containsAll: function (field) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return this.addFilter(field, '$all', Query_1.flatArgs(args));
    },
    mod: function (field, divisor, remainder) {
        return this.addFilter(field, '$mod', [divisor, remainder]);
    },
    matches: function (field, regExp) {
        var reg = regExp instanceof RegExp ? regExp : new RegExp(regExp);
        if (reg.ignoreCase) {
            throw new Error('RegExp.ignoreCase flag is not supported.');
        }
        if (reg.global) {
            throw new Error('RegExp.global flag is not supported.');
        }
        if (reg.source.indexOf('^') !== 0) {
            throw new Error('regExp must be an anchored expression, i.e. it must be started with a ^.');
        }
        var result = this.addFilter(field, '$regex', reg.source);
        if (reg.multiline) {
            result.addFilter(field, '$options', 'm');
        }
        return result;
    },
    size: function (field, size) {
        return this.addFilter(field, '$size', size);
    },
    near: function (field, geoPoint, maxDistance) {
        return this.addFilter(field, '$nearSphere', {
            $geometry: {
                type: 'Point',
                coordinates: [geoPoint.longitude, geoPoint.latitude],
            },
            $maxDistance: maxDistance,
        });
    },
    withinPolygon: function (field) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var geoPoints = Query_1.flatArgs(args);
        return this.addFilter(field, '$geoWithin', {
            $geometry: {
                type: 'Polygon',
                coordinates: [geoPoints.map(function (geoPoint) { return [geoPoint.longitude, geoPoint.latitude]; })],
            },
        });
    },
};
// aliases
Object.assign(exports.Condition, {
    eq: exports.Condition.equal,
    ne: exports.Condition.notEqual,
    lt: exports.Condition.lessThan,
    le: exports.Condition.lessThanOrEqualTo,
    gt: exports.Condition.greaterThan,
    ge: exports.Condition.greaterThanOrEqualTo,
    containsAny: exports.Condition.in,
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29uZGl0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbGliL3F1ZXJ5L0NvbmRpdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxpQ0FBbUM7QUFnVm5DLDJEQUEyRDtBQUM5QyxRQUFBLFNBQVMsR0FBNEI7SUFDaEQsS0FBSyxFQUFMLFVBQTRCLFVBQVU7UUFDcEMsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVELEtBQUssRUFBTCxVQUE0QixLQUFLLEVBQUUsS0FBSztRQUN0QyxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRUQsUUFBUSxFQUFSLFVBQStCLEtBQUssRUFBRSxLQUFLO1FBQ3pDLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFRCxXQUFXLEVBQVgsVUFBa0MsS0FBSyxFQUFFLEtBQUs7UUFDNUMsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVELG9CQUFvQixFQUFwQixVQUEyQyxLQUFLLEVBQUUsS0FBSztRQUNyRCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBRUQsUUFBUSxFQUFSLFVBQStCLEtBQUssRUFBRSxLQUFLO1FBQ3pDLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFRCxpQkFBaUIsRUFBakIsVUFBd0MsS0FBSyxFQUFFLEtBQUs7UUFDbEQsT0FBTyxJQUFJLENB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
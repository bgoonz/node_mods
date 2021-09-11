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
exports.BasicType = void 0;
var binding_1 = require("../binding");
var GeoPoint_1 = require("../GeoPoint");
var Type_1 = require("./Type");
function dateToJson(value) {
    // remove trailing zeros
    return value instanceof Date ? value.toISOString().replace(/\.?0*Z/, 'Z') : null;
}
function jsonToDate(json, currentValue) {
    var date = typeof json === 'string' ? new Date(json) : null;
    if (currentValue && date) {
        // compare normalized date strings instead of plain strings
        return currentValue.toISOString() === date.toISOString() ? currentValue : date;
    }
    return date;
}
var BasicType = /** @class */ (function (_super) {
    __extends(BasicType, _super);
    /**
     * Creates a new instance of a native db type
     * @param ref The db ref of this type
     * @param typeConstructor The javascript class of this type
     * @param noResolving Indicates if this type is not the main type of the constructor
     */
    function BasicType(ref, typeConstructor, noResolving) {
        var _this = this;
        var id = ref.indexOf('/db/') === 0 ? ref : "/db/" + ref;
        _this = _super.call(this, id, typeConstructor) || this;
        _this.noResolving = !!noResolving;
        return _this;
    }
    Object.defineProperty(BasicType.prototype, "persistenceType", {
        /**
         * @inheritDoc
         */
        get: function () {
            return Type_1.PersistenceType.BASIC;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * @inheritDoc
     */
    BasicType.prototype.toJsonValue = function (state, currentValue) {
        return currentValue === null || currentValue === undefined ? null : this.typeConstructor(currentValue);
    };
    /**
     * @inheritDoc
     */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    BasicType.prototype.fromJsonValue = function (state, json, currentValue) {
        return json === null || json === undefined ? null : json;
    };
    BasicType.prototype.toString = function () {
        return "BasicType(" + this.ref + ")";
    };
    BasicType.Boolean = new /** @class */ (function (_super) {
        __extends(BooleanType, _super);
        function BooleanType() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        BooleanType.prototype.fromJsonValue = function (state, json, currentValue) {
            return typeof json === 'string' ? json !== 'false' : _super.prototype.fromJsonValue.call(this, state, json, currentValue);
        };
        return BooleanType;
    }(BasicType))('Boolean', Boolean);
    BasicType.Double = new /** @class */ (function (_super) {
        __extends(DoubleType, _super);
        function DoubleType() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DoubleType.prototype.fromJsonValue = function (state, json, currentValue) {
            return typeof json === 'string' ? parseFloat(json) : _super.prototype.fromJsonValue.call(this, state, json, currentValue);
        };
        return DoubleType;
    }(BasicType))('Double', Number);
    BasicType.Integer = new /** @class */ (function (_super) {
        __extends(IntegerType, _super);
        function IntegerType() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        IntegerType.prototype.fromJsonValue = function (state, json, currentValue) {
            return typeof json === 'string' ? parseInt(json, 10) : _super.prototype.fromJsonValue.call(this, state, json, currentValue);
        };
        return IntegerType;
    }(BasicType))('Integer', Number);
    BasicType.String = new /** @class */ (function (_super) {
        __extends(StringType, _super);
        function StringType() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        StringType.prototype.fromJsonValue = function (state, json, currentValue) {
            return _super.prototype.fromJsonValue.call(this, state, json, currentValue);
        };
        return StringType;
    }(BasicType))('String', String);
    BasicType.DateTime = new /** @class */ (function (_super) {
        __extends(DateTimeType, _super);
        function DateTimeType() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DateTimeType.prototype.toJsonValue = function (state, value) {
            return dateToJson(value);
        };
        DateTimeType.prototype.fromJsonValue = function (state, json, currentValue) {
            return jsonToDate(json, currentValue);
        };
        return DateTimeType;
    }(BasicType))('DateTime', Date);
    BasicType.Date = new /** @class */ (function (_super) {
        __extends(DateType, _super);
        function DateType() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DateType.prototype.toJsonValue = function (state, value) {
            var json = dateToJson(value);
            return json ? json.substring(0, json.indexOf('T')) : null;
        };
        DateType.prototype.fromJsonValue = function (state, json, currentValue) {
            return jsonToDate(json, currentValue);
        };
        return DateType;
    }(BasicType))('Date', Date);
    BasicType.Time = new /** @class */ (function (_super) {
        __extends(TimeType, _super);
        function TimeType() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        TimeType.prototype.toJsonValue = function (state, value) {
            var json = dateToJson(value);
            return json ? json.substring(json.indexOf('T') + 1) : null;
        };
        TimeType.prototype.fromJsonValue = function (state, json, currentValue) {
            return typeof json === 'string' ? jsonToDate("1970-01-01T" + json, currentValue) : null;
        };
        return TimeType;
    }(BasicType))('Time', Date);
    BasicType.File = new /** @class */ (function (_super) {
        __extends(FileType, _super);
        function FileType() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        FileType.prototype.toJsonValue = function (state, value) {
            return value instanceof binding_1.File ? value.id : null;
        };
        FileType.prototype.fromJsonValue = function (state, json, currentValue) {
            if (!json) {
                return null;
            }
            if (currentValue && currentValue.id === json) {
                return currentValue;
            }
            if (state.db) {
                return new state.db.File(json);
            }
            return null;
        };
        return FileType;
    }(BasicType))('File', binding_1.File);
    BasicType.GeoPoint = new /** @class */ (function (_super) {
        __extends(GeoPointType, _super);
        function GeoPointType() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        GeoPointType.prototype.toJsonValue = function (state, value) {
            return value instanceof GeoPoint_1.GeoPoint ? value.toJSON() : null;
        };
        GeoPointType.prototype.fromJsonValue = function (state, json) {
            return json ? new GeoPoint_1.GeoPoint(json) : null;
        };
        return GeoPointType;
    }(BasicType))('GeoPoint', GeoPoint_1.GeoPoint);
    BasicType.JsonArray = new /** @class */ (function (_super) {
        __extends(JsonArrayType, _super);
        function JsonArrayType() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        JsonArrayType.prototype.toJsonValue = function (state, value) {
            return Array.isArray(value) ? value : null;
        };
        JsonArrayType.prototype.fromJsonValue = function (state, json) {
            return Array.isArray(json) ? json : null;
        };
        return JsonArrayType;
    }(BasicType))('JsonArray', Array);
    BasicType.JsonObject = new /** @class */ (function (_super) {
        __extends(JsonObjectType, _super);
        function JsonObjectType() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        JsonObjectType.prototype.fromJsonValue = function (state, json, currentValue) {
            return _super.prototype.fromJsonValue.call(this, state, json, currentValue);
        };
        JsonObjectType.prototype.toJsonValue = function (state, value) {
            if (value && value.constructor === Object) {
                return value;
            }
            return null;
        };
        return JsonObjectType;
    }(BasicType))('JsonObject', Object);
    return BasicType;
}(Type_1.Type));
exports.BasicType = BasicType;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzaWNUeXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbGliL21ldGFtb2RlbC9CYXNpY1R5cGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSUEsc0NBQWtDO0FBQ2xDLHdDQUF1QztBQUN2QywrQkFBK0M7QUFHL0MsU0FBUyxVQUFVLENBQUMsS0FBa0I7SUFDcEMsd0JBQXdCO0lBQ3hCLE9BQU8sS0FBSyxZQUFZLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztBQUNuRixDQUFDO0FBRUQsU0FBUyxVQUFVLENBQUMsSUFBVSxFQUFFLFlBQXlCO0lBQ3ZELElBQU0sSUFBSSxHQUFHLE9BQU8sSUFBSSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUM5RCxJQUFJLFlBQVksSUFBSSxJQUFJLEVBQUU7UUFDeEIsMkRBQTJEO1FBQzNELE9BQU8sWUFBWSxDQUFDLFdBQVcsRUFBRSxLQUFLLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7S0FDaEY7SUFFRCxPQUFPLElBQUksQ0FBQztBQUNkLENBQUM7QUFFRDtJQUFrQyw2QkFBTztJQTZIdkM7Ozs7O09BS0c7SUFDSCxtQkFBWSxHQUFXLEVBQUUsZUFBeUIsRUFBRSxXQUFxQjtRQUF6RSxpQkFNQztRQUxDLElBQU0sRUFBRSxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFNBQU8sR0FBSyxDQUFDO1FBRTFELFFBQUEsa0JBQU0sRUFBRSxFQUFFLGVBQWUsQ0FBQyxTQUFDO1FBRTNCLEtBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLFdBQVcsQ0FBQzs7SUFDbkMsQ0FBQztJQWhCRCxzQkFBSSxzQ0FBZTtRQUhuQjs7V0FFRzthQUNIO1lBQ0UsT0FBTyxzQkFBZSxDQUFDLEtBQUssQ0FBQztRQUMvQixDQUFDOzs7T0FBQTtJQWdCRDs7T0FFRztJQUNILCtCQUFXLEdBQVgsVUFBWSxLQUFtQixFQUFFLFlBQXNCO1FBQ3JELE9BQU8sWUFBWSxLQUFLLElBQUksSUFBSSxZQUFZLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFFLElBQUksQ0FBQyxlQUF1QixDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ2xILENBQUM7SUFFRDs7T0FFRztJQUNILDZEQUE2RDtJQUM3RCxpQ0FBYSxHQUFiLFVBQWMsS0FBbUIsRUFBRSxJQUFVLEVBQUUsWUFBc0I7UUFDbkUsT0FBTyxJQUFJLEtBQUssSUFBSSxJQUFJLElBQUksS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBVyxDQUFDO0lBQ2xFLENBQUM7SUFFRCw0QkFBUSxHQUFSO1FBQ0UsT0FBTyxlQUFhLElBQUksQ0FBQyxHQUFHLE1BQUcsQ0FBQztJQUNsQyxDQUFDO0lBM0pzQixpQkFBTyxHQUFHO1FBQThCLCtCQUFrQjtRQUE1Qzs7UUFJckMsQ0FBQztRQUhDLG1DQUFhLEdBQWIsVUFBYyxLQUFtQixFQUFFLElBQVUsRUFBRSxZQUE0QjtZQUN6RSxPQUFPLE9BQU8sSUFBSSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLE9BQU8sQ0FBQyxDQUFDLENBQUMsaUJBQU0sYUFBYSxZQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFDdEcsQ0FBQztRQUNILGtCQUFDO0lBQUQsQ0FBQyxBQUpvQyxDQUEwQixTQUFTLEdBSXRFLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUVDLGdCQUFNLEdBQUc7UUFBNkIsOEJBQWlCO1FBQTFDOztRQUlwQyxDQUFDO1FBSEMsa0NBQWEsR0FBYixVQUFjLEtBQW1CLEVBQUUsSUFBVSxFQUFFLFlBQTJCO1lBQ3hFLE9BQU8sT0FBTyxJQUFJLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLGlCQUFNLGFBQWEsWUFBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLFlBQVksQ0FBQyxDQUFDO1FBQ3RHLENBQUM7UUFDSCxpQkFBQztJQUFELENBQUMsQUFKbUMsQ0FBeUIsU0FBUyxHQUlwRSxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFFRyxpQkFBTyxHQUFHO1FBQThCLCtCQUFpQjtRQUEzQzs7UUFJckMsQ0FBQztRQUhDLG1DQUFhLEdBQWIsVUFBYyxLQUFtQixFQUFFLElBQVUsRUFBRSxZQUEyQjtZQUN4RSxPQUFPLE9BQU8sSUFBSSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsaUJBQU0sYUFBYSxZQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFDeEcsQ0FBQztRQUNILGtCQUFDO0lBQUQsQ0FBQyxBQUpvQyxDQUEwQixTQUFTLEdBSXRFLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUVFLGdCQUFNLEdBQUc7UUFBNkIsOEJBQWlCO1FBQTFDOztRQUlwQyxDQUFDO1FBSEMsa0NBQWEsR0FBYixVQUFjLEtBQW1CLEVBQUUsSUFBVSxFQUFFLFlBQTJCO1lBQ3hFLE9BQU8saUJBQU0sYUFBYSxZQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFDeEQsQ0FBQztRQUNILGlCQUFDO0lBQUQsQ0FBQyxBQUptQyxDQUF5QixTQUFTLEdBSXBFLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUVHLGtCQUFRLEdBQUc7UUFBK0IsZ0NBQWU7UUFBMUM7O1FBUXRDLENBQUM7UUFQQyxrQ0FBVyxHQUFYLFVBQVksS0FBbUIsRUFBRSxLQUFrQjtZQUNqRCxPQUFPLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMzQixDQUFDO1FBRUQsb0NBQWEsR0FBYixVQUFjLEtBQW1CLEVBQUUsSUFBVSxFQUFFLFlBQXlCO1lBQ3RFLE9BQU8sVUFBVSxDQUFDLElBQUksRUFBRSxZQUFZLENBQUMsQ0FBQztRQUN4QyxDQUFDO1FBQ0gsbUJBQUM7SUFBRCxDQUFDLEFBUnFDLENBQTJCLFNBQVMsR0FReEUsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBRUcsY0FBSSxHQUFHO1FBQTJCLDRCQUFlO1FBQXRDOztRQVNsQyxDQUFDO1FBUkMsOEJBQVcsR0FBWCxVQUFZLEtBQW1CLEVBQUUsS0FBa0I7WUFDakQsSUFBTSxJQUFJLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQy9CLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUM1RCxDQUFDO1FBRUQsZ0NBQWEsR0FBYixVQUFjLEtBQW1CLEVBQUUsSUFBVSxFQUFFLFlBQXlCO1lBQ3RFLE9BQU8sVUFBVSxDQUFDLElBQUksRUFBRSxZQUFZLENBQUMsQ0FBQztRQUN4QyxDQUFDO1FBQ0gsZUFBQztJQUFELENBQUMsQUFUaUMsQ0FBdUIsU0FBUyxHQVNoRSxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFFTyxjQUFJLEdBQUc7UUFBMkIsNEJBQWU7UUFBdEM7O1FBU2xDLENBQUM7UUFSQyw4QkFBVyxHQUFYLFVBQVksS0FBbUIsRUFBRSxLQUFrQjtZQUNqRCxJQUFNLElBQUksR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDL0IsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQzdELENBQUM7UUFFRCxnQ0FBYSxHQUFiLFVBQWMsS0FBbUIsRUFBRSxJQUFVLEVBQUUsWUFBeUI7WUFDdEUsT0FBTyxPQUFPLElBQUksS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxnQkFBYyxJQUFNLEVBQUUsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUMxRixDQUFDO1FBQ0gsZUFBQztJQUFELENBQUMsQUFUaUMsQ0FBdUIsU0FBUyxHQVNoRSxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFFTyxjQUFJLEdBQUc7UUFBMkIsNEJBQWU7UUFBdEM7O1FBb0JsQyxDQUFDO1FBbkJDLDhCQUFXLEdBQVgsVUFBWSxLQUFtQixFQUFFLEtBQWtCO1lBQ2pELE9BQU8sS0FBSyxZQUFZLGNBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQ2pELENBQUM7UUFFRCxnQ0FBYSxHQUFiLFVBQWMsS0FBbUIsRUFBRSxJQUFVLEVBQUUsWUFBeUI7WUFDdEUsSUFBSSxDQUFDLElBQUksRUFBRTtnQkFDVCxPQUFPLElBQUksQ0FBQzthQUNiO1lBRUQsSUFBSSxZQUFZLElBQUksWUFBWSxDQUFDLEVBQUUsS0FBSyxJQUFJLEVBQUU7Z0JBQzVDLE9BQU8sWUFBWSxDQUFDO2FBQ3JCO1lBRUQsSUFBSSxLQUFLLENBQUMsRUFBRSxFQUFFO2dCQUNaLE9BQU8sSUFBSSxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFjLENBQUMsQ0FBQzthQUMxQztZQUVELE9BQU8sSUFBSSxDQUFDO1FBQ2QsQ0FBQztRQUNILGVBQUM7SUFBRCxDQUFDLEFBcEJpQyxDQUF1QixTQUFTLEdBb0JoRSxNQUFNLEVBQUUsY0FBSSxDQUFDLENBQUM7SUFFTyxrQkFBUSxHQUFHO1FBQStCLGdDQUFtQjtRQUE5Qzs7UUFRdEMsQ0FBQztRQVBDLGtDQUFXLEdBQVgsVUFBWSxLQUFtQixFQUFFLEtBQXNCO1lBQ3JELE9BQU8sS0FBSyxZQUFZLG1CQUFRLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQzNELENBQUM7UUFFRCxvQ0FBYSxHQUFiLFVBQWMsS0FBbUIsRUFBRSxJQUFVO1lBQzNDLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLG1CQUFRLENBQUMsSUFBK0MsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDckYsQ0FBQztRQUNILG1CQUFDO0lBQUQsQ0FBQyxBQVJxQyxDQUEyQixTQUFTLEdBUXhFLFVBQVUsRUFBRSxtQkFBUSxDQUFDLENBQUM7SUFFRCxtQkFBUyxHQUFHO1FBQWdDLGlDQUFvQjtRQUFoRDs7UUFRdkMsQ0FBQztRQVBDLG1DQUFXLEdBQVgsVUFBWSxLQUFtQixFQUFFLEtBQXdCO1lBQ3ZELE9BQU8sS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDN0MsQ0FBQztRQUVELHFDQUFhLEdBQWIsVUFBYyxLQUFtQixFQUFFLElBQVU7WUFDM0MsT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUMzQyxDQUFDO1FBQ0gsb0JBQUM7SUFBRCxDQUFDLEFBUnNDLENBQTRCLFNBQVMsR0FRMUUsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBRUMsb0JBQVUsR0FBRztRQUFpQyxrQ0FBa0I7UUFBL0M7O1FBWXhDLENBQUM7UUFYQyxzQ0FBYSxHQUFiLFVBQWMsS0FBbUIsRUFBRSxJQUFVLEVBQUUsWUFBNEI7WUFDekUsT0FBTyxpQkFBTSxhQUFhLFlBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxZQUFZLENBQUMsQ0FBQztRQUN4RCxDQUFDO1FBRUQsb0NBQVcsR0FBWCxVQUFZLEtBQW1CLEVBQUUsS0FBcUI7WUFDcEQsSUFBSSxLQUFLLElBQUksS0FBSyxDQUFDLFdBQVcsS0FBSyxNQUFNLEVBQUU7Z0JBQ3pDLE9BQU8sS0FBSyxDQUFDO2FBQ2Q7WUFFRCxPQUFPLElBQUksQ0FBQztRQUNkLENBQUM7UUFDSCxxQkFBQztJQUFELENBQUMsQUFadUMsQ0FBNkIsU0FBUyxHQVk1RSxZQUFZLEVBQUUsTUFBYSxDQUFDLENBQUM7SUE4Q2pDLGdCQUFDO0NBQUEsQUE3SkQsQ0FBa0MsV0FBSSxHQTZKckM7QUE3SlksOEJBQVMifQ==
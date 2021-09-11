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
exports.SingularAttribute = void 0;
var Attribute_1 = require("./Attribute");
var Type_1 = require("./Type");
var SingularAttribute = /** @class */ (function (_super) {
    __extends(SingularAttribute, _super);
    /**
     * @param name
     * @param type
     * @param isMetadata <code>true</code> if the attribute is an metadata attribute
     */
    function SingularAttribute(name, type, isMetadata) {
        var _this = _super.call(this, name, isMetadata) || this;
        _this.type = type;
        return _this;
    }
    Object.defineProperty(SingularAttribute.prototype, "typeConstructor", {
        /**
         * The constructor of the element type of this attribute
         */
        get: function () {
            return this.type.typeConstructor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SingularAttribute.prototype, "persistentAttributeType", {
        /**
         * @inheritDoc
         */
        get: function () {
            switch (this.type.persistenceType) {
                case Type_1.PersistenceType.BASIC:
                    return Attribute_1.PersistentAttributeType.BASIC;
                case Type_1.PersistenceType.EMBEDDABLE:
                    return Attribute_1.PersistentAttributeType.EMBEDDED;
                case Type_1.PersistenceType.ENTITY:
                    return Attribute_1.PersistentAttributeType.ONE_TO_MANY;
                default:
                    throw new Error('Unknown persistent attribute type.');
            }
        },
        enumerable: false,
        configurable: true
    });
    /**
     * @inheritDoc
     */
    SingularAttribute.prototype.getJsonValue = function (state, object, options) {
        var persistedState = Attribute_1.Attribute.attachState(object, {});
        var value = this.getValue(object);
        var changed = persistedState[this.name] !== value;
        if (options.persisting) {
            persistedState[this.name] = value;
        }
        if (changed) {
            state.setDirty();
        }
        return this.type.toJsonValue(state, value, options);
    };
    /**
     * @inheritDoc
     */
    SingularAttribute.prototype.setJsonValue = function (state, object, jsonValue, options) {
        var value = this.type.fromJsonValue(state, jsonValue, this.getValue(object), options);
        if (options.persisting) {
            var persistedState = Attribute_1.Attribute.attachState(object, {});
            persistedState[this.name] = value;
        }
        this.setValue(object, value);
    };
    /**
     * @inheritDoc
     */
    SingularAttribute.prototype.toJSON = function () {
        return __assign({ type: this.type.ref }, _super.prototype.toJSON.call(this));
    };
    return SingularAttribute;
}(Attribute_1.Attribute));
exports.SingularAttribute = SingularAttribute;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2luZ3VsYXJBdHRyaWJ1dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9saWIvbWV0YW1vZGVsL1Npbmd1bGFyQXR0cmlidXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEseUNBQWlFO0FBQ2pFLCtCQUErQztBQU8vQztJQUEwQyxxQ0FBWTtJQTBCcEQ7Ozs7T0FJRztJQUNILDJCQUFZLElBQVksRUFBRSxJQUFhLEVBQUUsVUFBb0I7UUFBN0QsWUFDRSxrQkFBTSxJQUFJLEVBQUUsVUFBVSxDQUFDLFNBRXhCO1FBREMsS0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7O0lBQ25CLENBQUM7SUE1QkQsc0JBQUksOENBQWU7UUFIbkI7O1dBRUc7YUFDSDtZQUNFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUM7UUFDbkMsQ0FBQzs7O09BQUE7SUFLRCxzQkFBSSxzREFBdUI7UUFIM0I7O1dBRUc7YUFDSDtZQUNFLFFBQVEsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUU7Z0JBQ2pDLEtBQUssc0JBQWUsQ0FBQyxLQUFLO29CQUN4QixPQUFPLG1DQUF1QixDQUFDLEtBQUssQ0FBQztnQkFDdkMsS0FBSyxzQkFBZSxDQUFDLFVBQVU7b0JBQzdCLE9BQU8sbUNBQXVCLENBQUMsUUFBUSxDQUFDO2dCQUMxQyxLQUFLLHNCQUFlLENBQUMsTUFBTTtvQkFDekIsT0FBTyxtQ0FBdUIsQ0FBQyxXQUFXLENBQUM7Z0JBQzdDO29CQUNFLE1BQU0sSUFBSSxLQUFLLENBQUMsb0NBQW9DLENBQUMsQ0FBQzthQUN6RDtRQUNILENBQUM7OztPQUFBO0lBWUQ7O09BRUc7SUFDSCx3Q0FBWSxHQUFaLFVBQWEsS0FBbUIsRUFBRSxNQUFlLEVBQy9DLE9BQXFGO1FBQ3JGLElBQU0sY0FBYyxHQUEyQixxQkFBUyxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDakYsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNwQyxJQUFNLE9BQU8sR0FBRyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEtBQUssQ0FBQztRQUVwRCxJQUFJLE9BQU8sQ0FBQyxVQUFVLEVBQUU7WUFDdEIsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFLLENBQUM7U0FDbkM7UUFFRCxJQUFJLE9BQU8sRUFBRTtZQUNYLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUNsQjtRQUVELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBRUQ7O09BRUc7SUFDSCx3Q0FBWSxHQUFaLFVBQWEsS0FBbUIsRUFBRSxNQUFlLEVBQUUsU0FBZSxFQUNoRSxPQUF3RDtRQUN4RCxJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFFeEYsSUFBSSxPQUFPLENBQUMsVUFBVSxFQUFFO1lBQ3RCLElBQU0sY0FBYyxHQUEyQixxQkFBUyxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDakYsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFLLENBQUM7U0FDbkM7UUFFRCxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRUQ7O09BRUc7SUFDSCxrQ0FBTSxHQUFOO1FBQ0Usa0JBQ0UsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUNoQixpQkFBTSxNQUFNLFdBQUUsRUFDakI7SUFDSixDQUFDO0lBQ0gsd0JBQUM7QUFBRCxDQUFDLEFBaEZELENBQTBDLHFCQUFTLEdBZ0ZsRDtBQWhGWSw4Q0FBaUIifQ==
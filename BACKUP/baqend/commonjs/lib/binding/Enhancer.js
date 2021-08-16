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
exports.Enhancer = void 0;
var BAQEND_ID = Symbol('BaqendId');
var BAQEND_TYPE = Symbol('BaqendType');
var Enhancer = /** @class */ (function () {
    function Enhancer() {
    }
    /**
     * @param superClass
     * @return typeConstructor
     */
    Enhancer.prototype.createProxy = function (superClass) {
        return /** @class */ (function (_super) {
            __extends(Proxy, _super);
            function Proxy() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return Proxy;
        }(superClass));
    };
    /**
     * @param typeConstructor
     * @returns type the managed type metadata for this class
     */
    Enhancer.getBaqendType = function (typeConstructor) {
        return typeConstructor[BAQEND_TYPE];
    };
    /**
     * @param typeConstructor
     * @return
     */
    Enhancer.getIdentifier = function (typeConstructor) {
        return typeConstructor[BAQEND_ID];
    };
    /**
     * @param typeConstructor
     * @param identifier
     */
    Enhancer.setIdentifier = function (typeConstructor, identifier) {
        typeConstructor[BAQEND_ID] = identifier;
    };
    /**
     * @param type
     * @param typeConstructor
     */
    Enhancer.prototype.enhance = function (type, typeConstructor) {
        if (typeConstructor[BAQEND_TYPE] === type) {
            return;
        }
        if (Object.prototype.hasOwnProperty.call(typeConstructor, BAQEND_TYPE)) {
            throw new Error('Type is already used by a different manager');
        }
        typeConstructor[BAQEND_TYPE] = type;
        Enhancer.setIdentifier(typeConstructor, type.ref);
        this.enhancePrototype(typeConstructor.prototype, type);
    };
    /**
     * Enhance the prototype of the type
     * @param proto
     * @param type
     */
    Enhancer.prototype.enhancePrototype = function (proto, type) {
        var _this = this;
        if (type.isEmbeddable) {
            return; // we do not need to enhance the prototype of embeddable
        }
        if (proto.toString === Object.prototype.toString) {
            // implements a better convenience toString method
            Object.defineProperty(proto, 'toString', {
                value: function toString() {
                    return this._metadata.id || this._metadata.bucket;
                },
                enumerable: false,
            });
        }
        // enhance all persistent object properties
        if (type.superType && type.superType.name === 'Object') {
            type.superType.declaredAttributes.forEach(function (attr) {
                if (!attr.isMetadata) {
                    _this.enhanceProperty(proto, attr);
                }
            });
        }
        // enhance all persistent properties
        type.declaredAttributes.forEach(function (attr) {
            _this.enhanceProperty(proto, attr);
        });
    };
    /**
     * @param proto
     * @param attribute
     */
    Enhancer.prototype.enhanceProperty = function (proto, attribute) {
        var name = attribute.name;
        Object.defineProperty(proto, name, {
            get: function () {
                this._metadata.throwUnloadedPropertyAccess(name);
                return null;
            },
            set: function (value) {
                this._metadata.throwUnloadedPropertyAccess(name);
                Object.defineProperty(this, name, {
                    value: value,
                    writable: true,
                    enumerable: true,
                    configurable: true,
                });
            },
            configurable: true,
            enumerable: true,
        });
    };
    return Enhancer;
}());
exports.Enhancer = Enhancer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRW5oYW5jZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9saWIvYmluZGluZy9FbmhhbmNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLQSxJQUFNLFNBQVMsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDckMsSUFBTSxXQUFXLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBRXpDO0lBQUE7SUErR0EsQ0FBQztJQTlHQzs7O09BR0c7SUFDSCw4QkFBVyxHQUFYLFVBQTRCLFVBQW9CO1FBQzlDLE9BQU87WUFBb0IseUJBQW1CO1lBQXZDOztZQUF5QyxDQUFDO1lBQUQsWUFBQztRQUFELENBQUMsQUFBMUMsQ0FBcUIsVUFBa0IsRUFBZSxDQUFDO0lBQ2hFLENBQUM7SUFFRDs7O09BR0c7SUFDSSxzQkFBYSxHQUFwQixVQUFxQixlQUFzQztRQUN6RCxPQUFRLGVBQXVCLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVEOzs7T0FHRztJQUNJLHNCQUFhLEdBQXBCLFVBQXFCLGVBQXNDO1FBQ3pELE9BQVEsZUFBdUIsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksc0JBQWEsR0FBcEIsVUFBcUIsZUFBMkIsRUFBRSxVQUFrQjtRQUNqRSxlQUF1QixDQUFDLFNBQVMsQ0FBQyxHQUFHLFVBQVUsQ0FBQztJQUNuRCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsMEJBQU8sR0FBUCxVQUEyQixJQUFvQixFQUFFLGVBQXlCO1FBQ3hFLElBQUssZUFBdUIsQ0FBQyxXQUFXLENBQUMsS0FBSyxJQUFJLEVBQUU7WUFDbEQsT0FBTztTQUNSO1FBRUQsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLFdBQVcsQ0FBQyxFQUFFO1lBQ3RFLE1BQU0sSUFBSSxLQUFLLENBQUMsNkNBQTZDLENBQUMsQ0FBQztTQUNoRTtRQUVBLGVBQXVCLENBQUMsV0FBVyxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBRTdDLFFBQVEsQ0FBQyxhQUFhLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNsRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN6RCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILG1DQUFnQixHQUFoQixVQUFvQyxLQUFRLEVBQUUsSUFBb0I7UUFBbEUsaUJBNEJDO1FBM0JDLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNyQixPQUFPLENBQUMsd0RBQXdEO1NBQ2pFO1FBRUQsSUFBSSxLQUFLLENBQUMsUUFBUSxLQUFLLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFO1lBQ2hELGtEQUFrRDtZQUNsRCxNQUFNLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRSxVQUFVLEVBQUU7Z0JBQ3ZDLEtBQUssRUFBRSxTQUFTLFFBQVE7b0JBQ3RCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUM7Z0JBQ3BELENBQUM7Z0JBQ0QsVUFBVSxFQUFFLEtBQUs7YUFDbEIsQ0FBQyxDQUFDO1NBQ0o7UUFFRCwyQ0FBMkM7UUFDM0MsSUFBSSxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxLQUFLLFFBQVEsRUFBRTtZQUN0RCxJQUFJLENBQUMsU0FBUyxDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxVQUFDLElBQUk7Z0JBQzdDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFO29CQUNwQixLQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztpQkFDbkM7WUFDSCxDQUFDLENBQUMsQ0FBQztTQUNKO1FBRUQsb0NBQW9DO1FBQ3BDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsVUFBQyxJQUFJO1lBQ25DLEtBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3BDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVEOzs7T0FHRztJQUNILGtDQUFlLEdBQWYsVUFBbUIsS0FBUSxFQUFFLFNBQXlCO1FBQzVDLElBQUEsSUFBSSxHQUFLLFNBQVMsS0FBZCxDQUFlO1FBQzNCLE1BQU0sQ0FBQyxjQUFjLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRTtZQUNqQyxHQUFHO2dCQUNELElBQUksQ0FBQyxTQUFTLENBQUMsMkJBQTJCLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ2pELE9BQU8sSUFBSSxDQUFDO1lBQ2QsQ0FBQztZQUNELEdBQUcsWUFBQyxLQUFLO2dCQUNQLElBQUksQ0FBQyxTQUFTLENBQUMsMkJBQTJCLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ2pELE1BQU0sQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRTtvQkFDaEMsS0FBSyxPQUFBO29CQUNMLFFBQVEsRUFBRSxJQUFJO29CQUNkLFVBQVUsRUFBRSxJQUFJO29CQUNoQixZQUFZLEVBQUUsSUFBSTtpQkFDbkIsQ0FBQyxDQUFDO1lBQ0wsQ0FBQztZQUNELFlBQVksRUFBRSxJQUFJO1lBQ2xCLFVBQVUsRUFBRSxJQUFJO1NBQ2pCLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDSCxlQUFDO0FBQUQsQ0FBQyxBQS9HRCxJQStHQztBQS9HWSw0QkFBUSJ9
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deprecated = void 0;
/* eslint-disable no-console */
var alreadyWarned = {};
function deprecated(alternativeSignature) {
    return function decorateProperty(target, name, descriptor) {
        if (descriptor === void 0) { descriptor = {
            writable: true,
            enumerable: false,
            configurable: true,
        }; }
        var type = typeof target === 'string' ? target : target.constructor.name;
        var deprecatedSignature = type + "." + name;
        var logWarning = function () {
            if (!alreadyWarned[deprecatedSignature]) {
                alreadyWarned[deprecatedSignature] = true;
                console.warn("Usage of " + deprecatedSignature + " is deprecated, use " + alternativeSignature + " instead.");
            }
        };
        var deprecatedDescriptor = {
            enumerable: descriptor.enumerable,
            configurable: descriptor.configurable,
        };
        if (descriptor.get || descriptor.set) {
            if (descriptor.get) {
                deprecatedDescriptor.get = function get() {
                    logWarning();
                    return descriptor.get.call(this);
                };
            }
            if (descriptor.set) {
                deprecatedDescriptor.set = function set(value) {
                    logWarning();
                    return descriptor.set.call(this, value);
                };
            }
        }
        else {
            var propertyValue_1 = descriptor.value;
            deprecatedDescriptor.get = function get() {
                logWarning();
                return propertyValue_1;
            };
            if (descriptor.writable) {
                deprecatedDescriptor.set = function set(value) {
                    logWarning();
                    propertyValue_1 = value;
                };
            }
        }
        return deprecatedDescriptor;
    };
}
exports.deprecated = deprecated;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVwcmVjYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi91dGlsL2RlcHJlY2F0ZWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsK0JBQStCO0FBQy9CLElBQU0sYUFBYSxHQUFxQyxFQUFFLENBQUM7QUFDM0QsU0FBZ0IsVUFBVSxDQUFDLG9CQUE0QjtJQUNyRCxPQUFPLFNBQVMsZ0JBQWdCLENBQzlCLE1BQXVCLEVBQ3ZCLElBQVksRUFDWixVQUlDO1FBSkQsMkJBQUEsRUFBQTtZQUNFLFFBQVEsRUFBRSxJQUFJO1lBQ2QsVUFBVSxFQUFFLEtBQUs7WUFDakIsWUFBWSxFQUFFLElBQUk7U0FDbkI7UUFFRCxJQUFNLElBQUksR0FBRyxPQUFPLE1BQU0sS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUM7UUFDM0UsSUFBTSxtQkFBbUIsR0FBTSxJQUFJLFNBQUksSUFBTSxDQUFDO1FBQzlDLElBQU0sVUFBVSxHQUFHO1lBQ2pCLElBQUksQ0FBQyxhQUFhLENBQUMsbUJBQW1CLENBQUMsRUFBRTtnQkFDdkMsYUFBYSxDQUFDLG1CQUFtQixDQUFDLEdBQUcsSUFBSSxDQUFDO2dCQUMxQyxPQUFPLENBQUMsSUFBSSxDQUFDLGNBQVksbUJBQW1CLDRCQUF1QixvQkFBb0IsY0FBVyxDQUFDLENBQUM7YUFDckc7UUFDSCxDQUFDLENBQUM7UUFFRixJQUFNLG9CQUFvQixHQUF1QjtZQUMvQyxVQUFVLEVBQUUsVUFBVSxDQUFDLFVBQVU7WUFDakMsWUFBWSxFQUFFLFVBQVUsQ0FBQyxZQUFZO1NBQ3RDLENBQUM7UUFFRixJQUFJLFVBQVUsQ0FBQyxHQUFHLElBQUksVUFBVSxDQUFDLEdBQUcsRUFBRTtZQUNwQyxJQUFJLFVBQVUsQ0FBQyxHQUFHLEVBQUU7Z0JBQ2xCLG9CQUFvQixDQUFDLEdBQUcsR0FBRyxTQUFTLEdBQUc7b0JBQ3JDLFVBQVUsRUFBRSxDQUFDO29CQUNiLE9BQU8sVUFBVSxDQUFDLEdBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3BDLENBQUMsQ0FBQzthQUNIO1lBRUQsSUFBSSxVQUFVLENBQUMsR0FBRyxFQUFFO2dCQUNsQixvQkFBb0IsQ0FBQyxHQUFHLEdBQUcsU0FBUyxHQUFHLENBQUMsS0FBSztvQkFDM0MsVUFBVSxFQUFFLENBQUM7b0JBQ2IsT0FBTyxVQUFVLENBQUMsR0FBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBQzNDLENBQUMsQ0FBQzthQUNIO1NBQ0Y7YUFBTTtZQUNMLElBQUksZUFBYSxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUM7WUFFckMsb0JBQW9CLENBQUMsR0FBRyxHQUFHLFNBQVMsR0FBRztnQkFDckMsVUFBVSxFQUFFLENBQUM7Z0JBQ2IsT0FBTyxlQUFhLENBQUM7WUFDdkIsQ0FBQyxDQUFDO1lBRUYsSUFBSSxVQUFVLENBQUMsUUFBUSxFQUFFO2dCQUN2QixvQkFBb0IsQ0FBQyxHQUFHLEdBQUcsU0FBUyxHQUFHLENBQUMsS0FBSztvQkFDM0MsVUFBVSxFQUFFLENBQUM7b0JBQ2IsZUFBYSxHQUFHLEtBQUssQ0FBQztnQkFDeEIsQ0FBQyxDQUFDO2FBQ0g7U0FDRjtRQUVELE9BQU8sb0JBQW9CLENBQUM7SUFDOUIsQ0FBQyxDQUFDO0FBQ0osQ0FBQztBQXhERCxnQ0F3REMifQ==
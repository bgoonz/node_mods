"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Subscriber = exports.Subscription = exports.Observable = void 0;
function optionalRxjsDependency() {
    throw new Error('This functionality is only available, if the optional rxjs dependency is also provided.');
}
var rxjs = {
    Observable: optionalRxjsDependency,
    Subscription: optionalRxjsDependency,
    Subscriber: optionalRxjsDependency,
};
try {
    // we load this module as an optional external dependency
    // eslint-disable-next-line global-require
    rxjs = require('rxjs');
}
catch (e) {
    // ignore loading optional module error
}
// eslint-disable-next-line @typescript-eslint/no-redeclare
var Observable = rxjs.Observable, Subscription = rxjs.Subscription, Subscriber = rxjs.Subscriber;
exports.Observable = Observable;
exports.Subscription = Subscription;
exports.Subscriber = Subscriber;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2JzZXJ2YWJsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi91dGlsL29ic2VydmFibGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBRUEsU0FBUyxzQkFBc0I7SUFDN0IsTUFBTSxJQUFJLEtBQUssQ0FBQyx5RkFBeUYsQ0FBQyxDQUFDO0FBQzdHLENBQUM7QUFFRCxJQUFJLElBQUksR0FBRztJQUNULFVBQVUsRUFBRSxzQkFBc0Q7SUFDbEUsWUFBWSxFQUFFLHNCQUFzRDtJQUNwRSxVQUFVLEVBQUUsc0JBQXNEO0NBQ25FLENBQUM7QUFFRixJQUFJO0lBQ0YseURBQXlEO0lBQ3pELDBDQUEwQztJQUMxQyxJQUFJLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0NBQ3hCO0FBQUMsT0FBTyxDQUFDLEVBQUU7SUFDVix1Q0FBdUM7Q0FDeEM7QUFNRCwyREFBMkQ7QUFDbkQsSUFBQSxVQUFVLEdBQStCLElBQUksV0FBbkMsRUFBRSxZQUFZLEdBQWlCLElBQUksYUFBckIsRUFBRSxVQUFVLEdBQUssSUFBSSxXQUFULENBQVU7QUFFN0MsZ0NBQVU7QUFBRSxvQ0FBWTtBQUFFLGdDQUFVIn0=
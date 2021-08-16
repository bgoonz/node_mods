"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
var EntityManagerFactory_1 = require("./EntityManagerFactory");
exports.db = (function () {
    var emf = new EntityManagerFactory_1.EntityManagerFactory();
    var bq = emf.createEntityManager(true);
    Object.assign(bq, {
        configure: function (options) {
            emf.configure(options);
            return this;
        },
        connect: function (hostOrApp, secure, doneCallback, failCallback) {
            if (secure instanceof Function) {
                return this.connect(hostOrApp, undefined, secure, doneCallback);
            }
            emf.connect(hostOrApp, secure);
            return this.ready(doneCallback, failCallback);
        },
    });
    return bq;
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFxZW5kLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vbGliL2JhcWVuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwrREFBOEQ7QUE4QmpELFFBQUEsRUFBRSxHQUFHLENBQUM7SUFDakIsSUFBTSxHQUFHLEdBQUcsSUFBSSwyQ0FBb0IsRUFBRSxDQUFDO0lBQ3ZDLElBQU0sRUFBRSxHQUFHLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUV6QyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRTtRQUNoQixTQUFTLEVBQVQsVUFBd0IsT0FBTztZQUM3QixHQUFHLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3ZCLE9BQU8sSUFBSSxDQUFDO1FBQ2QsQ0FBQztRQUVELE9BQU8sRUFBUCxVQUFzQixTQUFpQixFQUFFLE1BQTJCLEVBQUUsWUFBa0IsRUFBRSxZQUFrQjtZQUMxRyxJQUFJLE1BQU0sWUFBWSxRQUFRLEVBQUU7Z0JBQzlCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxZQUFZLENBQUMsQ0FBQzthQUNqRTtZQUVELEdBQUcsQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQy9CLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFDaEQsQ0FBQztLQUNpQixDQUFDLENBQUM7SUFFdEIsT0FBTyxFQUFZLENBQUM7QUFDdEIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyJ9
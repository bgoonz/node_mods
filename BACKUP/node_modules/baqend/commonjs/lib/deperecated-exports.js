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
exports.connect = exports.configure = void 0;
var binding = __importStar(require("./binding"));
var connector = __importStar(require("./connector"));
var error = __importStar(require("./error"));
var message = __importStar(require("./message"));
var util = __importStar(require("./util"));
var caching = __importStar(require("./caching"));
var query = __importStar(require("./query"));
var partialupdate = __importStar(require("./partialupdate"));
var intersection = __importStar(require("./intersection"));
var metamodel = __importStar(require("./metamodel"));
var intersection_1 = require("./intersection");
var metamodel_1 = require("./metamodel");
var EntityManagerFactory_1 = require("./EntityManagerFactory");
var EntityManager_1 = require("./EntityManager");
var Acl_1 = require("./Acl");
var baqend_1 = require("./baqend");
var util_1 = require("./util");
function deprecateExports(target, targetName, newImportSignature, exports) {
    Object.keys(exports).forEach(function (exported) {
        var decorate = util_1.deprecated(newImportSignature.replace('$export', exported));
        Object.defineProperty(target, exported, decorate(targetName, exported, {
            get: function () {
                return exports[exported];
            },
        }));
    });
}
deprecateExports(util, 'util', 'intersection.$export', {
    Permission: intersection_1.Permission, Metadata: intersection_1.Metadata, TokenStorage: intersection_1.TokenStorage, Validator: intersection_1.Validator, PushMessage: intersection_1.PushMessage, Code: intersection_1.Code, Modules: intersection_1.Modules, Logger: intersection_1.Logger,
});
deprecateExports(EntityManager_1.EntityManager.prototype, 'db', 'import { $export } from \'baqend\'', {
    db: baqend_1.db,
    binding: binding,
    connector: connector,
    error: error,
    message: message,
    util: util,
    caching: caching,
    query: query,
    partialupdate: partialupdate,
    intersection: intersection,
    EntityManagerFactory: EntityManagerFactory_1.EntityManagerFactory,
    EntityManager: EntityManager_1.EntityManager,
    Acl: Acl_1.Acl,
});
deprecateExports(metamodel_1.Metamodel.prototype, 'metamodel', 'import { metamodel } from \'baqend\';', metamodel);
function configure() {
    throw new Error('Please use Baqend.db.configure() or import { db } from \'baqend\' instead.');
}
exports.configure = configure;
function connect() {
    throw new Error('Please use Baqend.db.connect() or import { db } from \'baqend\' instead.');
}
exports.connect = connect;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVwZXJlY2F0ZWQtZXhwb3J0cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2xpYi9kZXBlcmVjYXRlZC1leHBvcnRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpREFBcUM7QUFDckMscURBQXlDO0FBQ3pDLDZDQUFpQztBQUNqQyxpREFBcUM7QUFDckMsMkNBQStCO0FBQy9CLGlEQUFxQztBQUNyQyw2Q0FBaUM7QUFDakMsNkRBQWlEO0FBQ2pELDJEQUErQztBQUMvQyxxREFBeUM7QUFFekMsK0NBRXdCO0FBQ3hCLHlDQUF3QztBQUN4QywrREFBOEQ7QUFDOUQsaURBQWdEO0FBQ2hELDZCQUE0QjtBQUU1QixtQ0FBOEI7QUFDOUIsK0JBQW9DO0FBRXBDLFNBQVMsZ0JBQWdCLENBQUMsTUFBYyxFQUFFLFVBQWtCLEVBQUUsa0JBQTBCLEVBQUUsT0FFekY7SUFDQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFDLFFBQVE7UUFDcEMsSUFBTSxRQUFRLEdBQUcsaUJBQVUsQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDN0UsTUFBTSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQyxVQUFVLEVBQUUsUUFBUSxFQUFFO1lBQ3JFLEdBQUcsRUFBSDtnQkFDRSxPQUFRLE9BQWUsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNwQyxDQUFDO1NBQ0YsQ0FBQyxDQUFDLENBQUM7SUFDTixDQUFDLENBQUMsQ0FBQztBQUNMLENBQUM7QUFFRCxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLHNCQUFzQixFQUFFO0lBQ3JELFVBQVUsMkJBQUEsRUFBRSxRQUFRLHlCQUFBLEVBQUUsWUFBWSw2QkFBQSxFQUFFLFNBQVMsMEJBQUEsRUFBRSxXQUFXLDRCQUFBLEVBQUUsSUFBSSxxQkFBQSxFQUFFLE9BQU8sd0JBQUEsRUFBRSxNQUFNLHVCQUFBO0NBQ2xGLENBQUMsQ0FBQztBQUVILGdCQUFnQixDQUFDLDZCQUFhLENBQUMsU0FBUyxFQUFFLElBQUksRUFBRSxvQ0FBb0MsRUFBRTtJQUNwRixFQUFFLGFBQUE7SUFDRixPQUFPLFNBQUE7SUFDUCxTQUFTLFdBQUE7SUFDVCxLQUFLLE9BQUE7SUFDTCxPQUFPLFNBQUE7SUFDUCxJQUFJLE1BQUE7SUFDSixPQUFPLFNBQUE7SUFDUCxLQUFLLE9BQUE7SUFDTCxhQUFhLGVBQUE7SUFDYixZQUFZLGNBQUE7SUFFWixvQkFBb0IsNkNBQUE7SUFDcEIsYUFBYSwrQkFBQTtJQUNiLEdBQUcsV0FBQTtDQUNKLENBQUMsQ0FBQztBQUVILGdCQUFnQixDQUFDLHFCQUFTLENBQUMsU0FBUyxFQUFFLFdBQVcsRUFBRSx1Q0FBdUMsRUFBRSxTQUFTLENBQUMsQ0FBQztBQUV2RyxTQUFnQixTQUFTO0lBQ3ZCLE1BQU0sSUFBSSxLQUFLLENBQUMsNEVBQTRFLENBQUMsQ0FBQztBQUNoRyxDQUFDO0FBRkQsOEJBRUM7QUFFRCxTQUFnQixPQUFPO0lBQ3JCLE1BQU0sSUFBSSxLQUFLLENBQUMsMEVBQTBFLENBQUMsQ0FBQztBQUM5RixDQUFDO0FBRkQsMEJBRUMifQ==
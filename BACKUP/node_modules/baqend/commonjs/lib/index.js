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
exports.Map = exports.List = exports.Set = exports.configure = exports.connect = exports.db = exports.GeoPoint = exports.Acl = exports.EntityManager = exports.EntityManagerFactory = exports.model = exports.partialupdate = exports.query = exports.caching = exports.intersection = exports.util = exports.metamodel = exports.message = exports.error = exports.connector = exports.binding = void 0;
var baqend_1 = require("./baqend");
exports.binding = __importStar(require("./binding"));
exports.connector = __importStar(require("./connector"));
exports.error = __importStar(require("./error"));
exports.message = __importStar(require("./message"));
exports.metamodel = __importStar(require("./metamodel"));
exports.util = __importStar(require("./util"));
exports.intersection = __importStar(require("./intersection"));
exports.caching = __importStar(require("./caching"));
exports.query = __importStar(require("./query"));
exports.partialupdate = __importStar(require("./partialupdate"));
exports.model = __importStar(require("./model"));
var EntityManagerFactory_1 = require("./EntityManagerFactory");
Object.defineProperty(exports, "EntityManagerFactory", { enumerable: true, get: function () { return EntityManagerFactory_1.EntityManagerFactory; } });
var EntityManager_1 = require("./EntityManager");
Object.defineProperty(exports, "EntityManager", { enumerable: true, get: function () { return EntityManager_1.EntityManager; } });
var Acl_1 = require("./Acl");
Object.defineProperty(exports, "Acl", { enumerable: true, get: function () { return Acl_1.Acl; } });
var GeoPoint_1 = require("./GeoPoint");
Object.defineProperty(exports, "GeoPoint", { enumerable: true, get: function () { return GeoPoint_1.GeoPoint; } });
var baqend_2 = require("./baqend");
Object.defineProperty(exports, "db", { enumerable: true, get: function () { return baqend_2.db; } });
var deperecated_exports_1 = require("./deperecated-exports");
Object.defineProperty(exports, "connect", { enumerable: true, get: function () { return deperecated_exports_1.connect; } });
Object.defineProperty(exports, "configure", { enumerable: true, get: function () { return deperecated_exports_1.configure; } });
var SetType = Set;
exports.Set = SetType;
var MapType = Map;
exports.Map = MapType;
var ListType = Array;
exports.List = ListType;
// Use one global default export of this module
// eslint-disable-next-line import/no-default-export
exports.default = baqend_1.db;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9saWIvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG1DQUE4QjtBQUU5QixxREFBcUM7QUFDckMseURBQXlDO0FBQ3pDLGlEQUFpQztBQUNqQyxxREFBcUM7QUFDckMseURBQXlDO0FBQ3pDLCtDQUErQjtBQUMvQiwrREFBK0M7QUFDL0MscURBQXFDO0FBQ3JDLGlEQUFpQztBQUNqQyxpRUFBaUQ7QUFDakQsaURBQWlDO0FBRWpDLCtEQUEyRTtBQUFsRSw0SEFBQSxvQkFBb0IsT0FBQTtBQUM3QixpREFBZ0Q7QUFBdkMsOEdBQUEsYUFBYSxPQUFBO0FBQ3RCLDZCQUE0QjtBQUFuQiwwRkFBQSxHQUFHLE9BQUE7QUFDWix1Q0FBc0M7QUFBN0Isb0dBQUEsUUFBUSxPQUFBO0FBQ2pCLG1DQUFzQztBQUE3Qiw0RkFBQSxFQUFFLE9BQUE7QUFDWCw2REFBMkQ7QUFBbEQsOEdBQUEsT0FBTyxPQUFBO0FBQUUsZ0hBQUEsU0FBUyxPQUFBO0FBRTNCLElBQU0sT0FBTyxHQUFHLEdBQUcsQ0FBQztBQUlBLHNCQUFHO0FBSHZCLElBQU0sT0FBTyxHQUFHLEdBQUcsQ0FBQztBQUdrQyxzQkFBRztBQUZ6RCxJQUFNLFFBQVEsR0FBRyxLQUFLLENBQUM7QUFFYyx3QkFBSTtBQUV6QywrQ0FBK0M7QUFDL0Msb0RBQW9EO0FBQ3BELGtCQUFlLFdBQUUsQ0FBQyJ9
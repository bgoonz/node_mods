/*!
* Baqend JavaScript SDK 3.1.4
* https://www.baqend.com
*
* Copyright (c) 2021 Baqend GmbH
*
* Includes:
* uuid - https://github.com/uuidjs/uuid
* Copyright (c) 2010-2020 Robert Kieffer and other contributors
*
* Released under the MIT license
*
* Date: Wed, 21 Jul 2021 10:40:13 GMT
*/

(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory((function webpackLoadOptionalExternalModule() { try { return require("rxjs"); } catch(e) {} }()), (function webpackLoadOptionalExternalModule() { try { return require("validator"); } catch(e) {} }()));
	else if(typeof define === 'function' && define.amd)
		define("Baqend", ["rxjs", "validator"], factory);
	else if(typeof exports === 'object')
		exports["Baqend"] = factory((function webpackLoadOptionalExternalModule() { try { return require("rxjs"); } catch(e) {} }()), (function webpackLoadOptionalExternalModule() { try { return require("validator"); } catch(e) {} }()));
	else
		root["Baqend"] = factory(root["rxjs"], root["validator"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__86__, __WEBPACK_EXTERNAL_MODULE__89__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 67);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArray", function() { return __spreadArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});

function __exportStar(m, o) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

/** @deprecated */
function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

/** @deprecated */
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || from);
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.WebStorage = exports.GlobalStorage = exports.TokenStorage = exports.PushMessage = exports.Logger = exports.Modules = exports.Code = exports.ValidationResult = exports.Validator = exports.Permission = exports.MetadataState = exports.Metadata = void 0;
var Metadata_1 = __webpack_require__(88);
Object.defineProperty(exports, "Metadata", { enumerable: true, get: function () { return Metadata_1.Metadata; } });
Object.defineProperty(exports, "MetadataState", { enumerable: true, get: function () { return Metadata_1.MetadataState; } });
var Permission_1 = __webpack_require__(49);
Object.defineProperty(exports, "Permission", { enumerable: true, get: function () { return Permission_1.Permission; } });
var Validator_1 = __webpack_require__(50);
Object.defineProperty(exports, "Validator", { enumerable: true, get: function () { return Validator_1.Validator; } });
var ValidationResult_1 = __webpack_require__(90);
Object.defineProperty(exports, "ValidationResult", { enumerable: true, get: function () { return ValidationResult_1.ValidationResult; } });
var Code_1 = __webpack_require__(91);
Object.defineProperty(exports, "Code", { enumerable: true, get: function () { return Code_1.Code; } });
var Modules_1 = __webpack_require__(92);
Object.defineProperty(exports, "Modules", { enumerable: true, get: function () { return Modules_1.Modules; } });
var Logger_1 = __webpack_require__(93);
Object.defineProperty(exports, "Logger", { enumerable: true, get: function () { return Logger_1.Logger; } });
var PushMessage_1 = __webpack_require__(94);
Object.defineProperty(exports, "PushMessage", { enumerable: true, get: function () { return PushMessage_1.PushMessage; } });
var TokenStorage_1 = __webpack_require__(28);
Object.defineProperty(exports, "TokenStorage", { enumerable: true, get: function () { return TokenStorage_1.TokenStorage; } });
var GlobalStorage_1 = __webpack_require__(95);
Object.defineProperty(exports, "GlobalStorage", { enumerable: true, get: function () { return GlobalStorage_1.GlobalStorage; } });
var WebStorage_1 = __webpack_require__(96);
Object.defineProperty(exports, "WebStorage", { enumerable: true, get: function () { return WebStorage_1.WebStorage; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx1Q0FBbUU7QUFBMUQsb0dBQUEsUUFBUSxPQUFBO0FBQUUseUdBQUEsYUFBYSxPQUFBO0FBQ2hDLDJDQUF5RDtBQUFoRCx3R0FBQSxVQUFVLE9BQUE7QUFDbkIseUNBQXdDO0FBQS9CLHNHQUFBLFNBQVMsT0FBQTtBQUNsQix1REFBc0Q7QUFBN0Msb0hBQUEsZ0JBQWdCLE9BQUE7QUFDekIsK0JBQThCO0FBQXJCLDRGQUFBLElBQUksT0FBQTtBQUNiLHFDQUFvQztBQUEzQixrR0FBQSxPQUFPLE9BQUE7QUFDaEIsbUNBQWtDO0FBQXpCLGdHQUFBLE1BQU0sT0FBQTtBQUNmLDZDQUFnRTtBQUF2RCwwR0FBQSxXQUFXLE9BQUE7QUFDcEIsK0NBQThFO0FBQWhELDRHQUFBLFlBQVksT0FBQTtBQUMxQyxpREFBZ0Q7QUFBdkMsOEdBQUEsYUFBYSxPQUFBO0FBQ3RCLDJDQUEwQztBQUFqQyx3R0FBQSxVQUFVLE9BQUEifQ==

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Logout = exports.ValidateUser = exports.Me = exports.Register = exports.Login = exports.UpdateField = exports.UpdatePartially = exports.CommitTransaction = exports.NewTransaction = exports.GetQueryParameters = exports.RunQuery = exports.GetQueryCode = exports.ListThisQueryResources = exports.CreateQuery = exports.ListQueryResources = exports.AdhocCountQueryPOST = exports.AdhocCountQuery = exports.AdhocQueryPOST = exports.AdhocQuery = exports.DeleteSchema = exports.ReplaceSchema = exports.UpdateSchema = exports.GetSchema = exports.ReplaceAllSchemas = exports.UpdateAllSchemas = exports.GetAllSchemas = exports.DeleteObject = exports.ReplaceObject = exports.GetObject = exports.CreateObject = exports.TruncateBucket = exports.ImportBucket = exports.ExportBucket = exports.GetBucketIds = exports.GetBucketNames = exports.UnbanIp = exports.Unban = exports.Banned = exports.BannedIp = exports.EventsUrl = exports.Status = exports.Connect = exports.UpdateOrestesConfig = exports.GetOrestesConfig = exports.DeleteBloomFilter = exports.GetBloomFilterExpirations = exports.GetBloomFilter = exports.Specification = exports.ApiVersion = exports.ListAllResources = void 0;
exports.Beacon = exports.SW = exports.Install = exports.UploadAPNSCertificate = exports.GCMAKey = exports.VAPIDPublicKey = exports.VAPIDKeys = exports.DeviceRegistered = exports.DevicePush = exports.DeviceRegister = exports.DropAllIndexes = exports.CreateDropIndex = exports.ListIndexes = exports.CleanUpStorage = exports.CleanUpAssets = exports.GetAllRevalidationStatus = exports.CancelRevalidation = exports.GetRevalidationStatus = exports.RevalidateAssets = exports.DownloadAsset = exports.CreateManifest = exports.DeleteFile = exports.UpdateFileMetadata = exports.GetFileMetadata = exports.UploadFile = exports.DownloadFile = exports.CreateFile = exports.DeleteFileBucket = exports.SetFileBucketMetadata = exports.GetFileBucketMetadata = exports.UploadPatchArchive = exports.DownloadArchive = exports.ListBuckets = exports.ListFiles = exports.GetAllModules = exports.GetBaqendModule = exports.PostBaqendModule = exports.DeleteBaqendCode = exports.SetBaqendCode = exports.GetBaqendCode = exports.RevokeUserToken = exports.UserToken = exports.OAuth1 = exports.OAuth2 = exports.VerifyUsername = exports.ChangeUsername = exports.Verify = exports.ResetPassword = exports.NewPassword = void 0;
/* DO NOT TOUCH THIS AUTO-GENERATED FILE */
/* eslint-disable max-len,@typescript-eslint/no-redeclare */
var connector_1 = __webpack_require__(6);
exports.ListAllResources = connector_1.Message.create({
    method: 'GET',
    path: '/',
    status: [200],
});
exports.ApiVersion = connector_1.Message.create({
    method: 'GET',
    path: '/version',
    status: [200],
});
exports.Specification = connector_1.Message.create({
    method: 'GET',
    path: '/spec',
    status: [200],
});
exports.GetBloomFilter = connector_1.Message.create({
    method: 'GET',
    path: '/bloomfilter?rules=false',
    status: [200],
});
exports.GetBloomFilterExpirations = connector_1.Message.create({
    method: 'GET',
    path: '/bloomfilter/expirations',
    status: [200],
});
exports.DeleteBloomFilter = connector_1.Message.create({
    method: 'DELETE',
    path: '/bloomfilter?flush=true',
    status: [204],
});
exports.GetOrestesConfig = connector_1.Message.create({
    method: 'GET',
    path: '/config',
    status: [200],
});
exports.UpdateOrestesConfig = connector_1.Message.create({
    method: 'PUT',
    path: '/config',
    status: [200, 202],
});
exports.Connect = connector_1.Message.create({
    method: 'GET',
    path: '/connect',
    status: [200],
});
exports.Status = connector_1.Message.create({
    method: 'GET',
    path: '/status',
    status: [200],
});
exports.EventsUrl = connector_1.Message.create({
    method: 'GET',
    path: '/events-url',
    status: [200],
});
exports.BannedIp = connector_1.Message.create({
    method: 'GET',
    path: '/banned/:ip',
    status: [204],
});
exports.Banned = connector_1.Message.create({
    method: 'GET',
    path: '/banned',
    status: [],
});
exports.Unban = connector_1.Message.create({
    method: 'DELETE',
    path: '/banned',
    status: [204],
});
exports.UnbanIp = connector_1.Message.create({
    method: 'DELETE',
    path: '/banned/:ip',
    status: [204],
});
exports.GetBucketNames = connector_1.Message.create({
    method: 'GET',
    path: '/db',
    status: [200],
});
exports.GetBucketIds = connector_1.Message.create({
    method: 'GET',
    path: '/db/:bucket/ids?start=0&count=-1',
    status: [200],
});
exports.ExportBucket = connector_1.Message.create({
    method: 'GET',
    path: '/db/:bucket',
    status: [200],
});
exports.ImportBucket = connector_1.Message.create({
    method: 'PUT',
    path: '/db/:bucket',
    status: [200],
});
exports.TruncateBucket = connector_1.Message.create({
    method: 'DELETE',
    path: '/db/:bucket',
    status: [200],
});
exports.CreateObject = connector_1.Message.create({
    method: 'POST',
    path: '/db/:bucket',
    status: [201, 202],
});
exports.GetObject = connector_1.Message.create({
    method: 'GET',
    path: '/db/:bucket/:oid',
    status: [200, 304],
});
exports.ReplaceObject = connector_1.Message.create({
    method: 'PUT',
    path: '/db/:bucket/:oid',
    status: [200, 202],
});
exports.DeleteObject = connector_1.Message.create({
    method: 'DELETE',
    path: '/db/:bucket/:oid',
    status: [202, 204],
});
exports.GetAllSchemas = connector_1.Message.create({
    method: 'GET',
    path: '/schema',
    status: [200],
});
exports.UpdateAllSchemas = connector_1.Message.create({
    method: 'POST',
    path: '/schema',
    status: [200],
});
exports.ReplaceAllSchemas = connector_1.Message.create({
    method: 'PUT',
    path: '/schema',
    status: [200],
});
exports.GetSchema = connector_1.Message.create({
    method: 'GET',
    path: '/schema/:bucket',
    status: [200],
});
exports.UpdateSchema = connector_1.Message.create({
    method: 'POST',
    path: '/schema/:bucket',
    status: [200],
});
exports.ReplaceSchema = connector_1.Message.create({
    method: 'PUT',
    path: '/schema/:bucket',
    status: [200],
});
exports.DeleteSchema = connector_1.Message.create({
    method: 'DELETE',
    path: '/schema/:bucket',
    status: [204],
});
exports.AdhocQuery = connector_1.Message.create({
    method: 'GET',
    path: '/db/:bucket/query?q&start=0&count=-1&sort=&eager=&hinted=',
    status: [200],
});
exports.AdhocQueryPOST = connector_1.Message.create({
    method: 'POST',
    path: '/db/:bucket/query?start=0&count=-1&sort=',
    status: [200],
});
exports.AdhocCountQuery = connector_1.Message.create({
    method: 'GET',
    path: '/db/:bucket/count?q',
    status: [200],
});
exports.AdhocCountQueryPOST = connector_1.Message.create({
    method: 'POST',
    path: '/db/:bucket/count',
    status: [200],
});
exports.ListQueryResources = connector_1.Message.create({
    method: 'GET',
    path: '/query',
    status: [200],
});
exports.CreateQuery = connector_1.Message.create({
    method: 'POST',
    path: '/query',
    status: [201],
});
exports.ListThisQueryResources = connector_1.Message.create({
    method: 'GET',
    path: '/query/:qid',
    status: [200],
});
exports.GetQueryCode = connector_1.Message.create({
    method: 'GET',
    path: '/query/:qid/source',
    status: [200],
});
exports.RunQuery = connector_1.Message.create({
    method: 'GET',
    path: '/query/:qid/result?start=0&count=-1',
    status: [200],
});
exports.GetQueryParameters = connector_1.Message.create({
    method: 'GET',
    path: '/query/:qid/parameters',
    status: [200],
});
exports.NewTransaction = connector_1.Message.create({
    method: 'POST',
    path: '/transaction',
    status: [201],
});
exports.CommitTransaction = connector_1.Message.create({
    method: 'PUT',
    path: '/transaction/:tid/committed',
    status: [200],
});
exports.UpdatePartially = connector_1.Message.create({
    method: 'POST',
    path: '/db/:bucket/:oid',
    status: [200],
});
exports.UpdateField = connector_1.Message.create({
    method: 'POST',
    path: '/db/:bucket/:oid/:field',
    status: [200],
});
exports.Login = connector_1.Message.create({
    method: 'POST',
    path: '/db/User/login',
    status: [200],
});
exports.Register = connector_1.Message.create({
    method: 'POST',
    path: '/db/User/register',
    status: [200, 204],
});
exports.Me = connector_1.Message.create({
    method: 'GET',
    path: '/db/User/me',
    status: [200],
});
exports.ValidateUser = connector_1.Message.create({
    method: 'GET',
    path: '/db/User/validate',
    status: [200],
});
exports.Logout = connector_1.Message.create({
    method: 'GET',
    path: '/db/User/logout',
    status: [204],
});
exports.NewPassword = connector_1.Message.create({
    method: 'POST',
    path: '/db/User/password',
    status: [200],
});
exports.ResetPassword = connector_1.Message.create({
    method: 'POST',
    path: '/db/User/reset',
    status: [200],
});
exports.Verify = connector_1.Message.create({
    method: 'GET',
    path: '/db/User/verify?token=',
    status: [204],
});
exports.ChangeUsername = connector_1.Message.create({
    method: 'POST',
    path: '/db/User/changeUsername',
    status: [204],
});
exports.VerifyUsername = connector_1.Message.create({
    method: 'GET',
    path: '/db/User/verifyUsername?token=',
    status: [204],
});
exports.OAuth2 = connector_1.Message.create({
    method: 'GET',
    path: '/db/User/OAuth/:provider?device_code=&state=&code=&oauth_verifier=&oauth_token=&error_description=',
    status: [200],
});
exports.OAuth1 = connector_1.Message.create({
    method: 'GET',
    path: '/db/User/OAuth1/:provider',
    status: [200],
});
exports.UserToken = connector_1.Message.create({
    method: 'POST',
    path: '/db/User/:oid/token',
    status: [200],
});
exports.RevokeUserToken = connector_1.Message.create({
    method: 'DELETE',
    path: '/db/User/:oid/token',
    status: [204],
});
exports.GetBaqendCode = connector_1.Message.create({
    method: 'GET',
    path: '/code/:bucket/:type',
    status: [200],
});
exports.SetBaqendCode = connector_1.Message.create({
    method: 'PUT',
    path: '/code/:bucket/:type',
    status: [200, 202],
});
exports.DeleteBaqendCode = connector_1.Message.create({
    method: 'DELETE',
    path: '/code/:bucket/:type',
    status: [202, 204],
});
exports.PostBaqendModule = connector_1.Message.create({
    method: 'POST',
    path: '/code/:bucket',
    status: [200, 204],
});
exports.GetBaqendModule = connector_1.Message.create({
    method: 'GET',
    path: '/code/:bucket',
    status: [200, 204],
});
exports.GetAllModules = connector_1.Message.create({
    method: 'GET',
    path: '/code',
    status: [200],
});
exports.ListFiles = connector_1.Message.create({
    method: 'GET',
    path: '/file/:bucket/ids?path=/&start=&count=-1&deep=false',
    status: [200],
});
exports.ListBuckets = connector_1.Message.create({
    method: 'GET',
    path: '/file/buckets',
    status: [200],
});
exports.DownloadArchive = connector_1.Message.create({
    method: 'GET',
    path: '/file',
    status: [200],
});
exports.UploadPatchArchive = connector_1.Message.create({
    method: 'POST',
    path: '/file',
    status: [200],
});
exports.GetFileBucketMetadata = connector_1.Message.create({
    method: 'GET',
    path: '/file/:bucket',
    status: [200],
});
exports.SetFileBucketMetadata = connector_1.Message.create({
    method: 'PUT',
    path: '/file/:bucket',
    status: [204],
});
exports.DeleteFileBucket = connector_1.Message.create({
    method: 'DELETE',
    path: '/file/:bucket',
    status: [204],
});
exports.CreateFile = connector_1.Message.create({
    method: 'POST',
    path: '/file/:bucket',
    status: [200],
});
exports.DownloadFile = connector_1.Message.create({
    method: 'GET',
    path: '/file/:bucket/*oid',
    status: [200, 304],
});
exports.UploadFile = connector_1.Message.create({
    method: 'PUT',
    path: '/file/:bucket/*oid',
    status: [200],
});
exports.GetFileMetadata = connector_1.Message.create({
    method: 'HEAD',
    path: '/file/:bucket/*oid',
    status: [200],
});
exports.UpdateFileMetadata = connector_1.Message.create({
    method: 'POST',
    path: '/file/:bucket/*oid',
    status: [200],
});
exports.DeleteFile = connector_1.Message.create({
    method: 'DELETE',
    path: '/file/:bucket/*oid',
    status: [200, 204],
});
exports.CreateManifest = connector_1.Message.create({
    method: 'POST',
    path: '/pwa/manifest',
    status: [202],
});
exports.DownloadAsset = connector_1.Message.create({
    method: 'GET',
    path: '/asset/*url',
    status: [200, 304],
});
exports.RevalidateAssets = connector_1.Message.create({
    method: 'POST',
    path: '/asset/revalidate',
    status: [202],
});
exports.GetRevalidationStatus = connector_1.Message.create({
    method: 'GET',
    path: '/asset/revalidate/:id',
    status: [200, 202],
});
exports.CancelRevalidation = connector_1.Message.create({
    method: 'DELETE',
    path: '/asset/revalidate/:id',
    status: [202],
});
exports.GetAllRevalidationStatus = connector_1.Message.create({
    method: 'GET',
    path: '/asset/revalidate?state=',
    status: [200],
});
exports.CleanUpAssets = connector_1.Message.create({
    method: 'POST',
    path: '/asset/cleanup',
    status: [202],
});
exports.CleanUpStorage = connector_1.Message.create({
    method: 'POST',
    path: '/asset/cleanup/storage',
    status: [202],
});
exports.ListIndexes = connector_1.Message.create({
    method: 'GET',
    path: '/index/:bucket',
    status: [200],
});
exports.CreateDropIndex = connector_1.Message.create({
    method: 'POST',
    path: '/index/:bucket',
    status: [202],
});
exports.DropAllIndexes = connector_1.Message.create({
    method: 'DELETE',
    path: '/index/:bucket',
    status: [202],
});
exports.DeviceRegister = connector_1.Message.create({
    method: 'POST',
    path: '/db/Device/register',
    status: [200],
});
exports.DevicePush = connector_1.Message.create({
    method: 'POST',
    path: '/db/Device/push',
    status: [204],
});
exports.DeviceRegistered = connector_1.Message.create({
    method: 'GET',
    path: '/db/Device/registered',
    status: [200],
});
exports.VAPIDKeys = connector_1.Message.create({
    method: 'POST',
    path: '/config/VAPIDKeys',
    status: [200],
});
exports.VAPIDPublicKey = connector_1.Message.create({
    method: 'GET',
    path: '/config/VAPIDPublicKey',
    status: [200],
});
exports.GCMAKey = connector_1.Message.create({
    method: 'POST',
    path: '/config/GCMKey',
    status: [204],
});
exports.UploadAPNSCertificate = connector_1.Message.create({
    method: 'POST',
    path: '/config/APNSCert',
    status: [204],
});
exports.Install = connector_1.Message.create({
    method: 'GET',
    path: '/speedkit?d=',
    status: [200],
});
exports.SW = connector_1.Message.create({
    method: 'GET',
    path: '/speedkit?r=&v=',
    status: [200],
});
exports.Beacon = connector_1.Message.create({
    method: 'POST',
    path: '/rum/pi',
    status: [200],
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1lc3NhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLDJDQUEyQztBQUMzQyw0REFBNEQ7QUFDNUQseUNBQXNDO0FBU3pCLFFBQUEsZ0JBQWdCLEdBQUcsbUJBQU8sQ0FBQyxNQUFNLENBQW1CO0lBQy9ELE1BQU0sRUFBRSxLQUFLO0lBQ2IsSUFBSSxFQUFFLEdBQUc7SUFDVCxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUM7Q0FDZCxDQUFDLENBQUM7QUFRVSxRQUFBLFVBQVUsR0FBRyxtQkFBTyxDQUFDLE1BQU0sQ0FBYTtJQUNuRCxNQUFNLEVBQUUsS0FBSztJQUNiLElBQUksRUFBRSxVQUFVO0lBQ2hCLE1BQU0sRUFBRSxDQUFDLEdBQUcsQ0FBQztDQUNkLENBQUMsQ0FBQztBQVFVLFFBQUEsYUFBYSxHQUFHLG1CQUFPLENBQUMsTUFBTSxDQUFnQjtJQUN6RCxNQUFNLEVBQUUsS0FBSztJQUNiLElBQUksRUFBRSxPQUFPO0lBQ2IsTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDO0NBQ2QsQ0FBQyxDQUFDO0FBVVUsUUFBQSxjQUFjLEdBQUcsbUJBQU8sQ0FBQyxNQUFNLENBQWlCO0lBQzNELE1BQU0sRUFBRSxLQUFLO0lBQ2IsSUFBSSxFQUFFLDBCQUEwQjtJQUNoQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUM7Q0FDZCxDQUFDLENBQUM7QUFRVSxRQUFBLHlCQUF5QixHQUFHLG1CQUFPLENBQUMsTUFBTSxDQUE0QjtJQUNqRixNQUFNLEVBQUUsS0FBSztJQUNiLElBQUksRUFBRSwwQkFBMEI7SUFDaEMsTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDO0NBQ2QsQ0FBQyxDQUFDO0FBVVUsUUFBQSxpQkFBaUIsR0FBRyxtQkFBTyxDQUFDLE1BQU0sQ0FBb0I7SUFDakUsTUFBTSxFQUFFLFFBQVE7SUFDaEIsSUFBSSxFQUFFLHlCQUF5QjtJQUMvQixNQUFNLEVBQUUsQ0FBQyxH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

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.openWindow = exports.trailingSlashIt = exports.deprecated = exports.uuid = exports.Lockable = exports.hmac = exports.atob = exports.isNode = void 0;
var is_node_1 = __webpack_require__(73);
Object.defineProperty(exports, "isNode", { enumerable: true, get: function () { return is_node_1.isNode; } });
var atob_1 = __webpack_require__(74);
Object.defineProperty(exports, "atob", { enumerable: true, get: function () { return atob_1.atob; } });
var hmac_1 = __webpack_require__(75);
Object.defineProperty(exports, "hmac", { enumerable: true, get: function () { return hmac_1.hmac; } });
var Lockable_1 = __webpack_require__(76);
Object.defineProperty(exports, "Lockable", { enumerable: true, get: function () { return Lockable_1.Lockable; } });
var uuid_1 = __webpack_require__(77);
Object.defineProperty(exports, "uuid", { enumerable: true, get: function () { return uuid_1.uuid; } });
var deprecated_1 = __webpack_require__(79);
Object.defineProperty(exports, "deprecated", { enumerable: true, get: function () { return deprecated_1.deprecated; } });
var trailingSlashIt_1 = __webpack_require__(80);
Object.defineProperty(exports, "trailingSlashIt", { enumerable: true, get: function () { return trailingSlashIt_1.trailingSlashIt; } });
var openWindow_1 = __webpack_require__(81);
Object.defineProperty(exports, "openWindow", { enumerable: true, get: function () { return openWindow_1.openWindow; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxxQ0FBbUM7QUFBMUIsaUdBQUEsTUFBTSxPQUFBO0FBQ2YsK0JBQThCO0FBQXJCLDRGQUFBLElBQUksT0FBQTtBQUNiLCtCQUE4QjtBQUFyQiw0RkFBQSxJQUFJLE9BQUE7QUFDYix1Q0FBc0M7QUFBN0Isb0dBQUEsUUFBUSxPQUFBO0FBQ2pCLCtCQUE4QjtBQUFyQiw0RkFBQSxJQUFJLE9BQUE7QUFLYiwyQ0FBMEM7QUFBakMsd0dBQUEsVUFBVSxPQUFBO0FBQ25CLHFEQUFvRDtBQUEzQyxrSEFBQSxlQUFlLE9BQUE7QUFDeEIsMkNBQTZEO0FBQXBELHdHQUFBLFVBQVUsT0FBQSJ9

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.RollbackError = exports.EntityExistsError = exports.IllegalEntityError = exports.CommunicationError = exports.PersistentError = void 0;
var PersistentError_1 = __webpack_require__(12);
Object.defineProperty(exports, "PersistentError", { enumerable: true, get: function () { return PersistentError_1.PersistentError; } });
var CommunicationError_1 = __webpack_require__(68);
Object.defineProperty(exports, "CommunicationError", { enumerable: true, get: function () { return CommunicationError_1.CommunicationError; } });
var IllegalEntityError_1 = __webpack_require__(69);
Object.defineProperty(exports, "IllegalEntityError", { enumerable: true, get: function () { return IllegalEntityError_1.IllegalEntityError; } });
var EntityExistsError_1 = __webpack_require__(70);
Object.defineProperty(exports, "EntityExistsError", { enumerable: true, get: function () { return EntityExistsError_1.EntityExistsError; } });
var RollbackError_1 = __webpack_require__(71);
Object.defineProperty(exports, "RollbackError", { enumerable: true, get: function () { return RollbackError_1.RollbackError; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxxREFBb0Q7QUFBM0Msa0hBQUEsZUFBZSxPQUFBO0FBQ3hCLDJEQUEwRDtBQUFqRCx3SEFBQSxrQkFBa0IsT0FBQTtBQUMzQiwyREFBMEQ7QUFBakQsd0hBQUEsa0JBQWtCLE9BQUE7QUFDM0IseURBQXdEO0FBQS9DLHNIQUFBLGlCQUFpQixPQUFBO0FBQzFCLGlEQUFnRDtBQUF2Qyw4R0FBQSxhQUFhLE9BQUEifQ==

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.File = exports.User = exports.Role = exports.Entity = exports.Managed = exports.FileFactory = exports.DeviceFactory = exports.UserFactory = exports.LoginOption = exports.EntityFactory = exports.ManagedFactory = exports.Factory = exports.Enhancer = exports.Accessor = void 0;
var Accessor_1 = __webpack_require__(87);
Object.defineProperty(exports, "Accessor", { enumerable: true, get: function () { return Accessor_1.Accessor; } });
var Enhancer_1 = __webpack_require__(26);
Object.defineProperty(exports, "Enhancer", { enumerable: true, get: function () { return Enhancer_1.Enhancer; } });
var Factory_1 = __webpack_require__(27);
Object.defineProperty(exports, "Factory", { enumerable: true, get: function () { return Factory_1.Factory; } });
var ManagedFactory_1 = __webpack_require__(48);
Object.defineProperty(exports, "ManagedFactory", { enumerable: true, get: function () { return ManagedFactory_1.ManagedFactory; } });
var EntityFactory_1 = __webpack_require__(29);
Object.defineProperty(exports, "EntityFactory", { enumerable: true, get: function () { return EntityFactory_1.EntityFactory; } });
var UserFactory_1 = __webpack_require__(97);
Object.defineProperty(exports, "LoginOption", { enumerable: true, get: function () { return UserFactory_1.LoginOption; } });
Object.defineProperty(exports, "UserFactory", { enumerable: true, get: function () { return UserFactory_1.UserFactory; } });
var DeviceFactory_1 = __webpack_require__(98);
Object.defineProperty(exports, "DeviceFactory", { enumerable: true, get: function () { return DeviceFactory_1.DeviceFactory; } });
var FileFactory_1 = __webpack_require__(99);
Object.defineProperty(exports, "FileFactory", { enumerable: true, get: function () { return FileFactory_1.FileFactory; } });
var Managed_1 = __webpack_require__(52);
Object.defineProperty(exports, "Managed", { enumerable: true, get: function () { return Managed_1.Managed; } });
var Entity_1 = __webpack_require__(30);
Object.defineProperty(exports, "Entity", { enumerable: true, get: function () { return Entity_1.Entity; } });
var Role_1 = __webpack_require__(102);
Object.defineProperty(exports, "Role", { enumerable: true, get: function () { return Role_1.Role; } });
var User_1 = __webpack_require__(54);
Object.defineProperty(exports, "User", { enumerable: true, get: function () { return User_1.User; } });
var File_1 = __webpack_require__(51);
Object.defineProperty(exports, "File", { enumerable: true, get: function () { return File_1.File; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx1Q0FBc0M7QUFBN0Isb0dBQUEsUUFBUSxPQUFBO0FBQ2pCLHVDQUFzQztBQUE3QixvR0FBQSxRQUFRLE9BQUE7QUFDakIscUNBQXFEO0FBQTVDLGtHQUFBLE9BQU8sT0FBQTtBQUNoQixtREFBa0Q7QUFBekMsZ0hBQUEsY0FBYyxPQUFBO0FBQ3ZCLGlEQUFnRDtBQUF2Qyw4R0FBQSxhQUFhLE9BQUE7QUFDdEIsNkNBQXVFO0FBQTlELDBHQUFBLFdBQVcsT0FBQTtBQUFFLDBHQUFBLFdBQVcsT0FBQTtBQUNqQyxpREFBZ0Q7QUFBdkMsOEdBQUEsYUFBYSxPQUFBO0FBQ3RCLDZDQUFnRTtBQUFuQywwR0FBQSxXQUFXLE9BQUE7QUFDeEMscUNBQW9DO0FBQTNCLGtHQUFBLE9BQU8sT0FBQTtBQUNoQixtQ0FBa0M7QUFBekIsZ0dBQUEsTUFBTSxPQUFBO0FBQ2YsK0JBQThCO0FBQXJCLDRGQUFBLElBQUksT0FBQTtBQUNiLCtCQUE4QjtBQUFyQiw0RkFBQSxJQUFJLE9BQUE7QUFDYiwrQkFFZ0I7QUFEQSw0RkFBQSxJQUFJLE9BQUEifQ==

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.WebSocketConnector = exports.NodeConnector = exports.IFrameConnector = exports.XMLHttpConnector = exports.FetchConnector = exports.Connector = exports.StatusCode = exports.OAuthMessage = exports.Message = void 0;
var Message_1 = __webpack_require__(39);
Object.defineProperty(exports, "Message", { enumerable: true, get: function () { return Message_1.Message; } });
Object.defineProperty(exports, "OAuthMessage", { enumerable: true, get: function () { return Message_1.OAuthMessage; } });
Object.defineProperty(exports, "StatusCode", { enumerable: true, get: function () { return Message_1.StatusCode; } });
var Connector_1 = __webpack_require__(25);
Object.defineProperty(exports, "Connector", { enumerable: true, get: function () { return Connector_1.Connector; } });
var FetchConnector_1 = __webpack_require__(72);
Object.defineProperty(exports, "FetchConnector", { enumerable: true, get: function () { return FetchConnector_1.FetchConnector; } });
var XMLHttpConnector_1 = __webpack_require__(40);
Object.defineProperty(exports, "XMLHttpConnector", { enumerable: true, get: function () { return XMLHttpConnector_1.XMLHttpConnector; } });
var IFrameConnector_1 = __webpack_require__(82);
Object.defineProperty(exports, "IFrameConnector", { enumerable: true, get: function () { return IFrameConnector_1.IFrameConnector; } });
var NodeConnector_1 = __webpack_require__(83);
Object.defineProperty(exports, "NodeConnector", { enumerable: true, get: function () { return NodeConnector_1.NodeConnector; } });
var WebSocketConnector_1 = __webpack_require__(84);
Object.defineProperty(exports, "WebSocketConnector", { enumerable: true, get: function () { return WebSocketConnector_1.WebSocketConnector; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxxQ0FFbUI7QUFEakIsa0dBQUEsT0FBTyxPQUFBO0FBQUUsdUdBQUEsWUFBWSxPQUFBO0FBQWlDLHFHQUFBLFVBQVUsT0FBQTtBQUVsRSx5Q0FFcUI7QUFEdUMsc0dBQUEsU0FBUyxPQUFBO0FBRXJFLG1EQUFrRDtBQUF6QyxnSEFBQSxjQUFjLE9BQUE7QUFDdkIsdURBQXNEO0FBQTdDLG9IQUFBLGdCQUFnQixPQUFBO0FBQ3pCLHFEQUFvRDtBQUEzQyxrSEFBQSxlQUFlLE9BQUE7QUFDeEIsaURBQWdEO0FBQXZDLDhHQUFBLGFBQWEsT0FBQTtBQUN0QiwyREFBNEY7QUFBbkYsd0hBQUEsa0JBQWtCLE9BQUEifQ==

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

var byteToHex = [];

for (var i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).substr(1));
}

function stringify(arr) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!Object(_validate_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

/* harmony default export */ __webpack_exports__["a"] = (stringify);

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(64);


function validate(uuid) {
  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].test(uuid);
}

/* harmony default export */ __webpack_exports__["a"] = (validate);

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Attribute = exports.PersistentAttributeType = void 0;
var tslib_1 = __webpack_require__(0);
var binding_1 = __webpack_require__(5);
var PersistentAttributeType;
(function (PersistentAttributeType) {
    PersistentAttributeType[PersistentAttributeType["BASIC"] = 0] = "BASIC";
    PersistentAttributeType[PersistentAttributeType["ELEMENT_COLLECTION"] = 1] = "ELEMENT_COLLECTION";
    PersistentAttributeType[PersistentAttributeType["EMBEDDED"] = 2] = "EMBEDDED";
    PersistentAttributeType[PersistentAttributeType["MANY_TO_MANY"] = 3] = "MANY_TO_MANY";
    PersistentAttributeType[PersistentAttributeType["MANY_TO_ONE"] = 4] = "MANY_TO_ONE";
    PersistentAttributeType[PersistentAttributeType["ONE_TO_MANY"] = 5] = "ONE_TO_MANY";
    PersistentAttributeType[PersistentAttributeType["ONE_TO_ONE"] = 6] = "ONE_TO_ONE";
})(PersistentAttributeType = exports.PersistentAttributeType || (exports.PersistentAttributeType = {}));
var ATTACHED_STATE = Symbol('AttachedState');
var ATTACHED_SIZE = Symbol('AttachedSize');
var Attribute = /** @class */ (function () {
    /**
     * @param name The attribute name
     * @param isMetadata <code>true</code> if the attribute is an metadata attribute
     */
    function Attribute(name, isMetadata) {
        this.isId = false;
        this.isVersion = false;
        this.isAcl = false;
        this.order = null;
        this.accessor = null;
        this.declaringType = null;
        this.metadata = null;
        this.isMetadata = !!isMetadata;
        this.name = name;
    }
    Attribute.attachState = function (obj, state, overwriteExistingValue) {
        if (overwriteExistingValue === void 0) { overwriteExistingValue = false; }
        if (state !== undefined && (overwriteExistingValue || obj[ATTACHED_STATE] === undefined)) {
            // ensure that this property is not visible on browsers which do not support Symbols
            Object.defineProperty(obj, ATTACHED_STATE, { value: state, configurable: true });
        }
        return obj[ATTACHED_STATE];
    };
    /**
     * Attach and returns the the given size on the collection, in a meaner that it isn't enumerable
     * @param {Set<*>|Map<*,*>} collection The collection where the size is attached on
     * @param {number} size The size which should be attached, the previously attached size will be
     * returned if omitted
     * @return {number} The actual or new attached size whenever a new size was provided or not
     */
    Attribute.attachSize = function (collection, size) {
        if (size !== undefined) {
            // ensure that this property is not visible on browsers which do not support Symbols
            Object.defineProperty(collection, ATTACHED_SIZE, { value: size, configurable: true });
        }
        return collection[ATTACHED_SIZE] || -1;
    };
    Object.defineProperty(Attribute.prototype, "persistentAttributeType", {
        /**
         * Returns the persistent attribute type
         */
        get: function () {
            return -1;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Attribute.prototype, "isAssociation", {
        /**
         * @type boolean
         * @readonly
         */
        get: function () {
            return this.persistentAttributeType > PersistentAttributeType.EMBEDDED;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Attribute.prototype, "isCollection", {
        get: function () {
            return this.persistentAttributeType === PersistentAttributeType.ELEMENT_COLLECTION;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * @param declaringType The type that owns this attribute
     * @param order Position of the attribute
     * @return
     */
    Attribute.prototype.init = function (declaringType, order) {
        if (this.declaringType) {
            throw new Error('The attribute is already initialized.');
        }
        this.order = order;
        this.accessor = new binding_1.Accessor();
        this.declaringType = declaringType;
    };
    /**
     * @param entity
     * @return
     */
    Attribute.prototype.getValue = function (entity) {
        return this.accessor.getValue(entity, this);
    };
    /**
     * @param entity
     * @param value
     */
    Attribute.prototype.setValue = function (entity, value) {
        this.accessor.setValue(entity, this, value);
    };
    /**
     * Retrieves whether this type has specific metadata
     *
     * @param key
     * @return
     */
    Attribute.prototype.hasMetadata = function (key) {
        return !!this.metadata && key in this.metadata;
    };
    /**
     * Gets some metadata of this type
     *
     * @param key
     * @return
     */
    Attribute.prototype.getMetadata = function (key) {
        if (!this.hasMetadata(key)) {
            return null;
        }
        return this.metadata[key] || null;
    };
    /**
     * Converts this attribute field to json
     * @return The attribute description as json
     */
    Attribute.prototype.toJSON = function () {
        return tslib_1.__assign({ name: this.name, order: this.order }, (this.metadata && { metadata: this.metadata }));
    };
    Attribute.PersistentAttributeType = PersistentAttributeType;
    return Attribute;
}());
exports.Attribute = Attribute;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXR0cmlidXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQXR0cmlidXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxzQ0FBK0M7QUFLL0MsSUFBWSx1QkFRWDtBQVJELFdBQVksdUJBQXVCO0lBQ2pDLHVFQUFTLENBQUE7SUFDVCxpR0FBc0IsQ0FBQTtJQUN0Qiw2RUFBWSxDQUFBO0lBQ1oscUZBQWdCLENBQUE7SUFDaEIsbUZBQWUsQ0FBQTtJQUNmLG1GQUFlLENBQUE7SUFDZixpRkFBYyxDQUFBO0FBQ2hCLENBQUMsRUFSVyx1QkFBdUIsR0FBdkIsK0JBQXVCLEtBQXZCLCtCQUF1QixRQVFsQztBQUVELElBQU0sY0FBYyxHQUFHLE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUMvQyxJQUFNLGFBQWEsR0FBRyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUM7QUFFN0M7SUFrRkU7OztPQUdHO0lBQ0gsbUJBQXNCLElBQVksRUFBRSxVQUFvQjtRQWpGakQsU0FBSSxHQUFHLEtBQUssQ0FBQztRQUViLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFFbEIsVUFBSyxHQUFHLEtBQUssQ0FBQztRQUlkLFVBQUssR0FBa0IsSUFBSSxDQUFDO1FBRTVCLGFBQVEsR0FBb0IsSUFBSSxDQUFDO1FBRWpDLGtCQUFhLEdBQTRCLElBQUksQ0FBQztRQUU5QyxhQUFRLEdBQXNDLElBQUksQ0FBQztRQW9FeEQsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsVUFBVSxDQUFDO1FBQy9CLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ25CLENBQUM7SUFsRE0scUJBQVcsR0FBbEIsVUFBc0IsR0FBb0QsRUFBRSxLQUFTLEVBQ25GLHNCQUF1QztRQUF2Qyx1Q0FBQSxFQUFBLDhCQUF1QztRQUN2QyxJQUFJLEtBQUssS0FBSyxTQUFTLElBQUksQ0FBQyxzQkFBc0IsSUFBSyxHQUFXLENBQUMsY0FBYyxDQUFDLEtBQUssU0FBUyxDQUFD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

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Type = exports.PersistenceType = void 0;
var PersistenceType;
(function (PersistenceType) {
    PersistenceType[PersistenceType["BASIC"] = 0] = "BASIC";
    PersistenceType[PersistenceType["EMBEDDABLE"] = 1] = "EMBEDDABLE";
    PersistenceType[PersistenceType["ENTITY"] = 2] = "ENTITY";
    PersistenceType[PersistenceType["MAPPED_SUPERCLASS"] = 3] = "MAPPED_SUPERCLASS";
})(PersistenceType = exports.PersistenceType || (exports.PersistenceType = {}));
var Type = /** @class */ (function () {
    /**
     * @param ref
     * @param typeConstructor
     */
    function Type(ref, typeConstructor) {
        if (ref.indexOf('/db/') !== 0) {
            throw new SyntaxError("Type ref " + ref + " is invalid.");
        }
        this.ref = ref;
        this.name = ref.substring(4);
        this._typeConstructor = typeConstructor;
    }
    Object.defineProperty(Type.prototype, "persistenceType", {
        /**
         * The persistent type of this type
         */
        get: function () {
            return -1;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Type.prototype, "isBasic", {
        /**
         * @type boolean
         * @readonly
         */
        get: function () {
            return this.persistenceType === PersistenceType.BASIC;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Type.prototype, "isEmbeddable", {
        /**
         * @type boolean
         * @readonly
         */
        get: function () {
            return this.persistenceType === PersistenceType.EMBEDDABLE;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Type.prototype, "isEntity", {
        /**
         * @type boolean
         * @readonly
         */
        get: function () {
            return this.persistenceType === PersistenceType.ENTITY;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Type.prototype, "isMappedSuperclass", {
        /**
         * @type boolean
         * @readonly
         */
        get: function () {
            return this.persistenceType === PersistenceType.MAPPED_SUPERCLASS;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Type.prototype, "typeConstructor", {
        /**
         * The type constructor of this type
         */
        get: function () {
            return this._typeConstructor;
        },
        /**
         * @param typeConstructor - sets the type constructor of this type if it is not already set
         */
        set: function (typeConstructor) {
            if (this._typeConstructor) {
                throw new Error('typeConstructor has already been set.');
            }
            this._typeConstructor = typeConstructor;
        },
        enumerable: false,
        configurable: true
    });
    return Type;
}());
exports.Type = Type;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVHlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlR5cGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBR0EsSUFBWSxlQUtYO0FBTEQsV0FBWSxlQUFlO0lBQ3pCLHVEQUFTLENBQUE7SUFDVCxpRUFBYyxDQUFBO0lBQ2QseURBQVUsQ0FBQTtJQUNWLCtFQUFxQixDQUFBO0FBQ3ZCLENBQUMsRUFMVyxlQUFlLEdBQWYsdUJBQWUsS0FBZix1QkFBZSxRQUsxQjtBQUVEO0lBaUVFOzs7T0FHRztJQUNILGNBQXNCLEdBQVcsRUFBRSxlQUEwQjtRQUMzRCxJQUFJLEdBQUcsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQzdCLE1BQU0sSUFBSSxXQUFXLENBQUMsY0FBWSxHQUFHLGlCQUFjLENBQUMsQ0FBQztTQUN0RDtRQUVELElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ2YsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxlQUFlLENBQUM7SUFDMUMsQ0FBQztJQWpFRCxzQkFBSSxpQ0FBZTtRQUhuQjs7V0FFRzthQUNIO1lBQ0UsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUNaLENBQUM7OztPQUFBO0lBTUQsc0JBQUkseUJBQU87UUFKWDs7O1dBR0c7YUFDSDtZQUNFLE9BQU8sSUFBSSxDQUFDLGVBQWUsS0FBSyxlQUFlLENBQUMsS0FBSyxDQUFDO1FBQ3hELENBQUM7OztPQUFBO0lBTUQsc0JBQUksOEJBQVk7UUFKaEI7OztXQUdHO2FBQ0g7WUFDRSxPQUFPLElBQUksQ0FBQyxlQUFlLEtBQUssZUFBZSxDQUFDLFVBQVUsQ0FBQztRQUM3RCxDQUFDOzs7T0FBQTtJQU1ELHNCQUFJLDBCQUFRO1FBSlo7OztXQUdHO2FBQ0g7WUFDRSxPQUFPLElBQUksQ0FBQyxlQUFlLEtBQUssZUFBZSxDQUFDLE1BQU0sQ0FBQztRQUN6RCxDQUFDOzs7T0FBQTtJQU1ELHNCQUFJLG9DQUFrQjtRQUp0Qjs7O1dBR0c7YUFDSDtZQUNFLE9BQU8sSUFBSSxDQUFDLGVBQWUsS0FBSyxlQUFlLENBQUMsaUJBQWlCLENBQUM7UUFDcEUsQ0FBQzs7O09BQUE7SUFLRCxzQkFBSSxpQ0FBZTtRQUhuQjs7V0FFRzthQUNIO1lBQ0UsT0FBTyxJQUFJLENBQUMsZ0JBQWtCLENBQUM7UUFDakMsQ0FBQztRQUVEOztXQUVHO2FBQ0gsVUFBb0IsZUFBeUI7WUFDM0MsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7Z0JBQ3pCLE1BQU0sSUFBSSxLQUFLLENBQUMsdUNBQXVDLENBQUMsQ0FBQzthQUMxRDtZQUNELElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxlQUFlLENBQUM7UUFDMUMsQ0FBQzs7O09BVkE7SUFzREgsV0FBQztBQUFELENBQUMsQUEzR0QsSUEyR0M7QUEzR3FCLG9CQUFJIn0=

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.PluralAttribute = exports.CollectionType = void 0;
var tslib_1 = __webpack_require__(0);
var Attribute_1 = __webpack_require__(9);
var CollectionType;
(function (CollectionType) {
    CollectionType[CollectionType["COLLECTION"] = 0] = "COLLECTION";
    CollectionType[CollectionType["LIST"] = 1] = "LIST";
    CollectionType[CollectionType["MAP"] = 2] = "MAP";
    CollectionType[CollectionType["SET"] = 3] = "SET";
})(CollectionType = exports.CollectionType || (exports.CollectionType = {}));
var PluralAttribute = /** @class */ (function (_super) {
    tslib_1.__extends(PluralAttribute, _super);
    /**
     * @param name - The attribute name
     * @param typeConstructor - The collection constructor of the attribute
     * @param elementType - The type of the elements of the attribute collection
     */
    function PluralAttribute(name, typeConstructor, elementType) {
        var _this = _super.call(this, name) || this;
        _this.elementType = elementType;
        _this.typeConstructor = typeConstructor;
        return _this;
    }
    Object.defineProperty(PluralAttribute.prototype, "persistentAttributeType", {
        /**
         * @inheritDoc
         */
        get: function () {
            return Attribute_1.PersistentAttributeType.ELEMENT_COLLECTION;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Retrieves a serialized string value of the given json which can be used as object keys
     * @param json The json of which the key should be retrieved
     * @return A serialized version of the json
     */
    PluralAttribute.prototype.keyValue = function (json) {
        if (json && typeof json === 'object' && 'id' in json) {
            return String(json.id);
        }
        return String(json);
    };
    PluralAttribute.CollectionType = CollectionType;
    return PluralAttribute;
}(Attribute_1.Attribute));
exports.PluralAttribute = PluralAttribute;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGx1cmFsQXR0cmlidXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiUGx1cmFsQXR0cmlidXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQSx5Q0FBaUU7QUFFakUsSUFBWSxjQUtYO0FBTEQsV0FBWSxjQUFjO0lBQ3hCLCtEQUFjLENBQUE7SUFDZCxtREFBUSxDQUFBO0lBQ1IsaURBQU8sQ0FBQTtJQUNQLGlEQUFPLENBQUE7QUFDVCxDQUFDLEVBTFcsY0FBYyxHQUFkLHNCQUFjLEtBQWQsc0JBQWMsUUFLekI7QUFFRDtJQUFvRCwyQ0FBWTtJQW1COUQ7Ozs7T0FJRztJQUNILHlCQUFzQixJQUFZLEVBQUUsZUFBeUIsRUFBRSxXQUFvQjtRQUFuRixZQUNFLGtCQUFNLElBQUksQ0FBQyxTQUdaO1FBRkMsS0FBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7UUFDL0IsS0FBSSxDQUFDLGVBQWUsR0FBRyxlQUFlLENBQUM7O0lBQ3pDLENBQUM7SUFiRCxzQkFBSSxvREFBdUI7UUFIM0I7O1dBRUc7YUFDSDtZQUNFLE9BQU8sbUNBQXVCLENBQUMsa0JBQWtCLENBQUM7UUFDcEQsQ0FBQzs7O09BQUE7SUFhRDs7OztPQUlHO0lBQ08sa0NBQVEsR0FBbEIsVUFBbUIsSUFBVTtRQUMzQixJQUFJLElBQUksSUFBSSxPQUFPLElBQUksS0FBSyxRQUFRLElBQUksSUFBSSxJQUFJLElBQUksRUFBRTtZQUNwRCxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDeEI7UUFFRCxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN0QixDQUFDO0lBeENzQiw4QkFBYyxHQUFHLGNBQWMsQ0FBQztJQXlDekQsc0JBQUM7Q0FBQSxBQTFDRCxDQUFvRCxxQkFBUyxHQTBDNUQ7QUExQ3FCLDBDQUFlIn0=

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.PersistentError = void 0;
// eslint-disable-next-line @typescript-eslint/no-redeclare
exports.PersistentError = (function () {
    function PersistentErrorConstructor(message, cause) {
        if (Object.prototype.hasOwnProperty.call(Error, 'captureStackTrace')) {
            Error.captureStackTrace(this, this.constructor);
        }
        else {
            this.stack = (new Error()).stack;
        }
        this.message = (message || 'An unexpected persistent error occurred.');
        this.name = this.constructor.name;
        if (cause) {
            this.cause = cause;
            if (cause.stack) {
                this.stack += "\nCaused By: " + cause.stack;
            }
        }
    }
    // custom errors must be manually extended, since JS Errors can't be super called in a class hierarchy,
    // otherwise the super call destroys the origin 'this' reference
    PersistentErrorConstructor.prototype = Object.create(Error.prototype, {
        constructor: {
            value: PersistentErrorConstructor,
            writable: true,
            enumerable: false,
            configurable: true,
        },
    });
    return PersistentErrorConstructor;
})();
exports.PersistentError.of = function of(error) {
    if (error instanceof exports.PersistentError) {
        return error;
    }
    return new exports.PersistentError(null, error);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGVyc2lzdGVudEVycm9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiUGVyc2lzdGVudEVycm9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQW9DQSwyREFBMkQ7QUFDOUMsUUFBQSxlQUFlLEdBQUcsQ0FBQztJQUM5QixTQUFTLDBCQUEwQixDQUF3QixPQUFzQixFQUFFLEtBQWE7UUFDOUYsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLG1CQUFtQixDQUFDLEVBQUU7WUFDcEUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDakQ7YUFBTTtZQUNMLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxJQUFJLEtBQUssRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDO1NBQ2xDO1FBRUQsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLE9BQU8sSUFBSSwwQ0FBMEMsQ0FBQyxDQUFDO1FBQ3ZFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUM7UUFFbEMsSUFBSSxLQUFLLEVBQUU7WUFDVCxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztZQUNuQixJQUFJLEtBQUssQ0FBQyxLQUFLLEVBQUU7Z0JBQ2YsSUFBSSxDQUFDLEtBQUssSUFBSSxrQkFBZ0IsS0FBSyxDQUFDLEtBQU8sQ0FBQzthQUM3QztTQUNGO0lBQ0gsQ0FBQztJQUVELHVHQUF1RztJQUN2RyxnRUFBZ0U7SUFDaEUsMEJBQTBCLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRTtRQUNwRSxXQUFXLEVBQUU7WUFDWCxLQUFLLEVBQUUsMEJBQTBCO1lBQ2pDLFFBQVEsRUFBRSxJQUFJO1lBQ2QsVUFBVSxFQUFFLEtBQUs7WUFDakIsWUFBWSxFQUFFLElBQUk7U0FDbkI7S0FDRixDQUFDLENBQUM7SUFFSCxPQUFPLDBCQUErRCxDQUFDO0FBQ3pFLENBQUMsQ0FBQyxFQUFFLENBQUM7QUFFTCx1QkFBZSxDQUFDLEVBQUUsR0FBRyxTQUFTLEVBQUUsQ0FBQyxLQUFZO0lBQzNDLElBQUksS0FBSyxZQUFZLHVCQUFlLEVBQUU7UUFDcEMsT0FBTyxLQUFLLENBQUM7S0FDZDtJQUVELE9BQU8sSUFBSSx1QkFBZSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztBQUMxQyxDQUFDLENBQUMifQ==

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.PersistentAttributeType = exports.Attribute = exports.BasicType = exports.CollectionAttribute = exports.EmbeddableType = exports.EntityType = exports.ListAttribute = exports.ManagedType = exports.MapAttribute = exports.ModelBuilder = exports.CollectionType = exports.PluralAttribute = exports.SetAttribute = exports.SingularAttribute = exports.PersistenceType = exports.Type = exports.DbIndex = exports.Metamodel = void 0;
var Metamodel_1 = __webpack_require__(105);
Object.defineProperty(exports, "Metamodel", { enumerable: true, get: function () { return Metamodel_1.Metamodel; } });
var DbIndex_1 = __webpack_require__(63);
Object.defineProperty(exports, "DbIndex", { enumerable: true, get: function () { return DbIndex_1.DbIndex; } });
var Type_1 = __webpack_require__(10);
Object.defineProperty(exports, "Type", { enumerable: true, get: function () { return Type_1.Type; } });
Object.defineProperty(exports, "PersistenceType", { enumerable: true, get: function () { return Type_1.PersistenceType; } });
var SingularAttribute_1 = __webpack_require__(38);
Object.defineProperty(exports, "SingularAttribute", { enumerable: true, get: function () { return SingularAttribute_1.SingularAttribute; } });
var SetAttribute_1 = __webpack_require__(62);
Object.defineProperty(exports, "SetAttribute", { enumerable: true, get: function () { return SetAttribute_1.SetAttribute; } });
var PluralAttribute_1 = __webpack_require__(11);
Object.defineProperty(exports, "PluralAttribute", { enumerable: true, get: function () { return PluralAttribute_1.PluralAttribute; } });
Object.defineProperty(exports, "CollectionType", { enumerable: true, get: function () { return PluralAttribute_1.CollectionType; } });
var ModelBuilder_1 = __webpack_require__(58);
Object.defineProperty(exports, "ModelBuilder", { enumerable: true, get: function () { return ModelBuilder_1.ModelBuilder; } });
var MapAttribute_1 = __webpack_require__(61);
Object.defineProperty(exports, "MapAttribute", { enumerable: true, get: function () { return MapAttribute_1.MapAttribute; } });
var ManagedType_1 = __webpack_require__(19);
Object.defineProperty(exports, "ManagedType", { enumerable: true, get: function () { return ManagedType_1.ManagedType; } });
var ListAttribute_1 = __webpack_require__(60);
Object.defineProperty(exports, "ListAttribute", { enumerable: true, get: function () { return ListAttribute_1.ListAttribute; } });
var EntityType_1 = __webpack_require__(36);
Object.defineProperty(exports, "EntityType", { enumerable: true, get: function () { return EntityType_1.EntityType; } });
var EmbeddableType_1 = __webpack_require__(59);
Object.defineProperty(exports, "EmbeddableType", { enumerable: true, get: function () { return EmbeddableType_1.EmbeddableType; } });
var CollectionAttribute_1 = __webpack_require__(106);
Object.defineProperty(exports, "CollectionAttribute", { enumerable: true, get: function () { return CollectionAttribute_1.CollectionAttribute; } });
var BasicType_1 = __webpack_require__(37);
Object.defineProperty(exports, "BasicType", { enumerable: true, get: function () { return BasicType_1.BasicType; } });
var Attribute_1 = __webpack_require__(9);
Object.defineProperty(exports, "Attribute", { enumerable: true, get: function () { return Attribute_1.Attribute; } });
Object.defineProperty(exports, "PersistentAttributeType", { enumerable: true, get: function () { return Attribute_1.PersistentAttributeType; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx5Q0FBd0M7QUFBL0Isc0dBQUEsU0FBUyxPQUFBO0FBQ2xCLHFDQUFvQztBQUEzQixrR0FBQSxPQUFPLE9BQUE7QUFDaEIsK0JBQStDO0FBQXRDLDRGQUFBLElBQUksT0FBQTtBQUFFLHVHQUFBLGVBQWUsT0FBQTtBQUM5Qix5REFBd0Q7QUFBL0Msc0hBQUEsaUJBQWlCLE9BQUE7QUFDMUIsK0NBQThDO0FBQXJDLDRHQUFBLFlBQVksT0FBQTtBQUNyQixxREFBb0U7QUFBM0Qsa0hBQUEsZUFBZSxPQUFBO0FBQUUsaUhBQUEsY0FBYyxPQUFBO0FBQ3hDLCtDQUE4QztBQUFyQyw0R0FBQSxZQUFZLE9BQUE7QUFDckIsK0NBQThDO0FBQXJDLDRHQUFBLFlBQVksT0FBQTtBQUNyQiw2Q0FBNEM7QUFBbkMsMEdBQUEsV0FBVyxPQUFBO0FBQ3BCLGlEQUFnRDtBQUF2Qyw4R0FBQSxhQUFhLE9BQUE7QUFDdEIsMkNBQTBDO0FBQWpDLHdHQUFBLFVBQVUsT0FBQTtBQUNuQixtREFBa0Q7QUFBekMsZ0hBQUEsY0FBYyxPQUFBO0FBQ3ZCLDZEQUE0RDtBQUFuRCwwSEFBQSxtQkFBbUIsT0FBQTtBQUM1Qix5Q0FBd0M7QUFBL0Isc0dBQUEsU0FBUyxPQUFBO0FBQ2xCLHlDQUFpRTtBQUF4RCxzR0FBQSxTQUFTLE9BQUE7QUFBRSxvSEFBQSx1QkFBdUIsT0FBQSJ9

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
var EntityManagerFactory_1 = __webpack_require__(23);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFxZW5kLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYmFxZW5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLCtEQUE4RDtBQThCakQsUUFBQSxFQUFFLEdBQUcsQ0FBQztJQUNqQixJQUFNLEdBQUcsR0FBRyxJQUFJLDJDQUFvQixFQUFFLENBQUM7SUFDdkMsSUFBTSxFQUFFLEdBQUcsR0FBRyxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBRXpDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFO1FBQ2hCLFNBQVMsRUFBVCxVQUF3QixPQUFPO1lBQzdCLEdBQUcsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDdkIsT0FBTyxJQUFJLENBQUM7UUFDZCxDQUFDO1FBRUQsT0FBTyxFQUFQLFVBQXNCLFNBQWlCLEVBQUUsTUFBMkIsRUFBRSxZQUFrQixFQUFFLFlBQWtCO1lBQzFHLElBQUksTUFBTSxZQUFZLFFBQVEsRUFBRTtnQkFDOUIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFlBQVksQ0FBQyxDQUFDO2FBQ2pFO1lBRUQsR0FBRyxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDL0IsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksRUFBRSxZQUFZLENBQUMsQ0FBQztRQUNoRCxDQUFDO0tBQ2lCLENBQUMsQ0FBQztJQUV0QixPQUFPLEVBQVksQ0FBQztBQUN0QixDQUFDLENBQUMsRUFBRSxDQUFDIn0=

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Acl = void 0;
var Permission_1 = __webpack_require__(49);
/**
 * Creates a new Acl object, with an empty rule set for an object
 */
var Acl = /** @class */ (function () {
    function Acl() {
        /**
         * The read permission of the object
         */
        this.read = new Permission_1.Permission();
        /**
         * The write permission of the object
         */
        this.write = new Permission_1.Permission();
    }
    /**
     * Removes all acl rules, read and write access is public afterwards
     *
     * @return
     * */
    Acl.prototype.clear = function () {
        this.read.clear();
        this.write.clear();
    };
    /**
     * Copies permissions from another ACL
     *
     * @param acl The ACL to copy from
     * @return
     */
    Acl.prototype.copy = function (acl) {
        this.read.copy(acl.read);
        this.write.copy(acl.write);
        return this;
    };
    /**
     * Gets whenever all users and roles have the permission to read the object
     *
     * @return <code>true</code> If public access is allowed
     */
    Acl.prototype.isPublicReadAllowed = function () {
        return this.read.isPublicAllowed();
    };
    /**
     * Sets whenever all users and roles should have the permission to read the object
     *
     * Note: All other allow read rules will be removed.
     *
     * @return
     * */
    Acl.prototype.setPublicReadAllowed = function () {
        return this.read.setPublicAllowed();
    };
    /**
     * Checks whenever the user or role is explicit allowed to read the object
     *
     * @param userOrRole The user or role to check for
     * @return <code>true</code> if read access is explicitly allowed for the given user or role
     */
    Acl.prototype.isReadAllowed = function (userOrRole) {
        return this.read.isAllowed(userOrRole);
    };
    /**
     * Checks whenever the user or role is explicit denied to read the object
     *
     * @param userOrRole The user or role to check for
     * @return <code>true</code> if read access is explicitly denied for the given user or role
     */
    Acl.prototype.isReadDenied = function (userOrRole) {
        return this.read.isDenied(userOrRole);
    };
    /**
     * Allows the given user or rule to read the object
     *
     * @param userOrRole The user or role to allow
     * @return this acl object
     */
    Acl.prototype.allowReadAccess = function () {
        var _a;
        var userOrRole = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            userOrRole[_i] = arguments[_i];
        }
        (_a = this.read).allowAccess.apply(_a, userOrRole);
        return this;
    };
    /**
     * Denies the given user or rule to read the object
     *
     * @param userOrRole The user or role to deny
     * @return this acl object
     */
    Acl.prototype.denyReadAccess = function () {
        var _a;
        var userOrRole = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            userOrRole[_i] = arguments[_i];
        }
        (_a = this.read).denyAccess.apply(_a, userOrRole);
        return this;
    };
    /**
     * Deletes any read allow/deny rule for the given user or role
     *
     * @param userOrRole The user or role
     * @return this acl object
     */
    Acl.prototype.deleteReadAccess = function () {
        var _a;
        var userOrRole = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            userOrRole[_i] = arguments[_i];
        }
        (_a = this.read).deleteAccess.apply(_a, userOrRole);
        return this;
    };
    /**
     * Gets whenever all users and roles have the permission to write the object
     *
     * @return <code>true</code> If public access is allowed
     */
    Acl.prototype.isPublicWriteAllowed = function () {
        return this.write.isPublicAllowed();
    };
    /**
     * Sets whenever all users and roles should have the permission to write the object
     *
     * Note: All other allow write rules will be removed.
     *
     * @return
     * */
    Acl.prototype.setPublicWriteAllowed = function () {
        return this.write.setPublicAllowed();
    };
    /**
     * Checks whenever the user or role is explicit allowed to write the object
     *
     * @param userOrRole The user or role to check for
     * @return <code>true</code> if write access is explicitly allowed for the given user or role
     */
    Acl.prototype.isWriteAllowed = function (userOrRole) {
        return this.write.isAllowed(userOrRole);
    };
    /**
     * Checks whenever the user or role is explicit denied to write the object
     *
     * @param userOrRole The user or role to check for
     * @return <code>true</code> if write access is explicitly denied for the given user or role
     */
    Acl.prototype.isWriteDenied = function (userOrRole) {
        return this.write.isDenied(userOrRole);
    };
    /**
     * Allows the given user or rule to write the object
     *
     * @param userOrRole The user or role to allow
     * @return this acl object
     */
    Acl.prototype.allowWriteAccess = function () {
        var _a;
        var userOrRole = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            userOrRole[_i] = arguments[_i];
        }
        (_a = this.write).allowAccess.apply(_a, userOrRole);
        return this;
    };
    /**
     * Denies the given user or rule to write the object
     *
     * @param userOrRole The user or role to deny
     * @return this acl object
     */
    Acl.prototype.denyWriteAccess = function () {
        var _a;
        var userOrRole = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            userOrRole[_i] = arguments[_i];
        }
        (_a = this.write).denyAccess.apply(_a, userOrRole);
        return this;
    };
    /**
     * Deletes any write allow/deny rule for the given user or role
     *
     * @param userOrRole The user or role
     * @return this acl object
     */
    Acl.prototype.deleteWriteAccess = function () {
        var _a;
        var userOrRole = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            userOrRole[_i] = arguments[_i];
        }
        (_a = this.write).deleteAccess.apply(_a, userOrRole);
        return this;
    };
    /**
     * A JSON representation of the set of rules
     *
     * @return
     */
    Acl.prototype.toJSON = function () {
        return {
            read: this.read.toJSON(),
            write: this.write.toJSON(),
        };
    };
    /**
     * Sets the acl rules form JSON
     *
     * @param json The json encoded acls
     * @return
     */
    Acl.prototype.fromJSON = function (json) {
        this.read.fromJSON(json.read || {});
        this.write.fromJSON(json.write || {});
    };
    return Acl;
}());
exports.Acl = Acl;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWNsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQWNsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHdEQUF1RDtBQUl2RDs7R0FFRztBQUNIO0lBQUE7UUFDRTs7V0FFRztRQUNNLFNBQUksR0FBZSxJQUFJLHVCQUFVLEVBQUUsQ0FBQztRQUU3Qzs7V0FFRztRQUNNLFVBQUssR0FBZSxJQUFJLHVCQUFVLEVBQUUsQ0FBQztJQWdNaEQsQ0FBQztJQTlMQzs7OztTQUlLO0lBQ0wsbUJBQUssR0FBTDtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCxrQkFBSSxHQUFKLFVBQUssR0FBUTtRQUNYLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN6QixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDM0IsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILGlDQUFtQixHQUFuQjtRQUNFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUNyQyxDQUFDO0lBRUQ7Ozs7OztTQU1LO0lBQ0wsa0NBQW9CLEdBQXBCO1FBQ0UsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDdEMsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsMkJBQWEsR0FBYixVQUFjLFVBQXlCO1FBQ3JDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsMEJBQVksR0FBWixVQUFhLFVBQXlCO1FBQ3BDLE9BQU8sSUFBSSxDQUFDLElBQUks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

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.enumerable = void 0;
/**
 * This decorator modifies the enumerable flag of an class member
 * @param value - the enumerable value of the property descriptor
 */
function enumerable(value) {
    return function decorate(target, propertyKey, descriptor) {
        // eslint-disable-next-line no-param-reassign
        descriptor.enumerable = value;
    };
}
exports.enumerable = enumerable;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW51bWVyYWJsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImVudW1lcmFibGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUE7OztHQUdHO0FBQ0gsU0FBZ0IsVUFBVSxDQUFDLEtBQWM7SUFDdkMsT0FBTyxTQUFTLFFBQVEsQ0FDdEIsTUFBVyxFQUNYLFdBQW1CLEVBQ25CLFVBQThCO1FBRTlCLDZDQUE2QztRQUM3QyxVQUFVLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztJQUNoQyxDQUFDLENBQUM7QUFDSixDQUFDO0FBVEQsZ0NBU0MifQ==

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Node = void 0;
var tslib_1 = __webpack_require__(0);
var binding_1 = __webpack_require__(5);
var Query_1 = __webpack_require__(18);
var message = tslib_1.__importStar(__webpack_require__(2));
var intersection_1 = __webpack_require__(1);
var Stream_1 = __webpack_require__(56);
/**
 * A Query Node saves the state of the query being built
 */
var Node = /** @class */ (function (_super) {
    tslib_1.__extends(Node, _super);
    function Node() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * The offset how many results should be skipped
         */
        _this.firstResult = 0;
        /**
         * The limit how many objects should be returned
         * @type number
         * @readonly
         */
        _this.maxResults = -1;
        /**
         * The properties which should be used sort the result
         */
        _this.order = {};
        return _this;
    }
    Node.prototype.eventStream = function (options, onNext, onError, onComplete) {
        if (options instanceof Function) {
            return this.eventStream({}, options, onNext, onError);
        }
        var observable = Stream_1.Stream.createEventStream(this.entityManager, this.createRealTimeQuery(), options);
        if (onNext instanceof Function) {
            return observable.subscribe(onNext, onError, onComplete);
        }
        return observable;
    };
    Node.prototype.resultStream = function (options, onNext, onError, onComplete) {
        if (options instanceof Function) {
            return this.resultStream({}, options, onNext, onError);
        }
        var observable = Stream_1.Stream.createResultStream(this.entityManager, this.createRealTimeQuery(), options);
        if (onNext instanceof Function) {
            return observable.subscribe(onNext, onError, onComplete);
        }
        return observable;
    };
    /**
     * @inheritDoc
     */
    Node.prototype.resultList = function (options, doneCallback, failCallback) {
        var _this = this;
        var _a;
        if (options instanceof Function) {
            return this.resultList({}, options, doneCallback);
        }
        var type = this.resultClass ? this.entityManager.metamodel.entity(this.resultClass) : null;
        if (!type) {
            throw new Error('Only typed queries can be executed.');
        }
        var query = this.serializeQuery();
        var sort = this.serializeSort();
        var uriSize = (((_a = this.entityManager.connection) === null || _a === void 0 ? void 0 : _a.host.length) || 0) + query.length + sort.length;
        var msg;
        if (uriSize > Query_1.Query.MAX_URI_SIZE) {
            msg = new message.AdhocQueryPOST(type.name, this.firstResult, this.maxResults, sort)
                .entity(query, 'text');
        }
        else {
            msg = new message.AdhocQuery(type.name, query, this.firstResult, this.maxResults, sort);
        }
        return this.entityManager.send(msg)
            .then(function (response) { return _this.createResultList(response.entity, options); })
            .then(doneCallback, failCallback);
    };
    /**
     * @inheritDoc
     */
    Node.prototype.singleResult = function (options, doneCallback, failCallback) {
        var _this = this;
        var _a;
        if (options instanceof Function) {
            return this.singleResult({}, options, doneCallback);
        }
        var type = this.resultClass ? this.entityManager.metamodel.entity(this.resultClass) : null;
        if (!type) {
            throw new Error('Only typed queries can be executed.');
        }
        var query = this.serializeQuery();
        var sort = this.serializeSort();
        var uriSize = (((_a = this.entityManager.connection) === null || _a === void 0 ? void 0 : _a.host.length) || 0) + query.length;
        var msg;
        if (uriSize > Query_1.Query.MAX_URI_SIZE) {
            msg = new message.AdhocQueryPOST(type.name, this.firstResult, 1, sort)
                .entity(query, 'text');
        }
        else {
            msg = new message.AdhocQuery(type.name, query, this.firstResult, 1, sort);
        }
        return this.entityManager.send(msg)
            .then(function (response) { return _this.createResultList(response.entity, options); })
            .then(function (list) { return (list.length ? list[0] : null); })
            .then(doneCallback, failCallback);
    };
    /**
     * @inheritDoc
     */
    Node.prototype.count = function (doneCallback, failCallback) {
        var _a;
        var type = this.resultClass ? this.entityManager.metamodel.entity(this.resultClass) : null;
        if (!type) {
            throw new Error('Only typed queries can be executed.');
        }
        var query = this.serializeQuery();
        var uriSize = (((_a = this.entityManager.connection) === null || _a === void 0 ? void 0 : _a.host.length) || 0) + query.length;
        var msg;
        if (uriSize > Query_1.Query.MAX_URI_SIZE) {
            msg = new message.AdhocCountQueryPOST(type.name)
                .entity(query, 'text');
        }
        else {
            msg = new message.AdhocCountQuery(type.name, query);
        }
        return this.entityManager.send(msg)
            .then(function (response) { return response.entity.count; })
            .then(doneCallback, failCallback);
    };
    Node.prototype.serializeQuery = function () {
        return JSON.stringify(this, function argSerializer(k, v) {
            // this referees here to the object which owns the key k
            var typedValue = this[k];
            if (typedValue instanceof Date) {
                return { $date: v };
            }
            if (typedValue instanceof binding_1.Entity) {
                return typedValue.id;
            }
            return v;
        });
    };
    Node.prototype.serializeSort = function () {
        return JSON.stringify(this.order);
    };
    Node.prototype.createResultList = function (result, options) {
        var _this = this;
        if (result.length) {
            return Promise.all(result.map(function (el) {
                if (el.id) {
                    var entity = _this.entityManager.getReference(_this.resultClass, el.id);
                    var metadata = intersection_1.Metadata.get(entity);
                    metadata.type.fromJsonValue(metadata, el, entity, { persisting: true });
                    return _this.entityManager.resolveDepth(entity, options);
                }
                return _this.entityManager.load(Object.keys(el)[0]);
            }))
                .then(function (objects) { return objects.filter(function (val) { return !!val; }); });
        }
        return Promise.resolve([]);
    };
    Node.prototype.createRealTimeQuery = function () {
        var type = this.resultClass ? this.entityManager.metamodel.entity(this.resultClass) : null;
        if (!type) {
            throw new Error('Only typed queries can be executed.');
        }
        var query = {
            bucket: type.name,
            query: this.serializeQuery(),
        };
        var sort = this.serializeSort();
        if (sort && sort !== '{}') {
            query.sort = sort;
        }
        if (this.maxResults > 0) {
            query.limit = this.maxResults;
        }
        if (this.firstResult > 0) {
            query.offset = this.firstResult;
        }
        return query;
    };
    Node.prototype.addOrder = function (fieldOrSort, order) {
        if (typeof fieldOrSort === 'string') {
            this.order[fieldOrSort] = order;
        }
        else {
            this.order = fieldOrSort;
        }
        return this;
    };
    Node.prototype.addOffset = function (offset) {
        this.firstResult = offset;
        return this;
    };
    Node.prototype.addLimit = function (limit) {
        this.maxResults = limit;
        return this;
    };
    return Node;
}(Query_1.Query));
exports.Node = Node;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTm9kZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIk5vZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLHNDQUFvQztBQUdwQyxpQ0FZaUI7QUFDakIsMERBQXNDO0FBR3RDLGdEQUEyQztBQUMzQyxtQ0FBa0M7QUFFbEM7O0dBRUc7QUFDSDtJQUE0QyxnQ0FBUTtJQUFwRDtRQUFBLHFFQXFPQztRQXBPQzs7V0FFRztRQUNJLGlCQUFXLEdBQVcsQ0FBQyxDQUFDO1FBRS9COzs7O1dBSUc7UUFDSSxnQkFBVSxHQUFXLENBQUMsQ0FBQyxDQUFDO1FBRS9COztXQUVHO1FBQ0ksV0FBSyxHQUFnQyxFQUFFLENBQUM7O0lBcU5qRCxDQUFDO0lBaE5DLDBCQUFXLEdBQVgsVUFBWSxPQUFtRCxFQUFFLE1BQTRDLEVBQzNHLE9BQXlDLEVBQUUsVUFBNkI7UUFFeEUsSUFBSSxPQUFPLFlBQVksUUFBUSxFQUFFO1lBQy9CLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLEVBQUUsT0FBK0IsRUFBRSxNQUFzQixFQUFFLE9BQTJCLENBQUMsQ0FBQztTQUNuSDtRQUVELElBQU0sVUFBVSxHQUFHLGVBQU0sQ0FBQyxpQkFBaUIsQ0FBSSxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBRXhHLElBQUksTUFBTSxZQUFZLFFBQVEsRUFBRTtZQUM5QixPQUFPLFVBQVUsQ0FBQyxTQUFTLENBQUMsTUFBOEIsRUFBRSxPQUFPLEVBQUUsVUFBVSxDQUFDLENBQUM7U0FDbEY7UUFFRCxPQUFPLFVBQVUsQ0FBQztJQUNwQixDQUFDO0lBS0QsMkJBQVksR0FBWixVQUFhLE9BQXFELEVBQUUsTUFBNkMsRUFDL0csT0FBeUMsRUFBRSxVQUE2QjtRQUN4RSxJQUFJLE9BQU8sWUFBWSxRQUFRLEVBQUU7WUFDL0IsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUN0QixFQUFFLEVBQUUsT0FBZ0MsRUFB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

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.flatArgs = exports.Query = void 0;
/**
 * An abstract Query which allows retrieving results
 */
var Query = /** @class */ (function () {
    /**
     * @param entityManager - The owning EntityManager of this query
     * @param resultClass - The result class of this query
     */
    function Query(entityManager, resultClass) {
        this.entityManager = entityManager;
        this.resultClass = resultClass;
    }
    /**
     * Add an ascending sort for the specified field to this query
     * @param field The field to sort
     * @return The resulting Query
     */
    Query.prototype.ascending = function (field) {
        return this.addOrder(field, 1);
    };
    /**
     * Add an decending sort for the specified field to this query
     * @param field The field to sort
     * @return The resulting Query
     */
    Query.prototype.descending = function (field) {
        return this.addOrder(field, -1);
    };
    /**
     * Sets the sort of the query and discard all existing paramaters
     * @param sort The new sort of the query which is an object whose keys are fields and the
     * values are either +1 for ascending order or -1 for descending order
     * @return The resulting Query
     *
     * @see http://docs.mongodb.org/manual/reference/method/cursor.sort/
     */
    Query.prototype.sort = function (sort) {
        if (typeof sort !== 'object' || Object.getPrototypeOf(sort) !== Object.prototype) {
            throw new Error('sort must be an object.');
        }
        return this.addOrder(sort);
    };
    /**
     * Sets the offset of the query, i.e. how many elements should be skipped
     * @param offset The offset of this query
     * @return The resulting Query
     *
     * @see http://docs.mongodb.org/manual/reference/method/cursor.skip/
     */
    Query.prototype.offset = function (offset) {
        if (offset < 0) {
            throw new Error('The offset can\'t be nagative.');
        }
        return this.addOffset(offset);
    };
    /**
     * Sets the limit of this query, i.e hox many objects should be returnd
     * @param limit The limit of this query
     * @return The resulting Query
     *
     * @see http://docs.mongodb.org/manual/reference/method/cursor.limit/
     */
    Query.prototype.limit = function (limit) {
        if (limit < 0) {
            throw new Error('The limit can\'t be nagative.');
        }
        return this.addLimit(limit);
    };
    Query.MAX_URI_SIZE = 2000;
    return Query;
}());
exports.Query = Query;
function flatArgs(args) {
    return Array.prototype.concat.apply([], args);
}
exports.flatArgs = flatArgs;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUXVlcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJRdWVyeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFRQTs7R0FFRztBQUNIO0lBR0U7OztPQUdHO0lBQ0gsZUFDa0IsYUFBNEIsRUFDNUIsV0FBcUI7UUFEckIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsZ0JBQVcsR0FBWCxXQUFXLENBQVU7SUFDcEMsQ0FBQztJQUVKOzs7O09BSUc7SUFDSCx5QkFBUyxHQUFULFVBQVUsS0FBYTtRQUNyQixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsMEJBQVUsR0FBVixVQUFXLEtBQWE7UUFDdEIsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFRDs7Ozs7OztPQU9HO0lBQ0gsb0JBQUksR0FBSixVQUFLLElBQWlDO1FBQ3BDLElBQUksT0FBTyxJQUFJLEtBQUssUUFBUSxJQUFJLE1BQU0sQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEtBQUssTUFBTSxDQUFDLFNBQVMsRUFBRTtZQUNoRixNQUFNLElBQUksS0FBSyxDQUFDLHlCQUF5QixDQUFDLENBQUM7U0FDNUM7UUFFRCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNILHNCQUFNLEdBQU4sVUFBTyxNQUFjO1FBQ25CLElBQUksTUFBTSxHQUFHLENBQUMsRUFBRTtZQUNkLE1BQU0sSUFBSSxLQUFLLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztTQUNuRDtRQUVELE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0gscUJBQUssR0FBTCxVQUFNLEtBQWE7UUFDakIsSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFO1lBQ2IsTUFBTSxJQUFJLEtBQUssQ0FBQywrQkFBK0IsQ0FBQyxDQUFDO1NBQ2xEO1FBRUQsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUF6RXNCLGtCQUFZLEdBQUcsSUFBSSxDQUFDO0lBeVE3QyxZQUFDO0NBQUEsQUExUUQsSUEwUUM7QUExUXFCLHNCQUFLO0FBNFEzQixTQUFnQixRQUFRLENBQUMsSUFBVztJQUNsQyxPQUFPLEtBQUssQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDaEQsQ0FBQztBQUZELDRCQUVDIn0=

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ManagedType = void 0;
var tslib_1 = __webpack_require__(0);
var Type_1 = __webpack_require__(10);
var binding_1 = __webpack_require__(5);
var intersection_1 = __webpack_require__(1);
var ManagedType = /** @class */ (function (_super) {
    tslib_1.__extends(ManagedType, _super);
    /**
     * @param ref or full class name
     * @param typeConstructor The type constructor of the managed lass
     */
    function ManagedType(ref, typeConstructor) {
        var _this = _super.call(this, ref.indexOf('/db/') !== 0 ? "/db/" + ref : ref, typeConstructor) || this;
        _this.enhancer = null;
        _this.declaredAttributes = [];
        _this.schemaAddPermission = new intersection_1.Permission();
        _this.schemaReplacePermission = new intersection_1.Permission();
        _this.metadata = null;
        _this.superType = null;
        _this._validationCode = null;
        return _this;
    }
    Object.defineProperty(ManagedType.prototype, "validationCode", {
        /**
         * @type Function
         */
        get: function () {
            return this._validationCode;
        },
        /**
         * @param code
         */
        set: function (code) {
            this._validationCode = code;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ManagedType.prototype, "typeConstructor", {
        /**
         * The Managed class
         */
        get: function () {
            if (!this._typeConstructor) {
                this.typeConstructor = this.createProxyClass();
            }
            return this._typeConstructor;
        },
        /**
         * The Managed class constructor
         * @param typeConstructor The managed class constructor
         */
        set: function (typeConstructor) {
            if (this._typeConstructor) {
                throw new Error('Type constructor has already been set.');
            }
            var isEntity = typeConstructor.prototype instanceof binding_1.Entity;
            if (this.isEntity) {
                if (!isEntity) {
                    throw new TypeError('Entity classes must extends the Entity class.');
                }
            }
            else if (!(typeConstructor.prototype instanceof binding_1.Managed) || isEntity) {
                throw new TypeError('Embeddable classes must extends the Managed class.');
            }
            this.enhancer.enhance(this, typeConstructor);
            this._typeConstructor = typeConstructor;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Initialize this type
     * @param enhancer The class enhancer used to instantiate an instance of this managed class
     */
    ManagedType.prototype.init = function (enhancer) {
        this.enhancer = enhancer;
        if (this._typeConstructor && !binding_1.Enhancer.getIdentifier(this._typeConstructor)) {
            binding_1.Enhancer.setIdentifier(this._typeConstructor, this.ref);
        }
    };
    /**
     * Creates a new instance of the managed type, without invoking any constructors
     *
     * This method is used to create object instances which are loaded form the backend.
     *
     * @return The created instance
     */
    ManagedType.prototype.create = function () {
        var instance = Object.create(this.typeConstructor.prototype);
        binding_1.Managed.init(instance);
        return instance;
    };
    /**
     * An iterator which returns all attributes declared by this type and inherited form all super types
     * @return
     */
    ManagedType.prototype.attributes = function () {
        var _a;
        var iter;
        var index = 0;
        var type = this;
        if (this.superType) {
            iter = this.superType.attributes();
        }
        return _a = {},
            _a[Symbol.iterator] = function () {
                return this;
            },
            _a.next = function () {
                if (iter) {
                    var item = iter.next();
                    if (!item.done) {
                        return item;
                    }
                    iter = null;
                }
                if (index < type.declaredAttributes.length) {
                    var value = type.declaredAttributes[index];
                    index += 1;
                    return { value: value, done: false };
                }
                return { done: true, value: undefined };
            },
            _a;
    };
    /**
     * Adds an attribute to this type
     * @param attr The attribute to add
     * @param order Position of the attribute
     * @return
     */
    ManagedType.prototype.addAttribute = function (attr, order) {
        if (this.getAttribute(attr.name)) {
            throw new Error("An attribute with the name " + attr.name + " is already declared.");
        }
        var initOrder;
        if (!attr.order) {
            initOrder = typeof order === 'undefined' ? this.declaredAttributes.length : order;
        }
        else {
            initOrder = attr.order;
        }
        attr.init(this, initOrder);
        this.declaredAttributes.push(attr);
        if (this._typeConstructor && this.name !== 'Object') {
            this.enhancer.enhanceProperty(this._typeConstructor, attr);
        }
    };
    /**
     * Removes an attribute from this type
     * @param name The Name of the attribute which will be removed
     * @return
     */
    ManagedType.prototype.removeAttribute = function (name) {
        var length = this.declaredAttributes.length;
        this.declaredAttributes = this.declaredAttributes.filter(function (val) { return val.name !== name; });
        if (length === this.declaredAttributes.length) {
            throw new Error("An Attribute with the name " + name + " is not declared.");
        }
    };
    /**
     * @param name
     * @return
     */
    ManagedType.prototype.getAttribute = function (name) {
        var attr = this.getDeclaredAttribute(name);
        if (!attr && this.superType) {
            attr = this.superType.getAttribute(name);
        }
        return attr;
    };
    /**
     * @param val Name or order of the attribute
     * @return
     */
    ManagedType.prototype.getDeclaredAttribute = function (val) {
        return this.declaredAttributes.filter(function (attr) { return attr.name === val || attr.order === val; })[0] || null;
    };
    /**
     * @inheritDoc
     */
    ManagedType.prototype.fromJsonValue = function (state, jsonObject, currentObject, options) {
        if (!jsonObject || !currentObject) {
            return null;
        }
        var iter = this.attributes();
        for (var el = iter.next(); !el.done; el = iter.next()) {
            var attribute = el.value;
            if (!options.onlyMetadata || attribute.isMetadata) {
                attribute.setJsonValue(state, currentObject, jsonObject[attribute.name], options);
            }
        }
        return currentObject;
    };
    /**
     * @inheritDoc
     */
    ManagedType.prototype.toJsonValue = function (state, object, options) {
        if (!(object instanceof this.typeConstructor)) {
            return null;
        }
        var value = {};
        var iter = this.attributes();
        for (var el = iter.next(); !el.done; el = iter.next()) {
            var attribute = el.value;
            if (!options.excludeMetadata || !attribute.isMetadata) {
                value[attribute.name] = attribute.getJsonValue(state, object, options);
            }
        }
        return value;
    };
    /**
     * Converts ths type schema to json
     * @return
     */
    ManagedType.prototype.toJSON = function () {
        var fields = {};
        this.declaredAttributes.forEach(function (attribute) {
            if (!attribute.isMetadata) {
                fields[attribute.name] = attribute;
            }
        });
        return tslib_1.__assign(tslib_1.__assign(tslib_1.__assign({ class: this.ref, fields: fields, acl: {
                schemaAdd: this.schemaAddPermission.toJSON(),
                schemaReplace: this.schemaReplacePermission.toJSON(),
            } }, (this.superType && { superClass: this.superType.ref })), (this.isEmbeddable && { embedded: true })), (this.metadata && { metadata: this.metadata }));
    };
    /**
     * Returns iterator to get all referenced entities
     * @return
     */
    ManagedType.prototype.references = function () {
        var _a;
        var attributes = this.attributes();
        var attribute;
        var embeddedAttributes;
        return _a = {},
            _a[Symbol.iterator] = function () {
                return this;
            },
            _a.next = function () {
                for (;;) {
                    if (embeddedAttributes) {
                        var item_1 = embeddedAttributes.next();
                        if (!item_1.done) {
                            return { value: { path: [attribute.name].concat(item_1.value.path) } };
                        }
                        embeddedAttributes = null;
                    }
                    var item = attributes.next();
                    if (item.done) {
                        // currently TS requires a undefined value here https://github.com/microsoft/TypeScript/issues/38479
                        return { done: true, value: undefined };
                    }
                    attribute = item.value;
                    var type = attribute.isCollection
                        ? attribute.elementType
                        : attribute.type;
                    if (type.isEntity) {
                        return { value: { path: [attribute.name] } };
                    }
                    if (type.isEmbeddable) {
                        embeddedAttributes = type.references();
                    }
                }
            },
            _a;
    };
    /**
     * Retrieves whether this type has specific metadata
     *
     * @param key
     * @return
     */
    ManagedType.prototype.hasMetadata = function (key) {
        return !!this.metadata && !!this.metadata[key];
    };
    /**
     * Gets some metadata of this type
     *
     * @param key
     * @return
     */
    ManagedType.prototype.getMetadata = function (key) {
        if (!this.hasMetadata(key)) {
            return null;
        }
        return this.metadata[key];
    };
    return ManagedType;
}(Type_1.Type));
exports.ManagedType = ManagedType;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWFuYWdlZFR5cGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJNYW5hZ2VkVHlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsK0JBQThCO0FBRTlCLHNDQUVvQjtBQU9wQixnREFBMkQ7QUFFM0Q7SUFBNkQsdUNBQU87SUE2RGxFOzs7T0FHRztJQUNILHFCQUFZLEdBQVcsRUFBRSxlQUEwQjtRQUFuRCxZQUNFLGtCQUFNLEdBQUcsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFPLEdBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLGVBQWUsQ0FBQyxTQUN2RTtRQWxFTSxjQUFRLEdBQW9CLElBQUksQ0FBQztRQUVqQyx3QkFBa0IsR0FBcUIsRUFBRSxDQUFDO1FBRTFDLHlCQUFtQixHQUFlLElBQUkseUJBQVUsRUFBRSxDQUFDO1FBRW5ELDZCQUF1QixHQUFlLElBQUkseUJBQVUsRUFBRSxDQUFDO1FBRXZELGNBQVEsR0FBcUMsSUFBSSxDQUFDO1FBRWxELGVBQVMsR0FBMkIsSUFBSSxDQUFDO1FBRXpDLHFCQUFlLEdBQW9CLElBQUksQ0FBQzs7SUFzRC9DLENBQUM7SUFqREQsc0JBQUksdUNBQWM7UUFIbEI7O1dBRUc7YUFDSDtZQUNFLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQztRQUM5QixDQUFDO1FBRUQ7O1dBRUc7YUFDSCxVQUFtQixJQUFxQjtZQUN0QyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztRQUM5QixDQUFDOzs7T0FQQTtJQVlELHNCQUFJLHdDQUFlO1FBSG5COztXQUVHO2FBQ0g7WUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFO2dCQUMxQixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO2FBQ2hEO1lBQ0QsT0FBTyxJQUFJLENBQUMsZ0JBQWtCLENBQUM7UUFDakMsQ0FBQztRQUVEOzs7V0FHRzthQUNILFVBQW9CLGVBQXlCO1lBQzNDLElBQUksSUFBSSxDQUFDLGdCQUFnQixFQUFFO2dCQUN6QixNQUFNLElBQUksS0FBSyxDQUFDLHdDQUF3QyxDQUFDLENBQUM7YUFDM0Q7WUFFRCxJQUFNLFFBQVEsR0FBRyxlQUFlLENBQUMsU0FBUyxZQUFZLGdCQUFNLENBQUM7WUFDN0QsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO2dCQUNqQixJQUFJLENBQUMsUUFBUSxFQUFFO29CQUNiLE1BQU0sSUFBSSxTQUFTLENBQUMsK0NBQStDLENBQUMsQ0FBQztpQkFDdEU7YUFDRjtpQkFBTSxJQUFJLENBQUMsQ0FBQyxlQUFlLENBQUMsU0FBUyxZQUFZLGlCQUFPLENBQUMsSUFBSSxRQUFRLEVBQUU7Z0JBQ3RFLE1BQU0sSUFBSSxTQUFTLENBQUMsb0RBQW9ELENBQUMsQ0FBQzthQUMzRTtZQUVELElBQUksQ0FBQyxRQUFVLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxlQUFlLENBQUMsQ0FBQztZQUMvQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsZUFBZSxDQUFDO1FBQzFDLENBQUM7OztPQXRCQTtJQWdDRDs7O09BR0c7SUFDSCwwQkFBSSxHQUFKLFVBQUssUUFBa0I7UUFDckIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFFekIsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLElBQUksQ0FBQyxrQkFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsZ0JBQWtCLENBQUMsRUFBRTtZQUM3RSxrQkFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsZ0JBQWtCLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQzNEO0lBQ0gsQ0FBQztJQWVEOzs7Ozs7T0FNRztJQUNILDRCQUFNLEdBQU47UUFDRSxJQUFNLFFBQVEsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDL0QsaUJBQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFdkIsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQztJQUVEOzs7T0FHRztJQUNILGdDQUFVLEdBQVY7O1FBQ0UsSUFBSSxJQUFxQyxDQUFDO1FBQzFDLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNkLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQztRQUVsQixJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbEIsSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLENBQUM7U0FDcEM7UUFFRDtZQUNFLEdBQUMsTUFBTSxDQUFDLFFBQVEsSUFBaEI7Z0JBQ0UsT0FBTyxJQUFJLENBQUM7WUFDZCxDQUFDO1lBRUQsT0FBSSxHQUFKO2dCQUNFLElBQUksSUFBSSxFQUFFO29CQUNSLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztvQkFDekIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUU7d0JBQ2QsT0FBTyxJQUFJLENBQUM7cUJBQ2I7b0JBRUQsSUFBSSxHQUFHLElBQUksQ0FBQztpQkFDYjtnQkFFRCxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsTUFBTSxFQUFFO29CQUMxQyxJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQzdDLEtBQUssSUFBSSxDQUFDLENBQUM7b0JBQ1gsT0FBTyxFQUFFLEtBQUssT0FBQSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsQ0FBQztpQkFDL0I7Z0JBRUQsT0FBTyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxDQUFDO1lBQzFDLENBQUM7ZUFDRDtJQUNKLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILGtDQUFZLEdBQVosVUFBYSxJQUFvQixFQUFFLEtBQWM7UUFDL0MsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNoQyxNQUFNLElBQUksS0FBSyxDQUFDLGdDQUE4QixJQUFJLENBQUMsSUFBSSwwQkFBdUIsQ0FBQyxDQUFDO1NBQ2pGO1FBRUQsSUFBSSxTQUFTLENBQUM7UUFDZCxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNmLFNBQVMsR0FBRyxPQUFPLEtBQUssS0FBSyxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztTQUNuRjthQUFNO1lBQ0wsU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7U0FDeEI7UUFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQztRQUUzQixJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ25DLElBQUksSUFBSSxDQUFDLGdCQUFnQixJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssUUFBUSxFQUFFO1lBQ25ELElBQUksQ0FBQyxRQUFVLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsQ0FBQztTQUM5RDtJQUNILENBQUM7SUFFRDs7OztPQUlHO0lBQ0gscUNBQWUsR0FBZixVQUFnQixJQUFZO1FBQ2xCLElBQUEsTUFBTSxHQUFLLElBQUksQ0FBQyxrQkFBa0IsT0FBNUIsQ0FBNkI7UUFDM0MsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsVUFBQyxHQUFHLElBQUssT0FBQSxHQUFHLENBQUMsSUFBSSxLQUFLLElBQUksRUFBakIsQ0FBaUIsQ0FBQyxDQUFDO1FBRXJGLElBQUksTUFBTSxLQUFLLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLEVBQUU7WUFDN0MsTUFBTSxJQUFJLEtBQUssQ0FBQyxnQ0FBOEIsSUFBSSxzQkFBbUIsQ0FBQyxDQUFDO1NBQ3hFO0lBQ0gsQ0FBQztJQUVEOzs7T0FHRztJQUNILGtDQUFZLEdBQVosVUFBYSxJQUFZO1FBQ3ZCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUUzQyxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDM0IsSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzFDO1FBRUQsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsMENBQW9CLEdBQXBCLFVBQXFCLEdBQW9CO1FBQ3ZDLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxVQUFDLElBQUksSUFBSyxPQUFBLElBQUksQ0FBQyxJQUFJLEtBQUssR0FBRyxJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssR0FBRyxFQUF2QyxDQUF1QyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDO0lBQ3RHLENBQUM7SUFFRDs7T0FFRztJQUNILG1DQUFhLEdBQWIsVUFBYyxLQUFtQixFQUFFLFVBQWdCLEVBQUUsYUFBdUIsRUFDMUUsT0FBd0Q7UUFDeEQsSUFBSSxDQUFDLFVBQVUsSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUNqQyxPQUFPLElBQUksQ0FBQztTQUNiO1FBRUQsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQy9CLEtBQUssSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksRUFBRSxFQUFFO1lBQ3JELElBQU0sU0FBUyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUM7WUFDM0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLElBQUksU0FBUyxDQUFDLFVBQVUsRUFBRTtnQkFDakQsU0FBUyxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsYUFBYSxFQUFHLFVBQXNCLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDO2FBQ2hHO1NBQ0Y7UUFFRCxPQUFPLGFBQWEsQ0FBQztJQUN2QixDQUFDO0lBRUQ7O09BRUc7SUFDSCxpQ0FBVyxHQUFYLFVBQVksS0FBbUIsRUFBRSxNQUFnQixFQUMvQyxPQUFxRjtRQUNyRixJQUFJLENBQUMsQ0FBQyxNQUFNLFlBQVksSUFBSSxDQUFDLGVBQWUsQ0FBQyxFQUFFO1lBQzdDLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFFRCxJQUFNLEtBQUssR0FBNEIsRUFBRSxDQUFDO1FBQzFDLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUMvQixLQUFLLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxHQUFHLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBRTtZQUNyRCxJQUFNLFNBQVMsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDO1lBQzNCLElBQUksQ0FBQyxPQUFPLENBQUMsZUFBZSxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRTtnQkFDckQsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxTQUFTLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7YUFDeEU7U0FDRjtRQUVELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUVEOzs7T0FHRztJQUNILDRCQUFNLEdBQU47UUFDRSxJQUFNLE1BQU0sR0FBNEIsRUFBRSxDQUFDO1FBQzNDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsVUFBQyxTQUFTO1lBQ3hDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFO2dCQUN6QixNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLFNBQVMsQ0FBQzthQUNwQztRQUNILENBQUMsQ0FBQyxDQUFDO1FBRUgsNERBQ0UsS0FBSyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQ2YsTUFBTSxRQUFBLEVBQ04sR0FBRyxFQUFFO2dCQUNILFNBQVMsRUFBRSxJQUFJLENBQUMsbUJBQW1CLENBQUMsTUFBTSxFQUFFO2dCQUM1QyxhQUFhLEVBQUUsSUFBSSxDQUFDLHVCQUF1QixDQUFDLE1BQU0sRUFBRTthQUNyRCxJQUNFLENBQUMsSUFBSSxDQUFDLFNBQVMsSUFBSSxFQUFFLFVBQVUsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQ3RELENBQUMsSUFBSSxDQUFDLFlBQVksSUFBSSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQyxHQUN6QyxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLEVBQ2pEO0lBQ0osQ0FBQztJQUVEOzs7T0FHRztJQUNILGdDQUFVLEdBQVY7O1FBQ0UsSUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ3JDLElBQUksU0FBeUIsQ0FBQztRQUM5QixJQUFJLGtCQUErRCxDQUFDO1FBRXBFO1lBQ0UsR0FBQyxNQUFNLENBQUMsUUFBUSxJQUFoQjtnQkFDRSxPQUFPLElBQUksQ0FBQztZQUNkLENBQUM7WUFFRCxPQUFJLEdBQUo7Z0JBQ0UsU0FBUztvQkFDUCxJQUFJLGtCQUFrQixFQUFFO3dCQUN0QixJQUFNLE1BQUksR0FBRyxrQkFBa0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQzt3QkFDdkMsSUFBSSxDQUFDLE1BQUksQ0FBQyxJQUFJLEVBQUU7NEJBQ2QsT0FBTyxFQUFFLEtBQUssRUFBRSxFQUFFLElBQUksRUFBRSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUM7eUJBQ3RFO3dCQUNELGtCQUFrQixHQUFHLElBQUksQ0FBQztxQkFDM0I7b0JBRUQsSUFBTSxJQUFJLEdBQUcsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDO29CQUMvQixJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7d0JBQ2Isb0dBQW9HO3dCQUNwRyxPQUFPLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLENBQUM7cUJBQ3pDO29CQUVELFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO29CQUN2QixJQUFNLElBQUksR0FBRyxTQUFTLENBQUMsWUFBWTt3QkFDakMsQ0FBQyxDQUFFLFNBQXVDLENBQUMsV0FBVzt3QkFDdEQsQ0FBQyxDQUFFLFNBQW9DLENBQUMsSUFBSSxDQUFDO29CQUUvQyxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7d0JBQ2pCLE9BQU8sRUFBRSxLQUFLLEVBQUUsRUFBRSxJQUFJLEVBQUUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFDO3FCQUM5QztvQkFBQyxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7d0JBQ3ZCLGtCQUFrQixHQUFJLElBQTRCLENBQUMsVUFBVSxFQUFFLENBQUM7cUJBQ2pFO2lCQUNGO1lBQ0gsQ0FBQztlQUNEO0lBQ0osQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsaUNBQVcsR0FBWCxVQUFZLEdBQVc7UUFDckIsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCxpQ0FBVyxHQUFYLFVBQVksR0FBVztRQUNyQixJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUMxQixPQUFPLElBQUksQ0FBQztTQUNiO1FBRUQsT0FBTyxJQUFJLENBQUMsUUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFDSCxrQkFBQztBQUFELENBQUMsQUF2VkQsQ0FBNkQsV0FBSSxHQXVWaEU7QUF2VnFCLGtDQUFXIn0=

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);


function parse(uuid) {
  if (!Object(_validate_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(uuid)) {
    throw TypeError('Invalid UUID');
  }

  var v;
  var arr = new Uint8Array(16); // Parse ########-....-....-....-............

  arr[0] = (v = parseInt(uuid.slice(0, 8), 16)) >>> 24;
  arr[1] = v >>> 16 & 0xff;
  arr[2] = v >>> 8 & 0xff;
  arr[3] = v & 0xff; // Parse ........-####-....-....-............

  arr[4] = (v = parseInt(uuid.slice(9, 13), 16)) >>> 8;
  arr[5] = v & 0xff; // Parse ........-....-####-....-............

  arr[6] = (v = parseInt(uuid.slice(14, 18), 16)) >>> 8;
  arr[7] = v & 0xff; // Parse ........-....-....-####-............

  arr[8] = (v = parseInt(uuid.slice(19, 23), 16)) >>> 8;
  arr[9] = v & 0xff; // Parse ........-....-....-....-############
  // (Use "/" to avoid 32-bit truncation when bit-shifting high-order bytes)

  arr[10] = (v = parseInt(uuid.slice(24, 36), 16)) / 0x10000000000 & 0xff;
  arr[11] = v / 0x100000000 & 0xff;
  arr[12] = v >>> 24 & 0xff;
  arr[13] = v >>> 16 & 0xff;
  arr[14] = v >>> 8 & 0xff;
  arr[15] = v & 0xff;
  return arr;
}

/* harmony default export */ __webpack_exports__["a"] = (parse);

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return rng; });
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
var getRandomValues;
var rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation. Also,
    // find the complete implementation of crypto (msCrypto) on IE11.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== 'undefined' && typeof msCrypto.getRandomValues === 'function' && msCrypto.getRandomValues.bind(msCrypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export DNS */
/* unused harmony export URL */
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _parse_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20);



function stringToBytes(str) {
  str = unescape(encodeURIComponent(str)); // UTF8 escape

  var bytes = [];

  for (var i = 0; i < str.length; ++i) {
    bytes.push(str.charCodeAt(i));
  }

  return bytes;
}

var DNS = '6ba7b810-9dad-11d1-80b4-00c04fd430c8';
var URL = '6ba7b811-9dad-11d1-80b4-00c04fd430c8';
/* harmony default export */ __webpack_exports__["a"] = (function (name, version, hashfunc) {
  function generateUUID(value, namespace, buf, offset) {
    if (typeof value === 'string') {
      value = stringToBytes(value);
    }

    if (typeof namespace === 'string') {
      namespace = Object(_parse_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(namespace);
    }

    if (namespace.length !== 16) {
      throw TypeError('Namespace must be array-like (16 iterable integer values, 0-255)');
    } // Compute hash of namespace and value, Per 4.3
    // Future: Use spread syntax when supported on all platforms, e.g. `bytes =
    // hashfunc([...namespace, ... value])`


    var bytes = new Uint8Array(16 + value.length);
    bytes.set(namespace);
    bytes.set(value, namespace.length);
    bytes = hashfunc(bytes);
    bytes[6] = bytes[6] & 0x0f | version;
    bytes[8] = bytes[8] & 0x3f | 0x80;

    if (buf) {
      offset = offset || 0;

      for (var i = 0; i < 16; ++i) {
        buf[offset + i] = bytes[i];
      }

      return buf;
    }

    return Object(_stringify_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(bytes);
  } // Function#name is not settable on some platforms (#270)


  try {
    generateUUID.name = name; // eslint-disable-next-line no-empty
  } catch (err) {} // For CommonJS default export support


  generateUUID.DNS = DNS;
  generateUUID.URL = URL;
  return generateUUID;
});

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityManagerFactory = void 0;
var tslib_1 = __webpack_require__(0);
var EntityManager_1 = __webpack_require__(24);
var message = tslib_1.__importStar(__webpack_require__(2));
var connector_1 = __webpack_require__(6);
var util_1 = __webpack_require__(3);
var intersection_1 = __webpack_require__(1);
var metamodel_1 = __webpack_require__(13);
var CONNECTED = Symbol('Connected');
var WS = Symbol('WebSocket');
var EntityManagerFactory = /** @class */ (function (_super) {
    tslib_1.__extends(EntityManagerFactory, _super);
    /**
     * Creates a new EntityManagerFactory connected to the given destination
     * @param [options] The destination to connect with, or an options object
     * @param [options.host] The destination to connect with
     * @param [options.port=80|443] The optional destination port to connect with
     * @param [options.secure=false] <code>true</code> To use a secure ssl encrypted connection
     * @param [options.basePath="/v1"] The base path of the api
     * @param [options.schema=null] The serialized schema as json used to initialize the metamodel
     * @param [options.tokenStorage] The tokenStorage which should be used by this emf
     * @param [options.tokenStorageFactory] The tokenStorage factory implementation which
     * should be used for token storage
     * @param [options.staleness=60] The maximum staleness of objects that are acceptable while reading cached
     * data
     */
    function EntityManagerFactory(options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this) || this;
        _this.connection = null;
        _this.metamodel = _this.createMetamodel();
        _this.code = new intersection_1.Code(_this.metamodel, _this);
        _this.tokenStorageFactory = intersection_1.TokenStorage.WEB_STORAGE || intersection_1.TokenStorage.GLOBAL;
        _this.tokenStorage = null;
        _this.staleness = null;
        var opt = typeof options === 'string' ? { host: options } : options || {};
        _this.configure(opt);
        var isReady = true;
        var ready = new Promise(function (success) {
            _this[CONNECTED] = success;
        });
        if (opt.host) {
            _this.connect(opt.host, opt.port, opt.secure, opt.basePath);
        }
        else {
            isReady = false;
        }
        if (!_this.tokenStorage) {
            isReady = false;
            ready = ready
                .then(function () { return _this.tokenStorageFactory.create(_this.connection.origin); })
                .then(function (tokenStorage) {
                _this.tokenStorage = tokenStorage;
            });
        }
        if (opt.schema) {
            _this.connectData = opt;
            _this.metamodel.init(opt.schema);
        }
        else {
            isReady = false;
            ready = ready.then(function () {
                var msg = new message.Connect();
                msg.withCredentials = true; // used for registered devices
                if (_this.staleness === 0) {
                    msg.noCache();
                }
                return _this.send(msg);
            }).then(function (response) {
                _this.connectData = response.entity;
                if (_this.staleness === null) {
                    _this.staleness = _this.connectData.bloomFilterRefresh || 60;
                }
                if (!_this.metamodel.isInitialized) {
                    _this.metamodel.init(_this.connectData.schema);
                }
                _this.tokenStorage.update(_this.connectData.token);
            });
        }
        if (!isReady) {
            _this.withLock(function () { return ready; }, true);
        }
        return _this;
    }
    Object.defineProperty(EntityManagerFactory.prototype, "websocket", {
        /**
         * Retrieves the websocket connection if the websocket SDK is available
         */
        get: function () {
            if (!this[WS]) {
                var secure = this.connection.secure;
                var url = void 0;
                if (this.connectData.websocket) {
                    url = (secure ? 'wss:' : 'ws:') + this.connectData.websocket;
                }
                else {
                    url = this.connection.origin.replace(/^http/, 'ws') + this.connection.basePath + "/events";
                }
                this[WS] = connector_1.WebSocketConnector.create(url);
            }
            return this[WS];
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Apply additional configurations to this EntityManagerFactory
     * @param options The additional configuration options
     * @param [options.tokenStorage] The tokenStorage which should be used by this emf
     * @param [options.tokenStorageFactory] The tokenStorage factory implementation which
     * should be used for token storage
     * @param [options.staleness=60] The maximum staleness of objects that are acceptable while reading cached
     * data, <code>0</code> to always bypass the browser cache
     * @return
     */
    EntityManagerFactory.prototype.configure = function (options) {
        if (this.connection) {
            throw new Error('The EntityManagerFactory can only be configured before is is connected.');
        }
        if (options.tokenStorage) {
            this.tokenStorage = options.tokenStorage;
        }
        if (options.tokenStorageFactory) {
            this.tokenStorageFactory = options.tokenStorageFactory;
        }
        if (options.staleness !== undefined) {
            this.staleness = options.staleness;
        }
    };
    EntityManagerFactory.prototype.connect = function (hostOrApp, port, secure, basePath) {
        if (this.connection) {
            throw new Error('The EntityManagerFactory is already connected.');
        }
        if (typeof port === 'boolean') {
            return this.connect(hostOrApp, 0, port, secure);
        }
        this.connection = connector_1.Connector.create(hostOrApp, port, secure, basePath);
        this[CONNECTED]();
        return this.ready();
    };
    /**
     * Creates a new Metamodel instance, which is not connected
     * @return A new Metamodel instance
     */
    EntityManagerFactory.prototype.createMetamodel = function () {
        return new metamodel_1.Metamodel(this);
    };
    /**
     * Create a new application-managed EntityManager.
     *
     * @param useSharedTokenStorage The token storage to persist the authorization token, or
     * <code>true</code> To use the shared token storage of the emf.
     * <code>false</code> To use a instance based storage.
     *
     * @return a new entityManager
     */
    EntityManagerFactory.prototype.createEntityManager = function (useSharedTokenStorage) {
        var _this = this;
        var em = new EntityManager_1.EntityManager(this);
        if (this.isReady) {
            em.connected(this.connection, this.connectData, useSharedTokenStorage ? this.tokenStorage : new intersection_1.TokenStorage(this.connection.origin));
        }
        else {
            em.withLock(function () { return _this.ready().then(function () {
                em.connected(_this.connection, _this.connectData, useSharedTokenStorage ? _this.tokenStorage : new intersection_1.TokenStorage(_this.connection.origin));
            }); }, true);
        }
        return em;
    };
    EntityManagerFactory.prototype.send = function (msg) {
        if (!msg.tokenStorage()) {
            msg.tokenStorage(this.tokenStorage);
        }
        return this.connection.send(msg);
    };
    return EntityManagerFactory;
}(util_1.Lockable));
exports.EntityManagerFactory = EntityManagerFactory;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRW50aXR5TWFuYWdlckZhY3RvcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJFbnRpdHlNYW5hZ2VyRmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsaURBQWdEO0FBQ2hELHlEQUFxQztBQUNyQyx5Q0FFcUI7QUFDckIsK0JBQTJDO0FBQzNDLCtDQUF5RTtBQUN6RSx5Q0FBd0M7QUFFeEMsSUFBTSxTQUFTLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQ3RDLElBQU0sRUFBRSxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztBQVkvQjtJQUEwQyxnREFBUTtJQW9DaEQ7Ozs7Ozs7Ozs7Ozs7T0FhRztJQUNILDhCQUFZLE9BU0c7UUFUSCx3QkFBQSxFQUFBLFlBU0c7UUFUZixZQVVFLGlCQUFPLFNBMERSO1FBckhNLGdCQUFVLEdBQXFCLElBQUksQ0FBQztRQUVwQyxlQUFTLEdBQWMsS0FBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBRTlDLFVBQUksR0FBUyxJQUFJLG1CQUFJLENBQUMsS0FBSSxDQUFDLFNBQVMsRUFBRSxLQUFJLENBQUMsQ0FBQztRQUU1Qyx5QkFBbUIsR0FBd0IsMkJBQVksQ0FBQyxXQUFXLElBQUksMkJBQVksQ0FBQyxNQUFNLENBQUM7UUFFM0Ysa0JBQVksR0FBd0IsSUFBSSxDQUFDO1FBRXpDLGVBQVMsR0FBa0IsSUFBSSxDQUFDO1FBbURyQyxJQUFNLEdBQUcsR0FBRyxPQUFPLE9BQU8sS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLElBQUksRUFBRSxDQUFDO1FBRTVFLEtBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFcEIsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ25CLElBQUksS0FBSyxHQUFHLElBQUksT0FBTyxDQUFPLFVBQUMsT0FBTztZQUNwQyxLQUFJLENBQUMs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

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityManager = void 0;
var tslib_1 = __webpack_require__(0);
var messages = tslib_1.__importStar(__webpack_require__(2));
var binding_1 = __webpack_require__(5);
var util_1 = __webpack_require__(3);
var connector_1 = __webpack_require__(6);
var caching_1 = __webpack_require__(32);
var GeoPoint_1 = __webpack_require__(33);
var query_1 = __webpack_require__(34);
var error_1 = __webpack_require__(4);
var metamodel_1 = __webpack_require__(13);
var intersection_1 = __webpack_require__(1);
var Message_1 = __webpack_require__(39);
var DB_PREFIX = '/db/';
var EntityManager = /** @class */ (function (_super) {
    tslib_1.__extends(EntityManager, _super);
    /**
     * @param entityManagerFactory The factory which of this entityManager instance
     */
    function EntityManager(entityManagerFactory) {
        var _this = _super.call(this) || this;
        /**
         * Constructor for a new List collection
         */
        _this.List = Array;
        /**
         * Constructor for a new Set collection
         */
        _this.Set = Set;
        /**
         * Constructor for a new Map collection
         */
        _this.Map = Map;
        /**
         * Constructor for a new GeoPoint
         */
        _this.GeoPoint = GeoPoint_1.GeoPoint;
        /**
         * Log messages can created by calling log directly as function, with a specific log level or with the helper
         * methods, which a members of the log method.
         *
         * Logs will be filtered by the client logger and the before they persisted. The default log level is
         * 'info' therefore all log messages below the given message aren't persisted.
         *
         * Examples:
         * <pre class="prettyprint">
         // default log level ist info
         db.log('test message %s', 'my string');
         // info: test message my string
      
         // pass a explicit log level as the first argument, one of ('trace', 'debug', 'info', 'warn', 'error')
         db.log('warn', 'test message %d', 123);
         // warn: test message 123
      
         // debug log level will not be persisted by default, since the default logging level is info
         db.log('debug', 'test message %j', {number: 123}, {});
         // debug: test message {"number":123}
         // data = {}
      
         // One additional json object can be provided, which will be persisted together with the log entry
         db.log('info', 'test message %s, %s', 'first', 'second', {number: 123});
         // info: test message first, second
         // data = {number: 123}
      
         //use the log level helper
         db.log.info('test message', 'first', 'second', {number: 123});
         // info: test message first second
         // data = {number: 123}
      
         //change the default log level to trace, i.e. all log levels will be persisted, note that the log level can be
         //additionally configured in the baqend
         db.log.level = 'trace';
      
         //trace will be persisted now
         db.log.trace('test message', 'first', 'second', {number: 123});
         // info: test message first second
         // data = {number: 123}
         * </pre>
         */
        _this.log = intersection_1.Logger.create(_this);
        /**
         * The connector used for requests
         */
        _this.connection = null;
        /**
         * All managed and cached entity instances
         * @type Map<String,Entity>
         * @private
         */
        _this.entities = {};
        _this.modules = new intersection_1.Modules(_this);
        /**
         * The current logged in user object
         */
        _this.me = null;
        /**
         * The current registered device object
         */
        _this.deviceMe = null;
        /**
         * Returns the tokenStorage which will be used to authorize all requests.
         */
        _this.tokenStorage = null; // is never null after em is ready
        /**
         * The bloom filter which contains staleness information of cached objects
         */
        _this.bloomFilter = null;
        /**
         * Set of object ids that were revalidated after the Bloom filter was loaded.
         */
        _this.cacheWhiteList = null;
        /**
         * Set of object ids that were updated but are not yet included in the bloom filter.
         * This set essentially implements revalidation by side effect which does not work in Chrome.
         */
        _this.cacheBlackList = null;
        /**
         * Bloom filter refresh interval in seconds.
         */
        _this.bloomFilterRefresh = 60;
        /**
         * Bloom filter refresh Promise
         */
        _this.bloomFilterLock = new util_1.Lockable();
        /**
         * A File factory for file objects.
         * The file factory can be called to create new instances for files.
         * The created instances implements the {@link File} interface
         */
        _this.File = null; // is never null after the em is ready
        _this.entityManagerFactory = entityManagerFactory;
        _this.metamodel = entityManagerFactory.metamodel;
        _this.code = entityManagerFactory.code;
        return _this;
    }
    Object.defineProperty(EntityManager.prototype, "isOpen", {
        /**
         * Determine whether the entity manager is open.
         * true until the entity manager has been closed
         */
        get: function () {
            return !!this.connection;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EntityManager.prototype, "token", {
        /**
         * The authentication token if the user is logged in currently
         */
        get: function () {
            return this.tokenStorage.token;
        },
        /**
         * The authentication token if the user is logged in currently
         * @param value
         */
        set: function (value) {
            this.tokenStorage.update(value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EntityManager.prototype, "isCachingDisabled", {
        /**
         * Whether caching is disabled
         * @deprecated
         */
        get: function () {
            return !this.isCachingEnabled();
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Whether caching is enabled
     */
    EntityManager.prototype.isCachingEnabled = function () {
        return !!this.bloomFilter;
    };
    Object.defineProperty(EntityManager.prototype, "isDeviceRegistered", {
        /**
         * Returns true if the device token is already registered, otherwise false.
         */
        get: function () {
            return !!this.deviceMe;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Connects this entityManager, used for synchronous and asynchronous initialization
     * @param connector
     * @param connectData
     * @param tokenStorage The used tokenStorage for token persistence
     */
    EntityManager.prototype.connected = function (connector, connectData, tokenStorage) {
        this.connection = connector;
        this.tokenStorage = tokenStorage;
        this.bloomFilterRefresh = this.entityManagerFactory.staleness;
        this.File = binding_1.FileFactory.create(this);
        this._createObjectFactory(this.metamodel.embeddables);
        this._createObjectFactory(this.metamodel.entities);
        if (connectData) {
            if (connectData.device) {
                this._updateDevice(connectData.device);
            }
            if (connectData.user && tokenStorage.token) {
                this._updateUser(connectData.user, true);
            }
            if (this.bloomFilterRefresh > 0 && connectData.bloomFilter && util_1.atob && !util_1.isNode) {
                this._updateBloomFilter(connectData.bloomFilter);
            }
        }
    };
    /**
     * @param types
     * @return    * @private
     */
    EntityManager.prototype._createObjectFactory = function (types) {
        var values = Object.values(types);
        var _loop_1 = function (i) {
            var type = values[i];
            var name_1 = type.name;
            if (this_1[name_1]) {
                type.typeConstructor = this_1[name_1];
                Object.defineProperty(this_1, name_1, {
                    value: type.createObjectFactory(this_1),
                });
            }
            else {
                Object.defineProperty(this_1, name_1, {
                    get: function () {
                        Object.defineProperty(this, name_1, {
                            value: type.createObjectFactory(this),
                        });
                        return this[name_1];
                    },
                    set: function (typeConstructor) {
                        type.typeConstructor = typeConstructor;
                    },
                    configurable: true,
                });
            }
        };
        var this_1 = this;
        for (var i = 0; i < values.length; i += 1) {
            _loop_1(i);
        }
    };
    EntityManager.prototype.send = function (message, ignoreCredentialError) {
        var _this = this;
        if (ignoreCredentialError === void 0) { ignoreCredentialError = true; }
        if (!this.connection) {
            throw new Error('This EntityManager is not connected.');
        }
        var msg = message;
        msg.tokenStorage(this.tokenStorage);
        var result = this.connection.send(msg);
        if (!ignoreCredentialError) {
            result = result.catch(function (e) {
                if (e.status === connector_1.StatusCode.BAD_CREDENTIALS) {
                    _this._logout();
                }
                throw e;
            });
        }
        return result;
    };
    /**
     * Get an instance whose state may be lazily fetched
     *
     * If the requested instance does not exist in the database, the
     * EntityNotFoundError is thrown when the instance state is first accessed.
     * The application should not expect that the instance state will be available upon detachment,
     * unless it was accessed by the application while the entity manager was open.
     *
     * @param entityClass
     * @param key
     * @return
     */
    EntityManager.prototype.getReference = function (entityClass, key) {
        var id = null;
        var type;
        if (key) {
            var keyAsStr = key;
            type = this.metamodel.entity(entityClass);
            if (keyAsStr.indexOf(DB_PREFIX) === 0) {
                id = keyAsStr;
            }
            else {
                id = type.ref + "/" + encodeURIComponent(keyAsStr);
            }
        }
        else if (typeof entityClass === 'string') {
            var keyIndex = entityClass.indexOf('/', DB_PREFIX.length); // skip /db/
            if (keyIndex !== -1) {
                id = entityClass;
            }
            type = this.metamodel.entity(keyIndex !== -1 ? entityClass.substring(0, keyIndex) : entityClass);
        }
        else {
            type = this.metamodel.entity(entityClass);
        }
        var entity = this.entities[id];
        if (!entity) {
            entity = type.create();
            var metadata = intersection_1.Metadata.get(entity);
            if (id) {
                metadata.id = id;
            }
            metadata.setUnavailable();
            this._attach(entity);
        }
        return entity;
    };
    /**
     * Creates an instance of {@link Builder<T>} for query creation and execution
     *
     * The query results are instances of the resultClass argument.
     *
     * @param resultClass - the type of the query result
     * @return A query builder to create one ore more queries for the specified class
     */
    EntityManager.prototype.createQueryBuilder = function (resultClass) {
        return new query_1.Builder(this, resultClass);
    };
    /**
     * Clear the persistence context, causing all managed entities to become detached
     *
     * Changes made to entities that have not been flushed to the database will not be persisted.
     *
     * @return
     */
    EntityManager.prototype.clear = function () {
        this.entities = {};
    };
    /**
     * Close an application-managed entity manager
     *
     * After the close method has been invoked, all methods on the EntityManager instance
     * and any Query and TypedQuery objects obtained from it will throw the IllegalStateError
     * except for transaction, and isOpen (which will return false). If this method
     * is called when the entity manager is associated with an active transaction,
     * the persistence context remains managed until the transaction completes.
     *
     * @return
     */
    EntityManager.prototype.close = function () {
        this.connection = null;
        return this.clear();
    };
    /**
     * Check if the instance is a managed entity instance belonging to the current persistence context
     *
     * @param entity - entity instance
     * @return boolean indicating if entity is in persistence context
     */
    EntityManager.prototype.contains = function (entity) {
        return !!entity && !!entity.id && this.entities[entity.id] === entity;
    };
    /**
     * Check if an object with the id from the given entity is already attached
     *
     * @param entity - entity instance
     * @return boolean indicating if entity with same id is attached
     */
    EntityManager.prototype.containsById = function (entity) {
        return !!(entity && entity.id && this.entities[entity.id]);
    };
    /**
     * Remove the given entity from the persistence context, causing a managed entity to become detached
     *
     * Unflushed changes made to the entity if any (including removal of the entity),
     * will not be synchronized to the database. Entities which previously referenced the detached entity will continue
     * to reference it.
     *
     * @param entity The entity instance to detach.
     * @return
     */
    EntityManager.prototype.detach = function (entity) {
        var _this = this;
        var state = intersection_1.Metadata.get(entity);
        return state.withLock(function () {
            _this.removeReference(entity);
            return Promise.resolve(entity);
        });
    };
    /**
     * Resolve the depth by loading the referenced objects of the given entity
     *
     * @param entity - entity instance
     * @param [options] The load options
     * @return
     */
    EntityManager.prototype.resolveDepth = function (entity, options) {
        var _this = this;
        if (!options || !options.depth) {
            return Promise.resolve(entity);
        }
        var resolved = options.resolved || [];
        var promises = [];
        var subOptions = tslib_1.__assign(tslib_1.__assign({}, options), { resolved: resolved, depth: options.depth === true ? true : options.depth - 1 });
        this.getSubEntities(entity, 1).forEach(function (subEntity) {
            if (subEntity !== null && resolved.indexOf(subEntity) === -1 && subEntity.id) {
                resolved.push(subEntity);
                promises.push(_this.load(subEntity.id, undefined, subOptions));
            }
        });
        return Promise.all(promises).then(function () { return entity; });
    };
    /**
     * Search for an entity of the specified oid
     *
     * If the entity instance is contained in the persistence context, it is returned from there.
     *
     * @param entityClass - entity class
     * @param oid - Object ID
     * @param [options] The load options.
     * @return the loaded entity or null
     */
    EntityManager.prototype.load = function (entityClass, oid, options) {
        var _this = this;
        var opt = options || {};
        var entity = this.getReference(entityClass, oid);
        var state = intersection_1.Metadata.get(entity);
        if (!opt.refresh && opt.local && state.isAvailable) {
            return this.resolveDepth(entity, opt);
        }
        var msg = new messages.GetObject(state.bucket, state.key);
        this.ensureCacheHeader(entity.id, msg, opt.refresh);
        return this.send(msg).then(function (response) {
            // refresh object if loaded older version from cache
            // chrome doesn't using cache when ifNoneMatch is set
            if (entity.version && entity.version > response.entity.version) {
                opt.refresh = true;
                return _this.load(entityClass, oid, opt);
            }
            _this.addToWhiteList(response.entity.id);
            if (response.status !== connector_1.StatusCode.NOT_MODIFIED) {
                state.type.fromJsonValue(state, response.entity, entity, { persisting: true });
            }
            return _this.resolveDepth(entity, opt);
        }, function (e) {
            if (e.status === connector_1.StatusCode.OBJECT_NOT_FOUND) {
                _this.removeReference(entity);
                state.setRemoved();
                return null;
            }
            throw e;
        });
    };
    /**
     * @param entity
     * @param options
     * @return
     */
    EntityManager.prototype.insert = function (entity, options) {
        var _this = this;
        var opt = options || {};
        var isNew;
        return this._save(entity, opt, function (state, json) {
            if (state.version) {
                throw new error_1.PersistentError('Existing objects can\'t be inserted.');
            }
            isNew = !state.id;
            return new messages.CreateObject(state.bucket, json);
        }).then(function (val) {
            if (isNew) {
                _this._attach(entity);
            }
            return val;
        });
    };
    /**
     * @param entity
     * @param options
     * @return
     */
    EntityManager.prototype.update = function (entity, options) {
        var opt = options || {};
        return this._save(entity, opt, function (state, json) {
            if (!state.version) {
                throw new error_1.PersistentError('New objects can\'t be inserted.');
            }
            if (opt.force) {
                var version = json.version, jsonWithoutVersion = tslib_1.__rest(json, ["version"]);
                return new messages.ReplaceObject(state.bucket, state.key, jsonWithoutVersion)
                    .ifMatch('*');
            }
            return new messages.ReplaceObject(state.bucket, state.key, json)
                .ifMatch("" + state.version);
        });
    };
    /**
     * @param entity
     * @param options The save options
     * @param withoutLock Set true to save the entity without locking
     * @return
     */
    EntityManager.prototype.save = function (entity, options, withoutLock) {
        if (withoutLock === void 0) { withoutLock = false; }
        var opt = options || {};
        var msgFactory = function (state, json) {
            if (opt.force) {
                if (!state.id) {
                    throw new error_1.PersistentError('New special objects can\'t be forcefully saved.');
                }
                var version = json.version, jsonWithoutVersion = tslib_1.__rest(json, ["version"]);
                return new messages.ReplaceObject(state.bucket, state.key, jsonWithoutVersion);
            }
            if (state.version) {
                return new messages.ReplaceObject(state.bucket, state.key, json)
                    .ifMatch(state.version);
            }
            return new messages.CreateObject(state.bucket, json);
        };
        return withoutLock ? this._locklessSave(entity, opt, msgFactory) : this._save(entity, opt, msgFactory);
    };
    /**
     * @param entity
     * @param cb pre-safe callback
     * @return
     */
    EntityManager.prototype.optimisticSave = function (entity, cb) {
        var _this = this;
        return intersection_1.Metadata.get(entity).withLock(function () { return _this._optimisticSave(entity, cb); });
    };
    /**
     * @param entity
     * @param cb pre-safe callback
     * @return
     * @private
     */
    EntityManager.prototype._optimisticSave = function (entity, cb) {
        var _this = this;
        var abort = false;
        var abortFn = function () {
            abort = true;
        };
        var promise = Promise.resolve(cb(entity, abortFn));
        if (abort) {
            return Promise.resolve(entity);
        }
        return promise.then(function () { return (_this.save(entity, {}, true)
            .catch(function (e) {
            if (e.status === 412) {
                return _this.refresh(entity, {})
                    .then(function () { return _this._optimisticSave(entity, cb); });
            }
            throw e;
        })); });
    };
    /**
     * Save the object state without locking
     * @param entity
     * @param options
     * @param msgFactory
     * @return
     * @private
     */
    EntityManager.prototype._locklessSave = function (entity, options, msgFactory) {
        var _this = this;
        this.attach(entity);
        var state = intersection_1.Metadata.get(entity);
        var refPromises;
        var json;
        if (state.isAvailable) {
            // getting json will check all collections changes, therefore we must do it before proofing the dirty state
            json = state.type.toJsonValue(state, entity, {
                persisting: true,
            });
        }
        if (state.isDirty) {
            if (!options.refresh) {
                state.setPersistent();
            }
            var sendPromise = this.send(msgFactory(state, json)).then(function (response) {
                if (state.id && state.id !== response.entity.id) {
                    _this.removeReference(entity);
                    state.id = response.entity.id;
                    _this._attach(entity);
                }
                state.type.fromJsonValue(state, response.entity, entity, {
                    persisting: options.refresh,
                    onlyMetadata: !options.refresh,
                });
                return entity;
            }, function (e) {
                if (e.status === connector_1.StatusCode.OBJECT_NOT_FOUND) {
                    _this.removeReference(entity);
                    state.setRemoved();
                    return null;
                }
                state.setDirty();
                throw e;
            });
            refPromises = [sendPromise];
        }
        else {
            refPromises = [Promise.resolve(entity)];
        }
        var subOptions = tslib_1.__assign({}, options);
        subOptions.depth = 0;
        this.getSubEntities(entity, options.depth).forEach(function (sub) {
            refPromises.push(_this._save(sub, subOptions, msgFactory));
        });
        return Promise.all(refPromises).then(function () { return entity; });
    };
    /**
     * Save and lock the object state
     * @param entity
     * @param options
     * @param msgFactory
     * @return
     * @private
     */
    EntityManager.prototype._save = function (entity, options, msgFactory) {
        var _this = this;
        this.ensureBloomFilterFreshness();
        var state = intersection_1.Metadata.get(entity);
        if (state.version) {
            this.addToBlackList(entity.id);
        }
        return state.withLock(function () { return _this._locklessSave(entity, options, msgFactory); });
    };
    /**
     * Returns all referenced sub entities for the given depth and root entity
     * @param entity
     * @param depth
     * @param [resolved]
     * @param initialEntity
     * @return
     */
    EntityManager.prototype.getSubEntities = function (entity, depth, resolved, initialEntity) {
        if (resolved === void 0) { resolved = []; }
        if (!depth) {
            return resolved;
        }
        var obj = initialEntity || entity;
        var state = intersection_1.Metadata.get(entity);
        var iter = state.type.references();
        for (var item = iter.next(); !item.done; item = iter.next()) {
            var value = item.value;
            var subEntities = this.getSubEntitiesByPath(entity, value.path);
            for (var i = 0, len = subEntities.length; i < len; i += 1) {
                var subEntity = subEntities[i];
                if (resolved.indexOf(subEntity) === -1 && subEntity !== obj) {
                    resolved.push(subEntity);
                    this.getSubEntities(subEntity, depth === true ? depth : depth - 1, resolved, obj);
                }
            }
        }
        return resolved;
    };
    /**
     * Returns all referenced one level sub entities for the given path
     * @param entity
     * @param path
     * @return
     */
    EntityManager.prototype.getSubEntitiesByPath = function (entity, path) {
        var _this = this;
        var subEntities = [entity];
        path.forEach(function (attributeName) {
            var tmpSubEntities = [];
            subEntities.forEach(function (subEntity) {
                var curEntity = subEntity[attributeName];
                if (!curEntity) {
                    return;
                }
                var attribute = _this.metamodel.managedType(subEntity.constructor).getAttribute(attributeName);
                if (attribute instanceof metamodel_1.PluralAttribute) {
                    var iter = curEntity.entries();
                    for (var item = iter.next(); !item.done; item = iter.next()) {
                        var entry = item.value;
                        tmpSubEntities.push(entry[1]);
                        if (attribute instanceof metamodel_1.MapAttribute && attribute.keyType.isEntity) {
                            tmpSubEntities.push(entry[0]);
                        }
                    }
                }
                else {
                    tmpSubEntities.push(curEntity);
                }
            });
            subEntities = tmpSubEntities;
        });
        return subEntities;
    };
    /**
     * Delete the entity instance.
     * @param entity
     * @param options The delete options
     * @return
     */
    EntityManager.prototype.delete = function (entity, options) {
        var _this = this;
        var opt = options || {};
        this.attach(entity);
        var state = intersection_1.Metadata.get(entity);
        return state.withLock(function () {
            if (!state.version && !opt.force) {
                throw new error_1.IllegalEntityError(entity);
            }
            var msg = new messages.DeleteObject(state.bucket, state.key);
            _this.addToBlackList(entity.id);
            if (!opt.force) {
                msg.ifMatch("" + state.version);
            }
            var refPromises = [_this.send(msg).then(function () {
                    _this.removeReference(entity);
                    state.setRemoved();
                    return entity;
                })];
            var subOptions = tslib_1.__assign({}, opt);
            subOptions.depth = 0;
            _this.getSubEntities(entity, opt.depth).forEach(function (sub) {
                refPromises.push(_this.delete(sub, subOptions));
            });
            return Promise.all(refPromises).then(function () { return entity; });
        });
    };
    /**
     * Synchronize the persistence context to the underlying database.
     *
     * @return
     */
    EntityManager.prototype.flush = function () {
        throw new Error('Not implemented.');
    };
    /**
     * Make an instance managed and persistent.
     * @param entity - entity instance
     * @return
     */
    EntityManager.prototype.persist = function (entity) {
        this.attach(entity);
    };
    /**
     * Refresh the state of the instance from the database, overwriting changes made to the entity, if any.
     * @param entity - entity instance
     * @param options The refresh options
     * @return
     */
    EntityManager.prototype.refresh = function (entity, options) {
        if (!entity.id) {
            // entity is not persisted so far
            return Promise.resolve(entity);
        }
        return this.load(entity.id, undefined, tslib_1.__assign(tslib_1.__assign({}, options), { refresh: true }));
    };
    /**
     * Attach the instance to this database context, if it is not already attached
     * @param entity The entity to attach
     * @return
     */
    EntityManager.prototype.attach = function (entity) {
        if (!this.contains(entity)) {
            var type = this.metamodel.entity(entity.constructor);
            if (!type) {
                throw new error_1.IllegalEntityError(entity);
            }
            if (this.containsById(entity)) {
                throw new error_1.EntityExistsError(entity);
            }
            this._attach(entity);
        }
    };
    EntityManager.prototype._attach = function (entity) {
        var metadata = intersection_1.Metadata.get(entity);
        if (metadata.isAttached) {
            if (metadata.db !== this) {
                throw new error_1.EntityExistsError(entity);
            }
        }
        else {
            metadata.db = this;
        }
        if (!metadata.id) {
            if (metadata.type.name !== 'User' && metadata.type.name !== 'Role' && metadata.type.name !== 'logs.AppLog') {
                metadata.id = DB_PREFIX + metadata.type.name + "/" + util_1.uuid();
            }
        }
        if (metadata.id) {
            this.entities[metadata.id] = entity;
        }
    };
    EntityManager.prototype.removeReference = function (entity) {
        var state = intersection_1.Metadata.get(entity);
        if (!state || !state.id) {
            throw new error_1.IllegalEntityError(entity);
        }
        delete this.entities[state.id];
    };
    EntityManager.prototype.register = function (user, password, loginOption) {
        var _this = this;
        var login = loginOption > binding_1.LoginOption.NO_LOGIN;
        if (this.me && login) {
            throw new error_1.PersistentError('User is already logged in.');
        }
        return this.withLock(function () {
            var msg = new messages.Register({ user: user, password: password, login: login });
            return _this._userRequest(msg, loginOption);
        });
    };
    EntityManager.prototype.login = function (username, password, loginOption) {
        var _this = this;
        if (this.me) {
            throw new error_1.PersistentError('User is already logged in.');
        }
        return this.withLock(function () {
            var msg = new messages.Login({ username: username, password: password });
            return _this._userRequest(msg, loginOption);
        });
    };
    EntityManager.prototype.logout = function () {
        var _this = this;
        return this.withLock(function () { return _this.send(new messages.Logout()).then(_this._logout.bind(_this)); });
    };
    EntityManager.prototype.loginWithOAuth = function (provider, options) {
        if (!this.connection) {
            throw new Error('This EntityManager is not connected.');
        }
        if (this.me) {
            throw new error_1.PersistentError('User is already logged in.');
        }
        var opt = tslib_1.__assign({ title: "Login with " + provider, timeout: 5 * 60 * 1000, state: {}, loginOption: true, oAuthVersion: 2, open: util_1.openWindow }, options);
        if (opt.deviceCode) {
            return this._loginOAuthDevice(provider.toLowerCase(), opt);
        }
        if (opt.oAuthVersion !== 1 && !opt.path && !opt.deviceCode) {
            throw new Error('No OAuth path is provided to start the OAuth flow.');
        }
        if (opt.redirect) {
            Object.assign(opt.state, { redirect: opt.redirect, loginOption: opt.loginOption });
        }
        var oAuthEndpoint = "" + this.connection.origin + this.connection.basePath + "/db/User/OAuth/" + provider.toLowerCase();
        var url = opt.oAuthVersion === 1 ? oAuthEndpoint : Message_1.appendQueryParams(opt.path, {
            client_id: opt.clientId,
            scope: opt.scope,
            state: JSON.stringify(opt.state),
            redirect_uri: oAuthEndpoint,
        });
        var windowOptions = {
            title: opt.title,
            width: opt.width,
            height: opt.height,
        };
        if (opt.redirect) {
            // use oauth via redirect by opening the login in the same window
            return opt.open(url, tslib_1.__assign({ target: '_self' }, windowOptions)) || url;
        }
        var req = this._userRequest(new connector_1.OAuthMessage(), opt.loginOption);
        if (!opt.open(url, windowOptions)) {
            throw new Error('The OAuth flow with a Pop-Up can only be issued in browsers. Add a redirect URL to the options to return to your app via that redirect after the OAuth flow succeed.');
        }
        return new Promise(function (resolve, reject) {
            var timeout = setTimeout(function () {
                reject(new error_1.PersistentError('OAuth login timeout.'));
            }, opt.timeout);
            req.then(resolve, reject).then(function () {
                clearTimeout(timeout);
            });
        });
    };
    EntityManager.prototype._loginOAuthDevice = function (provider, opt) {
        var _this = this;
        return this._userRequest(new messages.OAuth2(provider, opt.deviceCode), opt.loginOption)
            .catch(function () { return new Promise(function (resolve) { return setTimeout(resolve, 5000); })
            .then(function () { return _this._loginOAuthDevice(provider, opt); }); });
    };
    EntityManager.prototype.renew = function (loginOption) {
        var _this = this;
        return this.withLock(function () {
            var msg = new messages.Me();
            return _this._userRequest(msg, loginOption);
        });
    };
    EntityManager.prototype.newPassword = function (username, password, newPassword) {
        var _this = this;
        return this.withLock(function () {
            var msg = new messages.NewPassword({ username: username, password: password, newPassword: newPassword });
            return _this.send(msg, true).then(function (response) { return _this._updateUser(response.entity); });
        });
    };
    EntityManager.prototype.newPasswordWithToken = function (token, newPassword, loginOption) {
        var _this = this;
        return this.withLock(function () { return (_this._userRequest(new messages.NewPassword({ token: token, newPassword: newPassword }), loginOption)); });
    };
    EntityManager.prototype.resetPassword = function (username) {
        return this.send(new messages.ResetPassword({ username: username }));
    };
    EntityManager.prototype.changeUsername = function (username, newUsername, password) {
        return this.send(new messages.ChangeUsername({ username: username, newUsername: newUsername, password: password }));
    };
    EntityManager.prototype._updateUser = function (obj, updateMe) {
        if (updateMe === void 0) { updateMe = false; }
        var user = this.getReference(obj.id);
        var metadata = intersection_1.Metadata.get(user);
        metadata.type.fromJsonValue(metadata, obj, user, { persisting: true });
        if (updateMe) {
            this.me = user;
        }
        return user;
    };
    EntityManager.prototype._logout = function () {
        this.me = null;
        this.token = null;
    };
    EntityManager.prototype._userRequest = function (msg, loginOption) {
        var _this = this;
        var opt = loginOption === undefined ? true : loginOption;
        var login = opt > binding_1.LoginOption.NO_LOGIN;
        if (login) {
            this.tokenStorage.temporary = opt < binding_1.LoginOption.PERSIST_LOGIN;
        }
        return this.send(msg, !login)
            .then(function (response) { return (response.entity ? _this._updateUser(response.entity, login) : null); }, function (e) {
            if (e.status === connector_1.StatusCode.OBJECT_NOT_FOUND) {
                if (login) {
                    _this._logout();
                }
                return null;
            }
            throw e;
        });
    };
    /**
     * @param deviceType The OS of the device (IOS/Android)
     * @param subscription WebPush subscription
     * @param device
     * @return
     */
    EntityManager.prototype.registerDevice = function (deviceType, subscription, device) {
        var _this = this;
        var msg = new messages.DeviceRegister({ devicetype: deviceType, subscription: subscription, device: device });
        msg.withCredentials = true;
        return this.send(msg)
            .then(function (response) { return _this._updateDevice(response.entity); });
    };
    EntityManager.prototype._updateDevice = function (obj) {
        var device = this.getReference(obj.id);
        var metadata = intersection_1.Metadata.get(device);
        metadata.type.fromJsonValue(metadata, obj, device, { persisting: true });
        this.deviceMe = device;
        return device;
    };
    EntityManager.prototype.checkDeviceRegistration = function () {
        return this.send(new messages.DeviceRegistered())
            .then(function () { return true; }, function (e) {
            if (e.status === connector_1.StatusCode.OBJECT_NOT_FOUND) {
                return false;
            }
            throw e;
        });
    };
    EntityManager.prototype.pushDevice = function (pushMessage) {
        return this.send(new messages.DevicePush(pushMessage.toJSON()));
    };
    /**
     * The given entity will be checked by the validation code of the entity type.
     *
     * @param entity
     * @return result
     */
    EntityManager.prototype.validate = function (entity) {
        var type = intersection_1.Metadata.get(entity).type;
        var result = new intersection_1.ValidationResult();
        var iter = type.attributes();
        for (var item = iter.next(); !item.done; item = iter.next()) {
            var validate = new intersection_1.Validator(item.value.name, entity);
            result.fields[validate.key] = validate;
        }
        var validationCode = type.validationCode;
        if (validationCode) {
            validationCode(result.fields);
        }
        return result;
    };
    /**
     * Adds the given object id to the cacheWhiteList if needed.
     * @param objectId The id to add.
     * @return
     */
    EntityManager.prototype.addToWhiteList = function (objectId) {
        if (this.isCachingEnabled()) {
            if (this.bloomFilter.contains(objectId)) {
                this.cacheWhiteList.add(objectId);
            }
            this.cacheBlackList.delete(objectId);
        }
    };
    /**
     * Adds the given object id to the cacheBlackList if needed.
     * @param objectId The id to add.
     * @return
     */
    EntityManager.prototype.addToBlackList = function (objectId) {
        if (this.isCachingEnabled() && objectId) {
            if (!this.bloomFilter.contains(objectId)) {
                this.cacheBlackList.add(objectId);
            }
            this.cacheWhiteList.delete(objectId);
        }
    };
    EntityManager.prototype.refreshBloomFilter = function () {
        var _this = this;
        if (!this.isCachingEnabled()) {
            return Promise.resolve(null);
        }
        var msg = new messages.GetBloomFilter();
        msg.noCache();
        return this.send(msg).then(function (response) {
            _this._updateBloomFilter(response.entity);
            return _this.bloomFilter;
        });
    };
    EntityManager.prototype._updateBloomFilter = function (bloomFilter) {
        this.bloomFilter = new caching_1.BloomFilter(bloomFilter);
        this.cacheWhiteList = new Set();
        this.cacheBlackList = new Set();
    };
    /**
     * Checks the freshness of the bloom filter and does a reload if necessary
     */
    EntityManager.prototype.ensureBloomFilterFreshness = function () {
        var _this = this;
        if (!this.isCachingEnabled()) {
            return;
        }
        var now = new Date().getTime();
        var refreshRate = this.bloomFilterRefresh * 1000;
        if (this.bloomFilterLock.isReady && now - this.bloomFilter.creation > refreshRate) {
            this.bloomFilterLock.withLock(function () { return _this.refreshBloomFilter(); });
        }
    };
    /**
     * Checks for a given id, if revalidation is required, the resource is stale or caching was disabled
     * @param id The object id to check
     * @return Indicates if the resource must be revalidated
     */
    EntityManager.prototype.mustRevalidate = function (id) {
        if (util_1.isNode) {
            return false;
        }
        this.ensureBloomFilterFreshness();
        if (!this.isCachingEnabled() || !this.bloomFilterLock.isReady) {
            return true;
        }
        return !this.cacheWhiteList.has(id) && (this.cacheBlackList.has(id) || this.bloomFilter.contains(id));
    };
    /**
     * @param id To check the bloom filter
     * @param message To attach the headers
     * @param refresh To force the reload headers
     * @return
     */
    EntityManager.prototype.ensureCacheHeader = function (id, message, refresh) {
        var noCache = refresh || !id || this.mustRevalidate(id);
        if (noCache) {
            message.noCache();
        }
    };
    /**
     * Creates a absolute url for the given relative one
     * @param relativePath the relative url
     * @param authorize indicates if authorization credentials should be generated and be attached to the url
     * @return a absolute url which is optionally signed with a resource token which authenticates the currently
     * logged in user
     */
    EntityManager.prototype.createURL = function (relativePath, authorize) {
        var _this = this;
        var connection = this.connection;
        if (!connection) {
            throw new Error('This EntityManager is not connected.');
        }
        return this.tokenStorage.signPath(connection.basePath + relativePath, authorize)
            .then(function (path) {
            var url = connection.origin + path;
            if (_this.mustRevalidate(relativePath)) {
                url += (authorize ? '&' : '?') + "BCB";
            }
            return url;
        });
    };
    /**
     * Requests a perpetual token for the given user
     *
     * Only users with the admin role are allowed to request an API token.
     *
     * @param entityClass
     * @param user The user object or id of the user object
     * @return
     */
    EntityManager.prototype.requestAPIToken = function (entityClass, user) {
        var userObj = this._getUserReference(entityClass, user);
        var msg = new messages.UserToken(userObj.key);
        return this.send(msg).then(function (resp) { return resp.entity; });
    };
    /**
     * Revoke all created tokens for the given user
     *
     * This method will revoke all previously issued tokens and the user must login again.
     *
     * @param entityClass
     * @param user The user object or id of the user object
     */
    EntityManager.prototype.revokeAllTokens = function (entityClass, user) {
        var userObj = this._getUserReference(entityClass, user);
        var msg = new messages.RevokeUserToken(userObj.key);
        return this.send(msg);
    };
    EntityManager.prototype._getUserReference = function (entityClass, user) {
        if (typeof user === 'string') {
            return this.getReference(entityClass, user);
        }
        return user;
    };
    tslib_1.__decorate([
        util_1.deprecated('EntityManager.isCachingEnabled()')
    ], EntityManager.prototype, "isCachingDisabled", null);
    return EntityManager;
}(util_1.Lockable));
exports.EntityManager = EntityManager;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRW50aXR5TWFuYWdlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkVudGl0eU1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLDBEQUFzQztBQUN0QyxxQ0FRbUI7QUFDbkIsK0JBUWdCO0FBQ2hCLHlDQUVxQjtBQUNyQixxQ0FBd0M7QUFDeEMsdUNBQXNDO0FBS3RDLGlDQUFrQztBQUNsQyxpQ0FBaUY7QUFDakYseUNBRXFCO0FBRXJCLCtDQVN3QjtBQUN4QiwrQ0FBd0Q7QUFFeEQsSUFBTSxTQUFTLEdBQUcsTUFBTSxDQUFDO0FBSXpCO0lBQW1DLHlDQUFRO0lBbUx6Qzs7T0FFRztJQUNILHVCQUFZLG9CQUEwQztRQUF0RCxZQUNFLGlCQUFPLFNBSVI7UUExTEQ7O1dBRUc7UUFDYSxVQUFJLEdBQUcsS0FBSyxDQUFDO1FBRTdCOztXQUVHO1FBQ2EsU0FBRyxHQUFHLEdBQUcsQ0FBQztRQUUxQjs7V0FFRztRQUNhLFNBQUcsR0FBRyxHQUFHLENBQUM7UUFFMUI7O1dBRUc7UUFDYSxjQUFRLEdBQUcsbUJBQVEsQ0FBQztRQWdEcEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1dBeUNHO1FBQ2EsU0FBRyxHQUFXLHFCQUFNLENBQUMsTUFBTSxDQUFDLEtBQUksQ0FBQyxDQUFDO1FBRWxEOztXQUVHO1FBQ0ksZ0JBQVUsR0FBc0IsSUFBSSxDQUFDO1FBRTVDOzs7O1dBSUc7UUFDSyxjQUFRLEdBQTZCLEVBQUUsQ0FBQztRQVFoQyxhQUFPLEdBQVksSUFBSSxzQkFBTyxDQUFDLEtBQUksQ0FBQyxDQUFDO1FBRXJEOztXQUVHO1FBQ0ksUUFBRSxHQUFzQixJQUFJLENBQUM7UUFFcEM7O1dBRUc7UUFDSSxjQUFRLEdBQXdCLElBQUksQ0FBQztRQUU1Qzs7V0FFRztRQUNJLGtCQUFZLEdBQWlCLElBQVcsQ0FBQyxDQUFDLGtDQUFrQztRQUVuRjs7V0FFRztRQUNJLGlCQUFXLEdBQXVCLElBQUksQ0FBQztRQUU5Qzs7V0FFRztRQUNJLG9CQUFjLEdBQXVCLElBQUksQ0FBQztRQUVqRDs7O1dBR0c7UUFDSSxvQkFBYyxHQUF1QixJQUFJLENBQUM7UUFFakQ7O1dBRUc7UUFDSSx3QkFBa0IsR0FBVyxFQUFFLENBQUM7UUFFdkM7O1dBRUc7UUFDYSxxQkFBZSxHQUFHLElBQUksZUFBUSxFQUFFLENBQUM7UUFFakQ7Ozs7V0FJRztRQUNJLFVBQUksR0FBZ0IsSUFBVyxDQUFDLENBQUMsc0NBQXNDO1FBTzVFLEtBQUksQ0FBQyxvQkFBb0IsR0FBRyxvQkFBb0IsQ0FBQztRQUNqRCxLQUFJLENBQUMsU0FBUyxHQUFHLG9CQUFvQixDQUFDLFNBQVMsQ0FBQztRQUNoRCxLQUFJLENBQUMsSUFBSSxHQUFHLG9CQUFvQixDQUFDLElBQUksQ0FBQzs7SUFDeEMsQ0FBQztJQWxLRCxzQkFBSSxpQ0FBTTtRQUpWOzs7V0FHRzthQUNIO1lBQ0UsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUMzQixDQUFDOzs7T0FBQTtJQUtELHNCQUFJLGdDQUFLO1FBSFQ7O1dBRUc7YUFDSDtZQUNFLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUM7UUFDakMsQ0FBQztRQXlCRDs7O1dBR0c7YUFDSCxVQUFVLEtBQW9CO1lBQzVCLElBQUksQ0FBQyxZQUFhLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ25DLENBQUM7OztPQS9CQTtJQU9ELHNCQUFJLDRDQUFpQjtRQUxyQjs7O1dBR0c7YUFFSDtZQUNFLE9BQU8sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUNsQyxDQUFDOzs7T0FBQTtJQUVEOztPQUVHO0lBQ0gsd0NBQWdCLEdBQWhCO1FBQ0UsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUM1QixDQUFDO0lBS0Qsc0JBQUksNkNBQWtCO1FBSHRCOztXQUVHO2FBQ0g7WUFDRSxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3pCLENBQUM7OztPQUFBO0lBb0lEOzs7OztPQUtHO0lBQ0gsaUNBQVMsR0FBVCxVQUFVLFNBQW9CLEVBQUUsV0FBd0IsRUFBRSxZQUEwQjtRQUNsRixJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztRQUM1QixJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQztRQUNqQyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFNBQVUsQ0FBQztRQUUvRCxJQUFJLENBQUMsSUFBSSxHQUFHLHFCQUFXLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3RELElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRW5ELElBQUksV0FBVyxFQUFFO1lBQ2YsSUFBSSxXQUFXLENBQUMsTUFBTSxFQUFFO2dCQUN0QixJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUN4QztZQUVELElBQUksV0FBVyxDQUFDLElBQUksSUFBSSxZQUFZLENBQUMsS0FBSyxFQUFFO2dCQUMxQyxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7YUFDMUM7WUFFRCxJQUFJLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxDQUFDLElBQUksV0FBVyxDQUFDLFdBQVcsSUFBSSxXQUFJLElBQUksQ0FBQyxhQUFNLEVBQUU7Z0JBQzdFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUM7YUFDbEQ7U0FDRjtJQUNILENBQUM7SUFFRDs7O09BR0c7SUFDSyw0Q0FBb0IsR0FBNUIsVUFBNkIsS0FBMkM7UUFDdEUsSUFBTSxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztnQ0FDM0IsQ0FBQztZQUNSLElBQU0sSUFBSSxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNmLElBQUEsTUFBSSxHQUFLLElBQUksS0FBVCxDQUFVO1lBRXRCLElBQUksT0FBSyxNQUFJLENBQUMsRUFBRTtnQkFDZCxJQUFJLENBQUMsZUFBZSxHQUFHLE9BQUssTUFBSSxDQUFDLENBQUM7Z0JBQ2xDLE1BQU0sQ0FBQyxjQUFjLFNBQU8sTUFBSSxFQUFFO29CQUNoQyxLQUFLLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixRQUFNO2lCQUN0QyxDQUFDLENBQUM7YUFDSjtpQkFBTTtnQkFDTCxNQUFNLENBQUMsY0FBYyxTQUFPLE1BQUksRUFBRTtvQkFDaEMsR0FBRzt3QkFDRCxNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxNQUFJLEVBQUU7NEJBQ2hDLEtBQUssRUFBRSxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDO3lCQUN0QyxDQUFDLENBQUM7d0JBRUgsT0FBTyxJQUFJLENBQUMsTUFBSSxDQUFDLENBQUM7b0JBQ3BCLENBQUM7b0JBQ0QsR0FBRyxZQUFDLGVBQWU7d0JBQ2pCLElBQUksQ0FBQyxlQUFlLEdBQUcsZUFBZSxDQUFDO29CQUN6QyxDQUFDO29CQUNELFlBQVksRUFBRSxJQUFJO2lCQUNuQixDQUFDLENBQUM7YUFDSjs7O1FBdkJILEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDO29CQUFoQyxDQUFDO1NBd0JUO0lBQ0gsQ0FBQztJQUVELDRCQUFJLEdBQUosVUFBSyxPQUFnQixFQUFFLHFCQUE0QjtRQUFuRCxpQkFpQkM7UUFqQnNCLHNDQUFBLEVBQUEsNEJBQTRCO1FBQ2pELElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ3BCLE1BQU0sSUFBSSxLQUFLLENBQUMsc0NBQXNDLENBQUMsQ0FBQztTQUN6RDtRQUVELElBQU0sR0FBRyxHQUFHLE9BQU8sQ0FBQztRQUNwQixHQUFHLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNwQyxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMscUJBQXFCLEVBQUU7WUFDMUIsTUFBTSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsVUFBQyxDQUFDO2dCQUN0QixJQUFJLENBQUMsQ0FBQyxNQUFNLEtBQUssc0JBQVUsQ0FBQyxlQUFlLEVBQUU7b0JBQzNDLEtBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztpQkFDaEI7Z0JBQ0QsTUFBTSxDQUFDLENBQUM7WUFDVixDQUFDLENBQUMsQ0FBQztTQUNKO1FBQ0QsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztJQUVEOzs7Ozs7Ozs7OztPQVdHO0lBQ0gsb0NBQVksR0FBWixVQUErQixXQUE4QixFQUFFLEdBQVk7UUFDekUsSUFBSSxFQUFFLEdBQWtCLElBQUksQ0FBQztRQUM3QixJQUFJLElBQTRCLENBQUM7UUFDakMsSUFBSSxHQUFHLEVBQUU7WUFDUCxJQUFNLFFBQVEsR0FBRyxHQUFHLENBQUM7WUFDckIsSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBRyxDQUFDO1lBQzVDLElBQUksUUFBUSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQ3JDLEVBQUUsR0FBRyxRQUFRLENBQUM7YUFDZjtpQkFBTTtnQkFDTCxFQUFFLEdBQU0sSUFBSSxDQUFDLEdBQUcsU0FBSSxrQkFBa0IsQ0FBQyxRQUFRLENBQUcsQ0FBQzthQUNwRDtTQUNGO2FBQU0sSUFBSSxPQUFPLFdBQVcsS0FBSyxRQUFRLEVBQUU7WUFDMUMsSUFBTSxRQUFRLEdBQUcsV0FBVyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsWUFBWTtZQUN6RSxJQUFJLFFBQVEsS0FBSyxDQUFDLENBQUMsRUFBRTtnQkFDbkIsRUFBRSxHQUFHLFdBQVcsQ0FBQzthQUNsQjtZQUNELElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUNsRzthQUFNO1lBQ0wsSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQzNDO1FBRUQsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFZLENBQU0sQ0FBQztRQUM5QyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ1gsTUFBTSxHQUFHLElBQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUN6QixJQUFNLFFBQVEsR0FBRyx1QkFBUSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN0QyxJQUFJLEVBQUUsRUFBRTtnQkFDTixRQUFRLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQzthQUNsQjtZQUNELFFBQVEsQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUMxQixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3RCO1FBRUQsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztJQUVEOzs7Ozs7O09BT0c7SUFDSCwwQ0FBa0IsR0FBbEIsVUFBcUMsV0FBcUI7UUFDeEQsT0FBTyxJQUFJLGVBQU8sQ0FBQyxJQUFJLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNILDZCQUFLLEdBQUw7UUFDRSxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRUQ7Ozs7Ozs7Ozs7T0FVRztJQUNILDZCQUFLLEdBQUw7UUFDRSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUV2QixPQUFPLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCxnQ0FBUSxHQUFSLFVBQVMsTUFBYztRQUNyQixPQUFPLENBQUMsQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEtBQUssTUFBTSxDQUFDO0lBQ3hFLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILG9DQUFZLEdBQVosVUFBYSxNQUFjO1FBQ3pCLE9BQU8sQ0FBQyxDQUFDLENBQUMsTUFBTSxJQUFJLE1BQU0sQ0FBQyxFQUFFLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBRUQ7Ozs7Ozs7OztPQVNHO0lBQ0gsOEJBQU0sR0FBTixVQUFPLE1BQWM7UUFBckIsaUJBTUM7UUFMQyxJQUFNLEtBQUssR0FBRyx1QkFBUSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNuQyxPQUFPLEtBQUssQ0FBQyxRQUFRLENBQUM7WUFDcEIsS0FBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUM3QixPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDakMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0gsb0NBQVksR0FBWixVQUErQixNQUFTLEVBQUUsT0FDbkI7UUFEdkIsaUJBc0JDO1FBcEJDLElBQUksQ0FBQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFO1lBQzlCLE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNoQztRQUVELElBQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDO1FBQ3hDLElBQU0sUUFBUSxHQUE2QixFQUFFLENBQUM7UUFDOUMsSUFBTSxVQUFVLHlDQUNYLE9BQU8sS0FDVixRQUFRLFVBQUEsRUFDUixLQUFLLEVBQUUsT0FBTyxDQUFDLEtBQUssS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxDQUFDLEdBQ3pELENBQUM7UUFFRixJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQyxTQUFpQjtZQUN2RCxJQUFJLFNBQVMsS0FBSyxJQUFJLElBQUksUUFBUyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxTQUFTLENBQUMsRUFBRSxFQUFFO2dCQUM3RSxRQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUMxQixRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsRUFBRSxTQUFTLEVBQUUsVUFBVSxDQUFDLENBQUMsQ0FBQzthQUMvRDtRQUNILENBQUMsQ0FBQyxDQUFDO1FBRUgsT0FBTyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFNLE9BQUEsTUFBTSxFQUFOLENBQU0sQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFRDs7Ozs7Ozs7O09BU0c7SUFDSCw0QkFBSSxHQUFKLFVBQ0UsV0FBOEIsRUFDOUIsR0FBWSxFQUNaLE9BQXFFO1FBSHZFLGlCQXlDQztRQXBDQyxJQUFNLEdBQUcsR0FBRyxPQUFPLElBQUksRUFBRSxDQUFDO1FBQzFCLElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ25ELElBQU0sS0FBSyxHQUFHLHVCQUFRLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRW5DLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxJQUFJLEdBQUcsQ0FBQyxLQUFLLElBQUksS0FBSyxDQUFDLFdBQVcsRUFBRTtZQUNsRCxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQ3ZDO1FBRUQsSUFBTSxHQUFHLEdBQUcsSUFBSSxRQUFRLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLEdBQUksQ0FBQyxDQUFDO1FBRTdELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFcEQsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLFFBQVE7WUFDbEMsb0RBQW9EO1lBQ3BELHFEQUFxRDtZQUNyRCxJQUFJLE1BQU0sQ0FBQyxPQUFPLElBQUksTUFBTSxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRTtnQkFDOUQsR0FBRyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7Z0JBQ25CLE9BQU8sS0FBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2FBQ3pDO1lBRUQsS0FBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBRXhDLElBQUksUUFBUSxDQUFDLE1BQU0sS0FBSyxzQkFBVSxDQUFDLFlBQVksRUFBRTtnQkFDL0MsS0FBSyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7YUFDaEY7WUFFRCxPQUFPLEtBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3hDLENBQUMsRUFBRSxVQUFDLENBQUM7WUFDSCxJQUFJLENBQUMsQ0FBQyxNQUFNLEtBQUssc0JBQVUsQ0FBQyxnQkFBZ0IsRUFBRTtnQkFDNUMsS0FBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDN0IsS0FBSyxDQUFDLFVBQVUsRUFBRSxDQUFDO2dCQUNuQixPQUFPLElBQUksQ0FBQzthQUNiO1lBRUQsTUFBTSxDQUFDLENBQUM7UUFDVixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsOEJBQU0sR0FBTixVQUFPLE1BQWMsRUFBRSxPQUF5RDtRQUFoRixpQkFtQkM7UUFsQkMsSUFBTSxHQUFHLEdBQUcsT0FBTyxJQUFJLEVBQUUsQ0FBQztRQUMxQixJQUFJLEtBQWMsQ0FBQztRQUVuQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxVQUFDLEtBQUssRUFBRSxJQUFJO1lBQ3pDLElBQUksS0FBSyxDQUFDLE9BQU8sRUFBRTtnQkFDakIsTUFBTSxJQUFJLHVCQUFlLENBQUMsc0NBQXNDLENBQUMsQ0FBQzthQUNuRTtZQUVELEtBQUssR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUM7WUFFbEIsT0FBTyxJQUFJLFFBQVEsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN2RCxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxHQUFHO1lBQ1YsSUFBSSxLQUFLLEVBQUU7Z0JBQ1QsS0FBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUN0QjtZQUVELE9BQU8sR0FBRyxDQUFDO1FBQ2IsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILDhCQUFNLEdBQU4sVUFBTyxNQUFjLEVBQUUsT0FBMEU7UUFDL0YsSUFBTSxHQUFHLEdBQUcsT0FBTyxJQUFJLEVBQUUsQ0FBQztRQUUxQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxVQUFDLEtBQUssRUFBRSxJQUFJO1lBQ3pDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFO2dCQUNsQixNQUFNLElBQUksdUJBQWUsQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDO2FBQzlEO1lBRUQsSUFBSSxHQUFHLENBQUMsS0FBSyxFQUFFO2dCQUNMLElBQUEsT0FBTyxHQUE0QixJQUFJLFFBQWhDLEVBQUssa0JBQWtCLGtCQUFLLElBQUksRUFBekMsV0FBa0MsQ0FBRixDQUFVO2dCQUNoRCxPQUFPLElBQUksUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxHQUFJLEVBQUUsa0JBQWtCLENBQUM7cUJBQzVFLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUNqQjtZQUVELE9BQU8sSUFBSSxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLEdBQUksRUFBRSxJQUFJLENBQUM7aUJBQzlELE9BQU8sQ0FBQyxLQUFHLEtBQUssQ0FBQyxPQUFTLENBQUMsQ0FBQztRQUNqQyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILDRCQUFJLEdBQUosVUFBdUIsTUFBUyxFQUFFLE9BQTBFLEVBQzFHLFdBQW1CO1FBQW5CLDRCQUFBLEVBQUEsbUJBQW1CO1FBQ25CLElBQU0sR0FBRyxHQUFHLE9BQU8sSUFBSSxFQUFFLENBQUM7UUFFMUIsSUFBTSxVQUFVLEdBQUcsVUFBQyxLQUFlLEVBQUUsSUFBYTtZQUNoRCxJQUFJLEdBQUcsQ0FBQyxLQUFLLEVBQUU7Z0JBQ2IsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLEVBQUU7b0JBQ2IsTUFBTSxJQUFJLHVCQUFlLENBQUMsaURBQWlELENBQUMsQ0FBQztpQkFDOUU7Z0JBRU8sSUFBQSxPQUFPLEdBQTRCLElBQUksUUFBaEMsRUFBSyxrQkFBa0Isa0JBQUssSUFBSSxFQUF6QyxXQUFrQyxDQUFGLENBQVU7Z0JBQ2hELE9BQU8sSUFBSSxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLEdBQUksRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO2FBQ2pGO1lBRUQsSUFBSSxLQUFLLENBQUMsT0FBTyxFQUFFO2dCQUNqQixPQUFPLElBQUksUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxHQUFJLEVBQUUsSUFBSSxDQUFDO3FCQUM5RCxPQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQzNCO1lBRUQsT0FBTyxJQUFJLFFBQVEsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN2RCxDQUFDLENBQUM7UUFFRixPQUFPLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDekcsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxzQ0FBYyxHQUFkLFVBQWlDLE1BQVMsRUFBRSxFQUF5QztRQUFyRixpQkFFQztRQURDLE9BQU8sdUJBQVEsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsUUFBUSxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsRUFBaEMsQ0FBZ0MsQ0FBQyxDQUFDO0lBQy9FLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNLLHVDQUFlLEdBQXZCLFVBQTBDLE1BQVMsRUFBRSxFQUF5QztRQUE5RixpQkFzQkM7UUFyQkMsSUFBSSxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLElBQU0sT0FBTyxHQUFHO1lBQ2QsS0FBSyxHQUFHLElBQUksQ0FBQztRQUNmLENBQUMsQ0FBQztRQUNGLElBQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBRXJELElBQUksS0FBSyxFQUFFO1lBQ1QsT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ2hDO1FBRUQsT0FBTyxPQUFPLENBQUMsSUFBSSxDQUFDLGNBQU0sT0FBQSxDQUN4QixLQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxFQUFFLEVBQUUsSUFBSSxDQUFDO2FBQ3hCLEtBQUssQ0FBQyxVQUFDLENBQUM7WUFDUCxJQUFJLENBQUMsQ0FBQyxNQUFNLEtBQUssR0FBRyxFQUFFO2dCQUNwQixPQUFPLEtBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQztxQkFDNUIsSUFBSSxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsRUFBaEMsQ0FBZ0MsQ0FBQyxDQUFDO2FBQ2pEO1lBRUQsTUFBTSxDQUFDLENBQUM7UUFDVixDQUFDLENBQUMsQ0FDTCxFQVZ5QixDQVV6QixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQ7Ozs7Ozs7T0FPRztJQUNLLHFDQUFhLEdBQXJCLFVBQXdDLE1BQVMsRUFBRSxPQUF3RCxFQUN6RyxVQUEwQjtRQUQ1QixpQkFzREM7UUFwREMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNwQixJQUFNLEtBQUssR0FBRyx1QkFBUSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNuQyxJQUFJLFdBQVcsQ0FBQztRQUVoQixJQUFJLElBQWEsQ0FBQztRQUNsQixJQUFJLEtBQUssQ0FBQyxXQUFXLEVBQUU7WUFDckIsMkdBQTJHO1lBQzNHLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFFO2dCQUMzQyxVQUFVLEVBQUUsSUFBSTthQUNqQixDQUFZLENBQUM7U0FDZjtRQUVELElBQUksS0FBSyxDQUFDLE9BQU8sRUFBRTtZQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRTtnQkFDcEIsS0FBSyxDQUFDLGFBQWEsRUFBRSxDQUFDO2FBQ3ZCO1lBRUQsSUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLElBQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsUUFBUTtnQkFDckUsSUFBSSxLQUFLLENBQUMsRUFBRSxJQUFJLEtBQUssQ0FBQyxFQUFFLEtBQUssUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUU7b0JBQy9DLEtBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQzdCLEtBQUssQ0FBQyxFQUFFLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7b0JBQzlCLEtBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7aUJBQ3RCO2dCQUVELEtBQUssQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRTtvQkFDdkQsVUFBVSxFQUFFLE9BQU8sQ0FBQyxPQUFPO29CQUMzQixZQUFZLEVBQUUsQ0FBQyxPQUFPLENBQUMsT0FBTztpQkFDL0IsQ0FBQyxDQUFDO2dCQUNILE9BQU8sTUFBTSxDQUFDO1lBQ2hCLENBQUMsRUFBRSxVQUFDLENBQUM7Z0JBQ0gsSUFBSSxDQUFDLENBQUMsTUFBTSxLQUFLLHNCQUFVLENBQUMsZ0JBQWdCLEVBQUU7b0JBQzVDLEtBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQzdCLEtBQUssQ0FBQyxVQUFVLEVBQUUsQ0FBQztvQkFDbkIsT0FBTyxJQUFJLENBQUM7aUJBQ2I7Z0JBRUQsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUNqQixNQUFNLENBQUMsQ0FBQztZQUNWLENBQUMsQ0FBQyxDQUFDO1lBRUgsV0FBVyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDN0I7YUFBTTtZQUNMLFdBQVcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztTQUN6QztRQUVELElBQU0sVUFBVSx3QkFBUSxPQUFPLENBQUUsQ0FBQztRQUNsQyxVQUFVLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNyQixJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUMsR0FBRztZQUNyRCxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLFVBQVUsRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDO1FBQzVELENBQUMsQ0FBQyxDQUFDO1FBRUgsT0FBTyxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFNLE9BQUEsTUFBTSxFQUFOLENBQU0sQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFFRDs7Ozs7OztPQU9HO0lBQ0ssNkJBQUssR0FBYixVQUFnQyxNQUFTLEVBQUUsT0FBd0QsRUFDakcsVUFBMEI7UUFENUIsaUJBVUM7UUFSQyxJQUFJLENBQUMsMEJBQTBCLEVBQUUsQ0FBQztRQUVsQyxJQUFNLEtBQUssR0FBRyx1QkFBUSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNuQyxJQUFJLEtBQUssQ0FBQyxPQUFPLEVBQUU7WUFDakIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDaEM7UUFFRCxPQUFPLEtBQUssQ0FBQyxRQUFRLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLE9BQU8sRUFBRSxVQUFVLENBQUMsRUFBL0MsQ0FBK0MsQ0FBQyxDQUFDO0lBQy9FLENBQUM7SUFFRDs7Ozs7OztPQU9HO0lBQ0gsc0NBQWMsR0FBZCxVQUFlLE1BQWMsRUFBRSxLQUF3QixFQUFFLFFBQXVCLEVBQUUsYUFBdUI7UUFBaEQseUJBQUEsRUFBQSxhQUF1QjtRQUM5RSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ1YsT0FBTyxRQUFRLENBQUM7U0FDakI7UUFFRCxJQUFNLEdBQUcsR0FBRyxhQUFhLElBQUksTUFBTSxDQUFDO1FBQ3BDLElBQU0sS0FBSyxHQUFHLHVCQUFRLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ25DLElBQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDckMsS0FBSyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQUU7WUFDbkQsSUFBQSxLQUFLLEdBQUssSUFBSSxNQUFULENBQVU7WUFDdkIsSUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbEUsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFHLFdBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUN6RCxJQUFNLFNBQVMsR0FBRyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2pDLElBQUksUUFBUSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxTQUFTLEtBQUssR0FBRyxFQUFFO29CQUMzRCxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO29CQUN6QixJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsRUFBRSxLQUFLLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUUsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFDO2lCQUNuRjthQUNGO1NBQ0Y7UUFFRCxPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCw0Q0FBb0IsR0FBcEIsVUFBcUIsTUFBYyxFQUFFLElBQWM7UUFBbkQsaUJBNkJDO1FBNUJDLElBQUksV0FBVyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFM0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFDLGFBQWE7WUFDekIsSUFBTSxjQUFjLEdBQWEsRUFBRSxDQUFDO1lBQ3BDLFdBQVcsQ0FBQyxPQUFPLENBQUMsVUFBQyxTQUFTO2dCQUM1QixJQUFNLFNBQVMsR0FBRyxTQUFTLENBQUMsYUFBYSxDQUFDLENBQUM7Z0JBQzNDLElBQUksQ0FBQyxTQUFTLEVBQUU7b0JBQ2QsT0FBTztpQkFDUjtnQkFFRCxJQUFNLFNBQVMsR0FBRyxLQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFFLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxDQUFDO2dCQUNqRyxJQUFJLFNBQVMsWUFBWSwyQkFBZSxFQUFFO29CQUN4QyxJQUFNLElBQUksR0FBRyxTQUFTLENBQUMsT0FBTyxFQUFFLENBQUM7b0JBQ2pDLEtBQUssSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksRUFBRSxFQUFFO3dCQUMzRCxJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO3dCQUN6QixjQUFjLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUM5QixJQUFJLFNBQVMsWUFBWSx3QkFBWSxJQUFJLFNBQVMsQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFOzRCQUNuRSxjQUFjLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3lCQUMvQjtxQkFDRjtpQkFDRjtxQkFBTTtvQkFDTCxjQUFjLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2lCQUNoQztZQUNILENBQUMsQ0FBQyxDQUFDO1lBQ0gsV0FBVyxHQUFHLGNBQWMsQ0FBQztRQUMvQixDQUFDLENBQUMsQ0FBQztRQUVILE9BQU8sV0FBVyxDQUFDO0lBQ3JCLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILDhCQUFNLEdBQU4sVUFBeUIsTUFBUyxFQUFFLE9BQXVEO1FBQTNGLGlCQWlDQztRQWhDQyxJQUFNLEdBQUcsR0FBRyxPQUFPLElBQUksRUFBRSxDQUFDO1FBRTFCLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDcEIsSUFBTSxLQUFLLEdBQUcsdUJBQVEsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFbkMsT0FBTyxLQUFLLENBQUMsUUFBUSxDQUFDO1lBQ3BCLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRTtnQkFDaEMsTUFBTSxJQUFJLDBCQUFrQixDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQ3RDO1lBRUQsSUFBTSxHQUFHLEdBQUcsSUFBSSxRQUFRLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLEdBQUksQ0FBQyxDQUFDO1lBRWhFLEtBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBRS9CLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFO2dCQUNkLEdBQUcsQ0FBQyxPQUFPLENBQUMsS0FBRyxLQUFLLENBQUMsT0FBUyxDQUFDLENBQUM7YUFDakM7WUFFRCxJQUFNLFdBQVcsR0FBc0IsQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztvQkFDMUQsS0FBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDN0IsS0FBSyxDQUFDLFVBQVUsRUFBRSxDQUFDO29CQUNuQixPQUFPLE1BQU0sQ0FBQztnQkFDaEIsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUVKLElBQU0sVUFBVSx3QkFBUSxHQUFHLENBQUUsQ0FBQztZQUM5QixVQUFVLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztZQUNyQixLQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUMsR0FBRztnQkFDakQsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQ2pELENBQUMsQ0FBQyxDQUFDO1lBRUgsT0FBTyxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFNLE9BQUEsTUFBTSxFQUFOLENBQU0sQ0FBQyxDQUFDO1FBQ3JELENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCw2QkFBSyxHQUFMO1FBQ0UsTUFBTSxJQUFJLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsK0JBQU8sR0FBUCxVQUFRLE1BQWM7UUFDcEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN0QixDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCwrQkFBTyxHQUFQLFVBQTBCLE1BQVMsRUFBRSxPQUFxQztRQUN4RSxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRTtZQUNkLGlDQUFpQztZQUNqQyxPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDaEM7UUFFRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxTQUFTLHdDQUFPLE9BQU8sS0FBRSxPQUFPLEVBQUUsSUFBSSxJQUFHLENBQUM7SUFDeEUsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCw4QkFBTSxHQUFOLFVBQU8sTUFBYztRQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUMxQixJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDdkQsSUFBSSxDQUFDLElBQUksRUFBRTtnQkFDVCxNQUFNLElBQUksMEJBQWtCLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDdEM7WUFFRCxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEVBQUU7Z0JBQzdCLE1BQU0sSUFBSSx5QkFBaUIsQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUNyQztZQUVELElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDdEI7SUFDSCxDQUFDO0lBRU8sK0JBQU8sR0FBZixVQUFnQixNQUFjO1FBQzVCLElBQU0sUUFBUSxHQUFHLHVCQUFRLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3RDLElBQUksUUFBUSxDQUFDLFVBQVUsRUFBRTtZQUN2QixJQUFJLFFBQVEsQ0FBQyxFQUFFLEtBQUssSUFBSSxFQUFFO2dCQUN4QixNQUFNLElBQUkseUJBQWlCLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDckM7U0FDRjthQUFNO1lBQ0wsUUFBUSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUM7U0FDcEI7UUFFRCxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRTtZQUNoQixJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLE1BQU0sSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxNQUFNLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssYUFBYSxFQUFFO2dCQUMxRyxRQUFRLENBQUMsRUFBRSxHQUFNLFNBQVMsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksU0FBSSxXQUFJLEVBQUksQ0FBQzthQUM3RDtTQUNGO1FBRUQsSUFBSSxRQUFRLENBQUMsRUFBRSxFQUFFO1lBQ2YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDO1NBQ3JDO0lBQ0gsQ0FBQztJQUVELHVDQUFlLEdBQWYsVUFBZ0IsTUFBYztRQUM1QixJQUFNLEtBQUssR0FBRyx1QkFBUSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNuQyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFBRTtZQUN2QixNQUFNLElBQUksMEJBQWtCLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDdEM7UUFFRCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFRCxnQ0FBUSxHQUFSLFVBQVMsSUFBZ0IsRUFBRSxRQUFnQixFQUFFLFdBQWtDO1FBQS9FLGlCQVVDO1FBVEMsSUFBTSxLQUFLLEdBQUcsV0FBVyxHQUFHLHFCQUFXLENBQUMsUUFBUSxDQUFDO1FBQ2pELElBQUksSUFBSSxDQUFDLEVBQUUsSUFBSSxLQUFLLEVBQUU7WUFDcEIsTUFBTSxJQUFJLHVCQUFlLENBQUMsNEJBQTRCLENBQUMsQ0FBQztTQUN6RDtRQUVELE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUNuQixJQUFNLEdBQUcsR0FBRyxJQUFJLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRSxJQUFJLE1BQUEsRUFBRSxRQUFRLFVBQUEsRUFBRSxLQUFLLE9BQUEsRUFBRSxDQUFDLENBQUM7WUFDN0QsT0FBTyxLQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBRSxXQUFXLENBQUMsQ0FBQztRQUM3QyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCw2QkFBSyxHQUFMLFVBQU0sUUFBZ0IsRUFBRSxRQUFnQixFQUFFLFdBQWtDO1FBQTVFLGlCQVNDO1FBUkMsSUFBSSxJQUFJLENBQUMsRUFBRSxFQUFFO1lBQ1gsTUFBTSxJQUFJLHVCQUFlLENBQUMsNEJBQTRCLENBQUMsQ0FBQztTQUN6RDtRQUVELE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUNuQixJQUFNLEdBQUcsR0FBRyxJQUFJLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRSxRQUFRLFVBQUEsRUFBRSxRQUFRLFVBQUEsRUFBRSxDQUFDLENBQUM7WUFDdkQsT0FBTyxLQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBRSxXQUFXLENBQUMsQ0FBQztRQUM3QyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCw4QkFBTSxHQUFOO1FBQUEsaUJBRUM7UUFEQyxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLENBQUMsRUFBOUQsQ0FBOEQsQ0FBQyxDQUFDO0lBQzdGLENBQUM7SUFFRCxzQ0FBYyxHQUFkLFVBQWUsUUFBZ0IsRUFBRSxPQUFxQjtRQUNwRCxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNwQixNQUFNLElBQUksS0FBSyxDQUFDLHNDQUFzQyxDQUFDLENBQUM7U0FDekQ7UUFFRCxJQUFJLElBQUksQ0FBQyxFQUFFLEVBQUU7WUFDWCxNQUFNLElBQUksdUJBQWUsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO1NBQ3pEO1FBRUQsSUFBTSxHQUFHLHNCQUNQLEtBQUssRUFBRSxnQkFBYyxRQUFVLEVBQy9CLE9BQU8sRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLElBQUksRUFDdEIsS0FBSyxFQUFFLEVBQUUsRUFDVCxXQUFXLEVBQUUsSUFBSSxFQUNqQixZQUFZLEVBQUUsQ0FBQyxFQUNmLElBQUksRUFBRSxpQkFBVSxJQUNiLE9BQU8sQ0FDWCxDQUFDO1FBRUYsSUFBSSxHQUFHLENBQUMsVUFBVSxFQUFFO1lBQ2xCLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQztTQUM1RDtRQUVELElBQUksR0FBRyxDQUFDLFlBQVksS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRTtZQUMxRCxNQUFNLElBQUksS0FBSyxDQUFDLG9EQUFvRCxDQUFDLENBQUM7U0FDdkU7UUFFRCxJQUFJLEdBQUcsQ0FBQyxRQUFRLEVBQUU7WUFDaEIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLEVBQUUsUUFBUSxFQUFFLEdBQUcsQ0FBQyxRQUFRLEVBQUUsV0FBVyxFQUFFLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO1NBQ3BGO1FBRUQsSUFBTSxhQUFhLEdBQUcsS0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsdUJBQWtCLFFBQVEsQ0FBQyxXQUFXLEVBQUksQ0FBQztRQUVySCxJQUFNLEdBQUcsR0FBRyxHQUFHLENBQUMsWUFBWSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQywyQkFBaUIsQ0FBQyxHQUFHLENBQUMsSUFBSyxFQUFFO1lBQ2hGLFNBQVMsRUFBRSxHQUFHLENBQUMsUUFBUTtZQUN2QixLQUFLLEVBQUUsR0FBRyxDQUFDLEtBQUs7WUFDaEIsS0FBSyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQztZQUNoQyxZQUFZLEVBQUUsYUFBYTtTQUM1QixDQUFDLENBQUM7UUFFSCxJQUFNLGFBQWEsR0FBRztZQUNwQixLQUFLLEVBQUUsR0FBRyxDQUFDLEtBQUs7WUFDaEIsS0FBSyxFQUFFLEdBQUcsQ0FBQyxLQUFLO1lBQ2hCLE1BQU0sRUFBRSxHQUFHLENBQUMsTUFBTTtTQUNuQixDQUFDO1FBRUYsSUFBSSxHQUFHLENBQUMsUUFBUSxFQUFFO1lBQ2hCLGlFQUFpRTtZQUNqRSxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxxQkFBSSxNQUFNLEVBQUUsT0FBTyxJQUFLLGFBQWEsRUFBRyxJQUFJLEdBQUcsQ0FBQztTQUNwRTtRQUVELElBQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSx3QkFBWSxFQUFFLEVBQUUsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ25FLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxhQUFhLENBQUMsRUFBRTtZQUNqQyxNQUFNLElBQUksS0FBSyxDQUFDLHNLQUFzSyxDQUFDLENBQUM7U0FDekw7UUFFRCxPQUFPLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDakMsSUFBTSxPQUFPLEdBQUcsVUFBVSxDQUFDO2dCQUN6QixNQUFNLENBQUMsSUFBSSx1QkFBZSxDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQztZQUN0RCxDQUFDLEVBQUUsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBRWhCLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFDN0IsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3hCLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU8seUNBQWlCLEdBQXpCLFVBQTBCLFFBQWdCLEVBQUUsR0FBaUI7UUFBN0QsaUJBSUM7UUFIQyxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxRQUFRLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsVUFBVSxDQUFDLEVBQUUsR0FBRyxDQUFDLFdBQVcsQ0FBQzthQUNyRixLQUFLLENBQUMsY0FBTSxPQUFBLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxJQUFLLE9BQUEsVUFBVSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsRUFBekIsQ0FBeUIsQ0FBQzthQUM3RCxJQUFJLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLEVBQXJDLENBQXFDLENBQUMsRUFEdkMsQ0FDdUMsQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFFRCw2QkFBSyxHQUFMLFVBQU0sV0FBbUM7UUFBekMsaUJBS0M7UUFKQyxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDbkIsSUFBTSxHQUFHLEdBQUcsSUFBSSxRQUFRLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDOUIsT0FBTyxLQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBRSxXQUFXLENBQUMsQ0FBQztRQUM3QyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxtQ0FBVyxHQUFYLFVBQVksUUFBZ0IsRUFBRSxRQUFnQixFQUFFLFdBQW1CO1FBQW5FLGlCQU1DO1FBTEMsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQ25CLElBQU0sR0FBRyxHQUFHLElBQUksUUFBUSxDQUFDLFdBQVcsQ0FBQyxFQUFFLFFBQVEsVUFBQSxFQUFFLFFBQVEsVUFBQSxFQUFFLFdBQVcsYUFBQSxFQUFFLENBQUMsQ0FBQztZQUUxRSxPQUFPLEtBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLFFBQVEsSUFBSyxPQUFBLEtBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFqQyxDQUFpQyxDQUFDLENBQUM7UUFDcEYsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsNENBQW9CLEdBQXBCLFVBQXFCLEtBQWEsRUFBRSxXQUFtQixFQUFFLFdBQW1DO1FBQTVGLGlCQUlDO1FBSEMsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQU0sT0FBQSxDQUN6QixLQUFJLENBQUMsWUFBWSxDQUFDLElBQUksUUFBUSxDQUFDLFdBQVcsQ0FBQyxFQUFFLEtBQUssT0FBQSxFQUFFLFdBQVcsYUFBQSxFQUFFLENBQUMsRUFBRSxXQUFXLENBQUMsQ0FDakYsRUFGMEIsQ0FFMUIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELHFDQUFhLEdBQWIsVUFBYyxRQUFnQjtRQUM1QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxRQUFRLENBQUMsYUFBYSxDQUFDLEVBQUUsUUFBUSxVQUFBLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUVELHNDQUFjLEdBQWQsVUFBZSxRQUFnQixFQUFFLFdBQW1CLEVBQUUsUUFBZ0I7UUFDcEUsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksUUFBUSxDQUFDLGNBQWMsQ0FBQyxFQUFFLFFBQVEsVUFBQSxFQUFFLFdBQVcsYUFBQSxFQUFFLFFBQVEsVUFBQSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3JGLENBQUM7SUFFTyxtQ0FBVyxHQUFuQixVQUFvQixHQUFZLEVBQUUsUUFBZ0I7UUFBaEIseUJBQUEsRUFBQSxnQkFBZ0I7UUFDaEQsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsRUFBWSxDQUFlLENBQUM7UUFDL0QsSUFBTSxRQUFRLEdBQUcsdUJBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEMsUUFBUSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUV2RSxJQUFJLFFBQVEsRUFBRTtZQUNaLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDO1NBQ2hCO1FBRUQsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRU8sK0JBQU8sR0FBZjtRQUNFLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDO1FBQ2YsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7SUFDcEIsQ0FBQztJQUVPLG9DQUFZLEdBQXBCLFVBQXFCLEdBQVksRUFBRSxXQUFtQztRQUF0RSxpQkFxQkM7UUFwQkMsSUFBTSxHQUFHLEdBQUcsV0FBVyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUM7UUFDM0QsSUFBTSxLQUFLLEdBQUcsR0FBRyxHQUFHLHFCQUFXLENBQUMsUUFBUSxDQUFDO1FBQ3pDLElBQUksS0FBSyxFQUFFO1lBQ1QsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLEdBQUcsR0FBRyxHQUFHLHFCQUFXLENBQUMsYUFBYSxDQUFDO1NBQy9EO1FBRUQsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQzthQUMxQixJQUFJLENBQ0gsVUFBQyxRQUFRLElBQUssT0FBQSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQW5FLENBQW1FLEVBQ2pGLFVBQUMsQ0FBQztZQUNBLElBQUksQ0FBQyxDQUFDLE1BQU0sS0FBSyxzQkFBVSxDQUFDLGdCQUFnQixFQUFFO2dCQUM1QyxJQUFJLEtBQUssRUFBRTtvQkFDVCxLQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7aUJBQ2hCO2dCQUNELE9BQU8sSUFBSSxDQUFDO2FBQ2I7WUFFRCxNQUFNLENBQUMsQ0FBQztRQUNWLENBQUMsQ0FDRixDQUFDO0lBQ04sQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsc0NBQWMsR0FBZCxVQUFlLFVBQWtCLEVBQUUsWUFBa0QsRUFBRSxNQUEyQjtRQUFsSCxpQkFPQztRQUxDLElBQU0sR0FBRyxHQUFHLElBQUksUUFBUSxDQUFDLGNBQWMsQ0FBQyxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLFlBQXVCLEVBQUUsTUFBTSxRQUFBLEVBQUUsQ0FBQyxDQUFDO1FBRW5ILEdBQUcsQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1FBQzNCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7YUFDbEIsSUFBSSxDQUFDLFVBQUMsUUFBUSxJQUFLLE9BQUEsS0FBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQW5DLENBQW1DLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBRU8scUNBQWEsR0FBckIsVUFBc0IsR0FBWTtRQUNoQyxJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxFQUFZLENBQUMsQ0FBQztRQUNuRCxJQUFNLFFBQVEsR0FBRyx1QkFBUSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN0QyxRQUFRLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBRXpFLElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDO1FBQ3ZCLE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7SUFFRCwrQ0FBdUIsR0FBdkI7UUFDRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxRQUFRLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQzthQUM5QyxJQUFJLENBQUMsY0FBTSxPQUFBLElBQUksRUFBSixDQUFJLEVBQUUsVUFBQyxDQUFDO1lBQ2xCLElBQUksQ0FBQyxDQUFDLE1BQU0sS0FBSyxzQkFBVSxDQUFDLGdCQUFnQixFQUFFO2dCQUM1QyxPQUFPLEtBQUssQ0FBQzthQUNkO1lBRUQsTUFBTSxDQUFDLENBQUM7UUFDVixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxrQ0FBVSxHQUFWLFVBQVcsV0FBd0I7UUFDakMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksUUFBUSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ2xFLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILGdDQUFRLEdBQVIsVUFBUyxNQUFjO1FBQ2IsSUFBQSxJQUFJLEdBQUssdUJBQVEsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQXpCLENBQTBCO1FBRXRDLElBQU0sTUFBTSxHQUFHLElBQUksK0JBQWdCLEVBQUUsQ0FBQztRQUN0QyxJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDL0IsS0FBSyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQUU7WUFDM0QsSUFBTSxRQUFRLEdBQUcsSUFBSSx3QkFBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQ3hELE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxHQUFHLFFBQVEsQ0FBQztTQUN4QztRQUVPLElBQUEsY0FBYyxHQUFLLElBQUksZUFBVCxDQUFVO1FBQ2hDLElBQUksY0FBYyxFQUFFO1lBQ2xCLGNBQWMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDL0I7UUFFRCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILHNDQUFjLEdBQWQsVUFBZSxRQUFnQjtRQUM3QixJQUFJLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxFQUFFO1lBQzNCLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUU7Z0JBQ3ZDLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQ25DO1lBQ0QsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDdEM7SUFDSCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILHNDQUFjLEdBQWQsVUFBZSxRQUF1QjtRQUNwQyxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLFFBQVEsRUFBRTtZQUN2QyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUU7Z0JBQ3hDLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQ25DO1lBQ0QsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDdEM7SUFDSCxDQUFDO0lBRUQsMENBQWtCLEdBQWxCO1FBQUEsaUJBV0M7UUFWQyxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLEVBQUU7WUFDNUIsT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzlCO1FBRUQsSUFBTSxHQUFHLEdBQUcsSUFBSSxRQUFRLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDMUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2QsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLFFBQVE7WUFDbEMsS0FBSSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN6QyxPQUFPLEtBQUksQ0FBQyxXQUFXLENBQUM7UUFDMUIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU8sMENBQWtCLEdBQTFCLFVBQTJCLFdBQW9CO1FBQzdDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxxQkFBVyxDQUFDLFdBQWtELENBQUMsQ0FBQztRQUN2RixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksR0FBRyxFQUFFLENBQUM7UUFDaEMsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUFFRDs7T0FFRztJQUNILGtEQUEwQixHQUExQjtRQUFBLGlCQVdDO1FBVkMsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxFQUFFO1lBQzVCLE9BQU87U0FDUjtRQUVELElBQU0sR0FBRyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDakMsSUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQztRQUVuRCxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsR0FBRyxXQUFXLEVBQUU7WUFDakYsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxrQkFBa0IsRUFBRSxFQUF6QixDQUF5QixDQUFDLENBQUM7U0FDaEU7SUFDSCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILHNDQUFjLEdBQWQsVUFBZSxFQUFVO1FBQ3ZCLElBQUksYUFBTSxFQUFFO1lBQ1YsT0FBTyxLQUFLLENBQUM7U0FDZDtRQUVELElBQUksQ0FBQywwQkFBMEIsRUFBRSxDQUFDO1FBRWxDLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxFQUFFO1lBQzdELE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFFRCxPQUFPLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3hHLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILHlDQUFpQixHQUFqQixVQUFrQixFQUFpQixFQUFFLE9BQWdCLEVBQUUsT0FBaUI7UUFDdEUsSUFBTSxPQUFPLEdBQUcsT0FBTyxJQUFJLENBQUMsRUFBRSxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLENBQUM7UUFFMUQsSUFBSSxPQUFPLEVBQUU7WUFDWCxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDbkI7SUFDSCxDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0gsaUNBQVMsR0FBVCxVQUFVLFlBQW9CLEVBQUUsU0FBbUI7UUFBbkQsaUJBZUM7UUFkUyxJQUFBLFVBQVUsR0FBSyxJQUFJLFdBQVQsQ0FBVTtRQUM1QixJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ2YsTUFBTSxJQUFJLEtBQUssQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFDO1NBQ3pEO1FBRUQsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsUUFBUSxHQUFHLFlBQVksRUFBRSxTQUFTLENBQUM7YUFDN0UsSUFBSSxDQUFDLFVBQUMsSUFBSTtZQUNULElBQUksR0FBRyxHQUFHLFVBQVUsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQ25DLElBQUksS0FBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsRUFBRTtnQkFDckMsR0FBRyxJQUFJLENBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsU0FBSyxDQUFDO2FBQ3RDO1lBRUQsT0FBTyxHQUFHLENBQUM7UUFDYixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRDs7Ozs7Ozs7T0FRRztJQUNILHVDQUFlLEdBQWYsVUFBZ0IsV0FBOEIsRUFBRSxJQUF5QjtRQUN2RSxJQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRTFELElBQU0sR0FBRyxHQUFHLElBQUksUUFBUSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsR0FBSSxDQUFDLENBQUM7UUFDakQsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLElBQUksSUFBSyxPQUFBLElBQUksQ0FBQyxNQUFNLEVBQVgsQ0FBVyxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUVEOzs7Ozs7O09BT0c7SUFDSCx1Q0FBZSxHQUFmLFVBQWdCLFdBQThCLEVBQUUsSUFBeUI7UUFDdkUsSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUUxRCxJQUFNLEdBQUcsR0FBRyxJQUFJLFFBQVEsQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLEdBQUksQ0FBQyxDQUFDO1FBQ3ZELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN4QixDQUFDO0lBRU8seUNBQWlCLEdBQXpCLFVBQTBCLFdBQXVDLEVBQUUsSUFBeUI7UUFDMUYsSUFBSSxPQUFPLElBQUksS0FBSyxRQUFRLEVBQUU7WUFDNUIsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztTQUM3QztRQUVELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQXhzQ0Q7UUFEQyxpQkFBVSxDQUFDLGtDQUFrQyxDQUFDOzBEQUc5QztJQXVzQ0gsb0JBQUM7Q0FBQSxBQWx2Q0QsQ0FBbUMsZUFBUSxHQWt2QzFDO0FBbHZDWSxzQ0FBYSJ9

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable no-restricted-globals */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Connector = void 0;
var error_1 = __webpack_require__(4);
var Connector = /** @class */ (function () {
    /**
     * @param host - the host to connect to
     * @param port - the port to connect to
     * @param secure - <code>true</code> for an secure connection
     * @param basePath - The base path of the api endpoint
     */
    function Connector(host, port, secure, basePath) {
        this.host = host;
        this.port = port;
        this.secure = secure;
        this.basePath = basePath;
        /**
         * the origin do not contains the base path
         */
        this.origin = Connector.toUri(this.host, this.port, this.secure, '');
        /**
         * The connector will detect if gzip is supported.
         * Returns true if supported otherwise false.
         */
        this.gzip = false;
    }
    /**
     * Indicates id this connector is usable in the current runtime environment
     * This method must be overwritten in subclass implementations
     * @param host - the host to connect to
     * @param port - the port to connect to
     * @param secure - <code>true</code> for an secure connection
     * @param basePath - The base path of the api endpoint
     * @return <code>true</code> if this connector is usable in the current environment
     */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    Connector.isUsable = function (host, port, secure, basePath) {
        return false;
    };
    /**
     * @param host or location
     * @param port
     * @param secure=true <code>true</code> for an secure connection
     * @param basePath The basepath of the api
     * @return
     */
    Connector.create = function (host, port, secure, basePath) {
        var h = host;
        var p = port;
        var s = secure;
        var b = basePath;
        if (typeof location !== 'undefined') {
            if (!h) {
                h = location.hostname;
                p = Number(location.port);
            }
            if (s === undefined) {
                s = location.protocol === 'https:';
            }
        }
        // ensure right type, make secure: true the default
        s = s === undefined || !!s;
        if (b === undefined) {
            b = Connector.DEFAULT_BASE_PATH;
        }
        if (h.indexOf('/') !== -1) {
            var matches = /^(https?):\/\/([^/:]+|\[[^\]]+])(:(\d*))?(\/\w+)?\/?$/.exec(h);
            if (matches) {
                s = matches[1] === 'https';
                h = matches[2].replace(/(\[|])/g, '');
                p = Number(matches[4]);
                b = matches[5] || '';
            }
            else {
                throw new Error("The connection uri host " + h + " seems not to be valid");
            }
        }
        else if (h !== 'localhost' && /^[a-z0-9-]*$/.test(h)) {
            // handle app names as hostname
            h += Connector.HTTP_DOMAIN;
        }
        if (!p) {
            p = s ? 443 : 80;
        }
        var url = Connector.toUri(h, p, s, b);
        var connection = this.connections[url];
        if (!connection) {
            // check last registered connector first to simplify registering connectors
            for (var i = this.connectors.length - 1; i >= 0; i -= 1) {
                var ConnectorConstructor = this.connectors[i];
                if (ConnectorConstructor.isUsable && ConnectorConstructor.isUsable(h, p, s, b)) {
                    // @ts-ignore
                    connection = new ConnectorConstructor(h, p, s, b);
                    break;
                }
            }
            if (!connection) {
                throw new Error('No connector is usable for the requested connection.');
            }
            this.connections[url] = connection;
        }
        return connection;
    };
    Connector.toUri = function (host, port, secure, basePath) {
        var uri = (secure ? 'https://' : 'http://') + (host.indexOf(':') !== -1 ? "[" + host + "]" : host);
        uri += ((secure && port !== 443) || (!secure && port !== 80)) ? ":" + port : '';
        uri += basePath;
        return uri;
    };
    /**
     * @param message
     * @return
     */
    Connector.prototype.send = function (message) {
        var _this = this;
        var response = { status: 0, headers: {} };
        return Promise.resolve()
            .then(function () { return _this.prepareRequest(message); })
            .then(function () { return new Promise(function (resolve) {
            _this.doSend(message, message.request, resolve);
        }); })
            .then(function (res) { response = res; })
            .then(function () { return _this.prepareResponse(message, response); })
            .then(function () {
            message.doReceive(response);
            return response;
        })
            .catch(function (e) {
            response.entity = null;
            throw error_1.PersistentError.of(e);
        });
    };
    /**
     * @param message
     * @return
     */
    Connector.prototype.prepareRequest = function (message) {
        var _this = this;
        var mimeType = message.mimeType();
        if (!mimeType) {
            var type = message.request.type;
            if (type === 'json') {
                message.mimeType('application/json;charset=utf-8');
            }
            else if (type === 'text') {
                message.mimeType('text/plain;charset=utf-8');
            }
        }
        this.toFormat(message);
        var accept;
        switch (message.responseType()) {
            case 'json':
                accept = 'application/json';
                break;
            case 'text':
                accept = 'text/*';
                break;
            default:
                accept = 'application/json,text/*;q=0.5,*/*;q=0.1';
        }
        if (!message.accept()) {
            message.accept(accept);
        }
        if (this.gzip) {
            var ifNoneMatch = message.ifNoneMatch();
            if (ifNoneMatch && ifNoneMatch !== '""' && ifNoneMatch !== '*') {
                message.ifNoneMatch(ifNoneMatch.slice(0, -1) + "--gzip\"");
            }
        }
        var tokenStorage = message.tokenStorage();
        if (message.request.path === '/connect') {
            return tokenStorage.signPath(this.basePath + message.request.path)
                .then(function (signedPath) {
                // eslint-disable-next-line no-param-reassign
                message.request.path = signedPath.substring(_this.basePath.length);
                if (message.cacheControl()) {
                    // eslint-disable-next-line no-param-reassign
                    message.request.path += (message.request.path.indexOf('?') !== -1 ? '&' : '?') + "BCB";
                }
                return message;
            });
        }
        if (tokenStorage) {
            var token = tokenStorage.token;
            if (token) {
                message.header('authorization', "BAT " + token);
            }
        }
        return message;
    };
    /**
     * @param message
     * @param response The received response headers and data
     * @return
     */
    Connector.prototype.prepareResponse = function (message, response) {
        var _this = this;
        // IE9 returns status code 1223 instead of 204
        response.status = response.status === 1223 ? 204 : response.status;
        var type;
        var headers = response.headers || {};
        // some proxies send content back on 204 responses
        var entity = response.status === 204 ? null : response.entity;
        if (entity) {
            type = message.responseType();
            if (!type || response.status >= 400) {
                var contentType = headers['content-type'] || headers['Content-Type'];
                if (contentType && contentType.indexOf('application/json') > -1) {
                    type = 'json';
                }
            }
        }
        if (headers.etag) {
            headers.etag = headers.etag.replace('--gzip', '');
        }
        var tokenStorage = message.tokenStorage();
        if (tokenStorage) {
            var token = headers['baqend-authorization-token'] || headers['Baqend-Authorization-Token'];
            if (token) {
                tokenStorage.update(token);
            }
        }
        return new Promise(function (resolve) {
            resolve(entity && _this.fromFormat(response, entity, type));
        }).then(function (resultEntity) {
            response.entity = resultEntity;
            if (message.request.path.indexOf('/connect') !== -1 && resultEntity) {
                _this.gzip = !!resultEntity.gzip;
            }
        }, function (e) {
            throw new Error("Response was not valid " + type + ": " + e.message);
        });
    };
    Connector.DEFAULT_BASE_PATH = '/v1';
    Connector.HTTP_DOMAIN = '.app.baqend.com';
    /**
     * An array of all exposed response headers
     */
    Connector.RESPONSE_HEADERS = [
        'baqend-authorization-token',
        'content-type',
        'baqend-size',
        'baqend-acl',
        'etag',
        'last-modified',
        'baqend-created-at',
        'baqend-custom-headers',
    ];
    /**
     * Array of all available connector implementations
     */
    Connector.connectors = [];
    /**
     * Array of all created connections
     */
    Connector.connections = {};
    return Connector;
}());
exports.Connector = Connector;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29ubmVjdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQ29ubmVjdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSwwQ0FBMEM7OztBQUcxQyxrQ0FBMkM7QUFlM0M7SUFzSUU7Ozs7O09BS0c7SUFDSCxtQkFDa0IsSUFBWSxFQUNaLElBQVksRUFDWixNQUFlLEVBQ2YsUUFBZ0I7UUFIaEIsU0FBSSxHQUFKLElBQUksQ0FBUTtRQUNaLFNBQUksR0FBSixJQUFJLENBQVE7UUFDWixXQUFNLEdBQU4sTUFBTSxDQUFTO1FBQ2YsYUFBUSxHQUFSLFFBQVEsQ0FBUTtRQXJCbEM7O1dBRUc7UUFDYSxXQUFNLEdBQVcsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQztRQUV4Rjs7O1dBR0c7UUFDSSxTQUFJLEdBQVksS0FBSyxDQUFDO0lBYTFCLENBQUM7SUFwSEo7Ozs7Ozs7O09BUUc7SUFDSCw2REFBNkQ7SUFDdEQsa0JBQVEsR0FBZixVQUFnQixJQUFZLEVBQUUsSUFBWSxFQUFFLE1BQWUsRUFBRSxRQUFnQjtRQUMzRSxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSSxnQkFBTSxHQUFiLFVBQWMsSUFBWSxFQUFFLElBQWEsRUFBRSxNQUFnQixFQUFFLFFBQWlCO1FBQzVFLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztRQUNiLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztRQUNiLElBQUksQ0FBQyxHQUFHLE1BQU0sQ0FBQztRQUNmLElBQUksQ0FBQyxHQUFHLFFBQVEsQ0FBQztRQUVqQixJQUFJLE9BQU8sUUFBUSxLQUFLLFdBQVcsRUFBRTtZQUNuQyxJQUFJLENBQUMsQ0FBQyxFQUFFO2dCQUNOLENBQUMsR0FBRyxRQUFRLENBQUMsUUFBUSxDQUFDO2dCQUN0QixDQUFDLEdBQUcs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

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Enhancer = void 0;
var tslib_1 = __webpack_require__(0);
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
            tslib_1.__extends(Proxy, _super);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRW5oYW5jZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJFbmhhbmNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBS0EsSUFBTSxTQUFTLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQ3JDLElBQU0sV0FBVyxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUV6QztJQUFBO0lBK0dBLENBQUM7SUE5R0M7OztPQUdHO0lBQ0gsOEJBQVcsR0FBWCxVQUE0QixVQUFvQjtRQUM5QyxPQUFPO1lBQW9CLGlDQUFtQjtZQUF2Qzs7WUFBeUMsQ0FBQztZQUFELFlBQUM7UUFBRCxDQUFDLEFBQTFDLENBQXFCLFVBQWtCLEVBQWUsQ0FBQztJQUNoRSxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksc0JBQWEsR0FBcEIsVUFBcUIsZUFBc0M7UUFDekQsT0FBUSxlQUF1QixDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFRDs7O09BR0c7SUFDSSxzQkFBYSxHQUFwQixVQUFxQixlQUFzQztRQUN6RCxPQUFRLGVBQXVCLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVEOzs7T0FHRztJQUNJLHNCQUFhLEdBQXBCLFVBQXFCLGVBQTJCLEVBQUUsVUFBa0I7UUFDakUsZUFBdUIsQ0FBQyxTQUFTLENBQUMsR0FBRyxVQUFVLENBQUM7SUFDbkQsQ0FBQztJQUVEOzs7T0FHRztJQUNILDBCQUFPLEdBQVAsVUFBMkIsSUFBb0IsRUFBRSxlQUF5QjtRQUN4RSxJQUFLLGVBQXVCLENBQUMsV0FBVyxDQUFDLEtBQUssSUFBSSxFQUFFO1lBQ2xELE9BQU87U0FDUjtRQUVELElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxXQUFXLENBQUMsRUFBRTtZQUN0RSxNQUFNLElBQUksS0FBSyxDQUFDLDZDQUE2QyxDQUFDLENBQUM7U0FDaEU7UUFFQSxlQUF1QixDQUFDLFdBQVcs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

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Factory = void 0;
var Factory = /** @class */ (function () {
    function Factory() {
        this.type = null;
        this.prototype = null;
    }
    Factory.extend = function (target, proto) {
        if (proto !== Factory.prototype) {
            this.extend(target, Object.getPrototypeOf(proto));
        }
        var properties = Object.getOwnPropertyNames(proto);
        for (var j = 0, len = properties.length; j < len; j += 1) {
            var prop = properties[j];
            Object.defineProperty(target, prop, Object.getOwnPropertyDescriptor(proto, prop));
        }
        return target;
    };
    /**
     * Creates a new Factory for the given type
     * @param type - the type constructor of T
     * @return A new object factory to created instances of T
     */
    Factory.createFactory = function (type) {
        // We want te explicitly name the created factory and give the constructor a properly argument name
        var factory = Factory.extend((function FactoryConstructor() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return factory.newInstance(args);
        }), this.prototype);
        // lets instanceof work properly
        factory.prototype = type.prototype;
        factory.type = type;
        return factory;
    };
    /**
     * Creates a new instance of the factory type
     * @param args Constructor arguments used for instantiation
     * @return A new created instance of *
     * @instance
     */
    Factory.prototype.new = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return this.newInstance(args);
    };
    /**
     * Creates a new instance of the factory type
     * @param args Constructor arguments used for instantiation
     * @return A new created instance of *
     * @instance
     */
    Factory.prototype.newInstance = function (args) {
        if (!args || args.length === 0) {
            // eslint-disable-next-line new-cap
            return new this.type();
        }
        // es6 constructors can't be called, therefore bind all arguments and invoke the constructor
        // then with the bounded parameters
        // The first argument is shift out by invocation with `new`.
        var a = [null];
        Array.prototype.push.apply(a, args);
        var boundConstructor = (Function.prototype.bind.apply(this.type, a));
        // eslint-disable-next-line new-cap
        return new boundConstructor();
    };
    return Factory;
}());
exports.Factory = Factory;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBZ0JBO0lBQUE7UUFpQ1MsU0FBSSxHQUFhLElBQVcsQ0FBQztRQUU3QixjQUFTLEdBQU0sSUFBVyxDQUFDO0lBaUNwQyxDQUFDO0lBbkVnQixjQUFNLEdBQXJCLFVBQWlELE1BQVMsRUFBRSxLQUFRO1FBQ2xFLElBQUksS0FBSyxLQUFLLE9BQU8sQ0FBQyxTQUFTLEVBQUU7WUFDL0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1NBQ25EO1FBRUQsSUFBTSxVQUFVLEdBQUcsTUFBTSxDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxVQUFVLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUN4RCxJQUFNLElBQUksR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDM0IsTUFBTSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQyx3QkFBd0IsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFFLENBQUMsQ0FBQztTQUNwRjtRQUVELE9BQU8sTUFBZSxDQUFDO0lBQ3pCLENBQUM7SUFFRDs7OztPQUlHO0lBQ2MscUJBQWEsR0FBOUIsVUFBd0UsSUFBYztRQUNwRixtR0FBbUc7UUFDbkcsSUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFNBQVMsa0JBQWtCO1lBQUMsY0FBYztpQkFBZCxVQUFjLEVBQWQscUJBQWMsRUFBZCxJQUFjO2dCQUFkLHlCQUFjOztZQUN4RSxPQUFPLE9BQU8sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbkMsQ0FBQyxDQUFhLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRWhDLGdDQUFnQztRQUNoQyxPQUFPLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDbkMsT0FBTyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFFcEIsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQztJQU1EOzs7OztPQUtHO0lBQ0gscUJBQUcsR0FBSDtRQUFJLGNBQWM7YUFBZCxVQUFjLEVBQWQscUJBQWMsRUFBZCxJQUFjO1lBQWQseUJBQWM7O1FBQ2hCLE9BQU8sSUFBSSxDQUFDLFdBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCw2QkFBVyxHQUFYLFVBQVksSUFBeUI7UUFDbkMsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUM5QixtQ0FBbUM7WUFDbkMsT0FBTyxJQUFJLElBQUksQ0FBQyxJQUFLLEVBQUUsQ0FBQztTQUN6QjtRQUVELDRGQUE0RjtRQUM1RixtQ0FBbUM7UUFDbkMsNERBQTREO1FBQzVELElBQU0sQ0FBQyxHQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxJQUFhLENBQUMsQ0FBQztRQUM3QyxJQUFNLGdCQUFnQixHQUFHLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN4RSxtQ0FBbUM7UUFDbkMsT0FBTyxJQUFJLGdCQUFnQixFQUFFLENBQUM7SUFDaEMsQ0FBQztJQUNILGNBQUM7QUFBRCxDQUFDLEFBcEVELElBb0VDO0FBcEVZLDBCQUFPIn0=

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenStorage = void 0;
var util_1 = __webpack_require__(3);
var TokenStorage = /** @class */ (function () {
    /**
     * @param origin The origin where the token belongs to
     * @param token The initial token
     * @param temporary If the token should be saved temporary or permanently
     */
    function TokenStorage(origin, token, temporary) {
        this.tokenData = token ? TokenStorage.parse(token) : null;
        this.origin = origin;
        this.temporary = !!temporary;
    }
    /**
     * Parse a token string in its components
     * @param token The token string to parse, time values are returned as timestamps
     * @return The parsed token data
     */
    TokenStorage.parse = function (token) {
        return {
            val: token,
            createdAt: parseInt(token.substring(0, 8), 16) * 1000,
            expireAt: parseInt(token.substring(8, 16), 16) * 1000,
            sig: token.substring(token.length - 40),
            data: token.substring(0, token.length - 40),
        };
    };
    Object.defineProperty(TokenStorage.prototype, "token", {
        /**
         * Get the stored token
         * @return The token or undefined, if no token is available
         */
        get: function () {
            return this.tokenData ? this.tokenData.val : null;
        },
        enumerable: false,
        configurable: true
    });
    TokenStorage.create = function (origin) {
        return Promise.resolve(new TokenStorage(origin));
    };
    /**
     * Use the underlying storage implementation to save the token
     * @param origin The origin where the token belongs to
     * @param token The initial token
     * @param temporary If the token should be saved temporary or permanently
     * @return
     */
    TokenStorage.prototype.saveToken = function (origin, token, temporary) {
        // eslint-disable-next-line no-underscore-dangle
        if (this._saveToken !== TokenStorage.prototype._saveToken) {
            // eslint-disable-next-line no-console
            console.log('Using deprecated TokenStorage._saveToken implementation.');
            // eslint-disable-next-line no-underscore-dangle
            this._saveToken(origin, token, temporary);
        }
    };
    /**
     * Use the underlying storage implementation to save the token
     * @param origin The origin where the token belongs to
     * @param token The initial token
     * @param temporary If the token should be saved temporary or permanently
     * @return
     * @deprecated Use TokenStorage#saveToken instead
     * @protected
     */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    TokenStorage.prototype._saveToken = function (origin, token, temporary) { };
    /**
     * Update the token for the givin origin, the operation may be asynchronous
     * @param token The token to store or <code>null</code> to remove the token
     */
    TokenStorage.prototype.update = function (token) {
        var t = token ? TokenStorage.parse(token) : null;
        if (this.tokenData && t && this.tokenData.expireAt > t.expireAt) {
            // an older token was fetched from the cache, so ignore it
            return;
        }
        this.tokenData = t;
        this.saveToken(this.origin, token, this.temporary);
    };
    /**
     * Derives a resource token from the stored origin token and signs the resource with the generated resource token
     *
     * @param resource The resource which will be accessible with the returned token
     * @param sign Sign the given resource with a token, if sign is false the resource will only be encoded to a path
     * @return A resource token which can only be used to access the specified resource
     */
    TokenStorage.prototype.signPath = function (resource, sign) {
        if (sign === void 0) { sign = true; }
        var tokenData = this.tokenData;
        var result = Promise.resolve(resource.split('/').map(encodeURIComponent).join('/'));
        if (!tokenData || !sign) {
            return result;
        }
        return result.then(function (path) { return TokenStorage.hmac(path + tokenData.data, tokenData.sig)
            .then(function (hash) { return path + "?BAT=" + (tokenData.data + hash); }); })
            .catch(function (e) {
            // eslint-disable-next-line no-console
            console.warn('Can\'t sign the resource, run the SDK on a secured origin, or provide an alternative hmac implementation on TokenStorage.hmac', e);
            return result;
        });
    };
    TokenStorage.hmac = util_1.hmac;
    return TokenStorage;
}());
exports.TokenStorage = TokenStorage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVG9rZW5TdG9yYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiVG9rZW5TdG9yYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLGdDQUErQjtBQXFCL0I7SUFpREU7Ozs7T0FJRztJQUNILHNCQUFZLE1BQWMsRUFBRSxLQUFxQixFQUFFLFNBQW1CO1FBQ3BFLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDMUQsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQy9CLENBQUM7SUFwQ0Q7Ozs7T0FJRztJQUNJLGtCQUFLLEdBQVosVUFBYSxLQUFhO1FBQ3hCLE9BQU87WUFDTCxHQUFHLEVBQUUsS0FBSztZQUNWLFNBQVMsRUFBRSxRQUFRLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEdBQUcsSUFBSTtZQUNyRCxRQUFRLEVBQUUsUUFBUSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxHQUFHLElBQUk7WUFDckQsR0FBRyxFQUFFLEtBQUssQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7WUFDdkMsSUFBSSxFQUFFLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO1NBQzVDLENBQUM7SUFDSixDQUFDO0lBTUQsc0JBQUksK0JBQUs7UUFKVDs7O1dBR0c7YUFDSDtZQUNFLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxD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

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityFactory = void 0;
var tslib_1 = __webpack_require__(0);
var ManagedFactory_1 = __webpack_require__(48);
var intersection_1 = __webpack_require__(1);
var EntityFactory = /** @class */ (function (_super) {
    tslib_1.__extends(EntityFactory, _super);
    function EntityFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Creates a new instance of the factory type
     *
     * @param args Constructor arguments used for instantiation, the constructor will not be called
     * when no arguments are passed
     * @return A new created instance of T
     */
    EntityFactory.prototype.newInstance = function (args) {
        var instance = _super.prototype.newInstance.call(this, args);
        intersection_1.Metadata.get(instance).db = this.db;
        return instance;
    };
    /**
     * Loads the instance for the given id, or null if the id does not exists.
     * @param id The id to query
     * @param [options] The load options
     * @param [options.depth=0] The object depth which will be loaded. Depth 0 loads only this object,
     * <code>true</code> loads the objects by reachability.
     * @param [options.refresh=false] Indicates whether the object should be revalidated (cache bypass).
     * @param [options.local=false] Indicates whether the local copy (from the entity manager)
     * of an object should be returned if it exists. This value might be stale.
     * @param doneCallback Called when the operation succeed.
     * @param failCallback Called when the operation failed.
     * @return A Promise that will be fulfilled when the asynchronous operation completes.
     */
    EntityFactory.prototype.load = function (id, options, doneCallback, failCallback) {
        if (typeof options === 'function') {
            return this.load(id, {}, options, doneCallback);
        }
        return this.db.load(this.managedType.typeConstructor, id, options).then(doneCallback, failCallback);
    };
    /**
     * Gets an unloaded reference for the given id.
     * @param id The id of an object to get a reference for.
     * @return An unloaded reference to the object with the given id.
     */
    EntityFactory.prototype.ref = function (id) {
        return this.db.getReference(this.managedType.ref, id);
    };
    /**
     * Creates a new instance and sets the DatabaseObject to the given json
     * @param json
     * @return instance
     */
    EntityFactory.prototype.fromJSON = function (json) {
        var obj = this.db.getReference(this.managedType.ref, json.id);
        return this.managedType.fromJsonValue(intersection_1.Metadata.get(obj), json, obj, { persisting: false });
    };
    /**
     * Creates a new query for this class
     * @return The query builder
     */
    EntityFactory.prototype.find = function () {
        return this.db.createQueryBuilder(this.managedType.typeConstructor);
    };
    /**
     * Creates a new partial update for this class
     * @param id The id to partial update
     * @param [partialUpdate] An initial partial update to execute
     * @return A partial update builder for the given entity id
     */
    EntityFactory.prototype.partialUpdate = function (id, partialUpdate) {
        return this.ref(id).partialUpdate(partialUpdate);
    };
    return EntityFactory;
}(ManagedFactory_1.ManagedFactory));
exports.EntityFactory = EntityFactory;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRW50aXR5RmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkVudGl0eUZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLG1EQUFrRDtBQUtsRCxnREFBMkM7QUFFM0M7SUFBcUQseUNBQWlCO0lBQXRFOztJQXdFQSxDQUFDO0lBdkVDOzs7Ozs7T0FNRztJQUNILG1DQUFXLEdBQVgsVUFBWSxJQUF5QjtRQUNuQyxJQUFNLFFBQVEsR0FBRyxpQkFBTSxXQUFXLFlBQUMsSUFBSSxDQUFDLENBQUM7UUFDekMsdUJBQVEsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUM7UUFDcEMsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQztJQUVEOzs7Ozs7Ozs7Ozs7T0FZRztJQUNILDRCQUFJLEdBQUosVUFBSyxFQUFVLEVBQUUsT0FBMkUsRUFBRSxZQUFrQixFQUM5RyxZQUFrQjtRQUNsQixJQUFJLE9BQU8sT0FBTyxLQUFLLFVBQVUsRUFBRTtZQUNqQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsWUFBWSxDQUFDLENBQUM7U0FDakQ7UUFFRCxPQUFPLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsZUFBZSxFQUFFLEVBQUUsRUFBRSxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLFlBQVksQ0FBQyxDQUFDO0lBQ3RHLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsMkJBQUcsR0FBSCxVQUFJLEVBQVU7UUFDWixPQUFPLElBQUksQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsZ0NBQVEsR0FBUixVQUFTLElBQVU7UUFDakIsSUFBTSxHQUFHLEdBQU0sSUFBSSxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLEVBQUcsSUFBZ0IsQ0FBQyxFQUFZLENBQUMsQ0FBQztRQUMxRixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLHVCQUFRLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLENBQUUsQ0FBQztJQUM5RixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsNEJBQUksR0FBSjtRQUNFLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ3RFLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILHFDQUFhLEdBQWIsVUFBYyxFQUFVLEVBQUUsYUFBb0I7UUFDNUMsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBQ0gsb0JBQUM7QUFBRCxDQUFDLEFBeEVELENBQXFELCtCQUFjLEdBd0VsRTtBQXhFWSxzQ0FBYSJ9

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity = void 0;
var tslib_1 = __webpack_require__(0);
var Managed_1 = __webpack_require__(52);
var partialupdate_1 = __webpack_require__(31);
var enumerable_1 = __webpack_require__(16);
var error_1 = __webpack_require__(4);
var Enhancer_1 = __webpack_require__(26);
var Entity = /** @class */ (function (_super) {
    tslib_1.__extends(Entity, _super);
    function Entity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Entity.prototype, "id", {
        /**
         * The unique id of this object
         *
         * Sets the unique id of this object, if the id is not formatted as an valid id,
         * it will be used as the key component of the id has the same affect as setting the key
         *
         * @type string
         */
        get: function () {
            return this._metadata.id;
        },
        set: function (value) {
            if (this._metadata.id) {
                throw new Error("The id can't be set twice: " + value);
            }
            var val = "" + value;
            if (val.indexOf("/db/" + this._metadata.bucket + "/") === 0) {
                this._metadata.id = value;
            }
            else {
                this.key = value;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Entity.prototype, "key", {
        /**
         * The unique key part of the id
         * When the key of the unique id is set an error will be thrown if an id is already set.
         * @type string
         */
        get: function () {
            return this._metadata.key;
        },
        set: function (value) {
            this._metadata.key = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Entity.prototype, "version", {
        /**
         * The version of this object
         * @type number
         * @readonly
         */
        get: function () {
            return this._metadata.version;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Entity.prototype, "acl", {
        /**
         * The object read/write permissions
         * @type Acl
         * @readonly
         */
        get: function () {
            this._metadata.throwUnloadedPropertyAccess('acl');
            return this._metadata.acl;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Attach this object to the given db
     * @param db The db which will be used for future crud operations
     * @return
     */
    Entity.prototype.attach = function (db) {
        db.attach(this);
    };
    Entity.prototype.ready = function (doneCallback) {
        var _this = this;
        return this._metadata.ready().then(function () { return _this; }).then(doneCallback);
    };
    /**
     * Saves the object. Inserts the object if it doesn't exists and updates the object if the object exist.
     * @param [options] The save options
     * @param [options.force=false] Force the save operation, the version will not be validated.
     * @param [options.depth=0] The object depth which will be saved. Depth 0 save this object only,
     * <code>true</code> saves the objects by reachability.
     * @param [options.refresh=false] Refresh the local object state from remote.
     * @param doneCallback Called when the operation succeed.
     * @param failCallback Called when the operation failed.
     * @return A Promise that will be fulfilled when the asynchronous operation completes.
     */
    Entity.prototype.save = function (options, doneCallback, failCallback) {
        if (typeof options === 'function') {
            return this.save({}, options, doneCallback);
        }
        return this._metadata.db.save(this, options).then(doneCallback, failCallback);
    };
    /**
     * Inserts a new object. Inserts the object if it doesn't exists and raise an error if the object already exist.
     * @param [options] The insertion options
     * @param [options.depth=0] The object depth which will be inserted. Depth 0 insert this object only,
     * <code>true</code> inserts objects by reachability.
     * @param [options.refresh=false] Refresh the local object state from remote.
     * @param doneCallback Called when the operation succeed.
     * @param failCallback Called when the operation failed.
     * @return A Promise that will be fulfilled when the asynchronous operation completes.
     * @method
     */
    Entity.prototype.insert = function (options, doneCallback, failCallback) {
        if (typeof options === 'function') {
            return this.insert({}, options, doneCallback);
        }
        return this._metadata.db.insert(this, options).then(doneCallback, failCallback);
    };
    /**
     * Updates an existing object
     *
     * Updates the object if it exists and raise an error if the object doesn't exist.
     *
     * @param [options] The update options
     * @param [options.force=false] Force the update operation,
     * the version will not be validated, only existence will be checked.
     * @param [options.depth=0] The object depth which will be updated. Depth 0 updates this object only,
     * <code>true</code> updates objects by reachability.
     * @param [options.refresh=false] Refresh the local object state from remote.
     * @param doneCallback Called when the operation succeed.
     * @param failCallback Called when the operation failed.
     * @return A Promise that will be fulfilled when the asynchronous operation completes.
     * @method
     */
    Entity.prototype.update = function (options, doneCallback, failCallback) {
        if (typeof options === 'function') {
            return this.update({}, options, doneCallback);
        }
        return this._metadata.db.update(this, options).then(doneCallback, failCallback);
    };
    /**
     * Resolves the referenced object in the specified depth
     *
     * Only unresolved objects will be loaded unless the refresh option is specified.
     *
     * Removed objects will be marked as removed.
     * @param [options] The load options
     * @param [options.depth=0] The object depth which will be loaded. Depth set to <code>true</code>
     * loads objects by reachability.
     * @param [options.refresh=false] Refresh the local object state from remote.
     * @param doneCallback Called when the operation succeed.
     * @param failCallback Called when the operation failed.
     * @return A Promise that will be fulfilled when the asynchronous operation completes.
     * @method
     */
    Entity.prototype.load = function (options, doneCallback, failCallback) {
        if (typeof options === 'function') {
            return this.load({}, options, doneCallback);
        }
        var opt = tslib_1.__assign({ local: true }, options);
        if (this.id === null) {
            throw new error_1.PersistentError("This object can't be loaded, it does have an id.");
        }
        return this._metadata.db.load(this.id, undefined, opt).then(doneCallback, failCallback);
    };
    /**
     * Deletes an existing object
     *
     * @param [options] The remove options
     * @param [options.force=false] Force the remove operation, the version will not be validated.
     * @param [options.depth=0] The object depth which will be removed. Depth 0 removes this object only,
     * <code>true</code> removes objects by reachability.
     * @param doneCallback Called when the operation succeed.
     * @param failCallback Called when the operation failed.
     * @return A Promise that will be fulfilled when the asynchronous operation completes.
     * @method
     */
    Entity.prototype.delete = function (options, doneCallback, failCallback) {
        if (typeof options === 'function') {
            return this.delete({}, options, doneCallback);
        }
        return this._metadata.db.delete(this, options).then(doneCallback, failCallback);
    };
    /**
     * Saves the object and repeats the operation if the object is out of date
     *
     * In each pass the callback will be called. Ths first parameter of the callback is the entity and the second one
     * is a function to abort the process.
     *
     * @param cb Will be called in each pass
     * @param doneCallback Called when the operation succeed.
     * @param failCallback Called when the operation failed.
     * @return A Promise that will be fulfilled when the asynchronous operation completes.
     * @method
     */
    Entity.prototype.optimisticSave = function (cb, doneCallback, failCallback) {
        return this._metadata.db.optimisticSave(this, cb).then(doneCallback, failCallback);
    };
    Entity.prototype.attr = function () {
        throw new Error('Attr is not yet implemented.');
    };
    /**
     * Validates the entity by using the validation code of the entity type
     *
     * @return Contains the result of the Validation
     * @method
     */
    Entity.prototype.validate = function () {
        return this._metadata.db.validate(this);
    };
    /**
     * Starts a partial update on this entity
     *
     * @param operations initial operations which should be executed
     * @return
     */
    Entity.prototype.partialUpdate = function (operations) {
        return new partialupdate_1.EntityPartialUpdateBuilder(this, operations);
    };
    /**
     * Get all objects which refer to this object
     *
     * @param [options] Some options to pass
     * @param [options.classes] An array of class names to filter for, null for no filter
     * @return A promise resolving with an array of all referencing objects
     * @method
     */
    Entity.prototype.getReferencing = function (options) {
        var _this = this;
        var db = this._metadata.db;
        var references = this._metadata.type.getReferencing(db, options);
        // Query all possibly referencing objects
        var allResults = Array.from(references).map(function (_a) {
            var ref = _a[0], attrs = _a[1];
            // Create query for given entity
            var qb = db.createQueryBuilder(ref.typeConstructor);
            // Add term for each attribute
            var terms = [];
            attrs.forEach(function (attr) {
                terms.push(qb.equal(attr, _this));
            });
            // If more than one term, put everything in a disjunction
            var query = terms.length === 1 ? terms[0] : qb.or(terms);
            return query.resultList();
        });
        return Promise.all(allResults).then(function (results) { return (
        // Filter out all objects which did not match
        results.filter(function (result) { return !!result.length; })); }).then(function (results) { return (
        // Flat the array of results
        Array.prototype.concat.apply([], results)); });
    };
    /**
     * Returns this object identifier or the baqend type of this object
     * @return the object id or type whatever is available
     */
    Entity.prototype.toString = function () {
        var type = Enhancer_1.Enhancer.getBaqendType(this.constructor);
        return this.id || type.ref;
    };
    /**
     * Converts the object to an JSON-Object
     * @param [options=false] to json options by default excludes the metadata
     * @param [options.excludeMetadata=false] Excludes the metadata form the serialized json
     * @param [options.depth=0] Includes up to depth referenced objects into the serialized json
     * @return JSON-Object
     * @method
     */
    Entity.prototype.toJSON = function (options) {
        // JSON.stringify calls toJSON with the parent key as the first argument.
        // Therefore ignore all unknown option types.
        var opt = options;
        if (typeof opt === 'boolean') {
            opt = {
                excludeMetadata: opt,
            };
        }
        if (typeof opt !== 'object') {
            opt = {};
        }
        var state = this._metadata;
        return state.type.toJsonValue(state, this, opt);
    };
    tslib_1.__decorate([
        enumerable_1.enumerable(true)
    ], Entity.prototype, "id", null);
    tslib_1.__decorate([
        enumerable_1.enumerable(false)
    ], Entity.prototype, "key", null);
    tslib_1.__decorate([
        enumerable_1.enumerable(true)
    ], Entity.prototype, "version", null);
    tslib_1.__decorate([
        enumerable_1.enumerable(true)
    ], Entity.prototype, "acl", null);
    tslib_1.__decorate([
        enumerable_1.enumerable(false)
    ], Entity.prototype, "attach", null);
    tslib_1.__decorate([
        enumerable_1.enumerable(false)
    ], Entity.prototype, "ready", null);
    tslib_1.__decorate([
        enumerable_1.enumerable(false)
    ], Entity.prototype, "save", null);
    tslib_1.__decorate([
        enumerable_1.enumerable(false)
    ], Entity.prototype, "insert", null);
    tslib_1.__decorate([
        enumerable_1.enumerable(false)
    ], Entity.prototype, "update", null);
    tslib_1.__decorate([
        enumerable_1.enumerable(false)
    ], Entity.prototype, "load", null);
    tslib_1.__decorate([
        enumerable_1.enumerable(false)
    ], Entity.prototype, "delete", null);
    tslib_1.__decorate([
        enumerable_1.enumerable(false)
    ], Entity.prototype, "optimisticSave", null);
    tslib_1.__decorate([
        enumerable_1.enumerable(false)
    ], Entity.prototype, "attr", null);
    tslib_1.__decorate([
        enumerable_1.enumerable(false)
    ], Entity.prototype, "validate", null);
    tslib_1.__decorate([
        enumerable_1.enumerable(false)
    ], Entity.prototype, "partialUpdate", null);
    tslib_1.__decorate([
        enumerable_1.enumerable(false)
    ], Entity.prototype, "getReferencing", null);
    tslib_1.__decorate([
        enumerable_1.enumerable(false)
    ], Entity.prototype, "toString", null);
    tslib_1.__decorate([
        enumerable_1.enumerable(false)
    ], Entity.prototype, "toJSON", null);
    return Entity;
}(Managed_1.Managed));
exports.Entity = Entity;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRW50aXR5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiRW50aXR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxxQ0FBb0M7QUFDcEMsa0RBQThEO0FBQzlELGlEQUFnRDtBQUNoRCxrQ0FBMkM7QUFLM0MsdUNBQXNDO0FBUXRDO0lBQTRCLGtDQUFPO0lBQW5DOztJQWdXQSxDQUFDO0lBcFVDLHNCQUFJLHNCQUFFO1FBVE47Ozs7Ozs7V0FPRzthQUVIO1lBQ0UsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQztRQUMzQixDQUFDO2FBRUQsVUFBTyxLQUFvQjtZQUN6QixJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxFQUFFO2dCQUNyQixNQUFNLElBQUksS0FBSyxDQUFDLGdDQUE4QixLQUFPLENBQUMsQ0FBQzthQUN4RDtZQUVELElBQU0sR0FBRyxHQUFHLEtBQUcsS0FBTyxDQUFDO1lBQ3ZCLElBQUksR0FBRyxDQUFDLE9BQU8sQ0FBQyxTQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxNQUFHLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQ3RELElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxHQUFHLEtBQUssQ0FBQzthQUMzQjtpQkFBTTtnQkFDTCxJQUFJLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQzthQUNsQjtRQUNILENBQUM7OztPQWJBO0lBcUJELHNCQUFJLHVCQUFHO1FBTlA7Ozs7V0FJRzthQUVIO1lBQ0UsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQztRQUM1QixDQUFDO2FBRUQsVUFBUSxLQUFLO1lBQ1gsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDO1FBQzdCLENBQUM7OztPQUpBO0lBWUQsc0JBQUksMkJBQU87UUFOWDs7OztXQUlHO2FBRUg7WUFDRSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDO1FBQ2hDLENBQUM7OztPQUFBO0lB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

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.PartialUpdateBuilder = exports.EntityPartialUpdateBuilder = void 0;
var EntityPartialUpdateBuilder_1 = __webpack_require__(100);
Object.defineProperty(exports, "EntityPartialUpdateBuilder", { enumerable: true, get: function () { return EntityPartialUpdateBuilder_1.EntityPartialUpdateBuilder; } });
var PartialUpdateBuilder_1 = __webpack_require__(53);
Object.defineProperty(exports, "PartialUpdateBuilder", { enumerable: true, get: function () { return PartialUpdateBuilder_1.PartialUpdateBuilder; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwyRUFBMEU7QUFBakUsd0lBQUEsMEJBQTBCLE9BQUE7QUFDbkMsK0RBQThEO0FBQXJELDRIQUFBLG9CQUFvQixPQUFBIn0=

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.BloomFilter = void 0;
var BloomFilter_1 = __webpack_require__(103);
Object.defineProperty(exports, "BloomFilter", { enumerable: true, get: function () { return BloomFilter_1.BloomFilter; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw2Q0FBNEM7QUFBbkMsMEdBQUEsV0FBVyxPQUFBIn0=

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.GeoPoint = void 0;
/**
 * Creates a new GeoPoint instance
 * From latitude and longitude
 * From a json object
 * Or an tuple of latitude and longitude
 */
var GeoPoint = /** @class */ (function () {
    /**
     * @param latitude A coordinate pair (latitude first),
     * a GeoPoint like object or the GeoPoint's latitude
     * @param longitude The GeoPoint's longitude
     */
    function GeoPoint(latitude, longitude) {
        var lat;
        var lng;
        if (typeof latitude === 'string') {
            var index = latitude.indexOf(';');
            lat = Number(latitude.substring(0, index));
            lng = Number(latitude.substring(index + 1));
        }
        else if (Array.isArray(latitude)) {
            lat = latitude[0], lng = latitude[1];
        }
        else if (typeof latitude === 'object') {
            lat = latitude.latitude;
            lng = latitude.longitude;
        }
        else {
            lat = typeof latitude === 'number' ? latitude : 0;
            lng = typeof longitude === 'number' ? longitude : 0;
        }
        this.longitude = lng;
        this.latitude = lat;
        if (this.latitude < -90 || this.latitude > 90) {
            throw new Error("Latitude " + this.latitude + " is not in bound of -90 <= latitude <= 90");
        }
        if (this.longitude < -180 || this.longitude > 180) {
            throw new Error("Longitude " + this.longitude + " is not in bound of -180 <= longitude <= 180");
        }
    }
    /**
     * Creates a GeoPoint with the user's current location, if available.
     * @return A promise that will be resolved with a GeoPoint
     */
    GeoPoint.current = function () {
        return new Promise((function (resolve, reject) {
            if (!navigator) {
                reject(new Error('This seems not to be a browser context.'));
            }
            if (!navigator.geolocation) {
                reject(new Error('This browser does not support geolocation.'));
            }
            navigator.geolocation.getCurrentPosition(function (location) {
                resolve(new GeoPoint(location.coords.latitude, location.coords.longitude));
            }, function (error) {
                reject(error);
            });
        }));
    };
    /**
     * Returns the distance from this GeoPoint to another in kilometers.
     * @param point another GeoPoint
     * @return The distance in kilometers
     *
     * @see GeoPoint#radiansTo
     */
    GeoPoint.prototype.kilometersTo = function (point) {
        return Number((GeoPoint.EARTH_RADIUS_IN_KILOMETERS * this.radiansTo(point)).toFixed(3));
    };
    /**
     * Returns the distance from this GeoPoint to another in miles.
     * @param point another GeoPoint
     * @return The distance in miles
     *
     * @see GeoPoint#radiansTo
     */
    GeoPoint.prototype.milesTo = function (point) {
        return Number((GeoPoint.EARTH_RADIUS_IN_MILES * this.radiansTo(point)).toFixed(3));
    };
    /**
     * Computes the arc, in radian, between two WGS-84 positions.
     *
     * The haversine formula implementation is taken from:
     * {@link http://www.movable-type.co.uk/scripts/latlong.html}
     *
     * Returns the distance from this GeoPoint to another in radians.
     * @param point another GeoPoint
     * @return the arc, in radian, between two WGS-84 positions
     *
     * @see http://en.wikipedia.org/wiki/Haversine_formula
     */
    GeoPoint.prototype.radiansTo = function (point) {
        var from = this;
        var to = point;
        var rad1 = from.latitude * GeoPoint.DEG_TO_RAD;
        var rad2 = to.latitude * GeoPoint.DEG_TO_RAD;
        var dLng = (to.longitude - from.longitude) * GeoPoint.DEG_TO_RAD;
        return Math.acos((Math.sin(rad1) * Math.sin(rad2)) + (Math.cos(rad1) * Math.cos(rad2) * Math.cos(dLng)));
    };
    /**
     * A String representation in latitude, longitude format
     * @return The string representation of this class
     */
    GeoPoint.prototype.toString = function () {
        return this.latitude + ";" + this.longitude;
    };
    /**
     * Returns a JSON representation of the GeoPoint
     * @return A GeoJson object of this GeoPoint
     */
    GeoPoint.prototype.toJSON = function () {
        return { latitude: this.latitude, longitude: this.longitude };
    };
    /**
     * How many radians fit in one degree.
     */
    GeoPoint.DEG_TO_RAD = Math.PI / 180;
    /**
     * The Earth radius in kilometers used by {@link GeoPoint#kilometersTo}
     */
    GeoPoint.EARTH_RADIUS_IN_KILOMETERS = 6371;
    /**
     * The Earth radius in miles used by {@link GeoPoint#milesTo}
     */
    GeoPoint.EARTH_RADIUS_IN_MILES = 3956;
    return GeoPoint;
}());
exports.GeoPoint = GeoPoint;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2VvUG9pbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJHZW9Qb2ludC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFFQTs7Ozs7R0FLRztBQUNIO0lBK0NFOzs7O09BSUc7SUFDSCxrQkFBWSxRQUF1RixFQUNqRyxTQUFrQjtRQUNsQixJQUFJLEdBQVcsQ0FBQztRQUNoQixJQUFJLEdBQVcsQ0FBQztRQUNoQixJQUFJLE9BQU8sUUFBUSxLQUFLLFFBQVEsRUFBRTtZQUNoQyxJQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3BDLEdBQUcsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUMzQyxHQUFHLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDN0M7YUFBTSxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDakMsR0FBRyxHQUFTLFFBQVEsR0FBakIsRUFBRSxHQUFHLEdBQUksUUFBUSxHQUFaLENBQWE7U0FDdkI7YUFBTSxJQUFJLE9BQU8sUUFBUSxLQUFLLFFBQVEsRUFBRTtZQUN2QyxHQUFHLEdBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQztZQUN4QixHQUFHLEdBQUcsUUFBUSxDQUFDLFNBQVMsQ0FBQztTQUMxQjthQUFNO1lBQ0wsR0FBRyxHQUFHLE9BQU8sUUFBUSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbEQsR0FBRyxHQUFHLE9BQU8sU0FBUyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDckQ7UUFFRCxJQUFJLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQztRQUNyQixJQUFJLENBQUMs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

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Stream = exports.Query = exports.flatArgs = exports.Operator = exports.Node = exports.Filter = exports.Condition = exports.Builder = void 0;
var Builder_1 = __webpack_require__(104);
Object.defineProperty(exports, "Builder", { enumerable: true, get: function () { return Builder_1.Builder; } });
var Condition_1 = __webpack_require__(35);
Object.defineProperty(exports, "Condition", { enumerable: true, get: function () { return Condition_1.Condition; } });
var Filter_1 = __webpack_require__(55);
Object.defineProperty(exports, "Filter", { enumerable: true, get: function () { return Filter_1.Filter; } });
var Node_1 = __webpack_require__(17);
Object.defineProperty(exports, "Node", { enumerable: true, get: function () { return Node_1.Node; } });
var Operator_1 = __webpack_require__(57);
Object.defineProperty(exports, "Operator", { enumerable: true, get: function () { return Operator_1.Operator; } });
var Query_1 = __webpack_require__(18);
Object.defineProperty(exports, "flatArgs", { enumerable: true, get: function () { return Query_1.flatArgs; } });
Object.defineProperty(exports, "Query", { enumerable: true, get: function () { return Query_1.Query; } });
var Stream_1 = __webpack_require__(56);
Object.defineProperty(exports, "Stream", { enumerable: true, get: function () { return Stream_1.Stream; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxxQ0FBb0M7QUFBM0Isa0dBQUEsT0FBTyxPQUFBO0FBQ2hCLHlDQUF3QztBQUEvQixzR0FBQSxTQUFTLE9BQUE7QUFDbEIsbUNBQWdEO0FBQXpCLGdHQUFBLE1BQU0sT0FBQTtBQUM3QiwrQkFBOEI7QUFBckIsNEZBQUEsSUFBSSxPQUFBO0FBQ2IsdUNBQXNDO0FBQTdCLG9HQUFBLFFBQVEsT0FBQTtBQUNqQixpQ0FhaUI7QUFOZixpR0FBQSxRQUFRLE9BQUE7QUFLUiw4RkFBQSxLQUFLLE9BQUE7QUFHUCxtQ0FBa0M7QUFBekIsZ0dBQUEsTUFBTSxPQUFBIn0=

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Condition = void 0;
var Query_1 = __webpack_require__(18);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29uZGl0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQ29uZGl0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLGlDQUFtQztBQWdWbkMsMkRBQTJEO0FBQzlDLFFBQUEsU0FBUyxHQUE0QjtJQUNoRCxLQUFLLEVBQUwsVUFBNEIsVUFBVTtRQUNwQyxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxVQUFVLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRUQsS0FBSyxFQUFMLFVBQTRCLEtBQUssRUFBRSxLQUFLO1FBQ3RDLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFRCxRQUFRLEVBQVIsVUFBK0IsS0FBSyxFQUFFLEtBQUs7UUFDekMsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVELFdBQVcsRUFBWCxVQUFrQyxLQUFLLEVBQUUsS0FBSztRQUM1QyxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRUQsb0JBQW9CLEVBQXBCLFVBQTJDLEtBQUssRUFBRSxLQUFLO1FBQ3JELE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFRCxRQUFRLEVBQVIsVUFBK0IsS0FBSyxFQUFFLEtBQUs7UUFDekMsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVELGlCQUFpQixFQUFqQixVQUF3QyxLQUFLLEVBQUUsS0FBSztRQUNsRCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxF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

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityType = void 0;
var tslib_1 = __webpack_require__(0);
// eslint-disable-next-line max-classes-per-file
var binding_1 = __webpack_require__(5);
var ManagedType_1 = __webpack_require__(19);
var Type_1 = __webpack_require__(10);
var BasicType_1 = __webpack_require__(37);
var SingularAttribute_1 = __webpack_require__(38);
var PluralAttribute_1 = __webpack_require__(11);
var Attribute_1 = __webpack_require__(9);
var intersection_1 = __webpack_require__(1);
var EntityType = /** @class */ (function (_super) {
    tslib_1.__extends(EntityType, _super);
    /**
     * @param ref
     * @param superType
     * @param typeConstructor
     */
    function EntityType(ref, superType, typeConstructor) {
        var _this = _super.call(this, ref, typeConstructor) || this;
        _this.declaredId = null;
        _this.declaredVersion = null;
        _this.declaredAcl = null;
        _this.loadPermission = new intersection_1.Permission();
        _this.updatePermission = new intersection_1.Permission();
        _this.deletePermission = new intersection_1.Permission();
        _this.queryPermission = new intersection_1.Permission();
        _this.schemaSubclassPermission = new intersection_1.Permission();
        _this.insertPermission = new intersection_1.Permission();
        _this.superType = superType;
        return _this;
    }
    Object.defineProperty(EntityType.prototype, "persistenceType", {
        /**
         * @inheritDoc
         */
        get: function () {
            return Type_1.PersistenceType.ENTITY;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EntityType.prototype, "id", {
        get: function () {
            return this.declaredId || this.superType.id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EntityType.prototype, "version", {
        get: function () {
            return this.declaredVersion || this.superType.version;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EntityType.prototype, "acl", {
        get: function () {
            return this.declaredAcl || this.superType.acl;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * @inheritDoc
     */
    EntityType.prototype.createProxyClass = function () {
        var typeConstructor = this.superType.typeConstructor;
        if (typeConstructor === Object) {
            switch (this.name) {
                case 'User':
                    typeConstructor = binding_1.User;
                    break;
                case 'Role':
                    typeConstructor = binding_1.Role;
                    break;
                default:
                    typeConstructor = binding_1.Entity;
                    break;
            }
        }
        return this.enhancer.createProxy(typeConstructor);
    };
    /**
     * Gets all on this class referencing attributes
     *
     * @param db The instances will be found by this EntityManager
     * @param [options] Some options to pass
     * @param [options.classes] An array of class names to filter for, null for no filter
     * @return A map from every referencing class to a set of its referencing attribute names
     */
    EntityType.prototype.getReferencing = function (db, options) {
        var opts = tslib_1.__assign({}, options);
        var entities = db.metamodel.entities;
        var referencing = new Map();
        var names = Object.keys(entities);
        for (var i = 0, len = names.length; i < len; i += 1) {
            var name_1 = names[i];
            // Skip class if not in class filter
            if (!opts.classes || opts.classes.indexOf(name_1) !== -1) {
                var entity = entities[name_1];
                var iter = entity.attributes();
                for (var el = iter.next(); !el.done; el = iter.next()) {
                    var attr = el.value;
                    // Filter only referencing singular and collection attributes
                    if ((attr instanceof SingularAttribute_1.SingularAttribute && attr.type === this)
                        || (attr instanceof PluralAttribute_1.PluralAttribute && attr.elementType === this)) {
                        var typeReferences = referencing.get(attr.declaringType) || new Set();
                        typeReferences.add(attr.name);
                        referencing.set(attr.declaringType, typeReferences);
                    }
                }
            }
        }
        return referencing;
    };
    /**
     * @inheritDoc
     */
    EntityType.prototype.createObjectFactory = function (db) {
        switch (this.name) {
            case 'User':
                return binding_1.UserFactory.create(this, db);
            case 'Device':
                return binding_1.DeviceFactory.create(this, db);
            default:
                return binding_1.EntityFactory.create(this, db);
        }
    };
    /**
     * @param state The root object state, can be <code>null</code> if a currentObject is provided
     * @param jsonObject The json data to merge
     * @param currentObject The object where the jsonObject will be merged into, if the current object is null,
     * a new instance will be created
     * @param options The options used to apply the json
     * @param [options.persisting=false] indicates if the current state will be persisted.
     * Used to update the internal change tracking state of collections and mark the object persistent or dirty afterwards
     * @param [options.onlyMetadata=false] Indicates if only the metadata should be updated
     * @return The merged entity instance
     */
    EntityType.prototype.fromJsonValue = function (state, jsonObject, currentObject, options) {
        var _a, _b;
        // handle references
        if (typeof jsonObject === 'string') {
            return ((_a = state.db) === null || _a === void 0 ? void 0 : _a.getReference(jsonObject)) || null;
        }
        if (!jsonObject || typeof jsonObject !== 'object') {
            return null;
        }
        var json = jsonObject;
        var opt = tslib_1.__assign({ persisting: false, onlyMetadata: false }, options);
        var obj;
        if (currentObject) {
            var currentObjectState = intersection_1.Metadata.get(currentObject);
            // merge state into the current object if:
            // 1. The provided json does not contains an id and we have an already created object for it
            // 2. The object was created without an id and was later fetched from the server (e.g. User/Role)
            // 3. The provided json has the same id as the current object, they can differ on embedded json for a reference
            if (!json.id || !currentObjectState.id || json.id === currentObjectState.id) {
                obj = currentObject;
            }
        }
        if (!obj) {
            obj = (_b = state.db) === null || _b === void 0 ? void 0 : _b.getReference(this.typeConstructor, json.id);
        }
        if (!obj) {
            return null;
        }
        var objectState = intersection_1.Metadata.get(obj);
        // deserialize our properties
        objectState.enable(false);
        _super.prototype.fromJsonValue.call(this, objectState, json, obj, opt);
        objectState.enable(true);
        if (opt.persisting) {
            objectState.setPersistent();
        }
        else if (!opt.onlyMetadata) {
            objectState.setDirty();
        }
        return obj;
    };
    /**
     * Converts the given object to json
     * @param state The root object state
     * @param object The object to convert
     * @param [options=false] to json options by default excludes the metadata
     * @param [options.excludeMetadata=false] Excludes the metadata form the serialized json
     * @param [options.depth=0] Includes up to depth referenced objects into the serialized json
     * @param [options.persisting=false] indicates if the current state will be persisted.
     *  Used to update the internal change tracking state of collections and mark the object persistent if its true
     * @return JSON-Object
     */
    EntityType.prototype.toJsonValue = function (state, object, options) {
        var _a = options || {}, _b = _a.depth, depth = _b === void 0 ? 0 : _b, _c = _a.persisting, persisting = _c === void 0 ? false : _c;
        var isInDepth = depth === true || depth > -1;
        // check if object is already loaded in state
        var objectState = object && intersection_1.Metadata.get(object);
        if (isInDepth && objectState && objectState.isAvailable) {
            // serialize our properties
            objectState.enable(false);
            var json = _super.prototype.toJsonValue.call(this, objectState, object, tslib_1.__assign(tslib_1.__assign({}, options), { persisting: persisting, depth: typeof depth === 'boolean' ? depth : depth - 1 }));
            objectState.enable(true);
            return json;
        }
        if (state.db && object instanceof this.typeConstructor) {
            object.attach(state.db);
            return object.id;
        }
        return null;
    };
    EntityType.prototype.toString = function () {
        return "EntityType(" + this.ref + ")";
    };
    EntityType.prototype.toJSON = function () {
        var _a = _super.prototype.toJSON.call(this), acl = _a.acl, json = tslib_1.__rest(_a, ["acl"]);
        return tslib_1.__assign(tslib_1.__assign({}, json), { acl: tslib_1.__assign(tslib_1.__assign({}, acl), { schemaSubclass: this.schemaSubclassPermission.toJSON(), load: this.loadPermission.toJSON(), insert: this.insertPermission.toJSON(), update: this.updatePermission.toJSON(), delete: this.deletePermission.toJSON(), query: this.queryPermission.toJSON() }) });
    };
    EntityType.Object = /** @class */ (function (_super) {
        tslib_1.__extends(ObjectType, _super);
        function ObjectType() {
            var _this = _super.call(this, EntityType.Object.ref, null, Object) || this;
            _this.declaredId = new /** @class */ (function (_super) {
                tslib_1.__extends(class_1, _super);
                function class_1() {
                    return _super.call(this, 'id', BasicType_1.BasicType.String, true) || this;
                }
                class_1.prototype.getJsonValue = function (state) {
                    return state.id || undefined;
                };
                class_1.prototype.setJsonValue = function (state, object, jsonValue) {
                    if (!state.id) {
                        // eslint-disable-next-line no-param-reassign
                        state.id = jsonValue;
                    }
                };
                return class_1;
            }(SingularAttribute_1.SingularAttribute))();
            _this.declaredId.init(_this, 0);
            _this.declaredId.isId = true;
            _this.declaredVersion = new /** @class */ (function (_super) {
                tslib_1.__extends(class_2, _super);
                function class_2() {
                    return _super.call(this, 'version', BasicType_1.BasicType.Integer, true) || this;
                }
                class_2.prototype.getJsonValue = function (state) {
                    return state.version || undefined;
                };
                class_2.prototype.setJsonValue = function (state, object, jsonValue) {
                    if (jsonValue) {
                        // eslint-disable-next-line no-param-reassign
                        state.version = jsonValue;
                    }
                };
                return class_2;
            }(SingularAttribute_1.SingularAttribute))();
            _this.declaredVersion.init(_this, 1);
            _this.declaredVersion.isVersion = true;
            _this.declaredAcl = new /** @class */ (function (_super) {
                tslib_1.__extends(class_3, _super);
                function class_3() {
                    return _super.call(this, 'acl', BasicType_1.BasicType.JsonObject, true) || this;
                }
                class_3.prototype.getJsonValue = function (state, object, options) {
                    var persisted = Attribute_1.Attribute.attachState(object, {});
                    var persistedAcl = persisted.acl || {};
                    var acl = state.acl.toJSON();
                    var unchanged = Object.keys(acl).every(function (permission) {
                        var oldPermission = (persistedAcl[permission] || {});
                        var newPermission = acl[permission];
                        var newKeys = Object.keys(newPermission);
                        var oldKeys = Object.keys(oldPermission);
                        return newKeys.length === oldKeys.length
                            && newKeys.every(function (ref) { return oldPermission[ref] === newPermission[ref]; });
                    });
                    if (!unchanged) {
                        state.setDirty();
                    }
                    if (options.persisting) {
                        persisted.acl = acl;
                    }
                    return acl;
                };
                class_3.prototype.setJsonValue = function (state, object, jsonValue, options) {
                    var acl = (jsonValue || {});
                    if (options.persisting) {
                        var persistedState = Attribute_1.Attribute.attachState(object, {});
                        persistedState.acl = acl;
                    }
                    state.acl.fromJSON(acl);
                };
                return class_3;
            }(SingularAttribute_1.SingularAttribute))();
            _this.declaredAcl.init(_this, 2);
            _this.declaredAcl.isAcl = true;
            _this.declaredAttributes = [_this.declaredId, _this.declaredVersion, _this.declaredAcl];
            return _this;
        }
        Object.defineProperty(ObjectType, "ref", {
            get: function () {
                return '/db/Object';
            },
            enumerable: false,
            configurable: true
        });
        ObjectType.prototype.createProxyClass = function () {
            return _super.prototype.createProxyClass.call(this);
        };
        ObjectType.prototype.fromJsonValue = function (state, jsonObject, currentObject, options) {
            return _super.prototype.fromJsonValue.call(this, state, jsonObject, currentObject, options);
        };
        ObjectType.prototype.createObjectFactory = function () {
            throw new Error("Objects can't be directly created and persisted");
        };
        return ObjectType;
    }(EntityType));
    return EntityType;
}(ManagedType_1.ManagedType));
exports.EntityType = EntityType;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRW50aXR5VHlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkVudGl0eVR5cGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLGdEQUFnRDtBQUNoRCxzQ0FFb0I7QUFHcEIsNkNBQTRDO0FBQzVDLCtCQUF5QztBQUN6Qyx5Q0FBd0M7QUFDeEMseURBQXdEO0FBR3hELHFEQUFvRDtBQUNwRCx5Q0FBd0M7QUFDeEMsZ0RBQXFFO0FBRXJFO0lBQWtELHNDQUFjO0lBcUo5RDs7OztPQUlHO0lBQ0gsb0JBQVksR0FBVyxFQUFFLFNBQTBCLEVBQUUsZUFBMEI7UUFBL0UsWUFDRSxrQkFBTSxHQUFHLEVBQUUsZUFBZSxDQUFDLFNBRTVCO1FBN0NNLGdCQUFVLEdBQXFDLElBQUksQ0FBQztRQUVwRCxxQkFBZSxHQUFxQyxJQUFJLENBQUM7UUFFekQsaUJBQVcsR0FBa0MsSUFBSSxDQUFDO1FBRWxELG9CQUFjLEdBQWUsSUFBSSx5QkFBVSxFQUFFLENBQUM7UUFFOUMsc0JBQWdCLEdBQWUsSUFBSSx5QkFBVSxFQUFFLENBQUM7UUFFaEQsc0JBQWdCLEdBQWUsSUFBSSx5QkFBVSxFQUFFLENBQUM7UUFFaEQscUJBQWUsR0FBZSxJQUFJLHlCQUFVLEVBQUUsQ0FBQztRQUUvQyw4QkFBd0IsR0FBZSxJQUFJLHlCQUFVLEVBQUUsQ0FBQztRQUV4RCxzQkFBZ0IsR0FBZSxJQUFJLHlCQUFVLEVBQUUsQ0FBQztRQTRCckQsS0FBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7O0lBQzdCLENBQUM7SUF4QkQsc0JBQUksdUNBQWU7UUFIbkI7O1dBRUc7YUFDSDtZQUNFLE9BQU8sc0JBQWUsQ0FBQyxNQUFNLENBQUM7UUFDaEMsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSwwQkFBRTthQUFOO1lBQ0UsT0FBTyxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxTQUFXLENBQUMsRUFBRSxDQUFDO1FBQ2hELENBQUM7OztPQUFBO0lBRUQsc0JBQUksK0JB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

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.BasicType = void 0;
var tslib_1 = __webpack_require__(0);
var binding_1 = __webpack_require__(5);
var GeoPoint_1 = __webpack_require__(33);
var Type_1 = __webpack_require__(10);
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
    tslib_1.__extends(BasicType, _super);
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
        tslib_1.__extends(BooleanType, _super);
        function BooleanType() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        BooleanType.prototype.fromJsonValue = function (state, json, currentValue) {
            return typeof json === 'string' ? json !== 'false' : _super.prototype.fromJsonValue.call(this, state, json, currentValue);
        };
        return BooleanType;
    }(BasicType))('Boolean', Boolean);
    BasicType.Double = new /** @class */ (function (_super) {
        tslib_1.__extends(DoubleType, _super);
        function DoubleType() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DoubleType.prototype.fromJsonValue = function (state, json, currentValue) {
            return typeof json === 'string' ? parseFloat(json) : _super.prototype.fromJsonValue.call(this, state, json, currentValue);
        };
        return DoubleType;
    }(BasicType))('Double', Number);
    BasicType.Integer = new /** @class */ (function (_super) {
        tslib_1.__extends(IntegerType, _super);
        function IntegerType() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        IntegerType.prototype.fromJsonValue = function (state, json, currentValue) {
            return typeof json === 'string' ? parseInt(json, 10) : _super.prototype.fromJsonValue.call(this, state, json, currentValue);
        };
        return IntegerType;
    }(BasicType))('Integer', Number);
    BasicType.String = new /** @class */ (function (_super) {
        tslib_1.__extends(StringType, _super);
        function StringType() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        StringType.prototype.fromJsonValue = function (state, json, currentValue) {
            return _super.prototype.fromJsonValue.call(this, state, json, currentValue);
        };
        return StringType;
    }(BasicType))('String', String);
    BasicType.DateTime = new /** @class */ (function (_super) {
        tslib_1.__extends(DateTimeType, _super);
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
        tslib_1.__extends(DateType, _super);
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
        tslib_1.__extends(TimeType, _super);
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
        tslib_1.__extends(FileType, _super);
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
        tslib_1.__extends(GeoPointType, _super);
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
        tslib_1.__extends(JsonArrayType, _super);
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
        tslib_1.__extends(JsonObjectType, _super);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzaWNUeXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQmFzaWNUeXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFJQSxzQ0FBa0M7QUFDbEMsd0NBQXVDO0FBQ3ZDLCtCQUErQztBQUcvQyxTQUFTLFVBQVUsQ0FBQyxLQUFrQjtJQUNwQyx3QkFBd0I7SUFDeEIsT0FBTyxLQUFLLFlBQVksSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0FBQ25GLENBQUM7QUFFRCxTQUFTLFVBQVUsQ0FBQyxJQUFVLEVBQUUsWUFBeUI7SUFDdkQsSUFBTSxJQUFJLEdBQUcsT0FBTyxJQUFJLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQzlELElBQUksWUFBWSxJQUFJLElBQUksRUFBRTtRQUN4QiwyREFBMkQ7UUFDM0QsT0FBTyxZQUFZLENBQUMsV0FBVyxFQUFFLEtBQUssSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztLQUNoRjtJQUVELE9BQU8sSUFBSSxDQUFDO0FBQ2QsQ0FBQztBQUVEO0lBQWtDLHFDQUFPO0lBNkh2Qzs7Ozs7T0FLRztJQUNILG1CQUFZLEdBQVcsRUFBRSxlQUF5QixFQUFFLFdBQXFCO1FBQXpFLGlCQU1DO1FBTEMsSUFBTSxFQUFFLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsU0FBTyxHQUFLLENBQUM7UUFFMUQsUUFBQSxrQkFBTSxFQUFFLEVBQUUsZUFBZSxDQUFDLFNBQUM7UUFFM0IsS0FBSSxDQUFDLFdBQVcsR0FBRyxD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

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.SingularAttribute = void 0;
var tslib_1 = __webpack_require__(0);
var Attribute_1 = __webpack_require__(9);
var Type_1 = __webpack_require__(10);
var SingularAttribute = /** @class */ (function (_super) {
    tslib_1.__extends(SingularAttribute, _super);
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
        return tslib_1.__assign({ type: this.type.ref }, _super.prototype.toJSON.call(this));
    };
    return SingularAttribute;
}(Attribute_1.Attribute));
exports.SingularAttribute = SingularAttribute;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2luZ3VsYXJBdHRyaWJ1dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJTaW5ndWxhckF0dHJpYnV0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEseUNBQWlFO0FBQ2pFLCtCQUErQztBQU8vQztJQUEwQyw2Q0FBWTtJQTBCcEQ7Ozs7T0FJRztJQUNILDJCQUFZLElBQVksRUFBRSxJQUFhLEVBQUUsVUFBb0I7UUFBN0QsWUFDRSxrQkFBTSxJQUFJLEVBQUUsVUFBVSxDQUFDLFNBRXhCO1FBREMsS0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7O0lBQ25CLENBQUM7SUE1QkQsc0JBQUksOENBQWU7UUFIbkI7O1dBRUc7YUFDSDtZQUNFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUM7UUFDbkMsQ0FBQzs7O09BQUE7SUFLRCxzQkFBSSxzREFBdUI7UUFIM0I7O1dBRUc7YUFDSDtZQUNFLFFBQVEsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUU7Z0JBQ2pDLEtBQUssc0JBQWUsQ0FBQyxLQUFLO29CQUN4QixPQUFPLG1DQUF1QixDQUFDLEtBQUssQ0FBQztnQkFDdkMsS0FBSyxzQkFBZSxDQUFDLFVBQVU7b0JBQzdCLE9BQU8sbUNBQXVCLENBQUMsUUFBUSxDQUFDO2dCQUMxQyxLQUFLLHNCQUFlLENBQUMsTUFBTTtvQkFDekIsT0FBTyxtQ0FBdUIsQ0FBQyxXQUFXLENBQUM7Z0JBQzdDO29CQUNFLE1BQU0sSUFBSSxLQUFLLENBQUMsb0NBQW9DLENBQUMsQ0FBQzthQUN6RDtRQUNILENBQUM7OztPQUFBO0lBWUQ7O09BRUc7SUFDSCx3Q0FBWSxHQUFaLFVBQWEsS0FBbUIsRUFBRSxNQUFlLEVBQy9DLE9BQXFGO1FBQ3JGLElBQU0sY0FBYyxHQUEyQixxQkFBUyxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDakYsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNwQyxJQUFNLE9BQU8sR0FBRyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEtBQUssQ0FBQztRQUVwRCxJQUFJLE9BQU8sQ0FBQyxVQUFVLEVBQUU7WUFDdEIsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFLLENBQUM7U0FDbkM7UUFFRCxJQUFJLE9BQU8sRUFBRTtZQUNYLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUNsQjtRQUVELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBRUQ7O09BRUc7SUFDSCx3Q0FBWSxHQUFaLFVBQWEsS0FBbUIsRUFBRSxNQUFlLEVBQUUsU0FBZSxFQUNoRSxPQUF3RDtRQUN4RCxJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFFeEYsSUFBSSxPQUFPLENBQUMsVUFBVSxFQUFFO1lBQ3RCLElBQU0sY0FBYyxHQUEyQixxQkFBUyxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDakYsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFLLENBQUM7U0FDbkM7UUFFRCxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRUQ7O09BRUc7SUFDSCxrQ0FBTSxHQUFOO1FBQ0UsMEJBQ0UsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUNoQixpQkFBTSxNQUFNLFdBQUUsRUFDakI7SUFDSixDQUFDO0lBQ0gsd0JBQUM7QUFBRCxDQUFDLEFBaEZELENBQTBDLHFCQUFTLEdBZ0ZsRDtBQWhGWSw4Q0FBaUIifQ==

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.OAuthMessage = exports.Message = exports.appendQueryParams = exports.StatusCode = void 0;
var tslib_1 = __webpack_require__(0);
var error_1 = __webpack_require__(4);
/**
 * Checks whether the user uses a browser which does support revalidation.
 */
// @ts-ignore
var REVALIDATION_SUPPORTED = typeof navigator === 'undefined' || (typeof chrome !== 'undefined' && /google/i.test(navigator.vendor)) || (/cros i686/i.test(navigator.platform));
exports.StatusCode = {
    NOT_MODIFIED: 304,
    BAD_CREDENTIALS: 460,
    BUCKET_NOT_FOUND: 461,
    INVALID_PERMISSION_MODIFICATION: 462,
    INVALID_TYPE_VALUE: 463,
    OBJECT_NOT_FOUND: 404,
    OBJECT_OUT_OF_DATE: 412,
    PERMISSION_DENIED: 466,
    QUERY_DISPOSED: 467,
    QUERY_NOT_SUPPORTED: 468,
    SCHEMA_NOT_COMPATIBLE: 469,
    SCHEMA_STILL_EXISTS: 470,
    SYNTAX_ERROR: 471,
    TRANSACTION_INACTIVE: 472,
    TYPE_ALREADY_EXISTS: 473,
    TYPE_STILL_REFERENCED: 474,
    SCRIPT_ABORTION: 475,
};
/**
 * Appends the given query parameters to the url
 * @param url - on which the parameters will be appended
 * @param queryParams - The Query parameters which should be appended
 * @return The URL with the appended parameters
 */
function appendQueryParams(url, queryParams) {
    var queryString = typeof queryParams === 'string' ? queryParams : Object.entries(queryParams)
        .filter(function (_a) {
        var value = _a[1];
        return value !== undefined;
    })
        .map(function (_a) {
        var key = _a[0], value = _a[1];
        return key + "=" + encodeURIComponent(value);
    })
        .join('&');
    if (!queryString) {
        return url;
    }
    var sep = url.indexOf('?') >= 0 ? '&' : '?';
    return url + sep + queryString;
}
exports.appendQueryParams = appendQueryParams;
var Message = /** @class */ (function () {
    /**
     * @param args The path arguments
     */
    function Message() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this.withCredentials = false;
        this.progressCallback = null;
        this._tokenStorage = null;
        this._responseType = null;
        var index = 0;
        var path = this.spec.path[0];
        var len = this.spec.path.length;
        for (var i = 1; i < len; i += 1) {
            if (this.spec.dynamic && len - 1 === i) {
                path += args[index].split('/').map(encodeURIComponent).join('/');
            }
            else {
                path += encodeURIComponent(args[index]) + this.spec.path[i];
            }
            index += 1;
        }
        var queryParams = {};
        for (var i = 0; i < this.spec.query.length; i += 1) {
            var arg = args[index];
            index += 1;
            if (arg !== undefined && arg !== null) {
                queryParams[this.spec.query[i]] = arg;
            }
        }
        this.request = {
            method: this.spec.method,
            path: appendQueryParams(path, queryParams),
            entity: null,
            headers: {},
        };
        if (args[index]) {
            this.entity(args[index], 'json');
        }
        this.responseType('json');
    }
    Object.defineProperty(Message.prototype, "spec", {
        /**
         * Returns the specification of this message
         */
        get: function () { return null; },
        enumerable: false,
        configurable: true
    });
    /**
     * Creates a new message class with the given message specification
     * @return A created message object for the specification
     */
    Message.create = function (specification) {
        var parts = specification.path.split('?');
        var path = parts[0].split(/[:*]\w*/);
        var query = [];
        if (parts[1]) {
            parts[1].split('&').forEach(function (arg) {
                var part = arg.split('=');
                query.push(part[0]);
            });
        }
        var spec = {
            path: path,
            query: query,
            status: specification.status,
            method: specification.method,
            dynamic: specification.path.indexOf('*') !== -1,
        };
        return /** @class */ (function (_super) {
            tslib_1.__extends(class_1, _super);
            function class_1() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            Object.defineProperty(class_1.prototype, "spec", {
                get: function () {
                    return spec;
                },
                enumerable: false,
                configurable: true
            });
            return class_1;
        }(Message));
    };
    Object.defineProperty(Message.prototype, "isBinary", {
        get: function () {
            return (this.request.type && this.request.type in Message.BINARY) || this._responseType in Message.BINARY;
        },
        enumerable: false,
        configurable: true
    });
    Message.prototype.tokenStorage = function (value) {
        if (value === undefined) {
            return this._tokenStorage;
        }
        this._tokenStorage = value;
        return this;
    };
    Message.prototype.path = function (path) {
        if (path !== undefined) {
            var queryIndex = this.request.path.indexOf('?') + 1;
            this.request.path = path + (queryIndex > 0 ? (path.indexOf('?') > -1 ? '&' : '?') + this.request.path.substring(queryIndex) : '');
            return this;
        }
        return this.request.path;
    };
    Message.prototype.header = function (name, value) {
        if (value === null) {
            delete this.request.headers[name];
            return this;
        }
        if (value !== undefined) {
            this.request.headers[name] = value;
            return this;
        }
        return this.request.headers[name];
    };
    /**
     * Sets the entity type
     * @param data - The data to send
     * @param type - the type of the data one of 'json'|'text'|'blob'|'arraybuffer'
     * defaults detect the type based on the body data
     * @return This message object
     */
    Message.prototype.entity = function (data, type) {
        var requestType = type;
        if (!requestType) {
            if (typeof data === 'string') {
                if (/^data:(.+?)(;base64)?,.*$/.test(data)) {
                    requestType = 'data-url';
                }
                else {
                    requestType = 'text';
                }
            }
            else if (typeof Blob !== 'undefined' && data instanceof Blob) {
                requestType = 'blob';
            }
            else if (typeof Buffer !== 'undefined' && data instanceof Buffer) {
                requestType = 'buffer';
            }
            else if (typeof ArrayBuffer !== 'undefined' && data instanceof ArrayBuffer) {
                requestType = 'arraybuffer';
            }
            else if (typeof FormData !== 'undefined' && data instanceof FormData) {
                requestType = 'form';
            }
            else {
                requestType = 'json';
            }
        }
        this.request.type = requestType;
        this.request.entity = data;
        return this;
    };
    Message.prototype.mimeType = function (mimeType) {
        return this.header('content-type', mimeType);
    };
    Message.prototype.contentLength = function (contentLength) {
        if (contentLength !== undefined) {
            return this.header('content-length', "" + contentLength);
        }
        return Number(this.header('content-length'));
    };
    Message.prototype.ifMatch = function (eTag) {
        return this.header('If-Match', this.formatETag(eTag));
    };
    Message.prototype.ifNoneMatch = function (eTag) {
        return this.header('If-None-Match', this.formatETag(eTag));
    };
    Message.prototype.ifUnmodifiedSince = function (date) {
        // IE 10 returns UTC strings and not an RFC-1123 GMT date string
        return this.header('if-unmodified-since', date && date.toUTCString().replace('UTC', 'GMT'));
    };
    /**
     * Indicates that the request should not be served by a local cache
     * @return
     */
    Message.prototype.noCache = function () {
        if (!REVALIDATION_SUPPORTED) {
            this.ifMatch('') // is needed for firefox or safari (but forbidden for chrome)
                .ifNoneMatch('-'); // is needed for edge and ie (but forbidden for chrome)
        }
        return this.cacheControl('max-age=0, no-cache');
    };
    Message.prototype.cacheControl = function (value) {
        return this.header('cache-control', value);
    };
    Message.prototype.acl = function (acl) {
        return this.header('baqend-acl', acl && JSON.stringify(acl));
    };
    Message.prototype.customHeaders = function (customHeaders) {
        return this.header('baqend-custom-headers', customHeaders && JSON.stringify(customHeaders));
    };
    Message.prototype.accept = function (accept) {
        return this.header('accept', accept);
    };
    Message.prototype.responseType = function (type) {
        if (type !== undefined) {
            this._responseType = type;
            return this;
        }
        return this._responseType;
    };
    Message.prototype.progress = function (callback) {
        if (callback !== undefined) {
            this.progressCallback = callback;
            return this;
        }
        return this.progressCallback;
    };
    /**
     * Adds the given string to the request path
     *
     * If the parameter is an object, it will be serialized as a query string.
     *
     * @param query which will added to the request path
     * @return
     */
    Message.prototype.addQueryString = function (query) {
        this.request.path = appendQueryParams(this.request.path, query);
        return this;
    };
    Message.prototype.formatETag = function (eTag) {
        if (eTag === null || eTag === undefined || eTag === '*') {
            return eTag;
        }
        var tag = "" + eTag;
        if (tag.indexOf('"') === -1) {
            tag = "\"" + tag + "\"";
        }
        return tag;
    };
    /**
     * Handle the receive
     * @param response The received response headers and data
     * @return
     */
    Message.prototype.doReceive = function (response) {
        if (this.spec.status.indexOf(response.status) === -1) {
            throw new error_1.CommunicationError(this, response);
        }
    };
    Message.StatusCode = exports.StatusCode;
    Message.BINARY = {
        blob: true,
        buffer: true,
        stream: true,
        arraybuffer: true,
        'data-url': true,
        base64: true,
    };
    return Message;
}());
exports.Message = Message;
var OAuthMessage = /** @class */ (function (_super) {
    tslib_1.__extends(OAuthMessage, _super);
    function OAuthMessage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(OAuthMessage.prototype, "spec", {
        get: function () {
            return {
                method: 'OAUTH',
                dynamic: false,
                path: [''],
                query: [],
                status: [200],
            };
        },
        enumerable: false,
        configurable: true
    });
    return OAuthMessage;
}(Message));
exports.OAuthMessage = OAuthMessage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWVzc2FnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIk1lc3NhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUlBLGtDQUE4QztBQXlCOUM7O0dBRUc7QUFDSCxhQUFhO0FBQ2IsSUFBTSxzQkFBc0IsR0FBRyxPQUFPLFNBQVMsS0FBSyxXQUFXLElBQUksQ0FBQyxPQUFPLE1BQU0sS0FBSyxXQUFXLElBQUksU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7QUFFckssUUFBQSxVQUFVLEdBQUc7SUFDeEIsWUFBWSxFQUFFLEdBQUc7SUFDakIsZUFBZSxFQUFFLEdBQUc7SUFDcEIsZ0JBQWdCLEVBQUUsR0FBRztJQUNyQiwrQkFBK0IsRUFBRSxHQUFHO0lBQ3BDLGtCQUFrQixFQUFFLEdBQUc7SUFDdkIsZ0JBQWdCLEVBQUUsR0FBRztJQUNyQixrQkFBa0IsRUFBRSxHQUFHO0lBQ3ZCLGlCQUFpQixFQUFFLEdBQUc7SUFDdEIsY0FBYyxFQUFFLEdBQUc7SUFDbkIsbUJBQW1CLEVBQUUsR0FBRztJQUN4QixxQkFBcUIsRUFBRSxHQUFHO0lBQzFCLG1CQUFtQixFQUFFLEdBQUc7SUFDeEIsWUFBWSxFQUFFLEdBQUc7SUFDakIsb0JBQW9CLEVBQUUsR0FBRztJQUN6QixtQkFBbUIsRUFBRSxHQUFHO0lBQ3hCLHFCQUFxQixFQUFFLEdBQUc7SUFDMUIsZUFBZSxFQUFFLEdBQUc7Q0FDckIsQ0FBQztBQUVGOzs7OztHQUtHO0FBQ0gsU0FBZ0IsaUJBQWlCLENBQUMsR0FBVyxFQUFFLFdBQTJEO0lBQ3hHLElBQU0sV0FBVyxHQUFHLE9BQU8sV0FBVyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQztTQUM1RixNQUFNLENBQUMsVUFBQyxFQUFTO1lBQU4sS0FBSyxRQUFBO1FBQU0sT0FBQSxLQUFLLEtBQUssU0FBUztJQUFuQixDQUFtQixDQUFDO1NBQzFDLEdBQUcsQ0FBQyxVQUFDLEVBQVk7WUFBWCxHQUFHLFFBQUEsRUFBRSxLQUFLLFFBQUE7UUFBTSxPQUFHLEdBQUcsU0FBSSxrQkFBa0IsQ0FBQyxLQUFlLENBQUc7SUFBL0MsQ0FBK0MsQ0FBQztTQUN0RSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFFYixJQUFJLENBQUMsV0FBVyxFQUFFO1FBQ2hCLE9BQU8sR0FBRyxDQUFDO0tBQ1o7SUFFRCxJQUFNLEdBQUcsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7SUFDOUMsT0FBTyxHQUFHLEdBQUcsR0FBRyxHQUFHLFdBQVcsQ0FBQztBQUNqQyxDQUFDO0FBWkQsOENBWUM7QUFFRDtJQThERTs7T0FFRztJQUNIO1FBQVksY0FBaUI7YUFBakIsVUFBaUIsRUFBakIscUJBQWlCLEVBQWpCLElBQWlCO1lBQWpCLHlCQUFpQjs7UUFyRHRCLG9CQUFlLEdBQVksS0FBSyxDQUFDO1FBRWpDLHFCQUFnQixHQUE0QixJQUFJLENBQUM7UUFJaEQsa0JBQWEsR0FBd0IsSUFBSSxDQUFDO1FBRTFDLGtCQUFhLEdBQTRCLElBQUksQ0FBQztRQThDcEQsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ2QsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDN0IsSUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ2xDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUMvQixJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUN0QyxJQUFJLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDbEU7aUJBQU07Z0JBQ0wsSUFBSSxJQUFJLGtCQUFrQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQzdEO1lBQ0QsS0FBSyxJQUFJLENBQUMsQ0FBQztTQUNaO1FBRUQsSUFBTSxXQUFXLEdBQThCLEVBQUUsQ0FBQztRQUNsRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDbEQsSUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3hCLEtBQUssSUFBSSxDQUFDLENBQUM7WUFDWCxJQUFJLEdBQUcsS0FBSyxTQUFTLElBQUksR0FBRyxLQUFLLElBQUksRUFBRTtnQkFDckMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO2FBQ3ZDO1NBQ0Y7UUFFRCxJQUFJLENBQUMsT0FBTyxHQUFHO1lBQ2IsTUFBTSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTTtZQUN4QixJQUFJLEVBQUUsaUJBQWlCLENBQUMsSUFBSSxFQUFFLFdBQVcsQ0FBQztZQUMxQyxNQUFNLEVBQUUsSUFBSTtZQUNaLE9BQU8sRUFBRSxFQUFFO1NBQ1osQ0FBQztRQUVGLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ2YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUM7U0FDbEM7UUFFRCxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUExRUQsc0JBQVcseUJBQUk7UUFIZjs7V0FFRzthQUNILGNBQWlDLE9BQU8sSUFBVyxDQUFDLENBQUMsQ0FBQzs7O09BQUE7SUFFdEQ7OztPQUdHO0lBQ0ksY0FBTSxHQUFiLFVBQWlCLGFBQWdDO1FBQy9DLElBQU0sS0FBSyxHQUFHLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzVDLElBQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFdkMsSUFBTSxLQUFLLEdBQWEsRUFBRSxDQUFDO1FBQzNCLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ1osS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQyxHQUFHO2dCQUM5QixJQUFNLElBQUksR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUM1QixLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3RCLENBQUMsQ0FBQyxDQUFDO1NBQ0o7UUFFRCxJQUFNLElBQUksR0FBZ0I7WUFDeEIsSUFBSSxNQUFBO1lBQ0osS0FBSyxPQUFBO1lBQ0wsTUFBTSxFQUFFLGFBQWEsQ0FBQyxNQUFNO1lBQzVCLE1BQU0sRUFBRSxhQUFhLENBQUMsTUFBTTtZQUM1QixPQUFPLEVBQUUsYUFBYSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ2hELENBQUM7UUFFRixPQUFPO1lBQWMsbUNBQU87WUFBckI7O1lBSVAsQ0FBQztZQUhDLHNCQUFJLHlCQUFJO3FCQUFSO29CQUNFLE9BQU8sSUFBSSxDQUFDO2dCQUNkLENBQUM7OztlQUFBO1lBQ0gsY0FBQztRQUFELENBQUMsQUFKTSxDQUFjLE9BQU8sRUFJZixDQUFDO0lBQ2hCLENBQUM7SUFFRCxzQkFBSSw2QkFBUTthQUFaO1lBQ0UsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLENBQUMsYUFBZSxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUM7UUFDOUcsQ0FBQzs7O09BQUE7SUFzREQsOEJBQVksR0FBWixVQUFhLEtBQTJCO1FBQ3RDLElBQUksS0FBSyxLQUFLLFNBQVMsRUFBRTtZQUN2QixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7U0FDM0I7UUFFRCxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztRQUMzQixPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFnQkQsc0JBQUksR0FBSixVQUFLLElBQWE7UUFDaEIsSUFBSSxJQUFJLEtBQUssU0FBUyxFQUFFO1lBQ3RCLElBQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDdEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsSUFBSSxHQUFHLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDbEksT0FBTyxJQUFJLENBQUM7U0FDYjtRQUVELE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7SUFDM0IsQ0FBQztJQW1CRCx3QkFBTSxHQUFOLFVBQU8sSUFBWSxFQUFFLEtBQXFCO1FBQ3hDLElBQUksS0FBSyxLQUFLLElBQUksRUFBRTtZQUNsQixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2xDLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFFRCxJQUFJLEtBQUssS0FBSyxTQUFTLEVBQUU7WUFDdkIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDO1lBQ25DLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFFRCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSCx3QkFBTSxHQUFOLFVBQU8sSUFBaUIsRUFBRSxJQUFzQjtRQUM5QyxJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUM7UUFDdkIsSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNoQixJQUFJLE9BQU8sSUFBSSxLQUFLLFFBQVEsRUFBRTtnQkFDNUIsSUFBSSwyQkFBMkIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7b0JBQzFDLFdBQVcsR0FBRyxVQUFVLENBQUM7aUJBQzFCO3FCQUFNO29CQUNMLFdBQVcsR0FBRyxNQUFNLENBQUM7aUJBQ3RCO2FBQ0Y7aUJBQU0sSUFBSSxPQUFPLElBQUksS0FBSyxXQUFXLElBQUksSUFBSSxZQUFZLElBQUksRUFBRTtnQkFDOUQsV0FBVyxHQUFHLE1BQU0sQ0FBQzthQUN0QjtpQkFBTSxJQUFJLE9BQU8sTUFBTSxLQUFLLFdBQVcsSUFBSSxJQUFJLFlBQVksTUFBTSxFQUFFO2dCQUNsRSxXQUFXLEdBQUcsUUFBUSxDQUFDO2FBQ3hCO2lCQUFNLElBQUksT0FBTyxXQUFXLEtBQUssV0FBVyxJQUFJLElBQUksWUFBWSxXQUFXLEVBQUU7Z0JBQzVFLFdBQVcsR0FBRyxhQUFhLENBQUM7YUFDN0I7aUJBQU0sSUFBSSxPQUFPLFFBQVEsS0FBSyxXQUFXLElBQUksSUFBSSxZQUFZLFFBQVEsRUFBRTtnQkFDdEUsV0FBVyxHQUFHLE1BQU0sQ0FBQzthQUN0QjtpQkFBTTtnQkFDTCxXQUFXLEdBQUcsTUFBTSxDQUFDO2FBQ3RCO1NBQ0Y7UUFFRCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksR0FBRyxXQUFXLENBQUM7UUFDaEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQzNCLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQWVELDBCQUFRLEdBQVIsVUFBUyxRQUF3QjtRQUMvQixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFlRCwrQkFBYSxHQUFiLFVBQWMsYUFBc0I7UUFDbEMsSUFBSSxhQUFhLEtBQUssU0FBUyxFQUFFO1lBQy9CLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsRUFBRSxLQUFHLGFBQWUsQ0FBQyxDQUFDO1NBQzFEO1FBQ0QsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQWVELHlCQUFPLEdBQVAsVUFBUSxJQUE2QjtRQUNuQyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBZUQsNkJBQVcsR0FBWCxVQUFZLElBQWE7UUFDdkIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQWVELG1DQUFpQixHQUFqQixVQUFrQixJQUFXO1FBQzNCLGdFQUFnRTtRQUNoRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMscUJBQXFCLEVBQUUsSUFBSSxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDOUYsQ0FBQztJQUVEOzs7T0FHRztJQUNILHlCQUFPLEdBQVA7UUFDRSxJQUFJLENBQUMsc0JBQXNCLEVBQUU7WUFDM0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQyw2REFBNkQ7aUJBQzNFLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLHVEQUF1RDtTQUM3RTtRQUVELE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFlRCw4QkFBWSxHQUFaLFVBQWEsS0FBYztRQUN6QixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsZUFBZSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFlRCxxQkFBRyxHQUFILFVBQUksR0FBUztRQUNYLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUUsR0FBRyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUMvRCxDQUFDO0lBZUQsK0JBQWEsR0FBYixVQUFjLGFBQTZDO1FBQ3pELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyx1QkFBdUIsRUFBRSxhQUFhLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO0lBQzlGLENBQUM7SUFlRCx3QkFBTSxHQUFOLFVBQU8sTUFBZTtRQUNwQixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFlRCw4QkFBWSxHQUFaLFVBQWEsSUFBOEI7UUFDekMsSUFBSSxJQUFJLEtBQUssU0FBUyxFQUFFO1lBQ3RCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1lBQzFCLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFFRCxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDNUIsQ0FBQztJQWVELDBCQUFRLEdBQVIsVUFBUyxRQUFrQztRQUN6QyxJQUFJLFFBQVEsS0FBSyxTQUFTLEVBQUU7WUFDMUIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLFFBQVEsQ0FBQztZQUNqQyxPQUFPLElBQUksQ0FBQztTQUNiO1FBRUQsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7SUFDL0IsQ0FBQztJQUVEOzs7Ozs7O09BT0c7SUFDSCxnQ0FBYyxHQUFkLFVBQWUsS0FBeUM7UUFDdEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsaUJBQWlCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDaEUsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQsNEJBQVUsR0FBVixVQUFXLElBQTZCO1FBQ3RDLElBQUksSUFBSSxLQUFLLElBQUksSUFBSSxJQUFJLEtBQUssU0FBUyxJQUFJLElBQUksS0FBSyxHQUFHLEVBQUU7WUFDdkQsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUVELElBQUksR0FBRyxHQUFHLEtBQUcsSUFBTSxDQUFDO1FBQ3BCLElBQUksR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtZQUMzQixHQUFHLEdBQUcsT0FBSSxHQUFHLE9BQUcsQ0FBQztTQUNsQjtRQUNELE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCwyQkFBUyxHQUFULFVBQVUsUUFBa0I7UUFDMUIsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO1lBQ3BELE1BQU0sSUFBSSwwQkFBa0IsQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7U0FDOUM7SUFDSCxDQUFDO0lBM2NlLGtCQUFVLEdBQUcsa0JBQVUsQ0FBQztJQUV4QixjQUFNLEdBQUc7UUFDdkIsSUFBSSxFQUFFLElBQUk7UUFDVixNQUFNLEVBQUUsSUFBSTtRQUNaLE1BQU0sRUFBRSxJQUFJO1FBQ1osV0FBVyxFQUFFLElBQUk7UUFDakIsVUFBVSxFQUFFLElBQUk7UUFDaEIsTUFBTSxFQUFFLElBQUk7S0FDYixDQUFDO0lBbWNKLGNBQUM7Q0FBQSxBQTdjRCxJQTZjQztBQTdjcUIsMEJBQU87QUErYzdCO0lBQWtDLHdDQUFPO0lBQXpDOztJQVVBLENBQUM7SUFUQyxzQkFBSSw4QkFBSTthQUFSO1lBQ0UsT0FBTztnQkFDTCxNQUFNLEVBQUUsT0FBTztnQkFDZixPQUFPLEVBQUUsS0FBSztnQkFDZCxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUM7Z0JBQ1YsS0FBSyxFQUFFLEVBQUU7Z0JBQ1QsTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDO2FBQ2QsQ0FBQztRQUNKLENBQUM7OztPQUFBO0lBQ0gsbUJBQUM7QUFBRCxDQUFDLEFBVkQsQ0FBa0MsT0FBTyxHQVV4QztBQVZZLG9DQUFZIn0=

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* this connector will only be choose in browser compatible environments */
/* eslint no-restricted-globals: ["off", "addEventListener", "removeEventListener"] */
Object.defineProperty(exports, "__esModule", { value: true });
exports.XMLHttpConnector = void 0;
var tslib_1 = __webpack_require__(0);
var Connector_1 = __webpack_require__(25);
var util_1 = __webpack_require__(3);
var XMLHttpConnector = /** @class */ (function (_super) {
    tslib_1.__extends(XMLHttpConnector, _super);
    function XMLHttpConnector() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @inheritDoc
     */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    XMLHttpConnector.isUsable = function (host, port, secure, basePath) {
        return typeof XMLHttpRequest !== 'undefined';
    };
    /**
     * @inheritDoc
     */
    XMLHttpConnector.prototype.doSend = function (message, request, receive) {
        var _this = this;
        if (request.method === 'OAUTH') {
            if (this.oAuthHandle) {
                this.oAuthHandle({ status: 409, headers: {}, entity: '{"message": "A new OAuth request was sent."}' });
            }
            localStorage.removeItem('oauth-response');
            var handler_1 = function (event) {
                if (event.key === 'oauth-response' && _this.oAuthHandle && event.newValue) {
                    _this.oAuthHandle(JSON.parse(event.newValue));
                }
            };
            this.oAuthHandle = function (msg) {
                receive(msg);
                localStorage.removeItem('oauth-response');
                removeEventListener('storage', handler_1, false);
            };
            addEventListener('storage', handler_1, false);
            return;
        }
        var xhr = new XMLHttpRequest();
        var url = this.origin + this.basePath + request.path;
        xhr.onreadystatechange = function () {
            // if we receive an error switch the response type to json
            if (xhr.responseType && xhr.readyState === 2 && xhr.status >= 400) {
                xhr.responseType = 'text';
            }
            if (xhr.readyState === 4) {
                var response_1 = {
                    headers: {},
                    status: xhr.status,
                    entity: xhr.response || xhr.responseText,
                };
                Connector_1.Connector.RESPONSE_HEADERS.forEach(function (name) {
                    response_1.headers[name] = xhr.getResponseHeader(name) || '';
                });
                receive(response_1);
            }
        };
        // Set the message progress callback
        if (xhr.upload && message.progress()) {
            xhr.upload.onprogress = message.progress();
        }
        xhr.open(request.method, url, true);
        var entity = request.entity;
        var headers = request.headers;
        var headerNames = Object.keys(headers);
        for (var i = 0, len = headerNames.length; i < len; i += 1) {
            var headerName = headerNames[i];
            xhr.setRequestHeader(headerName, headers[headerName]);
        }
        xhr.withCredentials = message.withCredentials;
        switch (message.responseType()) {
            case 'arraybuffer':
                xhr.responseType = 'arraybuffer';
                break;
            case 'blob':
            case 'data-url':
            case 'base64':
                xhr.responseType = 'blob';
                break;
            default:
            // ignore
        }
        xhr.send(entity);
    };
    /**
     * @inheritDoc
     */
    XMLHttpConnector.prototype.fromFormat = function (response, entity, type) {
        if (type === 'json') {
            return JSON.parse(entity);
        }
        if (type === 'data-url' || type === 'base64') {
            var reader_1 = new FileReader();
            reader_1.readAsDataURL(entity);
            return new Promise(function (resolve, reject) {
                reader_1.onload = resolve;
                reader_1.onerror = reject;
            }).then(function () {
                var result = reader_1.result;
                if (type === 'base64' && typeof result === 'string') {
                    result = result.substring(result.indexOf(',') + 1);
                }
                return result;
            });
        }
        return entity;
    };
    /**
     * @inheritDoc
     */
    XMLHttpConnector.prototype.toFormat = function (message) {
        var type = message.request.type;
        if (type) {
            var entity = message.request.entity;
            var mimeType = message.mimeType();
            switch (type) {
                case 'blob':
                    mimeType = mimeType || entity.type;
                    break;
                case 'arraybuffer':
                case 'form':
                    break;
                case 'data-url': {
                    var match = entity.match(/^data:(.+?)(;base64)?,(.*)$/);
                    var isBase64 = match[2];
                    // eslint-disable-next-line prefer-destructuring
                    entity = match[3];
                    type = 'blob';
                    mimeType = mimeType || match[1];
                    if (!isBase64) {
                        entity = decodeURIComponent(entity);
                        break;
                    }
                }
                // fallthrough
                case 'base64': {
                    var binaryStr = util_1.atob(entity);
                    var len = binaryStr.length;
                    var array = new Uint8Array(len);
                    for (var i = 0; i < len; i += 1) {
                        array[i] = binaryStr.charCodeAt(i);
                    }
                    type = 'blob';
                    entity = new Blob([array], { type: mimeType });
                    break;
                }
                case 'json':
                    if (typeof entity !== 'string') {
                        entity = JSON.stringify(entity);
                    }
                    break;
                case 'text':
                    break;
                default:
                    throw new Error("Supported request format:" + type);
            }
            message.entity(entity, type).mimeType(mimeType);
        }
    };
    return XMLHttpConnector;
}(Connector_1.Connector));
exports.XMLHttpConnector = XMLHttpConnector;
Connector_1.Connector.connectors.push(XMLHttpConnector);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiWE1MSHR0cENvbm5lY3Rvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlhNTEh0dHBDb25uZWN0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLDJFQUEyRTtBQUMzRSxzRkFBc0Y7Ozs7QUFFdEYseUNBRXFCO0FBQ3JCLGdDQUErQjtBQUcvQjtJQUFzQyw0Q0FBUztJQUEvQzs7SUFvTEEsQ0FBQztJQWpMQzs7T0FFRztJQUNILDZEQUE2RDtJQUN0RCx5QkFBUSxHQUFmLFVBQWdCLElBQVksRUFBRSxJQUFZLEVBQUUsTUFBZSxFQUFFLFFBQWdCO1FBQzNFLE9BQU8sT0FBTyxjQUFjLEtBQUssV0FBVyxDQUFDO0lBQy9DLENBQUM7SUFFRDs7T0FFRztJQUNILGlDQUFNLEdBQU4sVUFBTyxPQUFnQixFQUFFLE9BQWdCLEVBQUUsT0FBaUI7UUFBNUQsaUJBZ0ZDO1FBL0VDLElBQUksT0FBTyxDQUFDLE1BQU0sS0FBSyxPQUFPLEVBQUU7WUFDOUIsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO2dCQUNwQixJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSw4Q0FBOEMsRUFBRSxDQUFDLENBQUM7YUFDeEc7WUFFRCxZQUFZLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDLENBQUM7WUFFMUMsSUFBTSxTQUFPLEdBQUcsVUFBQyxLQUFtQjtnQkFDbEMsSUFBSSxLQUFLLENBQUMsR0FBRyxLQUFLLGdCQUFnQixJQUFJLEtBQUksQ0FBQyxXQUFXLElBQUksS0FBSyxDQUFDLFFBQVEsRUFBRTtvQkFDeEUsS0FBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO2lCQUM5QztZQUNILENBQUMsQ0FBQztZQUVGLElBQUksQ0FBQyxXQUFXLEdBQUcsVUFBQyxHQUFhO2dCQUMvQixPQUFPLENBQUMs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

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21);
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);

 // **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html

var _nodeId;

var _clockseq; // Previous uuid creation time


var _lastMSecs = 0;
var _lastNSecs = 0; // See https://github.com/uuidjs/uuid for API details

function v1(options, buf, offset) {
  var i = buf && offset || 0;
  var b = buf || new Array(16);
  options = options || {};
  var node = options.node || _nodeId;
  var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq; // node and clockseq need to be initialized to random values if they're not
  // specified.  We do this lazily to minimize issues related to insufficient
  // system entropy.  See #189

  if (node == null || clockseq == null) {
    var seedBytes = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])();

    if (node == null) {
      // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
      node = _nodeId = [seedBytes[0] | 0x01, seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]];
    }

    if (clockseq == null) {
      // Per 4.2.2, randomize (14 bit) clockseq
      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
    }
  } // UUID timestamps are 100 nano-second units since the Gregorian epoch,
  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.


  var msecs = options.msecs !== undefined ? options.msecs : Date.now(); // Per 4.2.1.2, use count of uuid's generated during the current clock
  // cycle to simulate higher resolution clock

  var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1; // Time since last uuid creation (in msecs)

  var dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 10000; // Per 4.2.1.2, Bump clockseq on clock regression

  if (dt < 0 && options.clockseq === undefined) {
    clockseq = clockseq + 1 & 0x3fff;
  } // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
  // time interval


  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
    nsecs = 0;
  } // Per 4.2.1.2 Throw error if too many uuids are requested


  if (nsecs >= 10000) {
    throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
  }

  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq; // Per 4.1.4 - Convert from unix epoch to Gregorian epoch

  msecs += 12219292800000; // `time_low`

  var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
  b[i++] = tl >>> 24 & 0xff;
  b[i++] = tl >>> 16 & 0xff;
  b[i++] = tl >>> 8 & 0xff;
  b[i++] = tl & 0xff; // `time_mid`

  var tmh = msecs / 0x100000000 * 10000 & 0xfffffff;
  b[i++] = tmh >>> 8 & 0xff;
  b[i++] = tmh & 0xff; // `time_high_and_version`

  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version

  b[i++] = tmh >>> 16 & 0xff; // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)

  b[i++] = clockseq >>> 8 | 0x80; // `clock_seq_low`

  b[i++] = clockseq & 0xff; // `node`

  for (var n = 0; n < 6; ++n) {
    b[i + n] = node[n];
  }

  return buf || Object(_stringify_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(b);
}

/* harmony default export */ __webpack_exports__["a"] = (v1);

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _v35_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22);
/* harmony import */ var _md5_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65);


var v3 = Object(_v35_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])('v3', 0x30, _md5_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]);
/* harmony default export */ __webpack_exports__["a"] = (v3);

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21);
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);



function v4(options, buf, offset) {
  options = options || {};
  var rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (var i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return Object(_stringify_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(rnds);
}

/* harmony default export */ __webpack_exports__["a"] = (v4);

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _v35_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22);
/* harmony import */ var _sha1_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(66);


var v5 = Object(_v35_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])('v5', 0x50, _sha1_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]);
/* harmony default export */ __webpack_exports__["a"] = (v5);

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ('00000000-0000-0000-0000-000000000000');

/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);


function version(uuid) {
  if (!Object(_validate_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(uuid)) {
    throw TypeError('Invalid UUID');
  }

  return parseInt(uuid.substr(14, 1), 16);
}

/* harmony default export */ __webpack_exports__["a"] = (version);

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

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
    rxjs = __webpack_require__(86);
}
catch (e) {
    // ignore loading optional module error
}
// eslint-disable-next-line @typescript-eslint/no-redeclare
var Observable = rxjs.Observable, Subscription = rxjs.Subscription, Subscriber = rxjs.Subscriber;
exports.Observable = Observable;
exports.Subscription = Subscription;
exports.Subscriber = Subscriber;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2JzZXJ2YWJsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm9ic2VydmFibGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBRUEsU0FBUyxzQkFBc0I7SUFDN0IsTUFBTSxJQUFJLEtBQUssQ0FBQyx5RkFBeUYsQ0FBQyxDQUFDO0FBQzdHLENBQUM7QUFFRCxJQUFJLElBQUksR0FBRztJQUNULFVBQVUsRUFBRSxzQkFBc0Q7SUFDbEUsWUFBWSxFQUFFLHNCQUFzRDtJQUNwRSxVQUFVLEVBQUUsc0JBQXNEO0NBQ25FLENBQUM7QUFFRixJQUFJO0lBQ0YseURBQXlEO0lBQ3pELDBDQUEwQztJQUMxQyxJQUFJLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0NBQ3hCO0FBQUMsT0FBTyxDQUFDLEVBQUU7SUFDVix1Q0FBdUM7Q0FDeEM7QUFNRCwyREFBMkQ7QUFDbkQsSUFBQSxVQUFVLEdBQStCLElBQUksV0FBbkMsRUFBRSxZQUFZLEdBQWlCLElBQUksYUFBckIsRUFBRSxVQUFVLEdBQUssSUFBSSxXQUFULENBQVU7QUFFN0MsZ0NBQVU7QUFBRSxvQ0FBWTtBQUFFLGdDQUFVIn0=

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ManagedFactory = void 0;
var tslib_1 = __webpack_require__(0);
var Factory_1 = __webpack_require__(27);
var intersection_1 = __webpack_require__(1);
var ManagedFactory = /** @class */ (function (_super) {
    tslib_1.__extends(ManagedFactory, _super);
    function ManagedFactory() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Methods that are added to object instances
         * This property is an alias for this factory type prototype
         * @name methods
         */
        _this.methods = null;
        /**
         * The managed type of this factory
         */
        _this.managedType = null;
        /**
         * The owning EntityManager where this factory belongs to
         */
        _this.db = null;
        return _this;
    }
    /**
     * Creates a new ManagedFactory for the given type
     * @param managedType The metadata of type T
     * @param db The entity manager instance
     */
    ManagedFactory.create = function (managedType, db) {
        var factory = this.createFactory(managedType.typeConstructor);
        factory.methods = factory.prototype;
        factory.managedType = managedType;
        factory.db = db;
        return factory;
    };
    /**
     * Creates a new instance and sets the Managed Object to the given json
     * @param json
     * @return A new created instance of T
     */
    ManagedFactory.prototype.fromJSON = function (json) {
        var instance = this.newInstance();
        return this.managedType.fromJsonValue(intersection_1.Metadata.create(this.managedType, this.db), json, instance, {
            persisting: false,
        });
    };
    /**
     * Adds methods to instances of this factories type
     * @param methods The methods to add
     * @return
     */
    ManagedFactory.prototype.addMethods = function (methods) {
        Object.assign(this.methods, methods);
    };
    /**
     * Add a method to instances of this factories type
     * @param name The method name to add
     * @param fn The Method to add
     * @return
     */
    ManagedFactory.prototype.addMethod = function (name, fn) {
        this.methods[name] = fn;
    };
    return ManagedFactory;
}(Factory_1.Factory));
exports.ManagedFactory = ManagedFactory;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWFuYWdlZEZhY3RvcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJNYW5hZ2VkRmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEscUNBQW9DO0FBS3BDLGdEQUEyQztBQUUzQztJQUF1RCwwQ0FBVTtJQUFqRTtRQUFBLHFFQStEQztRQS9DQzs7OztXQUlHO1FBQ0ksYUFBTyxHQUFrQyxJQUFXLENBQUM7UUFFNUQ7O1dBRUc7UUFDSSxpQkFBVyxHQUFtQixJQUFXLENBQUM7UUFFakQ7O1dBRUc7UUFDSSxRQUFFLEdBQWtCLElBQVcsQ0FBQzs7SUFnQ3pDLENBQUM7SUE5REM7Ozs7T0FJRztJQUNXLHFCQUFNLEdBQXBCLFVBQXdDLFdBQTJCLEVBQUUsRUFBaUI7UUFDcEYsSUFBTSxPQUFPLEdBQXNCLElBQUksQ0FBQyxhQUFhLENBQXVCLFdBQVcsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUV6RyxPQUFPLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUM7UUFDcEMsT0FBTyxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7UUFDbEMsT0FBTyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFFaEIsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQztJQW1CRDs7OztPQUlHO0lBQ0gsaUNBQVEsR0FBUixVQUFTLElBQVU7UUFDakIsSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3BDLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsdUJBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRTtZQUNoRyxVQUFVLEVBQUUsS0FBSztTQUNsQixDQUFFLENBQUM7SUFDTixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILG1DQUFVLEdBQVYsVUFBVyxPQUFxQztRQUM5QyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsa0NBQVMsR0FBVCxVQUFVLElBQVksRUFBRSxFQUFZO1FBQ2xDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFDSCxxQkFBQztBQUFELENBQUMsQUEvREQsQ0FBdUQsaUJBQU8sR0ErRDdEO0FBL0RZLHdDQUFjIn0=

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Permission = void 0;
var tslib_1 = __webpack_require__(0);
/**
 * An aggregation of access rules for given object metadata.
 */
var Permission = /** @class */ (function () {
    function Permission() {
        this.rules = {};
    }
    /**
     * Returns a list of user and role references of all rules
     * @return a list of references
     */
    Permission.prototype.allRules = function () {
        return Object.keys(this.rules);
    };
    /**
     * Removes all rules from this permission object
     * @return
     */
    Permission.prototype.clear = function () {
        this.rules = {};
    };
    /**
     * Copies permissions from another permission object
     * @param permission The permission to copy from
     * @return
     */
    Permission.prototype.copy = function (permission) {
        this.rules = tslib_1.__assign({}, permission.rules);
        return this;
    };
    /**
     * Gets whenever all users and roles have the permission to perform the operation
     * @return <code>true</code> If public access is allowed
     */
    Permission.prototype.isPublicAllowed = function () {
        var _this = this;
        if ('*' in this.rules) {
            return false;
        }
        return !this.allRules().some(function (ref) { return _this.rules[ref] === 'allow'; });
    };
    /**
     * Sets whenever all users and roles should have the permission to perform the operation
     *
     * Note: All other allow rules will be removed.
     *
     * @return
     */
    Permission.prototype.setPublicAllowed = function () {
        var _this = this;
        this.allRules().forEach(function (ref) {
            if (_this.rules[ref] === 'allow') {
                delete _this.rules[ref];
            }
        });
    };
    /**
     * Returns the actual rule of the given user or role.
     * @param userOrRole The user or role to check for
     * @return The actual access rule or undefined if no rule was found
     */
    Permission.prototype.getRule = function (userOrRole) {
        return this.rules[this.ref(userOrRole)];
    };
    /**
     * Checks whenever the user or role is explicit allowed to perform the operation.
     *
     * @param userOrRole The user or role to check for
     * @return <code>true</code> If the given user or role is allowed
     */
    Permission.prototype.isAllowed = function (userOrRole) {
        return this.rules[this.ref(userOrRole)] === 'allow';
    };
    /**
     * Checks whenever the user or role is explicit denied to perform the operation.
     *
     * @param userOrRole The user or role to check for
     * @return <code>true</code> If the given user or role is denied
     */
    Permission.prototype.isDenied = function (userOrRole) {
        return this.rules[this.ref(userOrRole)] === 'deny';
    };
    /**
     * Allows the given users or rules to perform the operation
     * @param userOrRole The users or roles to allow
     * @return this permission object
     */
    Permission.prototype.allowAccess = function () {
        var userOrRole = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            userOrRole[_i] = arguments[_i];
        }
        for (var i = 0; i < userOrRole.length; i += 1) {
            this.rules[this.ref(userOrRole[i])] = 'allow';
        }
        return this;
    };
    /**
     * Denies the given users or rules to perform the operation
     * @param userOrRole The users or roles to deny
     * @return this permission object
     */
    Permission.prototype.denyAccess = function () {
        var userOrRole = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            userOrRole[_i] = arguments[_i];
        }
        for (var i = 0; i < userOrRole.length; i += 1) {
            this.rules[this.ref(userOrRole[i])] = 'deny';
        }
        return this;
    };
    /**
     * Deletes any allow/deny rules for the given users or roles
     * @param userOrRole The users or roles to delete rules for
     * @return this permission object
     */
    Permission.prototype.deleteAccess = function () {
        var userOrRole = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            userOrRole[_i] = arguments[_i];
        }
        for (var i = 0; i < userOrRole.length; i += 1) {
            delete this.rules[this.ref(userOrRole[i])];
        }
        return this;
    };
    /**
     * A Json representation of the set of rules
     * @return
     */
    Permission.prototype.toJSON = function () {
        return tslib_1.__assign({}, this.rules);
    };
    /**
     * Sets the permission rules from json
     * @param json The permission json representation
     * @return
     */
    Permission.prototype.fromJSON = function (json) {
        this.rules = json;
    };
    /**
     * Creates a permission from the given rules.
     * @param json The rules.
     * @return The permission.
     */
    Permission.fromJSON = function (json) {
        var permission = new this();
        permission.fromJSON(json);
        return permission;
    };
    /**
     * Resolves user and role references and validate given references
     * @param userOrRole The user, role or reference
     * @return The resolved and validated reference
     */
    Permission.prototype.ref = function (userOrRole) {
        var ref = typeof userOrRole === 'string' ? userOrRole : userOrRole.id;
        if (ref.indexOf('/db/User/') === 0 || ref.indexOf('/db/Role/') === 0) {
            return ref;
        }
        throw new TypeError('The given object isn\'t a user, role or a valid reference.');
    };
    Permission.BASE_PERMISSIONS = ['load', 'update', 'delete', 'query', 'insert'];
    return Permission;
}());
exports.Permission = Permission;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGVybWlzc2lvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlBlcm1pc3Npb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQU1BOztHQUVHO0FBQ0g7SUFBQTtRQUdTLFVBQUssR0FBOEIsRUFBRSxDQUFDO0lBcUsvQyxDQUFDO0lBbktDOzs7T0FHRztJQUNILDZCQUFRLEdBQVI7UUFDRSxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFRDs7O09BR0c7SUFDSCwwQkFBSyxHQUFMO1FBQ0UsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7SUFDbEIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCx5QkFBSSxHQUFKLFVBQUssVUFBc0I7UUFDekIsSUFBSSxDQUFDLEtBQUssd0JBQVEsVUFBVSxDQUFDLEtBQUssQ0FBRSxDQUFDO1FBQ3JDLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVEOzs7T0FHRztJQUNILG9DQUFlLEdBQWY7UUFBQSxpQkFNQztRQUxDLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDckIsT0FBTyxLQUFLLENBQUM7U0FDZDtRQUVELE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUMsR0FBRyxJQUFLLE9BQUEsS0FBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsS0FBSyxPQUFPLEVBQTNCLENBQTJCLENBQUMsQ0FBQztJQUNyRSxDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0gscUNBQWdCLEdBQWhCO1FBQUEsaUJBTUM7UUFMQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsT0FBTyxDQUFDLFVBQUMsR0FBRztZQUMxQixJQUFJLEtBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEtBQUssT0FBTyxFQUFFO2dCQUMvQixPQUFPLEtBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENB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

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Validator = void 0;
var tslib_1 = __webpack_require__(0);
var FallBachValLib = {};
var valLib = FallBachValLib;
try {
    // we load this module as an optional external dependency
    // eslint-disable-next-line global-require
    valLib = __webpack_require__(89);
}
catch (e) {
    // ignore loading optional module error
}
var Validator = /** @class */ (function () {
    function Validator(key, entity) {
        /**
         * The cached errors of the validation
         */
        this.errors = [];
        this.key = key;
        this.entity = entity;
    }
    /**
     * Compiles the given validation code for the managedType
     * @param managedType The managedType of the code
     * @param validationCode The validation code
     * @return the parsed validation function
     */
    Validator.compile = function (managedType, validationCode) {
        var keys = [];
        var iter = managedType.attributes();
        for (var el = iter.next(); !el.done; el = iter.next()) {
            var attr = el.value;
            keys.push(attr.name);
        }
        // eslint-disable-next-line @typescript-eslint/no-implied-eval,no-new-func
        var fn = new (Function.bind.apply(Function, tslib_1.__spreadArray(tslib_1.__spreadArray([void 0], keys), [validationCode])))();
        return function onValidate(argObj) {
            if (valLib === FallBachValLib) {
                throw new Error('Validation code will not be executed. Make sure that the validator package is correctly provided as an external dependency.');
            }
            var args = keys.map(function (name) { return argObj[name]; });
            return fn.apply({}, args);
        };
    };
    Object.defineProperty(Validator.prototype, "value", {
        /**
         * Gets the value of the attribute
         * @return Value
         */
        get: function () {
            return this.entity[this.key];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Validator.prototype, "isValid", {
        /**
         * Checks if the attribute is valid
         * @return
         */
        get: function () {
            return this.errors.length === 0;
        },
        enumerable: false,
        configurable: true
    });
    Validator.prototype.is = function (error, fn) {
        if (error instanceof Function) {
            return this.is('is', error);
        }
        if (fn(this.value, valLib) === false) {
            this.errors.push(error);
        }
        return this;
    };
    Validator.prototype.callMethod = function (method, errorMessage, argumentList) {
        var args = argumentList || [];
        try {
            args.unshift(this.toStringValue());
            if (valLib[method].apply(this, args) === false) {
                this.errors.push(errorMessage || method);
            }
        }
        catch (e) {
            this.errors.push(errorMessage || e.message);
        }
        return this;
    };
    Validator.prototype.toStringValue = function () {
        var value = this.value;
        if (typeof value === 'string' || value instanceof Date) {
            return value;
        }
        return JSON.stringify(value);
    };
    Validator.prototype.toJSON = function () {
        return {
            isValid: this.isValid,
            errors: this.errors,
        };
    };
    return Validator;
}());
exports.Validator = Validator;
var OTHER_VALIDATORS = ['contains', 'equals', 'matches'];
Object.keys(valLib).forEach(function (name) {
    if (name.startsWith('is') || OTHER_VALIDATORS.includes(name)) {
        // use function here to keep the correct this context
        Validator.prototype[name] = function validate() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var error = typeof args[0] === 'string' ? args.shift() : null;
            return this.callMethod(name, error, args);
        };
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmFsaWRhdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiVmFsaWRhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFJQSxJQUFNLGNBQWMsR0FBRyxFQUFFLENBQUM7QUFDMUIsSUFBSSxNQUFNLEdBQThCLGNBQWMsQ0FBQztBQUN2RCxJQUFJO0lBQ0YseURBQXlEO0lBQ3pELDBDQUEwQztJQUMxQyxNQUFNLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0NBQy9CO0FBQUMsT0FBTyxDQUFDLEVBQUU7SUFDVix1Q0FBdUM7Q0FDeEM7QUFTRDtJQStGRSxtQkFBWSxHQUFXLEVBQUUsTUFBYztRQXBFdkM7O1dBRUc7UUFDSyxXQUFNLEdBQWEsRUFBRSxDQUFDO1FBa0U1QixJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNmLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQ3ZCLENBQUM7SUFqR0Q7Ozs7O09BS0c7SUFDSSxpQkFBTyxHQUFkLFVBQWUsV0FBNkIsRUFBRSxjQUFzQjtRQUNsRSxJQUFNLElBQUksR0FBYSxFQUFFLENBQUM7UUFDMUIsSUFBTSxJQUFJLEdBQUcsV0FBVyxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ3RDLEtBQUssSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksRUFBRSxFQUFFO1lBQ3JELElBQU0sSUFBSSxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUM7WUFDdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDdEI7UUFFRCwwRUFBMEU7UUFDMUUsSUFBTSxFQUFFLFFBQU8sUUFBUSxZQUFSLFFBQVEsd0RBQUksSUFBSSxJQUFFLGNBQWMsTUFBQyxDQUFDO1FBQ2pELE9BQU8sU0FBUyxVQUFVLENBQUMsTUFBb0M7WUFDN0QsSUFB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

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.File = void 0;
var tslib_1 = __webpack_require__(0);
var error_1 = __webpack_require__(4);
var Acl_1 = __webpack_require__(15);
var util_1 = __webpack_require__(3);
var message = tslib_1.__importStar(__webpack_require__(2));
var connector_1 = __webpack_require__(6);
var FILE_BUCKET = '/file';
var FILE_BUCKET_LENGTH = FILE_BUCKET.length;
var ID = Symbol('Id');
var METADATA = Symbol('Metadata');
var DATA = Symbol('Data');
/**
 * Creates a file object, which represents one specific file reference.
 * This File object can afterwards be used to up- and download the file contents or to retrieves and change the files
 * metadata.
 *
 * The file data can be uploaded and downloaded as:
 *
 *  <table class="table">
 *   <tr>
 *     <th>type</th>
 *     <th>JavaScript type</th>
 *     <th>Description</th>
 *   </tr>
 *   <tr>
 *     <td>'arraybuffer'</td>
 *     <td>ArrayBuffer</td>
 *     <td>The content is represented as a fixed-length raw binary data buffer</td>
 *   </tr>
 *   <tr>
 *     <td>'blob'</th>
 *     <td>Blob</td>
 *     <td>The content is represented as a simple blob</td>
 *   </tr>
 *   <tr>
 *     <td>'json'</td>
 *     <td>object|array|string</td>
 *     <td>The file content is represented as json</td>
 *   </tr>
 *   <tr>
 *     <td>'text'</td>
 *     <td>string</td>
 *     <td>The file content is represented through the string</td>
 *   </tr>
 *   <tr>
 *     <td>'base64'</td>
 *     <td>string</td>
 *     <td>The file content as base64 encoded string</td>
 *   </tr>
 *   <tr>
 *     <td>'data-url'</td>
 *     <td>string</td>
 *     <td>A data url which represents the file content</td>
 *   </tr>
 * </table>
 *
 */
var File = /** @class */ (function () {
    /**
     * Creates a new file object which represents a file at the given id. Data which is provided to the constructor will
     * be uploaded by invoking {@link upload()}
     * @param fileOptions The fileOptions used to create a new file object, or just the id of the file
     */
    function File(fileOptions) {
        /**
         * The database connection to use
         */
        this.db = null; // is lazy initialized and never null
        this[_a] = null;
        // Is fileOptions just an id?
        var opt = typeof fileOptions === 'string' ? { id: fileOptions } : (fileOptions || {});
        if (opt.id) {
            // Check validity of id
            var nameSeparator = opt.id.indexOf('/', '/file/'.length);
            if (nameSeparator === -1 || opt.id.indexOf('/file/') !== 0) {
                throw new Error("Invalid file reference " + opt.id);
            }
            this[ID] = opt.id;
        }
        else {
            this[ID] = this.createIdFromOptions(opt);
        }
        // Assign metadata
        this.setDataOptions(opt);
        this.isFolder = this.id.charAt(this.id.length - 1) === '/';
    }
    Object.defineProperty(File.prototype, "id", {
        /**
         * The complete id of the file, including folder and name
         */
        get: function () {
            return this[ID];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(File.prototype, "url", {
        // @ts-ignore
        get: function () {
            throw new Error('This method is removed. Use the asynchronous File.createURL() method instead.');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(File.prototype, "name", {
        /**
         * The name of the file
         */
        get: function () {
            return this.id.substring(this.id.lastIndexOf('/', this.id.length - 2) + 1);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(File.prototype, "mimeType", {
        /**
         * The mimeType of the file, only accessible after fetching the metadata or downloading/uploading/providing the file
         */
        get: function () {
            if (this.isFolder) {
                throw new Error('A folder has no mimeType');
            }
            this.checkAvailable();
            return this[METADATA].mimeType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(File.prototype, "acl", {
        /**
         * The current file acl, only accessible after fetching the metadata or downloading/uploading/providing the file
         */
        get: function () {
            this.checkAvailable();
            return this[METADATA].acl;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(File.prototype, "lastModified", {
        /**
         * The last modified date of the file, only accessible after fetching the metadata
         * or downloading/uploading/providing the eTag
         */
        get: function () {
            if (this.isFolder) {
                throw new Error('A folder has no lastModified');
            }
            this.checkAvailable();
            return this[METADATA].lastModified;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(File.prototype, "createdAt", {
        /**
         * The creation date of the file, only accessible after fetching the metadata
         * or downloading/uploading/providing the eTag
         */
        get: function () {
            if (this.isFolder) {
                throw new Error('A folder has no creation date');
            }
            this.checkAvailable();
            return this[METADATA].createdAt;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(File.prototype, "eTag", {
        /**
         * The eTag of the file, only accessible after fetching the metadata or downloading/uploading/providing the file
         */
        get: function () {
            if (this.isFolder) {
                throw new Error('A folder has no eTag');
            }
            this.checkAvailable();
            return this[METADATA].eTag;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(File.prototype, "headers", {
        /**
         * The custom headers of the file, only accessible after fetching the metadata or downloading/uploading/providing
         * the file
         */
        get: function () {
            if (this.isFolder) {
                throw new Error('A folder has no custom headers');
            }
            this.checkAvailable();
            return this[METADATA].headers;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(File.prototype, "size", {
        /**
         * The size of the file, only accessible after fetching the metadata or downloading/uploading/providing the file
         */
        get: function () {
            if (this.isFolder) {
                throw new Error('A folder has no size');
            }
            this.checkAvailable();
            return this[METADATA].size;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(File.prototype, "bucket", {
        /**
         * The root bucket of this file
         */
        get: function () {
            return this.id.substring(FILE_BUCKET_LENGTH + 1, this.id.indexOf('/', FILE_BUCKET_LENGTH + 1));
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(File.prototype, "key", {
        /**
         * The full path under the bucket of this file
         */
        get: function () {
            return this.id.substring(this.id.indexOf('/', FILE_BUCKET_LENGTH + 1) + 1);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(File.prototype, "path", {
        /**
         * The full path of the file.
         */
        get: function () {
            return this.id.substring(FILE_BUCKET_LENGTH);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(File.prototype, "parent", {
        /**
         * The parent folder of the file.
         */
        get: function () {
            return this.id.substring(FILE_BUCKET_LENGTH, this.id.lastIndexOf('/', this.id.length - 2));
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(File.prototype, "isMetadataLoaded", {
        /**
         * Indicates if the metadata are loaded.
         */
        get: function () {
            return !!this[METADATA];
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Parses an E-Tag header
     * @param eTag The E-Tag to parse or something falsy
     * @return Returns the parsed E-Tag or null, if it could not be parsed
     */
    File.parseETag = function (eTag) {
        if (!eTag) {
            return null;
        }
        var match = eTag.match(/^(?:[wW]\/)?["'](.*)["']$/);
        if (!match) {
            return null;
        }
        return match[1];
    };
    /**
     * The fully url to the file, can be directly used to link the file, i.e. in link tags ot image sources
     * @param authorize - Authorize the the link with an temporary token, to give authorized access to this protected
     * resource default false if the root bucket is www, true otherwise
     * @return A url with an optional token, to give direct access o the linked resource
     */
    File.prototype.createURL = function (authorize) {
        if (this.isFolder) {
            throw new Error('Url can not be created for folders.');
        }
        return this.db.createURL(this.id, typeof authorize === 'boolean' ? authorize : this.bucket !== 'www');
    };
    /**
     * Uploads the file content which was provided in the constructor or by uploadOptions.data
     * @param uploadOptions The upload options
     * @param [uploadOptions.force=false] force the upload and overwrite any existing files without validating
     * it
     * @param [uploadOptions.progress] listen to progress changes during upload
     * @param doneCallback The callback is invoked after the upload succeed successfully
     * @param failCallback The callback is invoked if any error is occurred
     * @return A promise which will be fulfilled with this file object where the metadata is updated
     */
    File.prototype.upload = function (uploadOptions, doneCallback, failCallback) {
        var _this = this;
        var _b;
        var opt = uploadOptions || {};
        if (this.isFolder) {
            throw new Error('A folder cannot be uploaded');
        }
        this.setDataOptions(opt);
        var uploadMessage = new message.UploadFile(this.bucket, this.key)
            .entity(this[DATA].data, (_b = this[DATA]) === null || _b === void 0 ? void 0 : _b.type);
        var meta = this[METADATA];
        if (meta) {
            uploadMessage.acl(meta.acl);
            uploadMessage.contentLength(meta.size);
            uploadMessage.mimeType(meta.mimeType);
            uploadMessage.customHeaders(meta.headers);
        }
        uploadMessage.progress(opt.progress || null);
        this.conditional(uploadMessage, opt);
        this.db.addToBlackList(this.id);
        return this.db.send(uploadMessage).then(function (response) {
            _this[DATA] = null;
            _this.fromJSON(response.entity);
            return _this;
        }).then(doneCallback, failCallback);
    };
    /**
     * Download a file and providing it in the requested type
     * @param downloadOptions The download options
     * @param downloadOptions.type="blob" The type used to provide the file
     * @param downloadOptions.refresh=false Indicates to make a revalidation request and not use the cache
     * @param doneCallback The callback is invoked after the download succeed
     * successfully
     * @param failCallback The callback is invoked if any error is occurred
     * @return A promise which will be fulfilled with the downloaded file content
     */
    File.prototype.download = function (downloadOptions, doneCallback, failCallback) {
        var _this = this;
        var opt = downloadOptions || {};
        if (this.isFolder) {
            throw new Error('A folder cannot be downloaded');
        }
        var type = opt.type || 'blob';
        var downloadMessage = new message.DownloadFile(this.bucket, this.key)
            .responseType(type);
        this.db.ensureCacheHeader(this.id, downloadMessage, opt.refresh);
        return this.db.send(downloadMessage).then(function (response) {
            _this.db.addToWhiteList(_this.id);
            _this.fromHeaders(response.headers);
            return response.entity;
        }, function (e) {
            if (e.status === connector_1.StatusCode.OBJECT_NOT_FOUND) {
                return null;
            }
            throw e;
        }).then(doneCallback, failCallback);
    };
    /**
     * Deletes a file
     * @param deleteOptions The delete options
     * @param deleteOptions.force=false force the deletion without verifying any version
     * @param doneCallback The callback is invoked after the deletion succeed successfully
     * @param failCallback The callback is invoked if any error is occurred
     * @return A promise which will be fulfilled with this file object,
     * or with a list of all deleted files, if this file is an folder
     */
    File.prototype.delete = function (deleteOptions, doneCallback, failCallback) {
        var _this = this;
        var opt = deleteOptions || {};
        var deleteMessage = new message.DeleteFile(this.bucket, this.key);
        this.conditional(deleteMessage, opt);
        if (!this.isFolder) {
            this.db.addToBlackList(this.id);
        }
        return this.db.send(deleteMessage).then(function (response) {
            if (!_this.isFolder) {
                return _this;
            }
            return response.entity.map(function (fileId) { return new _this.db.File(fileId); });
        }).then(doneCallback, failCallback);
    };
    /**
     * Creates the file id from given options.
     * @param fileOptions
     * @return
     */
    File.prototype.createIdFromOptions = function (fileOptions) {
        var _b;
        var path;
        if (fileOptions.path) {
            path = fileOptions.path;
        }
        else {
            var parent_1 = util_1.trailingSlashIt(fileOptions.parent || '/www');
            if (parent_1.length < 3) {
                throw new Error("Invalid parent name: " + parent_1);
            }
            var name_1 = fileOptions.name || ((_b = fileOptions === null || fileOptions === void 0 ? void 0 : fileOptions.data) === null || _b === void 0 ? void 0 : _b.name) || util_1.uuid();
            path = parent_1 + name_1;
        }
        // Add leading slash if missing
        if (path.charAt(0) !== '/') {
            path = "/" + path;
        }
        // Check path validity
        if (path.indexOf('//') !== -1 || path.length < 3) {
            throw new Error("Invalid path: " + path);
        }
        return FILE_BUCKET + path;
    };
    /**
     * Makes the given message a conditional request based on the file metadata
     * @param msg The message to make conditional
     * @param options additional request options
     * @param options.force=false Force the request operation by didn't make it conditional
     */
    File.prototype.conditional = function (msg, options) {
        if (options.force) {
            return;
        }
        var meta = this[METADATA];
        if (!meta || (!meta.lastModified && !meta.eTag)) {
            msg.ifNoneMatch('*');
            return;
        }
        msg.ifUnmodifiedSince(meta.lastModified);
        msg.ifMatch(meta.eTag);
    };
    /**
     * Gets the file metadata of a file
     * @param options The load metadata options
     * @param [options.refresh=false] Force a revalidation while fetching the metadata
     * @param doneCallback The callback is invoked after the metadata is fetched
     * @param failCallback The callback is invoked if any error has occurred
     * @return A promise which will be fulfilled with this file
     */
    File.prototype.loadMetadata = function (options, doneCallback, failCallback) {
        var _this = this;
        var opt = options || {};
        if (this.isFolder) {
            throw new Error('A folder has no mata data.');
        }
        var msg = new message.GetFileMetadata(this.bucket, this.key);
        this.db.ensureCacheHeader(this.id, msg, opt.refresh);
        return this.db.send(msg).then(function (response) {
            // do not white list the file, because head-request does not revalidate the cache.
            _this.fromHeaders(response.headers);
            return _this;
        }, function (e) {
            if (e.status === connector_1.StatusCode.OBJECT_NOT_FOUND) {
                return null;
            }
            throw e;
        }).then(doneCallback, failCallback);
    };
    /**
     * Updates the mata data of this file.
     * @param options The save metadata options
     * @param [options.force=false] force the update and overwrite the existing metadata without validating it
     * @param doneCallback The callback is invoked after the metadata is saved
     * @param failCallback The callback is invoked if any error has occurred
     * @return A promise which will be fulfilled with this file
     */
    File.prototype.saveMetadata = function (options, doneCallback, failCallback) {
        var _this = this;
        var opt = options || {};
        var json = this.toJSON();
        var msg = new message.UpdateFileMetadata(this.bucket, this.key)
            .entity(json);
        this.conditional(msg, opt);
        return this.db.send(msg).then(function (response) {
            _this.fromJSON(response.entity);
            return _this;
        }).then(doneCallback, failCallback);
    };
    /**
     * Validates and sets the file metadata based on the given options
     * @param options
     * @private
     */
    File.prototype.setDataOptions = function (options) {
        var data = options.data, type = options.type, metadata = tslib_1.__rest(options, ["data", "type"]);
        if (!data) {
            return;
        }
        // Set data
        this[DATA] = { type: type, data: data };
        var mimeType = this.guessMimeType(options) || undefined;
        this.fromJSON(tslib_1.__assign(tslib_1.__assign({}, metadata), { mimeType: mimeType }));
    };
    /**
     * Gets the MIME type of given file options.
     * @param options
     * @return Returns the guessed MIME type or null, if it could not be guessed.
     * @private
     */
    File.prototype.guessMimeType = function (options) {
        var mimeType = options.mimeType;
        if (mimeType) {
            return mimeType;
        }
        if (typeof Blob !== 'undefined' && options.data instanceof Blob) {
            return options.data.type;
        }
        if (options.type === 'data-url' && typeof options.data === 'string') {
            var match = options.data.match(/^data:(.+?)(;base64)?,.*$/);
            return match && match[1];
        }
        return null;
    };
    /**
     * @param headers
     */
    File.prototype.fromHeaders = function (headers) {
        this.fromJSON({
            eTag: File.parseETag(headers.etag),
            lastModified: headers['last-modified'],
            createdAt: headers['baqend-created-at'],
            mimeType: headers['content-type'],
            acl: headers['baqend-acl'] && JSON.parse(headers['baqend-acl']),
            size: +headers['baqend-size'],
            headers: headers['baqend-custom-headers'] && JSON.parse(headers['baqend-custom-headers']),
        });
    };
    /**
     * Deserialize the given JSON file metadata back to this file instance
     *
     * If the JSON object contains an ID, it must match with this file ID, otherwise an exception is thrown.
     *
     * @param json The json to deserialize
     */
    File.prototype.fromJSON = function (json) {
        var id = json.id;
        if (id && this.id !== id) {
            throw new Error("This file id " + this.id + " does not match the given json id " + id);
        }
        var meta = this[METADATA] || {};
        var acl;
        if (json.acl instanceof Acl_1.Acl) {
            acl = json.acl;
        }
        else {
            acl = meta.acl || new Acl_1.Acl();
            if (json.acl) {
                acl.fromJSON(json.acl);
            }
        }
        // keep last known lastModified, createdAt, eTag and headers
        this[METADATA] = tslib_1.__assign(tslib_1.__assign({}, this[METADATA]), { mimeType: json.mimeType, lastModified: (json.lastModified && new Date(json.lastModified)) || meta.lastModified, createdAt: (json.createdAt && new Date(json.createdAt)) || meta.createdAt, eTag: json.eTag || meta.eTag, acl: acl, size: typeof json.size === 'number' ? json.size : json.contentLength, headers: json.headers || meta.headers || {} });
    };
    /**
     * Serialize the file metadata of this object to json
     * @return The serialized file metadata as json
     */
    File.prototype.toJSON = function () {
        var _b;
        this.checkAvailable();
        var meta = this[METADATA];
        return {
            id: this.id,
            mimeType: meta.mimeType,
            eTag: meta.eTag,
            acl: (_b = meta.acl) === null || _b === void 0 ? void 0 : _b.toJSON(),
            size: meta.size,
            lastModified: meta.lastModified && meta.lastModified.toISOString(),
            createdAt: meta.createdAt && meta.createdAt.toISOString(),
            headers: meta.headers,
        };
    };
    /**
     * Checks whenever metadata are already loaded of the file, throws an error otherwise
     * @return
     */
    File.prototype.checkAvailable = function () {
        if (!this.isMetadataLoaded) {
            throw new error_1.PersistentError("The file metadata of " + this.id + " is not available.");
        }
    };
    return File;
}());
exports.File = File;
_a = DATA;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmlsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkZpbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxrQ0FBMkM7QUFDM0MsOEJBQTZCO0FBQzdCLGdDQUdpQjtBQUNqQiwwREFBc0M7QUFDdEMsMENBRXNCO0FBSXRCLElBQU0sV0FBVyxHQUFHLE9BQU8sQ0FBQztBQUM1QixJQUFNLGtCQUFrQixHQUFHLFdBQVcsQ0FBQyxNQUFNLENBQUM7QUFFOUMsSUFBTSxFQUFFLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3hCLElBQU0sUUFBUSxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUNwQyxJQUFNLElBQUksR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7QUF3RTVCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0E2Q0c7QUFDSDtJQXFKRTs7OztPQUlHO0lBQ0gsY0FBWSxXQUF3QjtRQXBKcEM7O1dBRUc7UUFDSSxPQUFFLEdBQWtCLElBQVcsQ0FBQyxDQUFDLHFDQUFxQztRQU1yRSxRQUFNLEdBQW9CLElBQUksQ0FBQztRQTRJckMsNkJBQTZCO1FBQzdCLElBQU0sR0FBRyxHQUFHLE9BQU8sV0FBVyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBRXhGLElBQUksR0FBRyxDQUFDLEVBQUUsRUFBRTtZQUNWLHVCQUF1QjtZQUN2QixJQUFNLGFBQWEsR0FBRyxHQUFHLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzNELElBQUksYUFBYSxLQUFLLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFB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

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Managed = void 0;
var tslib_1 = __webpack_require__(0);
var enumerable_1 = __webpack_require__(16);
var Enhancer_1 = __webpack_require__(26);
var intersection_1 = __webpack_require__(1);
var Managed = /** @class */ (function () {
    /**
     * The default constructor, copy all given properties to this object
     * @param properties - The optional properties to copy
     */
    function Managed(properties) {
        Managed.init(this, properties);
    }
    /**
     * Initialize the given instance
     * @param instance The managed instance to initialize
     * @param properties The optional properties to set on the instance
     */
    Managed.init = function (instance, properties) {
        var type = Enhancer_1.Enhancer.getBaqendType(instance.constructor);
        if (type.isEntity) {
            Object.defineProperty(instance, '_metadata', {
                value: intersection_1.Metadata.create(type),
                configurable: true,
            });
        }
        if (properties) {
            Object.assign(instance, properties);
        }
    };
    /**
     * Creates a subclass of this class
     * @param {Class<*>} childClass
     * @return {Class<*>} The extended child class
     */
    Managed.extend = function (childClass) {
        // eslint-disable-next-line no-param-reassign
        childClass.prototype = Object.create(this.prototype, {
            constructor: {
                value: childClass,
                configurable: true,
                writable: true,
            },
        });
        // eslint-disable-next-line no-param-reassign
        childClass.extend = Managed.extend;
        return childClass;
    };
    /**
     * Returns this object identifier or the baqend type of this object
     * @return the object id or type whatever is available
     */
    Managed.prototype.toString = function () {
        var type = Enhancer_1.Enhancer.getBaqendType(this.constructor);
        return type.ref;
    };
    /**
     * Converts the managed object to an JSON-Object.
     * @return JSON-Object
     * @method
     */
    Managed.prototype.toJSON = function () {
        var type = Enhancer_1.Enhancer.getBaqendType(this.constructor);
        return type.toJsonValue(intersection_1.Metadata.create(type), this, { persisting: false });
    };
    tslib_1.__decorate([
        enumerable_1.enumerable(false)
    ], Managed.prototype, "toString", null);
    tslib_1.__decorate([
        enumerable_1.enumerable(false)
    ], Managed.prototype, "toJSON", null);
    return Managed;
}());
exports.Managed = Managed;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWFuYWdlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIk1hbmFnZWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLGlEQUFnRDtBQUVoRCx1Q0FBc0M7QUFDdEMsZ0RBQTJDO0FBZTNDO0lBdUNFOzs7T0FHRztJQUNILGlCQUFZLFVBQXdDO1FBQ2xELE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUE1Q0Q7Ozs7T0FJRztJQUNJLFlBQUksR0FBWCxVQUFZLFFBQWlCLEVBQUUsVUFBd0M7UUFDckUsSUFBTSxJQUFJLEdBQUcsbUJBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBRSxDQUFDO1FBQzNELElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixNQUFNLENBQUMsY0FBYyxDQUFDLFFBQVEsRUFBRSxXQUFXLEVBQUU7Z0JBQzNDLEtBQUssRUFBRSx1QkFBUSxDQUFDLE1BQU0sQ0FBQyxJQUF1QixDQUFDO2dCQUMvQyxZQUFZLEVBQUUsSUFBSTthQUNuQixDQUFDLENBQUM7U0FDSjtRQUVELElBQUksVUFBVSxFQUFFO1lBQ2QsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsVUFBVSxDQUFDLENBQUM7U0FDckM7SUFDSCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLGNBQU0sR0FBYixVQUFjLFVBQWlDO1FBQzdDLDZDQUE2QztRQUM3QyxVQUFVLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNuRCxXQUFXLEVBQUU7Z0JBQ1gsS0FBSyxFQUFFLFVBQVU7Z0JBQ2pCLFlBQVksRUFBRSxJQUFJO2dCQUNsQixRQUFRLEVBQUUsSUFBSTthQUNmO1NBQ0YsQ0FBQyxDQUFDO1FBQ0gsNkNBQTZDO1FBQzVDLFVBQWtCLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUM7UUFDNUMsT0FBTyxVQUFVLENBQUM7SUFDcEIsQ0FBQztJQVVEOzs7T0FHRztJQUVILDBCQUFRLEdBQVI7UUFDRSxJQUFNLElBQUksR0FBRyxtQkFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDdEQsT0FBTyxJQUFLLENBQUMsR0FBRyxDQUFDO0lBQ25CLENBQUM7SUFFRDs7OztPQUlHO0lBRUgsd0JBQU0sR0FBTjtRQUNFLElBQU0sSUFBSSxHQUFHLG1CQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUUsQ0FBQztRQUN2RCxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsdUJBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7SUFDOUUsQ0FBQztJQWREO1FBREMsdUJBQVUsQ0FBQyxLQUFLLENBQUM7MkNBSWpCO0lBUUQ7UUFEQyx1QkFBVSxDQUFDLEtBQUssQ0FBQzt5Q0FJakI7SUFDSCxjQUFDO0NBQUEsQUFuRUQsSUFtRUM7QUFuRVksMEJBQU8ifQ==

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.PartialUpdateBuilder = void 0;
var tslib_1 = __webpack_require__(0);
var UpdateOperation_1 = __webpack_require__(101);
var ALLOWED_OPERATIONS = [
    '$add',
    '$and',
    '$currentDate',
    '$dec',
    '$inc',
    '$max',
    '$min',
    '$mul',
    '$or',
    '$pop',
    '$push',
    '$put',
    '$remove',
    '$rename',
    '$replace',
    '$set',
    '$shift',
    '$unshift',
    '$xor',
];
var PartialUpdateBuilder = /** @class */ (function () {
    /**
     * @param operations
     */
    function PartialUpdateBuilder(operations) {
        this.operations = [];
        if (operations) {
            this.addOperations(operations);
        }
    }
    /**
     * Sets a field to a given value
     *
     * @param field The field to set
     * @param value The value to set to
     * @return
     */
    PartialUpdateBuilder.prototype.set = function (field, value) {
        var val = value;
        if (val instanceof Set) {
            val = Array.from(val);
        }
        else if (val instanceof Map) {
            var newValue_1 = {};
            val.forEach(function (v, k) {
                newValue_1[k] = v;
            });
            val = newValue_1;
        }
        return this.addOperation(field, '$set', val);
    };
    /**
     * Increments a field by a given value
     *
     * @param field The field to increment
     * @param by The number to increment by, defaults to 1
     * @return
     */
    PartialUpdateBuilder.prototype.inc = function (field, by) {
        return this.addOperation(field, '$inc', typeof by === 'number' ? by : 1);
    };
    /**
     * Decrements a field by a given value
     *
     * @param field The field to decrement
     * @param by The number to decrement by, defaults to 1
     * @return
     */
    PartialUpdateBuilder.prototype.dec = function (field, by) {
        return this.inc(field, typeof by === 'number' ? -by : -1);
    };
    /**
     * Multiplies a field by a given number
     *
     * @param field The field to multiply
     * @param multiplicator The number to multiply by
     * @return
     */
    PartialUpdateBuilder.prototype.mul = function (field, multiplicator) {
        if (typeof multiplicator !== 'number') {
            throw new Error('Multiplicator must be a number.');
        }
        return this.addOperation(field, '$mul', multiplicator);
    };
    /**
     * Divides a field by a given number
     *
     * @param field The field to divide
     * @param divisor The number to divide by
     * @return
     */
    PartialUpdateBuilder.prototype.div = function (field, divisor) {
        if (typeof divisor !== 'number') {
            throw new Error('Divisor must be a number.');
        }
        return this.addOperation(field, '$mul', 1 / divisor);
    };
    /**
     * Sets the highest possible value of a field
     *
     * @param field The field to compare with
     * @param value The highest possible value
     * @return
     */
    PartialUpdateBuilder.prototype.min = function (field, value) {
        if (typeof value !== 'number') {
            throw new Error('Value must be a number');
        }
        return this.addOperation(field, '$min', value);
    };
    /**
     * Sets the smallest possible value of a field
     *
     * @param field The field to compare with
     * @param value The smalles possible value
     * @return
     */
    PartialUpdateBuilder.prototype.max = function (field, value) {
        if (typeof value !== 'number') {
            throw new Error('Value must be a number');
        }
        return this.addOperation(field, '$max', value);
    };
    /**
     * Removes an item from an array or map
     *
     * @param field The field to perform the operation on
     * @param item The item to add
     * @return
     */
    PartialUpdateBuilder.prototype.remove = function (field, item) {
        return this.addOperation(field, '$remove', item);
    };
    /**
     * Puts an item from an array or map
     *
     * @param field The field to perform the operation on
     * @param key The map key to put the value to or an object of arguments
     * @param [value] The value to put if a key was used
     * @return
     */
    PartialUpdateBuilder.prototype.put = function (field, key, value) {
        var obj = {};
        if (typeof key === 'string' || typeof key === 'number') {
            obj[key] = value;
        }
        else if (typeof key === 'object') {
            Object.assign(obj, key);
        }
        return this.addOperation(field, '$put', obj);
    };
    /**
     * Pushes an item into a list
     *
     * @param field The field to perform the operation on
     * @param item The item to add
     * @return
     */
    PartialUpdateBuilder.prototype.push = function (field, item) {
        return this.addOperation(field, '$push', item);
    };
    /**
     * Unshifts an item into a list
     *
     * @param field The field to perform the operation on
     * @param item The item to add
     * @return
     */
    PartialUpdateBuilder.prototype.unshift = function (field, item) {
        return this.addOperation(field, '$unshift', item);
    };
    /**
     * Pops the last item out of a list
     *
     * @param field The field to perform the operation on
     * @return
     */
    PartialUpdateBuilder.prototype.pop = function (field) {
        return this.addOperation(field, '$pop');
    };
    /**
     * Shifts the first item out of a list
     *
     * @param field The field to perform the operation on
     * @return
     */
    PartialUpdateBuilder.prototype.shift = function (field) {
        return this.addOperation(field, '$shift');
    };
    /**
     * Adds an item to a set
     *
     * @param field The field to perform the operation on
     * @param item The item to add
     * @return
     */
    PartialUpdateBuilder.prototype.add = function (field, item) {
        return this.addOperation(field, '$add', item);
    };
    /**
     * Replaces an item at a given index
     *
     * @param path The path to perform the operation on
     * @param index The index where the item will be replaced
     * @param item The item to replace with
     * @return
     */
    PartialUpdateBuilder.prototype.replace = function (path, index, item) {
        if (this.hasOperationOnPath(path)) {
            throw new Error("You cannot update " + path + " multiple times");
        }
        return this.addOperation(path + "." + index, '$replace', item);
    };
    /**
     * Sets a datetime field to the current moment
     *
     * @param field The field to perform the operation on
     * @return
     */
    PartialUpdateBuilder.prototype.currentDate = function (field) {
        return this.addOperation(field, '$currentDate');
    };
    /**
     * Performs a bitwise AND on a path
     *
     * @param path The path to perform the operation on
     * @param bitmask The bitmask taking part in the operation
     * @return
     */
    PartialUpdateBuilder.prototype.and = function (path, bitmask) {
        return this.addOperation(path, '$and', bitmask);
    };
    /**
     * Performs a bitwise OR on a path
     *
     * @param path The path to perform the operation on
     * @param bitmask The bitmask taking part in the operation
     * @return
     */
    PartialUpdateBuilder.prototype.or = function (path, bitmask) {
        return this.addOperation(path, '$or', bitmask);
    };
    /**
     * Performs a bitwise XOR on a path
     *
     * @param path The path to perform the operation on
     * @param bitmask The bitmask taking part in the operation
     * @return
     */
    PartialUpdateBuilder.prototype.xor = function (path, bitmask) {
        return this.addOperation(path, '$xor', bitmask);
    };
    /**
     * Renames a field
     *
     * @param oldPath The old field name
     * @param newPath The new field name
     * @return
     */
    PartialUpdateBuilder.prototype.rename = function (oldPath, newPath) {
        return this.addOperation(oldPath, '$rename', newPath);
    };
    /**
     * Returns a JSON representation of this partial update
     *
     * @return
     */
    PartialUpdateBuilder.prototype.toJSON = function () {
        return this.operations.reduce(function (json, operation) {
            var _a, _b;
            return (tslib_1.__assign(tslib_1.__assign({}, json), (_a = {}, _a[operation.name] = tslib_1.__assign(tslib_1.__assign({}, json[operation.name]), (_b = {}, _b[operation.path] = operation.value, _b)), _a)));
        }, {});
    };
    /**
     * Executes the partial update
     *
     * @return The promise resolves when the partial update has been executed successfully
     * @abstract
     */
    PartialUpdateBuilder.prototype.execute = function () {
        throw new Error('Cannot call "execute" on abstract PartialUpdateBuilder');
    };
    /**
     * Adds an update operation on the partial update
     *
     * @param path The path which gets modified by the operation
     * @param operator The operator of the operation to add
     * @param [value] The value used to execute the operation
     * @return
     * @private
     */
    PartialUpdateBuilder.prototype.addOperation = function (path, operator, value) {
        if (typeof path !== 'string') {
            throw new Error('Path must be a string');
        }
        if (ALLOWED_OPERATIONS.indexOf(operator) === -1) {
            throw new Error("Operation invalid: " + operator);
        }
        if (this.hasOperationOnPath(path)) {
            throw new Error("You cannot update " + path + " multiple times");
        }
        // Check for illegal values
        if (typeof value === 'number') {
            if (Number.isNaN(value)) {
                throw new Error('NaN is not a supported value');
            }
            if (!Number.isFinite(value)) {
                throw new Error('Infinity is not a supported value');
            }
        }
        // Add the new operation
        var normalizedValue = typeof value === 'undefined' ? null : value;
        var updateOperation = new UpdateOperation_1.UpdateOperation(operator, path, normalizedValue);
        this.operations.push(updateOperation);
        return this;
    };
    /**
     * Adds initial operations
     *
     * @param json
     * @private
     */
    PartialUpdateBuilder.prototype.addOperations = function (json) {
        var _this = this;
        Object.keys(json).forEach(function (key) {
            var pathValueDictionary = json[key];
            Object.keys(pathValueDictionary).forEach(function (path) {
                var value = pathValueDictionary[path];
                _this.operations.push(new UpdateOperation_1.UpdateOperation(key, path, value));
            });
        });
    };
    /**
     * Checks whether an operation on the field exists already
     *
     * @param path The path where the operation is executed on
     * @return True, if the operation does exist
     * @private
     */
    PartialUpdateBuilder.prototype.hasOperationOnPath = function (path) {
        return this.operations.some(function (op) { return op.path === path; });
    };
    return PartialUpdateBuilder;
}());
exports.PartialUpdateBuilder = PartialUpdateBuilder;
// aliases
Object.assign(PartialUpdateBuilder.prototype, {
    increment: PartialUpdateBuilder.prototype.inc,
    decrement: PartialUpdateBuilder.prototype.dec,
    multiply: PartialUpdateBuilder.prototype.mul,
    divide: PartialUpdateBuilder.prototype.div,
    atMost: PartialUpdateBuilder.prototype.min,
    atLeast: PartialUpdateBuilder.prototype.max,
    toNow: PartialUpdateBuilder.prototype.currentDate,
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGFydGlhbFVwZGF0ZUJ1aWxkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJQYXJ0aWFsVXBkYXRlQnVpbGRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEscURBQW9EO0FBSXBELElBQU0sa0JBQWtCLEdBQUc7SUFDekIsTUFBTTtJQUNOLE1BQU07SUFDTixjQUFjO0lBQ2QsTUFBTTtJQUNOLE1BQU07SUFDTixNQUFNO0lBQ04sTUFBTTtJQUNOLE1BQU07SUFDTixLQUFLO0lBQ0wsTUFBTTtJQUNOLE9BQU87SUFDUCxNQUFNO0lBQ04sU0FBUztJQUNULFNBQVM7SUFDVCxVQUFVO0lBQ1YsTUFBTTtJQUNOLFFBQVE7SUFDUixVQUFVO0lBQ1YsTUFBTTtDQUNQLENBQUM7QUFvRUY7SUFHRTs7T0FFRztJQUNILDhCQUFZLFVBQW1CO1FBTHhCLGVBQVUsR0FBc0IsRUFBRSxDQUFDO1FBTXhDLElBQUksVUFBVSxFQUFFO1lBQ2QsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUNoQztJQUNILENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSCxrQ0FBRyxHQUFILFVBQUksS0FBYSxFQUFFLEtBQVU7UUFDM0IsSUFBSSxHQUFHLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLElBQUksR0FBRyxZQUFZLEdBQUcsRUFBRTtZQUN0QixHQUFHLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUN2QjthQUFNLElBQUksR0FBRyxZQUFZLEdBQUcsRUFBRTtZQUM3QixJQUFNLFVBQVEsR0FBMkIsRUFBRSxDQUFDO1lBQzVDLEdBQUcsQ0FBQyxPQUFPLENBQUMsVUFBQyxDQUFNLEVBQUUsQ0FBUztnQkFDNUIsVUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNsQixDQUFDLENBQUMsQ0FBQztZQUNILEdBQUcsR0FBRyxVQUFRLENBQUM7U0FDaEI7UUFFRCxPQUFPLElBQUksQ0FBQyxZQUFZLENB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

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var tslib_1 = __webpack_require__(0);
var enumerable_1 = __webpack_require__(16);
var Entity_1 = __webpack_require__(30);
var User = /** @class */ (function (_super) {
    tslib_1.__extends(User, _super);
    function User() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Change the password of the given user
     *
     * @param currentPassword Current password of the user
     * @param password New password of the user
     * @param doneCallback Called when the operation succeed.
     * @param failCallback Called when the operation failed.
     * @return
     */
    User.prototype.newPassword = function (currentPassword, password, doneCallback, failCallback) {
        return this._metadata.db.newPassword(this.username, currentPassword, password).then(doneCallback, failCallback);
    };
    /**
     * Change the username of the current user
     *
     * @param newUsername New username for the current user
     * @param password The password of the current user
     * @param doneCallback Called when the operation succeed.
     * @param failCallback Called when the operation failed.
     * @return
     */
    User.prototype.changeUsername = function (newUsername, password, doneCallback, failCallback) {
        return this._metadata.db.changeUsername(this.username, newUsername, password).then(doneCallback, failCallback);
    };
    /**
     * Requests a perpetual token for the user
     *
     * Only users with the admin role are allowed to request an API token.
     *
     * @param doneCallback Called when the operation succeed.
     * @param failCallback Called when the operation failed.
     * @return
     */
    User.prototype.requestAPIToken = function (doneCallback, failCallback) {
        return this._metadata.db.requestAPIToken(this.constructor, this)
            .then(doneCallback, failCallback);
    };
    tslib_1.__decorate([
        enumerable_1.enumerable(false)
    ], User.prototype, "newPassword", null);
    tslib_1.__decorate([
        enumerable_1.enumerable(false)
    ], User.prototype, "changeUsername", null);
    tslib_1.__decorate([
        enumerable_1.enumerable(false)
    ], User.prototype, "requestAPIToken", null);
    return User;
}(Entity_1.Entity));
exports.User = User;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlVzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLGlEQUFnRDtBQUNoRCxtQ0FBa0M7QUFJbEM7SUFBMEIsZ0NBQU07SUFBaEM7O0lBcURBLENBQUM7SUExQ0M7Ozs7Ozs7O09BUUc7SUFFSCwwQkFBVyxHQUFYLFVBQVksZUFBdUIsRUFBRSxRQUFnQixFQUFFLFlBQWtCLEVBQUUsWUFBa0I7UUFDM0YsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVUsRUFBRSxlQUFlLEVBQUUsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxZQUFZLENBQUMsQ0FBQztJQUNwSCxDQUFDO0lBRUQ7Ozs7Ozs7O09BUUc7SUFFSCw2QkFBYyxHQUFkLFVBQWUsV0FBbUIsRUFBRSxRQUFnQixFQUFFLFlBQWtCLEVBQUUsWUFBa0I7UUFDMUYsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFFBQVUsRUFBRSxXQUFXLEVBQUUsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxZQUFZLENBQUMsQ0FBQztJQUNuSCxDQUFDO0lBRUQ7Ozs7Ozs7O09BUUc7SUFFSCw4QkFBZSxHQUFmLFVBQWdCLFlBQWtCLEVBQUUsWUFBa0I7UUFDcEQsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFdBQWdDLEVBQUUsSUFBSSxDQUFDO2FBQ2xGLElBQUksQ0FBQyxZQUFZLEVBQUUsWUFBWSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQS9CRDtRQURDLHVCQUFVLENBQUMsS0FBSyxDQUFDOzJDQUdqQjtJQVlEO1FBREMsdUJBQVUsQ0FBQyxLQUFLLENBQUM7OENBR2pCO0lBWUQ7UUFEQyx1QkFBVSxDQUFDLEtBQUssQ0FBQzsrQ0FJakI7SUFDSCxXQUFDO0NBQUEsQUFyREQsQ0FBMEIsZUFBTSxHQXFEL0I7QUFyRFksb0JBQUkifQ==

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Filter = void 0;
var tslib_1 = __webpack_require__(0);
var Node_1 = __webpack_require__(17);
var Condition_1 = __webpack_require__(35);
var Filter = /** @class */ (function (_super) {
    tslib_1.__extends(Filter, _super);
    function Filter() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * The actual filters of this node
         */
        _this.filter = {};
        return _this;
    }
    /**
     * @inheritDoc
     */
    Filter.prototype.addFilter = function (field, filter, value) {
        if (field !== null) {
            if (typeof field !== 'string') {
                throw new Error('Field must be a string.');
            }
            if (filter) {
                var currentFilter = this.filter[field];
                var fieldFilter = void 0;
                if (typeof currentFilter === 'object' && Object.getPrototypeOf(currentFilter) === Object.prototype) {
                    fieldFilter = currentFilter;
                }
                else {
                    fieldFilter = {};
                    this.filter[field] = fieldFilter;
                }
                fieldFilter[filter] = value;
            }
            else {
                this.filter[field] = value;
            }
        }
        else {
            Object.assign(this.filter, value);
        }
        return this;
    };
    Filter.prototype.toJSON = function () {
        return this.filter;
    };
    return Filter;
}(Node_1.Node));
exports.Filter = Filter;
Object.assign(Filter.prototype, Condition_1.Condition);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmlsdGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiRmlsdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSwrQkFBOEI7QUFDOUIseUNBQXdDO0FBV3hDO0lBQThDLGtDQUFPO0lBQXJEO1FBQUEscUVBdUNDO1FBdENDOztXQUVHO1FBQ2EsWUFBTSxHQUFpQixFQUFFLENBQUM7O0lBbUM1QyxDQUFDO0lBakNDOztPQUVHO0lBQ0gsMEJBQVMsR0FBVCxVQUFVLEtBQW9CLEVBQUUsTUFBcUIsRUFBRSxLQUFVO1FBQy9ELElBQUksS0FBSyxLQUFLLElBQUksRUFBRTtZQUNsQixJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsRUFBRTtnQkFDN0IsTUFBTSxJQUFJLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO2FBQzVDO1lBRUQsSUFBSSxNQUFNLEVBQUU7Z0JBQ1YsSUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDekMsSUFBSSxXQUFXLFNBQWMsQ0FBQztnQkFDOUIsSUFBSSxPQUFPLGFBQWEsS0FBSyxRQUFRLElBQUksTUFBTSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsS0FBSyxNQUFNLENBQUMsU0FBUyxFQUFFO29CQUNsRyxXQUFXLEdBQUcsYUFBNkIsQ0FBQztpQkFDN0M7cUJBQU07b0JBQ0wsV0FBVyxHQUFHLEVBQUUsQ0FBQztvQkFDakIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxXQUFXLENBQUM7aUJBQ2xDO2dCQUVELFdBQVcsQ0FBQyxNQUFNLENBQUMsR0FBRyxLQUFLLENBQUM7YUFDN0I7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxLQUFLLENBQUM7YUFDNUI7U0FDRjthQUFNO1lBQ0wsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQ25DO1FBRUQsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQsdUJBQU0sR0FBTjtRQUNFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNyQixDQUFDO0lBQ0gsYUFBQztBQUFELENBQUMsQUF2Q0QsQ0FBOEMsV0FBSSxHQXVDakQ7QUF2Q1ksd0JBQU07QUF5Q25CLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxxQkFBUyxDQUFDLENBQUMifQ==

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Stream = void 0;
var tslib_1 = __webpack_require__(0);
var observable_1 = __webpack_require__(47);
var util_1 = __webpack_require__(3);
var intersection_1 = __webpack_require__(1);
var Stream = /** @class */ (function () {
    function Stream() {
    }
    /**
     * Creates a live updating object stream for a query
     *
     * @param entityManager The owning entity manager of this query
     * @param query The query options
     * @param query.query The serialized query
     * @param query.bucket The Bucket on which the streaming query is performed
     * @param query.sort the sort string
     * @param query.limit the count, i.e. the number of items in the result
     * @param query.offset offset, i.e. the number of items to skip
     * @param query.initial Indicates if the initial result should be returned
     * @param options an object containing parameters
     * @return The query result as a live updating stream of objects
     */
    Stream.createEventStream = function (entityManager, query, options) {
        var opt = options || {};
        opt.reconnects = 0;
        return Stream.streamObservable(entityManager, query, opt, function (msg, next) {
            var type = msg.type, eventProps = tslib_1.__rest(msg, ["type"]);
            if (msg.type === 'result') {
                msg.data.forEach(function (obj, index) {
                    var event = tslib_1.__assign(tslib_1.__assign(tslib_1.__assign({ matchType: 'add', operation: 'none', initial: true }, eventProps), { data: Stream.resolveObject(entityManager, obj) }), (query.sort && { index: index }));
                    next(event);
                });
            }
            if (msg.type === 'match') {
                next(tslib_1.__assign(tslib_1.__assign({ initial: false }, eventProps), { data: Stream.resolveObject(entityManager, msg.data) }));
            }
        });
    };
    /**
     * Creates a live updating result stream for a query
     *
     * @alias query.Stream.createStreamResult<T>
     * @param entityManager The owning entity manager of this query
     * @param query The query options
     * @param query.query The serialized query
     * @param query.bucket The Bucket on which the streaming query is performed
     * @param query.sort the sort string
     * @param query.limit the count, i.e. the number of items in the result
     * @param query.offset offset, i.e. the number of items to skip
     * @param options an object containing parameters
     * @return The query result as a live updating query result
     */
    Stream.createResultStream = function (entityManager, query, options) {
        var opt = options || {};
        opt.initial = true;
        opt.matchTypes = 'all';
        opt.operations = 'any';
        var result;
        var ordered = !!query.sort;
        return Stream.streamObservable(entityManager, query, opt, function (event, next) {
            if (event.type === 'result') {
                result = event.data.map(function (obj) { return Stream.resolveObject(entityManager, obj); });
                next(result.slice());
            }
            if (event.type === 'match') {
                var obj = Stream.resolveObject(entityManager, event.data);
                if (event.matchType === 'remove' || event.matchType === 'changeIndex') {
                    // if we have removed the instance our self, we do not have the cached instances anymore
                    // therefore we can't find it anymore in the result by identity
                    for (var i = 0, len = result.length; i < len; i += 1) {
                        if (result[i].id === event.data.id) {
                            result.splice(i, 1);
                            break;
                        }
                    }
                }
                if (event.matchType === 'add' || event.matchType === 'changeIndex') {
                    if (ordered) {
                        result.splice(event.index, 0, obj);
                    }
                    else {
                        result.push(obj);
                    }
                }
                next(result.slice());
            }
        });
    };
    Stream.streamObservable = function (entityManager, query, options, mapper) {
        var opt = Stream.parseOptions(options);
        var socket = entityManager.entityManagerFactory.websocket;
        var observable = new observable_1.Observable(function (subscriber) {
            var id = util_1.uuid();
            var stream = socket.openStream(entityManager.tokenStorage, id);
            stream.send(tslib_1.__assign(tslib_1.__assign({ type: 'subscribe' }, query), opt));
            var closed = false;
            var next = subscriber.next.bind(subscriber);
            var subscription = stream.subscribe({
                complete: function () {
                    closed = true;
                    subscriber.complete();
                },
                error: function (e) {
                    closed = true;
                    subscriber.error(e);
                },
                next: function (msg) {
                    mapper(msg, next);
                },
            });
            return function () {
                if (!closed) { // send unsubscribe only when we aren't completed by the socket and call it only once
                    stream.send({ type: 'unsubscribe' });
                    subscription.unsubscribe();
                    closed = true;
                }
            };
        });
        return Stream.cachedObservable(observable, opt);
    };
    Stream.cachedObservable = function (observable, options) {
        var subscription = null;
        var observers = [];
        return new observable_1.Observable(function (observer) {
            if (!subscription) {
                var remainingRetries_1 = options.reconnects;
                var backoff_1 = 1;
                var subscriptionObserver_1 = {
                    next: function (msg) {
                        // reset the backoff if we get a message
                        backoff_1 = 1;
                        observers.forEach(function (o) { return o.next(msg); });
                    },
                    error: function (e) {
                        observers.forEach(function (o) { return o.error(e); });
                    },
                    complete: function () {
                        if (remainingRetries_1 !== 0) {
                            remainingRetries_1 = remainingRetries_1 < 0 ? -1 : remainingRetries_1 - 1;
                            setTimeout(function () {
                                subscription = observable.subscribe(subscriptionObserver_1);
                            }, backoff_1 * 1000);
                            backoff_1 *= 2;
                        }
                        else {
                            observers.forEach(function (o) { return o.complete(); });
                        }
                    },
                };
                subscription = observable.subscribe(subscriptionObserver_1);
            }
            observers.push(observer);
            return function () {
                observers.splice(observers.indexOf(observer), 1);
                if (!observers.length && subscription) {
                    subscription.unsubscribe();
                    subscription = null;
                }
            };
        });
    };
    /**
     * Parses the StreamOptions
     *
     * @param [options] object containing partial options
     * @returns an object containing VALID options
     */
    Stream.parseOptions = function (options) {
        var opt = options || {};
        var verified = {
            initial: opt.initial === undefined || !!opt.initial,
            matchTypes: Stream.normalizeMatchTypes(opt.matchTypes),
            operations: Stream.normalizeOperations(opt.operations),
            reconnects: Stream.normalizeReconnects(opt.reconnects),
        };
        if (verified.matchTypes.indexOf('all') === -1 && verified.operations.indexOf('any') === -1) {
            throw new Error('Only subscriptions for either operations or matchTypes are allowed. You cannot subscribe to a query using matchTypes and operations at the same time!');
        }
        return verified;
    };
    Stream.normalizeMatchTypes = function (list) {
        return Stream.normalizeSortedSet(list, 'all', 'match types', ['add', 'change', 'changeIndex', 'match', 'remove']);
    };
    Stream.normalizeReconnects = function (reconnects) {
        if (reconnects === undefined) {
            return -1;
        }
        return reconnects < 0 ? -1 : Number(reconnects);
    };
    Stream.normalizeOperations = function (list) {
        return Stream.normalizeSortedSet(list, 'any', 'operations', ['delete', 'insert', 'none', 'update']);
    };
    Stream.normalizeSortedSet = function (list, wildcard, itemType, allowedItems) {
        if (!list) {
            return [wildcard];
        }
        var li = Array.isArray(list) ? list : [list];
        if (li.length === 0) { // undefined or empty list --> default value
            return [wildcard];
        }
        // sort, remove duplicates and check whether all values are allowed
        li.sort();
        var item;
        var lastItem = null;
        for (var i = li.length - 1; i >= 0; i -= 1) {
            item = li[i];
            if (!item) { // undefined and null item in the list --> invalid!
                throw new Error('undefined and null not allowed!');
            }
            if (item === lastItem) { // remove duplicates
                li.splice(i, 1);
            }
            if (item === wildcard) {
                return [wildcard];
            }
            if (allowedItems.indexOf(item) === -1) { // raise error on invalid elements
                throw new Error(item + " not allowed for " + itemType + "! (permitted: " + allowedItems + ".)");
            }
            lastItem = item;
        }
        return li;
    };
    Stream.resolveObject = function (entityManager, object) {
        var entity = entityManager.getReference(object.id);
        var metadata = intersection_1.Metadata.get(entity);
        if (!object.version) {
            metadata.setRemoved();
            entityManager.removeReference(entity);
        }
        else if (entity.version <= object.version) {
            metadata.type.fromJsonValue(metadata, object, entity, { persisting: true });
        }
        return entity;
    };
    return Stream;
}());
exports.Stream = Stream;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RyZWFtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiU3RyZWFtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxpREFBMEU7QUFDMUUsZ0NBQXdDO0FBTXhDLGdEQUEyQztBQThEM0M7SUFBQTtJQWtSQSxDQUFDO0lBalJDOzs7Ozs7Ozs7Ozs7O09BYUc7SUFDSSx3QkFBaUIsR0FBeEIsVUFBMkMsYUFBNEIsRUFBRSxLQUFjLEVBQ3JGLE9BQTRCO1FBQzVCLElBQU0sR0FBRyxHQUFHLE9BQU8sSUFBSSxFQUFFLENBQUM7UUFDMUIsR0FBRyxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7UUFDbkIsT0FBTyxNQUFNLENBQUMsZ0JBQWdCLENBQW1CLGFBQWEsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLFVBQUMsR0FBRyxFQUFFLElBQUk7WUFDNUUsSUFBQSxJQUFJLEdBQW9CLEdBQUcsS0FBdkIsRUFBSyxVQUFVLGtCQUFLLEdBQUcsRUFBN0IsUUFBdUIsQ0FBRixDQUFTO1lBRXBDLElBQUksR0FBRyxDQUFDLElBQUksS0FBSyxRQUFRLEVBQUU7Z0JBQ3pCLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQUMsR0FBRyxFQUFFLEtBQUs7b0JBQzFCLElBQU0sS0FBSyx3REFDVCxTQUFTLEVBQUUsS0FBSyxFQUNoQixTQUFTLEVBQUUsTUFBTSxFQUNqQixPQUFPLEVBQUUsSUFBSSxJQUNWLFVBQVUsS0FDYixJQUFJLEVBQUUsTUFBTSxDQUFDLGFBQWEsQ0FBQyxhQUFhLEVBQUUsR0FBRyxDQUFDLEtBQzNDLENBQUMsS0FBSyxDQUFDLElBQUksSUFBSSxFQUFFLEtBQUssT0FBQSxFQUFFLENBQUMsQ0FDN0IsQ0FBQztvQkFFRixJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ2QsQ0FBQyxDQUFDLENBQUM7YUFDSjtZQUVELElBQUksR0FBRyxDQUFDLElBQUksS0FBSyxPQUFPLEVBQUU7Z0JBQ3hCLElBQUkscUNBQ0YsT0FB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

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Operator = void 0;
var tslib_1 = __webpack_require__(0);
var Node_1 = __webpack_require__(17);
/**
 * An Operator saves the state of a combined query
 */
var Operator = /** @class */ (function (_super) {
    tslib_1.__extends(Operator, _super);
    /**
     * @param entityManager The owning entity manager of this query
     * @param resultClass The query result class
     * @param operator The operator used to join the childes
     * @param childes The childes to join
     */
    function Operator(entityManager, resultClass, operator, childes) {
        var _this = _super.call(this, entityManager, resultClass) || this;
        _this.operator = operator;
        _this.childes = childes;
        return _this;
    }
    Operator.prototype.toJSON = function () {
        var json = {};
        json[this.operator] = this.childes;
        return json;
    };
    return Operator;
}(Node_1.Node));
exports.Operator = Operator;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT3BlcmF0b3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJPcGVyYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsK0JBQThCO0FBSTlCOztHQUVHO0FBQ0g7SUFBZ0Qsb0NBQU87SUFXckQ7Ozs7O09BS0c7SUFDSCxrQkFBWSxhQUE0QixFQUFFLFdBQXFCLEVBQUUsUUFBZ0IsRUFBRSxPQUFrQjtRQUFyRyxZQUNFLGtCQUFNLGFBQWEsRUFBRSxXQUFXLENBQUMsU0FHbEM7UUFGQyxLQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixLQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQzs7SUFDekIsQ0FBQztJQUVELHlCQUFNLEdBQU47UUFDRSxJQUFNLElBQUksR0FBc0MsRUFBRSxDQUFDO1FBQ25ELElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUNuQyxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFDSCxlQUFDO0FBQUQsQ0FBQyxBQTVCRCxDQUFnRCxXQUFJLEdBNEJuRDtBQTVCWSw0QkFBUSJ9

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ModelBuilder = void 0;
var BasicType_1 = __webpack_require__(37);
var EntityType_1 = __webpack_require__(36);
var EmbeddableType_1 = __webpack_require__(59);
var ListAttribute_1 = __webpack_require__(60);
var MapAttribute_1 = __webpack_require__(61);
var SetAttribute_1 = __webpack_require__(62);
var SingularAttribute_1 = __webpack_require__(38);
var error_1 = __webpack_require__(4);
var intersection_1 = __webpack_require__(1);
var ModelBuilder = /** @class */ (function () {
    function ModelBuilder() {
        var _this = this;
        this.models = {};
        this.modelDescriptors = null;
        Object.keys(BasicType_1.BasicType).forEach(function (typeName) {
            var basicType = BasicType_1.BasicType[typeName];
            if (basicType instanceof BasicType_1.BasicType) {
                _this.models[basicType.ref] = basicType;
            }
        });
    }
    /**
     * @param ref
     * @return
     */
    ModelBuilder.prototype.getModel = function (ref) {
        if (ref in this.models) {
            return this.models[ref];
        }
        var model = this.buildModel(ref);
        this.models[ref] = model;
        return model;
    };
    /**
     * @param modelDescriptors
     * @return
     */
    ModelBuilder.prototype.buildModels = function (modelDescriptors) {
        var _this = this;
        this.modelDescriptors = {};
        modelDescriptors.forEach(function (modelDescriptor) {
            _this.modelDescriptors[modelDescriptor.class] = modelDescriptor;
        });
        Object.keys(this.modelDescriptors).forEach(function (ref) {
            try {
                var model = _this.getModel(ref);
                _this.buildAttributes(model);
            }
            catch (e) {
                throw new error_1.PersistentError("Can't create model for entity class " + ref, e);
            }
        });
        // ensure at least an object entity
        this.getModel(EntityType_1.EntityType.Object.ref);
        return this.models;
    };
    /**
     * @param ref
     * @return
     */
    ModelBuilder.prototype.buildModel = function (ref) {
        var modelDescriptor = this.modelDescriptors[ref];
        var type;
        if (ref === EntityType_1.EntityType.Object.ref) {
            type = new EntityType_1.EntityType.Object();
        }
        else if (modelDescriptor) {
            if (modelDescriptor.embedded) {
                type = new EmbeddableType_1.EmbeddableType(ref);
            }
            else {
                var superTypeIdentifier = modelDescriptor.superClass || EntityType_1.EntityType.Object.ref;
                type = new EntityType_1.EntityType(ref, this.getModel(superTypeIdentifier));
            }
        }
        else {
            throw new TypeError("No model available for " + ref);
        }
        type.metadata = {};
        if (modelDescriptor) {
            type.metadata = modelDescriptor.metadata || {};
            var permissions_1 = modelDescriptor.acl || {};
            Object.keys(permissions_1).forEach(function (permission) {
                var permissionProperty = permission + "Permission";
                type[permissionProperty].fromJSON(permissions_1[permission]);
            });
        }
        return type;
    };
    /**
     * @param model
     * @return
     */
    ModelBuilder.prototype.buildAttributes = function (model) {
        var _this = this;
        var modelDescriptor = this.modelDescriptors[model.ref];
        var fields = modelDescriptor.fields;
        Object.keys(fields).forEach(function (name) {
            var field = fields[name];
            if (!model.getAttribute(name)) { // skip predefined attributes
                model.addAttribute(_this.buildAttribute(field), field.order);
            }
        });
        if (typeof modelDescriptor.validationCode === 'string') {
            // eslint-disable-next-line no-param-reassign
            model.validationCode = intersection_1.Validator.compile(model, modelDescriptor.validationCode);
        }
    };
    /**
     * @param field The field metadata
     * @param field.name The name of zhe field
     * @param field.type The type reference of the field
     * @param field.order The order number of the field
     * @param field.metadata Additional metadata of the field
     * @return
     */
    ModelBuilder.prototype.buildAttribute = function (field) {
        // TODO: remove readonly if createdAt and updatedAt becomes real metadata fields in the schema
        var isMetadata = field.flags && (field.flags.indexOf('METADATA') !== -1 || field.flags.indexOf('READONLY') !== -1);
        var name = field.name;
        var ref = field.type;
        if (ref.indexOf('/db/collection.') !== 0) {
            var singularAttribute = new SingularAttribute_1.SingularAttribute(name, this.getModel(ref), isMetadata);
            singularAttribute.metadata = field.metadata;
            return singularAttribute;
        }
        var collectionType = ref.substring(0, ref.indexOf('['));
        var elementType = ref.substring(ref.indexOf('[') + 1, ref.indexOf(']')).trim();
        switch (collectionType) {
            case ListAttribute_1.ListAttribute.ref:
                return new ListAttribute_1.ListAttribute(name, this.getModel(elementType));
            case SetAttribute_1.SetAttribute.ref:
                return new SetAttribute_1.SetAttribute(name, this.getModel(elementType));
            case MapAttribute_1.MapAttribute.ref: {
                var keyType = elementType.substring(0, elementType.indexOf(',')).trim();
                var valueType = elementType.substring(elementType.indexOf(',') + 1).trim();
                return new MapAttribute_1.MapAttribute(name, this.getModel(keyType), this.getModel(valueType));
            }
            default:
                throw new TypeError("No collection available for " + ref);
        }
    };
    return ModelBuilder;
}());
exports.ModelBuilder = ModelBuilder;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTW9kZWxCdWlsZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiTW9kZWxCdWlsZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHlDQUF3QztBQUN4QywyQ0FBMEM7QUFDMUMsbURBQWtEO0FBQ2xELGlEQUFnRDtBQUNoRCwrQ0FBOEM7QUFDOUMsK0NBQThDO0FBQzlDLHlEQUF3RDtBQUN4RCxrQ0FBMkM7QUFLM0MsZ0RBQXdEO0FBRXhEO0lBS0U7UUFBQSxpQkFPQztRQVhPLFdBQU0sR0FBa0MsRUFBRSxDQUFDO1FBRTNDLHFCQUFnQixHQUF1QyxJQUFJLENBQUM7UUFHakUsTUFBTSxDQUFDLElBQUksQ0FBQyxxQkFBUyxDQUFnQyxDQUFDLE9BQU8sQ0FBQyxVQUFDLFFBQVE7WUFDdEUsSUFBTSxTQUFTLEdBQUcscUJBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN0QyxJQUFJLFNBQVMsWUFBWSxxQkFBUyxFQUFFO2dCQUNsQyxLQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsR0FBRyxTQUFTLENBQUM7YUFDeEM7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRDs7O09BR0c7SUFDSCwrQkFBUSxHQUFSLFVBQVMsR0FBVztRQUNsQixJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ3RCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQXFCLENBQUM7U0FDN0M7UUFFRCxJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ25DLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUVEOzs7T0FHRztJQUNILGtDQUFXLEdBQVgsVUFBWSxnQkFBMkI7UUFBdkMsaUJBb0JDO1FBbkJDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxFQUFFLENB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

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.EmbeddableType = void 0;
var tslib_1 = __webpack_require__(0);
var ManagedType_1 = __webpack_require__(19);
var Type_1 = __webpack_require__(10);
var binding_1 = __webpack_require__(5);
var EmbeddableType = /** @class */ (function (_super) {
    tslib_1.__extends(EmbeddableType, _super);
    function EmbeddableType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(EmbeddableType.prototype, "persistenceType", {
        /**
         * @inheritDoc
         */
        get: function () {
            return Type_1.PersistenceType.EMBEDDABLE;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * @inheritDoc
     */
    EmbeddableType.prototype.createProxyClass = function () {
        return this.enhancer.createProxy(binding_1.Managed);
    };
    /**
     * @inheritDoc
     */
    EmbeddableType.prototype.createObjectFactory = function (db) {
        return binding_1.ManagedFactory.create(this, db);
    };
    /**
     * @inheritDoc
     */
    EmbeddableType.prototype.fromJsonValue = function (state, jsonObject, currentObject, options) {
        var obj = currentObject;
        if (jsonObject) {
            if (!(obj instanceof this.typeConstructor)) {
                obj = this.create();
            }
        }
        return _super.prototype.fromJsonValue.call(this, state, jsonObject, obj, options);
    };
    EmbeddableType.prototype.toString = function () {
        return "EmbeddableType(" + this.ref + ")";
    };
    return EmbeddableType;
}(ManagedType_1.ManagedType));
exports.EmbeddableType = EmbeddableType;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRW1iZWRkYWJsZVR5cGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJFbWJlZGRhYmxlVHlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsNkNBQTRDO0FBQzVDLCtCQUF5QztBQUN6QyxzQ0FBcUQ7QUFLckQ7SUFBdUQsMENBQWM7SUFBckU7O0lBeUNBLENBQUM7SUFyQ0Msc0JBQUksMkNBQWU7UUFIbkI7O1dBRUc7YUFDSDtZQUNFLE9BQU8sc0JBQWUsQ0FBQyxVQUFVLENBQUM7UUFDcEMsQ0FBQzs7O09BQUE7SUFFRDs7T0FFRztJQUNILHlDQUFnQixHQUFoQjtRQUNFLE9BQU8sSUFBSSxDQUFDLFFBQVMsQ0FBQyxXQUFXLENBQUMsaUJBQU8sQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFRDs7T0FFRztJQUNILDRDQUFtQixHQUFuQixVQUFvQixFQUFpQjtRQUNuQyxPQUFPLHdCQUFjLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRUQ7O09BRUc7SUFDSCxzQ0FBYSxHQUFiLFVBQWMsS0FBbUIsRUFBRSxVQUFnQixFQUFFLGFBQXVCLEVBQzFFLE9BQXdEO1FBQ3hELElBQUksR0FBRyxHQUFHLGFBQWEsQ0FBQztRQUV4QixJQUFJLFVBQVUsRUFBRTtZQUNkLElBQUksQ0FBQyxDQUFDLEdBQUcsWUFBWSxJQUFJLENBQUMsZUFBZSxDQUFDLEVBQUU7Z0JBQzFDLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7YUFDckI7U0FDRjtRQUVELE9BQU8saUJBQU0sYUFBYSxZQUFDLEtBQUssRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzlELENBQUM7SUFFRCxpQ0FBUSxHQUFSO1FBQ0UsT0FBTyxvQkFBa0IsSUFBSSxDQUFDLEdBQUcsTUFBRyxDQUFDO0lBQ3ZDLENBQUM7SUFDSCxxQkFBQztBQUFELENBQUMsQUF6Q0QsQ0FBdUQseUJBQVcsR0F5Q2pFO0FBekNZLHdDQUFjIn0=

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ListAttribute = void 0;
var tslib_1 = __webpack_require__(0);
var PluralAttribute_1 = __webpack_require__(11);
var Attribute_1 = __webpack_require__(9);
var ListAttribute = /** @class */ (function (_super) {
    tslib_1.__extends(ListAttribute, _super);
    /**
     * @param name
     * @param elementType
     */
    function ListAttribute(name, elementType) {
        return _super.call(this, name, Array, elementType) || this;
    }
    Object.defineProperty(ListAttribute, "ref", {
        /**
         * Get the type id for this list type
         */
        get: function () {
            return '/db/collection.List';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ListAttribute.prototype, "collectionType", {
        /**
         * @inheritDoc
         */
        get: function () {
            return PluralAttribute_1.CollectionType.LIST;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * @inheritDoc
     */
    ListAttribute.prototype.getJsonValue = function (state, object, options) {
        var value = this.getValue(object);
        if (!(value instanceof this.typeConstructor)) {
            return null;
        }
        var len = value.length;
        var persisting = new Array(len);
        var attachedState = Attribute_1.Attribute.attachState(value);
        var persistedState = attachedState || [];
        var changed = !attachedState || attachedState.length !== len;
        var json = new Array(len);
        for (var i = 0; i < len; i += 1) {
            var el = value[i];
            json[i] = this.elementType.toJsonValue(state, el, options);
            persisting[i] = el;
            changed = changed || persistedState[i] !== el;
        }
        if (options.persisting) {
            Attribute_1.Attribute.attachState(value, persisting, true);
        }
        if (changed) {
            state.setDirty();
        }
        return json;
    };
    /**
     * @inheritDoc
     */
    ListAttribute.prototype.setJsonValue = function (state, object, json, options) {
        var value = null;
        if (json) {
            value = this.getValue(object);
            var len = json.length;
            if (!(value instanceof this.typeConstructor)) {
                value = new this.typeConstructor(len); // eslint-disable-line new-cap
            }
            var persisting = new Array(len);
            var persistedState = Attribute_1.Attribute.attachState(value) || [];
            // clear additional items
            if (len < value.length) {
                value.splice(len, value.length - len);
            }
            for (var i = 0; i < len; i += 1) {
                var el = this.elementType.fromJsonValue(state, json[i], persistedState[i], options);
                value[i] = el;
                persisting[i] = el;
            }
            if (options.persisting) {
                Attribute_1.Attribute.attachState(value, persisting, true);
            }
        }
        this.setValue(object, value);
    };
    /**
     * @inheritDoc
     */
    ListAttribute.prototype.toJSON = function () {
        return tslib_1.__assign({ type: ListAttribute.ref + "[" + this.elementType.ref + "]" }, _super.prototype.toJSON.call(this));
    };
    return ListAttribute;
}(PluralAttribute_1.PluralAttribute));
exports.ListAttribute = ListAttribute;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGlzdEF0dHJpYnV0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkxpc3RBdHRyaWJ1dGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLHFEQUFvRTtBQUNwRSx5Q0FBd0M7QUFNeEM7SUFBc0MseUNBQW1DO0lBZXZFOzs7T0FHRztJQUNILHVCQUFZLElBQVksRUFBRSxXQUFvQjtlQUM1QyxrQkFBTSxJQUFJLEVBQUUsS0FBSyxFQUFFLFdBQVcsQ0FBQztJQUNqQyxDQUFDO0lBakJELHNCQUFXLG9CQUFHO1FBSGQ7O1dBRUc7YUFDSDtZQUNFLE9BQU8scUJBQXFCLENBQUM7UUFDL0IsQ0FBQzs7O09BQUE7SUFLRCxzQkFBSSx5Q0FBYztRQUhsQjs7V0FFRzthQUNIO1lBQ0UsT0FBTyxnQ0FBYyxDQUFDLElBQUksQ0FBQztRQUM3QixDQUFDOzs7T0FBQTtJQVVEOztPQUVHO0lBQ0gsb0NBQVksR0FBWixVQUFhLEtBQW1CLEVBQUUsTUFBZSxFQUMvQyxPQUFxRjtRQUNyRixJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRXBDLElBQUksQ0FBQyxDQUFDLEtBQUssWUFBWSxJQUFJLENBQUMsZUFBZSxDQUFDLEVBQUU7WUFDNUMsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUVELElBQU0sR0FBRyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUM7UUFDekIsSUFBTSxVQUFVLEdBQWlCLElBQUksS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2hELElBQU0sYUFBYSxHQUFzQixxQkFBUyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN0RSxJQUFNLGNBQWMsR0FBRyxhQUFhLElBQUksRUFBRSxDQUFDO1FBRTNDLElBQUksT0FBTyxHQUFHLENBQUMsYUFBYSxJQUFJLGFBQWEsQ0FBQyxNQUFNLEtBQUssR0FBRyxDQUFDO1FBRTdELElBQU0sSUFBSSxHQUFjLElBQUksS0FBSyxDQUFDLEdB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

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.MapAttribute = void 0;
var tslib_1 = __webpack_require__(0);
var PluralAttribute_1 = __webpack_require__(11);
var Attribute_1 = __webpack_require__(9);
var error_1 = __webpack_require__(4);
var MapAttribute = /** @class */ (function (_super) {
    tslib_1.__extends(MapAttribute, _super);
    /**
     * @param name
     * @param keyType
     * @param elementType
     */
    function MapAttribute(name, keyType, elementType) {
        var _this = _super.call(this, name, Map, elementType) || this;
        _this.keyType = keyType;
        return _this;
    }
    Object.defineProperty(MapAttribute, "ref", {
        /**
         * Get the type id for this map type
         * @return
         */
        get: function () {
            return '/db/collection.Map';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MapAttribute.prototype, "collectionType", {
        /**
         * @inheritDoc
         */
        get: function () {
            return PluralAttribute_1.CollectionType.MAP;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * @inheritDoc
     */
    MapAttribute.prototype.getJsonValue = function (state, object, options) {
        var value = this.getValue(object);
        if (!(value instanceof this.typeConstructor)) {
            return null;
        }
        var persisting = {};
        var persistedState = Attribute_1.Attribute.attachState(value) || {};
        var changed = Attribute_1.Attribute.attachSize(value) !== value.size;
        var json = {};
        var iter = value.entries();
        for (var el = iter.next(); !el.done; el = iter.next()) {
            var entry = el.value;
            if (entry[0] === null || entry[0] === undefined) {
                throw new error_1.PersistentError('Map keys can\'t be null nor undefined.');
            }
            var jsonKey = this.keyValue(this.keyType.toJsonValue(state, entry[0], options));
            json[jsonKey] = this.elementType.toJsonValue(state, entry[1], options);
            persisting[jsonKey] = [entry[0], entry[1]];
            changed = changed || (persistedState[jsonKey] || [])[1] !== entry[1];
        }
        if (options.persisting) {
            Attribute_1.Attribute.attachState(value, persisting, true);
            Attribute_1.Attribute.attachSize(value, value.size);
        }
        if (changed) {
            state.setDirty();
        }
        return json;
    };
    /**
     * @inheritDoc
     */
    MapAttribute.prototype.setJsonValue = function (state, object, json, options) {
        var value = null;
        if (json) {
            value = this.getValue(object);
            if (!(value instanceof this.typeConstructor)) {
                // eslint-disable-next-line new-cap
                value = new this.typeConstructor();
            }
            var persisting = {};
            var persistedState = Attribute_1.Attribute.attachState(value) || {};
            value.clear();
            var jsonKeys = Object.keys(json);
            for (var i = 0, len = jsonKeys.length; i < len; i += 1) {
                var jsonKey = jsonKeys[i];
                var persistedEntry = persistedState[jsonKey] || [];
                // ensures that "false" keys will be converted to false, disallow null as keys
                var key = this.keyType.fromJsonValue(state, jsonKey, persistedEntry[0], options);
                var val = this.elementType.fromJsonValue(state, json[jsonKey], persistedEntry[1], options);
                persisting[jsonKey] = [key, val];
                value.set(key, val);
            }
            if (options.persisting) {
                Attribute_1.Attribute.attachState(value, persisting, true);
                Attribute_1.Attribute.attachSize(value, value.size);
            }
        }
        this.setValue(object, value);
    };
    /**
     * @inheritDoc
     */
    MapAttribute.prototype.toJSON = function () {
        return tslib_1.__assign({ type: MapAttribute.ref + "[" + this.keyType.ref + "," + this.elementType.ref + "]" }, _super.prototype.toJSON.call(this));
    };
    return MapAttribute;
}(PluralAttribute_1.PluralAttribute));
exports.MapAttribute = MapAttribute;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWFwQXR0cmlidXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiTWFwQXR0cmlidXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxxREFBb0U7QUFDcEUseUNBQXdDO0FBQ3hDLGtDQUEyQztBQU0zQztJQUF3Qyx3Q0FBMkM7SUFrQmpGOzs7O09BSUc7SUFDSCxzQkFBWSxJQUFZLEVBQUUsT0FBZ0IsRUFBRSxXQUFvQjtRQUFoRSxZQUNFLGtCQUFNLElBQUksRUFBRSxHQUFHLEVBQUUsV0FBVyxDQUFDLFNBRTlCO1FBREMsS0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7O0lBQ3pCLENBQUM7SUFuQkQsc0JBQVcsbUJBQUc7UUFKZDs7O1dBR0c7YUFDSDtZQUNFLE9BQU8sb0JBQW9CLENBQUM7UUFDOUIsQ0FBQzs7O09BQUE7SUFLRCxzQkFBSSx3Q0FBYztRQUhsQjs7V0FFRzthQUNIO1lBQ0UsT0FBTyxnQ0FBYyxDQUFDLEdBQUcsQ0FBQztRQUM1QixDQUFDOzs7T0FBQTtJQVlEOztPQUVHO0lBQ0gsbUNBQVksR0FBWixVQUFhLEtBQW1CLEVBQUUsTUFBZSxFQUMvQyxPQUFxRjtRQUNyRixJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRXBDLElBQUksQ0FBQyxDQUFDLEtBQUssWUFBWSxJQUFJLENBQUMsZUFBZSxDQUFDLEVBQUU7WUFDNUMsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUVELElBQU0sVUFBVSxHQUE0QyxFQUFFLENBQUM7UUFDL0QsSUFBTSxjQUFjLEdBQTRDLHFCQUFTLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNuRyxJQUFJLE9BQU8sR0FBRyxxQkFBUyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxLQUFLLENBQUMsSUFBSSxDQUFDO1FBRXpELElBQU0sSUFBSSxHQUFZLEVBQUUsQ0FBQztRQUN6QixJQUFNLElBQUks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

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.SetAttribute = void 0;
var tslib_1 = __webpack_require__(0);
var PluralAttribute_1 = __webpack_require__(11);
var Attribute_1 = __webpack_require__(9);
var SetAttribute = /** @class */ (function (_super) {
    tslib_1.__extends(SetAttribute, _super);
    /**
     * @param name The name of the attribute
     * @param elementType The element type of the collection
     */
    function SetAttribute(name, elementType) {
        return _super.call(this, name, Set, elementType) || this;
    }
    Object.defineProperty(SetAttribute, "ref", {
        /**
         * Get the type id for this set type
         * @return
         */
        get: function () {
            return '/db/collection.Set';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SetAttribute.prototype, "collectionType", {
        /**
         * @inheritDoc
         */
        get: function () {
            return PluralAttribute_1.CollectionType.SET;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * @inheritDoc
     */
    SetAttribute.prototype.getJsonValue = function (state, object, options) {
        var value = this.getValue(object);
        if (!(value instanceof this.typeConstructor)) {
            return null;
        }
        var persisting = {};
        var persistedState = Attribute_1.Attribute.attachState(value) || {};
        var changed = Attribute_1.Attribute.attachSize(value) !== value.size;
        var json = [];
        var iter = value.values();
        for (var item = iter.next(); !item.done; item = iter.next()) {
            var el = item.value;
            var jsonValue = this.elementType.toJsonValue(state, el, options);
            json.push(jsonValue);
            var keyValue = this.keyValue(jsonValue);
            persisting[keyValue] = el;
            changed = changed || persistedState[keyValue] !== el;
        }
        if (options.persisting) {
            Attribute_1.Attribute.attachState(value, persisting, true);
            Attribute_1.Attribute.attachSize(value, value.size);
        }
        if (changed) {
            state.setDirty();
        }
        return json;
    };
    /**
     * @inheritDoc
     */
    SetAttribute.prototype.setJsonValue = function (state, object, json, options) {
        var value = null;
        if (json) {
            value = this.getValue(object);
            if (!(value instanceof this.typeConstructor)) {
                value = new this.typeConstructor(); // eslint-disable-line new-cap
            }
            var persisting = {};
            var persistedState = Attribute_1.Attribute.attachState(value) || {};
            value.clear();
            for (var i = 0, len = json.length; i < len; i += 1) {
                var jsonValue = json[i];
                var keyValue = this.keyValue(jsonValue);
                var el = this.elementType.fromJsonValue(state, jsonValue, persistedState[keyValue], options);
                value.add(el);
                persisting[keyValue] = el;
            }
            if (options.persisting) {
                Attribute_1.Attribute.attachState(value, persisting, true);
                Attribute_1.Attribute.attachSize(value, value.size);
            }
        }
        this.setValue(object, value);
    };
    /**
     * @inheritDoc
     */
    SetAttribute.prototype.toJSON = function () {
        return tslib_1.__assign({ type: SetAttribute.ref + "[" + this.elementType.ref + "]" }, _super.prototype.toJSON.call(this));
    };
    return SetAttribute;
}(PluralAttribute_1.PluralAttribute));
exports.SetAttribute = SetAttribute;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2V0QXR0cmlidXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiU2V0QXR0cmlidXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxxREFBb0U7QUFDcEUseUNBQXdDO0FBTXhDO0lBQXFDLHdDQUFpQztJQWdCcEU7OztPQUdHO0lBQ0gsc0JBQVksSUFBWSxFQUFFLFdBQW9CO2VBQzVDLGtCQUFNLElBQUksRUFBRSxHQUFHLEVBQUUsV0FBVyxDQUFDO0lBQy9CLENBQUM7SUFqQkQsc0JBQVcsbUJBQUc7UUFKZDs7O1dBR0c7YUFDSDtZQUNFLE9BQU8sb0JBQW9CLENBQUM7UUFDOUIsQ0FBQzs7O09BQUE7SUFLRCxzQkFBSSx3Q0FBYztRQUhsQjs7V0FFRzthQUNIO1lBQ0UsT0FBTyxnQ0FBYyxDQUFDLEdBQUcsQ0FBQztRQUM1QixDQUFDOzs7T0FBQTtJQVVEOztPQUVHO0lBQ0gsbUNBQVksR0FBWixVQUFhLEtBQW1CLEVBQUUsTUFBZSxFQUMvQyxPQUFxRjtRQUNyRixJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRXBDLElBQUksQ0FBQyxDQUFDLEtBQUssWUFBWSxJQUFJLENBQUMsZUFBZSxDQUFDLEVBQUU7WUFDNUMsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUVELElBQU0sVUFBVSxHQUFnQyxFQUFFLENBQUM7UUFDbkQsSUFBTSxjQUFjLEdBQVkscUJBQVMsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ25FLElBQUksT0FBTyxHQUFHLHFCQUFTLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLEtBQUssQ0FBQyxJQUFJLENBQUM7UUFFekQsSUFBTSxJQUFJLEdBQWMsRUFBRSxDQUFDO1FBQzNCLElBQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUM1QixLQUFLLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLEVB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

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DbIndex = void 0;
/**
 * Creates a new index instance which is needed to create an
 * database index.
 */
var DbIndex = /** @class */ (function () {
    /**
     * @param keys The name of the field which will be used
     * for the index,
     * an object of an field and index type combination or
     * an array of objects to create an compound index
     * @param unique Indicates if the index will be unique
     */
    function DbIndex(keys, unique) {
        if (typeof keys === 'string') {
            var key = {};
            key[keys] = DbIndex.ASC;
            this.keys = [key];
        }
        else if (Array.isArray(keys)) {
            this.keys = keys;
        }
        else if (keys) {
            this.keys = [keys];
        }
        else {
            throw new Error('The keys parameter must be an String, Object or Array.');
        }
        this.unique = unique === true;
    }
    /**
     * Returns DbIndex Object created from the given JSON
     * @param json
     * @return
     */
    DbIndex.fromJSON = function (json) {
        return new DbIndex(json.keys, json.unique);
    };
    /**
     * Indicates if this index is for the given field or includes it in a compound index
     * @param name The name of the field to check for
     * @return <code>true</code> if the index contains this field
     */
    DbIndex.prototype.hasKey = function (name) {
        for (var i = 0; i < this.keys.length; i += 1) {
            if (this.keys[i][name]) {
                return true;
            }
        }
        return false;
    };
    Object.defineProperty(DbIndex.prototype, "isCompound", {
        /**
         * Indicates if this index is a compound index of multiple attributes
         * @type boolean
         * @readonly
         */
        get: function () {
            return this.keys.length > 1;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DbIndex.prototype, "isUnique", {
        /**
         * Indicates if this index is an unique index
         * @type boolean
         * @readonly
         */
        get: function () {
            return this.unique;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Returns a JSON representation of the Index object
     *
     * @return A Json of this Index object
     */
    DbIndex.prototype.toJSON = function () {
        return {
            unique: this.unique,
            keys: this.keys,
        };
    };
    DbIndex.ASC = 'asc';
    DbIndex.DESC = 'desc';
    return DbIndex;
}());
exports.DbIndex = DbIndex;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGJJbmRleC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkRiSW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBSUE7OztHQUdHO0FBQ0g7SUF1QkU7Ozs7OztPQU1HO0lBQ0gsaUJBQVksSUFBcUQsRUFBRSxNQUFnQjtRQUNqRixJQUFJLE9BQU8sSUFBSSxLQUFLLFFBQVEsRUFBRTtZQUM1QixJQUFNLEdBQUcsR0FBNEIsRUFBRSxDQUFDO1lBQ3hDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDO1lBQ3hCLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNuQjthQUFNLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUM5QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztTQUNsQjthQUFNLElBQUksSUFBSSxFQUFFO1lBQ2YsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3BCO2FBQU07WUFDTCxNQUFNLElBQUksS0FBSyxDQUFDLHdEQUF3RCxDQUFDLENBQUM7U0FDM0U7UUFFRCxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sS0FBSyxJQUFJLENBQUM7SUFDaEMsQ0FBQztJQTlCRDs7OztPQUlHO0lBQ1csZ0JBQVEsR0FBdEIsVUFBdUIsSUFBYTtRQUNsQyxPQUFPLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFpQixFQUFFLElBQUksQ0FBQyxNQUFpQixDQUFDLENBQUM7SUFDckUsQ0FBQztJQXlCRDs7OztPQUlHO0lBQ0gsd0JBQU0sR0FBTixVQUFPLElBQVk7UUFDakIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDNUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUN0QixPQUFPLElBQUksQ0FBQzthQUNiO1NBQ0Y7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7SUFPRCxzQkFBSSwrQkFBVTtRQUxkOzs7O1dBSUc7YUFDSDtZQUNFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQzlCLENBQUM7OztPQUFBO0lBT0Qsc0JBQUksNkJBQVE7UUFMWjs7OztXQUlHO2FBQ0g7WUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDckIsQ0FBQzs7O09BQUE7SUFFRDs7OztPQUlHO0lBQ0gsd0JBQU0sR0FBTjtRQUNFLE9BQU87WUFDTCxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07WUFDbkIsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1NBQ2hCLENBQUM7SUFDSixDQUFDO0lBdkZzQixXQUFHLEdBQUcsS0FBSyxDQUFDO0lBRVosWUFBSSxHQUFHLE1BQU0sQ0FBQztJQXNGdkMsY0FBQztDQUFBLEFBekZELElBeUZDO0FBekZZLDBCQUFPIn0=

/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);

/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/*
 * Browser-compatible JavaScript MD5
 *
 * Modification of JavaScript MD5
 * https://github.com/blueimp/JavaScript-MD5
 *
 * Copyright 2011, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 *
 * Based on
 * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
 * Digest Algorithm, as defined in RFC 1321.
 * Version 2.2 Copyright (C) Paul Johnston 1999 - 2009
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 * Distributed under the BSD License
 * See http://pajhome.org.uk/crypt/md5 for more info.
 */
function md5(bytes) {
  if (typeof bytes === 'string') {
    var msg = unescape(encodeURIComponent(bytes)); // UTF8 escape

    bytes = new Uint8Array(msg.length);

    for (var i = 0; i < msg.length; ++i) {
      bytes[i] = msg.charCodeAt(i);
    }
  }

  return md5ToHexEncodedArray(wordsToMd5(bytesToWords(bytes), bytes.length * 8));
}
/*
 * Convert an array of little-endian words to an array of bytes
 */


function md5ToHexEncodedArray(input) {
  var output = [];
  var length32 = input.length * 32;
  var hexTab = '0123456789abcdef';

  for (var i = 0; i < length32; i += 8) {
    var x = input[i >> 5] >>> i % 32 & 0xff;
    var hex = parseInt(hexTab.charAt(x >>> 4 & 0x0f) + hexTab.charAt(x & 0x0f), 16);
    output.push(hex);
  }

  return output;
}
/**
 * Calculate output length with padding and bit length
 */


function getOutputLength(inputLength8) {
  return (inputLength8 + 64 >>> 9 << 4) + 14 + 1;
}
/*
 * Calculate the MD5 of an array of little-endian words, and a bit length.
 */


function wordsToMd5(x, len) {
  /* append padding */
  x[len >> 5] |= 0x80 << len % 32;
  x[getOutputLength(len) - 1] = len;
  var a = 1732584193;
  var b = -271733879;
  var c = -1732584194;
  var d = 271733878;

  for (var i = 0; i < x.length; i += 16) {
    var olda = a;
    var oldb = b;
    var oldc = c;
    var oldd = d;
    a = md5ff(a, b, c, d, x[i], 7, -680876936);
    d = md5ff(d, a, b, c, x[i + 1], 12, -389564586);
    c = md5ff(c, d, a, b, x[i + 2], 17, 606105819);
    b = md5ff(b, c, d, a, x[i + 3], 22, -1044525330);
    a = md5ff(a, b, c, d, x[i + 4], 7, -176418897);
    d = md5ff(d, a, b, c, x[i + 5], 12, 1200080426);
    c = md5ff(c, d, a, b, x[i + 6], 17, -1473231341);
    b = md5ff(b, c, d, a, x[i + 7], 22, -45705983);
    a = md5ff(a, b, c, d, x[i + 8], 7, 1770035416);
    d = md5ff(d, a, b, c, x[i + 9], 12, -1958414417);
    c = md5ff(c, d, a, b, x[i + 10], 17, -42063);
    b = md5ff(b, c, d, a, x[i + 11], 22, -1990404162);
    a = md5ff(a, b, c, d, x[i + 12], 7, 1804603682);
    d = md5ff(d, a, b, c, x[i + 13], 12, -40341101);
    c = md5ff(c, d, a, b, x[i + 14], 17, -1502002290);
    b = md5ff(b, c, d, a, x[i + 15], 22, 1236535329);
    a = md5gg(a, b, c, d, x[i + 1], 5, -165796510);
    d = md5gg(d, a, b, c, x[i + 6], 9, -1069501632);
    c = md5gg(c, d, a, b, x[i + 11], 14, 643717713);
    b = md5gg(b, c, d, a, x[i], 20, -373897302);
    a = md5gg(a, b, c, d, x[i + 5], 5, -701558691);
    d = md5gg(d, a, b, c, x[i + 10], 9, 38016083);
    c = md5gg(c, d, a, b, x[i + 15], 14, -660478335);
    b = md5gg(b, c, d, a, x[i + 4], 20, -405537848);
    a = md5gg(a, b, c, d, x[i + 9], 5, 568446438);
    d = md5gg(d, a, b, c, x[i + 14], 9, -1019803690);
    c = md5gg(c, d, a, b, x[i + 3], 14, -187363961);
    b = md5gg(b, c, d, a, x[i + 8], 20, 1163531501);
    a = md5gg(a, b, c, d, x[i + 13], 5, -1444681467);
    d = md5gg(d, a, b, c, x[i + 2], 9, -51403784);
    c = md5gg(c, d, a, b, x[i + 7], 14, 1735328473);
    b = md5gg(b, c, d, a, x[i + 12], 20, -1926607734);
    a = md5hh(a, b, c, d, x[i + 5], 4, -378558);
    d = md5hh(d, a, b, c, x[i + 8], 11, -2022574463);
    c = md5hh(c, d, a, b, x[i + 11], 16, 1839030562);
    b = md5hh(b, c, d, a, x[i + 14], 23, -35309556);
    a = md5hh(a, b, c, d, x[i + 1], 4, -1530992060);
    d = md5hh(d, a, b, c, x[i + 4], 11, 1272893353);
    c = md5hh(c, d, a, b, x[i + 7], 16, -155497632);
    b = md5hh(b, c, d, a, x[i + 10], 23, -1094730640);
    a = md5hh(a, b, c, d, x[i + 13], 4, 681279174);
    d = md5hh(d, a, b, c, x[i], 11, -358537222);
    c = md5hh(c, d, a, b, x[i + 3], 16, -722521979);
    b = md5hh(b, c, d, a, x[i + 6], 23, 76029189);
    a = md5hh(a, b, c, d, x[i + 9], 4, -640364487);
    d = md5hh(d, a, b, c, x[i + 12], 11, -421815835);
    c = md5hh(c, d, a, b, x[i + 15], 16, 530742520);
    b = md5hh(b, c, d, a, x[i + 2], 23, -995338651);
    a = md5ii(a, b, c, d, x[i], 6, -198630844);
    d = md5ii(d, a, b, c, x[i + 7], 10, 1126891415);
    c = md5ii(c, d, a, b, x[i + 14], 15, -1416354905);
    b = md5ii(b, c, d, a, x[i + 5], 21, -57434055);
    a = md5ii(a, b, c, d, x[i + 12], 6, 1700485571);
    d = md5ii(d, a, b, c, x[i + 3], 10, -1894986606);
    c = md5ii(c, d, a, b, x[i + 10], 15, -1051523);
    b = md5ii(b, c, d, a, x[i + 1], 21, -2054922799);
    a = md5ii(a, b, c, d, x[i + 8], 6, 1873313359);
    d = md5ii(d, a, b, c, x[i + 15], 10, -30611744);
    c = md5ii(c, d, a, b, x[i + 6], 15, -1560198380);
    b = md5ii(b, c, d, a, x[i + 13], 21, 1309151649);
    a = md5ii(a, b, c, d, x[i + 4], 6, -145523070);
    d = md5ii(d, a, b, c, x[i + 11], 10, -1120210379);
    c = md5ii(c, d, a, b, x[i + 2], 15, 718787259);
    b = md5ii(b, c, d, a, x[i + 9], 21, -343485551);
    a = safeAdd(a, olda);
    b = safeAdd(b, oldb);
    c = safeAdd(c, oldc);
    d = safeAdd(d, oldd);
  }

  return [a, b, c, d];
}
/*
 * Convert an array bytes to an array of little-endian words
 * Characters >255 have their high-byte silently ignored.
 */


function bytesToWords(input) {
  if (input.length === 0) {
    return [];
  }

  var length8 = input.length * 8;
  var output = new Uint32Array(getOutputLength(length8));

  for (var i = 0; i < length8; i += 8) {
    output[i >> 5] |= (input[i / 8] & 0xff) << i % 32;
  }

  return output;
}
/*
 * Add integers, wrapping at 2^32. This uses 16-bit operations internally
 * to work around bugs in some JS interpreters.
 */


function safeAdd(x, y) {
  var lsw = (x & 0xffff) + (y & 0xffff);
  var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
  return msw << 16 | lsw & 0xffff;
}
/*
 * Bitwise rotate a 32-bit number to the left.
 */


function bitRotateLeft(num, cnt) {
  return num << cnt | num >>> 32 - cnt;
}
/*
 * These functions implement the four basic operations the algorithm uses.
 */


function md5cmn(q, a, b, x, s, t) {
  return safeAdd(bitRotateLeft(safeAdd(safeAdd(a, q), safeAdd(x, t)), s), b);
}

function md5ff(a, b, c, d, x, s, t) {
  return md5cmn(b & c | ~b & d, a, b, x, s, t);
}

function md5gg(a, b, c, d, x, s, t) {
  return md5cmn(b & d | c & ~d, a, b, x, s, t);
}

function md5hh(a, b, c, d, x, s, t) {
  return md5cmn(b ^ c ^ d, a, b, x, s, t);
}

function md5ii(a, b, c, d, x, s, t) {
  return md5cmn(c ^ (b | ~d), a, b, x, s, t);
}

/* harmony default export */ __webpack_exports__["a"] = (md5);

/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// Adapted from Chris Veness' SHA1 code at
// http://www.movable-type.co.uk/scripts/sha1.html
function f(s, x, y, z) {
  switch (s) {
    case 0:
      return x & y ^ ~x & z;

    case 1:
      return x ^ y ^ z;

    case 2:
      return x & y ^ x & z ^ y & z;

    case 3:
      return x ^ y ^ z;
  }
}

function ROTL(x, n) {
  return x << n | x >>> 32 - n;
}

function sha1(bytes) {
  var K = [0x5a827999, 0x6ed9eba1, 0x8f1bbcdc, 0xca62c1d6];
  var H = [0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0];

  if (typeof bytes === 'string') {
    var msg = unescape(encodeURIComponent(bytes)); // UTF8 escape

    bytes = [];

    for (var i = 0; i < msg.length; ++i) {
      bytes.push(msg.charCodeAt(i));
    }
  } else if (!Array.isArray(bytes)) {
    // Convert Array-like to Array
    bytes = Array.prototype.slice.call(bytes);
  }

  bytes.push(0x80);
  var l = bytes.length / 4 + 2;
  var N = Math.ceil(l / 16);
  var M = new Array(N);

  for (var _i = 0; _i < N; ++_i) {
    var arr = new Uint32Array(16);

    for (var j = 0; j < 16; ++j) {
      arr[j] = bytes[_i * 64 + j * 4] << 24 | bytes[_i * 64 + j * 4 + 1] << 16 | bytes[_i * 64 + j * 4 + 2] << 8 | bytes[_i * 64 + j * 4 + 3];
    }

    M[_i] = arr;
  }

  M[N - 1][14] = (bytes.length - 1) * 8 / Math.pow(2, 32);
  M[N - 1][14] = Math.floor(M[N - 1][14]);
  M[N - 1][15] = (bytes.length - 1) * 8 & 0xffffffff;

  for (var _i2 = 0; _i2 < N; ++_i2) {
    var W = new Uint32Array(80);

    for (var t = 0; t < 16; ++t) {
      W[t] = M[_i2][t];
    }

    for (var _t = 16; _t < 80; ++_t) {
      W[_t] = ROTL(W[_t - 3] ^ W[_t - 8] ^ W[_t - 14] ^ W[_t - 16], 1);
    }

    var a = H[0];
    var b = H[1];
    var c = H[2];
    var d = H[3];
    var e = H[4];

    for (var _t2 = 0; _t2 < 80; ++_t2) {
      var s = Math.floor(_t2 / 20);
      var T = ROTL(a, 5) + f(s, b, c, d) + e + K[s] + W[_t2] >>> 0;
      e = d;
      d = c;
      c = ROTL(b, 30) >>> 0;
      b = a;
      a = T;
    }

    H[0] = H[0] + a >>> 0;
    H[1] = H[1] + b >>> 0;
    H[2] = H[2] + c >>> 0;
    H[3] = H[3] + d >>> 0;
    H[4] = H[4] + e >>> 0;
  }

  return [H[0] >> 24 & 0xff, H[0] >> 16 & 0xff, H[0] >> 8 & 0xff, H[0] & 0xff, H[1] >> 24 & 0xff, H[1] >> 16 & 0xff, H[1] >> 8 & 0xff, H[1] & 0xff, H[2] >> 24 & 0xff, H[2] >> 16 & 0xff, H[2] >> 8 & 0xff, H[2] & 0xff, H[3] >> 24 & 0xff, H[3] >> 16 & 0xff, H[3] >> 8 & 0xff, H[3] & 0xff, H[4] >> 24 & 0xff, H[4] >> 16 & 0xff, H[4] >> 8 & 0xff, H[4] & 0xff];
}

/* harmony default export */ __webpack_exports__["a"] = (sha1);

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Map = exports.List = exports.Set = exports.configure = exports.connect = exports.db = exports.GeoPoint = exports.Acl = exports.EntityManager = exports.EntityManagerFactory = exports.model = exports.partialupdate = exports.query = exports.caching = exports.intersection = exports.util = exports.metamodel = exports.message = exports.error = exports.connector = exports.binding = void 0;
var tslib_1 = __webpack_require__(0);
var baqend_1 = __webpack_require__(14);
exports.binding = tslib_1.__importStar(__webpack_require__(5));
exports.connector = tslib_1.__importStar(__webpack_require__(6));
exports.error = tslib_1.__importStar(__webpack_require__(4));
exports.message = tslib_1.__importStar(__webpack_require__(2));
exports.metamodel = tslib_1.__importStar(__webpack_require__(13));
exports.util = tslib_1.__importStar(__webpack_require__(3));
exports.intersection = tslib_1.__importStar(__webpack_require__(1));
exports.caching = tslib_1.__importStar(__webpack_require__(32));
exports.query = tslib_1.__importStar(__webpack_require__(34));
exports.partialupdate = tslib_1.__importStar(__webpack_require__(31));
exports.model = tslib_1.__importStar(__webpack_require__(107));
var EntityManagerFactory_1 = __webpack_require__(23);
Object.defineProperty(exports, "EntityManagerFactory", { enumerable: true, get: function () { return EntityManagerFactory_1.EntityManagerFactory; } });
var EntityManager_1 = __webpack_require__(24);
Object.defineProperty(exports, "EntityManager", { enumerable: true, get: function () { return EntityManager_1.EntityManager; } });
var Acl_1 = __webpack_require__(15);
Object.defineProperty(exports, "Acl", { enumerable: true, get: function () { return Acl_1.Acl; } });
var GeoPoint_1 = __webpack_require__(33);
Object.defineProperty(exports, "GeoPoint", { enumerable: true, get: function () { return GeoPoint_1.GeoPoint; } });
var baqend_2 = __webpack_require__(14);
Object.defineProperty(exports, "db", { enumerable: true, get: function () { return baqend_2.db; } });
var deperecated_exports_1 = __webpack_require__(108);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsbUNBQThCO0FBRTlCLDZEQUFxQztBQUNyQyxpRUFBeUM7QUFDekMseURBQWlDO0FBQ2pDLDZEQUFxQztBQUNyQyxpRUFBeUM7QUFDekMsdURBQStCO0FBQy9CLHVFQUErQztBQUMvQyw2REFBcUM7QUFDckMseURBQWlDO0FBQ2pDLHlFQUFpRDtBQUNqRCx5REFBaUM7QUFFakMsK0RBQTJFO0FBQWxFLDRIQUFBLG9CQUFvQixPQUFBO0FBQzdCLGlEQUFnRDtBQUF2Qyw4R0FBQSxhQUFhLE9BQUE7QUFDdEIsNkJBQTRCO0FBQW5CLDBGQUFBLEdBQUcsT0FBQTtBQUNaLHVDQUFzQztBQUE3QixvR0FBQSxRQUFRLE9BQUE7QUFDakIsbUNBQXNDO0FBQTdCLDRGQUFBLEVBQUUsT0FBQTtBQUNYLDZEQUEyRDtBQUFsRCw4R0FBQSxPQUFPLE9BQUE7QUFBRSxnSEFBQSxTQUFTLE9BQUE7QUFFM0IsSUFBTSxPQUFPLEdBQUcsR0FBRyxDQUFDO0FBSUEsc0JBQUc7QUFIdkIsSUFBTSxPQUFPLEdBQUcsR0FBRyxDQUFDO0FBR2tDLHNCQUFHO0FBRnpELElBQU0sUUFBUSxHQUFHLEtBQUssQ0FBQztBQUVjLHdCQUFJO0FBRXpDLCtDQUErQztBQUMvQyxvREFBb0Q7QUFDcEQsa0JBQWUsV0FBRSxDQUFDIn0=

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.CommunicationError = void 0;
var tslib_1 = __webpack_require__(0);
var PersistentError_1 = __webpack_require__(12);
var CommunicationError = /** @class */ (function (_super) {
    tslib_1.__extends(CommunicationError, _super);
    /**
     * @param httpMessage The http message which was send
     * @param response The received entity headers and content
     */
    function CommunicationError(httpMessage, response) {
        var _this = this;
        var entity = response.entity || response.error || {};
        var state = (response.status === 0 ? 'Request' : 'Response');
        var message = entity.message
            || (httpMessage && "Handling the " + state + " for " + httpMessage.request.method + " " + httpMessage.request.path)
            || 'A communication error occurred.';
        _this = _super.call(this, message, entity) || this;
        _this.name = entity.className || 'CommunicationError';
        _this.reason = entity.reason || 'Communication failed';
        _this.status = response.status;
        if (entity.data) {
            _this.data = entity.data;
        }
        var cause = entity;
        while (cause && cause.stackTrace) {
            _this.stack += "\nServerside Caused by: " + cause.className + " " + cause.message;
            var stackTrace = cause.stackTrace;
            for (var i = 0; i < stackTrace.length; i += 1) {
                var el = stackTrace[i];
                _this.stack += "\n    at " + el.className + "." + el.methodName;
                _this.stack += " (" + el.fileName + ":" + el.lineNumber + ")";
            }
            cause = cause.cause;
        }
        return _this;
    }
    return CommunicationError;
}(PersistentError_1.PersistentError));
exports.CommunicationError = CommunicationError;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29tbXVuaWNhdGlvbkVycm9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQ29tbXVuaWNhdGlvbkVycm9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxxREFBb0Q7QUFJcEQ7SUFBd0MsOENBQWU7SUFnQnJEOzs7T0FHRztJQUNILDRCQUFZLFdBQTJCLEVBQUUsUUFBa0I7UUFBM0QsaUJBK0JDO1FBOUJDLElBQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxNQUFNLElBQUksUUFBUSxDQUFDLEtBQUssSUFBSSxFQUFFLENBQUM7UUFDdkQsSUFBTSxLQUFLLEdBQUcsQ0FBQyxRQUFRLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUMvRCxJQUFNLE9BQU8sR0FBRyxNQUFNLENBQUMsT0FBTztlQUN2QixDQUFDLFdBQVcsSUFBSSxrQkFBZ0IsS0FBSyxhQUFRLFdBQVcsQ0FBQyxPQUFPLENBQUMsTUFBTSxTQUFJLFdBQVcsQ0FBQyxPQUFPLENBQUMsSUFBTSxDQUFDO2VBQ3RHLGlDQUFpQyxDQUFDO1FBRXpDLFFBQUEsa0JBQU0sT0FBTyxFQUFFLE1BQU0sQ0FBQyxTQUFDO1FBRXZCLEtBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLFNBQVMsSUFBSSxvQkFBb0IsQ0FBQztRQUNyRCxLQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLElBQUksc0JBQXNCLENBQUM7UUFDdEQsS0FBSSxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDO1FBRTlCLElBQUksTUFBTSxDQUFDLElBQUksRUFBRTtZQUNmLEtBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQztTQUN6QjtRQUVELElBQUksS0FBSyxHQUFHLE1BQU0sQ0FBQztRQUNuQixPQUFPLEtBQUssSUFBSSxLQUFLLENBQUMsVUFBVSxFQUFFO1lBQ2hDLEtBQUksQ0FBQyxLQUFLLElBQUksNkJBQTJCLEtBQUssQ0FBQyxTQUFTLFNBQUksS0FBSyxDQUFDLE9BQVMsQ0FBQztZQUVwRSxJQUFBLFVBQVUsR0FBSyxLQUFLLFdBQVYsQ0FBVztZQUM3QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUM3QyxJQUFNLEVBQUUsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBRXpCLEtBQUksQ0FBQyxLQUFLLElBQUksY0FBWSxFQUFFLENBQUMsU0FBUyxTQUFJLEVBQUUsQ0FBQyxVQUFZLENBQUM7Z0JBQzFELEtBQUksQ0FBQyxLQUFLLElBQUksT0FBSyxFQUFFLENBQUMsUUFBUSxTQUFJLEVBQUUsQ0FBQyxVQUFVLE1BQUcsQ0FBQzthQUNwRDtZQUVELEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDO1NBQ3JCOztJQUNILENBQUM7SUFDSCx5QkFBQztBQUFELENBQUMsQUFwREQsQ0FBd0MsaUNBQWUsR0FvRHREO0FBcERZLGdEQUFrQiJ9

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.IllegalEntityError = void 0;
var tslib_1 = __webpack_require__(0);
var PersistentError_1 = __webpack_require__(12);
var IllegalEntityError = /** @class */ (function (_super) {
    tslib_1.__extends(IllegalEntityError, _super);
    /**
     * @param entity - The entity which cause the error
     */
    function IllegalEntityError(entity) {
        var _this = _super.call(this, "Entity " + entity + " is not a valid entity") || this;
        _this.entity = entity;
        return _this;
    }
    return IllegalEntityError;
}(PersistentError_1.PersistentError));
exports.IllegalEntityError = IllegalEntityError;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSWxsZWdhbEVudGl0eUVycm9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiSWxsZWdhbEVudGl0eUVycm9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxxREFBb0Q7QUFHcEQ7SUFBd0MsOENBQWU7SUFNckQ7O09BRUc7SUFDSCw0QkFBWSxNQUFjO1FBQTFCLFlBQ0Usa0JBQU0sWUFBVSxNQUFNLDJCQUF3QixDQUFDLFNBRWhEO1FBREMsS0FBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7O0lBQ3ZCLENBQUM7SUFDSCx5QkFBQztBQUFELENBQUMsQUFiRCxDQUF3QyxpQ0FBZSxHQWF0RDtBQWJZLGdEQUFrQiJ9

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityExistsError = void 0;
var tslib_1 = __webpack_require__(0);
var PersistentError_1 = __webpack_require__(12);
var EntityExistsError = /** @class */ (function (_super) {
    tslib_1.__extends(EntityExistsError, _super);
    /**
     * @param entity - The entity which cause the error
     */
    function EntityExistsError(entity) {
        var _this = _super.call(this, "The entity " + entity + " is managed by a different db.") || this;
        _this.entity = entity;
        return _this;
    }
    return EntityExistsError;
}(PersistentError_1.PersistentError));
exports.EntityExistsError = EntityExistsError;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRW50aXR5RXhpc3RzRXJyb3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJFbnRpdHlFeGlzdHNFcnJvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEscURBQW9EO0FBR3BEO0lBQXVDLDZDQUFlO0lBTXBEOztPQUVHO0lBQ0gsMkJBQVksTUFBYztRQUExQixZQUNFLGtCQUFNLGdCQUFjLE1BQU0sbUNBQWdDLENBQUMsU0FFNUQ7UUFEQyxLQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQzs7SUFDdkIsQ0FBQztJQUNILHdCQUFDO0FBQUQsQ0FBQyxBQWJELENBQXVDLGlDQUFlLEdBYXJEO0FBYlksOENBQWlCIn0=

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.RollbackError = void 0;
var tslib_1 = __webpack_require__(0);
var PersistentError_1 = __webpack_require__(12);
var RollbackError = /** @class */ (function (_super) {
    tslib_1.__extends(RollbackError, _super);
    function RollbackError(cause) {
        return _super.call(this, 'The transaction has been roll backed', cause) || this;
    }
    return RollbackError;
}(PersistentError_1.PersistentError));
exports.RollbackError = RollbackError;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUm9sbGJhY2tFcnJvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlJvbGxiYWNrRXJyb3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLHFEQUFvRDtBQUVwRDtJQUFtQyx5Q0FBZTtJQUNoRCx1QkFBWSxLQUFZO2VBQ3RCLGtCQUFNLHNDQUFzQyxFQUFFLEtBQUssQ0FBQztJQUN0RCxDQUFDO0lBQ0gsb0JBQUM7QUFBRCxDQUFDLEFBSkQsQ0FBbUMsaUNBQWUsR0FJakQ7QUFKWSxzQ0FBYSJ9

/***/ }),
/* 72 */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.isNode = void 0;
exports.isNode = false;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXMtbm9kZS1icm93c2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXMtbm9kZS1icm93c2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFhLFFBQUEsTUFBTSxHQUFHLEtBQUssQ0FBQyJ9

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.atob = void 0;
exports.atob = window.atob.bind(window);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXRvYi1icm93c2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXRvYi1icm93c2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFhLFFBQUEsSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDIn0=

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.hmac = void 0;
function hmac(message, key) {
    var encoder = new TextEncoder();
    return Promise.resolve(crypto.subtle.importKey('raw', // raw format of the key - should be Uint8Array
    encoder.encode(key), {
        name: 'HMAC',
        hash: { name: 'SHA-1' },
    }, false, // export = false
    ['sign', 'verify']))
        .then(function (cryptoKey) { return crypto.subtle.sign('HMAC', cryptoKey, encoder.encode(message)); })
        .then(function (signature) {
        var byteArray = new Uint8Array(signature);
        return byteArray.reduce(function (token, x) { return token + x.toString(16).padStart(2, '0'); }, '');
    });
}
exports.hmac = hmac;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG1hYy1icm93c2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaG1hYy1icm93c2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLFNBQWdCLElBQUksQ0FBQyxPQUFlLEVBQUUsR0FBVztJQUMvQyxJQUFNLE9BQU8sR0FBRyxJQUFJLFdBQVcsRUFBRSxDQUFDO0lBRWxDLE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FDcEIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQ3JCLEtBQUssRUFBRSwrQ0FBK0M7SUFDdEQsT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFDbkI7UUFDRSxJQUFJLEVBQUUsTUFBTTtRQUNaLElBQUksRUFBRSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUU7S0FDeEIsRUFDRCxLQUFLLEVBQUUsaUJBQWlCO0lBQ3hCLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUNuQixDQUNGO1NBQ0UsSUFBSSxDQUFDLFVBQUMsU0FBUyxJQUFLLE9BQUEsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLFNBQVMsRUFBRSxPQUFPLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQTlELENBQThELENBQUM7U0FDbkYsSUFBSSxDQUFDLFVBQUMsU0FBUztRQUNkLElBQU0sU0FBUyxHQUFHLElBQUksVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzVDLE9BQU8sU0FBUyxDQUFDLE1BQU0sQ0FBQyxVQUFDLEtBQUssRUFBRSxDQUFDLElBQUssT0FBQSxLQUFLLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUF2QyxDQUF1QyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3JGLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQXBCRCxvQkFvQkMifQ==

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Lockable = void 0;
/**
 * This base class provides an lock interface to execute exclusive operations
 */
var Lockable = /** @class */ (function () {
    function Lockable() {
        /**
         * Indicates if there is currently an onging exclusive operation
         * @type boolean
         * @private
         */
        this.isLocked = false;
        /**
         * A promise which represents the state of the least exclusive operation
         * @type Promise
         * @private
         */
        this.readyPromise = Promise.resolve(this);
    }
    Object.defineProperty(Lockable.prototype, "isReady", {
        /**
         * Indicates if there is currently no exclusive operation executed
         * <code>true</code> If no exclusive lock is hold
         */
        get: function () {
            return !this.isLocked;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Waits on the previously requested operation and calls the doneCallback if the operation is fulfilled
     * @param doneCallback The callback which will be invoked when the previously
     * operations on this object is completed.
     * @param failCallback When the lock can't be released caused by a none
     * recoverable error
     * @return A promise which completes successfully, when the previously requested
     * operation completes
     */
    Lockable.prototype.ready = function (doneCallback, failCallback) {
        return this.readyPromise.then(doneCallback, failCallback);
    };
    /**
     * Try to aquire an exclusive lock and executes the given callback.
     * @param callback The exclusive operation to execute
     * @param [critical=false] Indicates if the operation is critical. If the operation is critical and the
     * operation fails, then the lock will not be released
     * @return A promise
     * @throws If the lock can't be aquired
     * @protected
     */
    Lockable.prototype.withLock = function (callback, critical) {
        var _this = this;
        if (critical === void 0) { critical = false; }
        if (this.isLocked) {
            throw new Error('Current operation has not been finished.');
        }
        try {
            this.isLocked = true;
            var result = callback().then(function (res) {
                _this.isLocked = false;
                return res;
            }, function (e) {
                if (!critical) {
                    _this.isLocked = false;
                }
                throw e;
            });
            this.readyPromise = result.then(function () { return _this; }, function (e) {
                if (!critical) {
                    return _this;
                }
                throw e;
            });
            return result;
        }
        catch (e) {
            if (critical) {
                this.readyPromise = Promise.reject(e);
            }
            else {
                this.isLocked = false;
            }
            throw e;
        }
    };
    return Lockable;
}());
exports.Lockable = Lockable;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9ja2FibGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJMb2NrYWJsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQTs7R0FFRztBQUNIO0lBS0U7UUFDRTs7OztXQUlHO1FBQ0gsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFFdEI7Ozs7V0FJRztRQUNILElBQUksQ0FBQyxZQUFZLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBTUQsc0JBQUksNkJBQU87UUFKWDs7O1dBR0c7YUFDSDtZQUNFLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3hCLENBQUM7OztPQUFBO0lBRUQ7Ozs7Ozs7O09BUUc7SUFDSCx3QkFBSyxHQUFMLFVBQU0sWUFBa0MsRUFBRSxZQUFvQztRQUM1RSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxZQUFZLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBRUQ7Ozs7Ozs7O09BUUc7SUFDSCwyQkFBUSxHQUFSLFVBQVksUUFBMEIsRUFBRSxRQUFnQjtRQUF4RCxpQkFpQ0M7UUFqQ3VDLHlCQUFBLEVBQUEsZ0JBQWdCO1FBQ3RELElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixNQUFNLElBQUksS0FBSyxDQUFDLDBDQUEwQyxDQUFDLENBQUM7U0FDN0Q7UUFFRCxJQUFJO1lBQ0YsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7WUFDckIsSUFBTSxNQUFNLEdBQUcsUUFBUSxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUMsR0FBRztnQkFDakMsS0FBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7Z0JBQ3RCLE9BQU8sR0FBRyxDQUFDO1lBQ2IsQ0FBQyxFQUFFLFVBQUMsQ0FBQztnQkFDSCxJQUFJLENBQUMsUUFBUSxFQUFFO29CQUNiLEtBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO2lCQUN2QjtnQkFDRCxNQUFNLENBQUMsQ0FBQztZQUNWLENBQUMsQ0FBQyxDQUFDO1lBRUgsSUFBSSxDQUFDLFlBQVksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLGNBQU0sT0FBQSxLQUFJLEVBQUosQ0FBSSxFQUFFLFVBQUMsQ0FBQztnQkFDNUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtvQkFDYixPQUFPLEtBQUksQ0FBQztpQkFDYjtnQkFDRCxNQUFNLENBQUMsQ0FBQztZQUNWLENBQUMsQ0FBQyxDQUFDO1lBRUgsT0FBTyxNQUFNLENBQUM7U0FDZjtRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ1YsSUFBSSxRQUFRLEVBQUU7Z0JBQ1osSUFBSSxDQUFDLFlBQVksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ3ZDO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO2FBQ3ZCO1lBQ0QsTUFBTSxDQUFDLENBQUM7U0FDVDtJQUNILENBQUM7SUFDSCxlQUFDO0FBQUQsQ0FBQyxBQXJGRCxJQXFGQztBQXJGWSw0QkFBUSJ9

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.uuid = void 0;
var uuid_1 = __webpack_require__(78);
var uuid = uuid_1.v4;
exports.uuid = uuid;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXVpZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInV1aWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsNkJBQTBCO0FBRTFCLElBQU0sSUFBSSxHQUFHLFNBQVUsQ0FBQztBQVdmLG9CQUFJIn0=

/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _v1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(41);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "v1", function() { return _v1_js__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony import */ var _v3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(42);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "v3", function() { return _v3_js__WEBPACK_IMPORTED_MODULE_1__["a"]; });

/* harmony import */ var _v4_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(43);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "v4", function() { return _v4_js__WEBPACK_IMPORTED_MODULE_2__["a"]; });

/* harmony import */ var _v5_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(44);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "v5", function() { return _v5_js__WEBPACK_IMPORTED_MODULE_3__["a"]; });

/* harmony import */ var _nil_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(45);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NIL", function() { return _nil_js__WEBPACK_IMPORTED_MODULE_4__["a"]; });

/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(46);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "version", function() { return _version_js__WEBPACK_IMPORTED_MODULE_5__["a"]; });

/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "validate", function() { return _validate_js__WEBPACK_IMPORTED_MODULE_6__["a"]; });

/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stringify", function() { return _stringify_js__WEBPACK_IMPORTED_MODULE_7__["a"]; });

/* harmony import */ var _parse_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(20);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parse", function() { return _parse_js__WEBPACK_IMPORTED_MODULE_8__["a"]; });











/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVwcmVjYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRlcHJlY2F0ZWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsK0JBQStCO0FBQy9CLElBQU0sYUFBYSxHQUFxQyxFQUFFLENBQUM7QUFDM0QsU0FBZ0IsVUFBVSxDQUFDLG9CQUE0QjtJQUNyRCxPQUFPLFNBQVMsZ0JBQWdCLENBQzlCLE1BQXVCLEVBQ3ZCLElBQVksRUFDWixVQUlDO1FBSkQsMkJBQUEsRUFBQTtZQUNFLFFBQVEsRUFBRSxJQUFJO1lBQ2QsVUFBVSxFQUFFLEtBQUs7WUFDakIsWUFBWSxFQUFFLElBQUk7U0FDbkI7UUFFRCxJQUFNLElBQUksR0FBRyxPQUFPLE1BQU0sS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUM7UUFDM0UsSUFBTSxtQkFBbUIsR0FBTSxJQUFJLFNBQUksSUFBTSxDQUFDO1FBQzlDLElBQU0sVUFBVSxHQUFHO1lBQ2pCLElBQUksQ0FBQyxhQUFhLENBQUMsbUJBQW1CLENBQUMsRUFBRTtnQkFDdkMsYUFBYSxDQUFDLG1CQUFtQixDQUFDLEdBQUcsSUFBSSxDQUFDO2dCQUMxQyxPQUFPLENBQUMsSUFBSSxDQUFDLGNBQVksbUJBQW1CLDRCQUF1QixvQkFBb0IsY0FBVyxDQUFDLENBQUM7YUFDckc7UUFDSCxDQUFDLENBQUM7UUFFRixJQUFNLG9CQUFvQixHQUF1QjtZQUMvQyxVQUFVLEVBQUUsVUFBVSxDQUFDLFVBQVU7WUFDakMsWUFBWSxFQUFFLFVBQVUsQ0FBQyxZQUFZO1NBQ3RDLENBQUM7UUFFRixJQUFJLFVBQVUsQ0FBQyxHQUFHLElBQUksVUFBVSxDQUFDLEdBQUcsRUFBRTtZQUNwQyxJQUFJLFVBQVUsQ0FBQyxHQUFHLEVBQUU7Z0JBQ2xCLG9CQUFvQixDQUFDLEdBQUcsR0FBRyxTQUFTLEdBQUc7b0JBQ3JDLFVBQVUsRUFBRSxDQUFDO29CQUNiLE9BQU8sVUFBVSxDQUFDLEdBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3BDLENBQUMsQ0FBQzthQUNIO1lBRUQsSUFBSSxVQUFVLENBQUMsR0FBRyxFQUFFO2dCQUNsQixvQkFBb0IsQ0FBQyxHQUFHLEdBQUcsU0FBUyxHQUFHLENBQUMsS0FBSztvQkFDM0MsVUFBVSxFQUFFLENBQUM7b0JBQ2IsT0FBTyxVQUFVLENBQUMsR0FBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBQzNDLENBQUMsQ0FBQzthQUNIO1NBQ0Y7YUFBTTtZQUNMLElBQUksZUFBYSxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUM7WUFFckMsb0JBQW9CLENBQUMsR0FBRyxHQUFHLFNBQVMsR0FBRztnQkFDckMsVUFBVSxFQUFFLENBQUM7Z0JBQ2IsT0FBTyxlQUFhLENBQUM7WUFDdkIsQ0FBQyxDQUFDO1lBRUYsSUFBSSxVQUFVLENBQUMsUUFBUSxFQUFFO2dCQUN2QixvQkFBb0IsQ0FBQyxHQUFHLEdBQUcsU0FBUyxHQUFHLENBQUMsS0FBSztvQkFDM0MsVUFBVSxFQUFFLENBQUM7b0JBQ2IsZUFBYSxHQUFHLEtBQUssQ0FBQztnQkFDeEIsQ0FBQyxDQUFDO2FBQ0g7U0FDRjtRQUVELE9BQU8sb0JBQW9CLENBQUM7SUFDOUIsQ0FBQyxDQUFDO0FBQ0osQ0FBQztBQXhERCxnQ0F3REMifQ==

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.trailingSlashIt = void 0;
/**
 * Adds a trailing slash to a string if it is missing
 * @param str
 * @return
 * @name trailingSlashIt
 * @memberOf prototype
 * @function
 */
function trailingSlashIt(str) {
    if (str.charAt(str.length - 1) !== '/') {
        return str + "/";
    }
    return str;
}
exports.trailingSlashIt = trailingSlashIt;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhaWxpbmdTbGFzaEl0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidHJhaWxpbmdTbGFzaEl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBOzs7Ozs7O0dBT0c7QUFDSCxTQUFnQixlQUFlLENBQUMsR0FBVztJQUN6QyxJQUFJLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsS0FBSyxHQUFHLEVBQUU7UUFDdEMsT0FBVSxHQUFHLE1BQUcsQ0FBQztLQUNsQjtJQUVELE9BQU8sR0FBRyxDQUFDO0FBQ2IsQ0FBQztBQU5ELDBDQU1DIn0=

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.openWindow = void 0;
var tslib_1 = __webpack_require__(0);
var openWindow = function (url, opt) {
    var title = opt.title, options = tslib_1.__rest(opt, ["title"]);
    var target = opt.target;
    var str = Object.keys(options)
        .filter(function (key) { return options[key] !== undefined; })
        .map(function (key) { return key + "=" + options[key]; })
        .join(',');
    if (target === '_self') {
        // for app wrappers we need to open the system browser
        if (typeof document === 'undefined' || (document.URL.indexOf('http://') === -1 && document.URL.indexOf('https://') === -1)) {
            target = '_system';
        }
    }
    if (typeof open !== 'undefined') { // eslint-disable-line no-restricted-globals
        return open(url, (target || title), str); // eslint-disable-line no-restricted-globals
    }
    return null;
};
exports.openWindow = openWindow;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3BlbldpbmRvdy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm9wZW5XaW5kb3cudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQWFPLElBQU0sVUFBVSxHQUFzQixVQUFDLEdBQVcsRUFBRSxHQUNzQjtJQUN2RSxJQUFBLEtBQUssR0FBaUIsR0FBRyxNQUFwQixFQUFLLE9BQU8sa0JBQUssR0FBRyxFQUEzQixTQUFxQixDQUFGLENBQVM7SUFDNUIsSUFBQSxNQUFNLEdBQUssR0FBRyxPQUFSLENBQVM7SUFFckIsSUFBTSxHQUFHLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7U0FDN0IsTUFBTSxDQUFDLFVBQUMsR0FBRyxJQUFLLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLFNBQVMsRUFBMUIsQ0FBMEIsQ0FBQztTQUMzQyxHQUFHLENBQUMsVUFBQyxHQUFHLElBQUssT0FBRyxHQUFHLFNBQUksT0FBTyxDQUFDLEdBQUcsQ0FBRyxFQUF4QixDQUF3QixDQUFDO1NBQ3RDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUViLElBQUksTUFBTSxLQUFLLE9BQU8sRUFBRTtRQUN0QixzREFBc0Q7UUFDdEQsSUFBSSxPQUFPLFFBQVEsS0FBSyxXQUFXLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxRQUFRLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQzFILE1BQU0sR0FBRyxTQUFTLENBQUM7U0FDcEI7S0FDRjtJQUVELElBQUksT0FBTyxJQUFJLEtBQUssV0FBVyxFQUFFLEVBQUUsNENBQTRDO1FBQzdFLE9BQU8sSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLE1BQU0sSUFBSSxLQUFLLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLDRDQUE0QztLQUN2RjtJQUVELE9BQU8sSUFBSSxDQUFDO0FBQ2QsQ0FBQyxDQUFDO0FBdEJXLFFBQUEsVUFBVSxjQXNCckIifQ==

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* this connector will only be choose in browser compatible environments */
/* eslint no-restricted-globals: ["off", "location", "addEventListener"] */
Object.defineProperty(exports, "__esModule", { value: true });
exports.IFrameConnector = void 0;
var tslib_1 = __webpack_require__(0);
var Connector_1 = __webpack_require__(25);
var XMLHttpConnector_1 = __webpack_require__(40);
var IFrameConnector = /** @class */ (function (_super) {
    tslib_1.__extends(IFrameConnector, _super);
    function IFrameConnector(host, port, secure, basePath) {
        var _this = _super.call(this, host, port, secure, basePath) || this;
        _this.queue = null;
        _this.connected = false;
        _this.mid = 0;
        _this.messages = {};
        _this.doReceive = _this.doReceive.bind(_this);
        addEventListener('message', _this.doReceive, false);
        return _this;
    }
    /**
     * Indicates if this connector implementation is usable for the given host and port
     * @param host
     * @param port
     * @param secure
     * @return
     */
    IFrameConnector.isUsable = function (host, port, secure) {
        // we use location directly here, since there exists environments, which provide a location and a document but
        // no window object
        if (typeof location === 'undefined' || typeof document === 'undefined') {
            return false;
        }
        var locationSecure = location.protocol === 'https:';
        var locationPort = location.port || (locationSecure ? 443 : 80);
        return location.hostname !== host || locationPort !== port || locationSecure !== secure;
    };
    IFrameConnector.prototype.load = function (path) {
        this.iframe = document.createElement('iframe');
        this.iframe.src = this.origin + this.basePath + path;
        this.iframe.setAttribute('style', IFrameConnector.style);
        document.body.appendChild(this.iframe);
        this.queue = [];
        this.iframe.addEventListener('load', this.onLoad.bind(this), false);
    };
    IFrameConnector.prototype.onLoad = function () {
        if (!this.queue) {
            return;
        }
        var queue = this.queue;
        for (var i = 0; i < queue.length; i += 1) {
            this.postMessage(queue[i]);
        }
        this.queue = null;
    };
    /**
     * @inheritDoc
     */
    IFrameConnector.prototype.doSend = function (message, request, receive) {
        var _this = this;
        // binary data will be send and received directly
        if (message.isBinary) {
            _super.prototype.doSend.call(this, message, request, receive);
            return;
        }
        if (!this.iframe) {
            this.load(message.request.path);
            // ensure that we get a local resource cache hit
            // eslint-disable-next-line no-param-reassign
            message.request.path = '/connect';
        }
        var msg = {
            mid: this.mid += 1,
            method: request.method,
            path: request.path,
            headers: request.headers,
            entity: request.entity,
            responseHeaders: Connector_1.Connector.RESPONSE_HEADERS,
        };
        this.messages[msg.mid] = receive;
        var strMsg = JSON.stringify(msg);
        if (this.queue) {
            this.queue.push(strMsg);
        }
        else {
            this.postMessage(strMsg);
        }
        if (!this.connected) {
            setTimeout(function () {
                if (_this.messages[msg.mid]) {
                    delete _this.messages[msg.mid];
                    receive({
                        status: 0,
                        error: new Error('Connection refused.'),
                        headers: {},
                    });
                }
            }, 10000);
        }
    };
    IFrameConnector.prototype.postMessage = function (msg) {
        this.iframe.contentWindow.postMessage(msg, this.origin);
    };
    IFrameConnector.prototype.doReceive = function (event) {
        if (event.origin !== this.origin || event.data[0] !== '{') {
            return;
        }
        var msg = JSON.parse(event.data);
        var receive = this.messages[msg.mid];
        if (receive) {
            delete this.messages[msg.mid];
            this.connected = true;
            receive({
                status: msg.status,
                headers: msg.headers,
                entity: msg.entity,
            });
        }
    };
    IFrameConnector.style = 'width:1px;height:1px;position:absolute;top:-10px;left:-10px;';
    return IFrameConnector;
}(XMLHttpConnector_1.XMLHttpConnector));
exports.IFrameConnector = IFrameConnector;
Connector_1.Connector.connectors.push(IFrameConnector);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSUZyYW1lQ29ubmVjdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiSUZyYW1lQ29ubmVjdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSwyRUFBMkU7QUFDM0UsMkVBQTJFOzs7O0FBRTNFLHlDQUEyRDtBQUMzRCx1REFBc0Q7QUFJdEQ7SUFBcUMsMkNBQWdCO0lBaUNuRCx5QkFBWSxJQUFZLEVBQUUsSUFBWSxFQUFFLE1BQWUsRUFBRSxRQUFnQjtRQUF6RSxZQUNFLGtCQUFNLElBQUksRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFFBQVEsQ0FBQyxTQU9wQztRQWhDTyxXQUFLLEdBQWlCLElBQUksQ0FBQztRQUUzQixlQUFTLEdBQVksS0FBSyxDQUFDO1FBeUJqQyxLQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQztRQUNiLEtBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ25CLEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLENBQUM7UUFFM0MsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLEtBQUksQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUM7O0lBQ3JELENBQUM7SUE1QkQ7Ozs7OztPQU1HO0lBQ0ksd0JBQVEsR0FBZixVQUFnQixJQUFZLEVBQUUsSUFBWSxFQUFFLE1BQWU7UUFDekQsOEdBQThHO1FBQzlHLG1CQUFtQjtRQUNuQixJQUFJLE9BQU8sUUFBUSxLQUFLLFdBQVcsSUFBSSxPQUFPLFFBQVEsS0FBSyxXQUFXLEVBQUU7WUFDdEUsT0FBTyxLQUFLLENBQUM7U0FDZDtRQUVELElBQU0sY0FBYyxHQUFHLFFBQVEsQ0FBQyxRQUFRLEtBQUssUUFBUSxDQUFDO1FBQ3RELElBQU0sWUFBWSxHQUFHLFFBQVEsQ0FBQyxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7UUFF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

/***/ }),
/* 83 */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.WebSocketConnector = void 0;
var tslib_1 = __webpack_require__(0);
var error_1 = __webpack_require__(4);
var websocket_1 = __webpack_require__(85);
var observable_1 = __webpack_require__(47);
var WebSocketConnector = /** @class */ (function () {
    /**
     *url
     */
    function WebSocketConnector(url) {
        this.observers = {};
        this.socket = null;
        this.url = url;
    }
    /**
     *url The websocket connect script url
     *a websocket connection
     */
    WebSocketConnector.create = function (url) {
        var websocket = this.websockets[url];
        if (!websocket) {
            websocket = new WebSocketConnector(url);
            this.websockets[url] = websocket;
        }
        return websocket;
    };
    WebSocketConnector.prototype.open = function () {
        var _this = this;
        if (!this.socket) {
            var socket_1 = new websocket_1.WebSocket(this.url);
            var socketPromise_1;
            var handleSocketCompletion_1 = function (error) {
                // observable error calls can throw an exception therefore cleanup beforehand
                var isError = false;
                if (_this.socket === socketPromise_1) {
                    isError = socket_1.readyState !== 3;
                    _this.socket = null;
                }
                var firstErr = null;
                Object.keys(_this.observers).forEach(function (id) {
                    var observer = _this.observers[id];
                    delete _this.observers[id]; // unsubscribe to allow re subscriptions
                    if (!observer) {
                        return;
                    }
                    try {
                        if (isError) {
                            observer.error(new error_1.CommunicationError(null, tslib_1.__assign({ status: 0, headers: {} }, (error instanceof Error && { error: error }))));
                        }
                        else {
                            observer.complete();
                        }
                    }
                    catch (e) {
                        if (!firstErr) {
                            firstErr = e;
                        }
                    }
                });
                if (firstErr) {
                    throw firstErr;
                }
            };
            socket_1.onerror = handleSocketCompletion_1;
            socket_1.onclose = handleSocketCompletion_1;
            socket_1.onmessage = function (event) {
                var message = JSON.parse(event.data);
                message.date = new Date(message.date);
                var id = message.id;
                if (!id) {
                    if (message.type === 'error') {
                        handleSocketCompletion_1(message);
                    }
                    return;
                }
                var observer = _this.observers[id];
                if (observer) {
                    if (message.type === 'error') {
                        observer.error(new error_1.CommunicationError(null, message));
                    }
                    else {
                        observer.next(message);
                    }
                }
            };
            socketPromise_1 = new Promise(function (resolve) {
                socket_1.onopen = function () { return resolve(socket_1); };
            });
            this.socket = socketPromise_1;
        }
        return this.socket;
    };
    WebSocketConnector.prototype.close = function () {
        if (this.socket) {
            this.socket.then(function (socket) {
                socket.close();
            });
            this.socket = null;
        }
    };
    /**
     *tokenStorage
     *id subscription ID
     *The channel for sending and receiving messages
     */
    WebSocketConnector.prototype.openStream = function (tokenStorage, id) {
        var _this = this;
        var stream = new observable_1.Observable(function (observer) {
            if (_this.observers[id]) {
                throw new Error('Only one subscription per stream is allowed.');
            }
            _this.observers[id] = observer;
            return function () {
                // cleanup only our subscription and handle re subscription on the same stream id correctly
                if (_this.observers[id] === observer) {
                    delete _this.observers[id];
                }
            };
        });
        Object.assign(stream, {
            send: function (message) {
                _this.open().then(function (socket) {
                    var jsonMessage = JSON.stringify(tslib_1.__assign(tslib_1.__assign({ id: id }, message), (tokenStorage.token && { token: tokenStorage.token })));
                    socket.send(jsonMessage);
                });
            },
        });
        return stream;
    };
    /**
     * Map of all available connectors to their respective websocket connections
     */
    WebSocketConnector.websockets = {};
    return WebSocketConnector;
}());
exports.WebSocketConnector = WebSocketConnector;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV2ViU29ja2V0Q29ubmVjdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiV2ViU29ja2V0Q29ubmVjdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxrQ0FBOEM7QUFDOUMsK0NBQThDO0FBQzlDLGlEQUE0RDtBQTZCNUQ7SUF5QkU7O09BRUc7SUFDSCw0QkFBWSxHQUFXO1FBdEJmLGNBQVMsR0FBMkQsRUFBRSxDQUFDO1FBRXZFLFdBQU0sR0FBOEIsSUFBSSxDQUFDO1FBcUIvQyxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztJQUNqQixDQUFDO0lBbEJEOzs7T0FHRztJQUNJLHlCQUFNLEdBQWIsVUFBYyxHQUFXO1FBQ3ZCLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNkLFNBQVMsR0FBRyxJQUFJLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3hDLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEdBQUcsU0FBUyxDQUFDO1NBQ2xDO1FBQ0QsT0FBTyxTQUFTLENBQUM7SUFDbkIsQ0FBQztJQVNELGlDQUFJLEdBQUo7UUFBQSxpQkFzRUM7UUFyRUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDaEIsSUFBTSxRQUFNLEdBQUcsSUFBSSxxQkFBUyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN2QyxJQUFJLGVBQWlDLENBQUM7WUFFdEMsSUFBTSx3QkFBc0IsR0FBRyxVQUFDLEtBQWtCO2dCQUNoRCw2RUFBNkU7Z0JBQzdFLElBQUksT0FBTyxHQUFHLEtBQUssQ0FBQztnQkFDcEIsSUFBSSxLQUFJLENBQUMsTUFBTSxLQUFLLGVBQWEsRUFBRTtvQkFDakMsT0FBTyxHQUFHLFFBQU0sQ0FBQyxVQUFVLEtBQUssQ0FBQyxDQUFDO29CQUNsQyxLQUFJLENBQUMsTUFBTSxHQUFHLElB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

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.WebSocket = void 0;
exports.WebSocket = window.WebSocket;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2Vic29ja2V0LWJyb3dzZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3ZWJzb2NrZXQtYnJvd3Nlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBZSxRQUFBLFNBQVMsR0FBSyxNQUFNLFdBQUMifQ==

/***/ }),
/* 86 */
/***/ (function(module, exports) {

if(typeof __WEBPACK_EXTERNAL_MODULE__86__ === 'undefined') {var e = new Error("Cannot find module 'rxjs'"); e.code = 'MODULE_NOT_FOUND'; throw e;}
module.exports = __WEBPACK_EXTERNAL_MODULE__86__;

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Accessor = void 0;
var Accessor = /** @class */ (function () {
    function Accessor() {
    }
    /**
     * @param object
     * @param attribute
     * @return
     */
    Accessor.prototype.getValue = function (object, attribute) {
        return object[attribute.name];
    };
    /**
     * @param object
     * @param attribute
     * @param value
     */
    Accessor.prototype.setValue = function (object, attribute, value) {
        // eslint-disable-next-line no-param-reassign
        object[attribute.name] = value;
    };
    return Accessor;
}());
exports.Accessor = Accessor;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWNjZXNzb3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJBY2Nlc3Nvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFHQTtJQUFBO0lBbUJBLENBQUM7SUFsQkM7Ozs7T0FJRztJQUNILDJCQUFRLEdBQVIsVUFBWSxNQUFlLEVBQUUsU0FBdUI7UUFDbEQsT0FBTyxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBYSxDQUFDO0lBQzVDLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsMkJBQVEsR0FBUixVQUFZLE1BQWUsRUFBRSxTQUF1QixFQUFFLEtBQVE7UUFDNUQsNkNBQTZDO1FBQzdDLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDO0lBQ2pDLENBQUM7SUFDSCxlQUFDO0FBQUQsQ0FBQyxBQW5CRCxJQW1CQztBQW5CWSw0QkFBUSJ9

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Metadata = exports.MetadataState = void 0;
var tslib_1 = __webpack_require__(0);
var Acl_1 = __webpack_require__(15);
var util_1 = __webpack_require__(3);
var error_1 = __webpack_require__(4);
var MetadataState;
(function (MetadataState) {
    MetadataState[MetadataState["UNAVAILABLE"] = -1] = "UNAVAILABLE";
    MetadataState[MetadataState["PERSISTENT"] = 0] = "PERSISTENT";
    MetadataState[MetadataState["DIRTY"] = 1] = "DIRTY";
})(MetadataState = exports.MetadataState || (exports.MetadataState = {}));
/**
 * The Metadata instance tracks the state of an object and checks if the object state was changed since last
 * load/update. The metadata keeps therefore the state of:
 * - in which state the object currently is
 * - which db managed the instance
 * - the metadata of the object (id, version, bucket)
 * - which is the owning object (root object) of an embedded object
 *
 * {@link Metadata#get(object)} can be used on any managed object to retrieve the metadata of the root object
 */
var Metadata = /** @class */ (function (_super) {
    tslib_1.__extends(Metadata, _super);
    /**
     * @param type
     */
    function Metadata(type) {
        var _this = _super.call(this) || this;
        _this.entityManager = null;
        _this.decodedKey = null;
        _this.id = null;
        _this.state = MetadataState.DIRTY;
        _this.enabled = true;
        _this.id = null;
        _this.version = null;
        _this.type = type;
        _this.acl = new Acl_1.Acl();
        return _this;
    }
    Metadata.create = function (type, db) {
        if (type.isEntity) {
            return new Metadata(type);
        }
        if (type.isEmbeddable) {
            return { type: type, db: db, setDirty: function () { } };
        }
        throw new Error("Illegal type " + type);
    };
    /**
     * Returns the metadata of the managed object
     * @param managed
     * @return
     */
    Metadata.get = function (managed) {
        // eslint-disable-next-line no-underscore-dangle
        return managed._metadata;
    };
    Object.defineProperty(Metadata.prototype, "db", {
        /**
         * @type EntityManager
         */
        get: function () {
            if (this.entityManager) {
                return this.entityManager;
            }
            this.entityManager = __webpack_require__(14).db; // eslint-disable-line global-require
            return this.entityManager;
        },
        /**
         * @param db
         */
        set: function (db) {
            if (!this.entityManager) {
                this.entityManager = db;
            }
            else {
                throw new Error('DB has already been set.');
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Metadata.prototype, "bucket", {
        /**
         * @type string
         * @readonly
         */
        get: function () {
            return this.type.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Metadata.prototype, "key", {
        /**
         * @type string
         * @readonly
         */
        get: function () {
            if (!this.decodedKey && this.id) {
                var index = this.id.lastIndexOf('/');
                this.decodedKey = decodeURIComponent(this.id.substring(index + 1));
            }
            return this.decodedKey;
        },
        /**
         * @param value
         */
        set: function (value) {
            var val = "" + value;
            if (this.id) {
                throw new Error('The id can\'t be set twice.');
            }
            this.id = "/db/" + this.bucket + "/" + encodeURIComponent(val);
            this.decodedKey = val;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Metadata.prototype, "isAttached", {
        /**
         * Indicates if this object already belongs to an db
         * <code>true</code> if this object belongs already to an db otherwise <code>false</code>
         * @type boolean
         * @readonly
         */
        get: function () {
            return !!this.entityManager;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Metadata.prototype, "isAvailable", {
        /**
         * Indicates if this object is represents a db object, but was not loaded up to now
         * @type boolean
         * @readonly
         */
        get: function () {
            return this.state > MetadataState.UNAVAILABLE;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Metadata.prototype, "isPersistent", {
        /**
         * Indicates if this object represents the state of the db and was not modified in any manner
         * @type boolean
         * @readonly
         */
        get: function () {
            return this.state === MetadataState.PERSISTENT;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Metadata.prototype, "isDirty", {
        /**
         * Indicates that this object was modified and the object was not written back to the db
         * @type boolean
         * @readonly
         */
        get: function () {
            return this.state === MetadataState.DIRTY;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Enable/Disable state change tracking of this object
     * @param newStateTrackingState The new change tracking state
     * @return
     */
    Metadata.prototype.enable = function (newStateTrackingState) {
        this.enabled = newStateTrackingState;
    };
    /**
     * Throws the corresponding error if a property is accessed before the owning object is loaded
     * @throws an exception if the object properties aren't available and the object is enabled
     */
    Metadata.prototype.throwUnloadedPropertyAccess = function (property) {
        if (this.enabled && !this.isAvailable) {
            throw new error_1.PersistentError("Illegal property access on " + this.id + "#" + property + " , ensure that this reference is loaded before it's properties are accessed.");
        }
    };
    /**
     * Indicates that the associated object isn't available
     * @return
     */
    Metadata.prototype.setUnavailable = function () {
        this.state = MetadataState.UNAVAILABLE;
    };
    /**
     * Indicates that the associated object is not stale
     *
     * An object is stale if it correlates the database state and is not modified by the user.
     *
     * @return
     */
    Metadata.prototype.setPersistent = function () {
        this.state = MetadataState.PERSISTENT;
    };
    /**
     * Indicates the the object is modified by the user
     * @return
     */
    Metadata.prototype.setDirty = function () {
        this.state = MetadataState.DIRTY;
    };
    /**
     * Indicates the the object is removed
     * @return
     */
    Metadata.prototype.setRemoved = function () {
        // mark the object only as dirty if it was already available
        if (this.isAvailable) {
            this.setDirty();
            this.version = null;
        }
    };
    return Metadata;
}(util_1.Lockable));
exports.Metadata = Metadata;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWV0YWRhdGEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJNZXRhZGF0YS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsOEJBQTZCO0FBQzdCLGdDQUFtQztBQUduQyxrQ0FBMkM7QUFjM0MsSUFBWSxhQUlYO0FBSkQsV0FBWSxhQUFhO0lBQ3ZCLGdFQUFnQixDQUFBO0lBQ2hCLDZEQUFjLENBQUE7SUFDZCxtREFBUyxDQUFBO0FBQ1gsQ0FBQyxFQUpXLGFBQWEsR0FBYixxQkFBYSxLQUFiLHFCQUFhLFFBSXhCO0FBRUQ7Ozs7Ozs7OztHQVNHO0FBQ0g7SUFBOEIsb0NBQVE7SUFzSnBDOztPQUVHO0lBQ0gsa0JBQVksSUFBcUI7UUFBakMsWUFDRSxpQkFBTyxTQVFSO1FBaktELG1CQUFhLEdBQXlCLElBQUksQ0FBQztRQUkzQyxnQkFBVSxHQUFrQixJQUFJLENBQUM7UUFFakMsUUFBRSxHQUFrQixJQUFJLENBQUM7UUFxSnZCLEtBQUksQ0FBQyxLQUFLLEdBQUcsYUFBYSxDQUFDLEtBQUssQ0FBQztRQUNqQyxLQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUNwQixLQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQztRQUNmLEtBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLEtBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLEtBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxTQUFHLEVBQUUsQ0FBQzs7SUFDdkIsQ0FBQztJQS9ITSxlQUFNLEdBQWIsVUFBZ0MsSUFBb0IsRUFBRSxFQUFrQjtRQUN0RSxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsT0FBTyxJQUFJLFFBQVEsQ0FBQyxJQUFxQixDQUFDLENBQUM7U0FDNUM7UUFBQyxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDdkIsT0FBTyxFQUFFLElBQUksTUFBQSxFQUFFLEVBQUUsSUFBQSxFQUFFLFFBQVEsZ0JBQUksQ0FBQyxF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

/***/ }),
/* 89 */
/***/ (function(module, exports) {

if(typeof __WEBPACK_EXTERNAL_MODULE__89__ === 'undefined') {var e = new Error("Cannot find module 'validator'"); e.code = 'MODULE_NOT_FOUND'; throw e;}
module.exports = __WEBPACK_EXTERNAL_MODULE__89__;

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationResult = void 0;
var ValidationResult = /** @class */ (function () {
    function ValidationResult() {
        this.fields = {};
    }
    Object.defineProperty(ValidationResult.prototype, "isValid", {
        /**
         * Indicates if all fields are valid
         * @return <code>true</code> if all fields are valid
         */
        get: function () {
            var _this = this;
            return Object.keys(this.fields).every(function (key) { return _this.fields[key].isValid; });
        },
        enumerable: false,
        configurable: true
    });
    ValidationResult.prototype.toJSON = function () {
        var _this = this;
        var json = {};
        Object.keys(this.fields).forEach(function (key) {
            json[key] = _this.fields[key].toJSON();
        });
        return json;
    };
    return ValidationResult;
}());
exports.ValidationResult = ValidationResult;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmFsaWRhdGlvblJlc3VsdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlZhbGlkYXRpb25SZXN1bHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBR0E7SUFBQTtRQUNTLFdBQU0sR0FBc0MsRUFBRSxDQUFDO0lBaUJ4RCxDQUFDO0lBWEMsc0JBQUkscUNBQU87UUFKWDs7O1dBR0c7YUFDSDtZQUFBLGlCQUVDO1lBREMsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBQyxHQUFHLElBQUssT0FBQSxLQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sRUFBeEIsQ0FBd0IsQ0FBQyxDQUFDO1FBQzNFLENBQUM7OztPQUFBO0lBRUQsaUNBQU0sR0FBTjtRQUFBLGlCQU1DO1FBTEMsSUFBTSxJQUFJLEdBQVksRUFBRSxDQUFDO1FBQ3pCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFDLEdBQUc7WUFDbkMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDeEMsQ0FBQyxDQUFDLENBQUM7UUFDSCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFDSCx1QkFBQztBQUFELENBQUMsQUFsQkQsSUFrQkM7QUFsQlksNENBQWdCIn0=

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Code = void 0;
var tslib_1 = __webpack_require__(0);
var message = tslib_1.__importStar(__webpack_require__(2));
var connector_1 = __webpack_require__(6);
var Validator_1 = __webpack_require__(50);
/**
 * Representation of a Code which runs on Baqend.
 */
var Code = /** @class */ (function () {
    /**
     * @param metamodel
     * @param entityManagerFactory
     */
    function Code(metamodel, entityManagerFactory) {
        this.metamodel = metamodel;
        this.entityManagerFactory = entityManagerFactory;
    }
    /**
     * Converts the given function to a string
     * @param fn The JavaScript function to serialize
     * @return The serialized function
     */
    Code.prototype.functionToString = function (fn) {
        if (!fn) {
            return '';
        }
        var str = fn.toString();
        str = str.substring(str.indexOf('{') + 1, str.lastIndexOf('}'));
        if (str.charAt(0) === '\n') {
            str = str.substring(1);
        }
        if (str.charAt(str.length - 1) === '\n') {
            str = str.substring(0, str.length - 1);
        }
        return str;
    };
    /**
     * Converts the given string to a module wrapper function
     * @param signature The expected parameters of the function
     * @param code The JavaScript function to deserialize
     * @return The deserialized function
     */
    Code.prototype.stringToFunction = function (signature, code) {
        // eslint-disable-next-line @typescript-eslint/no-implied-eval
        return new Function(signature /* typings are incorrect here */, code); // eslint-disable-line no-new-func
    };
    /**
     * Loads a list of all available modules without handlers
     *
     * @return
     */
    Code.prototype.loadModules = function () {
        var msg = new message.GetAllModules();
        return this.entityManagerFactory.send(msg)
            .then(function (response) { return response.entity; });
    };
    Code.prototype.loadCode = function (type, codeType, asFunction) {
        var _this = this;
        if (asFunction === void 0) { asFunction = false; }
        var bucket = typeof type === 'string' ? type : type.name;
        var msg = new message.GetBaqendCode(bucket, codeType)
            .responseType('text');
        return this.entityManagerFactory.send(msg)
            .then(function (response) { return _this.parseCode(bucket, codeType, asFunction, response.entity); }, function (e) {
            if (e.status === connector_1.StatusCode.OBJECT_NOT_FOUND) {
                return null;
            }
            throw e;
        });
    };
    Code.prototype.saveCode = function (type, codeType, fn) {
        var _this = this;
        var bucket = typeof type === 'string' ? type : type.name;
        var msg = new message.SetBaqendCode(bucket, codeType)
            .entity(fn instanceof Function ? this.functionToString(fn) : fn, 'text')
            .responseType('text');
        return this.entityManagerFactory.send(msg)
            .then(function (response) { return _this.parseCode(bucket, codeType, fn instanceof Function, response.entity); });
    };
    /**
     * Deletes Baqend code identified by the given bucket and code type
     *
     * @param type The entity type for the handler or the Name of the
     * Baqend code
     * @param codeType The type of the code
     * @return succeed if the code was deleted
     */
    Code.prototype.deleteCode = function (type, codeType) {
        var _this = this;
        var bucket = typeof type === 'string' ? type : type.name;
        var msg = new message.DeleteBaqendCode(bucket, codeType);
        return this.entityManagerFactory.send(msg)
            .then(function () { return _this.parseCode(bucket, codeType, false, null); });
    };
    /**
     * @param bucket
     * @param codeType
     * @param [asFunction=false]
     * @param code
     * @return
     * @private
     */
    Code.prototype.parseCode = function (bucket, codeType, asFunction, code) {
        if (codeType === 'validate') {
            var type = this.metamodel.entity(bucket);
            type.validationCode = code === null ? null : Validator_1.Validator.compile(type, code);
            return asFunction ? type.validationCode : code;
        }
        return code && asFunction ? this.stringToFunction(['module', 'exports'], code) : code;
    };
    return Code;
}());
exports.Code = Code;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29kZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkNvZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLDBEQUFzQztBQUN0QywwQ0FBMEM7QUFJMUMseUNBQXdDO0FBRXhDOztHQUVHO0FBQ0g7SUFLRTs7O09BR0c7SUFDSCxjQUFZLFNBQW9CLEVBQUUsb0JBQTBDO1FBQzFFLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzNCLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxvQkFBb0IsQ0FBQztJQUNuRCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILCtCQUFnQixHQUFoQixVQUFpQixFQUFZO1FBQzNCLElBQUksQ0FBQyxFQUFFLEVBQUU7WUFDUCxPQUFPLEVBQUUsQ0FBQztTQUNYO1FBRUQsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3hCLEdBQUcsR0FBRyxHQUFHLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNoRSxJQUFJLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSSxFQUFFO1lBQzFCLEdBQUcsR0FBRyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3hCO1FBRUQsSUFBSSxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEtBQUssSUFBSSxFQUFFO1lBQ3ZDLEdBQUcsR0FBRyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQ3hDO1FBRUQsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCwrQkFBZ0IsR0FBaEIsVUFBaUIsU0FBbUIsRUFBRSxJQUFZO1FBQ2hE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

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Modules = void 0;
var tslib_1 = __webpack_require__(0);
var message = tslib_1.__importStar(__webpack_require__(2));
/**
 * An executor of Modules running on Baqend.
 */
var Modules = /** @class */ (function () {
    /**
     * @param entityManager
     */
    function Modules(entityManager) {
        this.entityManager = entityManager;
    }
    /**
     * Calls the module, which is identified by the given bucket
     *
     * The optional query parameter will be attached as GET-parameters.
     *
     * @param bucket Name of the module
     * @param query GET-Parameter as key-value-pairs or query string
     * @param options Additional request options
     * @param options.responseType The type used to provide the response data, defaults to text oder json
     * depends on the received data, can be one of arraybuffer, blob, json, text, base64, data-url
     * @param doneCallback
     * @param failCallback
     * @return
     */
    Modules.prototype.get = function (bucket, query, options, doneCallback, failCallback) {
        if (query instanceof Function) {
            return this.get(bucket, {}, query, options, doneCallback);
        }
        if (options instanceof Function) {
            return this.get(bucket, query, {}, options, doneCallback);
        }
        var opt = options || {};
        var msg = new message.GetBaqendModule(bucket)
            .addQueryString(query || '')
            .responseType(opt.responseType || null);
        return this.send(msg, doneCallback, failCallback);
    };
    /**
     * Calls the module, which is identified by the given bucket
     *
     * @param bucket Name of the module
     * @param [body] The POST-body data to send
     * @param options Additional request options
     * @param options.requestType A optional type hint used to correctly interpret the provided data, can be one
     * of arraybuffer, blob, json, text, base64, data-url, form
     * @param options.mimeType The mimType of the body. Defaults to the mimeType of the provided data if
     * it is a file object, blob or data-url
     * @param options.responseType The type used to provide the response data, defaults to text oder json
     * depends on the received data, can be one of arraybuffer, blob, json, text, base64, data-url
     * @param doneCallback
     * @param failCallback
     * @return
     */
    Modules.prototype.post = function (bucket, body, options, doneCallback, failCallback) {
        if (typeof options === 'function') {
            return this.post(bucket, body, {}, options, doneCallback);
        }
        var opt = options || {};
        var msg = new message.PostBaqendModule(bucket)
            .entity(body, opt.requestType)
            .mimeType(opt.mimeType || null)
            .responseType(opt.responseType || null);
        return this.send(msg, doneCallback, failCallback);
    };
    Modules.prototype.send = function (msg, doneCallback, failCallback) {
        return this.entityManager.send(msg)
            .then(function (response) { return response.entity; })
            .then(doneCallback, failCallback);
    };
    return Modules;
}());
exports.Modules = Modules;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTW9kdWxlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIk1vZHVsZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLDBEQUFzQztBQU10Qzs7R0FFRztBQUNIO0lBR0U7O09BRUc7SUFDSCxpQkFBWSxhQUE0QjtRQUN0QyxJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztJQUNyQyxDQUFDO0lBRUQ7Ozs7Ozs7Ozs7Ozs7T0FhRztJQUNILHFCQUFHLEdBQUgsVUFBSSxNQUFjLEVBQUUsS0FBdUQsRUFDekUsT0FBd0QsRUFBRSxZQUFrQixFQUFFLFlBQWtCO1FBQ2hHLElBQUksS0FBSyxZQUFZLFFBQVEsRUFBRTtZQUM3QixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLFlBQVksQ0FBQyxDQUFDO1NBQzNEO1FBRUQsSUFBSSxPQUFPLFlBQVksUUFBUSxFQUFFO1lBQy9CLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsWUFBWSxDQUFDLENBQUM7U0FDM0Q7UUFFRCxJQUFNLEdBQUcsR0FBRyxPQUFPLElBQUksRUFBRSxDQUFDO1FBRTFCLElBQU0sR0FBRyxHQUFHLElBQUksT0FBTyxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUM7YUFDNUMsY0FBYyxDQUFDLEtBQUssSUFBSSxFQUFFLENBQUM7YUFDM0IsWUFBWSxDQUFDLEdBQUcsQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDLENBQUM7UUFFMUMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxZQUFZLEVBQUUsWUFBWSxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUVEOzs7Ozs7Ozs7Ozs7Ozs7T0FlRztJQUNILHNCQUFJLEdBQUosVUFBSyxNQUFjLEVBQUUsSUFBaUIsRUFBRSxPQUNMLEVBQUUsWUFBa0IsRUFBRSxZQUFrQjtRQUN6RSxJQUFJLE9BQU8sT0FBTyxLQUFLLFVBQVUsRUFBRTtZQUNqQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLFlBQVksQ0FBQyxDQUFDO1NBQzNEO1FBRUQsSUFBTSxHQUFHLEdBQUcsT0FBTyxJQUFJLEVBQUUsQ0FBQztRQUUxQixJQUFNLEdBQUcsR0FBRyxJQUFJLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUM7YUFDN0MsTUFBTSxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsV0FBVyxDQUFDO2FBQzdCLFFBQVEsQ0FBQyxHQUFHLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQzthQUM5QixZQUFZLENBQUMsR0FBRyxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsQ0FBQztRQUUxQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLFlBQVksRUFBRSxZQUFZLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBRUQsc0JBQUksR0FBSixVQUFLLEdBQVksRUFBRSxZQUFrQixFQUFFLFlBQWtCO1FBQ3ZELE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO2FBQ2hDLElBQUksQ0FBQyxVQUFDLFFBQVEsSUFBSyxPQUFBLFFBQVEsQ0FBQyxNQUFNLEVBQWYsQ0FBZSxDQUFDO2FBQ25DLElBQUksQ0FBQyxZQUFZLEVBQUUsWUFBWSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUNILGNBQUM7QUFBRCxDQUFDLEFBaEZELElBZ0ZDO0FBaEZZLDBCQUFPIn0=

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
var tslib_1 = __webpack_require__(0);
var msg = tslib_1.__importStar(__webpack_require__(2));
/**
 * A Logger to store log notes when running the app.
 */
var Logger = /** @class */ (function () {
    function Logger() {
        this.entityManager = null;
        this.levelIndex = 2;
    }
    /**
     * Creates a Logger instance for the given EntityManager
     * @param entityManager - Theo owning entityManager
     * @return The created logger instance
     */
    Logger.create = function (entityManager) {
        var proto = this.prototype;
        var logger = (function () {
            function LoggerFunction() {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                proto.log.apply(LoggerFunction, args);
            }
            Object.getOwnPropertyNames(proto).forEach(function (key) {
                Object.defineProperty(LoggerFunction, key, Object.getOwnPropertyDescriptor(proto, key));
            });
            return LoggerFunction;
        })();
        logger.init(entityManager);
        return logger;
    };
    Object.defineProperty(Logger.prototype, "level", {
        /**
         * The log level which will be logged
         *
         * The log level can be one of 'trace', 'debug', 'info', 'warn', 'error'
         * @type string
         */
        get: function () {
            return Logger.LEVELS[this.levelIndex];
        },
        /**
         * Sets the log level which will be logged
         * @param value
         */
        set: function (value) {
            var index = Logger.LEVELS.indexOf(value);
            if (index === -1) {
                throw new Error("Unknown logging level " + value);
            }
            this.levelIndex = index;
        },
        enumerable: false,
        configurable: true
    });
    Logger.prototype.log = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var level = Logger.LEVELS.indexOf(args[0]) === -1 ? 'info' : args.shift();
        if (this.levelIndex > Logger.LEVELS.indexOf(level)) {
            return Promise.resolve(null);
        }
        var message = typeof args[0] === 'string' ? this.format(args.shift(), args) : '[no message]';
        var data = null;
        if (args.length) {
            var arg = args.pop();
            data = arg;
            if (typeof arg !== 'object' || Array.isArray(arg)) {
                data = { data: arg };
            }
            if (arg instanceof Error) {
                // errors aren't loggable by default, since they do not have any visible property
                var 
                // @ts-ignore
                stack = arg.stack, data1 = arg.data, message1 = arg.message, name_1 = arg.name, status_1 = arg.status;
                data = {
                    name: name_1,
                    message: message1,
                    stack: stack,
                    status: status_1,
                    data: data1,
                };
            }
        }
        if (args.length) {
            message += ", " + args.join(', ');
        }
        return this.logJSON(tslib_1.__assign({ date: new Date().toISOString(), message: message,
            level: level,
            data: data }, (this.entityManager.me && { user: this.entityManager.me.id })));
    };
    Logger.prototype.format = function (message, args) {
        if (args.length === 0) {
            return message;
        }
        var str = String(message).replace(Logger.FORMAT_REGEXP, function (x) {
            if (x === '%%') {
                return '%';
            }
            if (!args.length) {
                return x;
            }
            switch (x) {
                case '%s':
                    return String(args.shift());
                case '%d':
                    return String(Number(args.shift()));
                case '%j':
                    try {
                        return JSON.stringify(args.shift());
                    }
                    catch (_) {
                        return '[Circular]';
                    }
                default:
                    return x;
            }
        });
        return str;
    };
    Logger.prototype.init = function (entityManager) {
        var _this = this;
        this.entityManager = entityManager;
        this.levelIndex = 2;
        Logger.LEVELS.forEach(function (level) {
            _this[level] = _this.log.bind(_this, level);
        });
    };
    Logger.prototype.logJSON = function (json) {
        if (!this.entityManager.isReady) {
            return this.entityManager.ready(this.logJSON.bind(this, json));
        }
        return this.entityManager.send(new msg.CreateObject('logs.AppLog', json));
    };
    Logger.LEVELS = ['trace', 'debug', 'info', 'warn', 'error'];
    Logger.FORMAT_REGEXP = /%[sdj%]/g;
    return Logger;
}());
exports.Logger = Logger;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9nZ2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiTG9nZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxzREFBa0M7QUFNbEM7O0dBRUc7QUFDSDtJQUFBO1FBS1Msa0JBQWEsR0FBa0IsSUFBVyxDQUFDO1FBRTNDLGVBQVUsR0FBVyxDQUFDLENBQUM7SUFrTWhDLENBQUM7SUFoTUM7Ozs7T0FJRztJQUNJLGFBQU0sR0FBYixVQUFjLGFBQTRCO1FBQ3hDLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7UUFFN0IsSUFBTSxNQUFNLEdBQUcsQ0FBQztZQUNkLFNBQVMsY0FBYztnQkFBQyxjQUFjO3FCQUFkLFVBQWMsRUFBZCxxQkFBYyxFQUFkLElBQWM7b0JBQWQseUJBQWM7O2dCQUNwQyxLQUFLLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxjQUFjLEVBQUUsSUFBVyxDQUFDLENBQUM7WUFDL0MsQ0FBQztZQUVELE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQyxHQUFHO2dCQUM1QyxNQUFNLENBQUMsY0FBYyxDQUFDLGNBQWMsRUFBRSxHQUFHLEVBQUUsTUFBTSxDQUFDLHdCQUF3QixDQUFDLEtBQUssRUFBRSxHQUFHLENBQUUsQ0FBQyxDQUFDO1lBQzNGLENBQUMsQ0FBQyxDQUFDO1lBRUgsT0FBTyxjQUErQixDQUFDO1FBQ3pDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFFTCxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBRTNCLE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7SUFRRCxzQkFBSSx5QkFBSztRQU5UOzs7OztXQUtHO2FBQ0g7WUFDRSxPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3hDLENBQUM7UUFFRDs7O1dBR0c7YUFDSCxVQUFVLEtBQWU7WUFDdkIsSUFBTSxLQUFLLEdBQUcs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

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.PushMessage = void 0;
var binding_1 = __webpack_require__(5);
/**
 * PushMessages are used to send a push notification to a set of devices
 */
var PushMessage = /** @class */ (function () {
    /**
     * Push message will be used to send a push notification to a set of devices
     *
     * @param [devices] The Set of device references which
     * will receive this push notification.
     * @param message The message of the push notification.
     * @param subject The subject of the push notification.
     * @param [options] The options object which can contain additional information and data
     * @param [badge] The badge for iOS or Web Push devices
     * @param [data] The data object which can contain additional information.
     */
    function PushMessage(devices, message, subject, options, badge, data) {
        var opts = typeof options === 'string' ? { sound: options, badge: badge, data: data } : (options || {});
        this.devices = PushMessage.initDevices(devices);
        this.message = message;
        this.subject = subject;
        Object.assign(this, opts);
    }
    /**
     * Instantiates a set of devices from the given parameter
     * @param devices
     * @return
     */
    PushMessage.initDevices = function (devices) {
        if (devices instanceof Set) {
            return devices;
        }
        if (devices instanceof binding_1.Entity) {
            return new Set([devices]);
        }
        if (!devices || devices[Symbol.iterator]) {
            return new Set(devices);
        }
        throw new Error('Only Sets, Lists and Arrays can be used as devices.');
    };
    /**
     * Adds a new object to the set of devices
     * @param device will be added to the device set to receive the push notification
     * @return
     */
    PushMessage.prototype.addDevice = function (device) {
        this.devices.add(device);
    };
    /**
     * Converts the push message to JSON
     * @return
     */
    PushMessage.prototype.toJSON = function () {
        if (!this.devices || !this.devices.size) {
            throw new Error('Set of devices is empty.');
        }
        return Object.assign({}, this, {
            devices: Array.from(this.devices, function (device) { return device.id; }),
        });
    };
    return PushMessage;
}());
exports.PushMessage = PushMessage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHVzaE1lc3NhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJQdXNoTWVzc2FnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxzQ0FBb0M7QUF3RXBDOztHQUVHO0FBQ0g7SUFnQkU7Ozs7Ozs7Ozs7T0FVRztJQUNILHFCQUFZLE9BQWtFLEVBQUUsT0FBZ0IsRUFBRSxPQUFnQixFQUNoSCxPQUFxQyxFQUFFLEtBQXVCLEVBQUUsSUFBVztRQUMzRSxJQUFNLElBQUksR0FBRyxPQUFPLE9BQU8sS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxLQUFLLE9BQUEsRUFBRSxJQUFJLE1BQUEsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUMsQ0FBQztRQUU3RixJQUFJLENBQUMsT0FBTyxHQUFHLFdBQVcsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFFdkIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVEOzs7O09BSUc7SUFDWSx1QkFBVyxHQUExQixVQUEyQixPQUFtRTtRQUM1RixJQUFJLE9BQU8sWUFBWSxHQUFHLEVBQUU7WUFDMUIsT0FBTyxPQUFPLENBQUM7U0FDaEI7UUFFRCxJQUFJLE9BQU8sWUFBWSxnQkFBTSxFQUFFO1lBQzdCLE9BQU8sSUFBSSxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1NBQzNCO1FBRUQsSUFBSSxDQUFDLE9BQU8sSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQ3hDLE9BQU8sSUFBSSxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDekI7UUFFRCxNQUFNLElBQUksS0FBSyxDQUFDLHFEQUFxRCxDQUFDLENBQUM7SUFDekUsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCwrQkFBUyxHQUFULFVBQVUsTUFBb0I7UUFDNUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVEOzs7T0FHRztJQUNILDRCQUFNLEdBQU47UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFO1lBQ3ZDLE1BQU0sSUFBSSxLQUFLLENBQUMsMEJBQTBCLENBQUMsQ0FBQztTQUM3QztRQUVELE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFhLEVBQUUsSUFBSSxFQUFFO1lBQ3hDLE9BQU8sRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsVUFBQyxNQUFNLElBQUssT0FBQSxNQUFNLENBQUMsRUFBRSxFQUFULENBQVMsQ0FBQztTQUN6RCxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0gsa0JBQUM7QUFBRCxDQUFDLEFBakZELElBaUZDO0FBakZZLGtDQUFXIn0=

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalStorage = void 0;
var tslib_1 = __webpack_require__(0);
var TokenStorage_1 = __webpack_require__(28);
var GlobalStorage = /** @class */ (function (_super) {
    tslib_1.__extends(GlobalStorage, _super);
    function GlobalStorage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Creates a global token storage instance for the given origin
     * A global token storage use a global variable to store the actual origin tokens
     * @param origin
     * @return
     */
    GlobalStorage.create = function (origin) {
        return Promise.resolve(new GlobalStorage(origin, GlobalStorage.tokens[origin]));
    };
    /**
     * @inheritDoc
     */
    GlobalStorage.prototype.saveToken = function (origin, token, temporary) {
        if (!temporary) {
            if (token) {
                GlobalStorage.tokens[origin] = token;
            }
            else {
                delete GlobalStorage.tokens[origin];
            }
        }
    };
    GlobalStorage.tokens = {};
    return GlobalStorage;
}(TokenStorage_1.TokenStorage));
exports.GlobalStorage = GlobalStorage;
TokenStorage_1.TokenStorage.GLOBAL = GlobalStorage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2xvYmFsU3RvcmFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkdsb2JhbFN0b3JhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLCtDQUE4QztBQUU5QztJQUFtQyx5Q0FBWTtJQUEvQzs7SUF5QkEsQ0FBQztJQXRCQzs7Ozs7T0FLRztJQUNJLG9CQUFNLEdBQWIsVUFBYyxNQUFjO1FBQzFCLE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLGFBQWEsQ0FBQyxNQUFNLEVBQUUsYUFBYSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbEYsQ0FBQztJQUVEOztPQUVHO0lBQ0gsaUNBQVMsR0FBVCxVQUFVLE1BQWMsRUFBRSxLQUFhLEVBQUUsU0FBa0I7UUFDekQsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNkLElBQUksS0FBSyxFQUFFO2dCQUNULGFBQWEsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsS0FBSyxDQUFDO2FBQ3RDO2lCQUFNO2dCQUNMLE9BQU8sYUFBYSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUNyQztTQUNGO0lBQ0gsQ0FBQztJQXZCYyxvQkFBTSxHQUFpQyxFQUFFLENBQUM7SUF3QjNELG9CQUFDO0NBQUEsQUF6QkQsQ0FBbUMsMkJBQVksR0F5QjlDO0FBekJZLHNDQUFhO0FBMkIxQiwyQkFBWSxDQUFDLE1BQU0sR0FBRyxhQUFhLENBQUMifQ==

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.WebStorage = void 0;
var tslib_1 = __webpack_require__(0);
var TokenStorage_1 = __webpack_require__(28);
/**
 * @ignore
 */
var WebStorage = /** @class */ (function (_super) {
    tslib_1.__extends(WebStorage, _super);
    function WebStorage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WebStorage.isAvailable = function () {
        try {
            // firefox throws an exception if cookies are disabled
            if (typeof localStorage === 'undefined') {
                return false;
            }
            localStorage.setItem('bq_webstorage_test', 'bq');
            localStorage.removeItem('bq_webstorage_test');
            return true;
        }
        catch (e) {
            return false;
        }
    };
    /**
     * Creates a global web storage instance for the given origin
     * A web token storage use the localStorage or sessionStorage to store the origin tokens
     * @param origin
     * @return
     */
    WebStorage.create = function (origin) {
        var temporary = false;
        var token = localStorage.getItem("BAT:" + origin);
        if (!token && typeof sessionStorage !== 'undefined') {
            token = sessionStorage.getItem("BAT:" + origin);
            temporary = !!token;
        }
        return Promise.resolve(new WebStorage(origin, token, temporary));
    };
    /**
     * @inheritDoc
     */
    WebStorage.prototype.saveToken = function (origin, token, temporary) {
        var webStorage = temporary ? sessionStorage : localStorage;
        if (token) {
            webStorage.setItem("BAT:" + origin, token);
        }
        else {
            webStorage.removeItem("BAT:" + origin);
        }
    };
    return WebStorage;
}(TokenStorage_1.TokenStorage));
exports.WebStorage = WebStorage;
if (WebStorage.isAvailable()) {
    TokenStorage_1.TokenStorage.WEB_STORAGE = WebStorage;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV2ViU3RvcmFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIldlYlN0b3JhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLCtDQUE4QztBQUU5Qzs7R0FFRztBQUNIO0lBQWdDLHNDQUFZO0lBQTVDOztJQTZDQSxDQUFDO0lBNUNRLHNCQUFXLEdBQWxCO1FBQ0UsSUFBSTtZQUNGLHNEQUFzRDtZQUN0RCxJQUFJLE9BQU8sWUFBWSxLQUFLLFdBQVcsRUFBRTtnQkFDdkMsT0FBTyxLQUFLLENBQUM7YUFDZDtZQUVELFlBQVksQ0FBQyxPQUFPLENBQUMsb0JBQW9CLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDakQsWUFBWSxDQUFDLFVBQVUsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1lBQzlDLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUNWLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7SUFDSCxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSSxpQkFBTSxHQUFiLFVBQWMsTUFBYztRQUMxQixJQUFJLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDdEIsSUFBSSxLQUFLLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxTQUFPLE1BQVEsQ0FBQyxDQUFDO1FBRWxELElBQUksQ0FBQyxLQUFLLElBQUksT0FBTyxjQUFjLEtBQUssV0FBVyxFQUFFO1lBQ25ELEtBQUssR0FBRyxjQUFjLENBQUMsT0FBTyxDQUFDLFNBQU8sTUFBUSxDQUFDLENBQUM7WUFDaEQsU0FBUyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUM7U0FDckI7UUFFRCxPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxVQUFVLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDO0lBQ25FLENBQUM7SUFFRDs7T0FFRztJQUNILDhCQUFTLEdBQVQsVUFBVSxNQUFjLEVBQUUsS0FBb0IsRUFBRSxTQUFrQjtRQUNoRSxJQUFNLFVBQVUsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDO1FBQzdELElBQUksS0FBSyxFQUFFO1lBQ1QsVUFBVSxDQUFDLE9BQU8sQ0FBQyxTQUFPLE1BQVEsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUM1QzthQUFNO1lBQ0wsVUFBVSxDQUFDLFVBQVUsQ0FBQyxTQUFPLE1BQVEsQ0FBQyxDQUFDO1NBQ3hDO0lBQ0gsQ0FBQztJQUNILGlCQUFDO0FBQUQsQ0FBQyxBQTdDRCxDQUFnQywyQkFBWSxHQTZDM0M7QUE3Q1ksZ0NBQVU7QUErQ3ZCLElBQUksVUFBVSxDQUFDLFdBQVcsRUFBRSxFQUFFO0lBQzVCLDJCQUFZLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQztDQUN2QyJ9

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.UserFactory = exports.LoginOption = void 0;
var tslib_1 = __webpack_require__(0);
var EntityFactory_1 = __webpack_require__(29);
var LoginOption;
(function (LoginOption) {
    /**
     * Do not login the user after a successful registration
     */
    LoginOption[LoginOption["NO_LOGIN"] = -1] = "NO_LOGIN";
    /**
     * Login in after a successful registration and keep the token in a nonpermanent storage, i.e SessionStorage
     */
    LoginOption[LoginOption["SESSION_LOGIN"] = 0] = "SESSION_LOGIN";
    /**
     * Login in after a successful registration and keep the token in a persistent storage, i.e LocalStorage
     */
    LoginOption[LoginOption["PERSIST_LOGIN"] = 1] = "PERSIST_LOGIN";
})(LoginOption = exports.LoginOption || (exports.LoginOption = {}));
/**
 * Creates a new instance of the managed type of this factory
 */
var UserFactory = /** @class */ (function (_super) {
    tslib_1.__extends(UserFactory, _super);
    function UserFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(UserFactory.prototype, "LoginOption", {
        get: function () {
            return LoginOption;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UserFactory.prototype, "me", {
        /**
         * The current logged in user, or <code>null</code> if the user is not logged in
         */
        get: function () {
            return this.db.me;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Register a new user with the given username and password, if the username is not used by an another user.
     * @param user The username as a string or a <User> Object, which must contain the username.
     * @param password The password for the given user
     * @param [loginOption=true] The default logs the user in after a successful
     * registration and keeps the user logged in over multiple sessions
     * @param doneCallback Called when the operation succeed.
     * @param failCallback Called when the operation failed.
     * @return The created user object, for the new registered user.
     */
    UserFactory.prototype.register = function (user, password, loginOption, doneCallback, failCallback) {
        if (loginOption instanceof Function) {
            return this.register(user, password, true, loginOption, doneCallback);
        }
        var userObj = typeof user === 'string' ? this.fromJSON({ username: user }) : user;
        return this.db.register(userObj, password, loginOption === undefined ? true : loginOption)
            .then(doneCallback, failCallback);
    };
    /**
     * Log in the user with the given username and password and starts a user session
     * @param username The username of the user
     * @param password The password of the user
     * @param [loginOption=true] The default keeps the user logged in over
     * multiple sessions
     * @param doneCallback Called when the operation succeed.
     * @param failCallback Called when the operation failed.
     * @return
     */
    UserFactory.prototype.login = function (username, password, loginOption, doneCallback, failCallback) {
        if (loginOption instanceof Function) {
            return this.login(username, password, true, loginOption, doneCallback);
        }
        return this.db.login(username, password, loginOption === undefined ? true : loginOption)
            .then(doneCallback, failCallback);
    };
    /**
     * Log in the user assiciated with the given token and starts a user session.
     * @param token The user token.
     * @param [loginOption=true] The default keeps the user logged in over
     * multiple sessions
     * @param doneCallback Called when the operation succeed.
     * @param failCallback Called when the operation failed.
     * @return
     */
    UserFactory.prototype.loginWithToken = function (token, loginOption, doneCallback, failCallback) {
        if (loginOption instanceof Function) {
            return this.loginWithToken(token, true, loginOption, doneCallback);
        }
        this.db.token = token;
        return this.db.renew(loginOption).then(doneCallback, failCallback);
    };
    /**
     * Log out the current logged in user and ends the active user session
     * @param doneCallback Called when the operation succeed.
     * @param failCallback Called when the operation failed.
     * @return
     */
    UserFactory.prototype.logout = function (doneCallback, failCallback) {
        return this.db.logout().then(doneCallback, failCallback);
    };
    UserFactory.prototype.newPassword = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        // detect signature newPassword(token, newPassword, [loginOption=true][, doneCallback[, failCallback]])
        if (typeof args[2] === 'string') {
            var _a = args, username = _a[0], password = _a[1], newPassword_1 = _a[2], doneCallback_1 = _a[3], failCallback_1 = _a[4];
            return this.db.newPassword(username, password, newPassword_1).then(doneCallback_1, failCallback_1);
        }
        // eslint-disable-next-line prefer-const
        var _b = args, token = _b[0], newPassword = _b[1], loginOption = _b[2], doneCallback = _b[3], failCallback = _b[4];
        if (loginOption instanceof Function) {
            failCallback = doneCallback;
            doneCallback = loginOption;
            loginOption = true;
        }
        return this.db.newPasswordWithToken(token, newPassword, loginOption).then(doneCallback, failCallback);
    };
    /**
     * Sends an email with a link to reset the password for the given username
     *
     * The username must be a valid email address.
     *
     * @param username Username (email) to identify the user
     * @param doneCallback Called when the operation succeed.
     * @param failCallback Called when the operation failed.
     * @return
     */
    UserFactory.prototype.resetPassword = function (username, doneCallback, failCallback) {
        return this.db.resetPassword(username).then(doneCallback, failCallback);
    };
    /**
     * Sends an email with a link to change the current username
     *
     * The user is identified by their current username and password.
     * The username must be a valid email address.
     *
     * @param username Current username (email) to identify the user
     * @param newUsername New username (email) to change the current username to
     * @param password The current password of the user. Has to be passed to the function for security reason
     * @param doneCallback Called when the operation succeed.
     * @param failCallback Called when the operation failed.
     * @return
     */
    UserFactory.prototype.changeUsername = function (username, newUsername, password, doneCallback, failCallback) {
        return this.db.changeUsername(username, newUsername, password).then(doneCallback, failCallback);
    };
    /**
     * Requests a perpetual token for the given user
     *
     * Only users with the admin role are allowed to request an API token.
     *
     * @param user The user object or id of the user object
     * @param doneCallback Called when the operation succeed.
     * @param failCallback Called when the operation failed.
     * @return
     */
    UserFactory.prototype.requestAPIToken = function (user, doneCallback, failCallback) {
        return this.db.requestAPIToken(this.managedType.typeConstructor, user).then(doneCallback, failCallback);
    };
    /**
     * Revoke all created tokens for the given user
     *
     * This method will revoke all previously issued tokens and the user must login again.
     *
     * @param user The user object or id of the user object
     * @param doneCallback Called when the operation succeed.
     * @param failCallback Called when the operation failed.
     * @return
     */
    UserFactory.prototype.revokeAllTokens = function (user, doneCallback, failCallback) {
        return this.db.revokeAllTokens(this.managedType.typeConstructor, user).then(doneCallback, failCallback);
    };
    /**
     * @property oauth default properties
     * @property google default oauth properties for Google
     * @property facebook default oauth properties for Facebook
     * @property github default oauth properties for GitHub
     * @property twitter default oauth properties for Twitter
     * @property linkedin default oauth properties for LinkedIn
     * @property {Object} oauth.salesforce default oauth properties for Salesforce
     */
    UserFactory.DefaultOptions = {
        google: {
            width: 585,
            height: 545,
            scope: 'email',
            path: 'https://accounts.google.com/o/oauth2/auth?response_type=code&access_type=online',
        },
        facebook: {
            width: 1140,
            height: 640,
            scope: 'email',
            path: 'https://www.facebook.com/v7.0/dialog/oauth?response_type=code',
        },
        github: {
            width: 1040,
            height: 580,
            scope: 'user:email',
            path: 'https://github.com/login/oauth/authorize?response_type=code&access_type=online',
        },
        twitter: {
            version: 1,
            width: 740,
            height: 730,
        },
        linkedin: {
            width: 630,
            height: 530,
            scope: 'r_liteprofile',
            path: 'https://www.linkedin.com/oauth/v2/authorization?response_type=code',
        },
        salesforce: {
            width: 585,
            height: 545,
            scope: 'email',
        },
    };
    return UserFactory;
}(EntityFactory_1.EntityFactory));
exports.UserFactory = UserFactory;
['Google', 'Facebook', 'GitHub', 'Twitter', 'LinkedIn', 'Salesforce'].forEach(function (name) {
    var methodName = "loginWith" + name;
    // do not use a lambda here since we will loose the this context
    UserFactory.prototype[methodName] = function loginWithOAuth(clientID, options, doneCallback, failCallback) {
        if (options instanceof Function) {
            return this[methodName](clientID, {}, options, doneCallback);
        }
        var opt = tslib_1.__assign(tslib_1.__assign(tslib_1.__assign({}, UserFactory.DefaultOptions[name.toLowerCase()]), (typeof clientID === 'string' ? { clientId: clientID } : clientID)), options || {});
        return this.db.loginWithOAuth(name, opt).then(doneCallback, failCallback);
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlckZhY3RvcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJVc2VyRmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsaURBQWdEO0FBSWhELElBQVksV0FhWDtBQWJELFdBQVksV0FBVztJQUNyQjs7T0FFRztJQUNILHNEQUFhLENBQUE7SUFDYjs7T0FFRztJQUNILCtEQUFpQixDQUFBO0lBQ2pCOztPQUVHO0lBQ0gsK0RBQWlCLENBQUE7QUFDbkIsQ0FBQyxFQWJXLFdBQVcsR0FBWCxtQkFBVyxLQUFYLG1CQUFXLFFBYXRCO0FBRUQ7O0dBRUc7QUFDSDtJQUFpQyx1Q0FBeUI7SUFBMUQ7O0lBME9BLENBQUM7SUF6T0Msc0JBQVcsb0NBQVc7YUFBdEI7WUFDRSxPQUFPLFdBQVcsQ0FBQztRQUNyQixDQUFDOzs7T0FBQTtJQW1ERCxzQkFBSSwyQkFBRTtRQUhOOztXQUVHO2FBQ0g7WUFDRSxPQUFPLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO1FBQ3BCLENBQUM7OztPQUFBO0lBRUQ7Ozs7Ozs7OztPQVNHO0lBQ0gsOEJBQVEsR0FBUixVQUFTLElBQXlCLEVBQUUsUUFBZ0IsRUFBRSxXQUE4QyxFQUNsRyxZQUFrQixFQUFFLFlBQWtCO1FBQ3RDLElBQUksV0FBVyxZQUFZLFFBQVEsRUFBRTtZQUNuQyxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLFlBQVksQ0FBQyxDQUFDO1NBQ3ZFO1FBRUQsSUFBTSxPQUFPLEdBQUcsT0FBTyxJQUFJLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUNwRixPQUFPLElBQUksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxRQUFRLEVBQUUsV0FBVyxLQUFL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

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DeviceFactory = void 0;
var tslib_1 = __webpack_require__(0);
var message = tslib_1.__importStar(__webpack_require__(2));
var intersection_1 = __webpack_require__(1);
var EntityFactory_1 = __webpack_require__(29);
var DeviceFactory = /** @class */ (function (_super) {
    tslib_1.__extends(DeviceFactory, _super);
    function DeviceFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DeviceFactory.prototype, "PushMessage", {
        /**
         * Push message will be used to send a push notification to a set of devices
         */
        get: function () {
            return intersection_1.PushMessage;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DeviceFactory.prototype, "me", {
        /**
         * The current registered device, or <code>null</code> if the device is not registered
         * @type model.Device
         */
        get: function () {
            return this.db.deviceMe;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DeviceFactory.prototype, "isRegistered", {
        /**
         * Returns true if the devices is already registered, otherwise false.
         * @type boolean
         */
        get: function () {
            return this.db.isDeviceRegistered;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Loads the Public VAPID Key which can be used to subscribe a Browser for Web Push notifications
     * @return The public VAPID Web Push subscription key
     */
    DeviceFactory.prototype.loadWebPushKey = function () {
        var msg = new message.VAPIDPublicKey();
        msg.responseType('arraybuffer');
        return this.db.send(msg).then(function (response) { return response.entity; });
    };
    DeviceFactory.prototype.register = function (os, tokenOrSubscription, device, doneCallback, failCallback) {
        if (device instanceof Function) {
            return this.register(os, tokenOrSubscription, null, device, doneCallback);
        }
        var subscription = typeof tokenOrSubscription === 'string' ? { token: tokenOrSubscription } : tokenOrSubscription;
        return this.db.registerDevice(os, subscription, device).then(doneCallback, failCallback);
    };
    /**
     * Uses the info from the given {@link PushMessage} message to send an push notification.
     * @param pushMessage to send an push notification.
     * @param doneCallback Called when the operation succeed.
     * @param failCallback Called when the operation failed.
     * @return
     */
    DeviceFactory.prototype.push = function (pushMessage, doneCallback, failCallback) {
        return this.db.pushDevice(pushMessage).then(doneCallback, failCallback);
    };
    return DeviceFactory;
}(EntityFactory_1.EntityFactory));
exports.DeviceFactory = DeviceFactory;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGV2aWNlRmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkRldmljZUZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLDBEQUFzQztBQUN0QyxnREFBOEM7QUFFOUMsaURBQWdEO0FBRWhEO0lBQW1DLHlDQUEyQjtJQUE5RDs7SUErRUEsQ0FBQztJQTNFQyxzQkFBVyxzQ0FBVztRQUh0Qjs7V0FFRzthQUNIO1lBQ0UsT0FBTywwQkFBVyxDQUFDO1FBQ3JCLENBQUM7OztPQUFBO0lBTUQsc0JBQUksNkJBQUU7UUFKTjs7O1dBR0c7YUFDSDtZQUNFLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUM7UUFDMUIsQ0FBQzs7O09BQUE7SUFNRCxzQkFBSSx1Q0FBWTtRQUpoQjs7O1dBR0c7YUFDSDtZQUNFLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQztRQUNwQyxDQUFDOzs7T0FBQTtJQUVEOzs7T0FHRztJQUNILHNDQUFjLEdBQWQ7UUFDRSxJQUFNLEdBQUcsR0FBRyxJQUFJLE9BQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN6QyxHQUFHLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ2hDLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsUUFBUSxJQUFLLE9BQUEsUUFBUSxDQUFDLE1BQU0sRUFBZixDQUFlLENBQUMsQ0FBQztJQUMvRCxDQUFDO0lBMEJELGdDQUFRLEdBQVIsVUFBUyxFQUFVLEVBQUUsbUJBQThDLEVBQUUsTUFBc0MsRUFDekcsWUFBa0IsRUFBRSxZQUFrQjtRQUN0QyxJQUFJLE1BQU0sWUFBWSxRQUFRLEVBQUU7WUFDOUIsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRSxtQkFBbUIsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFlBQVksQ0FBQyxDQUFDO1NBQzNFO1FBRUQsSUFBTSxZQUFZLEdBQUcsT0FBTyxtQkFBbUIsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLG1CQUFtQixFQUFFLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixDQUFDO1FBRXBILE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUMsRUFBRSxFQUFFLFlBQVksRUFBRSxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLFlBQVksQ0FBQyxDQUFDO0lBQzNGLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSCw0QkFBSSxHQUFKLFVBQUssV0FBd0IsRUFBRSxZQUFrQixFQUFFLFlBQWtCO1FBQ25FLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxZQUFZLENBQUMsQ0FBQztJQUMxRSxDQUFDO0lBQ0gsb0JBQUM7QUFBRCxDQUFDLEFBL0VELENBQW1DLDZCQUFhLEdBK0UvQztBQS9FWSxzQ0FBYSJ9

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.FileFactory = void 0;
var tslib_1 = __webpack_require__(0);
var Factory_1 = __webpack_require__(27);
var File_1 = __webpack_require__(51);
var message = tslib_1.__importStar(__webpack_require__(2));
var util_1 = __webpack_require__(3);
var connector_1 = __webpack_require__(6);
var intersection_1 = __webpack_require__(1);
var FileFactory = /** @class */ (function (_super) {
    tslib_1.__extends(FileFactory, _super);
    function FileFactory() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * The owning EntityManager where this factory belongs to
         */
        _this.db = null;
        return _this;
    }
    /**
     * Creates a new FileFactory for the given type
     * @param db
     * @return A new file factory
     */
    FileFactory.create = function (db) {
        var factory = this.createFactory(File_1.File);
        factory.db = db;
        return factory;
    };
    /**
     * Creates a new file
     * @param args Constructor arguments used for instantiation, the constructor will not be called
     * when no arguments are passed
     * @return A new created file
     */
    FileFactory.prototype.newInstance = function (args) {
        var instance = _super.prototype.newInstance.call(this, args);
        instance.db = this.db;
        return instance;
    };
    /**
     * Deserialize the file metadata from a json object back to a new file instance
     * @param json The file metadata as json
     * @return The deserialize File instance
     */
    FileFactory.prototype.fromJSON = function (json) {
        var file = this.newInstance([json.id]);
        file.fromJSON(json);
        return file;
    };
    /**
     * Updates the metadata of the root file directory formally the file "bucket"
     * @param bucket The name of the root file directory
     * @param metadata The new metadata for the bucket
     * @param doneCallback Invoked if the operation succeeds
     * @param failCallback The callback is invoked if any error has occurred
     * @return A promise which will fulfilled with the updated metadata
     */
    FileFactory.prototype.saveMetadata = function (bucket, metadata, doneCallback, failCallback) {
        var msg = new message.SetFileBucketMetadata(bucket, metadata);
        return this.db.send(msg).then(doneCallback, failCallback);
    };
    /**
     * Gets the metadata of the root folder (formally the file "bucket")
     * @param bucket The name of the root file directory
     * @param options The load metadata options
     * @param [options.refresh=false] Force a revalidation while fetching the metadata
     * @param doneCallback
     * The callback is invoked after the metadata is fetched
     * @param failCallback The callback is invoked if any error has occurred
     * @return A promise which will be fulfilled with the bucket ACLs
     */
    FileFactory.prototype.loadMetadata = function (bucket, options, doneCallback, failCallback) {
        var msg = new message.GetFileBucketMetadata(bucket);
        // this._db.ensureCacheHeader(this.id, msg, options.refresh);
        // do not white list the file, because head-request does not revalidate the cache.
        return this.db.send(msg).then(function (response) {
            var result = {};
            intersection_1.Permission.BASE_PERMISSIONS.forEach(function (key) {
                result[key] = intersection_1.Permission.fromJSON(response.entity[key] || {});
            });
            return result;
        }, function (e) {
            if (e.status === connector_1.StatusCode.OBJECT_NOT_FOUND) {
                return null;
            }
            throw e;
        }).then(doneCallback, failCallback);
    };
    /**
     * Lists all the buckets.
     * @param doneCallback The callback is invoked with the listed buckets
     * @param failCallback The callback is invoked if any error has occurred
     * @return The listed buckets.
     */
    FileFactory.prototype.listBuckets = function (doneCallback, failCallback) {
        var _this = this;
        return this.db.send(new message.ListBuckets()).then(function (response) { return (response.entity.map(function (bucket) { return _this.new(bucket + "/"); })); }).then(doneCallback, failCallback);
    };
    /**
     * Lists the files (and folders) in the given folder.
     *
     * @param folderOrPath The folder/path to list.
     * @param start The file/folder from where to start listing (not included)
     * @param count The maximum number of files to return.
     * @param doneCallback The callback is invoked with the listed files
     * @param failCallback The callback is invoked if any error has occurred
     * @return The listed files/folders.
     */
    FileFactory.prototype.listFiles = function (folderOrPath, start, count, doneCallback, failCallback) {
        var _this = this;
        var folder;
        if (typeof folderOrPath === 'string') {
            var path_1 = util_1.trailingSlashIt(folderOrPath);
            folder = this.new({ path: path_1 });
        }
        else {
            folder = folderOrPath;
        }
        var path = folder.key;
        var bucket = folder.bucket;
        return this.db.send(new message.ListFiles(bucket, path, start ? start.key : undefined, count)).then(function (response) { return (response.entity.map(function (file) { return _this.new(file); })); }).then(doneCallback, failCallback);
    };
    return FileFactory;
}(Factory_1.Factory));
exports.FileFactory = FileFactory;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmlsZUZhY3RvcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJGaWxlRmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEscUNBQW9DO0FBQ3BDLCtCQUEyQztBQUMzQywwREFBc0M7QUFDdEMsZ0NBQW1EO0FBQ25ELDBDQUEwQztBQUUxQyxnREFBNkM7QUErQjdDO0lBQWlDLHVDQUFhO0lBQTlDO1FBQUEscUVBMEhDO1FBOUdDOztXQUVHO1FBQ0ksUUFBRSxHQUFrQixJQUFXLENBQUM7O0lBMkd6QyxDQUFDO0lBekhDOzs7O09BSUc7SUFDSSxrQkFBTSxHQUFiLFVBQWMsRUFBaUI7UUFDN0IsSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBb0IsV0FBSSxDQUFDLENBQUM7UUFDNUQsT0FBTyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDaEIsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQztJQU9EOzs7OztPQUtHO0lBQ0gsaUNBQVcsR0FBWCxVQUFZLElBQXFCO1FBQy9CLElBQU0sUUFBUSxHQUFHLGlCQUFNLFdBQVcsWUFBQyxJQUFJLENBQUMsQ0FBQztRQUN6QyxRQUFRLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUM7UUFDdEIsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCw4QkFBUSxHQUFSLFVBQVMsSUFBYTtRQUNwQixJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQVksQ0FBQyxDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwQixPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRDs7Ozs7OztPQU9HO0lBQ0gsa0NBQVksR0FBWixVQUFhLE1BQWMsRUFBRSxRQUE0QixFQUFFLFlBQWtCLEVBQUUsWUFBa0I7UUFDL0YsSUFBTSxHQUFHLEdBQUcsSUFBSSxP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

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityPartialUpdateBuilder = void 0;
var tslib_1 = __webpack_require__(0);
var PartialUpdateBuilder_1 = __webpack_require__(53);
var message = tslib_1.__importStar(__webpack_require__(2));
var intersection_1 = __webpack_require__(1);
var EntityPartialUpdateBuilder = /** @class */ (function (_super) {
    tslib_1.__extends(EntityPartialUpdateBuilder, _super);
    /**
     * @param entity
     * @param operations
     */
    function EntityPartialUpdateBuilder(entity, operations) {
        var _this = _super.call(this, operations) || this;
        _this.entity = entity;
        return _this;
    }
    /**
     * @inheritDoc
     */
    EntityPartialUpdateBuilder.prototype.execute = function () {
        var _this = this;
        var state = intersection_1.Metadata.get(this.entity);
        var body = JSON.stringify(this);
        var msg = new message.UpdatePartially(state.bucket, state.key, body);
        return state.withLock(function () { return (state.db.send(msg).then(function (response) {
            // Update the entity’s values
            state.type.fromJsonValue(state, response.entity, _this.entity, { persisting: true });
            return _this.entity;
        })); });
    };
    return EntityPartialUpdateBuilder;
}(PartialUpdateBuilder_1.PartialUpdateBuilder));
exports.EntityPartialUpdateBuilder = EntityPartialUpdateBuilder;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRW50aXR5UGFydGlhbFVwZGF0ZUJ1aWxkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJFbnRpdHlQYXJ0aWFsVXBkYXRlQnVpbGRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsK0RBQThEO0FBRTlELDBEQUFzQztBQUV0QyxnREFBMkM7QUFFM0M7SUFBa0Usc0RBQXVCO0lBQ3ZGOzs7T0FHRztJQUNILG9DQUE0QixNQUFTLEVBQUUsVUFBbUI7UUFBMUQsWUFDRSxrQkFBTSxVQUFVLENBQUMsU0FDbEI7UUFGMkIsWUFBTSxHQUFOLE1BQU0sQ0FBRzs7SUFFckMsQ0FBQztJQUVEOztPQUVHO0lBQ0gsNENBQU8sR0FBUDtRQUFBLGlCQVlDO1FBWEMsSUFBTSxLQUFLLEdBQUcsdUJBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3hDLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEMsSUFBTSxHQUFHLEdBQUcsSUFBSSxPQUFPLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLEdBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUV4RSxPQUFPLEtBQUssQ0FBQyxRQUFRLENBQUMsY0FBTSxPQUFBLENBQzFCLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLFFBQVE7WUFDL0IsNkJBQTZCO1lBQzdCLEtBQUssQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsTUFBTSxFQUFFLEtBQUksQ0FBQyxNQUFNLEVBQUUsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztZQUNwRixPQUFPLEtBQUksQ0FBQyxNQUFNLENBQUM7UUFDckIsQ0FBQyxDQUFDLENBQ0gsRUFOMkIsQ0FNM0IsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNILGlDQUFDO0FBQUQsQ0FBQyxBQXpCRCxDQUFrRSwyQ0FBb0IsR0F5QnJGO0FBekJZLGdFQUEwQiJ9

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOperation = void 0;
var UpdateOperation = /** @class */ (function () {
    /**
     * @param name
     * @param path
     * @param [value]
     */
    function UpdateOperation(name, path, value) {
        this.name = name;
        this.path = path;
        this.value = value;
    }
    return UpdateOperation;
}());
exports.UpdateOperation = UpdateOperation;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXBkYXRlT3BlcmF0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiVXBkYXRlT3BlcmF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBO0lBQ0U7Ozs7T0FJRztJQUNILHlCQUFtQixJQUFZLEVBQVMsSUFBWSxFQUFTLEtBQVc7UUFBckQsU0FBSSxHQUFKLElBQUksQ0FBUTtRQUFTLFNBQUksR0FBSixJQUFJLENBQVE7UUFBUyxVQUFLLEdBQUwsS0FBSyxDQUFNO0lBQUcsQ0FBQztJQUM5RSxzQkFBQztBQUFELENBQUMsQUFQRCxJQU9DO0FBUFksMENBQWUifQ==

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Role = void 0;
var tslib_1 = __webpack_require__(0);
var User_1 = __webpack_require__(54);
var Entity_1 = __webpack_require__(30);
var enumerable_1 = __webpack_require__(16);
var Role = /** @class */ (function (_super) {
    tslib_1.__extends(Role, _super);
    function Role() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * A set of users which have this role
         */
        _this.users = null;
        /**
         * The name of the role
         */
        _this.name = null;
        return _this;
    }
    /**
     * Test if the given user has this role
     * @param user The user to check
     * @return <code>true</code> if the given user has this role,
     * otherwise <code>false</code>
     */
    Role.prototype.hasUser = function (user) {
        return !!this.users && this.users.has(user);
    };
    /**
     * Add the given user to this role
     * @param user The user to add
     */
    Role.prototype.addUser = function (user) {
        if (user instanceof User_1.User) {
            if (!this.users) {
                this.users = new Set();
            }
            this.users.add(user);
        }
        else {
            throw new Error('Only user instances can be added to a role.');
        }
    };
    /**
     * Remove the given user from this role
     * @param user The user to remove
     */
    Role.prototype.removeUser = function (user) {
        if (user instanceof User_1.User) {
            if (this.users) {
                this.users.delete(user);
            }
        }
        else {
            throw new Error('Only user instances can be removed from a role.');
        }
    };
    tslib_1.__decorate([
        enumerable_1.enumerable(false)
    ], Role.prototype, "hasUser", null);
    tslib_1.__decorate([
        enumerable_1.enumerable(false)
    ], Role.prototype, "addUser", null);
    tslib_1.__decorate([
        enumerable_1.enumerable(false)
    ], Role.prototype, "removeUser", null);
    return Role;
}(Entity_1.Entity));
exports.Role = Role;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUm9sZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlJvbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLCtCQUE4QjtBQUM5QixtQ0FBa0M7QUFDbEMsaURBQWdEO0FBRWhEO0lBQTBCLGdDQUFNO0lBQWhDO1FBQUEscUVBcURDO1FBcERDOztXQUVHO1FBQ0ksV0FBSyxHQUEyQixJQUFJLENBQUM7UUFFNUM7O1dBRUc7UUFDSSxVQUFJLEdBQWtCLElBQUksQ0FBQzs7SUE0Q3BDLENBQUM7SUExQ0M7Ozs7O09BS0c7SUFFSCxzQkFBTyxHQUFQLFVBQVEsSUFBZ0I7UUFDdEIsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBRUQ7OztPQUdHO0lBRUgsc0JBQU8sR0FBUCxVQUFRLElBQWdCO1FBQ3RCLElBQUksSUFBSSxZQUFZLFdBQUksRUFBRTtZQUN4QixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRTtnQkFDZixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksR0FBRyxFQUFFLENBQUM7YUFDeEI7WUFFRCxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN0QjthQUFNO1lBQ0wsTUFBTSxJQUFJLEtBQUssQ0FBQyw2Q0FBNkMsQ0FBQyxDQUFDO1NBQ2hFO0lBQ0gsQ0FBQztJQUVEOzs7T0FHRztJQUVILHlCQUFVLEdBQVYsVUFBVyxJQUFnQjtRQUN6QixJQUFJLElBQUksWUFBWSxXQUFJLEVBQUU7WUFDeEIsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO2dCQUNkLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ3pCO1NBQ0Y7YUFBTTtZQUNMLE1BQU0sSUFBSSxLQUFLLENBQUMsaURBQWlELENBQUMsQ0FBQztTQUNwRTtJQUNILENBQUM7SUFsQ0Q7UUFEQyx1QkFBVSxDQUFDLEtBQUssQ0FBQzt1Q0FHakI7SUFPRDtRQURDLHVCQUFVLENBQUMsS0FBSyxDQUFDO3VDQVdqQjtJQU9EO1FBREMsdUJBQVUsQ0FBQyxLQUFLLENBQUM7MENBU2pCO0lBQ0gsV0FBQztDQUFBLEFBckRELENBQTBCLGVBQU0sR0FxRC9CO0FBckRZLG9CQUFJIn0=

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable no-bitwise,default-case,no-fallthrough */
Object.defineProperty(exports, "__esModule", { value: true });
exports.BloomFilter = void 0;
var util_1 = __webpack_require__(3);
/**
 * A Bloom Filter is a client-side kept cache sketch of the server cache
 */
var BloomFilter = /** @class */ (function () {
    /**
     * @param bloomFilter The raw Bloom filter.
     * @param bloomFilter.m The raw Bloom filter bits.
     * @param bloomFilter.h The raw Bloom filter hashes.
     * @param bloomFilter.b The Base64-encoded raw Bloom filter bytes.
     */
    function BloomFilter(bloomFilter) {
        this.bytes = util_1.atob(bloomFilter.b);
        this.bits = bloomFilter.m;
        this.hashes = bloomFilter.h;
        this.creation = Date.now();
    }
    /**
     * Returns whether this Bloom filter contains the given element.
     *
     * @param element The element to check if it is contained.
     * @return True, if the element is contained in this Bloom filter.
     */
    BloomFilter.prototype.contains = function (element) {
        var hashes = BloomFilter.getHashes(element, this.bits, this.hashes);
        for (var i = 0, len = hashes.length; i < len; i += 1) {
            if (!this.isSet(hashes[i])) {
                return false;
            }
        }
        return true;
    };
    /**
     * Checks whether a bit is set at a given position.
     *
     * @param index The position index to check.
     * @return True, if the bit is set at the given position.
     */
    BloomFilter.prototype.isSet = function (index) {
        var pos = Math.floor(index / 8);
        var bit = 1 << (index % 8);
        // Extract byte as int or NaN if out of range
        var byte = this.bytes.charCodeAt(pos);
        // Bit-wise AND should be non-zero (NaN always yields false)
        return (byte & bit) !== 0;
    };
    /**
     * Returns the hases of a given element in the Bloom filter.
     *
     * @param element The element to check.
     * @param bits The amount of bits.
     * @param hashes The amount of hashes.
     * @return The hashes of an element in the Bloom filter.
     */
    BloomFilter.getHashes = function (element, bits, hashes) {
        var hashValues = new Array(hashes);
        var hash1 = BloomFilter.murmur3(0, element);
        var hash2 = BloomFilter.murmur3(hash1, element);
        for (var i = 0; i < hashes; i += 1) {
            hashValues[i] = (hash1 + (i * hash2)) % bits;
        }
        return hashValues;
    };
    /**
     * Calculate a Murmur3 hash.
     *
     * @param seed A seed to use for the hashing.
     * @param key A key to check.
     * @return A hashed value of key.
     */
    BloomFilter.murmur3 = function (seed, key) {
        var remainder = key.length & 3;
        var bytes = key.length - remainder;
        var c1 = 0xcc9e2d51;
        var c2 = 0x1b873593;
        var h1;
        var h1b;
        var k1;
        var i;
        h1 = seed;
        i = 0;
        while (i < bytes) {
            k1 = ((key.charCodeAt(i) & 0xff))
                | ((key.charCodeAt(i += 1) & 0xff) << 8)
                | ((key.charCodeAt(i += 1) & 0xff) << 16)
                | ((key.charCodeAt(i += 1) & 0xff) << 24);
            i += 1;
            k1 = ((((k1 & 0xffff) * c1) + ((((k1 >>> 16) * c1) & 0xffff) << 16))) & 0xffffffff;
            k1 = (k1 << 15) | (k1 >>> 17);
            k1 = ((((k1 & 0xffff) * c2) + ((((k1 >>> 16) * c2) & 0xffff) << 16))) & 0xffffffff;
            h1 ^= k1;
            h1 = (h1 << 13) | (h1 >>> 19);
            h1b = ((((h1 & 0xffff) * 5) + ((((h1 >>> 16) * 5) & 0xffff) << 16))) & 0xffffffff;
            h1 = (((h1b & 0xffff) + 0x6b64) + ((((h1b >>> 16) + 0xe654) & 0xffff) << 16));
        }
        k1 = 0;
        switch (remainder) {
            case 3:
                k1 ^= (key.charCodeAt(i + 2) & 0xff) << 16;
            case 2:
                k1 ^= (key.charCodeAt(i + 1) & 0xff) << 8;
            case 1:
                k1 ^= (key.charCodeAt(i) & 0xff);
                k1 = (((k1 & 0xffff) * c1) + ((((k1 >>> 16) * c1) & 0xffff) << 16)) & 0xffffffff;
                k1 = (k1 << 15) | (k1 >>> 17);
                k1 = (((k1 & 0xffff) * c2) + ((((k1 >>> 16) * c2) & 0xffff) << 16)) & 0xffffffff;
                h1 ^= k1;
        }
        h1 ^= key.length;
        h1 ^= h1 >>> 16;
        h1 = (((h1 & 0xffff) * 0x85ebca6b) + ((((h1 >>> 16) * 0x85ebca6b) & 0xffff) << 16)) & 0xffffffff;
        h1 ^= h1 >>> 13;
        h1 = ((((h1 & 0xffff) * 0xc2b2ae35) + ((((h1 >>> 16) * 0xc2b2ae35) & 0xffff) << 16))) & 0xffffffff;
        h1 ^= h1 >>> 16;
        return h1 >>> 0;
    };
    return BloomFilter;
}());
exports.BloomFilter = BloomFilter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmxvb21GaWx0ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJCbG9vbUZpbHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsMkRBQTJEOzs7QUFFM0QsZ0NBQStCO0FBRS9COztHQUVHO0FBQ0g7SUE2QkU7Ozs7O09BS0c7SUFDSCxxQkFBWSxXQUFnRDtRQUMxRCxJQUFJLENBQUMsS0FBSyxHQUFHLFdBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLElBQUksR0FBRyxXQUFXLENBQUMsQ0FBQyxDQUFDO1FBQzFCLElBQUksQ0FBQyxNQUFNLEdBQUcsV0FBVyxDQUFDLENBQUMsQ0FBQztRQUM1QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCw4QkFBUSxHQUFSLFVBQVMsT0FBZTtRQUN0QixJQUFNLE1BQU0sR0FBRyxXQUFXLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN0RSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLEdBQUcsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDcEQsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQzFCLE9BQU8sS0FBSyxDQUFDO2FBQ2Q7U0FDRjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0ssMkJBQUssR0FBYixVQUFjLEtBQWE7UUFDekIsSUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDbEMsSUFBTSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzdCLDZDQUE2QztRQUM3QyxJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN4Qyw0REFBNEQ7UUFDNUQsT0FBTyxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVEOzs7Ozs7O09BT0c7SUFDWSxxQkFBUyxHQUF4QixVQUF5QixPQUFlLEVBQUUsSUFBWSxFQUFFLE1BQWM7UUFDcEUsSUFBTSxVQUFVLEdBQUcsSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDckMsSUFBTSxLQUFLLEdBQUcsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDOUMsSUFBTSxLQUFLLEdBQUcsV0FBVyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDbEQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ2xDLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQztTQUM5QztRQUNELE9BQU8sVUFBVSxDQUFDO0lBQ3BCLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDWSxtQkFBTyxHQUF0QixVQUF1QixJQUFZLEVBQUUsR0FBVztRQUM5QyxJQUFNLFNBQVMsR0FBRyxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUNqQyxJQUFNLEtBQUssR0FBRyxHQUFHLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQztRQUNyQyxJQUFNLEVBQUUsR0FBRyxVQUFVLENBQUM7UUFDdEIsSUFBTSxFQUFFLEdBQUcsVUFBVSxDQUFDO1FBQ3RCLElBQUksRUFBRSxDQUFDO1FBQ1AsSUFBSSxHQUFHLENBQUM7UUFDUixJQUFJLEVBQUUsQ0FBQztRQUNQLElBQUksQ0FBQyxDQUFDO1FBQ04sRUFBRSxHQUFHLElBQUksQ0FBQztRQUNWLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFTixPQUFPLENBQUMsR0FBRyxLQUFLLEVBQUU7WUFDaEIsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO2tCQUMzQixDQUFDLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2tCQUN0QyxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO2tCQUN2QyxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7WUFDOUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUVQLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsVUFBVSxDQUFDO1lBQ25GLEVBQUUsR0FBRyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztZQUM5QixFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDLElBQUksRUFB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

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Builder = void 0;
var tslib_1 = __webpack_require__(0);
var Filter_1 = __webpack_require__(55);
var Condition_1 = __webpack_require__(35);
var Operator_1 = __webpack_require__(57);
var Query_1 = __webpack_require__(18);
var Node_1 = __webpack_require__(17);
var Builder = /** @class */ (function (_super) {
    tslib_1.__extends(Builder, _super);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQnVpbGRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkJ1aWxkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLG1DQUFrQztBQUNsQyx5Q0FBd0M7QUFDeEMsdUNBQXNDO0FBQ3RDLGlDQVFpQjtBQUVqQiwrQkFBOEI7QUFPOUI7SUFBK0MsbUNBQVE7SUFBdkQ7O0lBdUdBLENBQUM7SUF0R0M7Ozs7T0FJRztJQUNILHFCQUFHLEdBQUg7UUFBSSxjQUFxQzthQUFyQyxVQUFxQyxFQUFyQyxxQkFBcUMsRUFBckMsSUFBcUM7WUFBckMseUJBQXFDOztRQUN2QyxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLGdCQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILG9CQUFFLEdBQUY7UUFBRyxjQUFxQzthQUFyQyxVQUFxQyxFQUFyQyxxQkFBcUMsRUFBckMsSUFBcUM7WUFBckMseUJBQXFDOztRQUN0QyxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLGdCQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILHFCQUFHLEdBQUg7UUFBSSxjQUFxQzthQUFyQyxVQUFxQyxFQUFyQyxxQkFBcUMsRUFBckMsSUFBcUM7WUFBckMseUJBQXFDOztRQUN2QyxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLGdCQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBUUQsNkJBQVcsR0FBWCxVQUFZLE9BQW1ELEVBQUUsTUFBNEMsRUFDM0csT0FBeUMsRUFDekMsVUFBNkI7UUFDN0IsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxVQUFVLENBQUMsQ0FBQztJQUMxRSxDQUFDO0lB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

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Metamodel = void 0;
var tslib_1 = __webpack_require__(0);
var ManagedType_1 = __webpack_require__(19);
var EntityType_1 = __webpack_require__(36);
var binding_1 = __webpack_require__(5);
var ModelBuilder_1 = __webpack_require__(58);
var DbIndex_1 = __webpack_require__(63);
var util_1 = __webpack_require__(3);
var connector_1 = __webpack_require__(6);
var message = tslib_1.__importStar(__webpack_require__(2));
var Metamodel = /** @class */ (function (_super) {
    tslib_1.__extends(Metamodel, _super);
    /**
     * Constructs a new metamodel instance which represents the complete schema of one baqend app
     * @param entityManagerFactory
     */
    function Metamodel(entityManagerFactory) {
        var _this = _super.call(this) || this;
        /**
         * Defines if the Metamodel has been finalized
         */
        _this.isInitialized = false;
        _this.entities = {};
        _this.embeddables = {};
        _this.baseTypes = {};
        _this.enhancer = new binding_1.Enhancer();
        _this.entityManagerFactory = entityManagerFactory;
        return _this;
    }
    /**
     * Prepare the Metamodel for custom schema creation
     * @param jsonMetamodel initialize the metamodel with the serialized json schema
     * @return
     */
    Metamodel.prototype.init = function (jsonMetamodel) {
        if (this.isInitialized) {
            throw new Error('Metamodel is already initialized.');
        }
        this.fromJSON(jsonMetamodel || []);
        this.isInitialized = true;
    };
    /**
     * @param arg
     * @return
     */
    Metamodel.prototype.getRef = function (arg) {
        var ref;
        if (typeof arg === 'string') {
            ref = arg;
            if (ref.indexOf('/db/') !== 0) {
                ref = "/db/" + arg;
            }
        }
        else {
            ref = binding_1.Enhancer.getIdentifier(arg);
        }
        return ref;
    };
    /**
     * Return the metamodel entity type representing the entity.
     *
     * @param typeConstructor - the type of the represented entity
     * @return the metamodel entity type or null if the class is not a managed entity
     */
    Metamodel.prototype.entity = function (typeConstructor) {
        var ref = this.getRef(typeConstructor);
        return ref ? this.entities[ref] : null;
    };
    /**
     * Return the metamodel basic type representing the native class.
     * @param typeConstructor - the type of the represented native class
     * @return the metamodel basic type
     */
    Metamodel.prototype.baseType = function (typeConstructor) {
        var ref = null;
        if (typeof typeConstructor === 'string') {
            ref = this.getRef(typeConstructor);
        }
        else {
            var baseTypesNames = Object.keys(this.baseTypes);
            for (var i = 0, len = baseTypesNames.length; i < len; i += 1) {
                var name_1 = baseTypesNames[i];
                var type = this.baseTypes[name_1];
                if (!type.noResolving && type.typeConstructor === typeConstructor) {
                    ref = name_1;
                    break;
                }
            }
        }
        return ref ? this.baseTypes[ref] : null;
    };
    /**
     * Return the metamodel embeddable type representing the embeddable class.
     * @param typeConstructor - the type of the represented embeddable class
     * @return the metamodel embeddable type or null if the class is not a managed embeddable
     */
    Metamodel.prototype.embeddable = function (typeConstructor) {
        var ref = this.getRef(typeConstructor);
        return ref ? this.embeddables[ref] : null;
    };
    /**
     * Return the metamodel managed type representing the entity, mapped superclass, or embeddable class.
     *
     * @param typeConstructor - the type of the represented managed class
     * @return the metamodel managed type
     */
    Metamodel.prototype.managedType = function (typeConstructor) {
        return this.entity(typeConstructor) || this.embeddable(typeConstructor);
    };
    /**
     * @param type
     * @return the added type
     */
    Metamodel.prototype.addType = function (type) {
        var types = {};
        if (type.isBasic) {
            types = this.baseTypes;
        }
        else if (type.isEmbeddable) {
            type.init(this.enhancer);
            types = this.embeddables;
        }
        else if (type.isEntity) {
            var entityType = type;
            entityType.init(this.enhancer);
            types = this.entities;
            if (entityType.superType === null && entityType.ref !== EntityType_1.EntityType.Object.ref) {
                entityType.superType = this.entity(EntityType_1.EntityType.Object.ref);
            }
        }
        if (types[type.ref]) {
            throw new Error("The type " + type.ref + " is already declared.");
        }
        types[type.ref] = type;
        return type;
    };
    /**
     * Load all schema data from the server
     * @return
     */
    Metamodel.prototype.load = function () {
        var _this = this;
        if (!this.isInitialized) {
            return this.withLock(function () {
                var msg = new message.GetAllSchemas();
                return _this.entityManagerFactory.send(msg).then(function (response) {
                    _this.init(response.entity);
                    return _this;
                });
            });
        }
        throw new Error('Metamodel is already initialized.');
    };
    /**
     * Store all local schema data on the server, or the provided one
     *
     * Note: The schema must be initialized, by init or load
     *
     * @param managedType The specific type to persist, if omitted the complete schema
     * will be updated
     * @return
     */
    Metamodel.prototype.save = function (managedType) {
        var _this = this;
        return this.sendUpdate(managedType || this.toJSON()).then(function () { return _this; });
    };
    /**
     * Update the metamodel with the schema
     *
     * The provided data object will be forwarded to the UpdateAllSchemas resource.
     * The underlying schema of this Metamodel object will be replaced by the result.
     *
     * @param data The JSON which will be send to the UpdateAllSchemas resource.
     * @return
     */
    Metamodel.prototype.update = function (data) {
        var _this = this;
        return this.sendUpdate(data).then(function (response) {
            _this.fromJSON(response.entity);
            return _this;
        });
    };
    Metamodel.prototype.sendUpdate = function (data) {
        var _this = this;
        return this.withLock(function () {
            var msg;
            if (data instanceof ManagedType_1.ManagedType) {
                msg = new message.UpdateSchema(data.name, data.toJSON());
            }
            else {
                msg = new message.UpdateAllSchemas(data);
            }
            return _this.entityManagerFactory.send(msg);
        });
    };
    /**
     * Get the current schema types as json
     * @return the json data
     */
    Metamodel.prototype.toJSON = function () {
        var _this = this;
        if (!this.isInitialized) {
            throw new Error('Metamodel is not initialized.');
        }
        return [].concat(Object.keys(this.entities).map(function (ref) { return _this.entities[ref].toJSON(); }), Object.keys(this.embeddables).map(function (ref) { return _this.embeddables[ref].toJSON(); }));
    };
    /**
     * Replace the current schema by the provided one in json
     * @param json The json schema data
     * @return
     */
    Metamodel.prototype.fromJSON = function (json) {
        var _this = this;
        var builder = new ModelBuilder_1.ModelBuilder();
        var models = builder.buildModels(json);
        this.baseTypes = {};
        this.embeddables = {};
        this.entities = {};
        Object.keys(models).forEach(function (ref) { return _this.addType(models[ref]); });
    };
    /**
     * Creates an index
     *
     * @param bucket Name of the Bucket
     * @param index Will be applied for the given bucket
     * @return
     */
    Metamodel.prototype.createIndex = function (bucket, index) {
        var msg = new message.CreateDropIndex(bucket, tslib_1.__assign(tslib_1.__assign({}, index.toJSON()), { drop: false }));
        return this.entityManagerFactory.send(msg);
    };
    /**
     * Drops an index
     *
     * @param bucket Name of the Bucket
     * @param index Will be dropped for the given bucket
     * @return
     */
    Metamodel.prototype.dropIndex = function (bucket, index) {
        var msg = new message.CreateDropIndex(bucket, tslib_1.__assign(tslib_1.__assign({}, index.toJSON()), { drop: true }));
        return this.entityManagerFactory.send(msg);
    };
    /**
     * Drops all indexes
     *
     * @param bucket Indexes will be dropped for the given bucket
     * @return
     */
    Metamodel.prototype.dropAllIndexes = function (bucket) {
        var msg = new message.DropAllIndexes(bucket);
        return this.entityManagerFactory.send(msg);
    };
    /**
     * Loads all indexes for the given bucket
     *
     * @param bucket Current indexes will be loaded for the given bucket
     * @return
     */
    Metamodel.prototype.getIndexes = function (bucket) {
        var msg = new message.ListIndexes(bucket);
        return this.entityManagerFactory.send(msg)
            .then(function (response) { return response.entity.map(function (el) { return new DbIndex_1.DbIndex(el.keys, el.unique); }); })
            .catch(function (e) {
            if (e.status === connector_1.StatusCode.BUCKET_NOT_FOUND || e.status === connector_1.StatusCode.OBJECT_NOT_FOUND) {
                return null;
            }
            throw e;
        });
    };
    return Metamodel;
}(util_1.Lockable));
exports.Metamodel = Metamodel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWV0YW1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiTWV0YW1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSw2Q0FBNEM7QUFDNUMsMkNBQTBDO0FBQzFDLHNDQUErQztBQUMvQywrQ0FBOEM7QUFDOUMscUNBQW9DO0FBQ3BDLGdDQUVpQjtBQUNqQiwwQ0FBMEM7QUFDMUMsMERBQXNDO0FBTXRDO0lBQStCLHFDQUFRO0lBZ0JyQzs7O09BR0c7SUFDSCxtQkFBWSxvQkFBMEM7UUFBdEQsWUFDRSxpQkFBTyxTQUVSO1FBdEJEOztXQUVHO1FBQ0ksbUJBQWEsR0FBWSxLQUFLLENBQUM7UUFJL0IsY0FBUSxHQUF3QyxFQUFFLENBQUM7UUFFbkQsaUJBQVcsR0FBNEMsRUFBRSxDQUFDO1FBRTFELGVBQVMsR0FBdUMsRUFBRSxDQUFDO1FBRW5ELGNBQVEsR0FBYSxJQUFJLGtCQUFRLEVBQUUsQ0FBQztRQVF6QyxLQUFJLENBQUMsb0JBQW9CLEdBQUcsb0JBQW9CLENBQUM7O0lBQ25ELENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsd0JBQUksR0FBSixVQUFLLGFBQXVCO1FBQzFCLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUN0QixNQUFNLElBQUksS0FBSyxDQUFDLG1DQUFtQyxDQUFDLENBQUM7U0FDdEQ7UUFFRCxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUNuQyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztJQUM1QixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsMEJBQU0sR0FBTixVQUFPLEdBQXVDO1FBQzVDLElBQUksR0FBRyxDQUFDO1FBQ1IsSUFBSSxPQUFPLEdBQUcsS0FBSyxRQUFRLEVBQUU7WUFDM0IsR0FBRyxHQUFHLEdBQUcsQ0FBQztZQUVWLElBQUksR0FBRyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQzdCLEdBQUcsR0FBRyxT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

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.CollectionAttribute = void 0;
var tslib_1 = __webpack_require__(0);
var PluralAttribute_1 = __webpack_require__(11);
var CollectionAttribute = /** @class */ (function (_super) {
    tslib_1.__extends(CollectionAttribute, _super);
    /**
     * @param name - the name of the attribute
     * @param typeConstructor - The collection constructor of the attribute
     * @param elementType - The element type of the collection
     */
    function CollectionAttribute(name, typeConstructor, elementType) {
        var _this = _super.call(this, name, typeConstructor, elementType) || this;
        _this = _super.call(this, name, typeConstructor, elementType) || this;
        return _this;
    }
    Object.defineProperty(CollectionAttribute.prototype, "collectionType", {
        /**
         * @inheritDoc
         */
        get: function () {
            return PluralAttribute_1.CollectionType.COLLECTION;
        },
        enumerable: false,
        configurable: true
    });
    return CollectionAttribute;
}(PluralAttribute_1.PluralAttribute));
exports.CollectionAttribute = CollectionAttribute;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29sbGVjdGlvbkF0dHJpYnV0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkNvbGxlY3Rpb25BdHRyaWJ1dGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLHFEQUFvRTtBQUlwRTtJQUF3RCwrQ0FBcUI7SUFRM0U7Ozs7T0FJRztJQUNILDZCQUFzQixJQUFZLEVBQUUsZUFBeUIsRUFBRSxXQUFvQjtRQUFuRixZQUNFLGtCQUFNLElBQUksRUFBRSxlQUFlLEVBQUUsV0FBVyxDQUFDLFNBRTFDO1FBREMsUUFBQSxrQkFBTSxJQUFJLEVBQUUsZUFBZSxFQUFFLFdBQVcsQ0FBQyxTQUFDOztJQUM1QyxDQUFDO0lBWkQsc0JBQUksK0NBQWM7UUFIbEI7O1dBRUc7YUFDSDtZQUNFLE9BQU8sZ0NBQWMsQ0FBQyxVQUFVLENBQUM7UUFDbkMsQ0FBQzs7O09BQUE7SUFXSCwwQkFBQztBQUFELENBQUMsQUFqQkQsQ0FBd0QsaUNBQWUsR0FpQnRFO0FBakJxQixrREFBbUIifQ==

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIn0=

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.connect = exports.configure = void 0;
var tslib_1 = __webpack_require__(0);
var binding = tslib_1.__importStar(__webpack_require__(5));
var connector = tslib_1.__importStar(__webpack_require__(6));
var error = tslib_1.__importStar(__webpack_require__(4));
var message = tslib_1.__importStar(__webpack_require__(2));
var util = tslib_1.__importStar(__webpack_require__(3));
var caching = tslib_1.__importStar(__webpack_require__(32));
var query = tslib_1.__importStar(__webpack_require__(34));
var partialupdate = tslib_1.__importStar(__webpack_require__(31));
var intersection = tslib_1.__importStar(__webpack_require__(1));
var metamodel = tslib_1.__importStar(__webpack_require__(13));
var intersection_1 = __webpack_require__(1);
var metamodel_1 = __webpack_require__(13);
var EntityManagerFactory_1 = __webpack_require__(23);
var EntityManager_1 = __webpack_require__(24);
var Acl_1 = __webpack_require__(15);
var baqend_1 = __webpack_require__(14);
var util_1 = __webpack_require__(3);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVwZXJlY2F0ZWQtZXhwb3J0cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRlcGVyZWNhdGVkLWV4cG9ydHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLHlEQUFxQztBQUNyQyw2REFBeUM7QUFDekMscURBQWlDO0FBQ2pDLHlEQUFxQztBQUNyQyxtREFBK0I7QUFDL0IseURBQXFDO0FBQ3JDLHFEQUFpQztBQUNqQyxxRUFBaUQ7QUFDakQsbUVBQStDO0FBQy9DLDZEQUF5QztBQUV6QywrQ0FFd0I7QUFDeEIseUNBQXdDO0FBQ3hDLCtEQUE4RDtBQUM5RCxpREFBZ0Q7QUFDaEQsNkJBQTRCO0FBRTVCLG1DQUE4QjtBQUM5QiwrQkFBb0M7QUFFcEMsU0FBUyxnQkFBZ0IsQ0FBQyxNQUFjLEVBQUUsVUFBa0IsRUFBRSxrQkFBMEIsRUFBRSxPQUV6RjtJQUNDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUMsUUFBUTtRQUNwQyxJQUFNLFFBQVEsR0FBRyxpQkFBVSxDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUM3RSxNQUFNLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDLFVBQVUsRUFBRSxRQUFRLEVBQUU7WUFDckUsR0FBRyxFQUFIO2dCQUNFLE9BQVEsT0FBZSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3BDLENBQUM7U0FDRixDQUFDLENBQUMsQ0FBQztJQUNOLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQztBQUVELGdCQUFnQixDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsc0JBQXNCLEVBQUU7SUFDckQsVUFBVSwyQkFBQSxFQUFFLFFBQVEseUJBQUEsRUFBRSxZQUFZLDZCQUFBLEVBQUUsU0FBUywwQkFBQSxFQUFFLFdBQVcsNEJBQUEsRUFBRSxJQUFJLHFCQUFBLEVBQUUsT0FBTyx3QkFBQSxFQUFFLE1BQU0sdUJBQUE7Q0FDbEYsQ0FBQyxDQUFDO0FBRUgsZ0JBQWdCLENBQUMsNkJBQWEsQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLG9DQUFvQyxFQUFFO0lBQ3BGLEVBQUUsYUFBQTtJQUNGLE9BQU8sU0FBQTtJQUNQLFNBQVMsV0FBQTtJQUNULEtBQUssT0FBQTtJQUNMLE9BQU8sU0FBQTtJQUNQLElBQUksTUFBQTtJQUNKLE9BQU8sU0FBQTtJQUNQLEtBQUssT0FBQTtJQUNMLGFBQWEsZUFBQTtJQUNiLFlBQVksY0FBQTtJQUVaLG9CQUFvQiw2Q0FBQTtJQUNwQixhQUFhLCtCQUFBO0lBQ2IsR0FBRyxXQUFBO0NBQ0osQ0FBQyxDQUFDO0FBRUgsZ0JBQWdCLENBQUMscUJBQVMsQ0FBQyxTQUFTLEVBQUUsV0FBVyxFQUFFLHVDQUF1QyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0FBRXZHLFNBQWdCLFNBQVM7SUFDdkIsTUFBTSxJQUFJLEtBQUssQ0FBQyw0RUFBNEUsQ0FBQyxDQUFDO0FBQ2hHLENBQUM7QUFGRCw4QkFFQztBQUVELFNBQWdCLE9BQU87SUFDckIsTUFBTSxJQUFJLEtBQUssQ0FBQywwRUFBMEUsQ0FBQyxDQUFDO0FBQzlGLENBQUM7QUFGRCwwQkFFQyJ9

/***/ })
/******/ ]);
});
//# sourceMappingURL=baqend.es5.js.map
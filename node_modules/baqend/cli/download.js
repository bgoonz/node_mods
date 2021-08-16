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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.download = void 0;
/* eslint-disable no-console,@typescript-eslint/no-use-before-define */
const path_1 = __importDefault(require("path"));
const account = __importStar(require("./account"));
const helper_1 = require("./helper");
function download(args) {
    return account.login(args).then((db) => {
        const promises = [];
        if (args.code) {
            promises.push(downloadCode(db, args.codeDir));
        }
        return Promise.all(promises);
    });
}
exports.download = download;
/**
 * Download all Baqend code.
 *
 * @param db The entity manager to use.
 * @param codePath The path where code should be downloaded to.
 * @return Resolves when downloading has been finished.
 */
function downloadCode(db, codePath) {
    return helper_1.ensureDir(codePath)
        .then(() => db.code.loadModules())
        .then((modules) => Promise.all(modules.map((module) => downloadCodeModule(db, module, codePath))));
}
/**
 * Downloads a single code module.
 *
 * @param {EntityManager} db The entity manager to use.
 * @param {string} module The module to download.
 * @param {string} codePath The path where code should be downloaded to.
 * @return {Promise<void>} Resolves when downloading has been finished.
 */
function downloadCodeModule(db, module, codePath) {
    const moduleName = module.replace(/^\/code\//, '').replace(/\/module$/, '');
    const fileName = `${moduleName}.js`;
    const filePath = path_1.default.join(codePath, fileName);
    return db.code.loadCode(moduleName, 'module', false)
        .then((file) => helper_1.writeFile(filePath, file, 'utf-8'))
        .then(() => console.log(`Module ${moduleName} downloaded.`));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG93bmxvYWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkb3dubG9hZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdUVBQXVFO0FBQ3ZFLGdEQUF3QjtBQUV4QixtREFBcUM7QUFFckMscUNBRWtCO0FBT2xCLFNBQWdCLFFBQVEsQ0FBQyxJQUFnQztJQUN2RCxPQUFPLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUU7UUFDckMsTUFBTSxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtZQUNiLFFBQVEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztTQUMvQztRQUNELE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMvQixDQUFDLENBQUMsQ0FBQztBQUNMLENBQUM7QUFSRCw0QkFRQztBQUVEOzs7Ozs7R0FNRztBQUNILFNBQVMsWUFBWSxDQUFDLEVBQWlCLEVBQUUsUUFBZ0I7SUFDdkQsT0FBTyxrQkFBUyxDQUFDLFFBQVEsQ0FBQztTQUN2QixJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUNqQyxJQUFJLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsa0JBQWtCLENBQUMsRUFBRSxFQUFFLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN2RyxDQUFDO0FBRUQ7Ozs7Ozs7R0FPRztBQUNILFNBQVMsa0JBQWtCLENBQUMsRUFBaUIsRUFBRSxNQUFjLEVBQUUsUUFBZ0I7SUFDN0UsTUFBTSxVQUFVLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUM1RSxNQUFNLFFBQVEsR0FBRyxHQUFHLFVBQVUsS0FBSyxDQUFDO0lBQ3BDLE1BQU0sUUFBUSxHQUFHLGNBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBRS9DLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLFFBQVEsRUFBRSxLQUFLLENBQUM7U0FDakQsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxrQkFBUyxDQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7U0FDbEQsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxVQUFVLGNBQWMsQ0FBQyxDQUFDLENBQUM7QUFDakUsQ0FBQyJ9
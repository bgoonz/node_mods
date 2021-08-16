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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deploy = void 0;
/* eslint-disable no-await-in-loop, no-return-await, @typescript-eslint/return-await */
const fs_1 = __importDefault(require("fs"));
const glob_1 = __importDefault(require("glob"));
const path_1 = require("path");
const readline_1 = __importDefault(require("readline"));
const account = __importStar(require("./account"));
const schema_1 = require("./schema");
const helper_1 = require("./helper");
const handlerTypes = ['update', 'insert', 'delete', 'validate'];
function deploy(args) {
    return account.login(args).then((db) => {
        const promises = [];
        if ((!args.code && !args.files) || (args.code && args.files)) {
            promises.push(deployFiles(db, args.bucketPath, args.fileDir, args.fileGlob));
            promises.push(deployCode(db, args.codeDir));
        }
        else if (args.code) {
            promises.push(deployCode(db, args.codeDir));
        }
        else if (args.files) {
            promises.push(deployFiles(db, args.bucketPath, args.fileDir, args.fileGlob));
        }
        if (args.schema) {
            promises.push(schema_1.uploadSchema(db));
        }
        return Promise.all(promises);
    });
}
exports.deploy = deploy;
function deployFiles(db, path, cwd, pattern) {
    let normalizedPath = path;
    while (normalizedPath.length && normalizedPath.charAt(0) === '/')
        normalizedPath = normalizedPath.substring(1);
    while (normalizedPath.length && normalizedPath.charAt(normalizedPath.length - 1) === '/')
        normalizedPath = normalizedPath.substring(0, normalizedPath.length - 1);
    if (!normalizedPath.length) {
        console.error(`Invalid bucket-path ${normalizedPath}`);
        return Promise.resolve();
    }
    return new Promise((resolve, reject) => {
        glob_1.default(pattern, { nodir: true, cwd }, (er, files) => {
            if (er)
                reject(er);
            else
                resolve(files);
        });
    })
        .then((files) => uploadFiles(db, normalizedPath, files, cwd))
        .then((result) => {
        if (result && result.length > 0) {
            console.log('File deployment completed.');
        }
        else {
            console.warn('Your specified upload folder is empty, no files were uploaded.');
        }
    });
}
function deployCode(db, codePath) {
    return helper_1.readDir(codePath)
        .catch(() => {
        throw new Error(`Your specified backend code folder ${codePath} is empty, no backend code was deployed.`);
    })
        .then((fileNames) => Promise.all(fileNames
        .map((fileName) => helper_1.stat(path_1.join(codePath, fileName))
        .then((st) => {
        if (st.isDirectory()) {
            return uploadHandler(db, fileName, codePath);
        }
        return uploadCode(db, fileName, codePath);
    })))
        .then(() => {
        console.log('Code deployment completed.');
    })
        .catch((e) => {
        throw new Error(`Failed to deploy code: ${e.message}`);
    }));
}
function uploadHandler(db, directoryName, codePath) {
    const bucket = directoryName;
    if (!db[bucket])
        return Promise.resolve();
    return helper_1.readDir(path_1.join(codePath, directoryName)).then((fileNames) => Promise.all(fileNames
        .filter((fileName) => !fileName.startsWith('.'))
        .map((fileName) => {
        const handlerType = fileName.replace(/\.(js|es\d*)$/, '');
        if (handlerTypes.indexOf(handlerType) === -1)
            return Promise.resolve();
        return helper_1.readFile(path_1.join(codePath, directoryName, fileName), 'utf-8')
            .then((file) => db.code.saveCode(bucket, handlerType, file))
            .then(() => console.log(`${handlerType} handler for ${bucket} deployed.`));
    })));
}
function uploadCode(db, name, codePath) {
    if (name.startsWith('.'))
        return Promise.resolve();
    const moduleName = name.replace(/\.(js|es\d*)$/, '');
    return helper_1.readFile(path_1.join(codePath, name), 'utf-8').then((file) => db.code.saveCode(moduleName, 'module', file)).then(() => {
        console.log(`Module ${moduleName} deployed.`);
    });
}
function uploadFiles(db, bucket, files, cwd) {
    const isTty = process.stdout.isTTY;
    let index = 0;
    const uploads = [];
    for (let i = 0; i < 10 && i < files.length; i += 1) {
        uploads.push(upload());
    }
    if (!isTty) {
        console.log(`Uploading ${files.length} files.`);
    }
    return Promise.all(uploads);
    function upload() {
        return __awaiter(this, void 0, void 0, function* () {
            while (index < files.length) {
                if (isTty) {
                    if (index > 0) {
                        readline_1.default.clearLine(process.stdout, 0);
                        readline_1.default.cursorTo(process.stdout, 0);
                    }
                    process.stdout.write(`Uploading file ${(index + 1)} of ${files.length}`);
                }
                const file = files[index];
                index += 1;
                if (isTty && index === files.length) {
                    console.log(''); // add a final linebreak
                    return;
                }
                yield uploadFile(db, bucket, file, cwd);
            }
        });
    }
}
function uploadFile(db, bucket, filePath, cwd) {
    return __awaiter(this, void 0, void 0, function* () {
        const fullFilePath = path_1.join(cwd, filePath);
        const st = yield helper_1.stat(fullFilePath);
        if (!st || st.isDirectory()) {
            return null;
        }
        for (let retires = 3;; retires -= 1) {
            try {
                const file = new db.File({
                    path: `/${bucket}/${filePath}`, data: fs_1.default.createReadStream(fullFilePath), size: st.size, type: 'stream',
                });
                return yield file.upload({ force: true });
            }
            catch (e) {
                if (retires <= 0) {
                    console.warn(`Failed to upload file ${filePath}. ${retires} retries left.`);
                    throw new Error(`Failed to upload file ${filePath}: ${e.message}`);
                }
            }
        }
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVwbG95LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGVwbG95LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1RkFBdUY7QUFDdkYsNENBQW9CO0FBQ3BCLGdEQUF3QjtBQUN4QiwrQkFBd0M7QUFDeEMsd0RBQWdDO0FBRWhDLG1EQUFxQztBQUNyQyxxQ0FBd0M7QUFFeEMscUNBQW1EO0FBRW5ELE1BQU0sWUFBWSxHQUFHLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsVUFBVSxDQUFDLENBQUM7QUFZaEUsU0FBZ0IsTUFBTSxDQUFDLElBQThCO0lBQ25ELE9BQU8sT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRTtRQUNyQyxNQUFNLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQzVELFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDN0UsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1NBQzdDO2FBQU0sSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ3BCLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztTQUM3QzthQUFNLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNyQixRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1NBQzlFO1FBQ0QsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2YsUUFBUSxDQUFDLElBQUksQ0FBQyxxQkFBWSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDakM7UUFDRCxPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDL0IsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDO0FBaEJELHdCQWdCQztBQUVELFNBQVMsV0FBVyxDQUFDLEVBQWlCLEVBQUUsSUFBWSxFQUFFLEdBQVcsRUFBRSxPQUFlO0lBQ2hGLElBQUksY0FBYyxHQUFHLElBQUksQ0FBQztJQUMxQixPQUFPLGNBQWMsQ0FBQyxNQUFNLElBQUksY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHO1FBQUUsY0FBYyxHQUFHLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFL0csT0FBTyxjQUFjLENBQUMsTUFBTSxJQUFJLGNBQWMsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsS0FBSyxHQUFHO1FBQUUsY0FBYyxHQUFHLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLGNBQWMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFFbEssSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUU7UUFDMUIsT0FBTyxDQUFDLEtBQUssQ0FBQyx1QkFBdUIsY0FBYyxFQUFFLENBQUMsQ0FBQztRQUN2RCxPQUFPLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztLQUMxQjtJQUVELE9BQVEsSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7UUFDdEMsY0FBSSxDQUFDLE9BQU8sRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUU7WUFDaEQsSUFBSSxFQUFFO2dCQUFFLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQzs7Z0JBQ2QsT0FBTyxDQUFDLEtBQWlCLENBQUMsQ0FBQztRQUNsQyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUMsQ0FBdUI7U0FDckIsSUFBSSxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxXQUFXLENBQUMsRUFBRSxFQUFFLGNBQWMsRUFBRSxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDNUQsSUFBSSxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUU7UUFDZixJQUFJLE1BQU0sSUFBSSxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUMvQixPQUFPLENBQUMsR0FBRyxDQUFDLDRCQUE0QixDQUFDLENBQUM7U0FDM0M7YUFBTTtZQUNMLE9BQU8sQ0FBQyxJQUFJLENBQUMsZ0VBQWdFLENBQUMsQ0FBQztTQUNoRjtJQUNILENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQUVELFNBQVMsVUFBVSxDQUFDLEVBQWlCLEVBQUUsUUFBZ0I7SUFDckQsT0FBTyxnQkFBTyxDQUFDLFFBQVEsQ0FBQztTQUNyQixLQUFLLENBQUMsR0FBRyxFQUFFO1FBQ1YsTUFBTSxJQUFJLEtBQUssQ0FBQyxzQ0FBc0MsUUFBUSwwQ0FBMEMsQ0FBQyxDQUFDO0lBQzVHLENBQUMsQ0FBQztTQUNELElBQUksQ0FBQyxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTO1NBQ3ZDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsYUFBSSxDQUFDLFdBQVEsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7U0FDbEQsSUFBSSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUU7UUFDWCxJQUFJLEVBQUcsQ0FBQyxXQUFXLEVBQUUsRUFBRTtZQUNyQixPQUFPLGFBQWEsQ0FBQyxFQUFFLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1NBQzlDO1FBQ0QsT0FBTyxVQUFVLENBQUMsRUFBRSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUM1QyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ0wsSUFBSSxDQUFDLEdBQUcsRUFBRTtRQUNULE9BQU8sQ0FBQyxHQUFHLENBQUMsNEJBQTRCLENBQUMsQ0FBQztJQUM1QyxDQUFDLENBQUM7U0FDRCxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtRQUNYLE1BQU0sSUFBSSxLQUFLLENBQUMsMEJBQTBCLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO0lBQ3pELENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDVixDQUFDO0FBRUQsU0FBUyxhQUFhLENBQUMsRUFBaUIsRUFBRSxhQUFxQixFQUFFLFFBQWdCO0lBQy9FLE1BQU0sTUFBTSxHQUFHLGFBQWEsQ0FBQztJQUU3QixJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztRQUFFLE9BQU8sT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBRTFDLE9BQU8sZ0JBQU8sQ0FBQyxXQUFRLENBQUMsUUFBUSxFQUFFLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUMvRSxTQUFTO1NBQ04sTUFBTSxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDL0MsR0FBRyxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUU7UUFDaEIsTUFBTSxXQUFXLEdBQUcsUUFBUSxDQUFDLE9BQU8sQ0FBQyxlQUFlLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFMUQsSUFBSSxZQUFZLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUFFLE9BQU8sT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBRXZFLE9BQU8saUJBQVEsQ0FBQyxXQUFRLENBQUMsUUFBUSxFQUFFLGFBQWEsRUFBRSxRQUFRLENBQUMsRUFBRSxPQUFPLENBQUM7YUFDbEUsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO2FBQzNELElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsV0FBVyxnQkFBZ0IsTUFBTSxZQUFZLENBQUMsQ0FBQyxDQUFDO0lBQy9FLENBQUMsQ0FBQyxDQUNMLENBQUMsQ0FBQztBQUNMLENBQUM7QUFFRCxTQUFTLFVBQVUsQ0FBQyxFQUFpQixFQUFFLElBQVksRUFBRSxRQUFnQjtJQUNuRSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDO1FBQUUsT0FBTyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7SUFFbkQsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxlQUFlLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDckQsT0FBTyxpQkFBUSxDQUFDLFdBQVEsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRTtRQUN4SCxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsVUFBVSxZQUFZLENBQUMsQ0FBQztJQUNoRCxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUM7QUFFRCxTQUFTLFdBQVcsQ0FBQyxFQUFpQixFQUFFLE1BQWMsRUFBRSxLQUF3QixFQUFFLEdBQVc7SUFDM0YsTUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDbkMsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO0lBRWQsTUFBTSxPQUFPLEdBQUcsRUFBRSxDQUFDO0lBQ25CLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRTtRQUNsRCxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7S0FDeEI7SUFFRCxJQUFJLENBQUMsS0FBSyxFQUFFO1FBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEtBQUssQ0FBQyxNQUFNLFNBQVMsQ0FBQyxDQUFDO0tBQ2pEO0lBRUQsT0FBTyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBRTVCLFNBQWUsTUFBTTs7WUFDbkIsT0FBTyxLQUFLLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRTtnQkFDM0IsSUFBSSxLQUFLLEVBQUU7b0JBQ1QsSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFO3dCQUNiLGtCQUFRLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUM7d0JBQ3RDLGtCQUFRLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUM7cUJBQ3RDO29CQUNELE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsT0FBTyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztpQkFDMUU7Z0JBRUQsTUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUMxQixLQUFLLElBQUksQ0FBQyxDQUFDO2dCQUVYLElBQUksS0FBSyxJQUFJLEtBQUssS0FBSyxLQUFLLENBQUMsTUFBTSxFQUFFO29CQUNuQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsd0JBQXdCO29CQUN6QyxPQUFPO2lCQUNSO2dCQUVELE1BQU0sVUFBVSxDQUFDLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO2FBQ3pDO1FBQ0gsQ0FBQztLQUFBO0FBQ0gsQ0FBQztBQUVELFNBQWUsVUFBVSxDQUFDLEVBQWlCLEVBQUUsTUFBYyxFQUFFLFFBQWdCLEVBQUUsR0FBVzs7UUFDeEYsTUFBTSxZQUFZLEdBQUcsV0FBUSxDQUFDLEdBQUcsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUU3QyxNQUFNLEVBQUUsR0FBRyxNQUFNLGFBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNwQyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxXQUFXLEVBQUUsRUFBRTtZQUMzQixPQUFPLElBQUksQ0FBQztTQUNiO1FBRUQsS0FBSyxJQUFJLE9BQU8sR0FBRyxDQUFDLEdBQUksT0FBTyxJQUFJLENBQUMsRUFBRTtZQUNwQyxJQUFJO2dCQUNGLE1BQU0sSUFBSSxHQUFHLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQztvQkFDdkIsSUFBSSxFQUFFLElBQUksTUFBTSxJQUFJLFFBQVEsRUFBRSxFQUFFLElBQUksRUFBRSxZQUFFLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLFFBQVE7aUJBQ3ZHLENBQUMsQ0FBQztnQkFFSCxPQUFPLE1BQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO2FBQzNDO1lBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQ1YsSUFBSSxPQUFPLElBQUksQ0FBQyxFQUFFO29CQUNoQixPQUFPLENBQUMsSUFBSSxDQUFDLHlCQUF5QixRQUFRLEtBQUssT0FBTyxnQkFBZ0IsQ0FBQyxDQUFDO29CQUM1RSxNQUFNLElBQUksS0FBSyxDQUFDLHlCQUF5QixRQUFRLEtBQUssQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7aUJBQ3BFO2FBQ0Y7U0FDRjtJQUNILENBQUM7Q0FBQSJ9
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
exports.schema = exports.downloadSchema = exports.uploadSchema = void 0;
const path_1 = require("path");
const baqend_1 = require("baqend");
const account = __importStar(require("./account"));
const helper = __importStar(require("./helper"));
const helper_1 = require("./helper");
const SCHEMA_FILE_PATH = './baqend/schema/';
function uploadSchema(db, args = {}) {
    return helper_1.readDir(SCHEMA_FILE_PATH)
        .catch(() => {
        throw new Error('Your schema folder baqend is empty, no schema changes were deployed.');
    })
        .then((fileNames) => Promise.all(fileNames.map((fileName) => helper_1.readFile(path_1.join(SCHEMA_FILE_PATH, fileName), 'utf-8').then((file) => JSON.parse(file)))).then((schemas) => {
        if (args.force) {
            return helper.readInput('This will delete ALL your App data. Are you sure you want to continue? (yes/no)')
                .then((answer) => {
                if (answer.toLowerCase() === 'yes') {
                    schemas.forEach((schemaDescriptor) => {
                        console.log(`Replacing ${schemaDescriptor.class.replace('/db/', '')} Schema`);
                    });
                    return db.send(new baqend_1.message.ReplaceAllSchemas(schemas));
                }
                return Promise.resolve();
            });
        }
        schemas.forEach((schemaDescriptor) => {
            console.log(`Updating ${schemaDescriptor.class.replace('/db/', '')} Schema`);
        });
        return db.send(new baqend_1.message.UpdateAllSchemas(schemas));
    }));
}
exports.uploadSchema = uploadSchema;
function downloadSchema(db) {
    return db.send(new baqend_1.message.GetAllSchemas()).then((res) => Promise.all(res.entity.map((schemaDescriptor) => {
        const classname = schemaDescriptor.class.replace('/db/', '');
        const filename = `baqend/schema/${classname}.json`;
        if (!helper_1.isNativeClassNamespace(classname) && classname !== 'Object') {
            return helper_1.writeFile(filename, JSON.stringify(schemaDescriptor, null, 2), 'utf-8').then(() => {
                console.log(`Downloaded ${classname} Schema`);
            });
        }
        return Promise.resolve();
    })));
}
exports.downloadSchema = downloadSchema;
function schema(args) {
    return account.login(args).then((db) => helper_1.ensureDir(SCHEMA_FILE_PATH).then(() => {
        switch (args.command) {
            case 'upload':
                return uploadSchema(db, args).then((deployed) => {
                    console.log('---------------------------------------');
                    if (deployed) {
                        console.log(`The schema was successfully ${args.force ? 'replaced' : 'updated'}`);
                    }
                    else {
                        console.log('The schema update was aborted');
                    }
                });
            case 'download':
                return downloadSchema(db).then(() => {
                    console.log('---------------------------------------');
                    console.log('Your schema was successfully downloaded');
                });
            default:
                throw new Error(`Invalid command: "${args.command}". Please use one of ["upload", "download"].`);
        }
    }));
}
exports.schema = schema;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2NoZW1hLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQkFBd0M7QUFDeEMsbUNBQXNEO0FBQ3RELG1EQUFxQztBQUNyQyxpREFBbUM7QUFFbkMscUNBRWtCO0FBSWxCLE1BQU0sZ0JBQWdCLEdBQUcsa0JBQWtCLENBQUM7QUFPNUMsU0FBZ0IsWUFBWSxDQUFDLEVBQWlCLEVBQUUsT0FBNEIsRUFBRTtJQUM1RSxPQUFPLGdCQUFPLENBQUMsZ0JBQWdCLENBQUM7U0FDN0IsS0FBSyxDQUFDLEdBQUcsRUFBRTtRQUNWLE1BQU0sSUFBSSxLQUFLLENBQUMsc0VBQXNFLENBQUMsQ0FBQztJQUMxRixDQUFDLENBQUM7U0FDRCxJQUFJLENBQUMsQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQzlCLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLGlCQUFRLENBQUMsV0FBUSxDQUFDLGdCQUFnQixFQUFFLFFBQVEsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQVksQ0FBQyxDQUFDLENBQ2pJLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBa0IsRUFBRSxFQUFFO1FBQzVCLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNkLE9BQU8sTUFBTSxDQUFDLFNBQVMsQ0FBQyxpRkFBaUYsQ0FBQztpQkFDdkcsSUFBSSxDQUFDLENBQUMsTUFBYyxFQUFFLEVBQUU7Z0JBQ3ZCLElBQUksTUFBTSxDQUFDLFdBQVcsRUFBRSxLQUFLLEtBQUssRUFBRTtvQkFDbEMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLGdCQUF5QixFQUFFLEVBQUU7d0JBQzVDLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFB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
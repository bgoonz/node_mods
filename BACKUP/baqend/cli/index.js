#! /usr/bin/env node
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
exports.run = exports.account = exports.typings = exports.deploy = void 0;
const commander_1 = __importDefault(require("commander"));
const account = __importStar(require("./account"));
exports.account = account;
const typings_1 = require("./typings");
Object.defineProperty(exports, "typings", { enumerable: true, get: function () { return typings_1.typings; } });
const schema_1 = require("./schema");
const download_1 = require("./download");
const deploy_1 = require("./deploy");
Object.defineProperty(exports, "deploy", { enumerable: true, get: function () { return deploy_1.deploy; } });
const copy_1 = require("./copy");
const pjson = require('../package.json');
function run() {
    commander_1.default
        .name('baqend')
        .version(pjson.version)
        .option('--token <token>', 'Pass a Baqend Authorization Token to the command');
    commander_1.default
        .command('login [app]')
        .option('--auth <auth>', 'The authentication method to use for the login. Can be password, google, facebook or gitHub.')
        .description('Logs you in and locally saves your credentials')
        .action((app, options) => account.persistLogin(Object.assign(Object.assign({ app }, options), commander_1.default.opts())));
    commander_1.default
        .command('register')
        .description('Registers an account and locally saves your credentials')
        .action((options) => account.register(Object.assign(Object.assign({}, options), commander_1.default.opts())).then(() => { }));
    commander_1.default
        .command('whoami [app]')
        .alias('me')
        .description('Show your login status')
        .action((app) => account.whoami(Object.assign({ app }, commander_1.default.opts())));
    commander_1.default
        .command('open [app]')
        .description('Opens the url to your app')
        .action((app) => account.openApp(app).then(() => { }));
    commander_1.default
        .command('dashboard')
        .description('Opens the url to the baqend dashboard')
        .action((options) => account.openDashboard(Object.assign(Object.assign({}, options), commander_1.default.opts())));
    commander_1.default
        .command('deploy [app]')
        .description('Deploys your Baqend code and files')
        .option('-F, --files', 'deploy files')
        .option('-f, --file-dir <dir>', 'path to file directory', 'www')
        .option('-g, --file-glob <pattern>', 'pattern to match files', '**/*')
        .option('-b, --bucket-path <path>', 'remote path where the files will be uploaded to.', 'www')
        .option('-C, --code', 'deploy baqend code')
        .option('-c, --code-dir <dir>', 'path to code directory', 'baqend')
        .option('-S, --schema', 'deploy schema')
        .action((app, options) => deploy_1.deploy(Object.assign(Object.assign({ app }, options), commander_1.default.opts())).then(() => { }));
    commander_1.default
        .command('copy <source> <dest>')
        .alias('cp')
        .description('Copies single files to and from Baqend')
        .usage(`[OPTIONS] SRC_PATH     DEST_PATH
         copy|cp [OPTIONS] APP:SRC_PATH DEST_PATH
         copy|cp [OPTIONS] SRC_PATH     APP:DEST_PATH
         copy|cp [OPTIONS] APP:SRC_PATH APP:DEST_PATH`)
        .action((source, dest, options) => copy_1.copy(Object.assign(Object.assign({ source, dest }, options), commander_1.default.opts())))
        .on('--help', () => {
        console.log(`
  You can specify local paths without colon and app paths with a colon.
  For APP, you can use either your Baqend app's name or an API endpoint: "https://example.org/v1".
  If the app path is relative, it is assumed you are using the "www" bucket:
  
    baqend cp my-app:index.html . 
     
  Is the same as:
  
    baqend cp my-app:/www/index.html .
    
  If you target a directory, the filename of the source file will be used.
  You can also copy files between different apps, or between community editions and apps.`);
    });
    commander_1.default
        .command('download [app]')
        .description('Downloads your Baqend code and files')
        .option('-C, --code', 'download code')
        .option('-c, --code-dir <dir>', 'path to code directory', 'baqend')
        .action((app, options) => download_1.download(Object.assign(Object.assign({ app }, options), commander_1.default.opts())).then(() => { }));
    commander_1.default
        .command('schema <command> [app]')
        .description('Upload and download your schema')
        .option('-F, --force', 'overwrite old schema')
        .action((command, app, options) => schema_1.schema(Object.assign(Object.assign({ command, app }, options), commander_1.default.opts())));
    // program
    //     .command('schema download [app]')
    //     .action((app, options) => result = schema.download(Object.assign({app: app}, options)))
    commander_1.default
        .command('logout [app]')
        .description('Removes your stored credentials')
        .action((app) => account.logout(Object.assign({ app }, commander_1.default.opts())));
    commander_1.default
        .command('typings <app>')
        .description('Generates additional typings (TypeScript support)')
        .option('-d, --dest <dir>', 'The destination where the typings should be saved', '.')
        .action((app, options) => typings_1.typings(Object.assign(Object.assign({ app }, options), commander_1.default.opts())));
    commander_1.default
        .usage('[command] [options] <args...>')
        .description('Type in one of the above commands followed by --help to get more information\n'
        + '  The optional [app] parameter can be passed to define the target of a command.\n'
        + '  It can be either an app name or a custom domain location like\n'
        + '  https://my-baqend-domain:8080/v1.');
    commander_1.default
        .command('apps')
        .description('List all your apps')
        .action((options) => account.listApps(Object.assign(Object.assign({}, options), commander_1.default.opts())));
    return commander_1.default.parseAsync(process.argv);
}
exports.run = run;
if (require.main === module) {
    run().catch((e) => {
        console.error(e.stack || e);
        process.exit(1);
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLDBEQUFnQztBQUNoQyxtREFBcUM7QUFPWCwwQkFBTztBQU5qQyx1Q0FBb0M7QUFNbkIsd0ZBTlIsaUJBQU8sT0FNUTtBQUx4QixxQ0FBa0M7QUFDbEMseUNBQXNDO0FBQ3RDLHFDQUFrQztBQUd6Qix1RkFIQSxlQUFNLE9BR0E7QUFGZixpQ0FBOEI7QUFJOUIsTUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUM7QUFFekMsU0FBZ0IsR0FBRztJQUNqQixtQkFBTztTQUNKLElBQUksQ0FBQyxRQUFRLENBQUM7U0FDZCxPQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQztTQUN0QixNQUFNLENBQUMsaUJBQWlCLEVBQUUsa0RBQWtELENBQUMsQ0FBQztJQUNqRixtQkFBTztTQUNKLE9BQU8sQ0FBQyxhQUFhLENBQUM7U0FDdEIsTUFBTSxDQUFDLGVBQWUsRUFBRSw4RkFBOEYsQ0FBQztTQUN2SCxXQUFXLENBQUMsZ0RBQWdELENBQUM7U0FDN0QsTUFBTSxDQUFDLENBQUMsR0FBRyxFQUFFLE9BQU8sRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLFlBQVksK0JBQUcsR0FBRyxJQUFLLE9BQU8sR0FBSyxtQkFBTyxDQUFDLElBQUksRUFBRSxFQUFHLENBQUMsQ0FBQztJQUMxRixtQkFBTztTQUNKLE9BQU8sQ0FBQyxVQUFVLENBQUM7U0FDbkIsV0FBVyxDQUFDLHlEQUF5RCxDQUFDO1NBQ3RFLE1BQU0sQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLFFBQVEsaUNBQU0sT0FBTyxHQUFLLG1CQUFPLENBQUMsSUFBSSxFQUFFLEVBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM1RixtQkFB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
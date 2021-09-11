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
exports.whoami = exports.listApps = exports.openDashboard = exports.openApp = exports.persistLogin = exports.logout = exports.login = exports.register = void 0;
const open_1 = __importDefault(require("open"));
const crypto_1 = __importDefault(require("crypto"));
const http_1 = require("http");
const os_1 = __importDefault(require("os"));
const baqend_1 = require("baqend");
const helper = __importStar(require("./helper"));
const helper_1 = require("./helper");
const { TokenStorage } = baqend_1.intersection;
const { UserFactory } = baqend_1.binding;
const fileName = `${os_1.default.homedir()}/.baqend`;
const algorithm = 'aes-256-ctr';
const PROFILE_DEFAULT_KEY = 'N2Ki=za[8iy4ff4jYn/3,y;';
const bbqHost = 'bbq';
function getAppInfo(args) {
    const isCustomHost = args.app && /^https?:\/\//.test(args.app);
    return {
        isCustomHost: !!isCustomHost,
        host: isCustomHost ? args.app : bbqHost,
        app: isCustomHost ? null : args.app,
    };
}
function getArgsCredentials(args) {
    if (args.username && args.password) {
        return {
            username: args.username,
            password: args.password,
        };
    }
    if (args.token) {
        return { token: args.token };
    }
    return null;
}
function getEnvCredentials() {
    const token = process.env.BAQEND_TOKEN || process.env.BAT;
    if (token) {
        return { token };
    }
    return null;
}
function getProfileCredentials(appInfo) {
    return readProfileFile().then((json) => {
        const credentials = json[appInfo.host];
        if (!credentials) {
            return null;
        }
        if ('password' in credentials) {
            console.log('Storing username/password in the baqend profile will not be supported in future version.');
            console.log('Logout and login again to fix this issue.');
            credentials.password = decrypt(credentials.password);
        }
        return credentials;
    }).catch(() => null);
}
function getLocalCredentials(appInfo) {
    if (appInfo.isCustomHost) {
        return { username: 'root', password: 'root' };
    }
    return null;
}
function getInputCredentials(appInfo, authProvider, showLoginInfo) {
    if (!process.stdout.isTTY) {
        return Promise.reject(new Error('Can\'t interactive login into baqend, no tty session was detected.'));
    }
    if (showLoginInfo) {
        console.log('Baqend Login is required. You can skip this step by saving the Login credentials with "baqend login or baqend sso"');
    }
    const options = ['password', 'google', 'facebook', 'github'];
    let result = Promise.resolve(String(options.indexOf(authProvider || 'password') + 1));
    if (!appInfo.isCustomHost && options.length > 1 && !authProvider) {
        console.log('Choose how you want to login:');
        options.forEach((provider, index) => {
            console.log(`${index + 1}. Login with ${provider}`);
        });
        result = helper_1.readInput(`Type 1-${options.length}: `);
    }
    return result.then((option) => {
        if (option === '1') {
            return readInputCredentials(appInfo);
        }
        const provider = options[Number(option) - 1];
        if (!provider) {
            throw new Error('No valid login option was chosen.');
        }
        return requestSSOCredentials(appInfo, provider);
    });
}
function requestSSOCredentials(appInfo, oAuthProvider, oAuthOptions = {}) {
    // TODO: current workaround until our server pass this ids to the client dynamically
    const clientIds = {
        facebook: '976707865723719',
        google: '586076830320-0el1jebupjvbcmqf95vfaqjq7gbs0bdh.apps.googleusercontent.com',
        gitHub: '1311e3415ab415fda705',
    };
    return appConnect(appInfo)
        .then((db) => {
        const host = '127.0.0.1';
        const port = 9876;
        const provider = oAuthProvider.toLowerCase();
        return Promise.all([
            oAuthHandler(host, port),
            db.loginWithOAuth(oAuthProvider, Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, UserFactory.DefaultOptions[provider] || {}), (clientIds[provider] && { clientId: clientIds[provider] })), { open: open_1.default }), oAuthOptions), { redirect: `http://${host}:${port}` })),
        ]).then(([credentials, windowProcess]) => {
            windowProcess.kill('SIGHUP'); // seems not working on every platform
            return credentials;
        });
    });
}
function oAuthHandler(host, port) {
    return new Promise((resolve, reject) => {
        const server = http_1.createServer((req, res) => {
            const url = new URL(req.url, `http://${host}:${port}`);
            let done = false;
            if (url.searchParams.has('errorMessage')) {
                reject(new Error(url.searchParams.get('errorMessage')));
                done = true;
            }
            else if (url.searchParams.has('token')) {
                resolve({ token: url.searchParams.get('token') });
                done = true;
            }
            if (done) {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end('<!DOCTYPE html><html><head></head><body><h1>Continue within the CLI!</h1></a></body></html>');
                server.close();
            }
            else {
                res.writeHead(404);
                res.end();
            }
        });
        server.on('error', (err) => {
            reject(err);
        });
        server.listen(port, host);
    });
}
function getCredentials(appInfo, args) {
    let providers = Promise.resolve(null)
        .then((credentials) => credentials || getArgsCredentials(args))
        .then((credentials) => credentials || getEnvCredentials())
        .then((credentials) => credentials || getProfileCredentials(appInfo))
        .then((credentials) => credentials || getLocalCredentials(appInfo));
    if (!args.skipInput && process.stdout.isTTY) {
        providers = providers
            .then((credentials) => credentials || getInputCredentials(appInfo, args.auth, true));
    }
    return providers;
}
function register(args) {
    const appInfo = getAppInfo(args);
    return getInputCredentials(appInfo, args.auth)
        .then((credentials) => appConnect(appInfo)
        .then((db) => {
        if ('token' in credentials) {
            return db.User.loginWithToken(credentials.token).then(() => db);
        }
        return db.User.register(credentials.username, credentials.password).then(() => db);
    })
        .then((db) => Promise.all([
        getDefaultApp(db).then((name) => console.log(`Your app name is ${name}`)),
        saveCredentials(appInfo, { token: db.token }),
    ])));
}
exports.register = register;
function connect(args) {
    const appInfo = getAppInfo(args);
    return getCredentials(appInfo, args)
        .then((credentials) => {
        if (!credentials)
            throw new Error('Login information are missing. Login with baqend login or pass a baqend token via BAQEND_TOKEN environment variable');
        return appConnect(appInfo, credentials);
    });
}
function appConnect(appInfo, credentials) {
    // do not use the global token storage here, to prevent login collisions on the bbq app
    const factory = new baqend_1.EntityManagerFactory({ host: appInfo.host, secure: true, tokenStorageFactory: TokenStorage });
    return factory.createEntityManager(true).ready().then((db) => {
        if (!credentials)
            return db;
        if ('token' in credentials) {
            return db.User.loginWithToken(credentials.token)
                .then((me) => {
                if (me) {
                    return db;
                }
                throw new Error('Login with Baqend token failed.');
            });
        }
        return db.User.login(credentials.username, credentials.password).then(() => db);
    });
}
function login(args) {
    const appInfo = getAppInfo(args);
    return connect(args)
        .then((db) => {
        if (appInfo.isCustomHost) {
            return db;
        }
        if (appInfo.app) {
            return bbqAppLogin(db, appInfo.app);
        }
        return getDefaultApp(db).then((appName) => bbqAppLogin(db, appName));
    }).catch((e) => {
        // if the login failed try to directly login into the app
        if (appInfo.app && !appInfo.isCustomHost) {
            return login(Object.assign(Object.assign({}, args), { app: `https://${appInfo.app}.app.baqend.com/v1` }));
        }
        throw e;
    });
}
exports.login = login;
function bbqAppLogin(db, appName) {
    return db.modules.get('apps', { app: appName }).then((result) => {
        if (!result) {
            throw new Error(`App (${appName}) not found.`);
        }
        return appConnect({ host: result.name, isCustomHost: false, app: appName }, { token: result.token });
    });
}
function logout(args) {
    const appInfo = getAppInfo(args);
    return readProfileFile().then((json) => {
        // eslint-disable-next-line no-param-reassign
        delete json[appInfo.host];
        return writeProfileFile(json);
    });
}
exports.logout = logout;
function persistLogin(args) {
    const appInfo = getAppInfo(args);
    let credentials = getArgsCredentials(args);
    if (!credentials) {
        credentials = getInputCredentials(appInfo, args.auth, false);
    }
    return Promise.resolve(credentials)
        .then((creds) => appConnect(appInfo, creds)
        .then((db) => saveCredentials(appInfo, 'token' in creds ? creds : { token: db.token })))
        .then(() => console.log('You have successfully been logged in.'));
}
exports.persistLogin = persistLogin;
function openApp(app) {
    if (app) {
        return open_1.default(`https://${app}.app.baqend.com`);
    }
    return login({}).then((db) => {
        open_1.default(`https://${db.connection.host}`);
    });
}
exports.openApp = openApp;
function openDashboard(args) {
    return connect(args).then((db) => {
        open_1.default(`https://dashboard.baqend.com/login?token=${db.token}`);
    }).catch(() => {
        open_1.default('https://dashboard.baqend.com');
    });
}
exports.openDashboard = openDashboard;
function listApps(args) {
    return connect(args)
        .then((db) => getApps(db))
        .then((apps) => apps.forEach((app) => console.log(app)));
}
exports.listApps = listApps;
function whoami(args) {
    return connect(Object.assign({ skipInput: true }, args))
        .then((db) => console.log(db.User.me.username), () => console.log('You are not logged in.'));
}
exports.whoami = whoami;
function getApps(db) {
    return db.modules.get('apps').then((apps) => apps.map((app) => app.name));
}
function getDefaultApp(db) {
    return getApps(db).then((apps) => {
        if (apps.length === 1) {
            return apps[0];
        }
        throw new Error('Please add the name of your app as a parameter.');
    });
}
function readInputCredentials(appInfo) {
    return helper.readInput(appInfo.isCustomHost ? 'Username: ' : 'E-Mail: ')
        .then((username) => helper.readInput('Password: ', true).then((password) => {
        console.log();
        return { username, password };
    }));
}
function decrypt(input) {
    // This is legacy and we will remove support for the username / password storage in the profile file
    // eslint-disable-next-line node/no-deprecated-api
    const decipher = crypto_1.default.createDecipher(algorithm, PROFILE_DEFAULT_KEY);
    let decrypted = decipher.update(input, 'base64', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
}
function writeProfileFile(json) {
    return helper.writeFile(fileName, JSON.stringify(json)).catch((e) => {
        console.warn('Baqend Profile file can\'t be written', e);
        throw e;
    });
}
function readProfileFile() {
    return helper_1.isFile(fileName).then((exists) => {
        if (!exists) {
            return {};
        }
        return helper_1.readFile(fileName, 'utf-8').then((data) => (data ? JSON.parse(data) : {}));
    });
}
function saveCredentials(appInfo, credentials) {
    return readProfileFile().then((json) => {
        // eslint-disable-next-line no-param-reassign
        json[appInfo.host] = Object.assign(Object.assign({}, json[appInfo.host]), credentials);
        return writeProfileFile(json);
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3VudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFjY291bnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdEQUF3QjtBQUV4QixvREFBNEI7QUFDNUIsK0JBQW9DO0FBQ3BDLDRDQUFvQjtBQUNwQixtQ0FFZ0I7QUFDaEIsaURBQW1DO0FBQ25DLHFDQUVrQjtBQUVsQixNQUFNLEVBQUUsWUFBWSxFQUFFLEdBQUcscUJBQVksQ0FBQztBQUN0QyxNQUFNLEVBQUUsV0FBVyxFQUFFLEdBQUcsZ0JBQU8sQ0FBQztBQUVoQyxNQUFNLFFBQVEsR0FBRyxHQUFHLFlBQUUsQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDO0FBQzNDLE1BQU0sU0FBUyxHQUFHLGFBQWEsQ0FBQztBQUNoQyxNQUFNLG1CQUFtQixHQUFHLHlCQUF5QixDQUFDO0FBQ3RELE1BQU0sT0FBTyxHQUFHLEtBQUssQ0FBQztBQWtDdEIsU0FBUyxVQUFVLENBQUMsSUFBaUI7SUFDbkMsTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLEdBQUcsSUFBSSxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUUvRCxPQUFPO1FBQ0wsWUFBWSxFQUFFLENBQUMsQ0FBQyxZQUFZO1FBQzVCLElBQUksRUFBRSxZQUFZLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU87UUFDeEMsR0FBRyxFQUFFLFlBQVksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBSTtLQUNyQyxDQUFDO0FBQ0osQ0FBQztBQUVELFNBQVMsa0JBQWtCLENBQUMsSUFBaUI7SUFDM0MsSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7UUFDbEMsT0FBTztZQUNMLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtZQUN2QixRQUFRLEVB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
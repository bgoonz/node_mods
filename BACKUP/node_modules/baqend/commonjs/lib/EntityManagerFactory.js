"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
exports.EntityManagerFactory = void 0;
var EntityManager_1 = require("./EntityManager");
var message = __importStar(require("./message"));
var connector_1 = require("./connector");
var util_1 = require("./util");
var intersection_1 = require("./intersection");
var metamodel_1 = require("./metamodel");
var CONNECTED = Symbol('Connected');
var WS = Symbol('WebSocket');
var EntityManagerFactory = /** @class */ (function (_super) {
    __extends(EntityManagerFactory, _super);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRW50aXR5TWFuYWdlckZhY3RvcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9saWIvRW50aXR5TWFuYWdlckZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlEQUFnRDtBQUNoRCxpREFBcUM7QUFDckMseUNBRXFCO0FBQ3JCLCtCQUEyQztBQUMzQywrQ0FBeUU7QUFDekUseUNBQXdDO0FBRXhDLElBQU0sU0FBUyxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUN0QyxJQUFNLEVBQUUsR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7QUFZL0I7SUFBMEMsd0NBQVE7SUFvQ2hEOzs7Ozs7Ozs7Ozs7O09BYUc7SUFDSCw4QkFBWSxPQVNHO1FBVEgsd0JBQUEsRUFBQSxZQVNHO1FBVGYsWUFVRSxpQkFBTyxTQTBEUjtRQXJITSxnQkFBVSxHQUFxQixJQUFJLENBQUM7UUFFcEMsZUFBUyxHQUFjLEtBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUU5QyxVQUFJLEdBQVMsSUFBSSxtQkFBSSxDQUFDLEtBQUksQ0FBQyxTQUFTLEVBQUUsS0FBSSxDQUFDLENBQUM7UUFFNUMseUJBQW1CLEdBQXdCLDJCQUFZLENBQUMsV0FBVyxJQUFJLDJCQUFZLENBQUMsTUFBTSxDQUFDO1FBRTNGLGtCQUFZLEdBQXdCLElBQUksQ0FBQztRQUV6QyxlQUFTLEdBQWtCLElBQUksQ0FBQztRQW1EckMsSUFBTSxHQUFHLEdBQUcsT0FBTyxPQUFPLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQztRQUU1RSxLQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRXBCLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQztRQUNuQixJQUFJLEtBQUssR0FB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
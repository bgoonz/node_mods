"use strict";
/* eslint-disable no-restricted-globals */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Connector = void 0;
var error_1 = require("../error");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29ubmVjdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbGliL2Nvbm5lY3Rvci9Db25uZWN0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLDBDQUEwQzs7O0FBRzFDLGtDQUEyQztBQWUzQztJQXNJRTs7Ozs7T0FLRztJQUNILG1CQUNrQixJQUFZLEVBQ1osSUFBWSxFQUNaLE1BQWUsRUFDZixRQUFnQjtRQUhoQixTQUFJLEdBQUosSUFBSSxDQUFRO1FBQ1osU0FBSSxHQUFKLElBQUksQ0FBUTtRQUNaLFdBQU0sR0FBTixNQUFNLENBQVM7UUFDZixhQUFRLEdBQVIsUUFBUSxDQUFRO1FBckJsQzs7V0FFRztRQUNhLFdBQU0sR0FBVyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRXhGOzs7V0FHRztRQUNJLFNBQUksR0FBWSxLQUFLLENBQUM7SUFhMUIsQ0FBQztJQXBISjs7Ozs7Ozs7T0FRRztJQUNILDZEQUE2RDtJQUN0RCxrQkFBUSxHQUFmLFVBQWdCLElBQVksRUFBRSxJQUFZLEVBQUUsTUFBZSxFQUFFLFFBQWdCO1FBQzNFLE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNJLGdCQUFNLEdBQWIsVUFBYyxJQUFZLEVBQUUsSUFBYSxFQUFFLE1BQWdCLEVBQUUsUUFBaUI7UUFDNUUsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ2IsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ2IsSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDO1FBQ2YsSUFBSSxDQUFDLEdBQUcsUUFBUSxDQUFDO1FBRWpCLElBQUksT0FBTyxRQUFRLEtBQUssV0FBVyxFQUFFO1lBQ25DLElBQUksQ0FBQyxDQUFDLEVBQUU7Z0JBQ04sQ0FBQyxHQUFHLFFBQVEsQ0FBQyxRQUFR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
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
* Date: Wed, 21 Jul 2021 10:40:19 GMT
*/

var Baqend =
/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 22);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "Message", function() { return /* reexport */ Message["a" /* Message */]; });
__webpack_require__.d(__webpack_exports__, "OAuthMessage", function() { return /* reexport */ Message["b" /* OAuthMessage */]; });
__webpack_require__.d(__webpack_exports__, "StatusCode", function() { return /* reexport */ Message["c" /* StatusCode */]; });
__webpack_require__.d(__webpack_exports__, "Connector", function() { return /* reexport */ Connector_Connector; });
__webpack_require__.d(__webpack_exports__, "FetchConnector", function() { return /* reexport */ FetchConnector_ignored_["FetchConnector"]; });
__webpack_require__.d(__webpack_exports__, "XMLHttpConnector", function() { return /* reexport */ XMLHttpConnector_XMLHttpConnector; });
__webpack_require__.d(__webpack_exports__, "IFrameConnector", function() { return /* reexport */ IFrameConnector_IFrameConnector; });
__webpack_require__.d(__webpack_exports__, "NodeConnector", function() { return /* reexport */ NodeConnector_ignored_["NodeConnector"]; });
__webpack_require__.d(__webpack_exports__, "WebSocketConnector", function() { return /* reexport */ WebSocketConnector_WebSocketConnector; });

// EXTERNAL MODULE: ./lib/connector/Message.ts
var Message = __webpack_require__(11);

// EXTERNAL MODULE: ./lib/error/index.ts + 5 modules
var lib_error = __webpack_require__(5);

// CONCATENATED MODULE: ./lib/connector/Connector.ts
/* eslint-disable no-restricted-globals */

class Connector_Connector {
    /**
     * @param host - the host to connect to
     * @param port - the port to connect to
     * @param secure - <code>true</code> for an secure connection
     * @param basePath - The base path of the api endpoint
     */
    constructor(host, port, secure, basePath) {
        this.host = host;
        this.port = port;
        this.secure = secure;
        this.basePath = basePath;
        /**
         * the origin do not contains the base path
         */
        this.origin = Connector_Connector.toUri(this.host, this.port, this.secure, '');
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
    static isUsable(host, port, secure, basePath) {
        return false;
    }
    /**
     * @param host or location
     * @param port
     * @param secure=true <code>true</code> for an secure connection
     * @param basePath The basepath of the api
     * @return
     */
    static create(host, port, secure, basePath) {
        let h = host;
        let p = port;
        let s = secure;
        let b = basePath;
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
            b = Connector_Connector.DEFAULT_BASE_PATH;
        }
        if (h.indexOf('/') !== -1) {
            const matches = /^(https?):\/\/([^/:]+|\[[^\]]+])(:(\d*))?(\/\w+)?\/?$/.exec(h);
            if (matches) {
                s = matches[1] === 'https';
                h = matches[2].replace(/(\[|])/g, '');
                p = Number(matches[4]);
                b = matches[5] || '';
            }
            else {
                throw new Error(`The connection uri host ${h} seems not to be valid`);
            }
        }
        else if (h !== 'localhost' && /^[a-z0-9-]*$/.test(h)) {
            // handle app names as hostname
            h += Connector_Connector.HTTP_DOMAIN;
        }
        if (!p) {
            p = s ? 443 : 80;
        }
        const url = Connector_Connector.toUri(h, p, s, b);
        let connection = this.connections[url];
        if (!connection) {
            // check last registered connector first to simplify registering connectors
            for (let i = this.connectors.length - 1; i >= 0; i -= 1) {
                const ConnectorConstructor = this.connectors[i];
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
    }
    static toUri(host, port, secure, basePath) {
        let uri = (secure ? 'https://' : 'http://') + (host.indexOf(':') !== -1 ? `[${host}]` : host);
        uri += ((secure && port !== 443) || (!secure && port !== 80)) ? `:${port}` : '';
        uri += basePath;
        return uri;
    }
    /**
     * @param message
     * @return
     */
    send(message) {
        let response = { status: 0, headers: {} };
        return Promise.resolve()
            .then(() => this.prepareRequest(message))
            .then(() => new Promise((resolve) => {
            this.doSend(message, message.request, resolve);
        }))
            .then((res) => { response = res; })
            .then(() => this.prepareResponse(message, response))
            .then(() => {
            message.doReceive(response);
            return response;
        })
            .catch((e) => {
            response.entity = null;
            throw lib_error["PersistentError"].of(e);
        });
    }
    /**
     * @param message
     * @return
     */
    prepareRequest(message) {
        const mimeType = message.mimeType();
        if (!mimeType) {
            const { type } = message.request;
            if (type === 'json') {
                message.mimeType('application/json;charset=utf-8');
            }
            else if (type === 'text') {
                message.mimeType('text/plain;charset=utf-8');
            }
        }
        this.toFormat(message);
        let accept;
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
            const ifNoneMatch = message.ifNoneMatch();
            if (ifNoneMatch && ifNoneMatch !== '""' && ifNoneMatch !== '*') {
                message.ifNoneMatch(`${ifNoneMatch.slice(0, -1)}--gzip"`);
            }
        }
        const tokenStorage = message.tokenStorage();
        if (message.request.path === '/connect') {
            return tokenStorage.signPath(this.basePath + message.request.path)
                .then((signedPath) => {
                // eslint-disable-next-line no-param-reassign
                message.request.path = signedPath.substring(this.basePath.length);
                if (message.cacheControl()) {
                    // eslint-disable-next-line no-param-reassign
                    message.request.path += `${message.request.path.indexOf('?') !== -1 ? '&' : '?'}BCB`;
                }
                return message;
            });
        }
        if (tokenStorage) {
            const { token } = tokenStorage;
            if (token) {
                message.header('authorization', `BAT ${token}`);
            }
        }
        return message;
    }
    /**
     * @param message
     * @param response The received response headers and data
     * @return
     */
    prepareResponse(message, response) {
        // IE9 returns status code 1223 instead of 204
        response.status = response.status === 1223 ? 204 : response.status;
        let type;
        const headers = response.headers || {};
        // some proxies send content back on 204 responses
        const entity = response.status === 204 ? null : response.entity;
        if (entity) {
            type = message.responseType();
            if (!type || response.status >= 400) {
                const contentType = headers['content-type'] || headers['Content-Type'];
                if (contentType && contentType.indexOf('application/json') > -1) {
                    type = 'json';
                }
            }
        }
        if (headers.etag) {
            headers.etag = headers.etag.replace('--gzip', '');
        }
        const tokenStorage = message.tokenStorage();
        if (tokenStorage) {
            const token = headers['baqend-authorization-token'] || headers['Baqend-Authorization-Token'];
            if (token) {
                tokenStorage.update(token);
            }
        }
        return new Promise((resolve) => {
            resolve(entity && this.fromFormat(response, entity, type));
        }).then((resultEntity) => {
            response.entity = resultEntity;
            if (message.request.path.indexOf('/connect') !== -1 && resultEntity) {
                this.gzip = !!resultEntity.gzip;
            }
        }, (e) => {
            throw new Error(`Response was not valid ${type}: ${e.message}`);
        });
    }
}
Connector_Connector.DEFAULT_BASE_PATH = '/v1';
Connector_Connector.HTTP_DOMAIN = '.app.baqend.com';
/**
 * An array of all exposed response headers
 */
Connector_Connector.RESPONSE_HEADERS = [
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
Connector_Connector.connectors = [];
/**
 * Array of all created connections
 */
Connector_Connector.connections = {};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29ubmVjdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQ29ubmVjdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDBDQUEwQztBQUcxQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBZTNDLE1BQU0sT0FBZ0IsU0FBUztJQXNJN0I7Ozs7O09BS0c7SUFDSCxZQUNrQixJQUFZLEVBQ1osSUFBWSxFQUNaLE1BQWUsRUFDZixRQUFnQjtRQUhoQixTQUFJLEdBQUosSUFBSSxDQUFRO1FBQ1osU0FBSSxHQUFKLElBQUksQ0FBUTtRQUNaLFdBQU0sR0FBTixNQUFNLENBQVM7UUFDZixhQUFRLEdBQVIsUUFBUSxDQUFRO1FBckJsQzs7V0FFRztRQUNhLFdBQU0sR0FBVyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRXhGOzs7V0FHRztRQUNJLFNBQUksR0FBWSxLQUFLLENBQUM7SUFhMUIsQ0FBQztJQXBISjs7Ozs7Ozs7T0FRRztJQUNILDZEQUE2RDtJQUM3RCxNQUFNLENBQUMsUUFBUSxDQUFDLElBQVksRUFBRSxJQUFZLEVBQUUsTUFBZSxFQUFFLFFBQWdCO1FBQzNFLE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNILE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBWSxFQUFFLElBQWEsRUFBRSxNQUFnQixFQUFFLFFBQWlCO1FBQzVFLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztRQUNiLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztRQUNiLElBQUksQ0FBQyxHQUFHLE1BQU0sQ0FBQztRQUNmLElBQUksQ0FBQyxHQUFHLFFBQVEsQ0FBQztRQUVqQixJQUFJLE9BQU8sUUFBUSxLQUFLLFdBQVcsRUFBRTtZQUNuQyxJQUFJLENBQUMsQ0FBQyxFQUFFO2dCQUNO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
// EXTERNAL MODULE: ./FetchConnector (ignored)
var FetchConnector_ignored_ = __webpack_require__(18);

// EXTERNAL MODULE: ./lib/util/index.ts + 13 modules
var util = __webpack_require__(4);

// CONCATENATED MODULE: ./lib/connector/XMLHttpConnector.ts
/* this connector will only be choose in browser compatible environments */
/* eslint no-restricted-globals: ["off", "addEventListener", "removeEventListener"] */


class XMLHttpConnector_XMLHttpConnector extends Connector_Connector {
    /**
     * @inheritDoc
     */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    static isUsable(host, port, secure, basePath) {
        return typeof XMLHttpRequest !== 'undefined';
    }
    /**
     * @inheritDoc
     */
    doSend(message, request, receive) {
        if (request.method === 'OAUTH') {
            if (this.oAuthHandle) {
                this.oAuthHandle({ status: 409, headers: {}, entity: '{"message": "A new OAuth request was sent."}' });
            }
            localStorage.removeItem('oauth-response');
            const handler = (event) => {
                if (event.key === 'oauth-response' && this.oAuthHandle && event.newValue) {
                    this.oAuthHandle(JSON.parse(event.newValue));
                }
            };
            this.oAuthHandle = (msg) => {
                receive(msg);
                localStorage.removeItem('oauth-response');
                removeEventListener('storage', handler, false);
            };
            addEventListener('storage', handler, false);
            return;
        }
        const xhr = new XMLHttpRequest();
        const url = this.origin + this.basePath + request.path;
        xhr.onreadystatechange = () => {
            // if we receive an error switch the response type to json
            if (xhr.responseType && xhr.readyState === 2 && xhr.status >= 400) {
                xhr.responseType = 'text';
            }
            if (xhr.readyState === 4) {
                const response = {
                    headers: {},
                    status: xhr.status,
                    entity: xhr.response || xhr.responseText,
                };
                Connector_Connector.RESPONSE_HEADERS.forEach((name) => {
                    response.headers[name] = xhr.getResponseHeader(name) || '';
                });
                receive(response);
            }
        };
        // Set the message progress callback
        if (xhr.upload && message.progress()) {
            xhr.upload.onprogress = message.progress();
        }
        xhr.open(request.method, url, true);
        const { entity } = request;
        const { headers } = request;
        const headerNames = Object.keys(headers);
        for (let i = 0, len = headerNames.length; i < len; i += 1) {
            const headerName = headerNames[i];
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
    }
    /**
     * @inheritDoc
     */
    fromFormat(response, entity, type) {
        if (type === 'json') {
            return JSON.parse(entity);
        }
        if (type === 'data-url' || type === 'base64') {
            const reader = new FileReader();
            reader.readAsDataURL(entity);
            return new Promise((resolve, reject) => {
                reader.onload = resolve;
                reader.onerror = reject;
            }).then(() => {
                let { result } = reader;
                if (type === 'base64' && typeof result === 'string') {
                    result = result.substring(result.indexOf(',') + 1);
                }
                return result;
            });
        }
        return entity;
    }
    /**
     * @inheritDoc
     */
    toFormat(message) {
        let { type } = message.request;
        if (type) {
            let { entity } = message.request;
            let mimeType = message.mimeType();
            switch (type) {
                case 'blob':
                    mimeType = mimeType || entity.type;
                    break;
                case 'arraybuffer':
                case 'form':
                    break;
                case 'data-url': {
                    const match = entity.match(/^data:(.+?)(;base64)?,(.*)$/);
                    const isBase64 = match[2];
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
                    const binaryStr = Object(util["atob"])(entity);
                    const len = binaryStr.length;
                    const array = new Uint8Array(len);
                    for (let i = 0; i < len; i += 1) {
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
                    throw new Error(`Supported request format:${type}`);
            }
            message.entity(entity, type).mimeType(mimeType);
        }
    }
}
Connector_Connector.connectors.push(XMLHttpConnector_XMLHttpConnector);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiWE1MSHR0cENvbm5lY3Rvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlhNTEh0dHBDb25uZWN0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMkVBQTJFO0FBQzNFLHNGQUFzRjtBQUV0RixPQUFPLEVBQ0wsU0FBUyxHQUNWLE1BQU0sYUFBYSxDQUFDO0FBQ3JCLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFHL0IsTUFBTSxPQUFPLGdCQUFpQixTQUFRLFNBQVM7SUFHN0M7O09BRUc7SUFDSCw2REFBNkQ7SUFDN0QsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFZLEVBQUUsSUFBWSxFQUFFLE1BQWUsRUFBRSxRQUFnQjtRQUMzRSxPQUFPLE9BQU8sY0FBYyxLQUFLLFdBQVcsQ0FBQztJQUMvQyxDQUFDO0lBRUQ7O09BRUc7SUFDSCxNQUFNLENBQUMsT0FBZ0IsRUFBRSxPQUFnQixFQUFFLE9BQWlCO1FBQzFELElBQUksT0FBTyxDQUFDLE1BQU0sS0FBSyxPQUFPLEVBQUU7WUFDOUIsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO2dCQUNwQixJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSw4Q0FBOEMsRUFBRSxDQUFDLENBQUM7YUFDeEc7WUFFRCxZQUFZLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDLENBQUM7WUFFMUMsTUFBTSxPQUFPLEdBQUcsQ0FBQyxLQUFtQixFQUFFLEVBQUU7Z0JBQ3RDLElBQUksS0FBSyxDQUFDLEdBQUcsS0FBSyxnQkFBZ0IsSUFBSSxJQUFJLENBQUMsV0FBVyxJQUFJLEtBQUssQ0FBQyxRQUFRLEVBQUU7b0JBQ3hFLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztpQkFDOUM7WUFDSCxDQUFDLENBQUM7WUFFRixJQUFJ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
// CONCATENATED MODULE: ./lib/connector/IFrameConnector.ts
/* this connector will only be choose in browser compatible environments */
/* eslint no-restricted-globals: ["off", "location", "addEventListener"] */


class IFrameConnector_IFrameConnector extends XMLHttpConnector_XMLHttpConnector {
    constructor(host, port, secure, basePath) {
        super(host, port, secure, basePath);
        this.queue = null;
        this.connected = false;
        this.mid = 0;
        this.messages = {};
        this.doReceive = this.doReceive.bind(this);
        addEventListener('message', this.doReceive, false);
    }
    /**
     * Indicates if this connector implementation is usable for the given host and port
     * @param host
     * @param port
     * @param secure
     * @return
     */
    static isUsable(host, port, secure) {
        // we use location directly here, since there exists environments, which provide a location and a document but
        // no window object
        if (typeof location === 'undefined' || typeof document === 'undefined') {
            return false;
        }
        const locationSecure = location.protocol === 'https:';
        const locationPort = location.port || (locationSecure ? 443 : 80);
        return location.hostname !== host || locationPort !== port || locationSecure !== secure;
    }
    load(path) {
        this.iframe = document.createElement('iframe');
        this.iframe.src = this.origin + this.basePath + path;
        this.iframe.setAttribute('style', IFrameConnector_IFrameConnector.style);
        document.body.appendChild(this.iframe);
        this.queue = [];
        this.iframe.addEventListener('load', this.onLoad.bind(this), false);
    }
    onLoad() {
        if (!this.queue) {
            return;
        }
        const { queue } = this;
        for (let i = 0; i < queue.length; i += 1) {
            this.postMessage(queue[i]);
        }
        this.queue = null;
    }
    /**
     * @inheritDoc
     */
    doSend(message, request, receive) {
        // binary data will be send and received directly
        if (message.isBinary) {
            super.doSend(message, request, receive);
            return;
        }
        if (!this.iframe) {
            this.load(message.request.path);
            // ensure that we get a local resource cache hit
            // eslint-disable-next-line no-param-reassign
            message.request.path = '/connect';
        }
        const msg = {
            mid: this.mid += 1,
            method: request.method,
            path: request.path,
            headers: request.headers,
            entity: request.entity,
            responseHeaders: Connector_Connector.RESPONSE_HEADERS,
        };
        this.messages[msg.mid] = receive;
        const strMsg = JSON.stringify(msg);
        if (this.queue) {
            this.queue.push(strMsg);
        }
        else {
            this.postMessage(strMsg);
        }
        if (!this.connected) {
            setTimeout(() => {
                if (this.messages[msg.mid]) {
                    delete this.messages[msg.mid];
                    receive({
                        status: 0,
                        error: new Error('Connection refused.'),
                        headers: {},
                    });
                }
            }, 10000);
        }
    }
    postMessage(msg) {
        this.iframe.contentWindow.postMessage(msg, this.origin);
    }
    doReceive(event) {
        if (event.origin !== this.origin || event.data[0] !== '{') {
            return;
        }
        const msg = JSON.parse(event.data);
        const receive = this.messages[msg.mid];
        if (receive) {
            delete this.messages[msg.mid];
            this.connected = true;
            receive({
                status: msg.status,
                headers: msg.headers,
                entity: msg.entity,
            });
        }
    }
}
IFrameConnector_IFrameConnector.style = 'width:1px;height:1px;position:absolute;top:-10px;left:-10px;';
Connector_Connector.connectors.push(IFrameConnector_IFrameConnector);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSUZyYW1lQ29ubmVjdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiSUZyYW1lQ29ubmVjdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDJFQUEyRTtBQUMzRSwyRUFBMkU7QUFFM0UsT0FBTyxFQUFFLFNBQVMsRUFBcUIsTUFBTSxhQUFhLENBQUM7QUFDM0QsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFJdEQsTUFBTSxPQUFPLGVBQWdCLFNBQVEsZ0JBQWdCO0lBaUNuRCxZQUFZLElBQVksRUFBRSxJQUFZLEVBQUUsTUFBZSxFQUFFLFFBQWdCO1FBQ3ZFLEtBQUssQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQztRQXpCOUIsVUFBSyxHQUFpQixJQUFJLENBQUM7UUFFM0IsY0FBUyxHQUFZLEtBQUssQ0FBQztRQXlCakMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7UUFDYixJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRTNDLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUE1QkQ7Ozs7OztPQU1HO0lBQ0gsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFZLEVBQUUsSUFBWSxFQUFFLE1BQWU7UUFDekQsOEdBQThHO1FBQzlHLG1CQUFtQjtRQUNuQixJQUFJLE9BQU8sUUFBUSxLQUFLLFdBQVcsSUFBSSxPQUFPLFFBQVEsS0FBSyxXQUFXLEVBQUU7WUFDdEUsT0FBTyxLQUFLLENBQUM7U0FDZDtRQUVELE1BQU0sY0FBYyxHQUFHLFFBQVEsQ0FBQyxRQUFRLEtBQUssUUFBUSxDQUFDO1FBQ3RELE1BQU0sWUFBWSxHQUFHLFFBQVEsQ0FBQyxJ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
// EXTERNAL MODULE: ./NodeConnector (ignored)
var NodeConnector_ignored_ = __webpack_require__(19);

// CONCATENATED MODULE: ./lib/util/websocket-browser.ts
const { WebSocket } = window;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2Vic29ja2V0LWJyb3dzZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3ZWJzb2NrZXQtYnJvd3Nlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLENBQUMsTUFBTSxFQUFFLFNBQVMsRUFBRSxHQUFHLE1BQU0sQ0FBQyJ9
// EXTERNAL MODULE: ./lib/util/observable.ts
var observable = __webpack_require__(17);

// CONCATENATED MODULE: ./lib/connector/WebSocketConnector.ts



class WebSocketConnector_WebSocketConnector {
    /**
     *url
     */
    constructor(url) {
        this.observers = {};
        this.socket = null;
        this.url = url;
    }
    /**
     *url The websocket connect script url
     *a websocket connection
     */
    static create(url) {
        let websocket = this.websockets[url];
        if (!websocket) {
            websocket = new WebSocketConnector_WebSocketConnector(url);
            this.websockets[url] = websocket;
        }
        return websocket;
    }
    open() {
        if (!this.socket) {
            const socket = new WebSocket(this.url);
            let socketPromise;
            const handleSocketCompletion = (error) => {
                // observable error calls can throw an exception therefore cleanup beforehand
                let isError = false;
                if (this.socket === socketPromise) {
                    isError = socket.readyState !== 3;
                    this.socket = null;
                }
                let firstErr = null;
                Object.keys(this.observers).forEach((id) => {
                    const observer = this.observers[id];
                    delete this.observers[id]; // unsubscribe to allow re subscriptions
                    if (!observer) {
                        return;
                    }
                    try {
                        if (isError) {
                            observer.error(new lib_error["CommunicationError"](null, Object.assign({ status: 0, headers: {} }, (error instanceof Error && { error }))));
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
            socket.onerror = handleSocketCompletion;
            socket.onclose = handleSocketCompletion;
            socket.onmessage = (event) => {
                const message = JSON.parse(event.data);
                message.date = new Date(message.date);
                const { id } = message;
                if (!id) {
                    if (message.type === 'error') {
                        handleSocketCompletion(message);
                    }
                    return;
                }
                const observer = this.observers[id];
                if (observer) {
                    if (message.type === 'error') {
                        observer.error(new lib_error["CommunicationError"](null, message));
                    }
                    else {
                        observer.next(message);
                    }
                }
            };
            socketPromise = new Promise((resolve) => {
                socket.onopen = () => resolve(socket);
            });
            this.socket = socketPromise;
        }
        return this.socket;
    }
    close() {
        if (this.socket) {
            this.socket.then((socket) => {
                socket.close();
            });
            this.socket = null;
        }
    }
    /**
     *tokenStorage
     *id subscription ID
     *The channel for sending and receiving messages
     */
    openStream(tokenStorage, id) {
        const stream = new observable["a" /* Observable */]((observer) => {
            if (this.observers[id]) {
                throw new Error('Only one subscription per stream is allowed.');
            }
            this.observers[id] = observer;
            return () => {
                // cleanup only our subscription and handle re subscription on the same stream id correctly
                if (this.observers[id] === observer) {
                    delete this.observers[id];
                }
            };
        });
        Object.assign(stream, {
            send: (message) => {
                this.open().then((socket) => {
                    const jsonMessage = JSON.stringify(Object.assign(Object.assign({ id }, message), (tokenStorage.token && { token: tokenStorage.token })));
                    socket.send(jsonMessage);
                });
            },
        });
        return stream;
    }
}
/**
 * Map of all available connectors to their respective websocket connections
 */
WebSocketConnector_WebSocketConnector.websockets = {};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV2ViU29ja2V0Q29ubmVjdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiV2ViU29ja2V0Q29ubmVjdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUM5QyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDOUMsT0FBTyxFQUFFLFVBQVUsRUFBYyxNQUFNLG9CQUFvQixDQUFDO0FBNkI1RCxNQUFNLE9BQU8sa0JBQWtCO0lBeUI3Qjs7T0FFRztJQUNILFlBQVksR0FBVztRQXRCZixjQUFTLEdBQTJELEVBQUUsQ0FBQztRQUV2RSxXQUFNLEdBQThCLElBQUksQ0FBQztRQXFCL0MsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7SUFDakIsQ0FBQztJQWxCRDs7O09BR0c7SUFDSCxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQVc7UUFDdkIsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2QsU0FBUyxHQUFHLElBQUksa0JBQWtCLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDeEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsR0FBRyxTQUFTLENBQUM7U0FDbEM7UUFDRCxPQUFPLFNBQVMsQ0FBQztJQUNuQixDQUFDO0lBU0QsSUFBSTtRQUNGLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2hCLE1BQU0sTUFBTSxHQUFHLElBQUksU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN2QyxJQUFJLGFBQWlDLENBQUM7WUFFdEMsTUFBTSxzQkFBc0IsR0FBRyxDQUFDLEtBQWtCLEVBQUUsRUFBRTtnQkFDcEQsNkVBQTZFO2dCQUM3RSxJQUFJLE9BQU8sR0FBRyxLQUFLLENBQUM7Z0JBQ3BCLElBQUksSUFBSSxDQUFD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
// CONCATENATED MODULE: ./lib/connector/index.ts







//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsT0FBTyxFQUFFLFlBQVksRUFBaUMsVUFBVSxHQUNqRSxNQUFNLFdBQVcsQ0FBQztBQUNuQixPQUFPLEVBQ3FELFNBQVMsR0FDcEUsTUFBTSxhQUFhLENBQUM7QUFDckIsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDaEQsT0FBTyxFQUFFLGtCQUFrQixFQUFvQyxNQUFNLHNCQUFzQixDQUFDIn0=

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "Metadata", function() { return /* reexport */ Metadata_Metadata; });
__webpack_require__.d(__webpack_exports__, "MetadataState", function() { return /* reexport */ MetadataState; });
__webpack_require__.d(__webpack_exports__, "Permission", function() { return /* reexport */ Permission["a" /* Permission */]; });
__webpack_require__.d(__webpack_exports__, "Validator", function() { return /* reexport */ Validator; });
__webpack_require__.d(__webpack_exports__, "ValidationResult", function() { return /* reexport */ ValidationResult; });
__webpack_require__.d(__webpack_exports__, "Code", function() { return /* reexport */ Code_Code; });
__webpack_require__.d(__webpack_exports__, "Modules", function() { return /* reexport */ Modules_Modules; });
__webpack_require__.d(__webpack_exports__, "Logger", function() { return /* reexport */ Logger_Logger; });
__webpack_require__.d(__webpack_exports__, "PushMessage", function() { return /* reexport */ PushMessage_PushMessage; });
__webpack_require__.d(__webpack_exports__, "TokenStorage", function() { return /* reexport */ TokenStorage; });
__webpack_require__.d(__webpack_exports__, "GlobalStorage", function() { return /* reexport */ GlobalStorage_GlobalStorage; });
__webpack_require__.d(__webpack_exports__, "WebStorage", function() { return /* reexport */ WebStorage_WebStorage; });

// EXTERNAL MODULE: ./lib/Acl.ts
var Acl = __webpack_require__(7);

// EXTERNAL MODULE: ./lib/util/index.ts + 13 modules
var util = __webpack_require__(4);

// EXTERNAL MODULE: ./lib/error/index.ts + 5 modules
var error = __webpack_require__(5);

// CONCATENATED MODULE: ./lib/intersection/Metadata.ts



var MetadataState;
(function (MetadataState) {
    MetadataState[MetadataState["UNAVAILABLE"] = -1] = "UNAVAILABLE";
    MetadataState[MetadataState["PERSISTENT"] = 0] = "PERSISTENT";
    MetadataState[MetadataState["DIRTY"] = 1] = "DIRTY";
})(MetadataState || (MetadataState = {}));
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
class Metadata_Metadata extends util["Lockable"] {
    /**
     * @param type
     */
    constructor(type) {
        super();
        this.entityManager = null;
        this.decodedKey = null;
        this.id = null;
        this.state = MetadataState.DIRTY;
        this.enabled = true;
        this.id = null;
        this.version = null;
        this.type = type;
        this.acl = new Acl["a" /* Acl */]();
    }
    static create(type, db) {
        if (type.isEntity) {
            return new Metadata_Metadata(type);
        }
        if (type.isEmbeddable) {
            return { type, db, setDirty() { } };
        }
        throw new Error(`Illegal type ${type}`);
    }
    /**
     * Returns the metadata of the managed object
     * @param managed
     * @return
     */
    static get(managed) {
        // eslint-disable-next-line no-underscore-dangle
        return managed._metadata;
    }
    /**
     * @type EntityManager
     */
    get db() {
        if (this.entityManager) {
            return this.entityManager;
        }
        this.entityManager = __webpack_require__(9).db; // eslint-disable-line global-require
        return this.entityManager;
    }
    /**
     * @param db
     */
    set db(db) {
        if (!this.entityManager) {
            this.entityManager = db;
        }
        else {
            throw new Error('DB has already been set.');
        }
    }
    /**
     * @type string
     * @readonly
     */
    get bucket() {
        return this.type.name;
    }
    /**
     * @type string
     * @readonly
     */
    get key() {
        if (!this.decodedKey && this.id) {
            const index = this.id.lastIndexOf('/');
            this.decodedKey = decodeURIComponent(this.id.substring(index + 1));
        }
        return this.decodedKey;
    }
    /**
     * @param value
     */
    set key(value) {
        const val = `${value}`;
        if (this.id) {
            throw new Error('The id can\'t be set twice.');
        }
        this.id = `/db/${this.bucket}/${encodeURIComponent(val)}`;
        this.decodedKey = val;
    }
    /**
     * Indicates if this object already belongs to an db
     * <code>true</code> if this object belongs already to an db otherwise <code>false</code>
     * @type boolean
     * @readonly
     */
    get isAttached() {
        return !!this.entityManager;
    }
    /**
     * Indicates if this object is represents a db object, but was not loaded up to now
     * @type boolean
     * @readonly
     */
    get isAvailable() {
        return this.state > MetadataState.UNAVAILABLE;
    }
    /**
     * Indicates if this object represents the state of the db and was not modified in any manner
     * @type boolean
     * @readonly
     */
    get isPersistent() {
        return this.state === MetadataState.PERSISTENT;
    }
    /**
     * Indicates that this object was modified and the object was not written back to the db
     * @type boolean
     * @readonly
     */
    get isDirty() {
        return this.state === MetadataState.DIRTY;
    }
    /**
     * Enable/Disable state change tracking of this object
     * @param newStateTrackingState The new change tracking state
     * @return
     */
    enable(newStateTrackingState) {
        this.enabled = newStateTrackingState;
    }
    /**
     * Throws the corresponding error if a property is accessed before the owning object is loaded
     * @throws an exception if the object properties aren't available and the object is enabled
     */
    throwUnloadedPropertyAccess(property) {
        if (this.enabled && !this.isAvailable) {
            throw new error["PersistentError"](`Illegal property access on ${this.id}#${property} , ensure that this reference is loaded before it's properties are accessed.`);
        }
    }
    /**
     * Indicates that the associated object isn't available
     * @return
     */
    setUnavailable() {
        this.state = MetadataState.UNAVAILABLE;
    }
    /**
     * Indicates that the associated object is not stale
     *
     * An object is stale if it correlates the database state and is not modified by the user.
     *
     * @return
     */
    setPersistent() {
        this.state = MetadataState.PERSISTENT;
    }
    /**
     * Indicates the the object is modified by the user
     * @return
     */
    setDirty() {
        this.state = MetadataState.DIRTY;
    }
    /**
     * Indicates the the object is removed
     * @return
     */
    setRemoved() {
        // mark the object only as dirty if it was already available
        if (this.isAvailable) {
            this.setDirty();
            this.version = null;
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWV0YWRhdGEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJNZXRhZGF0YS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQzdCLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFHbkMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQWMzQyxNQUFNLENBQU4sSUFBWSxhQUlYO0FBSkQsV0FBWSxhQUFhO0lBQ3ZCLGdFQUFnQixDQUFBO0lBQ2hCLDZEQUFjLENBQUE7SUFDZCxtREFBUyxDQUFBO0FBQ1gsQ0FBQyxFQUpXLGFBQWEsS0FBYixhQUFhLFFBSXhCO0FBRUQ7Ozs7Ozs7OztHQVNHO0FBQ0gsTUFBTSxPQUFPLFFBQVMsU0FBUSxRQUFRO0lBc0pwQzs7T0FFRztJQUNILFlBQVksSUFBcUI7UUFDL0IsS0FBSyxFQUFFLENBQUM7UUF6SlYsa0JBQWEsR0FBeUIsSUFBSSxDQUFDO1FBSTNDLGVBQVUsR0FBa0IsSUFBSSxDQUFDO1FBRWpDLE9BQUUsR0FBa0IsSUFBSSxDQUFDO1FBcUp2QixJQUFJLENBQUMsS0FBSyxHQUFHLGFBQWEsQ0FBQyxLQUFLLENBQUM7UUFDakMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDcEIsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUM7UUFDZixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUNwQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksR0FBRyxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQS9IRCxNQUFNLENBQUMsTUFBTSxDQUFtQixJQUFvQixFQUFFLEVBQWtCO1FBQ3RFLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixPQUFPLElBQUksUUFBUSxDQUFDLElBQXFCLENBQUMsQ0FBQztTQUM1QztR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
// EXTERNAL MODULE: ./lib/intersection/Permission.ts
var Permission = __webpack_require__(16);

// CONCATENATED MODULE: ./lib/intersection/Validator.ts
const FallBachValLib = {};
let valLib = FallBachValLib;
try {
    // we load this module as an optional external dependency
    // eslint-disable-next-line global-require
    valLib = __webpack_require__(21);
}
catch (e) {
    // ignore loading optional module error
}
class Validator {
    constructor(key, entity) {
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
    static compile(managedType, validationCode) {
        const keys = [];
        const iter = managedType.attributes();
        for (let el = iter.next(); !el.done; el = iter.next()) {
            const attr = el.value;
            keys.push(attr.name);
        }
        // eslint-disable-next-line @typescript-eslint/no-implied-eval,no-new-func
        const fn = new Function(...keys, validationCode);
        return function onValidate(argObj) {
            if (valLib === FallBachValLib) {
                throw new Error('Validation code will not be executed. Make sure that the validator package is correctly provided as an external dependency.');
            }
            const args = keys.map((name) => argObj[name]);
            return fn.apply({}, args);
        };
    }
    /**
     * Gets the value of the attribute
     * @return Value
     */
    get value() {
        return this.entity[this.key];
    }
    /**
     * Checks if the attribute is valid
     * @return
     */
    get isValid() {
        return this.errors.length === 0;
    }
    is(error, fn) {
        if (error instanceof Function) {
            return this.is('is', error);
        }
        if (fn(this.value, valLib) === false) {
            this.errors.push(error);
        }
        return this;
    }
    callMethod(method, errorMessage, argumentList) {
        const args = argumentList || [];
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
    }
    toStringValue() {
        const { value } = this;
        if (typeof value === 'string' || value instanceof Date) {
            return value;
        }
        return JSON.stringify(value);
    }
    toJSON() {
        return {
            isValid: this.isValid,
            errors: this.errors,
        };
    }
}
const OTHER_VALIDATORS = ['contains', 'equals', 'matches'];
Object.keys(valLib).forEach((name) => {
    if (name.startsWith('is') || OTHER_VALIDATORS.includes(name)) {
        // use function here to keep the correct this context
        Validator.prototype[name] = function validate(...args) {
            const error = typeof args[0] === 'string' ? args.shift() : null;
            return this.callMethod(name, error, args);
        };
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmFsaWRhdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiVmFsaWRhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBLE1BQU0sY0FBYyxHQUFHLEVBQUUsQ0FBQztBQUMxQixJQUFJLE1BQU0sR0FBOEIsY0FBYyxDQUFDO0FBQ3ZELElBQUk7SUFDRix5REFBeUQ7SUFDekQsMENBQTBDO0lBQzFDLE1BQU0sR0FBRyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7Q0FDL0I7QUFBQyxPQUFPLENBQUMsRUFBRTtJQUNWLHVDQUF1QztDQUN4QztBQVNELE1BQU0sT0FBTyxTQUFTO0lBK0ZwQixZQUFZLEdBQVcsRUFBRSxNQUFjO1FBcEV2Qzs7V0FFRztRQUNLLFdBQU0sR0FBYSxFQUFFLENBQUM7UUFrRTVCLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ2YsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDdkIsQ0FBQztJQWpHRDs7Ozs7T0FLRztJQUNILE1BQU0sQ0FBQyxPQUFPLENBQUMsV0FBNkIsRUFBRSxjQUFzQjtRQUNsRSxNQUFNLElBQUksR0FBYSxFQUFFLENBQUM7UUFDMUIsTUFBTSxJQUFJLEdBQUcsV0FBVyxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ3RDLEtBQUssSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksRUFBRSxFQUFFO1lBQ3JELE1BQU0sSUFBSSxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUM7WUFDdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDdEI7UUFFRCwwRUFBMEU7UUFDMUUsTUFBTSxFQUFFLEdBQUcsSUFBSSxRQUFRLENBQUMsR0FBRyxJQUFJLEVBQUUsY0FBYyxDQUFDLENBQUM7UUFDakQsT0FBTyxTQUFTLFVBQVUsQ0FBQyxNQUFvQztZQUM3RCxJQUFJLE1BQU0sS0FBSyxjQUFjLEVBQUU7Z0JBQzdCLE1BQU0sSUFBSSxLQUFLLENBQUMsNkhBQTZILENBQUMsQ0FBQzthQUNoSjtZQUVELE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQzlDLE9BQU8sRUFBRSxDQUFDLEtBQUssQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDNUIsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQWlCRDs7O09BR0c7SUFDSCxJQUFJLEtBQUs7UUFDUCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFFRDs7O09BR0c7SUFDSCxJQUFJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBMkJELEVBQUUsQ0FBQyxLQUF3QixFQUFFLEVBQWE7UUFDeEMsSUFBSSxLQUFLLFlBQVksUUFBUSxFQUFFO1lBQzdCLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDN0I7UUFFRCxJQUFJLEVBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxLQUFLLEtBQUssRUFBRTtZQUNyQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN6QjtRQUVELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQU9ELFVBQVUsQ0FBQyxNQUE4QixFQUFFLFlBQTJCLEVBQUUsWUFBbUI7UUFDekYsTUFBTSxJQUFJLEdBQUcsWUFBWSxJQUFJLEVBQUUsQ0FBQztRQUNoQyxJQUFJO1lBQ0YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQztZQUNuQyxJQUFLLE1BQU0sQ0FBQyxNQUFNLENBQWMsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLEtBQUssRUFBRTtnQkFDNUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxJQUFJLE1BQU0sQ0FBQyxDQUFDO2FBQzFDO1NBQ0Y7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUNWLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDN0M7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRCxhQUFhO1FBQ1gsTUFBTSxFQUFFLEtBQUssRUFBRSxHQUFHLElBQUksQ0FBQztRQUN2QixJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsSUFBSSxLQUFLLFlBQVksSUFBSSxFQUFFO1lBQ3RELE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFFRCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUVELE1BQU07UUFDSixPQUFPO1lBQ0wsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPO1lBQ3JCLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtTQUNwQixDQUFDO0lBQ0osQ0FBQztDQUNGO0FBRUQsTUFBTSxnQkFBZ0IsR0FBYSxDQUFDLFVBQVUsRUFBRSxRQUFRLEVBQUUsU0FBUyxDQUFDLENBQUM7QUFDcEUsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQTBCLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBd0IsRUFBRSxFQUFFO0lBQ2pGLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUU7UUFDNUQscURBQXFEO1FBQ3BELFNBQVMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFTLEdBQUcsU0FBUyxRQUFRLENBQWtCLEdBQUcsSUFBVztZQUNwRixNQUFNLEtBQUssR0FBRyxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ2hFLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzVDLENBQUMsQ0FBQztLQUNIO0FBQ0gsQ0FBQyxDQUFDLENBQUMifQ==
// CONCATENATED MODULE: ./lib/intersection/ValidationResult.ts
class ValidationResult {
    constructor() {
        this.fields = {};
    }
    /**
     * Indicates if all fields are valid
     * @return <code>true</code> if all fields are valid
     */
    get isValid() {
        return Object.keys(this.fields).every((key) => this.fields[key].isValid);
    }
    toJSON() {
        const json = {};
        Object.keys(this.fields).forEach((key) => {
            json[key] = this.fields[key].toJSON();
        });
        return json;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmFsaWRhdGlvblJlc3VsdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlZhbGlkYXRpb25SZXN1bHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0EsTUFBTSxPQUFPLGdCQUFnQjtJQUE3QjtRQUNTLFdBQU0sR0FBc0MsRUFBRSxDQUFDO0lBaUJ4RCxDQUFDO0lBZkM7OztPQUdHO0lBQ0gsSUFBSSxPQUFPO1FBQ1QsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDM0UsQ0FBQztJQUVELE1BQU07UUFDSixNQUFNLElBQUksR0FBWSxFQUFFLENBQUM7UUFDekIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7WUFDdkMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDeEMsQ0FBQyxDQUFDLENBQUM7UUFDSCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7Q0FDRiJ9
// EXTERNAL MODULE: ./lib/message.ts
var message = __webpack_require__(2);

// EXTERNAL MODULE: ./lib/connector/index.ts + 5 modules
var connector = __webpack_require__(0);

// CONCATENATED MODULE: ./lib/intersection/Code.ts



/**
 * Representation of a Code which runs on Baqend.
 */
class Code_Code {
    /**
     * @param metamodel
     * @param entityManagerFactory
     */
    constructor(metamodel, entityManagerFactory) {
        this.metamodel = metamodel;
        this.entityManagerFactory = entityManagerFactory;
    }
    /**
     * Converts the given function to a string
     * @param fn The JavaScript function to serialize
     * @return The serialized function
     */
    functionToString(fn) {
        if (!fn) {
            return '';
        }
        let str = fn.toString();
        str = str.substring(str.indexOf('{') + 1, str.lastIndexOf('}'));
        if (str.charAt(0) === '\n') {
            str = str.substring(1);
        }
        if (str.charAt(str.length - 1) === '\n') {
            str = str.substring(0, str.length - 1);
        }
        return str;
    }
    /**
     * Converts the given string to a module wrapper function
     * @param signature The expected parameters of the function
     * @param code The JavaScript function to deserialize
     * @return The deserialized function
     */
    stringToFunction(signature, code) {
        // eslint-disable-next-line @typescript-eslint/no-implied-eval
        return new Function(signature /* typings are incorrect here */, code); // eslint-disable-line no-new-func
    }
    /**
     * Loads a list of all available modules without handlers
     *
     * @return
     */
    loadModules() {
        const msg = new message["GetAllModules"]();
        return this.entityManagerFactory.send(msg)
            .then((response) => response.entity);
    }
    loadCode(type, codeType, asFunction = false) {
        const bucket = typeof type === 'string' ? type : type.name;
        const msg = new message["GetBaqendCode"](bucket, codeType)
            .responseType('text');
        return this.entityManagerFactory.send(msg)
            .then((response) => this.parseCode(bucket, codeType, asFunction, response.entity), (e) => {
            if (e.status === connector["StatusCode"].OBJECT_NOT_FOUND) {
                return null;
            }
            throw e;
        });
    }
    saveCode(type, codeType, fn) {
        const bucket = typeof type === 'string' ? type : type.name;
        const msg = new message["SetBaqendCode"](bucket, codeType)
            .entity(fn instanceof Function ? this.functionToString(fn) : fn, 'text')
            .responseType('text');
        return this.entityManagerFactory.send(msg)
            .then((response) => this.parseCode(bucket, codeType, fn instanceof Function, response.entity));
    }
    /**
     * Deletes Baqend code identified by the given bucket and code type
     *
     * @param type The entity type for the handler or the Name of the
     * Baqend code
     * @param codeType The type of the code
     * @return succeed if the code was deleted
     */
    deleteCode(type, codeType) {
        const bucket = typeof type === 'string' ? type : type.name;
        const msg = new message["DeleteBaqendCode"](bucket, codeType);
        return this.entityManagerFactory.send(msg)
            .then(() => this.parseCode(bucket, codeType, false, null));
    }
    /**
     * @param bucket
     * @param codeType
     * @param [asFunction=false]
     * @param code
     * @return
     * @private
     */
    parseCode(bucket, codeType, asFunction, code) {
        if (codeType === 'validate') {
            const type = this.metamodel.entity(bucket);
            type.validationCode = code === null ? null : Validator.compile(type, code);
            return asFunction ? type.validationCode : code;
        }
        return code && asFunction ? this.stringToFunction(['module', 'exports'], code) : code;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29kZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkNvZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLENBQUM7QUFDdEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUkxQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRXhDOztHQUVHO0FBQ0gsTUFBTSxPQUFPLElBQUk7SUFLZjs7O09BR0c7SUFDSCxZQUFZLFNBQW9CLEVBQUUsb0JBQTBDO1FBQzFFLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzNCLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxvQkFBb0IsQ0FBQztJQUNuRCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILGdCQUFnQixDQUFDLEVBQVk7UUFDM0IsSUFBSSxDQUFDLEVBQUUsRUFBRTtZQUNQLE9BQU8sRUFBRSxDQUFDO1NBQ1g7UUFFRCxJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDeEIsR0FBRyxHQUFHLEdBQUcsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2hFLElBQUksR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUFJLEVBQUU7WUFDMUIsR0FBRyxHQUFHLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDeEI7UUFFRCxJQUFJLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsS0FBSyxJQUFJLEVBQUU7WUFDdkMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDeEM7UUFFRCxPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILGdCQUFnQixDQUFDLFNBQW1CLEVBQUUsSUFBWTtRQUNoRCw4REFBOEQ7UUFDOUQsT0FBTyxJQUFJLFFBQVEsQ0FBQyxTQUFnQixDQUFDLGdDQUFnQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsa0NBQWtDO0lBQ2xILENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsV0FBVztRQUNULE1BQU0sR0FBRyxHQUFHLElBQUksT0FBTyxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3hDLE9BQU8sSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7YUFDdkMsSUFBSSxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQTBCRCxRQUFRLENBQUMsSUFBK0IsRUFBRSxRQUFnQixFQUFFLFVBQVUsR0FBRyxLQUFLO1FBQzVFLE1BQU0sTUFBTSxHQUFHLE9BQU8sSUFBSSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQzNELE1BQU0sR0FBRyxHQUFHLElBQUksT0FBTyxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDO2FBQ3BELFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUV4QixPQUFPLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO2FBQ3ZDLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRTtZQUN2RixJQUFJLENBQUMsQ0FBQyxNQUFNLEtBQUssVUFBVSxDQUFDLGdCQUFnQixFQUFFO2dCQUM1QyxPQUFPLElBQUksQ0FBQzthQUNiO1lBRUQsTUFBTSxDQUFDLENBQUM7UUFDVixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUF3QkQsUUFBUSxDQUFDLElBQStCLEVBQUUsUUFBZ0IsRUFBRSxFQUFxQjtRQUMvRSxNQUFNLE1BQU0sR0FBRyxPQUFPLElBQUksS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztRQUUzRCxNQUFNLEdBQUcsR0FBRyxJQUFJLE9BQU8sQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQzthQUNwRCxNQUFNLENBQUMsRUFBRSxZQUFZLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsTUFBTSxDQUFDO2FBQ3ZFLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUV4QixPQUFPLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO2FBQ3ZDLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLEVBQUUsWUFBWSxRQUFRLEVBQUUsUUFBUSxDQUFDLE1BQU0sQ0FBRSxDQUFDLENBQUM7SUFDcEcsQ0FBQztJQUVEOzs7Ozs7O09BT0c7SUFDSCxVQUFVLENBQUMsSUFBK0IsRUFBRSxRQUFnQjtRQUMxRCxNQUFNLE1BQU0sR0FBRyxPQUFPLElBQUksS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztRQUMzRCxNQUFNLEdBQUcsR0FBRyxJQUFJLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDM0QsT0FBTyxJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQzthQUN2QyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQy9ELENBQUM7SUFFRDs7Ozs7OztPQU9HO0lBQ0gsU0FBUyxDQUFDLE1BQWMsRUFBRSxRQUFnQixFQUFFLFVBQW1CLEVBQUUsSUFBbUI7UUFDbEYsSUFBSSxRQUFRLEtBQUssVUFBVSxFQUFFO1lBQzNCLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBRSxDQUFDO1lBQzVDLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztZQUMzRSxPQUFPLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1NBQ2hEO1FBRUQsT0FBTyxJQUFJLElBQUksVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxRQUFRLEVBQUUsU0FBUyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUN4RixDQUFDO0NBQ0YifQ==
// CONCATENATED MODULE: ./lib/intersection/Modules.ts

/**
 * An executor of Modules running on Baqend.
 */
class Modules_Modules {
    /**
     * @param entityManager
     */
    constructor(entityManager) {
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
    get(bucket, query, options, doneCallback, failCallback) {
        if (query instanceof Function) {
            return this.get(bucket, {}, query, options, doneCallback);
        }
        if (options instanceof Function) {
            return this.get(bucket, query, {}, options, doneCallback);
        }
        const opt = options || {};
        const msg = new message["GetBaqendModule"](bucket)
            .addQueryString(query || '')
            .responseType(opt.responseType || null);
        return this.send(msg, doneCallback, failCallback);
    }
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
    post(bucket, body, options, doneCallback, failCallback) {
        if (typeof options === 'function') {
            return this.post(bucket, body, {}, options, doneCallback);
        }
        const opt = options || {};
        const msg = new message["PostBaqendModule"](bucket)
            .entity(body, opt.requestType)
            .mimeType(opt.mimeType || null)
            .responseType(opt.responseType || null);
        return this.send(msg, doneCallback, failCallback);
    }
    send(msg, doneCallback, failCallback) {
        return this.entityManager.send(msg)
            .then((response) => response.entity)
            .then(doneCallback, failCallback);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTW9kdWxlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIk1vZHVsZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLENBQUM7QUFNdEM7O0dBRUc7QUFDSCxNQUFNLE9BQU8sT0FBTztJQUdsQjs7T0FFRztJQUNILFlBQVksYUFBNEI7UUFDdEMsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7SUFDckMsQ0FBQztJQUVEOzs7Ozs7Ozs7Ozs7O09BYUc7SUFDSCxHQUFHLENBQUMsTUFBYyxFQUFFLEtBQXVELEVBQ3pFLE9BQXdELEVBQUUsWUFBa0IsRUFBRSxZQUFrQjtRQUNoRyxJQUFJLEtBQUssWUFBWSxRQUFRLEVBQUU7WUFDN0IsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxZQUFZLENBQUMsQ0FBQztTQUMzRDtRQUVELElBQUksT0FBTyxZQUFZLFFBQVEsRUFBRTtZQUMvQixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLFlBQVksQ0FBQyxDQUFDO1NBQzNEO1FBRUQsTUFBTSxHQUFHLEdBQUcsT0FBTyxJQUFJLEVBQUUsQ0FBQztRQUUxQixNQUFNLEdBQUcsR0FBRyxJQUFJLE9BQU8sQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDO2FBQzVDLGNBQWMsQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDO2FBQzNCLFlBQVksQ0FBQyxHQUFHLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxDQUFDO1FBRTFDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsWUFBWSxFQUFFLFlBQVksQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFFRDs7Ozs7Ozs7Ozs7Ozs7O09BZUc7SUFDSCxJQUFJLENBQUMsTUFBYyxFQUFFLElBQWlCLEVBQUUsT0FDTCxFQUFFLFlBQWtCLEVBQUUsWUFBa0I7UUFDekUsSUFBSSxPQUFPLE9BQU8sS0FBSyxVQUFVLEVBQUU7WUFDakMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxZQUFZLENBQUMsQ0FBQztTQUMzRDtRQUVELE1BQU0sR0FBRyxHQUFHLE9BQU8sSUFBSSxFQUFFLENBQUM7UUFFMUIsTUFBTSxHQUFHLEdBQUcsSUFBSSxPQUFPLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDO2FBQzdDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLFdBQVcsQ0FBQzthQUM3QixRQUFRLENBQUMsR0FBRyxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUM7YUFDOUIsWUFBWSxDQUFDLEdBQUcsQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDLENBQUM7UUFFMUMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxZQUFZLEVBQUUsWUFBWSxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUVELElBQUksQ0FBQyxHQUFZLEVBQUUsWUFBa0IsRUFBRSxZQUFrQjtRQUN2RCxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQzthQUNoQyxJQUFJLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7YUFDbkMsSUFBSSxDQUFDLFlBQVksRUFBRSxZQUFZLENBQUMsQ0FBQztJQUN0QyxDQUFDO0NBQ0YifQ==
// CONCATENATED MODULE: ./lib/intersection/Logger.ts

/**
 * A Logger to store log notes when running the app.
 */
class Logger_Logger {
    constructor() {
        this.entityManager = null;
        this.levelIndex = 2;
    }
    /**
     * Creates a Logger instance for the given EntityManager
     * @param entityManager - Theo owning entityManager
     * @return The created logger instance
     */
    static create(entityManager) {
        const proto = this.prototype;
        const logger = (() => {
            function LoggerFunction(...args) {
                proto.log.apply(LoggerFunction, args);
            }
            Object.getOwnPropertyNames(proto).forEach((key) => {
                Object.defineProperty(LoggerFunction, key, Object.getOwnPropertyDescriptor(proto, key));
            });
            return LoggerFunction;
        })();
        logger.init(entityManager);
        return logger;
    }
    /**
     * The log level which will be logged
     *
     * The log level can be one of 'trace', 'debug', 'info', 'warn', 'error'
     * @type string
     */
    get level() {
        return Logger_Logger.LEVELS[this.levelIndex];
    }
    /**
     * Sets the log level which will be logged
     * @param value
     */
    set level(value) {
        const index = Logger_Logger.LEVELS.indexOf(value);
        if (index === -1) {
            throw new Error(`Unknown logging level ${value}`);
        }
        this.levelIndex = index;
    }
    log(...args) {
        const level = Logger_Logger.LEVELS.indexOf(args[0]) === -1 ? 'info' : args.shift();
        if (this.levelIndex > Logger_Logger.LEVELS.indexOf(level)) {
            return Promise.resolve(null);
        }
        let message = typeof args[0] === 'string' ? this.format(args.shift(), args) : '[no message]';
        let data = null;
        if (args.length) {
            const arg = args.pop();
            data = arg;
            if (typeof arg !== 'object' || Array.isArray(arg)) {
                data = { data: arg };
            }
            if (arg instanceof Error) {
                // errors aren't loggable by default, since they do not have any visible property
                const { 
                // @ts-ignore
                stack, data: data1, message: message1, name, status, } = arg;
                data = {
                    name,
                    message: message1,
                    stack,
                    status,
                    data: data1,
                };
            }
        }
        if (args.length) {
            message += `, ${args.join(', ')}`;
        }
        return this.logJSON(Object.assign({ date: new Date().toISOString(), message,
            level,
            data }, (this.entityManager.me && { user: this.entityManager.me.id })));
    }
    format(message, args) {
        if (args.length === 0) {
            return message;
        }
        const str = String(message).replace(Logger_Logger.FORMAT_REGEXP, (x) => {
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
    }
    init(entityManager) {
        this.entityManager = entityManager;
        this.levelIndex = 2;
        Logger_Logger.LEVELS.forEach((level) => {
            this[level] = this.log.bind(this, level);
        });
    }
    logJSON(json) {
        if (!this.entityManager.isReady) {
            return this.entityManager.ready(this.logJSON.bind(this, json));
        }
        return this.entityManager.send(new message["CreateObject"]('logs.AppLog', json));
    }
}
Logger_Logger.LEVELS = ['trace', 'debug', 'info', 'warn', 'error'];
Logger_Logger.FORMAT_REGEXP = /%[sdj%]/g;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9nZ2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiTG9nZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sS0FBSyxHQUFHLE1BQU0sWUFBWSxDQUFDO0FBTWxDOztHQUVHO0FBQ0gsTUFBTSxPQUFPLE1BQU07SUFBbkI7UUFLUyxrQkFBYSxHQUFrQixJQUFXLENBQUM7UUFFM0MsZUFBVSxHQUFXLENBQUMsQ0FBQztJQWtNaEMsQ0FBQztJQWhNQzs7OztPQUlHO0lBQ0gsTUFBTSxDQUFDLE1BQU0sQ0FBQyxhQUE0QjtRQUN4QyxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBRTdCLE1BQU0sTUFBTSxHQUFHLENBQUMsR0FBRyxFQUFFO1lBQ25CLFNBQVMsY0FBYyxDQUFDLEdBQUcsSUFBVztnQkFDcEMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsY0FBYyxFQUFFLElBQVcsQ0FBQyxDQUFDO1lBQy9DLENBQUM7WUFFRCxNQUFNLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7Z0JBQ2hELE1BQU0sQ0FBQyxjQUFjLENBQUMsY0FBYyxFQUFFLEdBQUcsRUFBRSxNQUFNLENBQUMsd0JBQXdCLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBRSxDQUFDLENBQUM7WUFDM0YsQ0FBQyxDQUFDLENBQUM7WUFFSCxPQUFPLGNBQStCLENBQUM7UUFDekMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUVMLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFFM0IsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsSUFBSSxLQUFLO1FBQ1AsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsSUFBSSxLQUFLLENBQUMsS0FB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
// EXTERNAL MODULE: ./lib/binding/index.ts + 14 modules
var binding = __webpack_require__(3);

// CONCATENATED MODULE: ./lib/intersection/PushMessage.ts

/**
 * PushMessages are used to send a push notification to a set of devices
 */
class PushMessage_PushMessage {
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
    constructor(devices, message, subject, options, badge, data) {
        const opts = typeof options === 'string' ? { sound: options, badge, data } : (options || {});
        this.devices = PushMessage_PushMessage.initDevices(devices);
        this.message = message;
        this.subject = subject;
        Object.assign(this, opts);
    }
    /**
     * Instantiates a set of devices from the given parameter
     * @param devices
     * @return
     */
    static initDevices(devices) {
        if (devices instanceof Set) {
            return devices;
        }
        if (devices instanceof binding["Entity"]) {
            return new Set([devices]);
        }
        if (!devices || devices[Symbol.iterator]) {
            return new Set(devices);
        }
        throw new Error('Only Sets, Lists and Arrays can be used as devices.');
    }
    /**
     * Adds a new object to the set of devices
     * @param device will be added to the device set to receive the push notification
     * @return
     */
    addDevice(device) {
        this.devices.add(device);
    }
    /**
     * Converts the push message to JSON
     * @return
     */
    toJSON() {
        if (!this.devices || !this.devices.size) {
            throw new Error('Set of devices is empty.');
        }
        return Object.assign({}, this, {
            devices: Array.from(this.devices, (device) => device.id),
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHVzaE1lc3NhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJQdXNoTWVzc2FnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBd0VwQzs7R0FFRztBQUNILE1BQU0sT0FBTyxXQUFXO0lBZ0J0Qjs7Ozs7Ozs7OztPQVVHO0lBQ0gsWUFBWSxPQUFrRSxFQUFFLE9BQWdCLEVBQUUsT0FBZ0IsRUFDaEgsT0FBcUMsRUFBRSxLQUF1QixFQUFFLElBQVc7UUFDM0UsTUFBTSxJQUFJLEdBQUcsT0FBTyxPQUFPLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUMsQ0FBQztRQUU3RixJQUFJLENBQUMsT0FBTyxHQUFHLFdBQVcsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFFdkIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSyxNQUFNLENBQUMsV0FBVyxDQUFDLE9BQW1FO1FBQzVGLElBQUksT0FBTyxZQUFZLEdBQUcsRUFBRTtZQUMxQixPQUFPLE9BQU8sQ0FBQztTQUNoQjtRQUVELElBQUksT0FBTyxZQUFZLE1BQU0sRUFBRTtZQUM3QixPQUFPLElBQUksR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztTQUMzQjtRQUVELElBQUksQ0FBQyxPQUFPLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUN4QyxPQUFPLElBQUksR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ3pCO1FBRUQsTUFBTSxJQUFJLEtBQUssQ0FBQyxxREFBcUQsQ0FBQyxDQUFDO0lBQ3pFLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsU0FBUyxDQUFDLE1BQW9CO1FBQzVCLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFFRDs7O09BR0c7SUFDSCxNQUFNO1FBQ0osSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRTtZQUN2QyxNQUFNLElBQUksS0FBSyxDQUFDLDBCQUEwQixDQUFDLENBQUM7U0FDN0M7UUFFRCxPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBYSxFQUFFLElBQUksRUFBRTtZQUN4QyxPQUFPLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO1NBQ3pELENBQUMsQ0FBQztJQUNMLENBQUM7Q0FDRiJ9
// CONCATENATED MODULE: ./lib/intersection/TokenStorage.ts

class TokenStorage {
    /**
     * @param origin The origin where the token belongs to
     * @param token The initial token
     * @param temporary If the token should be saved temporary or permanently
     */
    constructor(origin, token, temporary) {
        this.tokenData = token ? TokenStorage.parse(token) : null;
        this.origin = origin;
        this.temporary = !!temporary;
    }
    /**
     * Parse a token string in its components
     * @param token The token string to parse, time values are returned as timestamps
     * @return The parsed token data
     */
    static parse(token) {
        return {
            val: token,
            createdAt: parseInt(token.substring(0, 8), 16) * 1000,
            expireAt: parseInt(token.substring(8, 16), 16) * 1000,
            sig: token.substring(token.length - 40),
            data: token.substring(0, token.length - 40),
        };
    }
    /**
     * Get the stored token
     * @return The token or undefined, if no token is available
     */
    get token() {
        return this.tokenData ? this.tokenData.val : null;
    }
    static create(origin) {
        return Promise.resolve(new TokenStorage(origin));
    }
    /**
     * Use the underlying storage implementation to save the token
     * @param origin The origin where the token belongs to
     * @param token The initial token
     * @param temporary If the token should be saved temporary or permanently
     * @return
     */
    saveToken(origin, token, temporary) {
        // eslint-disable-next-line no-underscore-dangle
        if (this._saveToken !== TokenStorage.prototype._saveToken) {
            // eslint-disable-next-line no-console
            console.log('Using deprecated TokenStorage._saveToken implementation.');
            // eslint-disable-next-line no-underscore-dangle
            this._saveToken(origin, token, temporary);
        }
    }
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
    _saveToken(origin, token, temporary) { }
    /**
     * Update the token for the givin origin, the operation may be asynchronous
     * @param token The token to store or <code>null</code> to remove the token
     */
    update(token) {
        const t = token ? TokenStorage.parse(token) : null;
        if (this.tokenData && t && this.tokenData.expireAt > t.expireAt) {
            // an older token was fetched from the cache, so ignore it
            return;
        }
        this.tokenData = t;
        this.saveToken(this.origin, token, this.temporary);
    }
    /**
     * Derives a resource token from the stored origin token and signs the resource with the generated resource token
     *
     * @param resource The resource which will be accessible with the returned token
     * @param sign Sign the given resource with a token, if sign is false the resource will only be encoded to a path
     * @return A resource token which can only be used to access the specified resource
     */
    signPath(resource, sign = true) {
        const { tokenData } = this;
        const result = Promise.resolve(resource.split('/').map(encodeURIComponent).join('/'));
        if (!tokenData || !sign) {
            return result;
        }
        return result.then((path) => TokenStorage.hmac(path + tokenData.data, tokenData.sig)
            .then((hash) => `${path}?BAT=${tokenData.data + hash}`))
            .catch((e) => {
            // eslint-disable-next-line no-console
            console.warn('Can\'t sign the resource, run the SDK on a secured origin, or provide an alternative hmac implementation on TokenStorage.hmac', e);
            return result;
        });
    }
}
TokenStorage.hmac = util["hmac"];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVG9rZW5TdG9yYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiVG9rZW5TdG9yYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFxQi9CLE1BQU0sT0FBTyxZQUFZO0lBaUR2Qjs7OztPQUlHO0lBQ0gsWUFBWSxNQUFjLEVBQUUsS0FBcUIsRUFBRSxTQUFtQjtRQUNwRSxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQzFELElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUMvQixDQUFDO0lBcENEOzs7O09BSUc7SUFDSCxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQWE7UUFDeEIsT0FBTztZQUNMLEdBQUcsRUFBRSxLQUFLO1lBQ1YsU0FBUyxFQUFFLFFBQVEsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsR0FBRyxJQUFJO1lBQ3JELFFBQVEsRUFBRSxRQUFRLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLEdBQUcsSUFBSTtZQUNyRCxHQUFHLEVBQUUsS0FBSyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztZQUN2QyxJQUFJLEVBQUUsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7U0FDNUMsQ0FBQztJQUNKLENBQUM7SUFFRDs7O09BR0c7SUFDSCxJQUFJLEtBQUs7UUFDUCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFD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
// CONCATENATED MODULE: ./lib/intersection/GlobalStorage.ts

class GlobalStorage_GlobalStorage extends TokenStorage {
    /**
     * Creates a global token storage instance for the given origin
     * A global token storage use a global variable to store the actual origin tokens
     * @param origin
     * @return
     */
    static create(origin) {
        return Promise.resolve(new GlobalStorage_GlobalStorage(origin, GlobalStorage_GlobalStorage.tokens[origin]));
    }
    /**
     * @inheritDoc
     */
    saveToken(origin, token, temporary) {
        if (!temporary) {
            if (token) {
                GlobalStorage_GlobalStorage.tokens[origin] = token;
            }
            else {
                delete GlobalStorage_GlobalStorage.tokens[origin];
            }
        }
    }
}
GlobalStorage_GlobalStorage.tokens = {};
TokenStorage.GLOBAL = GlobalStorage_GlobalStorage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2xvYmFsU3RvcmFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkdsb2JhbFN0b3JhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTlDLE1BQU0sT0FBTyxhQUFjLFNBQVEsWUFBWTtJQUc3Qzs7Ozs7T0FLRztJQUNILE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBYztRQUMxQixPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxhQUFhLENBQUMsTUFBTSxFQUFFLGFBQWEsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2xGLENBQUM7SUFFRDs7T0FFRztJQUNILFNBQVMsQ0FBQyxNQUFjLEVBQUUsS0FBYSxFQUFFLFNBQWtCO1FBQ3pELElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDZCxJQUFJLEtBQUssRUFBRTtnQkFDVCxhQUFhLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEtBQUssQ0FBQzthQUN0QztpQkFBTTtnQkFDTCxPQUFPLGFBQWEsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDckM7U0FDRjtJQUNILENBQUM7O0FBdkJjLG9CQUFNLEdBQWlDLEVBQUUsQ0FBQztBQTBCM0QsWUFBWSxDQUFDLE1BQU0sR0FBRyxhQUFhLENBQUMifQ==
// CONCATENATED MODULE: ./lib/intersection/WebStorage.ts

/**
 * @ignore
 */
class WebStorage_WebStorage extends TokenStorage {
    static isAvailable() {
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
    }
    /**
     * Creates a global web storage instance for the given origin
     * A web token storage use the localStorage or sessionStorage to store the origin tokens
     * @param origin
     * @return
     */
    static create(origin) {
        let temporary = false;
        let token = localStorage.getItem(`BAT:${origin}`);
        if (!token && typeof sessionStorage !== 'undefined') {
            token = sessionStorage.getItem(`BAT:${origin}`);
            temporary = !!token;
        }
        return Promise.resolve(new WebStorage_WebStorage(origin, token, temporary));
    }
    /**
     * @inheritDoc
     */
    saveToken(origin, token, temporary) {
        const webStorage = temporary ? sessionStorage : localStorage;
        if (token) {
            webStorage.setItem(`BAT:${origin}`, token);
        }
        else {
            webStorage.removeItem(`BAT:${origin}`);
        }
    }
}
if (WebStorage_WebStorage.isAvailable()) {
    TokenStorage.WEB_STORAGE = WebStorage_WebStorage;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV2ViU3RvcmFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIldlYlN0b3JhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTlDOztHQUVHO0FBQ0gsTUFBTSxPQUFPLFVBQVcsU0FBUSxZQUFZO0lBQzFDLE1BQU0sQ0FBQyxXQUFXO1FBQ2hCLElBQUk7WUFDRixzREFBc0Q7WUFDdEQsSUFBSSxPQUFPLFlBQVksS0FBSyxXQUFXLEVBQUU7Z0JBQ3ZDLE9BQU8sS0FBSyxDQUFDO2FBQ2Q7WUFFRCxZQUFZLENBQUMsT0FBTyxDQUFDLG9CQUFvQixFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ2pELFlBQVksQ0FBQyxVQUFVLENBQUMsb0JBQW9CLENBQUMsQ0FBQztZQUM5QyxPQUFPLElBQUksQ0FBQztTQUNiO1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDVixPQUFPLEtBQUssQ0FBQztTQUNkO0lBQ0gsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFjO1FBQzFCLElBQUksU0FBUyxHQUFHLEtBQUssQ0FBQztRQUN0QixJQUFJLEtBQUssR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLE9BQU8sTUFBTSxFQUFFLENBQUMsQ0FBQztRQUVsRCxJQUFJLENBQUMsS0FBSyxJQUFJLE9BQU8sY0FBYyxLQUFLLFdBQVcsRUFBRTtZQUNuRCxLQUFLLEdBQUcsY0FBYyxDQUFDLE9BQU8sQ0FBQyxPQUFPLE1BQU0sRUFBRSxDQUFDLENBQUM7WUFDaEQsU0FBUyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUM7U0FDckI7UUFFRCxPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxVQUFVLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDO0lBQ25FLENBQUM7SUFFRDs7T0FFRztJQUNILFNBQVMsQ0FBQyxNQUFjLEVBQUUsS0FBb0IsRUFBRSxTQUFrQjtRQUNoRSxNQUFNLFVBQVUsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDO1FBQzdELElBQUksS0FBSyxFQUFFO1lBQ1QsVUFBVSxDQUFDLE9BQU8sQ0FBQyxPQUFPLE1BQU0sRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQzVDO2FBQU07WUFDTCxVQUFVLENBQUMsVUFBVSxDQUFDLE9BQU8sTUFBTSxFQUFFLENBQUMsQ0FBQztTQUN4QztJQUNILENBQUM7Q0FDRjtBQUVELElBQUksVUFBVSxDQUFDLFdBQVcsRUFBRSxFQUFFO0lBQzVCLFlBQVksQ0FBQyxXQUFXLEdBQUcsVUFBVSxDQUFDO0NBQ3ZDIn0=
// CONCATENATED MODULE: ./lib/intersection/index.ts











//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLGFBQWEsRUFBZ0IsTUFBTSxZQUFZLENBQUM7QUFDbkUsT0FBTyxFQUFFLFVBQVUsRUFBaUIsTUFBTSxjQUFjLENBQUM7QUFDekQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUN4QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQzlCLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDcEMsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUNsQyxPQUFPLEVBQUUsV0FBVyxFQUFzQixNQUFNLGVBQWUsQ0FBQztBQUNoRSxPQUFPLEVBQXVCLFlBQVksRUFBYSxNQUFNLGdCQUFnQixDQUFDO0FBQzlFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNoRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sY0FBYyxDQUFDIn0=

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListAllResources", function() { return ListAllResources; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiVersion", function() { return ApiVersion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Specification", function() { return Specification; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetBloomFilter", function() { return GetBloomFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetBloomFilterExpirations", function() { return GetBloomFilterExpirations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteBloomFilter", function() { return DeleteBloomFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetOrestesConfig", function() { return GetOrestesConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateOrestesConfig", function() { return UpdateOrestesConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Connect", function() { return Connect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Status", function() { return Status; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsUrl", function() { return EventsUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannedIp", function() { return BannedIp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Banned", function() { return Banned; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Unban", function() { return Unban; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnbanIp", function() { return UnbanIp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetBucketNames", function() { return GetBucketNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetBucketIds", function() { return GetBucketIds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExportBucket", function() { return ExportBucket; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImportBucket", function() { return ImportBucket; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TruncateBucket", function() { return TruncateBucket; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateObject", function() { return CreateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetObject", function() { return GetObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReplaceObject", function() { return ReplaceObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteObject", function() { return DeleteObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetAllSchemas", function() { return GetAllSchemas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateAllSchemas", function() { return UpdateAllSchemas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReplaceAllSchemas", function() { return ReplaceAllSchemas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetSchema", function() { return GetSchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateSchema", function() { return UpdateSchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReplaceSchema", function() { return ReplaceSchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteSchema", function() { return DeleteSchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdhocQuery", function() { return AdhocQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdhocQueryPOST", function() { return AdhocQueryPOST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdhocCountQuery", function() { return AdhocCountQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdhocCountQueryPOST", function() { return AdhocCountQueryPOST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListQueryResources", function() { return ListQueryResources; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateQuery", function() { return CreateQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListThisQueryResources", function() { return ListThisQueryResources; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetQueryCode", function() { return GetQueryCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RunQuery", function() { return RunQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetQueryParameters", function() { return GetQueryParameters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewTransaction", function() { return NewTransaction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommitTransaction", function() { return CommitTransaction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdatePartially", function() { return UpdatePartially; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateField", function() { return UpdateField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Login", function() { return Login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Register", function() { return Register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Me", function() { return Me; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidateUser", function() { return ValidateUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Logout", function() { return Logout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewPassword", function() { return NewPassword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPassword", function() { return ResetPassword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Verify", function() { return Verify; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeUsername", function() { return ChangeUsername; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifyUsername", function() { return VerifyUsername; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OAuth2", function() { return OAuth2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OAuth1", function() { return OAuth1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserToken", function() { return UserToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RevokeUserToken", function() { return RevokeUserToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetBaqendCode", function() { return GetBaqendCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetBaqendCode", function() { return SetBaqendCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteBaqendCode", function() { return DeleteBaqendCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostBaqendModule", function() { return PostBaqendModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetBaqendModule", function() { return GetBaqendModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetAllModules", function() { return GetAllModules; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListFiles", function() { return ListFiles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListBuckets", function() { return ListBuckets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DownloadArchive", function() { return DownloadArchive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadPatchArchive", function() { return UploadPatchArchive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetFileBucketMetadata", function() { return GetFileBucketMetadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetFileBucketMetadata", function() { return SetFileBucketMetadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteFileBucket", function() { return DeleteFileBucket; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateFile", function() { return CreateFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DownloadFile", function() { return DownloadFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadFile", function() { return UploadFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetFileMetadata", function() { return GetFileMetadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateFileMetadata", function() { return UpdateFileMetadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteFile", function() { return DeleteFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateManifest", function() { return CreateManifest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DownloadAsset", function() { return DownloadAsset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RevalidateAssets", function() { return RevalidateAssets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetRevalidationStatus", function() { return GetRevalidationStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CancelRevalidation", function() { return CancelRevalidation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetAllRevalidationStatus", function() { return GetAllRevalidationStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CleanUpAssets", function() { return CleanUpAssets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CleanUpStorage", function() { return CleanUpStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListIndexes", function() { return ListIndexes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateDropIndex", function() { return CreateDropIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropAllIndexes", function() { return DropAllIndexes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceRegister", function() { return DeviceRegister; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevicePush", function() { return DevicePush; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceRegistered", function() { return DeviceRegistered; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VAPIDKeys", function() { return VAPIDKeys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VAPIDPublicKey", function() { return VAPIDPublicKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GCMAKey", function() { return GCMAKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadAPNSCertificate", function() { return UploadAPNSCertificate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Install", function() { return Install; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SW", function() { return SW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Beacon", function() { return Beacon; });
/* harmony import */ var _connector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* DO NOT TOUCH THIS AUTO-GENERATED FILE */
/* eslint-disable max-len,@typescript-eslint/no-redeclare */

const ListAllResources = _connector__WEBPACK_IMPORTED_MODULE_0__["Message"].create({
    method: 'GET',
    path: '/',
    status: [200],
});
const ApiVersion = _connector__WEBPACK_IMPORTED_MODULE_0__["Message"].create({
    method: 'GET',
    path: '/version',
    status: [200],
});
const Specification = _connector__WEBPACK_IMPORTED_MODULE_0__["Message"].create({
    method: 'GET',
    path: '/spec',
    status: [200],
});
const GetBloomFilter = _connector__WEBPACK_IMPORTED_MODULE_0__["Message"].create({
    method: 'GET',
    path: '/bloomfilter?rules=false',
    status: [200],
});
const GetBloomFilterExpirations = _connector__WEBPACK_IMPORTED_MODULE_0__["Message"].create({
    method: 'GET',
    path: '/bloomfilter/expirations',
    status: [200],
});
const DeleteBloomFilter = _connector__WEBPACK_IMPORTED_MODULE_0__["Message"].create({
    method: 'DELETE',
    path: '/bloomfilter?flush=true',
    status: [204],
});
const GetOrestesConfig = _connector__WEBPACK_IMPORTED_MODULE_0__["Message"].create({
    method: 'GET',
    path: '/config',
    status: [200],
});
const UpdateOrestesConfig = _connector__WEBPACK_IMPORTED_MODULE_0__["Message"].create({
    method: 'PUT',
    path: '/config',
    status: [200, 202],
});
const Connect = _connector__WEBPACK_IMPORTED_MODULE_0__["Message"].create({
    method: 'GET',
    path: '/connect',
    status: [200],
});
const Status = _connector__WEBPACK_IMPORTED_MODULE_0__["Message"].create({
    method: 'GET',
    path: '/status',
    status: [200],
});
const EventsUrl = _connector__WEBPACK_IMPORTED_MODULE_0__["Message"].create({
    method: 'GET',
    path: '/events-url',
    status: [200],
});
const BannedIp = _connector__WEBPACK_IMPORTED_MODULE_0__["Message"].create({
    method: 'GET',
    path: '/banned/:ip',
    status: [204],
});
const Banned = _connector__WEBPACK_IMPORTED_MODULE_0__["Message"].create({
    method: 'GET',
    path: '/banned',
    status: [],
});
const Unban = _connector__WEBPACK_IMPORTED_MODULE_0__["Message"].create({
    method: 'DELETE',
    path: '/banned',
    status: [204],
});
const UnbanIp = _connector__WEBPACK_IMPORTED_MODULE_0__["Message"].create({
    method: 'DELETE',
    path: '/banned/:ip',
    status: [204],
});
const GetBucketNames = _connector__WEBPACK_IMPORTED_MODULE_0__["Message"].create({
    method: 'GET',
    path: '/db',
    status: [200],
});
const GetBucketIds = _connector__WEBPACK_IMPORTED_MODULE_0__["Message"].create({
    method: 'GET',
    path: '/db/:bucket/ids?start=0&count=-1',
    status: [200],
});
const ExportBucket = _connector__WEBPACK_IMPORTED_MODULE_0__["Message"].create({
    method: 'GET',
    path: '/db/:bucket',
    status: [200],
});
const ImportBucket = _connector__WEBPACK_IMPORTED_MODULE_0__["Message"].create({
    method: 'PUT',
    path: '/db/:bucket',
    status: [200],
});
const TruncateBucket = _connector__WEBPACK_IMPORTED_MODULE_0__["Message"].create({
    method: 'DELETE',
    path: '/db/:bucket',
    status: [200],
});
const CreateObject = _connector__WEBPACK_IMPORTED_MODULE_0__["Message"].create({
    method: 'POST',
    path: '/db/:bucket',
    status: [201, 202],
});
const GetObject = _connector__WEBPACK_IMPORTED_MODULE_0__["Message"].create({
    method: 'GET',
    path: '/db/:bucket/:oid',
    status: [200, 304],
});
const ReplaceObject = _connector__WEBPACK_IMPORTED_MODULE_0__["Message"].create({
    method: 'PUT',
    path: '/db/:bucket/:oid',
    status: [200, 202],
});
const DeleteObject = _connector__WEBPACK_IMPORTED_MODULE_0__["Message"].create({
    method: 'DELETE',
    path: '/db/:bucket/:oid',
    status: [202, 204],
});
const GetAllSchemas = _connector__WEBPACK_IMPORTED_MODULE_0__["Message"].create({
    method: 'GET',
    path: '/schema',
    status: [200],
});
const UpdateAllSchemas = _connector__WEBPACK_IMPORTED_MODULE_0__["Message"].create({
    method: 'POST',
    path: '/schema',
    status: [200],
});
const ReplaceAllSchemas = _connector__WEBPACK_IMPORTED_MODULE_0__["Message"].create({
    method: 'PUT',
    path: '/schema',
    status: [200],
});
const GetSchema = _connector__WEBPACK_IMPORTED_MODULE_0__["Message"].create({
    method: 'GET',
    path: '/schema/:bucket',
    status: [200],
});
const UpdateSchema = _connector__WEBPACK_IMPORTED_MODULE_0__["Message"].create({
    method: 'POST',
    path: '/schema/:bucket',
    status: [200],
});
const ReplaceSchema = _connector__WEBPACK_IMPORTED_MODULE_0__["Message"].create({
    method: 'PUT',
    path: '/schema/:bucket',
    status: [200],
});
const DeleteSchema = _connector__WEBPACK_IMPORTED_MODULE_0__["Message"].create({
    method: 'DELETE',
    path: '/schema/:bucket',
    status: [204],
});
const AdhocQuery = _connector__WEBPACK_IMPORTED_MODULE_0__["Message"].create({
    method: 'GET',
    path: '/db/:bucket/query?q&start=0&count=-1&sort=&eager=&hinted=',
    status: [200],
});
const AdhocQueryPOST = _connector__WEBPACK_IMPORTED_MODULE_0__["Message"].create({
    method: 'POST',
    path: '/db/:bucket/query?start=0&count=-1&sort=',
    status: [200],
});
const AdhocCountQuery = _connector__WEBPACK_IMPORTED_MODULE_0__["Message"].create({
    method: 'GET',
    path: '/db/:bucket/count?q',
    status: [200],
});
const AdhocCountQueryPOST = _connector__WEBPACK_IMPORTED_MODULE_0__["Message"].create({
    method: 'POST',
    path: '/db/:bucket/count',
    status: [200],
});
const ListQueryResources = _connector__WEBPACK_IMPORTED_MODULE_0__["Message"].create({
    method: 'GET',
    path: '/query',
    status: [200],
});
const CreateQuery = _connector__WEBPACK_IMPORTED_MODULE_0__["Message"].create({
    method: 'POST',
    path: '/query',
    status: [201],
});
const ListThisQueryResources = _connector__WEBPACK_IMPORTED_MODULE_0__["Message"].create({
    method: 'GET',
    path: '/query/:qid',
    status: [200],
});
const GetQueryCode = _connector__WEBPACK_IMPORTED_MODULE_0__["Message"].create({
    method: 'GET',
    path: '/query/:qid/source',
    status: [200],
});
const RunQuery = _connector__WEBPACK_IMPORTED_MODULE_0__["Message"].create({
    method: 'GET',
    path: '/query/:qid/result?start=0&count=-1',
    status: [200],
});
const GetQueryParameters = _connector__WEBPACK_IMPORTED_MODULE_0__["Message"].create({
    method: 'GET',
    path: '/query/:qid/parameters',
    status: [200],
});
const NewTransaction = _connector__WEBPACK_IMPORTED_MODULE_0__["Message"].create({
    method: 'POST',
    path: '/transaction',
    status: [201],
});
const CommitTransaction = _connector__WEBPACK_IMPORTED_MODULE_0__["Message"].create({
    method: 'PUT',
    path: '/transaction/:tid/committed',
    status: [200],
});
const UpdatePartially = _connector__WEBPACK_IMPORTED_MODULE_0__["Message"].create({
    method: 'POST',
    path: '/db/:bucket/:oid',
    status: [200],
});
const UpdateField = _connector__WEBPACK_IMPORTED_MODULE_0__["Message"].create({
    method: 'POST',
    path: '/db/:bucket/:oid/:field',
    status: [200],
});
const Login = _connector__WEBPACK_IMPORTED_MODULE_0__["Message"].create({
    method: 'POST',
    path: '/db/User/login',
    status: [200],
});
const Register = _connector__WEBPACK_IMPORTED_MODULE_0__["Message"].create({
    method: 'POST',
    path: '/db/User/register',
    status: [200, 204],
});
const Me = _connector__WEBPACK_IMPORTED_MODULE_0__["Message"].create({
    method: 'GET',
    path: '/db/User/me',
    status: [200],
});
const ValidateUser = _connector__WEBPACK_IMPORTED_MODULE_0__["Message"].create({
    method: 'GET',
    path: '/db/User/validate',
    status: [200],
});
const Logout = _connector__WEBPACK_IMPORTED_MODULE_0__["Message"].create({
    method: 'GET',
    path: '/db/User/logout',
    status: [204],
});
const NewPassword = _connector__WEBPACK_IMPORTED_MODULE_0__["Message"].create({
    method: 'POST',
    path: '/db/User/password',
    status: [200],
});
const ResetPassword = _connector__WEBPACK_IMPORTED_MODULE_0__["Message"].create({
    method: 'POST',
    path: '/db/User/reset',
    status: [200],
});
const Verify = _connector__WEBPACK_IMPORTED_MODULE_0__["Message"].create({
    method: 'GET',
    path: '/db/User/verify?token=',
    status: [204],
});
const ChangeUsername = _connector__WEBPACK_IMPORTED_MODULE_0__["Message"].create({
    method: 'POST',
    path: '/db/User/changeUsername',
    status: [204],
});
const VerifyUsername = _connector__WEBPACK_IMPORTED_MODULE_0__["Message"].create({
    method: 'GET',
    path: '/db/User/verifyUsername?token=',
    status: [204],
});
const OAuth2 = _connector__WEBPACK_IMPORTED_MODULE_0__["Message"].create({
    method: 'GET',
    path: '/db/User/OAuth/:provider?device_code=&state=&code=&oauth_verifier=&oauth_token=&error_description=',
    status: [200],
});
const OAuth1 = _connector__WEBPACK_IMPORTED_MODULE_0__["Message"].create({
    method: 'GET',
    path: '/db/User/OAuth1/:provider',
    status: [200],
});
const UserToken = _connector__WEBPACK_IMPORTED_MODULE_0__["Message"].create({
    method: 'POST',
    path: '/db/User/:oid/token',
    status: [200],
});
const RevokeUserToken = _connector__WEBPACK_IMPORTED_MODULE_0__["Message"].create({
    method: 'DELETE',
    path: '/db/User/:oid/token',
    status: [204],
});
const GetBaqendCode = _connector__WEBPACK_IMPORTED_MODULE_0__["Message"].create({
    method: 'GET',
    path: '/code/:bucket/:type',
    status: [200],
});
const SetBaqendCode = _connector__WEBPACK_IMPORTED_MODULE_0__["Message"].create({
    method: 'PUT',
    path: '/code/:bucket/:type',
    status: [200, 202],
});
const DeleteBaqendCode = _connector__WEBPACK_IMPORTED_MODULE_0__["Message"].create({
    method: 'DELETE',
    path: '/code/:bucket/:type',
    status: [202, 204],
});
const PostBaqendModule = _connector__WEBPACK_IMPORTED_MODULE_0__["Message"].create({
    method: 'POST',
    path: '/code/:bucket',
    status: [200, 204],
});
const GetBaqendModule = _connector__WEBPACK_IMPORTED_MODULE_0__["Message"].create({
    method: 'GET',
    path: '/code/:bucket',
    status: [200, 204],
});
const GetAllModules = _connector__WEBPACK_IMPORTED_MODULE_0__["Message"].create({
    method: 'GET',
    path: '/code',
    status: [200],
});
const ListFiles = _connector__WEBPACK_IMPORTED_MODULE_0__["Message"].create({
    method: 'GET',
    path: '/file/:bucket/ids?path=/&start=&count=-1&deep=false',
    status: [200],
});
const ListBuckets = _connector__WEBPACK_IMPORTED_MODULE_0__["Message"].create({
    method: 'GET',
    path: '/file/buckets',
    status: [200],
});
const DownloadArchive = _connector__WEBPACK_IMPORTED_MODULE_0__["Message"].create({
    method: 'GET',
    path: '/file',
    status: [200],
});
const UploadPatchArchive = _connector__WEBPACK_IMPORTED_MODULE_0__["Message"].create({
    method: 'POST',
    path: '/file',
    status: [200],
});
const GetFileBucketMetadata = _connector__WEBPACK_IMPORTED_MODULE_0__["Message"].create({
    method: 'GET',
    path: '/file/:bucket',
    status: [200],
});
const SetFileBucketMetadata = _connector__WEBPACK_IMPORTED_MODULE_0__["Message"].create({
    method: 'PUT',
    path: '/file/:bucket',
    status: [204],
});
const DeleteFileBucket = _connector__WEBPACK_IMPORTED_MODULE_0__["Message"].create({
    method: 'DELETE',
    path: '/file/:bucket',
    status: [204],
});
const CreateFile = _connector__WEBPACK_IMPORTED_MODULE_0__["Message"].create({
    method: 'POST',
    path: '/file/:bucket',
    status: [200],
});
const DownloadFile = _connector__WEBPACK_IMPORTED_MODULE_0__["Message"].create({
    method: 'GET',
    path: '/file/:bucket/*oid',
    status: [200, 304],
});
const UploadFile = _connector__WEBPACK_IMPORTED_MODULE_0__["Message"].create({
    method: 'PUT',
    path: '/file/:bucket/*oid',
    status: [200],
});
const GetFileMetadata = _connector__WEBPACK_IMPORTED_MODULE_0__["Message"].create({
    method: 'HEAD',
    path: '/file/:bucket/*oid',
    status: [200],
});
const UpdateFileMetadata = _connector__WEBPACK_IMPORTED_MODULE_0__["Message"].create({
    method: 'POST',
    path: '/file/:bucket/*oid',
    status: [200],
});
const DeleteFile = _connector__WEBPACK_IMPORTED_MODULE_0__["Message"].create({
    method: 'DELETE',
    path: '/file/:bucket/*oid',
    status: [200, 204],
});
const CreateManifest = _connector__WEBPACK_IMPORTED_MODULE_0__["Message"].create({
    method: 'POST',
    path: '/pwa/manifest',
    status: [202],
});
const DownloadAsset = _connector__WEBPACK_IMPORTED_MODULE_0__["Message"].create({
    method: 'GET',
    path: '/asset/*url',
    status: [200, 304],
});
const RevalidateAssets = _connector__WEBPACK_IMPORTED_MODULE_0__["Message"].create({
    method: 'POST',
    path: '/asset/revalidate',
    status: [202],
});
const GetRevalidationStatus = _connector__WEBPACK_IMPORTED_MODULE_0__["Message"].create({
    method: 'GET',
    path: '/asset/revalidate/:id',
    status: [200, 202],
});
const CancelRevalidation = _connector__WEBPACK_IMPORTED_MODULE_0__["Message"].create({
    method: 'DELETE',
    path: '/asset/revalidate/:id',
    status: [202],
});
const GetAllRevalidationStatus = _connector__WEBPACK_IMPORTED_MODULE_0__["Message"].create({
    method: 'GET',
    path: '/asset/revalidate?state=',
    status: [200],
});
const CleanUpAssets = _connector__WEBPACK_IMPORTED_MODULE_0__["Message"].create({
    method: 'POST',
    path: '/asset/cleanup',
    status: [202],
});
const CleanUpStorage = _connector__WEBPACK_IMPORTED_MODULE_0__["Message"].create({
    method: 'POST',
    path: '/asset/cleanup/storage',
    status: [202],
});
const ListIndexes = _connector__WEBPACK_IMPORTED_MODULE_0__["Message"].create({
    method: 'GET',
    path: '/index/:bucket',
    status: [200],
});
const CreateDropIndex = _connector__WEBPACK_IMPORTED_MODULE_0__["Message"].create({
    method: 'POST',
    path: '/index/:bucket',
    status: [202],
});
const DropAllIndexes = _connector__WEBPACK_IMPORTED_MODULE_0__["Message"].create({
    method: 'DELETE',
    path: '/index/:bucket',
    status: [202],
});
const DeviceRegister = _connector__WEBPACK_IMPORTED_MODULE_0__["Message"].create({
    method: 'POST',
    path: '/db/Device/register',
    status: [200],
});
const DevicePush = _connector__WEBPACK_IMPORTED_MODULE_0__["Message"].create({
    method: 'POST',
    path: '/db/Device/push',
    status: [204],
});
const DeviceRegistered = _connector__WEBPACK_IMPORTED_MODULE_0__["Message"].create({
    method: 'GET',
    path: '/db/Device/registered',
    status: [200],
});
const VAPIDKeys = _connector__WEBPACK_IMPORTED_MODULE_0__["Message"].create({
    method: 'POST',
    path: '/config/VAPIDKeys',
    status: [200],
});
const VAPIDPublicKey = _connector__WEBPACK_IMPORTED_MODULE_0__["Message"].create({
    method: 'GET',
    path: '/config/VAPIDPublicKey',
    status: [200],
});
const GCMAKey = _connector__WEBPACK_IMPORTED_MODULE_0__["Message"].create({
    method: 'POST',
    path: '/config/GCMKey',
    status: [204],
});
const UploadAPNSCertificate = _connector__WEBPACK_IMPORTED_MODULE_0__["Message"].create({
    method: 'POST',
    path: '/config/APNSCert',
    status: [204],
});
const Install = _connector__WEBPACK_IMPORTED_MODULE_0__["Message"].create({
    method: 'GET',
    path: '/speedkit?d=',
    status: [200],
});
const SW = _connector__WEBPACK_IMPORTED_MODULE_0__["Message"].create({
    method: 'GET',
    path: '/speedkit?r=&v=',
    status: [200],
});
const Beacon = _connector__WEBPACK_IMPORTED_MODULE_0__["Message"].create({
    method: 'POST',
    path: '/rum/pi',
    status: [200],
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1lc3NhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMkNBQTJDO0FBQzNDLDREQUE0RDtBQUM1RCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBU3RDLE1BQU0sQ0FBQyxNQUFNLGdCQUFnQixHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQW1CO0lBQy9ELE1BQU0sRUFBRSxLQUFLO0lBQ2IsSUFBSSxFQUFFLEdBQUc7SUFDVCxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUM7Q0FDZCxDQUFDLENBQUM7QUFRSCxNQUFNLENBQUMsTUFBTSxVQUFVLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBYTtJQUNuRCxNQUFNLEVBQUUsS0FBSztJQUNiLElBQUksRUFBRSxVQUFVO0lBQ2hCLE1BQU0sRUFBRSxDQUFDLEdBQUcsQ0FBQztDQUNkLENBQUMsQ0FBQztBQVFILE1BQU0sQ0FBQyxNQUFNLGFBQWEsR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFnQjtJQUN6RCxNQUFNLEVBQUUsS0FBSztJQUNiLElBQUksRUFBRSxPQUFPO0lBQ2IsTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDO0NBQ2QsQ0FBQyxDQUFDO0FBVUgsTUFBTSxDQUFDLE1BQU0sY0FBYyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQWlCO0lBQzNELE1BQU0sRUFBRSxLQUFLO0lBQ2IsSUFBSSxFQUFFLDBCQUEwQjtJQUNoQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUM7Q0FDZCxDQUFDLENBQUM7QUFRSCxNQUFNLENBQUMsTUFBTSx5QkFBeUIsR0FBRyxPQUFPLENBQUMsTUFBTSxDQUE0QjtJQUNqRixNQUFNLEVBQUUsS0FBSztJQUNiLElBQUksRUFBRSwwQkFBMEI7SUFDaEMsTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDO0NBQ2QsQ0FBQyxDQUFDO0FBVUgsTUFBTSxDQUFDLE1BQU0saUJBQWlCLEdBQUcsT0FBTyxDQUFD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

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "Accessor", function() { return /* reexport */ Accessor; });
__webpack_require__.d(__webpack_exports__, "Enhancer", function() { return /* reexport */ Enhancer; });
__webpack_require__.d(__webpack_exports__, "Factory", function() { return /* reexport */ Factory; });
__webpack_require__.d(__webpack_exports__, "ManagedFactory", function() { return /* reexport */ ManagedFactory_ManagedFactory; });
__webpack_require__.d(__webpack_exports__, "EntityFactory", function() { return /* reexport */ EntityFactory_EntityFactory; });
__webpack_require__.d(__webpack_exports__, "LoginOption", function() { return /* reexport */ LoginOption; });
__webpack_require__.d(__webpack_exports__, "UserFactory", function() { return /* reexport */ UserFactory_UserFactory; });
__webpack_require__.d(__webpack_exports__, "DeviceFactory", function() { return /* reexport */ DeviceFactory_DeviceFactory; });
__webpack_require__.d(__webpack_exports__, "FileFactory", function() { return /* reexport */ FileFactory_FileFactory; });
__webpack_require__.d(__webpack_exports__, "Managed", function() { return /* reexport */ Managed_Managed; });
__webpack_require__.d(__webpack_exports__, "Entity", function() { return /* reexport */ Entity_Entity; });
__webpack_require__.d(__webpack_exports__, "Role", function() { return /* reexport */ Role_Role; });
__webpack_require__.d(__webpack_exports__, "User", function() { return /* reexport */ User_User; });
__webpack_require__.d(__webpack_exports__, "File", function() { return /* reexport */ File_File; });

// CONCATENATED MODULE: ./lib/binding/Accessor.ts
class Accessor {
    /**
     * @param object
     * @param attribute
     * @return
     */
    getValue(object, attribute) {
        return object[attribute.name];
    }
    /**
     * @param object
     * @param attribute
     * @param value
     */
    setValue(object, attribute, value) {
        // eslint-disable-next-line no-param-reassign
        object[attribute.name] = value;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWNjZXNzb3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJBY2Nlc3Nvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQSxNQUFNLE9BQU8sUUFBUTtJQUNuQjs7OztPQUlHO0lBQ0gsUUFBUSxDQUFJLE1BQWUsRUFBRSxTQUF1QjtRQUNsRCxPQUFPLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFhLENBQUM7SUFDNUMsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxRQUFRLENBQUksTUFBZSxFQUFFLFNBQXVCLEVBQUUsS0FBUTtRQUM1RCw2Q0FBNkM7UUFDN0MsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFLLENBQUM7SUFDakMsQ0FBQztDQUNGIn0=
// CONCATENATED MODULE: ./lib/binding/Enhancer.ts
const BAQEND_ID = Symbol('BaqendId');
const BAQEND_TYPE = Symbol('BaqendType');
class Enhancer {
    /**
     * @param superClass
     * @return typeConstructor
     */
    createProxy(superClass) {
        return class Proxy extends superClass {
        };
    }
    /**
     * @param typeConstructor
     * @returns type the managed type metadata for this class
     */
    static getBaqendType(typeConstructor) {
        return typeConstructor[BAQEND_TYPE];
    }
    /**
     * @param typeConstructor
     * @return
     */
    static getIdentifier(typeConstructor) {
        return typeConstructor[BAQEND_ID];
    }
    /**
     * @param typeConstructor
     * @param identifier
     */
    static setIdentifier(typeConstructor, identifier) {
        typeConstructor[BAQEND_ID] = identifier;
    }
    /**
     * @param type
     * @param typeConstructor
     */
    enhance(type, typeConstructor) {
        if (typeConstructor[BAQEND_TYPE] === type) {
            return;
        }
        if (Object.prototype.hasOwnProperty.call(typeConstructor, BAQEND_TYPE)) {
            throw new Error('Type is already used by a different manager');
        }
        typeConstructor[BAQEND_TYPE] = type;
        Enhancer.setIdentifier(typeConstructor, type.ref);
        this.enhancePrototype(typeConstructor.prototype, type);
    }
    /**
     * Enhance the prototype of the type
     * @param proto
     * @param type
     */
    enhancePrototype(proto, type) {
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
            type.superType.declaredAttributes.forEach((attr) => {
                if (!attr.isMetadata) {
                    this.enhanceProperty(proto, attr);
                }
            });
        }
        // enhance all persistent properties
        type.declaredAttributes.forEach((attr) => {
            this.enhanceProperty(proto, attr);
        });
    }
    /**
     * @param proto
     * @param attribute
     */
    enhanceProperty(proto, attribute) {
        const { name } = attribute;
        Object.defineProperty(proto, name, {
            get() {
                this._metadata.throwUnloadedPropertyAccess(name);
                return null;
            },
            set(value) {
                this._metadata.throwUnloadedPropertyAccess(name);
                Object.defineProperty(this, name, {
                    value,
                    writable: true,
                    enumerable: true,
                    configurable: true,
                });
            },
            configurable: true,
            enumerable: true,
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRW5oYW5jZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJFbmhhbmNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQSxNQUFNLFNBQVMsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDckMsTUFBTSxXQUFXLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBRXpDLE1BQU0sT0FBTyxRQUFRO0lBQ25COzs7T0FHRztJQUNILFdBQVcsQ0FBaUIsVUFBb0I7UUFDOUMsT0FBTyxNQUFNLEtBQU0sU0FBUyxVQUFrQjtTQUFlLENBQUM7SUFDaEUsQ0FBQztJQUVEOzs7T0FHRztJQUNILE1BQU0sQ0FBQyxhQUFhLENBQUMsZUFBc0M7UUFDekQsT0FBUSxlQUF1QixDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFRDs7O09BR0c7SUFDSCxNQUFNLENBQUMsYUFBYSxDQUFDLGVBQXNDO1FBQ3pELE9BQVEsZUFBdUIsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsTUFBTSxDQUFDLGFBQWEsQ0FBQyxlQUEyQixFQUFFLFVBQWtCO1FBQ2pFLGVBQXVCLENBQUMsU0FBUyxDQUFDLEdBQUcsVUFBVSxDQUFDO0lBQ25ELENBQUM7SUFFRDs7O09BR0c7SUFDSCxPQUFPLENBQW9CLElBQW9CLEVBQUUsZUFBeUI7UUFDeEUsSUFBSyxlQUF1QixDQUFDLFdBQVcsQ0FBQyxLQUFLLElBQUksRUFBRTtZQUNsRCxPQUFPO1NBQ1I7UUFFRCxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsV0FBVyxDQUFDLEVBQUU7WUFDdEUsTUFBTSxJQUFJLEtBQUssQ0FBQyw2Q0FBNkMsQ0FBQyxDQUFDO1NBQ2hFO1FBRUEsZUFBdUIsQ0FBQyxXQUFXLENBQUMsR0FBRyxJQUFJLENBQUM7UUFFN0MsUUFBUSxDQUFDLGFBQWEsQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsZ0JBQWdCLENBQW9CLEtBQVEsRUFBRSxJQUFvQjtRQUNoRSxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDckIsT0FBTyxDQUFDLHdEQUF3RDtTQUNqRTtRQUVELElBQUksS0FBSyxDQUFDLFFBQVEsS0FBSyxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRTtZQUNoRCxrREFBa0Q7WUFDbEQsTUFBTSxDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsVUFBVSxFQUFFO2dCQUN2QyxLQUFLLEVBQUUsU0FBUyxRQUFRO29CQUN0QixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDO2dCQUNwRCxDQUFDO2dCQUNELFVBQVUsRUFBRSxLQUFLO2FBQ2xCLENBQUMsQ0FBQztTQUNKO1FBRUQsMkNBQTJDO1FBQzNDLElBQUksSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksS0FBSyxRQUFRLEVBQUU7WUFDdEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtnQkFDakQsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUU7b0JBQ3BCLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO2lCQUNuQztZQUNILENBQUMsQ0FBQyxDQUFDO1NBQ0o7UUFFRCxvQ0FBb0M7UUFDcEMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO1lBQ3ZDLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3BDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVEOzs7T0FHRztJQUNILGVBQWUsQ0FBSSxLQUFRLEVBQUUsU0FBeUI7UUFDcEQsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLFNBQVMsQ0FBQztRQUMzQixNQUFNLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUU7WUFDakMsR0FBRztnQkFDRCxJQUFJLENBQUMsU0FBUyxDQUFDLDJCQUEyQixDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNqRCxPQUFPLElBQUksQ0FBQztZQUNkLENBQUM7WUFDRCxHQUFHLENBQUMsS0FBSztnQkFDUCxJQUFJLENBQUMsU0FBUyxDQUFDLDJCQUEyQixDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNqRCxNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUU7b0JBQ2hDLEtBQUs7b0JBQ0wsUUFBUSxFQUFFLElBQUk7b0JBQ2QsVUFBVSxFQUFFLElBQUk7b0JBQ2hCLFlBQVksRUFBRSxJQUFJO2lCQUNuQixDQUFDLENBQUM7WUFDTCxDQUFDO1lBQ0QsWUFBWSxFQUFFLElBQUk7WUFDbEIsVUFBVSxFQUFFLElBQUk7U0FDakIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQUNGIn0=
// CONCATENATED MODULE: ./lib/binding/Factory.ts
class Factory {
    constructor() {
        this.type = null;
        this.prototype = null;
    }
    static extend(target, proto) {
        if (proto !== Factory.prototype) {
            this.extend(target, Object.getPrototypeOf(proto));
        }
        const properties = Object.getOwnPropertyNames(proto);
        for (let j = 0, len = properties.length; j < len; j += 1) {
            const prop = properties[j];
            Object.defineProperty(target, prop, Object.getOwnPropertyDescriptor(proto, prop));
        }
        return target;
    }
    /**
     * Creates a new Factory for the given type
     * @param type - the type constructor of T
     * @return A new object factory to created instances of T
     */
    static createFactory(type) {
        // We want te explicitly name the created factory and give the constructor a properly argument name
        const factory = Factory.extend((function FactoryConstructor(...args) {
            return factory.newInstance(args);
        }), this.prototype);
        // lets instanceof work properly
        factory.prototype = type.prototype;
        factory.type = type;
        return factory;
    }
    /**
     * Creates a new instance of the factory type
     * @param args Constructor arguments used for instantiation
     * @return A new created instance of *
     * @instance
     */
    new(...args) {
        return this.newInstance(args);
    }
    /**
     * Creates a new instance of the factory type
     * @param args Constructor arguments used for instantiation
     * @return A new created instance of *
     * @instance
     */
    newInstance(args) {
        if (!args || args.length === 0) {
            // eslint-disable-next-line new-cap
            return new this.type();
        }
        // es6 constructors can't be called, therefore bind all arguments and invoke the constructor
        // then with the bounded parameters
        // The first argument is shift out by invocation with `new`.
        const a = [null];
        Array.prototype.push.apply(a, args);
        const boundConstructor = (Function.prototype.bind.apply(this.type, a));
        // eslint-disable-next-line new-cap
        return new boundConstructor();
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0JBLE1BQU0sT0FBTyxPQUFPO0lBQXBCO1FBaUNTLFNBQUksR0FBYSxJQUFXLENBQUM7UUFFN0IsY0FBUyxHQUFNLElBQVcsQ0FBQztJQWlDcEMsQ0FBQztJQW5FUyxNQUFNLENBQUMsTUFBTSxDQUE0QixNQUFTLEVBQUUsS0FBUTtRQUNsRSxJQUFJLEtBQUssS0FBSyxPQUFPLENBQUMsU0FBUyxFQUFFO1lBQy9CLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztTQUNuRDtRQUVELE1BQU0sVUFBVSxHQUFHLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNyRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLEdBQUcsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDeEQsTUFBTSxJQUFJLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzNCLE1BQU0sQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxNQUFNLENBQUMsd0JBQXdCLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBRSxDQUFDLENBQUM7U0FDcEY7UUFFRCxPQUFPLE1BQWUsQ0FBQztJQUN6QixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNPLE1BQU0sQ0FBQyxhQUFhLENBQTBDLElBQWM7UUFDcEYsbUdBQW1HO1FBQ25HLE1BQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxTQUFTLGtCQUFrQixDQUFDLEdBQUcsSUFBVztZQUN4RSxPQUFPLE9BQU8sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbkMsQ0FBQyxDQUFhLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRWhDLGdDQUFnQztRQUNoQyxPQUFPLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDbkMsT0FBTyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFFcEIsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQztJQU1EOzs7OztPQUtHO0lBQ0gsR0FBRyxDQUFDLEdBQUcsSUFBVztRQUNoQixPQUFPLElBQUksQ0FBQyxXQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsV0FBVyxDQUFDLElBQXlCO1FBQ25DLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDOUIsbUNBQW1DO1lBQ25DLE9BQU8sSUFBSSxJQUFJLENBQUMsSUFBSyxFQUFFLENBQUM7U0FDekI7UUFFRCw0RkFBNEY7UUFDNUYsbUNBQW1DO1FBQ25DLDREQUE0RDtRQUM1RCxNQUFNLENBQUMsR0FBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsSUFBYSxDQUFDLENBQUM7UUFDN0MsTUFBTSxnQkFBZ0IsR0FBRyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDeEUsbUNBQW1DO1FBQ25DLE9BQU8sSUFBSSxnQkFBZ0IsRUFBRSxDQUFDO0lBQ2hDLENBQUM7Q0FDRiJ9
// EXTERNAL MODULE: ./lib/intersection/index.ts + 10 modules
var intersection = __webpack_require__(1);

// CONCATENATED MODULE: ./lib/binding/ManagedFactory.ts


class ManagedFactory_ManagedFactory extends Factory {
    constructor() {
        super(...arguments);
        /**
         * Methods that are added to object instances
         * This property is an alias for this factory type prototype
         * @name methods
         */
        this.methods = null;
        /**
         * The managed type of this factory
         */
        this.managedType = null;
        /**
         * The owning EntityManager where this factory belongs to
         */
        this.db = null;
    }
    /**
     * Creates a new ManagedFactory for the given type
     * @param managedType The metadata of type T
     * @param db The entity manager instance
     */
    static create(managedType, db) {
        const factory = this.createFactory(managedType.typeConstructor);
        factory.methods = factory.prototype;
        factory.managedType = managedType;
        factory.db = db;
        return factory;
    }
    /**
     * Creates a new instance and sets the Managed Object to the given json
     * @param json
     * @return A new created instance of T
     */
    fromJSON(json) {
        const instance = this.newInstance();
        return this.managedType.fromJsonValue(intersection["Metadata"].create(this.managedType, this.db), json, instance, {
            persisting: false,
        });
    }
    /**
     * Adds methods to instances of this factories type
     * @param methods The methods to add
     * @return
     */
    addMethods(methods) {
        Object.assign(this.methods, methods);
    }
    /**
     * Add a method to instances of this factories type
     * @param name The method name to add
     * @param fn The Method to add
     * @return
     */
    addMethod(name, fn) {
        this.methods[name] = fn;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWFuYWdlZEZhY3RvcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJNYW5hZ2VkRmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBS3BDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUzQyxNQUFNLE9BQU8sY0FBa0MsU0FBUSxPQUFVO0lBQWpFOztRQWdCRTs7OztXQUlHO1FBQ0ksWUFBTyxHQUFrQyxJQUFXLENBQUM7UUFFNUQ7O1dBRUc7UUFDSSxnQkFBVyxHQUFtQixJQUFXLENBQUM7UUFFakQ7O1dBRUc7UUFDSSxPQUFFLEdBQWtCLElBQVcsQ0FBQztJQWdDekMsQ0FBQztJQTlEQzs7OztPQUlHO0lBQ0ksTUFBTSxDQUFDLE1BQU0sQ0FBb0IsV0FBMkIsRUFBRSxFQUFpQjtRQUNwRixNQUFNLE9BQU8sR0FBc0IsSUFBSSxDQUFDLGFBQWEsQ0FBdUIsV0FBVyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBRXpHLE9BQU8sQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQztRQUNwQyxPQUFPLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztRQUNsQyxPQUFPLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUVoQixPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDO0lBbUJEOzs7O09BSUc7SUFDSCxRQUFRLENBQUMsSUFBVTtRQUNqQixNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDcEMsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUU7WUFDaEcsVUFBVSxFQUFFLEtBQUs7U0FDbEIsQ0FBRSxDQUFDO0lBQ04sQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxVQUFVLENBQUMsT0FBcUM7UUFDOUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILFNBQVMsQ0FBQyxJQUFZLEVBQUUsRUFBWTtRQUNsQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUMxQixDQUFDO0NBQ0YifQ==
// CONCATENATED MODULE: ./lib/binding/EntityFactory.ts


class EntityFactory_EntityFactory extends ManagedFactory_ManagedFactory {
    /**
     * Creates a new instance of the factory type
     *
     * @param args Constructor arguments used for instantiation, the constructor will not be called
     * when no arguments are passed
     * @return A new created instance of T
     */
    newInstance(args) {
        const instance = super.newInstance(args);
        intersection["Metadata"].get(instance).db = this.db;
        return instance;
    }
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
    load(id, options, doneCallback, failCallback) {
        if (typeof options === 'function') {
            return this.load(id, {}, options, doneCallback);
        }
        return this.db.load(this.managedType.typeConstructor, id, options).then(doneCallback, failCallback);
    }
    /**
     * Gets an unloaded reference for the given id.
     * @param id The id of an object to get a reference for.
     * @return An unloaded reference to the object with the given id.
     */
    ref(id) {
        return this.db.getReference(this.managedType.ref, id);
    }
    /**
     * Creates a new instance and sets the DatabaseObject to the given json
     * @param json
     * @return instance
     */
    fromJSON(json) {
        const obj = this.db.getReference(this.managedType.ref, json.id);
        return this.managedType.fromJsonValue(intersection["Metadata"].get(obj), json, obj, { persisting: false });
    }
    /**
     * Creates a new query for this class
     * @return The query builder
     */
    find() {
        return this.db.createQueryBuilder(this.managedType.typeConstructor);
    }
    /**
     * Creates a new partial update for this class
     * @param id The id to partial update
     * @param [partialUpdate] An initial partial update to execute
     * @return A partial update builder for the given entity id
     */
    partialUpdate(id, partialUpdate) {
        return this.ref(id).partialUpdate(partialUpdate);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRW50aXR5RmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkVudGl0eUZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBS2xELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUzQyxNQUFNLE9BQU8sYUFBZ0MsU0FBUSxjQUFpQjtJQUNwRTs7Ozs7O09BTUc7SUFDSCxXQUFXLENBQUMsSUFBeUI7UUFDbkMsTUFBTSxRQUFRLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN6QyxRQUFRLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO1FBQ3BDLE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7SUFFRDs7Ozs7Ozs7Ozs7O09BWUc7SUFDSCxJQUFJLENBQUMsRUFBVSxFQUFFLE9BQTJFLEVBQUUsWUFBa0IsRUFDOUcsWUFBa0I7UUFDbEIsSUFBSSxPQUFPLE9BQU8sS0FBSyxVQUFVLEVBQUU7WUFDakMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLFlBQVksQ0FBQyxDQUFDO1NBQ2pEO1FBRUQsT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGVBQWUsRUFBRSxFQUFFLEVBQUUsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxZQUFZLENBQUMsQ0FBQztJQUN0RyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILEdBQUcsQ0FBQyxFQUFVO1FBQ1osT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILFFBQVEsQ0FBQyxJQUFVO1FBQ2pCLE1BQU0sR0FBRyxHQUFNLElBQUksQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxFQUFHLElBQWdCLENBQUMsRUFBWSxDQUFDLENBQUM7UUFDMUYsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLENBQUUsQ0FBQztJQUM5RixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsSUFBSTtRQUNGLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ3RFLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILGFBQWEsQ0FBQyxFQUFVLEVBQUUsYUFBb0I7UUFDNUMsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNuRCxDQUFDO0NBQ0YifQ==
// CONCATENATED MODULE: ./lib/binding/UserFactory.ts

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
})(LoginOption || (LoginOption = {}));
/**
 * Creates a new instance of the managed type of this factory
 */
class UserFactory_UserFactory extends EntityFactory_EntityFactory {
    get LoginOption() {
        return LoginOption;
    }
    /**
     * The current logged in user, or <code>null</code> if the user is not logged in
     */
    get me() {
        return this.db.me;
    }
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
    register(user, password, loginOption, doneCallback, failCallback) {
        if (loginOption instanceof Function) {
            return this.register(user, password, true, loginOption, doneCallback);
        }
        const userObj = typeof user === 'string' ? this.fromJSON({ username: user }) : user;
        return this.db.register(userObj, password, loginOption === undefined ? true : loginOption)
            .then(doneCallback, failCallback);
    }
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
    login(username, password, loginOption, doneCallback, failCallback) {
        if (loginOption instanceof Function) {
            return this.login(username, password, true, loginOption, doneCallback);
        }
        return this.db.login(username, password, loginOption === undefined ? true : loginOption)
            .then(doneCallback, failCallback);
    }
    /**
     * Log in the user assiciated with the given token and starts a user session.
     * @param token The user token.
     * @param [loginOption=true] The default keeps the user logged in over
     * multiple sessions
     * @param doneCallback Called when the operation succeed.
     * @param failCallback Called when the operation failed.
     * @return
     */
    loginWithToken(token, loginOption, doneCallback, failCallback) {
        if (loginOption instanceof Function) {
            return this.loginWithToken(token, true, loginOption, doneCallback);
        }
        this.db.token = token;
        return this.db.renew(loginOption).then(doneCallback, failCallback);
    }
    /**
     * Log out the current logged in user and ends the active user session
     * @param doneCallback Called when the operation succeed.
     * @param failCallback Called when the operation failed.
     * @return
     */
    logout(doneCallback, failCallback) {
        return this.db.logout().then(doneCallback, failCallback);
    }
    newPassword(...args) {
        // detect signature newPassword(token, newPassword, [loginOption=true][, doneCallback[, failCallback]])
        if (typeof args[2] === 'string') {
            const [username, password, newPassword, doneCallback, failCallback] = args;
            return this.db.newPassword(username, password, newPassword).then(doneCallback, failCallback);
        }
        // eslint-disable-next-line prefer-const
        let [token, newPassword, loginOption, doneCallback, failCallback] = args;
        if (loginOption instanceof Function) {
            failCallback = doneCallback;
            doneCallback = loginOption;
            loginOption = true;
        }
        return this.db.newPasswordWithToken(token, newPassword, loginOption).then(doneCallback, failCallback);
    }
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
    resetPassword(username, doneCallback, failCallback) {
        return this.db.resetPassword(username).then(doneCallback, failCallback);
    }
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
    changeUsername(username, newUsername, password, doneCallback, failCallback) {
        return this.db.changeUsername(username, newUsername, password).then(doneCallback, failCallback);
    }
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
    requestAPIToken(user, doneCallback, failCallback) {
        return this.db.requestAPIToken(this.managedType.typeConstructor, user).then(doneCallback, failCallback);
    }
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
    revokeAllTokens(user, doneCallback, failCallback) {
        return this.db.revokeAllTokens(this.managedType.typeConstructor, user).then(doneCallback, failCallback);
    }
}
/**
 * @property oauth default properties
 * @property google default oauth properties for Google
 * @property facebook default oauth properties for Facebook
 * @property github default oauth properties for GitHub
 * @property twitter default oauth properties for Twitter
 * @property linkedin default oauth properties for LinkedIn
 * @property {Object} oauth.salesforce default oauth properties for Salesforce
 */
UserFactory_UserFactory.DefaultOptions = {
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
['Google', 'Facebook', 'GitHub', 'Twitter', 'LinkedIn', 'Salesforce'].forEach((name) => {
    const methodName = `loginWith${name}`;
    // do not use a lambda here since we will loose the this context
    UserFactory_UserFactory.prototype[methodName] = function loginWithOAuth(clientID, options, doneCallback, failCallback) {
        if (options instanceof Function) {
            return this[methodName](clientID, {}, options, doneCallback);
        }
        const opt = Object.assign(Object.assign(Object.assign({}, UserFactory_UserFactory.DefaultOptions[name.toLowerCase()]), (typeof clientID === 'string' ? { clientId: clientID } : clientID)), options || {});
        return this.db.loginWithOAuth(name, opt).then(doneCallback, failCallback);
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlckZhY3RvcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJVc2VyRmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFJaEQsTUFBTSxDQUFOLElBQVksV0FhWDtBQWJELFdBQVksV0FBVztJQUNyQjs7T0FFRztJQUNILHNEQUFhLENBQUE7SUFDYjs7T0FFRztJQUNILCtEQUFpQixDQUFBO0lBQ2pCOztPQUVHO0lBQ0gsK0RBQWlCLENBQUE7QUFDbkIsQ0FBQyxFQWJXLFdBQVcsS0FBWCxXQUFXLFFBYXRCO0FBRUQ7O0dBRUc7QUFDSCxNQUFNLE9BQU8sV0FBWSxTQUFRLGFBQXlCO0lBQ3hELElBQVcsV0FBVztRQUNwQixPQUFPLFdBQVcsQ0FBQztJQUNyQixDQUFDO0lBZ0REOztPQUVHO0lBQ0gsSUFBSSxFQUFFO1FBQ0osT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBRUQ7Ozs7Ozs7OztPQVNHO0lBQ0gsUUFBUSxDQUFDLElBQXlCLEVBQUUsUUFBZ0IsRUFBRSxXQUE4QyxFQUNsRyxZQUFrQixFQUFFLFlBQWtCO1FBQ3RDLElBQUksV0FBVyxZQUFZLFFBQVEsRUFBRTtZQUNuQyxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLFlBQVksQ0FBQyxDQUFDO1NBQ3ZFO1FBRUQsTUFBTSxPQUFPLEdBQUcsT0FBTyxJQUFJLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUNwRixPQUFPLElBQUksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxRQUFRLEVBQUUsV0FBVyxLQUFLLFNBQVMsQ0FBQyxDQUFD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
// EXTERNAL MODULE: ./lib/message.ts
var message = __webpack_require__(2);

// CONCATENATED MODULE: ./lib/binding/DeviceFactory.ts



class DeviceFactory_DeviceFactory extends EntityFactory_EntityFactory {
    /**
     * Push message will be used to send a push notification to a set of devices
     */
    get PushMessage() {
        return intersection["PushMessage"];
    }
    /**
     * The current registered device, or <code>null</code> if the device is not registered
     * @type model.Device
     */
    get me() {
        return this.db.deviceMe;
    }
    /**
     * Returns true if the devices is already registered, otherwise false.
     * @type boolean
     */
    get isRegistered() {
        return this.db.isDeviceRegistered;
    }
    /**
     * Loads the Public VAPID Key which can be used to subscribe a Browser for Web Push notifications
     * @return The public VAPID Web Push subscription key
     */
    loadWebPushKey() {
        const msg = new message["VAPIDPublicKey"]();
        msg.responseType('arraybuffer');
        return this.db.send(msg).then((response) => response.entity);
    }
    register(os, tokenOrSubscription, device, doneCallback, failCallback) {
        if (device instanceof Function) {
            return this.register(os, tokenOrSubscription, null, device, doneCallback);
        }
        const subscription = typeof tokenOrSubscription === 'string' ? { token: tokenOrSubscription } : tokenOrSubscription;
        return this.db.registerDevice(os, subscription, device).then(doneCallback, failCallback);
    }
    /**
     * Uses the info from the given {@link PushMessage} message to send an push notification.
     * @param pushMessage to send an push notification.
     * @param doneCallback Called when the operation succeed.
     * @param failCallback Called when the operation failed.
     * @return
     */
    push(pushMessage, doneCallback, failCallback) {
        return this.db.pushDevice(pushMessage).then(doneCallback, failCallback);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGV2aWNlRmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkRldmljZUZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLENBQUM7QUFDdEMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRTlDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUVoRCxNQUFNLE9BQU8sYUFBYyxTQUFRLGFBQTJCO0lBQzVEOztPQUVHO0lBQ0gsSUFBVyxXQUFXO1FBQ3BCLE9BQU8sV0FBVyxDQUFDO0lBQ3JCLENBQUM7SUFFRDs7O09BR0c7SUFDSCxJQUFJLEVBQUU7UUFDSixPQUFPLElBQUksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDO0lBQzFCLENBQUM7SUFFRDs7O09BR0c7SUFDSCxJQUFJLFlBQVk7UUFDZCxPQUFPLElBQUksQ0FBQyxFQUFFLENBQUMsa0JBQWtCLENBQUM7SUFDcEMsQ0FBQztJQUVEOzs7T0FHRztJQUNILGNBQWM7UUFDWixNQUFNLEdBQUcsR0FBRyxJQUFJLE9BQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN6QyxHQUFHLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ2hDLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDL0QsQ0FBQztJQTBCRCxRQUFRLENBQUMsRUFBVSxFQUFFLG1CQUE4QyxFQUFFLE1BQXNDLEVBQ3pHLFlBQWtCLEVBQUUsWUFBa0I7UUFDdEMsSUFBSSxNQUFNLFlBQVksUUFBUSxFQUFFO1lBQzlCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsbUJBQW1CLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxZQUFZLENBQUMsQ0FBQztTQUMzRTtRQUVELE1BQU0sWUFBWSxHQUFHLE9BQU8sbUJBQW1CLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxtQkFBbUIsRUFBRSxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQztRQUVwSCxPQUFPLElBQUksQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDLEVBQUUsRUFBRSxZQUFZLEVBQUUsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxZQUFZLENBQUMsQ0FBQztJQUMzRixDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0gsSUFBSSxDQUFDLFdBQXdCLEVBQUUsWUFBa0IsRUFBRSxZQUFrQjtRQUNuRSxPQUFPLElBQUksQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsWUFBWSxDQUFDLENBQUM7SUFDMUUsQ0FBQztDQUNGIn0=
// EXTERNAL MODULE: ./lib/error/index.ts + 5 modules
var error = __webpack_require__(5);

// EXTERNAL MODULE: ./lib/Acl.ts
var Acl = __webpack_require__(7);

// EXTERNAL MODULE: ./lib/util/index.ts + 13 modules
var util = __webpack_require__(4);

// EXTERNAL MODULE: ./lib/connector/index.ts + 5 modules
var connector = __webpack_require__(0);

// CONCATENATED MODULE: ./lib/binding/File.ts
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var _a;





const FILE_BUCKET = '/file';
const FILE_BUCKET_LENGTH = FILE_BUCKET.length;
const ID = Symbol('Id');
const METADATA = Symbol('Metadata');
const DATA = Symbol('Data');
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
class File_File {
    /**
     * Creates a new file object which represents a file at the given id. Data which is provided to the constructor will
     * be uploaded by invoking {@link upload()}
     * @param fileOptions The fileOptions used to create a new file object, or just the id of the file
     */
    constructor(fileOptions) {
        /**
         * The database connection to use
         */
        this.db = null; // is lazy initialized and never null
        this[_a] = null;
        // Is fileOptions just an id?
        const opt = typeof fileOptions === 'string' ? { id: fileOptions } : (fileOptions || {});
        if (opt.id) {
            // Check validity of id
            const nameSeparator = opt.id.indexOf('/', '/file/'.length);
            if (nameSeparator === -1 || opt.id.indexOf('/file/') !== 0) {
                throw new Error(`Invalid file reference ${opt.id}`);
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
    /**
     * The complete id of the file, including folder and name
     */
    get id() {
        return this[ID];
    }
    // @ts-ignore
    get url() {
        throw new Error('This method is removed. Use the asynchronous File.createURL() method instead.');
    }
    /**
     * The name of the file
     */
    get name() {
        return this.id.substring(this.id.lastIndexOf('/', this.id.length - 2) + 1);
    }
    /**
     * The mimeType of the file, only accessible after fetching the metadata or downloading/uploading/providing the file
     */
    get mimeType() {
        if (this.isFolder) {
            throw new Error('A folder has no mimeType');
        }
        this.checkAvailable();
        return this[METADATA].mimeType;
    }
    /**
     * The current file acl, only accessible after fetching the metadata or downloading/uploading/providing the file
     */
    get acl() {
        this.checkAvailable();
        return this[METADATA].acl;
    }
    /**
     * The last modified date of the file, only accessible after fetching the metadata
     * or downloading/uploading/providing the eTag
     */
    get lastModified() {
        if (this.isFolder) {
            throw new Error('A folder has no lastModified');
        }
        this.checkAvailable();
        return this[METADATA].lastModified;
    }
    /**
     * The creation date of the file, only accessible after fetching the metadata
     * or downloading/uploading/providing the eTag
     */
    get createdAt() {
        if (this.isFolder) {
            throw new Error('A folder has no creation date');
        }
        this.checkAvailable();
        return this[METADATA].createdAt;
    }
    /**
     * The eTag of the file, only accessible after fetching the metadata or downloading/uploading/providing the file
     */
    get eTag() {
        if (this.isFolder) {
            throw new Error('A folder has no eTag');
        }
        this.checkAvailable();
        return this[METADATA].eTag;
    }
    /**
     * The custom headers of the file, only accessible after fetching the metadata or downloading/uploading/providing
     * the file
     */
    get headers() {
        if (this.isFolder) {
            throw new Error('A folder has no custom headers');
        }
        this.checkAvailable();
        return this[METADATA].headers;
    }
    /**
     * The size of the file, only accessible after fetching the metadata or downloading/uploading/providing the file
     */
    get size() {
        if (this.isFolder) {
            throw new Error('A folder has no size');
        }
        this.checkAvailable();
        return this[METADATA].size;
    }
    /**
     * The root bucket of this file
     */
    get bucket() {
        return this.id.substring(FILE_BUCKET_LENGTH + 1, this.id.indexOf('/', FILE_BUCKET_LENGTH + 1));
    }
    /**
     * The full path under the bucket of this file
     */
    get key() {
        return this.id.substring(this.id.indexOf('/', FILE_BUCKET_LENGTH + 1) + 1);
    }
    /**
     * The full path of the file.
     */
    get path() {
        return this.id.substring(FILE_BUCKET_LENGTH);
    }
    /**
     * The parent folder of the file.
     */
    get parent() {
        return this.id.substring(FILE_BUCKET_LENGTH, this.id.lastIndexOf('/', this.id.length - 2));
    }
    /**
     * Indicates if the metadata are loaded.
     */
    get isMetadataLoaded() {
        return !!this[METADATA];
    }
    /**
     * Parses an E-Tag header
     * @param eTag The E-Tag to parse or something falsy
     * @return Returns the parsed E-Tag or null, if it could not be parsed
     */
    static parseETag(eTag) {
        if (!eTag) {
            return null;
        }
        const match = eTag.match(/^(?:[wW]\/)?["'](.*)["']$/);
        if (!match) {
            return null;
        }
        return match[1];
    }
    /**
     * The fully url to the file, can be directly used to link the file, i.e. in link tags ot image sources
     * @param authorize - Authorize the the link with an temporary token, to give authorized access to this protected
     * resource default false if the root bucket is www, true otherwise
     * @return A url with an optional token, to give direct access o the linked resource
     */
    createURL(authorize) {
        if (this.isFolder) {
            throw new Error('Url can not be created for folders.');
        }
        return this.db.createURL(this.id, typeof authorize === 'boolean' ? authorize : this.bucket !== 'www');
    }
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
    upload(uploadOptions, doneCallback, failCallback) {
        var _b;
        const opt = uploadOptions || {};
        if (this.isFolder) {
            throw new Error('A folder cannot be uploaded');
        }
        this.setDataOptions(opt);
        const uploadMessage = new message["UploadFile"](this.bucket, this.key)
            .entity(this[DATA].data, (_b = this[DATA]) === null || _b === void 0 ? void 0 : _b.type);
        const meta = this[METADATA];
        if (meta) {
            uploadMessage.acl(meta.acl);
            uploadMessage.contentLength(meta.size);
            uploadMessage.mimeType(meta.mimeType);
            uploadMessage.customHeaders(meta.headers);
        }
        uploadMessage.progress(opt.progress || null);
        this.conditional(uploadMessage, opt);
        this.db.addToBlackList(this.id);
        return this.db.send(uploadMessage).then((response) => {
            this[DATA] = null;
            this.fromJSON(response.entity);
            return this;
        }).then(doneCallback, failCallback);
    }
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
    download(downloadOptions, doneCallback, failCallback) {
        const opt = downloadOptions || {};
        if (this.isFolder) {
            throw new Error('A folder cannot be downloaded');
        }
        const type = opt.type || 'blob';
        const downloadMessage = new message["DownloadFile"](this.bucket, this.key)
            .responseType(type);
        this.db.ensureCacheHeader(this.id, downloadMessage, opt.refresh);
        return this.db.send(downloadMessage).then((response) => {
            this.db.addToWhiteList(this.id);
            this.fromHeaders(response.headers);
            return response.entity;
        }, (e) => {
            if (e.status === connector["StatusCode"].OBJECT_NOT_FOUND) {
                return null;
            }
            throw e;
        }).then(doneCallback, failCallback);
    }
    /**
     * Deletes a file
     * @param deleteOptions The delete options
     * @param deleteOptions.force=false force the deletion without verifying any version
     * @param doneCallback The callback is invoked after the deletion succeed successfully
     * @param failCallback The callback is invoked if any error is occurred
     * @return A promise which will be fulfilled with this file object,
     * or with a list of all deleted files, if this file is an folder
     */
    delete(deleteOptions, doneCallback, failCallback) {
        const opt = deleteOptions || {};
        const deleteMessage = new message["DeleteFile"](this.bucket, this.key);
        this.conditional(deleteMessage, opt);
        if (!this.isFolder) {
            this.db.addToBlackList(this.id);
        }
        return this.db.send(deleteMessage).then((response) => {
            if (!this.isFolder) {
                return this;
            }
            return response.entity.map((fileId) => new this.db.File(fileId));
        }).then(doneCallback, failCallback);
    }
    /**
     * Creates the file id from given options.
     * @param fileOptions
     * @return
     */
    createIdFromOptions(fileOptions) {
        var _b;
        let path;
        if (fileOptions.path) {
            path = fileOptions.path;
        }
        else {
            const parent = Object(util["trailingSlashIt"])(fileOptions.parent || '/www');
            if (parent.length < 3) {
                throw new Error(`Invalid parent name: ${parent}`);
            }
            const name = fileOptions.name || ((_b = fileOptions === null || fileOptions === void 0 ? void 0 : fileOptions.data) === null || _b === void 0 ? void 0 : _b.name) || Object(util["uuid"])();
            path = parent + name;
        }
        // Add leading slash if missing
        if (path.charAt(0) !== '/') {
            path = `/${path}`;
        }
        // Check path validity
        if (path.indexOf('//') !== -1 || path.length < 3) {
            throw new Error(`Invalid path: ${path}`);
        }
        return FILE_BUCKET + path;
    }
    /**
     * Makes the given message a conditional request based on the file metadata
     * @param msg The message to make conditional
     * @param options additional request options
     * @param options.force=false Force the request operation by didn't make it conditional
     */
    conditional(msg, options) {
        if (options.force) {
            return;
        }
        const meta = this[METADATA];
        if (!meta || (!meta.lastModified && !meta.eTag)) {
            msg.ifNoneMatch('*');
            return;
        }
        msg.ifUnmodifiedSince(meta.lastModified);
        msg.ifMatch(meta.eTag);
    }
    /**
     * Gets the file metadata of a file
     * @param options The load metadata options
     * @param [options.refresh=false] Force a revalidation while fetching the metadata
     * @param doneCallback The callback is invoked after the metadata is fetched
     * @param failCallback The callback is invoked if any error has occurred
     * @return A promise which will be fulfilled with this file
     */
    loadMetadata(options, doneCallback, failCallback) {
        const opt = options || {};
        if (this.isFolder) {
            throw new Error('A folder has no mata data.');
        }
        const msg = new message["GetFileMetadata"](this.bucket, this.key);
        this.db.ensureCacheHeader(this.id, msg, opt.refresh);
        return this.db.send(msg).then((response) => {
            // do not white list the file, because head-request does not revalidate the cache.
            this.fromHeaders(response.headers);
            return this;
        }, (e) => {
            if (e.status === connector["StatusCode"].OBJECT_NOT_FOUND) {
                return null;
            }
            throw e;
        }).then(doneCallback, failCallback);
    }
    /**
     * Updates the mata data of this file.
     * @param options The save metadata options
     * @param [options.force=false] force the update and overwrite the existing metadata without validating it
     * @param doneCallback The callback is invoked after the metadata is saved
     * @param failCallback The callback is invoked if any error has occurred
     * @return A promise which will be fulfilled with this file
     */
    saveMetadata(options, doneCallback, failCallback) {
        const opt = options || {};
        const json = this.toJSON();
        const msg = new message["UpdateFileMetadata"](this.bucket, this.key)
            .entity(json);
        this.conditional(msg, opt);
        return this.db.send(msg).then((response) => {
            this.fromJSON(response.entity);
            return this;
        }).then(doneCallback, failCallback);
    }
    /**
     * Validates and sets the file metadata based on the given options
     * @param options
     * @private
     */
    setDataOptions(options) {
        const { data, type } = options, metadata = __rest(options, ["data", "type"]);
        if (!data) {
            return;
        }
        // Set data
        this[DATA] = { type, data };
        const mimeType = this.guessMimeType(options) || undefined;
        this.fromJSON(Object.assign(Object.assign({}, metadata), { mimeType }));
    }
    /**
     * Gets the MIME type of given file options.
     * @param options
     * @return Returns the guessed MIME type or null, if it could not be guessed.
     * @private
     */
    guessMimeType(options) {
        const { mimeType } = options;
        if (mimeType) {
            return mimeType;
        }
        if (typeof Blob !== 'undefined' && options.data instanceof Blob) {
            return options.data.type;
        }
        if (options.type === 'data-url' && typeof options.data === 'string') {
            const match = options.data.match(/^data:(.+?)(;base64)?,.*$/);
            return match && match[1];
        }
        return null;
    }
    /**
     * @param headers
     */
    fromHeaders(headers) {
        this.fromJSON({
            eTag: File_File.parseETag(headers.etag),
            lastModified: headers['last-modified'],
            createdAt: headers['baqend-created-at'],
            mimeType: headers['content-type'],
            acl: headers['baqend-acl'] && JSON.parse(headers['baqend-acl']),
            size: +headers['baqend-size'],
            headers: headers['baqend-custom-headers'] && JSON.parse(headers['baqend-custom-headers']),
        });
    }
    /**
     * Deserialize the given JSON file metadata back to this file instance
     *
     * If the JSON object contains an ID, it must match with this file ID, otherwise an exception is thrown.
     *
     * @param json The json to deserialize
     */
    fromJSON(json) {
        const { id } = json;
        if (id && this.id !== id) {
            throw new Error(`This file id ${this.id} does not match the given json id ${id}`);
        }
        const meta = this[METADATA] || {};
        let acl;
        if (json.acl instanceof Acl["a" /* Acl */]) {
            acl = json.acl;
        }
        else {
            acl = meta.acl || new Acl["a" /* Acl */]();
            if (json.acl) {
                acl.fromJSON(json.acl);
            }
        }
        // keep last known lastModified, createdAt, eTag and headers
        this[METADATA] = Object.assign(Object.assign({}, this[METADATA]), { mimeType: json.mimeType, lastModified: (json.lastModified && new Date(json.lastModified)) || meta.lastModified, createdAt: (json.createdAt && new Date(json.createdAt)) || meta.createdAt, eTag: json.eTag || meta.eTag, acl, size: typeof json.size === 'number' ? json.size : json.contentLength, headers: json.headers || meta.headers || {} });
    }
    /**
     * Serialize the file metadata of this object to json
     * @return The serialized file metadata as json
     */
    toJSON() {
        var _b;
        this.checkAvailable();
        const meta = this[METADATA];
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
    }
    /**
     * Checks whenever metadata are already loaded of the file, throws an error otherwise
     * @return
     */
    checkAvailable() {
        if (!this.isMetadataLoaded) {
            throw new error["PersistentError"](`The file metadata of ${this.id} is not available.`);
        }
    }
}
_a = DATA;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmlsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkZpbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQzdCLE9BQU8sRUFDTCxJQUFJLEVBQUUsZUFBZSxHQUV0QixNQUFNLFNBQVMsQ0FBQztBQUNqQixPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksQ0FBQztBQUN0QyxPQUFPLEVBQ3NCLFVBQVUsR0FDdEMsTUFBTSxjQUFjLENBQUM7QUFJdEIsTUFBTSxXQUFXLEdBQUcsT0FBTyxDQUFDO0FBQzVCLE1BQU0sa0JBQWtCLEdBQUcsV0FBVyxDQUFDLE1BQU0sQ0FBQztBQUU5QyxNQUFNLEVBQUUsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDeEIsTUFBTSxRQUFRLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQ3BDLE1BQU0sSUFBSSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztBQXdFNUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQTZDRztBQUNILE1BQU0sT0FBTyxJQUFJO0lBcUpmOzs7O09BSUc7SUFDSCxZQUFZLFdBQXdCO1FBcEpwQzs7V0FFRztRQUNJLE9BQUUsR0FBa0IsSUFBVyxDQUFDLENBQUMscUNBQXFDO1FBTXJFLFFBQU0sR0FBb0IsSUFBSSxDQUFDO1FBNElyQyw2QkFBNkI7UUFDN0IsTUFBTSxHQUFHLEdBQUcsT0FBTyxXQUFXLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLElBQUksRUFBRSxDQUFDLENBQUM7UUFFeEYsSUFBSSxHQUFHLENBQUMsRUFBRSxFQUFFO1lBQ1YsdUJBQXVCO1lBQ3ZC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
// CONCATENATED MODULE: ./lib/binding/FileFactory.ts






class FileFactory_FileFactory extends Factory {
    constructor() {
        super(...arguments);
        /**
         * The owning EntityManager where this factory belongs to
         */
        this.db = null;
    }
    /**
     * Creates a new FileFactory for the given type
     * @param db
     * @return A new file factory
     */
    static create(db) {
        const factory = this.createFactory(File_File);
        factory.db = db;
        return factory;
    }
    /**
     * Creates a new file
     * @param args Constructor arguments used for instantiation, the constructor will not be called
     * when no arguments are passed
     * @return A new created file
     */
    newInstance(args) {
        const instance = super.newInstance(args);
        instance.db = this.db;
        return instance;
    }
    /**
     * Deserialize the file metadata from a json object back to a new file instance
     * @param json The file metadata as json
     * @return The deserialize File instance
     */
    fromJSON(json) {
        const file = this.newInstance([json.id]);
        file.fromJSON(json);
        return file;
    }
    /**
     * Updates the metadata of the root file directory formally the file "bucket"
     * @param bucket The name of the root file directory
     * @param metadata The new metadata for the bucket
     * @param doneCallback Invoked if the operation succeeds
     * @param failCallback The callback is invoked if any error has occurred
     * @return A promise which will fulfilled with the updated metadata
     */
    saveMetadata(bucket, metadata, doneCallback, failCallback) {
        const msg = new message["SetFileBucketMetadata"](bucket, metadata);
        return this.db.send(msg).then(doneCallback, failCallback);
    }
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
    loadMetadata(bucket, options, doneCallback, failCallback) {
        const msg = new message["GetFileBucketMetadata"](bucket);
        // this._db.ensureCacheHeader(this.id, msg, options.refresh);
        // do not white list the file, because head-request does not revalidate the cache.
        return this.db.send(msg).then((response) => {
            const result = {};
            intersection["Permission"].BASE_PERMISSIONS.forEach((key) => {
                result[key] = intersection["Permission"].fromJSON(response.entity[key] || {});
            });
            return result;
        }, (e) => {
            if (e.status === connector["StatusCode"].OBJECT_NOT_FOUND) {
                return null;
            }
            throw e;
        }).then(doneCallback, failCallback);
    }
    /**
     * Lists all the buckets.
     * @param doneCallback The callback is invoked with the listed buckets
     * @param failCallback The callback is invoked if any error has occurred
     * @return The listed buckets.
     */
    listBuckets(doneCallback, failCallback) {
        return this.db.send(new message["ListBuckets"]()).then((response) => (response.entity.map((bucket) => this.new(`${bucket}/`)))).then(doneCallback, failCallback);
    }
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
    listFiles(folderOrPath, start, count, doneCallback, failCallback) {
        let folder;
        if (typeof folderOrPath === 'string') {
            const path = Object(util["trailingSlashIt"])(folderOrPath);
            folder = this.new({ path });
        }
        else {
            folder = folderOrPath;
        }
        const path = folder.key;
        const { bucket } = folder;
        return this.db.send(new message["ListFiles"](bucket, path, start ? start.key : undefined, count)).then((response) => (response.entity.map((file) => this.new(file)))).then(doneCallback, failCallback);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmlsZUZhY3RvcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJGaWxlRmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQ3BDLE9BQU8sRUFBRSxJQUFJLEVBQWUsTUFBTSxRQUFRLENBQUM7QUFDM0MsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLENBQUM7QUFDdEMsT0FBTyxFQUFXLGVBQWUsRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUNuRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBRTFDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQStCN0MsTUFBTSxPQUFPLFdBQVksU0FBUSxPQUFhO0lBQTlDOztRQVlFOztXQUVHO1FBQ0ksT0FBRSxHQUFrQixJQUFXLENBQUM7SUEyR3pDLENBQUM7SUF6SEM7Ozs7T0FJRztJQUNILE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBaUI7UUFDN0IsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBb0IsSUFBSSxDQUFDLENBQUM7UUFDNUQsT0FBTyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDaEIsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQztJQU9EOzs7OztPQUtHO0lBQ0gsV0FBVyxDQUFDLElBQXFCO1FBQy9CLE1BQU0sUUFBUSxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekMsUUFBUSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO1FBQ3RCLE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsUUFBUSxDQUFDLElBQWE7UUFDcEIsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFZLENBQUMsQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxR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
// CONCATENATED MODULE: ./lib/util/enumerable.ts
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW51bWVyYWJsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImVudW1lcmFibGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztHQUdHO0FBQ0gsTUFBTSxVQUFVLFVBQVUsQ0FBQyxLQUFjO0lBQ3ZDLE9BQU8sU0FBUyxRQUFRLENBQ3RCLE1BQVcsRUFDWCxXQUFtQixFQUNuQixVQUE4QjtRQUU5Qiw2Q0FBNkM7UUFDN0MsVUFBVSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7SUFDaEMsQ0FBQyxDQUFDO0FBQ0osQ0FBQyJ9
// CONCATENATED MODULE: ./lib/binding/Managed.ts
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



class Managed_Managed {
    /**
     * Initialize the given instance
     * @param instance The managed instance to initialize
     * @param properties The optional properties to set on the instance
     */
    static init(instance, properties) {
        const type = Enhancer.getBaqendType(instance.constructor);
        if (type.isEntity) {
            Object.defineProperty(instance, '_metadata', {
                value: intersection["Metadata"].create(type),
                configurable: true,
            });
        }
        if (properties) {
            Object.assign(instance, properties);
        }
    }
    /**
     * Creates a subclass of this class
     * @param {Class<*>} childClass
     * @return {Class<*>} The extended child class
     */
    static extend(childClass) {
        // eslint-disable-next-line no-param-reassign
        childClass.prototype = Object.create(this.prototype, {
            constructor: {
                value: childClass,
                configurable: true,
                writable: true,
            },
        });
        // eslint-disable-next-line no-param-reassign
        childClass.extend = Managed_Managed.extend;
        return childClass;
    }
    /**
     * The default constructor, copy all given properties to this object
     * @param properties - The optional properties to copy
     */
    constructor(properties) {
        Managed_Managed.init(this, properties);
    }
    /**
     * Returns this object identifier or the baqend type of this object
     * @return the object id or type whatever is available
     */
    toString() {
        const type = Enhancer.getBaqendType(this.constructor);
        return type.ref;
    }
    /**
     * Converts the managed object to an JSON-Object.
     * @return JSON-Object
     * @method
     */
    toJSON() {
        const type = Enhancer.getBaqendType(this.constructor);
        return type.toJsonValue(intersection["Metadata"].create(type), this, { persisting: false });
    }
}
__decorate([
    enumerable(false)
], Managed_Managed.prototype, "toString", null);
__decorate([
    enumerable(false)
], Managed_Managed.prototype, "toJSON", null);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWFuYWdlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIk1hbmFnZWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRWhELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDdEMsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBZTNDLE1BQU0sT0FBTyxPQUFPO0lBQ2xCOzs7O09BSUc7SUFDSCxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQWlCLEVBQUUsVUFBd0M7UUFDckUsTUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFFLENBQUM7UUFDM0QsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLE1BQU0sQ0FBQyxjQUFjLENBQUMsUUFBUSxFQUFFLFdBQVcsRUFBRTtnQkFDM0MsS0FBSyxFQUFFLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBdUIsQ0FBQztnQkFDL0MsWUFBWSxFQUFFLElBQUk7YUFDbkIsQ0FBQyxDQUFDO1NBQ0o7UUFFRCxJQUFJLFVBQVUsRUFBRTtZQUNkLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1NBQ3JDO0lBQ0gsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQWlDO1FBQzdDLDZDQUE2QztRQUM3QyxVQUFVLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNuRCxXQUFXLEVBQUU7Z0JBQ1gsS0FBSyxFQUFFLFVBQVU7Z0JBQ2pCLFlBQVksRUFBRSxJQUFJO2dCQUNsQixRQUFRLEVBQUUsSUFBSTthQUNmO1NBQ0YsQ0FBQyxDQUFDO1FBQ0gsNkNBQTZDO1FBQzVDLFVBQWtCLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUM7UUFDNUMsT0FBTyxVQUFVLENBQUM7SUFDcEIsQ0FBQztJQUVEOzs7T0FHRztJQUNILFlBQVksVUFBd0M7UUFDbEQsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVEOzs7T0FHRztJQUVILFFBQVE7UUFDTixNQUFNLElBQUksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUN0RCxPQUFPLElBQUssQ0FBQyxHQUFHLENBQUM7SUFDbkIsQ0FBQztJQUVEOzs7O09BSUc7SUFFSCxNQUFNO1FBQ0osTUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFFLENBQUM7UUFDdkQsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7SUFDOUUsQ0FBQztDQUNGO0FBZkM7SUFEQyxVQUFVLENBQUMsS0FBSyxDQUFDO3VDQUlqQjtBQVFEO0lBREMsVUFBVSxDQUFDLEtBQUssQ0FBQztxQ0FJakIifQ==
// EXTERNAL MODULE: ./lib/partialupdate/index.ts + 3 modules
var partialupdate = __webpack_require__(14);

// CONCATENATED MODULE: ./lib/binding/Entity.ts
var Entity_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





class Entity_Entity extends Managed_Managed {
    /**
     * The unique id of this object
     *
     * Sets the unique id of this object, if the id is not formatted as an valid id,
     * it will be used as the key component of the id has the same affect as setting the key
     *
     * @type string
     */
    get id() {
        return this._metadata.id;
    }
    set id(value) {
        if (this._metadata.id) {
            throw new Error(`The id can't be set twice: ${value}`);
        }
        const val = `${value}`;
        if (val.indexOf(`/db/${this._metadata.bucket}/`) === 0) {
            this._metadata.id = value;
        }
        else {
            this.key = value;
        }
    }
    /**
     * The unique key part of the id
     * When the key of the unique id is set an error will be thrown if an id is already set.
     * @type string
     */
    get key() {
        return this._metadata.key;
    }
    set key(value) {
        this._metadata.key = value;
    }
    /**
     * The version of this object
     * @type number
     * @readonly
     */
    get version() {
        return this._metadata.version;
    }
    /**
     * The object read/write permissions
     * @type Acl
     * @readonly
     */
    get acl() {
        this._metadata.throwUnloadedPropertyAccess('acl');
        return this._metadata.acl;
    }
    /**
     * Attach this object to the given db
     * @param db The db which will be used for future crud operations
     * @return
     */
    attach(db) {
        db.attach(this);
    }
    ready(doneCallback) {
        return this._metadata.ready().then(() => this).then(doneCallback);
    }
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
    save(options, doneCallback, failCallback) {
        if (typeof options === 'function') {
            return this.save({}, options, doneCallback);
        }
        return this._metadata.db.save(this, options).then(doneCallback, failCallback);
    }
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
    insert(options, doneCallback, failCallback) {
        if (typeof options === 'function') {
            return this.insert({}, options, doneCallback);
        }
        return this._metadata.db.insert(this, options).then(doneCallback, failCallback);
    }
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
    update(options, doneCallback, failCallback) {
        if (typeof options === 'function') {
            return this.update({}, options, doneCallback);
        }
        return this._metadata.db.update(this, options).then(doneCallback, failCallback);
    }
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
    load(options, doneCallback, failCallback) {
        if (typeof options === 'function') {
            return this.load({}, options, doneCallback);
        }
        const opt = Object.assign({ local: true }, options);
        if (this.id === null) {
            throw new error["PersistentError"]("This object can't be loaded, it does have an id.");
        }
        return this._metadata.db.load(this.id, undefined, opt).then(doneCallback, failCallback);
    }
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
    delete(options, doneCallback, failCallback) {
        if (typeof options === 'function') {
            return this.delete({}, options, doneCallback);
        }
        return this._metadata.db.delete(this, options).then(doneCallback, failCallback);
    }
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
    optimisticSave(cb, doneCallback, failCallback) {
        return this._metadata.db.optimisticSave(this, cb).then(doneCallback, failCallback);
    }
    attr() {
        throw new Error('Attr is not yet implemented.');
    }
    /**
     * Validates the entity by using the validation code of the entity type
     *
     * @return Contains the result of the Validation
     * @method
     */
    validate() {
        return this._metadata.db.validate(this);
    }
    /**
     * Starts a partial update on this entity
     *
     * @param operations initial operations which should be executed
     * @return
     */
    partialUpdate(operations) {
        return new partialupdate["EntityPartialUpdateBuilder"](this, operations);
    }
    /**
     * Get all objects which refer to this object
     *
     * @param [options] Some options to pass
     * @param [options.classes] An array of class names to filter for, null for no filter
     * @return A promise resolving with an array of all referencing objects
     * @method
     */
    getReferencing(options) {
        const { db } = this._metadata;
        const references = this._metadata.type.getReferencing(db, options);
        // Query all possibly referencing objects
        const allResults = Array.from(references).map(([ref, attrs]) => {
            // Create query for given entity
            const qb = db.createQueryBuilder(ref.typeConstructor);
            // Add term for each attribute
            const terms = [];
            attrs.forEach((attr) => {
                terms.push(qb.equal(attr, this));
            });
            // If more than one term, put everything in a disjunction
            const query = terms.length === 1 ? terms[0] : qb.or(terms);
            return query.resultList();
        });
        return Promise.all(allResults).then((results) => (
        // Filter out all objects which did not match
        results.filter((result) => !!result.length))).then((results) => (
        // Flat the array of results
        Array.prototype.concat.apply([], results)));
    }
    /**
     * Returns this object identifier or the baqend type of this object
     * @return the object id or type whatever is available
     */
    toString() {
        const type = Enhancer.getBaqendType(this.constructor);
        return this.id || type.ref;
    }
    /**
     * Converts the object to an JSON-Object
     * @param [options=false] to json options by default excludes the metadata
     * @param [options.excludeMetadata=false] Excludes the metadata form the serialized json
     * @param [options.depth=0] Includes up to depth referenced objects into the serialized json
     * @return JSON-Object
     * @method
     */
    toJSON(options) {
        // JSON.stringify calls toJSON with the parent key as the first argument.
        // Therefore ignore all unknown option types.
        let opt = options;
        if (typeof opt === 'boolean') {
            opt = {
                excludeMetadata: opt,
            };
        }
        if (typeof opt !== 'object') {
            opt = {};
        }
        const state = this._metadata;
        return state.type.toJsonValue(state, this, opt);
    }
}
Entity_decorate([
    enumerable(true)
], Entity_Entity.prototype, "id", null);
Entity_decorate([
    enumerable(false)
], Entity_Entity.prototype, "key", null);
Entity_decorate([
    enumerable(true)
], Entity_Entity.prototype, "version", null);
Entity_decorate([
    enumerable(true)
], Entity_Entity.prototype, "acl", null);
Entity_decorate([
    enumerable(false)
], Entity_Entity.prototype, "attach", null);
Entity_decorate([
    enumerable(false)
], Entity_Entity.prototype, "ready", null);
Entity_decorate([
    enumerable(false)
], Entity_Entity.prototype, "save", null);
Entity_decorate([
    enumerable(false)
], Entity_Entity.prototype, "insert", null);
Entity_decorate([
    enumerable(false)
], Entity_Entity.prototype, "update", null);
Entity_decorate([
    enumerable(false)
], Entity_Entity.prototype, "load", null);
Entity_decorate([
    enumerable(false)
], Entity_Entity.prototype, "delete", null);
Entity_decorate([
    enumerable(false)
], Entity_Entity.prototype, "optimisticSave", null);
Entity_decorate([
    enumerable(false)
], Entity_Entity.prototype, "attr", null);
Entity_decorate([
    enumerable(false)
], Entity_Entity.prototype, "validate", null);
Entity_decorate([
    enumerable(false)
], Entity_Entity.prototype, "partialUpdate", null);
Entity_decorate([
    enumerable(false)
], Entity_Entity.prototype, "getReferencing", null);
Entity_decorate([
    enumerable(false)
], Entity_Entity.prototype, "toString", null);
Entity_decorate([
    enumerable(false)
], Entity_Entity.prototype, "toJSON", null);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRW50aXR5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiRW50aXR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDcEMsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDOUQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFLM0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLFlBQVksQ0FBQztBQVF0QyxNQUFNLE9BQU8sTUFBTyxTQUFRLE9BQU87SUFtQmpDOzs7Ozs7O09BT0c7SUFFSCxJQUFJLEVBQUU7UUFDSixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFRCxJQUFJLEVBQUUsQ0FBQyxLQUFvQjtRQUN6QixJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxFQUFFO1lBQ3JCLE1BQU0sSUFBSSxLQUFLLENBQUMsOEJBQThCLEtBQUssRUFBRSxDQUFDLENBQUM7U0FDeEQ7UUFFRCxNQUFNLEdBQUcsR0FBRyxHQUFHLEtBQUssRUFBRSxDQUFDO1FBQ3ZCLElBQUksR0FBRyxDQUFDLE9BQU8sQ0FBQyxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDdEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLEdBQUcsS0FBSyxDQUFDO1NBQzNCO2FBQU07WUFDTCxJQUFJLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQztTQUNsQjtJQUNILENBQUM7SUFFRDs7OztPQUlHO0lBRUgsSUFBSSxHQUFHO1FBQ0wsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQztJQUM1QixDQUFDO0lBRUQsSUFBSSxHQUFHLENBQUMsS0FBSztRQUNYLElBQUks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
// CONCATENATED MODULE: ./lib/binding/User.ts
var User_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


class User_User extends Entity_Entity {
    /**
     * Change the password of the given user
     *
     * @param currentPassword Current password of the user
     * @param password New password of the user
     * @param doneCallback Called when the operation succeed.
     * @param failCallback Called when the operation failed.
     * @return
     */
    newPassword(currentPassword, password, doneCallback, failCallback) {
        return this._metadata.db.newPassword(this.username, currentPassword, password).then(doneCallback, failCallback);
    }
    /**
     * Change the username of the current user
     *
     * @param newUsername New username for the current user
     * @param password The password of the current user
     * @param doneCallback Called when the operation succeed.
     * @param failCallback Called when the operation failed.
     * @return
     */
    changeUsername(newUsername, password, doneCallback, failCallback) {
        return this._metadata.db.changeUsername(this.username, newUsername, password).then(doneCallback, failCallback);
    }
    /**
     * Requests a perpetual token for the user
     *
     * Only users with the admin role are allowed to request an API token.
     *
     * @param doneCallback Called when the operation succeed.
     * @param failCallback Called when the operation failed.
     * @return
     */
    requestAPIToken(doneCallback, failCallback) {
        return this._metadata.db.requestAPIToken(this.constructor, this)
            .then(doneCallback, failCallback);
    }
}
User_decorate([
    enumerable(false)
], User_User.prototype, "newPassword", null);
User_decorate([
    enumerable(false)
], User_User.prototype, "changeUsername", null);
User_decorate([
    enumerable(false)
], User_User.prototype, "requestAPIToken", null);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlVzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFJbEMsTUFBTSxPQUFPLElBQUssU0FBUSxNQUFNO0lBVzlCOzs7Ozs7OztPQVFHO0lBRUgsV0FBVyxDQUFDLGVBQXVCLEVBQUUsUUFBZ0IsRUFBRSxZQUFrQixFQUFFLFlBQWtCO1FBQzNGLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFVLEVBQUUsZUFBZSxFQUFFLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsWUFBWSxDQUFDLENBQUM7SUFDcEgsQ0FBQztJQUVEOzs7Ozs7OztPQVFHO0lBRUgsY0FBYyxDQUFDLFdBQW1CLEVBQUUsUUFBZ0IsRUFBRSxZQUFrQixFQUFFLFlBQWtCO1FBQzFGLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxRQUFVLEVBQUUsV0FBVyxFQUFFLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsWUFBWSxDQUFDLENBQUM7SUFDbkgsQ0FBQztJQUVEOzs7Ozs7OztPQVFHO0lBRUgsZUFBZSxDQUFDLFlBQWtCLEVBQUUsWUFBa0I7UUFDcEQsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFdBQWdDLEVBQUUsSUFBSSxDQUFDO2FBQ2xGLElBQUksQ0FBQyxZQUFZLEVBQUUsWUFBWSxDQUFDLENBQUM7SUFDdEMsQ0FBQztDQUNGO0FBaENDO0lBREMsVUFBVSxDQUFDLEtBQUssQ0FBQzt1Q0FHakI7QUFZRDtJQURDLFVBQVUsQ0FBQyxLQUFLLENBQUM7MENBR2pCO0FBWUQ7SUFEQyxVQUFVLENBQUMsS0FBSyxDQUFDOzJDQUlqQiJ9
// CONCATENATED MODULE: ./lib/binding/Role.ts
var Role_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



class Role_Role extends Entity_Entity {
    constructor() {
        super(...arguments);
        /**
         * A set of users which have this role
         */
        this.users = null;
        /**
         * The name of the role
         */
        this.name = null;
    }
    /**
     * Test if the given user has this role
     * @param user The user to check
     * @return <code>true</code> if the given user has this role,
     * otherwise <code>false</code>
     */
    hasUser(user) {
        return !!this.users && this.users.has(user);
    }
    /**
     * Add the given user to this role
     * @param user The user to add
     */
    addUser(user) {
        if (user instanceof User_User) {
            if (!this.users) {
                this.users = new Set();
            }
            this.users.add(user);
        }
        else {
            throw new Error('Only user instances can be added to a role.');
        }
    }
    /**
     * Remove the given user from this role
     * @param user The user to remove
     */
    removeUser(user) {
        if (user instanceof User_User) {
            if (this.users) {
                this.users.delete(user);
            }
        }
        else {
            throw new Error('Only user instances can be removed from a role.');
        }
    }
}
Role_decorate([
    enumerable(false)
], Role_Role.prototype, "hasUser", null);
Role_decorate([
    enumerable(false)
], Role_Role.prototype, "addUser", null);
Role_decorate([
    enumerable(false)
], Role_Role.prototype, "removeUser", null);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUm9sZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlJvbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUM5QixPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBQ2xDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVoRCxNQUFNLE9BQU8sSUFBSyxTQUFRLE1BQU07SUFBaEM7O1FBQ0U7O1dBRUc7UUFDSSxVQUFLLEdBQTJCLElBQUksQ0FBQztRQUU1Qzs7V0FFRztRQUNJLFNBQUksR0FBa0IsSUFBSSxDQUFDO0lBNENwQyxDQUFDO0lBMUNDOzs7OztPQUtHO0lBRUgsT0FBTyxDQUFDLElBQWdCO1FBQ3RCLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUVEOzs7T0FHRztJQUVILE9BQU8sQ0FBQyxJQUFnQjtRQUN0QixJQUFJLElBQUksWUFBWSxJQUFJLEVBQUU7WUFDeEIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUU7Z0JBQ2YsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDO2FBQ3hCO1lBRUQsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDdEI7YUFBTTtZQUNMLE1BQU0sSUFBSSxLQUFLLENBQUMsNkNBQTZDLENBQUMsQ0FBQztTQUNoRTtJQUNILENBQUM7SUFFRDs7O09BR0c7SUFFSCxVQUFVLENBQUMsSUFBZ0I7UUFDekIsSUFBSSxJQUFJLFlBQVksSUFBSSxFQUFFO1lBQ3hCLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtnQkFDZCxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUN6QjtTQUNGO2FBQU07WUFDTCxNQUFNLElBQUksS0FBSyxDQUFDLGlEQUFpRCxDQUFDLENBQUM7U0FDcEU7SUFDSCxDQUFDO0NBQ0Y7QUFuQ0M7SUFEQyxVQUFVLENBQUMsS0FBSyxDQUFDO21DQUdqQjtBQU9EO0lBREMsVUFBVSxDQUFDLEtBQUssQ0FBQzttQ0FXakI7QUFPRDtJQURDLFVBQVUsQ0FBQyxLQUFLLENBQUM7c0NBU2pCIn0=
// CONCATENATED MODULE: ./lib/binding/index.ts













//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDdEMsT0FBTyxFQUFFLE9BQU8sRUFBbUIsTUFBTSxXQUFXLENBQUM7QUFDckQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNoRCxPQUFPLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBZ0IsTUFBTSxlQUFlLENBQUM7QUFDdkUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2hELE9BQU8sRUFBc0IsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDcEMsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUNsQyxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQzlCLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDOUIsT0FBTyxFQUNTLElBQUksR0FDbkIsTUFBTSxRQUFRLENBQUMifQ==

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "isNode", function() { return /* reexport */ isNode; });
__webpack_require__.d(__webpack_exports__, "atob", function() { return /* reexport */ atob; });
__webpack_require__.d(__webpack_exports__, "hmac", function() { return /* reexport */ hmac; });
__webpack_require__.d(__webpack_exports__, "Lockable", function() { return /* reexport */ Lockable; });
__webpack_require__.d(__webpack_exports__, "uuid", function() { return /* reexport */ uuid_uuid; });
__webpack_require__.d(__webpack_exports__, "deprecated", function() { return /* reexport */ deprecated; });
__webpack_require__.d(__webpack_exports__, "trailingSlashIt", function() { return /* reexport */ trailingSlashIt; });
__webpack_require__.d(__webpack_exports__, "openWindow", function() { return /* reexport */ openWindow; });

// CONCATENATED MODULE: ./lib/util/is-node-browser.ts
const isNode = false;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXMtbm9kZS1icm93c2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXMtbm9kZS1icm93c2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sQ0FBQyxNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMifQ==
// CONCATENATED MODULE: ./lib/util/atob-browser.ts
const atob = window.atob.bind(window);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXRvYi1icm93c2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXRvYi1icm93c2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sQ0FBQyxNQUFNLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyJ9
// CONCATENATED MODULE: ./lib/util/hmac-browser.ts
function hmac(message, key) {
    const encoder = new TextEncoder();
    return Promise.resolve(crypto.subtle.importKey('raw', // raw format of the key - should be Uint8Array
    encoder.encode(key), {
        name: 'HMAC',
        hash: { name: 'SHA-1' },
    }, false, // export = false
    ['sign', 'verify']))
        .then((cryptoKey) => crypto.subtle.sign('HMAC', cryptoKey, encoder.encode(message)))
        .then((signature) => {
        const byteArray = new Uint8Array(signature);
        return byteArray.reduce((token, x) => token + x.toString(16).padStart(2, '0'), '');
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG1hYy1icm93c2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaG1hYy1icm93c2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sVUFBVSxJQUFJLENBQUMsT0FBZSxFQUFFLEdBQVc7SUFDL0MsTUFBTSxPQUFPLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQztJQUVsQyxPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQ3BCLE1BQU0sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUNyQixLQUFLLEVBQUUsK0NBQStDO0lBQ3RELE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQ25CO1FBQ0UsSUFBSSxFQUFFLE1BQU07UUFDWixJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFO0tBQ3hCLEVBQ0QsS0FBSyxFQUFFLGlCQUFpQjtJQUN4QixDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FDbkIsQ0FDRjtTQUNFLElBQUksQ0FBQyxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLFNBQVMsRUFBRSxPQUFPLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7U0FDbkYsSUFBSSxDQUFDLENBQUMsU0FBUyxFQUFFLEVBQUU7UUFDbEIsTUFBTSxTQUFTLEdBQUcsSUFBSSxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDNUMsT0FBTyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNyRixDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMifQ==
// CONCATENATED MODULE: ./lib/util/Lockable.ts
/**
 * This base class provides an lock interface to execute exclusive operations
 */
class Lockable {
    constructor() {
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
    /**
     * Indicates if there is currently no exclusive operation executed
     * <code>true</code> If no exclusive lock is hold
     */
    get isReady() {
        return !this.isLocked;
    }
    /**
     * Waits on the previously requested operation and calls the doneCallback if the operation is fulfilled
     * @param doneCallback The callback which will be invoked when the previously
     * operations on this object is completed.
     * @param failCallback When the lock can't be released caused by a none
     * recoverable error
     * @return A promise which completes successfully, when the previously requested
     * operation completes
     */
    ready(doneCallback, failCallback) {
        return this.readyPromise.then(doneCallback, failCallback);
    }
    /**
     * Try to aquire an exclusive lock and executes the given callback.
     * @param callback The exclusive operation to execute
     * @param [critical=false] Indicates if the operation is critical. If the operation is critical and the
     * operation fails, then the lock will not be released
     * @return A promise
     * @throws If the lock can't be aquired
     * @protected
     */
    withLock(callback, critical = false) {
        if (this.isLocked) {
            throw new Error('Current operation has not been finished.');
        }
        try {
            this.isLocked = true;
            const result = callback().then((res) => {
                this.isLocked = false;
                return res;
            }, (e) => {
                if (!critical) {
                    this.isLocked = false;
                }
                throw e;
            });
            this.readyPromise = result.then(() => this, (e) => {
                if (!critical) {
                    return this;
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
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9ja2FibGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJMb2NrYWJsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7R0FFRztBQUNILE1BQU0sT0FBTyxRQUFRO0lBS25CO1FBQ0U7Ozs7V0FJRztRQUNILElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBRXRCOzs7O1dBSUc7UUFDSCxJQUFJLENBQUMsWUFBWSxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUVEOzs7T0FHRztJQUNILElBQUksT0FBTztRQUNULE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3hCLENBQUM7SUFFRDs7Ozs7Ozs7T0FRRztJQUNILEtBQUssQ0FBQyxZQUFrQyxFQUFFLFlBQW9DO1FBQzVFLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLFlBQVksQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFFRDs7Ozs7Ozs7T0FRRztJQUNILFFBQVEsQ0FBSSxRQUEwQixFQUFFLFFBQVEsR0FBRyxLQUFLO1FBQ3RELElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixNQUFNLElBQUksS0FBSyxDQUFDLDBDQUEwQyxDQUFDLENBQUM7U0FDN0Q7UUFFRCxJQUFJO1lBQ0YsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7WUFDckIsTUFBTSxNQUFNLEdBQUcsUUFBUSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7Z0JBQ3JDLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO2dCQUN0QixPQUFPLEdBQUcsQ0FBQztZQUNiLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFO2dCQUNQLElBQUksQ0FBQyxRQUFRLEVBQUU7b0JBQ2IsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7aUJBQ3ZCO2dCQUNELE1BQU0sQ0FBQyxDQUFDO1lBQ1YsQ0FBQyxDQUFDLENBQUM7WUFFSCxJQUFJLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUU7Z0JBQ2hELElBQUksQ0FBQyxRQUFRLEVBQUU7b0JBQ2IsT0FBTyxJQUFJLENBQUM7aUJBQ2I7Z0JBQ0QsTUFBTSxDQUFDLENBQUM7WUFDVixDQUFDLENBQUMsQ0FBQztZQUVILE9BQU8sTUFBTSxDQUFDO1NBQ2Y7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUNWLElBQUksUUFBUSxFQUFFO2dCQUNaLElBQUksQ0FBQyxZQUFZLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUN2QztpQkFBTTtnQkFDTCxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQzthQUN2QjtZQUNELE1BQU0sQ0FBQyxDQUFDO1NBQ1Q7SUFDSCxDQUFDO0NBQ0YifQ==
// CONCATENATED MODULE: ./node_modules/uuid/dist/esm-browser/rng.js
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
// CONCATENATED MODULE: ./node_modules/uuid/dist/esm-browser/regex.js
/* harmony default export */ var regex = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);
// CONCATENATED MODULE: ./node_modules/uuid/dist/esm-browser/validate.js


function validate(uuid) {
  return typeof uuid === 'string' && regex.test(uuid);
}

/* harmony default export */ var esm_browser_validate = (validate);
// CONCATENATED MODULE: ./node_modules/uuid/dist/esm-browser/stringify.js

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

var byteToHex = [];

for (var stringify_i = 0; stringify_i < 256; ++stringify_i) {
  byteToHex.push((stringify_i + 0x100).toString(16).substr(1));
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

  if (!esm_browser_validate(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

/* harmony default export */ var esm_browser_stringify = (stringify);
// CONCATENATED MODULE: ./node_modules/uuid/dist/esm-browser/v4.js



function v4(options, buf, offset) {
  options = options || {};
  var rnds = options.random || (options.rng || rng)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (var i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return esm_browser_stringify(rnds);
}

/* harmony default export */ var esm_browser_v4 = (v4);
// CONCATENATED MODULE: ./lib/util/uuid.ts

const uuid_uuid = esm_browser_v4;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXVpZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInV1aWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUUxQixNQUFNLElBQUksR0FBRyxFQUFVLENBQUM7QUFXeEIsT0FBTyxFQUFFLElBQUksRUFBRSxDQUFDIn0=
// CONCATENATED MODULE: ./lib/util/deprecated.ts
/* eslint-disable no-console */
const alreadyWarned = {};
function deprecated(alternativeSignature) {
    return function decorateProperty(target, name, descriptor = {
        writable: true,
        enumerable: false,
        configurable: true,
    }) {
        const type = typeof target === 'string' ? target : target.constructor.name;
        const deprecatedSignature = `${type}.${name}`;
        const logWarning = () => {
            if (!alreadyWarned[deprecatedSignature]) {
                alreadyWarned[deprecatedSignature] = true;
                console.warn(`Usage of ${deprecatedSignature} is deprecated, use ${alternativeSignature} instead.`);
            }
        };
        const deprecatedDescriptor = {
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
            let propertyValue = descriptor.value;
            deprecatedDescriptor.get = function get() {
                logWarning();
                return propertyValue;
            };
            if (descriptor.writable) {
                deprecatedDescriptor.set = function set(value) {
                    logWarning();
                    propertyValue = value;
                };
            }
        }
        return deprecatedDescriptor;
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVwcmVjYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRlcHJlY2F0ZWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsK0JBQStCO0FBQy9CLE1BQU0sYUFBYSxHQUFxQyxFQUFFLENBQUM7QUFDM0QsTUFBTSxVQUFVLFVBQVUsQ0FBQyxvQkFBNEI7SUFDckQsT0FBTyxTQUFTLGdCQUFnQixDQUM5QixNQUF1QixFQUN2QixJQUFZLEVBQ1osYUFBaUM7UUFDL0IsUUFBUSxFQUFFLElBQUk7UUFDZCxVQUFVLEVBQUUsS0FBSztRQUNqQixZQUFZLEVBQUUsSUFBSTtLQUNuQjtRQUVELE1BQU0sSUFBSSxHQUFHLE9BQU8sTUFBTSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQztRQUMzRSxNQUFNLG1CQUFtQixHQUFHLEdBQUcsSUFBSSxJQUFJLElBQUksRUFBRSxDQUFDO1FBQzlDLE1BQU0sVUFBVSxHQUFHLEdBQUcsRUFBRTtZQUN0QixJQUFJLENBQUMsYUFBYSxDQUFDLG1CQUFtQixDQUFDLEVBQUU7Z0JBQ3ZDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLElBQUksQ0FBQztnQkFDMUMsT0FBTyxDQUFDLElBQUksQ0FBQyxZQUFZLG1CQUFtQix1QkFBdUIsb0JBQW9CLFdBQVcsQ0FBQyxDQUFDO2FBQ3JHO1FBQ0gsQ0FBQyxDQUFDO1FBRUYsTUFBTSxvQkFBb0IsR0FBdUI7WUFDL0MsVUFBVSxFQUFFLFVBQVUsQ0FBQyxVQUFVO1lBQ2pDLFlBQVksRUFBRSxVQUFVLENBQUMsWUFBWTtTQUN0QyxDQUFDO1FBRUYsSUFBSSxVQUFVLENBQUMsR0FBRyxJQUFJLFVBQVUsQ0FBQyxHQUFHLEVBQUU7WUFDcEMsSUFBSSxVQUFVLENBQUMsR0FBRyxFQUFFO2dCQUNsQixvQkFBb0IsQ0FBQyxHQUFHLEdBQUcsU0FBUyxHQUFHO29CQUNyQyxVQUFVLEVBQUUsQ0FBQztvQkFDYixPQUFPLFVBQVUsQ0FBQyxHQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNwQyxDQUFDLENBQUM7YUFDSDtZQUVELElBQUksVUFBVSxDQUFDLEdBQUcsRUFBRTtnQkFDbEIsb0JBQW9CLENBQUMsR0FBRyxHQUFHLFNBQVMsR0FBRyxDQUFDLEtBQUs7b0JBQzNDLFVBQVUsRUFBRSxDQUFDO29CQUNiLE9BQU8sVUFBVSxDQUFDLEdBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUMzQyxDQUFDLENBQUM7YUFDSDtTQUNGO2FBQU07WUFDTCxJQUFJLGFBQWEsR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDO1lBRXJDLG9CQUFvQixDQUFDLEdBQUcsR0FBRyxTQUFTLEdBQUc7Z0JBQ3JDLFVBQVUsRUFBRSxDQUFDO2dCQUNiLE9BQU8sYUFBYSxDQUFDO1lBQ3ZCLENBQUMsQ0FBQztZQUVGLElBQUksVUFBVSxDQUFDLFFBQVEsRUFBRTtnQkFDdkIsb0JBQW9CLENBQUMsR0FBRyxHQUFHLFNBQVMsR0FBRyxDQUFDLEtBQUs7b0JBQzNDLFVBQVUsRUFBRSxDQUFDO29CQUNiLGFBQWEsR0FBRyxLQUFLLENBQUM7Z0JBQ3hCLENBQUMsQ0FBQzthQUNIO1NBQ0Y7UUFFRCxPQUFPLG9CQUFvQixDQUFDO0lBQzlCLENBQUMsQ0FBQztBQUNKLENBQUMifQ==
// CONCATENATED MODULE: ./lib/util/trailingSlashIt.ts
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
        return `${str}/`;
    }
    return str;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhaWxpbmdTbGFzaEl0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidHJhaWxpbmdTbGFzaEl0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0dBT0c7QUFDSCxNQUFNLFVBQVUsZUFBZSxDQUFDLEdBQVc7SUFDekMsSUFBSSxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEtBQUssR0FBRyxFQUFFO1FBQ3RDLE9BQU8sR0FBRyxHQUFHLEdBQUcsQ0FBQztLQUNsQjtJQUVELE9BQU8sR0FBRyxDQUFDO0FBQ2IsQ0FBQyJ9
// CONCATENATED MODULE: ./lib/util/openWindow.ts
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
const openWindow = (url, opt) => {
    const { title } = opt, options = __rest(opt, ["title"]);
    let { target } = opt;
    const str = Object.keys(options)
        .filter((key) => options[key] !== undefined)
        .map((key) => `${key}=${options[key]}`)
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3BlbldpbmRvdy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm9wZW5XaW5kb3cudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFhQSxNQUFNLENBQUMsTUFBTSxVQUFVLEdBQXNCLENBQUMsR0FBVyxFQUFFLEdBQ3NCLEVBQUUsRUFBRTtJQUNuRixNQUFNLEVBQUUsS0FBSyxLQUFpQixHQUFHLEVBQWYsT0FBTyxVQUFLLEdBQUcsRUFBM0IsU0FBcUIsQ0FBTSxDQUFDO0lBQ2xDLElBQUksRUFBRSxNQUFNLEVBQUUsR0FBRyxHQUFHLENBQUM7SUFFckIsTUFBTSxHQUFHLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7U0FDN0IsTUFBTSxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssU0FBUyxDQUFDO1NBQzNDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsR0FBRyxHQUFHLElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUM7U0FDdEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBRWIsSUFBSSxNQUFNLEtBQUssT0FBTyxFQUFFO1FBQ3RCLHNEQUFzRDtRQUN0RCxJQUFJLE9BQU8sUUFBUSxLQUFLLFdBQVcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLFFBQVEsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDMUgsTUFBTSxHQUFHLFNBQVMsQ0FBQztTQUNwQjtLQUNGO0lBRUQsSUFBSSxPQUFPLElBQUksS0FBSyxXQUFXLEVBQUUsRUFBRSw0Q0FBNEM7UUFDN0UsT0FBTyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsTUFBTSxJQUFJLEtBQUssQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsNENBQTRDO0tBQ3ZGO0lBRUQsT0FBTyxJQUFJLENBQUM7QUFDZCxDQUFDLENBQUMifQ==
// CONCATENATED MODULE: ./lib/util/index.ts








//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQ25DLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDOUIsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUM5QixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFLOUIsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUMxQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDcEQsT0FBTyxFQUFFLFVBQVUsRUFBcUIsTUFBTSxjQUFjLENBQUMifQ==

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "PersistentError", function() { return /* reexport */ PersistentError; });
__webpack_require__.d(__webpack_exports__, "CommunicationError", function() { return /* reexport */ CommunicationError_CommunicationError; });
__webpack_require__.d(__webpack_exports__, "IllegalEntityError", function() { return /* reexport */ IllegalEntityError_IllegalEntityError; });
__webpack_require__.d(__webpack_exports__, "EntityExistsError", function() { return /* reexport */ EntityExistsError_EntityExistsError; });
__webpack_require__.d(__webpack_exports__, "RollbackError", function() { return /* reexport */ RollbackError_RollbackError; });

// CONCATENATED MODULE: ./lib/error/PersistentError.ts
// eslint-disable-next-line @typescript-eslint/no-redeclare
const PersistentError = (() => {
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
                this.stack += `\nCaused By: ${cause.stack}`;
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
PersistentError.of = function of(error) {
    if (error instanceof PersistentError) {
        return error;
    }
    return new PersistentError(null, error);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGVyc2lzdGVudEVycm9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiUGVyc2lzdGVudEVycm9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9DQSwyREFBMkQ7QUFDM0QsTUFBTSxDQUFDLE1BQU0sZUFBZSxHQUFHLENBQUMsR0FBRyxFQUFFO0lBQ25DLFNBQVMsMEJBQTBCLENBQXdCLE9BQXNCLEVBQUUsS0FBYTtRQUM5RixJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsbUJBQW1CLENBQUMsRUFBRTtZQUNwRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUNqRDthQUFNO1lBQ0wsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLElBQUksS0FBSyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUM7U0FDbEM7UUFFRCxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsT0FBTyxJQUFJLDBDQUEwQyxDQUFDLENBQUM7UUFDdkUsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQztRQUVsQyxJQUFJLEtBQUssRUFBRTtZQUNULElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1lBQ25CLElBQUksS0FBSyxDQUFDLEtBQUssRUFBRTtnQkFDZixJQUFJLENBQUMsS0FBSyxJQUFJLGdCQUFnQixLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7YUFDN0M7U0FDRjtJQUNILENBQUM7SUFFRCx1R0FBdUc7SUFDdkcsZ0VBQWdFO0lBQ2hFLDBCQUEwQixDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUU7UUFDcEUsV0FBVyxFQUFFO1lBQ1gsS0FBSyxFQUFFLDBCQUEwQjtZQUNqQyxRQUFRLEVBQUUsSUFBSTtZQUNkLFVBQVUsRUFBRSxLQUFLO1lBQ2pCLFlBQVksRUFBRSxJQUFJO1NBQ25CO0tBQ0YsQ0FBQyxDQUFDO0lBRUgsT0FBTywwQkFBK0QsQ0FBQztBQUN6RSxDQUFDLENBQUMsRUFBRSxDQUFDO0FBRUwsZUFBZSxDQUFDLEVBQUUsR0FBRyxTQUFTLEVBQUUsQ0FBQyxLQUFZO0lBQzNDLElBQUksS0FBSyxZQUFZLGVBQWUsRUFBRTtRQUNwQyxPQUFPLEtBQUssQ0FBQztLQUNkO0lBRUQsT0FBTyxJQUFJLGVBQWUsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDMUMsQ0FBQyxDQUFDIn0=
// CONCATENATED MODULE: ./lib/error/CommunicationError.ts

class CommunicationError_CommunicationError extends PersistentError {
    /**
     * @param httpMessage The http message which was send
     * @param response The received entity headers and content
     */
    constructor(httpMessage, response) {
        const entity = response.entity || response.error || {};
        const state = (response.status === 0 ? 'Request' : 'Response');
        const message = entity.message
            || (httpMessage && `Handling the ${state} for ${httpMessage.request.method} ${httpMessage.request.path}`)
            || 'A communication error occurred.';
        super(message, entity);
        this.name = entity.className || 'CommunicationError';
        this.reason = entity.reason || 'Communication failed';
        this.status = response.status;
        if (entity.data) {
            this.data = entity.data;
        }
        let cause = entity;
        while (cause && cause.stackTrace) {
            this.stack += `\nServerside Caused by: ${cause.className} ${cause.message}`;
            const { stackTrace } = cause;
            for (let i = 0; i < stackTrace.length; i += 1) {
                const el = stackTrace[i];
                this.stack += `\n    at ${el.className}.${el.methodName}`;
                this.stack += ` (${el.fileName}:${el.lineNumber})`;
            }
            cause = cause.cause;
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29tbXVuaWNhdGlvbkVycm9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQ29tbXVuaWNhdGlvbkVycm9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUlwRCxNQUFNLE9BQU8sa0JBQW1CLFNBQVEsZUFBZTtJQWdCckQ7OztPQUdHO0lBQ0gsWUFBWSxXQUEyQixFQUFFLFFBQWtCO1FBQ3pELE1BQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxNQUFNLElBQUksUUFBUSxDQUFDLEtBQUssSUFBSSxFQUFFLENBQUM7UUFDdkQsTUFBTSxLQUFLLEdBQUcsQ0FBQyxRQUFRLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUMvRCxNQUFNLE9BQU8sR0FBRyxNQUFNLENBQUMsT0FBTztlQUN2QixDQUFDLFdBQVcsSUFBSSxnQkFBZ0IsS0FBSyxRQUFRLFdBQVcsQ0FBQyxPQUFPLENBQUMsTUFBTSxJQUFJLFdBQVcsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7ZUFDdEcsaUNBQWlDLENBQUM7UUFFekMsS0FBSyxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQztRQUV2QixJQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxTQUFTLElBQUksb0JBQW9CLENBQUM7UUFDckQsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxJQUFJLHNCQUFzQixDQUFDO1FBQ3RELElBQUksQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQztRQUU5QixJQUFJLE1BQU0sQ0FBQyxJQUFJLEVBQUU7WUFDZixJQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUM7U0FDekI7UUFFRCxJQUFJLEtBQUssR0FBRyxNQUFNLENBQUM7UUFDbkIsT0FBTyxLQUFLLElBQUksS0FBSyxDQUFDLFVBQVUsRUFBRTtZQUNoQyxJQUFJLENBQUMsS0FBSyxJQUFJLDJCQUEyQixLQUFLLENBQUMsU0FBUyxJQUFJLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUU1RSxNQUFNLEVBQUUsVUFBVSxFQUFFLEdBQUcsS0FBSyxDQUFDO1lBQzdCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxVQUFVLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQzdDLE1BQU0sRUFBRSxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFFekIsSUFBSSxDQUFDLEtBQUssSUFBSSxZQUFZLEVBQUUsQ0FBQyxTQUFTLElBQUksRUFBRSxDQUFDLFVBQVUsRUFBRSxDQUFDO2dCQUMxRCxJQUFJLENBQUMsS0FBSyxJQUFJLEtBQUssRUFBRSxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUMsVUFBVSxHQUFHLENBQUM7YUFDcEQ7WUFFRCxLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQztTQUNyQjtJQUNILENBQUM7Q0FDRiJ9
// CONCATENATED MODULE: ./lib/error/IllegalEntityError.ts

class IllegalEntityError_IllegalEntityError extends PersistentError {
    /**
     * @param entity - The entity which cause the error
     */
    constructor(entity) {
        super(`Entity ${entity} is not a valid entity`);
        this.entity = entity;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSWxsZWdhbEVudGl0eUVycm9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiSWxsZWdhbEVudGl0eUVycm9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUdwRCxNQUFNLE9BQU8sa0JBQW1CLFNBQVEsZUFBZTtJQU1yRDs7T0FFRztJQUNILFlBQVksTUFBYztRQUN4QixLQUFLLENBQUMsVUFBVSxNQUFNLHdCQUF3QixDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDdkIsQ0FBQztDQUNGIn0=
// CONCATENATED MODULE: ./lib/error/EntityExistsError.ts

class EntityExistsError_EntityExistsError extends PersistentError {
    /**
     * @param entity - The entity which cause the error
     */
    constructor(entity) {
        super(`The entity ${entity} is managed by a different db.`);
        this.entity = entity;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRW50aXR5RXhpc3RzRXJyb3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJFbnRpdHlFeGlzdHNFcnJvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFHcEQsTUFBTSxPQUFPLGlCQUFrQixTQUFRLGVBQWU7SUFNcEQ7O09BRUc7SUFDSCxZQUFZLE1BQWM7UUFDeEIsS0FBSyxDQUFDLGNBQWMsTUFBTSxnQ0FBZ0MsQ0FBQyxDQUFDO1FBQzVELElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQ3ZCLENBQUM7Q0FDRiJ9
// CONCATENATED MODULE: ./lib/error/RollbackError.ts

class RollbackError_RollbackError extends PersistentError {
    constructor(cause) {
        super('The transaction has been roll backed', cause);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUm9sbGJhY2tFcnJvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlJvbGxiYWNrRXJyb3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRXBELE1BQU0sT0FBTyxhQUFjLFNBQVEsZUFBZTtJQUNoRCxZQUFZLEtBQVk7UUFDdEIsS0FBSyxDQUFDLHNDQUFzQyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3ZELENBQUM7Q0FDRiJ9
// CONCATENATED MODULE: ./lib/error/index.ts





//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDcEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGlCQUFpQixDQUFDIn0=

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "Metamodel", function() { return /* reexport */ Metamodel_Metamodel; });
__webpack_require__.d(__webpack_exports__, "DbIndex", function() { return /* reexport */ DbIndex; });
__webpack_require__.d(__webpack_exports__, "Type", function() { return /* reexport */ Type; });
__webpack_require__.d(__webpack_exports__, "PersistenceType", function() { return /* reexport */ PersistenceType; });
__webpack_require__.d(__webpack_exports__, "SingularAttribute", function() { return /* reexport */ SingularAttribute_SingularAttribute; });
__webpack_require__.d(__webpack_exports__, "SetAttribute", function() { return /* reexport */ SetAttribute_SetAttribute; });
__webpack_require__.d(__webpack_exports__, "PluralAttribute", function() { return /* reexport */ PluralAttribute_PluralAttribute; });
__webpack_require__.d(__webpack_exports__, "CollectionType", function() { return /* reexport */ CollectionType; });
__webpack_require__.d(__webpack_exports__, "ModelBuilder", function() { return /* reexport */ ModelBuilder_ModelBuilder; });
__webpack_require__.d(__webpack_exports__, "MapAttribute", function() { return /* reexport */ MapAttribute_MapAttribute; });
__webpack_require__.d(__webpack_exports__, "ManagedType", function() { return /* reexport */ ManagedType_ManagedType; });
__webpack_require__.d(__webpack_exports__, "ListAttribute", function() { return /* reexport */ ListAttribute_ListAttribute; });
__webpack_require__.d(__webpack_exports__, "EntityType", function() { return /* reexport */ EntityType_EntityType; });
__webpack_require__.d(__webpack_exports__, "EmbeddableType", function() { return /* reexport */ EmbeddableType_EmbeddableType; });
__webpack_require__.d(__webpack_exports__, "CollectionAttribute", function() { return /* reexport */ CollectionAttribute_CollectionAttribute; });
__webpack_require__.d(__webpack_exports__, "BasicType", function() { return /* reexport */ BasicType_BasicType; });
__webpack_require__.d(__webpack_exports__, "Attribute", function() { return /* reexport */ Attribute_Attribute; });
__webpack_require__.d(__webpack_exports__, "PersistentAttributeType", function() { return /* reexport */ PersistentAttributeType; });

// CONCATENATED MODULE: ./lib/metamodel/Type.ts
var PersistenceType;
(function (PersistenceType) {
    PersistenceType[PersistenceType["BASIC"] = 0] = "BASIC";
    PersistenceType[PersistenceType["EMBEDDABLE"] = 1] = "EMBEDDABLE";
    PersistenceType[PersistenceType["ENTITY"] = 2] = "ENTITY";
    PersistenceType[PersistenceType["MAPPED_SUPERCLASS"] = 3] = "MAPPED_SUPERCLASS";
})(PersistenceType || (PersistenceType = {}));
class Type {
    /**
     * @param ref
     * @param typeConstructor
     */
    constructor(ref, typeConstructor) {
        if (ref.indexOf('/db/') !== 0) {
            throw new SyntaxError(`Type ref ${ref} is invalid.`);
        }
        this.ref = ref;
        this.name = ref.substring(4);
        this._typeConstructor = typeConstructor;
    }
    /**
     * The persistent type of this type
     */
    get persistenceType() {
        return -1;
    }
    /**
     * @type boolean
     * @readonly
     */
    get isBasic() {
        return this.persistenceType === PersistenceType.BASIC;
    }
    /**
     * @type boolean
     * @readonly
     */
    get isEmbeddable() {
        return this.persistenceType === PersistenceType.EMBEDDABLE;
    }
    /**
     * @type boolean
     * @readonly
     */
    get isEntity() {
        return this.persistenceType === PersistenceType.ENTITY;
    }
    /**
     * @type boolean
     * @readonly
     */
    get isMappedSuperclass() {
        return this.persistenceType === PersistenceType.MAPPED_SUPERCLASS;
    }
    /**
     * The type constructor of this type
     */
    get typeConstructor() {
        return this._typeConstructor;
    }
    /**
     * @param typeConstructor - sets the type constructor of this type if it is not already set
     */
    set typeConstructor(typeConstructor) {
        if (this._typeConstructor) {
            throw new Error('typeConstructor has already been set.');
        }
        this._typeConstructor = typeConstructor;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVHlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlR5cGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0EsTUFBTSxDQUFOLElBQVksZUFLWDtBQUxELFdBQVksZUFBZTtJQUN6Qix1REFBUyxDQUFBO0lBQ1QsaUVBQWMsQ0FBQTtJQUNkLHlEQUFVLENBQUE7SUFDViwrRUFBcUIsQ0FBQTtBQUN2QixDQUFDLEVBTFcsZUFBZSxLQUFmLGVBQWUsUUFLMUI7QUFFRCxNQUFNLE9BQWdCLElBQUk7SUFpRXhCOzs7T0FHRztJQUNILFlBQXNCLEdBQVcsRUFBRSxlQUEwQjtRQUMzRCxJQUFJLEdBQUcsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQzdCLE1BQU0sSUFBSSxXQUFXLENBQUMsWUFBWSxHQUFHLGNBQWMsQ0FBQyxDQUFDO1NBQ3REO1FBRUQsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDZixJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLGdCQUFnQixHQUFHLGVBQWUsQ0FBQztJQUMxQyxDQUFDO0lBcEVEOztPQUVHO0lBQ0gsSUFBSSxlQUFlO1FBQ2pCLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDWixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsSUFBSSxPQUFPO1FBQ1QsT0FBTyxJQUFJLENBQUMsZUFBZSxLQUFLLGVBQWUsQ0FBQyxLQUFLLENBQUM7SUFDeEQsQ0FBQztJQUVEOzs7T0FHRztJQUNILElBQUksWUFBWTtRQUNkLE9BQU8sSUFBSSxDQUFDLGVBQWUsS0FBSyxlQUFlLENBQUMsVUFBVSxDQUFDO0lBQzdELENBQUM7SUFFRDs7O09BR0c7SUFDSCxJQUFJLFFBQVE7UUFDVixPQUFPLElBQUksQ0FBQyxlQUFlLEtBQUssZUFBZSxDQUFDLE1BQU0sQ0FBQztJQUN6RCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsSUFBSSxrQkFBa0I7UUFDcEIsT0FBTyxJQUFJLENBQUMsZUFBZSxLQUFLLGVBQWUsQ0FBQyxpQkFBaUIsQ0FBQztJQUNwRSxDQUFDO0lBRUQ7O09BRUc7SUFDSCxJQUFJLGVBQWU7UUFDakIsT0FBTyxJQUFJLENBQUMsZ0JBQWtCLENBQUM7SUFDakMsQ0FBQztJQUVEOztPQUVHO0lBQ0gsSUFBSSxlQUFlLENBQUMsZUFBeUI7UUFDM0MsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7WUFDekIsTUFBTSxJQUFJLEtBQUssQ0FBQyx1Q0FBdUMsQ0FBQyxDQUFDO1NBQzFEO1FBQ0QsSUFBSSxDQUFDLGdCQUFnQixHQUFHLGVBQWUsQ0FBQztJQUMxQyxDQUFDO0NBNENGIn0=
// EXTERNAL MODULE: ./lib/binding/index.ts + 14 modules
var binding = __webpack_require__(3);

// EXTERNAL MODULE: ./lib/intersection/index.ts + 10 modules
var intersection = __webpack_require__(1);

// CONCATENATED MODULE: ./lib/metamodel/ManagedType.ts



class ManagedType_ManagedType extends Type {
    /**
     * @param ref or full class name
     * @param typeConstructor The type constructor of the managed lass
     */
    constructor(ref, typeConstructor) {
        super(ref.indexOf('/db/') !== 0 ? `/db/${ref}` : ref, typeConstructor);
        this.enhancer = null;
        this.declaredAttributes = [];
        this.schemaAddPermission = new intersection["Permission"]();
        this.schemaReplacePermission = new intersection["Permission"]();
        this.metadata = null;
        this.superType = null;
        this._validationCode = null;
    }
    /**
     * @type Function
     */
    get validationCode() {
        return this._validationCode;
    }
    /**
     * @param code
     */
    set validationCode(code) {
        this._validationCode = code;
    }
    /**
     * The Managed class
     */
    get typeConstructor() {
        if (!this._typeConstructor) {
            this.typeConstructor = this.createProxyClass();
        }
        return this._typeConstructor;
    }
    /**
     * The Managed class constructor
     * @param typeConstructor The managed class constructor
     */
    set typeConstructor(typeConstructor) {
        if (this._typeConstructor) {
            throw new Error('Type constructor has already been set.');
        }
        const isEntity = typeConstructor.prototype instanceof binding["Entity"];
        if (this.isEntity) {
            if (!isEntity) {
                throw new TypeError('Entity classes must extends the Entity class.');
            }
        }
        else if (!(typeConstructor.prototype instanceof binding["Managed"]) || isEntity) {
            throw new TypeError('Embeddable classes must extends the Managed class.');
        }
        this.enhancer.enhance(this, typeConstructor);
        this._typeConstructor = typeConstructor;
    }
    /**
     * Initialize this type
     * @param enhancer The class enhancer used to instantiate an instance of this managed class
     */
    init(enhancer) {
        this.enhancer = enhancer;
        if (this._typeConstructor && !binding["Enhancer"].getIdentifier(this._typeConstructor)) {
            binding["Enhancer"].setIdentifier(this._typeConstructor, this.ref);
        }
    }
    /**
     * Creates a new instance of the managed type, without invoking any constructors
     *
     * This method is used to create object instances which are loaded form the backend.
     *
     * @return The created instance
     */
    create() {
        const instance = Object.create(this.typeConstructor.prototype);
        binding["Managed"].init(instance);
        return instance;
    }
    /**
     * An iterator which returns all attributes declared by this type and inherited form all super types
     * @return
     */
    attributes() {
        let iter;
        let index = 0;
        const type = this;
        if (this.superType) {
            iter = this.superType.attributes();
        }
        return {
            [Symbol.iterator]() {
                return this;
            },
            next() {
                if (iter) {
                    const item = iter.next();
                    if (!item.done) {
                        return item;
                    }
                    iter = null;
                }
                if (index < type.declaredAttributes.length) {
                    const value = type.declaredAttributes[index];
                    index += 1;
                    return { value, done: false };
                }
                return { done: true, value: undefined };
            },
        };
    }
    /**
     * Adds an attribute to this type
     * @param attr The attribute to add
     * @param order Position of the attribute
     * @return
     */
    addAttribute(attr, order) {
        if (this.getAttribute(attr.name)) {
            throw new Error(`An attribute with the name ${attr.name} is already declared.`);
        }
        let initOrder;
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
    }
    /**
     * Removes an attribute from this type
     * @param name The Name of the attribute which will be removed
     * @return
     */
    removeAttribute(name) {
        const { length } = this.declaredAttributes;
        this.declaredAttributes = this.declaredAttributes.filter((val) => val.name !== name);
        if (length === this.declaredAttributes.length) {
            throw new Error(`An Attribute with the name ${name} is not declared.`);
        }
    }
    /**
     * @param name
     * @return
     */
    getAttribute(name) {
        let attr = this.getDeclaredAttribute(name);
        if (!attr && this.superType) {
            attr = this.superType.getAttribute(name);
        }
        return attr;
    }
    /**
     * @param val Name or order of the attribute
     * @return
     */
    getDeclaredAttribute(val) {
        return this.declaredAttributes.filter((attr) => attr.name === val || attr.order === val)[0] || null;
    }
    /**
     * @inheritDoc
     */
    fromJsonValue(state, jsonObject, currentObject, options) {
        if (!jsonObject || !currentObject) {
            return null;
        }
        const iter = this.attributes();
        for (let el = iter.next(); !el.done; el = iter.next()) {
            const attribute = el.value;
            if (!options.onlyMetadata || attribute.isMetadata) {
                attribute.setJsonValue(state, currentObject, jsonObject[attribute.name], options);
            }
        }
        return currentObject;
    }
    /**
     * @inheritDoc
     */
    toJsonValue(state, object, options) {
        if (!(object instanceof this.typeConstructor)) {
            return null;
        }
        const value = {};
        const iter = this.attributes();
        for (let el = iter.next(); !el.done; el = iter.next()) {
            const attribute = el.value;
            if (!options.excludeMetadata || !attribute.isMetadata) {
                value[attribute.name] = attribute.getJsonValue(state, object, options);
            }
        }
        return value;
    }
    /**
     * Converts ths type schema to json
     * @return
     */
    toJSON() {
        const fields = {};
        this.declaredAttributes.forEach((attribute) => {
            if (!attribute.isMetadata) {
                fields[attribute.name] = attribute;
            }
        });
        return Object.assign(Object.assign(Object.assign({ class: this.ref, fields, acl: {
                schemaAdd: this.schemaAddPermission.toJSON(),
                schemaReplace: this.schemaReplacePermission.toJSON(),
            } }, (this.superType && { superClass: this.superType.ref })), (this.isEmbeddable && { embedded: true })), (this.metadata && { metadata: this.metadata }));
    }
    /**
     * Returns iterator to get all referenced entities
     * @return
     */
    references() {
        const attributes = this.attributes();
        let attribute;
        let embeddedAttributes;
        return {
            [Symbol.iterator]() {
                return this;
            },
            next() {
                for (;;) {
                    if (embeddedAttributes) {
                        const item = embeddedAttributes.next();
                        if (!item.done) {
                            return { value: { path: [attribute.name].concat(item.value.path) } };
                        }
                        embeddedAttributes = null;
                    }
                    const item = attributes.next();
                    if (item.done) {
                        // currently TS requires a undefined value here https://github.com/microsoft/TypeScript/issues/38479
                        return { done: true, value: undefined };
                    }
                    attribute = item.value;
                    const type = attribute.isCollection
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
        };
    }
    /**
     * Retrieves whether this type has specific metadata
     *
     * @param key
     * @return
     */
    hasMetadata(key) {
        return !!this.metadata && !!this.metadata[key];
    }
    /**
     * Gets some metadata of this type
     *
     * @param key
     * @return
     */
    getMetadata(key) {
        if (!this.hasMetadata(key)) {
            return null;
        }
        return this.metadata[key];
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWFuYWdlZFR5cGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJNYW5hZ2VkVHlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBRTlCLE9BQU8sRUFDTCxRQUFRLEVBQUUsTUFBTSxFQUFFLE9BQU8sR0FDMUIsTUFBTSxZQUFZLENBQUM7QUFPcEIsT0FBTyxFQUFFLFVBQVUsRUFBZ0IsTUFBTSxpQkFBaUIsQ0FBQztBQUUzRCxNQUFNLE9BQWdCLFdBQStCLFNBQVEsSUFBTztJQTZEbEU7OztPQUdHO0lBQ0gsWUFBWSxHQUFXLEVBQUUsZUFBMEI7UUFDakQsS0FBSyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsZUFBZSxDQUFDLENBQUM7UUFqRWxFLGFBQVEsR0FBb0IsSUFBSSxDQUFDO1FBRWpDLHVCQUFrQixHQUFxQixFQUFFLENBQUM7UUFFMUMsd0JBQW1CLEdBQWUsSUFBSSxVQUFVLEVBQUUsQ0FBQztRQUVuRCw0QkFBdUIsR0FBZSxJQUFJLFVBQVUsRUFBRSxDQUFDO1FBRXZELGFBQVEsR0FBcUMsSUFBSSxDQUFDO1FBRWxELGNBQVMsR0FBMkIsSUFBSSxDQUFDO1FBRXpDLG9CQUFlLEdBQW9CLElBQUksQ0FBQztJQXNEL0MsQ0FBQztJQXBERDs7T0FFRztJQUNILElBQUksY0FBYztRQUNoQixPQUFPLElBQUksQ0FBQyxlQUFlLENBQUM7SUFDOUIsQ0FBQztJQUVEOztPQUVHO0lBQ0gsSUFBSSxjQUFjLENBQUMsSUFBcUI7UUFDdEMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7SUFDOUIsQ0FBQztJQUVEOztPQUVHO0lBQ0gsSUFBSSxlQUFlO1FBQ2pCLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7WUFDMUIs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
// EXTERNAL MODULE: ./lib/GeoPoint.ts
var GeoPoint = __webpack_require__(8);

// CONCATENATED MODULE: ./lib/metamodel/BasicType.ts



function dateToJson(value) {
    // remove trailing zeros
    return value instanceof Date ? value.toISOString().replace(/\.?0*Z/, 'Z') : null;
}
function jsonToDate(json, currentValue) {
    const date = typeof json === 'string' ? new Date(json) : null;
    if (currentValue && date) {
        // compare normalized date strings instead of plain strings
        return currentValue.toISOString() === date.toISOString() ? currentValue : date;
    }
    return date;
}
class BasicType_BasicType extends Type {
    /**
     * Creates a new instance of a native db type
     * @param ref The db ref of this type
     * @param typeConstructor The javascript class of this type
     * @param noResolving Indicates if this type is not the main type of the constructor
     */
    constructor(ref, typeConstructor, noResolving) {
        const id = ref.indexOf('/db/') === 0 ? ref : `/db/${ref}`;
        super(id, typeConstructor);
        this.noResolving = !!noResolving;
    }
    /**
     * @inheritDoc
     */
    get persistenceType() {
        return PersistenceType.BASIC;
    }
    /**
     * @inheritDoc
     */
    toJsonValue(state, currentValue) {
        return currentValue === null || currentValue === undefined ? null : this.typeConstructor(currentValue);
    }
    /**
     * @inheritDoc
     */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    fromJsonValue(state, json, currentValue) {
        return json === null || json === undefined ? null : json;
    }
    toString() {
        return `BasicType(${this.ref})`;
    }
}
BasicType_BasicType.Boolean = new class BooleanType extends BasicType_BasicType {
    fromJsonValue(state, json, currentValue) {
        return typeof json === 'string' ? json !== 'false' : super.fromJsonValue(state, json, currentValue);
    }
}('Boolean', Boolean);
BasicType_BasicType.Double = new class DoubleType extends BasicType_BasicType {
    fromJsonValue(state, json, currentValue) {
        return typeof json === 'string' ? parseFloat(json) : super.fromJsonValue(state, json, currentValue);
    }
}('Double', Number);
BasicType_BasicType.Integer = new class IntegerType extends BasicType_BasicType {
    fromJsonValue(state, json, currentValue) {
        return typeof json === 'string' ? parseInt(json, 10) : super.fromJsonValue(state, json, currentValue);
    }
}('Integer', Number);
BasicType_BasicType.String = new class StringType extends BasicType_BasicType {
    fromJsonValue(state, json, currentValue) {
        return super.fromJsonValue(state, json, currentValue);
    }
}('String', String);
BasicType_BasicType.DateTime = new class DateTimeType extends BasicType_BasicType {
    toJsonValue(state, value) {
        return dateToJson(value);
    }
    fromJsonValue(state, json, currentValue) {
        return jsonToDate(json, currentValue);
    }
}('DateTime', Date);
BasicType_BasicType.Date = new class DateType extends BasicType_BasicType {
    toJsonValue(state, value) {
        const json = dateToJson(value);
        return json ? json.substring(0, json.indexOf('T')) : null;
    }
    fromJsonValue(state, json, currentValue) {
        return jsonToDate(json, currentValue);
    }
}('Date', Date);
BasicType_BasicType.Time = new class TimeType extends BasicType_BasicType {
    toJsonValue(state, value) {
        const json = dateToJson(value);
        return json ? json.substring(json.indexOf('T') + 1) : null;
    }
    fromJsonValue(state, json, currentValue) {
        return typeof json === 'string' ? jsonToDate(`1970-01-01T${json}`, currentValue) : null;
    }
}('Time', Date);
BasicType_BasicType.File = new class FileType extends BasicType_BasicType {
    toJsonValue(state, value) {
        return value instanceof binding["File"] ? value.id : null;
    }
    fromJsonValue(state, json, currentValue) {
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
    }
}('File', binding["File"]);
BasicType_BasicType.GeoPoint = new class GeoPointType extends BasicType_BasicType {
    toJsonValue(state, value) {
        return value instanceof GeoPoint["a" /* GeoPoint */] ? value.toJSON() : null;
    }
    fromJsonValue(state, json) {
        return json ? new GeoPoint["a" /* GeoPoint */](json) : null;
    }
}('GeoPoint', GeoPoint["a" /* GeoPoint */]);
BasicType_BasicType.JsonArray = new class JsonArrayType extends BasicType_BasicType {
    toJsonValue(state, value) {
        return Array.isArray(value) ? value : null;
    }
    fromJsonValue(state, json) {
        return Array.isArray(json) ? json : null;
    }
}('JsonArray', Array);
BasicType_BasicType.JsonObject = new class JsonObjectType extends BasicType_BasicType {
    fromJsonValue(state, json, currentValue) {
        return super.fromJsonValue(state, json, currentValue);
    }
    toJsonValue(state, value) {
        if (value && value.constructor === Object) {
            return value;
        }
        return null;
    }
}('JsonObject', Object);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzaWNUeXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQmFzaWNUeXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDbEMsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUN2QyxPQUFPLEVBQUUsZUFBZSxFQUFFLElBQUksRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUcvQyxTQUFTLFVBQVUsQ0FBQyxLQUFrQjtJQUNwQyx3QkFBd0I7SUFDeEIsT0FBTyxLQUFLLFlBQVksSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0FBQ25GLENBQUM7QUFFRCxTQUFTLFVBQVUsQ0FBQyxJQUFVLEVBQUUsWUFBeUI7SUFDdkQsTUFBTSxJQUFJLEdBQUcsT0FBTyxJQUFJLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQzlELElBQUksWUFBWSxJQUFJLElBQUksRUFBRTtRQUN4QiwyREFBMkQ7UUFDM0QsT0FBTyxZQUFZLENBQUMsV0FBVyxFQUFFLEtBQUssSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztLQUNoRjtJQUVELE9BQU8sSUFBSSxDQUFDO0FBQ2QsQ0FBQztBQUVELE1BQU0sT0FBTyxTQUFhLFNBQVEsSUFBTztJQTZIdkM7Ozs7O09BS0c7SUFDSCxZQUFZLEdBQVcsRUFBRSxlQUF5QixFQUFFLFdBQXFCO1FBQ3ZFLE1BQU0sRUFBRSxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFFMUQsS0FBSyxDQUFDLEVBQUUsRUFBRSxlQUFlLENBQUMsQ0FBQztRQUUzQixJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxXQUFXLENBQUM7SUFDbkMsQ0FBQztJQW5CRDs7T0FFRztJQUNILElBQUksZUFBZTtRQUNqQixPQUFPLGVBQWUsQ0FBQyxLQUFLLENBQUM7SUFDL0IsQ0FBQztJQWdCRDs7T0FFRztJQUNILFdBQVcsQ0FBQyxLQUFtQixFQUFFLFlBQXNCO1FBQ3JELE9BQU8sWUFBWSxLQUFLLElBQUksSUFBSSxZQUFZLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFFLElBQUksQ0FBQyxlQUF1QixDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ2xILENBQUM7SUFFRDs7T0FFRztJQUNILDZEQUE2RDtJQUM3RCxhQUFhLENBQUMsS0FBbUIsRUFBRSxJQUFVLEVBQUUsWUFBc0I7UUFDbkUsT0FBTyxJQUFJLEtBQUssSUFBSSxJQUFJLElBQUksS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBVyxDQUFDO0lBQ2xFLENBQUM7SUFFRCxRQUFRO1FBQ04sT0FBTyxhQUFhLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQztJQUNsQyxDQUFDOztBQTNKc0IsaUJBQU8sR0FBRyxJQUFJLE1BQU0sV0FBWSxTQUFRLFNBQWtCO0lBQy9FLGFBQWEsQ0FBQyxLQUFtQixFQUFFLElBQVUsRUFBRSxZQUE0QjtRQUN6RSxPQUFPLE9BQU8sSUFBSSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLFlBQVksQ0FBQyxDQUFDO0lBQ3RHLENBQUM7Q0FDRixDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQztBQUVDLGdCQUFNLEdBQUcsSUFBSSxNQUFNLFVBQVcsU0FBUSxTQUFpQjtJQUM1RSxhQUFhLENBQUMsS0FBbUIsRUFBRSxJQUFVLEVBQUUsWUFBMkI7UUFDeEUsT0FBTyxPQUFPLElBQUksS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLFlBQVksQ0FBQyxDQUFDO0lBQ3RHLENBQUM7Q0FDRixDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQztBQUVHLGlCQUFPLEdBQUcsSUFBSSxNQUFNLFdBQVksU0FBUSxTQUFpQjtJQUM5RSxhQUFhLENBQUMsS0FBbUIsRUFBRSxJQUFVLEVBQUUsWUFBMkI7UUFDeEUsT0FBTyxPQUFPLElBQUksS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxZQUFZLENBQUMsQ0FBQztJQUN4RyxDQUFDO0NBQ0YsQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFFRSxnQkFBTSxHQUFHLElBQUksTUFBTSxVQUFXLFNBQVEsU0FBaUI7SUFDNUUsYUFBYSxDQUFDLEtBQW1CLEVBQUUsSUFBVSxFQUFFLFlBQTJCO1FBQ3hFLE9BQU8sS0FBSyxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLFlBQVksQ0FBQyxDQUFDO0lBQ3hELENBQUM7Q0FDRixDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQztBQUVHLGtCQUFRLEdBQUcsSUFBSSxNQUFNLFlBQWEsU0FBUSxTQUFlO0lBQzlFLFdBQVcsQ0FBQyxLQUFtQixFQUFFLEtBQWtCO1FBQ2pELE9BQU8sVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFFRCxhQUFhLENBQUMsS0FBbUIsRUFBRSxJQUFVLEVBQUUsWUFBeUI7UUFDdEUsT0FBTyxVQUFVLENBQUMsSUFBSSxFQUFFLFlBQVksQ0FBQyxDQUFDO0lBQ3hDLENBQUM7Q0FDRixDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUVHLGNBQUksR0FBRyxJQUFJLE1BQU0sUUFBUyxTQUFRLFNBQWU7SUFDdEUsV0FBVyxDQUFDLEtBQW1CLEVBQUUsS0FBa0I7UUFDakQsTUFBTSxJQUFJLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQy9CLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUM1RCxDQUFDO0lBRUQsYUFBYSxDQUFDLEtBQW1CLEVBQUUsSUFBVSxFQUFFLFlBQXlCO1FBQ3RFLE9BQU8sVUFBVSxDQUFDLElBQUksRUFBRSxZQUFZLENBQUMsQ0FBQztJQUN4QyxDQUFDO0NBQ0YsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFFTyxjQUFJLEdBQUcsSUFBSSxNQUFNLFFBQVMsU0FBUSxTQUFlO0lBQ3RFLFdBQVcsQ0FBQyxLQUFtQixFQUFFLEtBQWtCO1FBQ2pELE1BQU0sSUFBSSxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMvQixPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDN0QsQ0FBQztJQUVELGFBQWEsQ0FBQyxLQUFtQixFQUFFLElBQVUsRUFBRSxZQUF5QjtRQUN0RSxPQUFPLE9BQU8sSUFBSSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLGNBQWMsSUFBSSxFQUFFLEVBQUUsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUMxRixDQUFDO0NBQ0YsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFFTyxjQUFJLEdBQUcsSUFBSSxNQUFNLFFBQVMsU0FBUSxTQUFlO0lBQ3RFLFdBQVcsQ0FBQyxLQUFtQixFQUFFLEtBQWtCO1FBQ2pELE9BQU8sS0FBSyxZQUFZLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ2pELENBQUM7SUFFRCxhQUFhLENBQUMsS0FBbUIsRUFBRSxJQUFVLEVBQUUsWUFBeUI7UUFDdEUsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNULE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFFRCxJQUFJLFlBQVksSUFBSSxZQUFZLENBQUMsRUFBRSxLQUFLLElBQUksRUFBRTtZQUM1QyxPQUFPLFlBQVksQ0FBQztTQUNyQjtRQUVELElBQUksS0FBSyxDQUFDLEVBQUUsRUFBRTtZQUNaLE9BQU8sSUFBSSxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFjLENBQUMsQ0FBQztTQUMxQztRQUVELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztDQUNGLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO0FBRU8sa0JBQVEsR0FBRyxJQUFJLE1BQU0sWUFBYSxTQUFRLFNBQW1CO0lBQ2xGLFdBQVcsQ0FBQyxLQUFtQixFQUFFLEtBQXNCO1FBQ3JELE9BQU8sS0FBSyxZQUFZLFFBQVEsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDM0QsQ0FBQztJQUVELGFBQWEsQ0FBQyxLQUFtQixFQUFFLElBQVU7UUFDM0MsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksUUFBUSxDQUFDLElBQStDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ3JGLENBQUM7Q0FDRixDQUFDLFVBQVUsRUFBRSxRQUFRLENBQUMsQ0FBQztBQUVELG1CQUFTLEdBQUcsSUFBSSxNQUFNLGFBQWMsU0FBUSxTQUFvQjtJQUNyRixXQUFXLENBQUMsS0FBbUIsRUFBRSxLQUF3QjtRQUN2RCxPQUFPLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQzdDLENBQUM7SUFFRCxhQUFhLENBQUMsS0FBbUIsRUFBRSxJQUFVO1FBQzNDLE9BQU8sS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDM0MsQ0FBQztDQUNGLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBRUMsb0JBQVUsR0FBRyxJQUFJLE1BQU0sY0FBZSxTQUFRLFNBQWtCO0lBQ3JGLGFBQWEsQ0FBQyxLQUFtQixFQUFFLElBQVUsRUFBRSxZQUE0QjtRQUN6RSxPQUFPLEtBQUssQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxZQUFZLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBRUQsV0FBVyxDQUFDLEtBQW1CLEVBQUUsS0FBcUI7UUFDcEQsSUFBSSxLQUFLLElBQUksS0FBSyxDQUFDLFdBQVcsS0FBSyxNQUFNLEVBQUU7WUFDekMsT0FBTyxLQUFLLENBQUM7U0FDZDtRQUVELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztDQUNGLENBQUMsWUFBWSxFQUFFLE1BQWEsQ0FBQyxDQUFDIn0=
// CONCATENATED MODULE: ./lib/metamodel/Attribute.ts

var PersistentAttributeType;
(function (PersistentAttributeType) {
    PersistentAttributeType[PersistentAttributeType["BASIC"] = 0] = "BASIC";
    PersistentAttributeType[PersistentAttributeType["ELEMENT_COLLECTION"] = 1] = "ELEMENT_COLLECTION";
    PersistentAttributeType[PersistentAttributeType["EMBEDDED"] = 2] = "EMBEDDED";
    PersistentAttributeType[PersistentAttributeType["MANY_TO_MANY"] = 3] = "MANY_TO_MANY";
    PersistentAttributeType[PersistentAttributeType["MANY_TO_ONE"] = 4] = "MANY_TO_ONE";
    PersistentAttributeType[PersistentAttributeType["ONE_TO_MANY"] = 5] = "ONE_TO_MANY";
    PersistentAttributeType[PersistentAttributeType["ONE_TO_ONE"] = 6] = "ONE_TO_ONE";
})(PersistentAttributeType || (PersistentAttributeType = {}));
const ATTACHED_STATE = Symbol('AttachedState');
const ATTACHED_SIZE = Symbol('AttachedSize');
class Attribute_Attribute {
    /**
     * @param name The attribute name
     * @param isMetadata <code>true</code> if the attribute is an metadata attribute
     */
    constructor(name, isMetadata) {
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
    static attachState(obj, state, overwriteExistingValue = false) {
        if (state !== undefined && (overwriteExistingValue || obj[ATTACHED_STATE] === undefined)) {
            // ensure that this property is not visible on browsers which do not support Symbols
            Object.defineProperty(obj, ATTACHED_STATE, { value: state, configurable: true });
        }
        return obj[ATTACHED_STATE];
    }
    /**
     * Attach and returns the the given size on the collection, in a meaner that it isn't enumerable
     * @param {Set<*>|Map<*,*>} collection The collection where the size is attached on
     * @param {number} size The size which should be attached, the previously attached size will be
     * returned if omitted
     * @return {number} The actual or new attached size whenever a new size was provided or not
     */
    static attachSize(collection, size) {
        if (size !== undefined) {
            // ensure that this property is not visible on browsers which do not support Symbols
            Object.defineProperty(collection, ATTACHED_SIZE, { value: size, configurable: true });
        }
        return collection[ATTACHED_SIZE] || -1;
    }
    /**
     * Returns the persistent attribute type
     */
    get persistentAttributeType() {
        return -1;
    }
    /**
     * @type boolean
     * @readonly
     */
    get isAssociation() {
        return this.persistentAttributeType > PersistentAttributeType.EMBEDDED;
    }
    get isCollection() {
        return this.persistentAttributeType === PersistentAttributeType.ELEMENT_COLLECTION;
    }
    /**
     * @param declaringType The type that owns this attribute
     * @param order Position of the attribute
     * @return
     */
    init(declaringType, order) {
        if (this.declaringType) {
            throw new Error('The attribute is already initialized.');
        }
        this.order = order;
        this.accessor = new binding["Accessor"]();
        this.declaringType = declaringType;
    }
    /**
     * @param entity
     * @return
     */
    getValue(entity) {
        return this.accessor.getValue(entity, this);
    }
    /**
     * @param entity
     * @param value
     */
    setValue(entity, value) {
        this.accessor.setValue(entity, this, value);
    }
    /**
     * Retrieves whether this type has specific metadata
     *
     * @param key
     * @return
     */
    hasMetadata(key) {
        return !!this.metadata && key in this.metadata;
    }
    /**
     * Gets some metadata of this type
     *
     * @param key
     * @return
     */
    getMetadata(key) {
        if (!this.hasMetadata(key)) {
            return null;
        }
        return this.metadata[key] || null;
    }
    /**
     * Converts this attribute field to json
     * @return The attribute description as json
     */
    toJSON() {
        return Object.assign({ name: this.name, order: this.order }, (this.metadata && { metadata: this.metadata }));
    }
}
Attribute_Attribute.PersistentAttributeType = PersistentAttributeType;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXR0cmlidXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQXR0cmlidXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQVcsTUFBTSxZQUFZLENBQUM7QUFLL0MsTUFBTSxDQUFOLElBQVksdUJBUVg7QUFSRCxXQUFZLHVCQUF1QjtJQUNqQyx1RUFBUyxDQUFBO0lBQ1QsaUdBQXNCLENBQUE7SUFDdEIsNkVBQVksQ0FBQTtJQUNaLHFGQUFnQixDQUFBO0lBQ2hCLG1GQUFlLENBQUE7SUFDZixtRkFBZSxDQUFBO0lBQ2YsaUZBQWMsQ0FBQTtBQUNoQixDQUFDLEVBUlcsdUJBQXVCLEtBQXZCLHVCQUF1QixRQVFsQztBQUVELE1BQU0sY0FBYyxHQUFHLE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUMvQyxNQUFNLGFBQWEsR0FBRyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUM7QUFFN0MsTUFBTSxPQUFnQixTQUFTO0lBa0Y3Qjs7O09BR0c7SUFDSCxZQUFzQixJQUFZLEVBQUUsVUFBb0I7UUFqRmpELFNBQUksR0FBRyxLQUFLLENBQUM7UUFFYixjQUFTLEdBQUcsS0FBSyxDQUFDO1FBRWxCLFVBQUssR0FBRyxLQUFLLENBQUM7UUFJZCxVQUFLLEdBQWtCLElBQUksQ0FBQztRQUU1QixhQUFRLEdBQW9CLElBQUksQ0FBQztRQUVqQyxrQkFBYSxHQUE0QixJQUFJLENBQUM7UUFFOUMsYUFBUSxHQUFzQyxJQUFJLENBQUM7UUFvRXhELElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLFVBQVUsQ0FBQztRQUMvQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNuQixDQUFDO0lBbERELE1BQU0sQ0FBQyxXQUFXLENBQUksR0FBb0QsRUFBRSxLQUFTLEVBQ25GLHlCQUFrQyxLQUFLO1FBQ3ZDLElBQUksS0FBSyxLQUFLLFNBQVMsSUFBSSxDQUFDLHNCQUFzQixJQUFLLEdBQVcsQ0FBQyxjQUFj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
// CONCATENATED MODULE: ./lib/metamodel/SingularAttribute.ts


class SingularAttribute_SingularAttribute extends Attribute_Attribute {
    /**
     * @param name
     * @param type
     * @param isMetadata <code>true</code> if the attribute is an metadata attribute
     */
    constructor(name, type, isMetadata) {
        super(name, isMetadata);
        this.type = type;
    }
    /**
     * The constructor of the element type of this attribute
     */
    get typeConstructor() {
        return this.type.typeConstructor;
    }
    /**
     * @inheritDoc
     */
    get persistentAttributeType() {
        switch (this.type.persistenceType) {
            case PersistenceType.BASIC:
                return PersistentAttributeType.BASIC;
            case PersistenceType.EMBEDDABLE:
                return PersistentAttributeType.EMBEDDED;
            case PersistenceType.ENTITY:
                return PersistentAttributeType.ONE_TO_MANY;
            default:
                throw new Error('Unknown persistent attribute type.');
        }
    }
    /**
     * @inheritDoc
     */
    getJsonValue(state, object, options) {
        const persistedState = Attribute_Attribute.attachState(object, {});
        const value = this.getValue(object);
        const changed = persistedState[this.name] !== value;
        if (options.persisting) {
            persistedState[this.name] = value;
        }
        if (changed) {
            state.setDirty();
        }
        return this.type.toJsonValue(state, value, options);
    }
    /**
     * @inheritDoc
     */
    setJsonValue(state, object, jsonValue, options) {
        const value = this.type.fromJsonValue(state, jsonValue, this.getValue(object), options);
        if (options.persisting) {
            const persistedState = Attribute_Attribute.attachState(object, {});
            persistedState[this.name] = value;
        }
        this.setValue(object, value);
    }
    /**
     * @inheritDoc
     */
    toJSON() {
        return Object.assign({ type: this.type.ref }, super.toJSON());
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2luZ3VsYXJBdHRyaWJ1dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJTaW5ndWxhckF0dHJpYnV0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxlQUFlLEVBQVEsTUFBTSxRQUFRLENBQUM7QUFPL0MsTUFBTSxPQUFPLGlCQUFxQixTQUFRLFNBQVk7SUEwQnBEOzs7O09BSUc7SUFDSCxZQUFZLElBQVksRUFBRSxJQUFhLEVBQUUsVUFBb0I7UUFDM0QsS0FBSyxDQUFDLElBQUksRUFBRSxVQUFVLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNuQixDQUFDO0lBL0JEOztPQUVHO0lBQ0gsSUFBSSxlQUFlO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUM7SUFDbkMsQ0FBQztJQUVEOztPQUVHO0lBQ0gsSUFBSSx1QkFBdUI7UUFDekIsUUFBUSxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUNqQyxLQUFLLGVBQWUsQ0FBQyxLQUFLO2dCQUN4QixPQUFPLHVCQUF1QixDQUFDLEtBQUssQ0FBQztZQUN2QyxLQUFLLGVBQWUsQ0FBQyxVQUFVO2dCQUM3QixPQUFPLHVCQUF1QixDQUFDLFFBQVEsQ0FBQztZQUMxQyxLQUFLLGVBQWUsQ0FBQyxNQUFNO2dCQUN6QixPQUFPLHVCQUF1QixDQUFDLFdBQVcsQ0FBQztZQUM3QztnQkFDRSxNQUFNLElBQUksS0FBSyxDQUFDLG9DQUFvQyxDQUFDLENBQUM7U0FDekQ7SUFDSCxDQUFDO0lBWUQ7O09BRUc7SUFDSCxZQUFZLENBQUMsS0FBbUIsRUFBRSxNQUFlLEVBQy9DLE9BQXFGO1FBQ3JGLE1BQU0sY0FBYyxHQUEyQixTQUFTLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNqRixNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3BDLE1BQU0sT0FBTyxHQUFHLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssS0FBSyxDQUFDO1FBRXBELElBQUksT0FBTyxDQUFDLFVBQVUsRUFBRTtZQUN0QixjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQztTQUNuQztRQUVELElBQUksT0FBTyxFQUFFO1lBQ1gsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQ2xCO1FBRUQsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFFRDs7T0FFRztJQUNILFlBQVksQ0FBQyxLQUFtQixFQUFFLE1BQWUsRUFBRSxTQUFlLEVBQ2hFLE9BQXdEO1FBQ3hELE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxTQUFTLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUV4RixJQUFJLE9BQU8sQ0FBQyxVQUFVLEVBQUU7WUFDdEIsTUFBTSxjQUFjLEdBQTJCLFNBQVMsQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ2pGLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDO1NBQ25DO1FBRUQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUVEOztPQUVHO0lBQ0gsTUFBTTtRQUNKLHVCQUNFLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFDaEIsS0FBSyxDQUFDLE1BQU0sRUFBRSxFQUNqQjtJQUNKLENBQUM7Q0FDRiJ9
// CONCATENATED MODULE: ./lib/metamodel/PluralAttribute.ts

var CollectionType;
(function (CollectionType) {
    CollectionType[CollectionType["COLLECTION"] = 0] = "COLLECTION";
    CollectionType[CollectionType["LIST"] = 1] = "LIST";
    CollectionType[CollectionType["MAP"] = 2] = "MAP";
    CollectionType[CollectionType["SET"] = 3] = "SET";
})(CollectionType || (CollectionType = {}));
class PluralAttribute_PluralAttribute extends Attribute_Attribute {
    /**
     * @param name - The attribute name
     * @param typeConstructor - The collection constructor of the attribute
     * @param elementType - The type of the elements of the attribute collection
     */
    constructor(name, typeConstructor, elementType) {
        super(name);
        this.elementType = elementType;
        this.typeConstructor = typeConstructor;
    }
    /**
     * @inheritDoc
     */
    get persistentAttributeType() {
        return PersistentAttributeType.ELEMENT_COLLECTION;
    }
    /**
     * Retrieves a serialized string value of the given json which can be used as object keys
     * @param json The json of which the key should be retrieved
     * @return A serialized version of the json
     */
    keyValue(json) {
        if (json && typeof json === 'object' && 'id' in json) {
            return String(json.id);
        }
        return String(json);
    }
}
PluralAttribute_PluralAttribute.CollectionType = CollectionType;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGx1cmFsQXR0cmlidXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiUGx1cmFsQXR0cmlidXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE9BQU8sRUFBRSxTQUFTLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFakUsTUFBTSxDQUFOLElBQVksY0FLWDtBQUxELFdBQVksY0FBYztJQUN4QiwrREFBYyxDQUFBO0lBQ2QsbURBQVEsQ0FBQTtJQUNSLGlEQUFPLENBQUE7SUFDUCxpREFBTyxDQUFBO0FBQ1QsQ0FBQyxFQUxXLGNBQWMsS0FBZCxjQUFjLFFBS3pCO0FBRUQsTUFBTSxPQUFnQixlQUFzQixTQUFRLFNBQVk7SUFtQjlEOzs7O09BSUc7SUFDSCxZQUFzQixJQUFZLEVBQUUsZUFBeUIsRUFBRSxXQUFvQjtRQUNqRixLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDWixJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztRQUMvQixJQUFJLENBQUMsZUFBZSxHQUFHLGVBQWUsQ0FBQztJQUN6QyxDQUFDO0lBaEJEOztPQUVHO0lBQ0gsSUFBSSx1QkFBdUI7UUFDekIsT0FBTyx1QkFBdUIsQ0FBQyxrQkFBa0IsQ0FBQztJQUNwRCxDQUFDO0lBYUQ7Ozs7T0FJRztJQUNPLFFBQVEsQ0FBQyxJQUFVO1FBQzNCLElBQUksSUFBSSxJQUFJLE9BQU8sSUFBSSxLQUFLLFFBQVEsSUFBSSxJQUFJLElBQUksSUFBSSxFQUFFO1lBQ3BELE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUN4QjtRQUVELE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3RCLENBQUM7O0FBeENzQiw4QkFBYyxHQUFHLGNBQWMsQ0FBQyJ9
// CONCATENATED MODULE: ./lib/metamodel/EntityType.ts
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
// eslint-disable-next-line max-classes-per-file








class EntityType_EntityType extends ManagedType_ManagedType {
    /**
     * @param ref
     * @param superType
     * @param typeConstructor
     */
    constructor(ref, superType, typeConstructor) {
        super(ref, typeConstructor);
        this.declaredId = null;
        this.declaredVersion = null;
        this.declaredAcl = null;
        this.loadPermission = new intersection["Permission"]();
        this.updatePermission = new intersection["Permission"]();
        this.deletePermission = new intersection["Permission"]();
        this.queryPermission = new intersection["Permission"]();
        this.schemaSubclassPermission = new intersection["Permission"]();
        this.insertPermission = new intersection["Permission"]();
        this.superType = superType;
    }
    /**
     * @inheritDoc
     */
    get persistenceType() {
        return PersistenceType.ENTITY;
    }
    get id() {
        return this.declaredId || this.superType.id;
    }
    get version() {
        return this.declaredVersion || this.superType.version;
    }
    get acl() {
        return this.declaredAcl || this.superType.acl;
    }
    /**
     * @inheritDoc
     */
    createProxyClass() {
        let { typeConstructor } = this.superType;
        if (typeConstructor === Object) {
            switch (this.name) {
                case 'User':
                    typeConstructor = binding["User"];
                    break;
                case 'Role':
                    typeConstructor = binding["Role"];
                    break;
                default:
                    typeConstructor = binding["Entity"];
                    break;
            }
        }
        return this.enhancer.createProxy(typeConstructor);
    }
    /**
     * Gets all on this class referencing attributes
     *
     * @param db The instances will be found by this EntityManager
     * @param [options] Some options to pass
     * @param [options.classes] An array of class names to filter for, null for no filter
     * @return A map from every referencing class to a set of its referencing attribute names
     */
    getReferencing(db, options) {
        const opts = Object.assign({}, options);
        const { entities } = db.metamodel;
        const referencing = new Map();
        const names = Object.keys(entities);
        for (let i = 0, len = names.length; i < len; i += 1) {
            const name = names[i];
            // Skip class if not in class filter
            if (!opts.classes || opts.classes.indexOf(name) !== -1) {
                const entity = entities[name];
                const iter = entity.attributes();
                for (let el = iter.next(); !el.done; el = iter.next()) {
                    const attr = el.value;
                    // Filter only referencing singular and collection attributes
                    if ((attr instanceof SingularAttribute_SingularAttribute && attr.type === this)
                        || (attr instanceof PluralAttribute_PluralAttribute && attr.elementType === this)) {
                        const typeReferences = referencing.get(attr.declaringType) || new Set();
                        typeReferences.add(attr.name);
                        referencing.set(attr.declaringType, typeReferences);
                    }
                }
            }
        }
        return referencing;
    }
    /**
     * @inheritDoc
     */
    createObjectFactory(db) {
        switch (this.name) {
            case 'User':
                return binding["UserFactory"].create(this, db);
            case 'Device':
                return binding["DeviceFactory"].create(this, db);
            default:
                return binding["EntityFactory"].create(this, db);
        }
    }
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
    fromJsonValue(state, jsonObject, currentObject, options) {
        var _a, _b;
        // handle references
        if (typeof jsonObject === 'string') {
            return ((_a = state.db) === null || _a === void 0 ? void 0 : _a.getReference(jsonObject)) || null;
        }
        if (!jsonObject || typeof jsonObject !== 'object') {
            return null;
        }
        const json = jsonObject;
        const opt = Object.assign({ persisting: false, onlyMetadata: false }, options);
        let obj;
        if (currentObject) {
            const currentObjectState = intersection["Metadata"].get(currentObject);
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
        const objectState = intersection["Metadata"].get(obj);
        // deserialize our properties
        objectState.enable(false);
        super.fromJsonValue(objectState, json, obj, opt);
        objectState.enable(true);
        if (opt.persisting) {
            objectState.setPersistent();
        }
        else if (!opt.onlyMetadata) {
            objectState.setDirty();
        }
        return obj;
    }
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
    toJsonValue(state, object, options) {
        const { depth = 0, persisting = false } = options || {};
        const isInDepth = depth === true || depth > -1;
        // check if object is already loaded in state
        const objectState = object && intersection["Metadata"].get(object);
        if (isInDepth && objectState && objectState.isAvailable) {
            // serialize our properties
            objectState.enable(false);
            const json = super.toJsonValue(objectState, object, Object.assign(Object.assign({}, options), { persisting, depth: typeof depth === 'boolean' ? depth : depth - 1 }));
            objectState.enable(true);
            return json;
        }
        if (state.db && object instanceof this.typeConstructor) {
            object.attach(state.db);
            return object.id;
        }
        return null;
    }
    toString() {
        return `EntityType(${this.ref})`;
    }
    toJSON() {
        const _a = super.toJSON(), { acl } = _a, json = __rest(_a, ["acl"]);
        return Object.assign(Object.assign({}, json), { acl: Object.assign(Object.assign({}, acl), { schemaSubclass: this.schemaSubclassPermission.toJSON(), load: this.loadPermission.toJSON(), insert: this.insertPermission.toJSON(), update: this.updatePermission.toJSON(), delete: this.deletePermission.toJSON(), query: this.queryPermission.toJSON() }) });
    }
}
EntityType_EntityType.Object = class ObjectType extends EntityType_EntityType {
    static get ref() {
        return '/db/Object';
    }
    constructor() {
        super(EntityType_EntityType.Object.ref, null, Object);
        this.declaredId = new class extends SingularAttribute_SingularAttribute {
            constructor() {
                super('id', BasicType_BasicType.String, true);
            }
            getJsonValue(state) {
                return state.id || undefined;
            }
            setJsonValue(state, object, jsonValue) {
                if (!state.id) {
                    // eslint-disable-next-line no-param-reassign
                    state.id = jsonValue;
                }
            }
        }();
        this.declaredId.init(this, 0);
        this.declaredId.isId = true;
        this.declaredVersion = new class extends SingularAttribute_SingularAttribute {
            constructor() {
                super('version', BasicType_BasicType.Integer, true);
            }
            getJsonValue(state) {
                return state.version || undefined;
            }
            setJsonValue(state, object, jsonValue) {
                if (jsonValue) {
                    // eslint-disable-next-line no-param-reassign
                    state.version = jsonValue;
                }
            }
        }();
        this.declaredVersion.init(this, 1);
        this.declaredVersion.isVersion = true;
        this.declaredAcl = new class extends SingularAttribute_SingularAttribute {
            constructor() {
                super('acl', BasicType_BasicType.JsonObject, true);
            }
            getJsonValue(state, object, options) {
                const persisted = Attribute_Attribute.attachState(object, {});
                const persistedAcl = persisted.acl || {};
                const acl = state.acl.toJSON();
                const unchanged = Object.keys(acl).every((permission) => {
                    const oldPermission = (persistedAcl[permission] || {});
                    const newPermission = acl[permission];
                    const newKeys = Object.keys(newPermission);
                    const oldKeys = Object.keys(oldPermission);
                    return newKeys.length === oldKeys.length
                        && newKeys.every((ref) => oldPermission[ref] === newPermission[ref]);
                });
                if (!unchanged) {
                    state.setDirty();
                }
                if (options.persisting) {
                    persisted.acl = acl;
                }
                return acl;
            }
            setJsonValue(state, object, jsonValue, options) {
                const acl = (jsonValue || {});
                if (options.persisting) {
                    const persistedState = Attribute_Attribute.attachState(object, {});
                    persistedState.acl = acl;
                }
                state.acl.fromJSON(acl);
            }
        }();
        this.declaredAcl.init(this, 2);
        this.declaredAcl.isAcl = true;
        this.declaredAttributes = [this.declaredId, this.declaredVersion, this.declaredAcl];
    }
    createProxyClass() {
        return super.createProxyClass();
    }
    fromJsonValue(state, jsonObject, currentObject, options) {
        return super.fromJsonValue(state, jsonObject, currentObject, options);
    }
    createObjectFactory() {
        throw new Error("Objects can't be directly created and persisted");
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRW50aXR5VHlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkVudGl0eVR5cGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxnREFBZ0Q7QUFDaEQsT0FBTyxFQUNMLGFBQWEsRUFBRSxNQUFNLEVBQUUsYUFBYSxFQUFXLElBQUksRUFBRSxJQUFJLEVBQUUsV0FBVyxHQUN2RSxNQUFNLFlBQVksQ0FBQztBQUdwQixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzVDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDekMsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUN4QyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUd4RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDcEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUN4QyxPQUFPLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBZ0IsTUFBTSxpQkFBaUIsQ0FBQztBQUVyRSxNQUFNLE9BQU8sVUFBNkIsU0FBUSxXQUFjO0lBcUo5RDs7OztPQUlHO0lBQ0gsWUFBWSxHQUFXLEVBQUUsU0FBMEIsRUFBRSxlQUEwQjtRQUM3RSxLQUFLLENBQUMsR0FBRyxFQUFFLGVBQWUsQ0FBQyxDQUFDO1FBM0N2QixlQUFVLEdBQXFDLElBQUksQ0FBQztRQUVwRCxvQkFBZSxHQUFxQyxJQUFJLENBQUM7UUFFekQsZ0JBQVcsR0FBa0MsSUFBSSxDQUFDO1FBRWxELG1CQUFjLEdBQWUsSUFBSSxVQUFVLEVBQUUsQ0FBQztRQUU5QyxxQkFBZ0IsR0FBZSxJQUFJLFVBQVUsRUFBRSxDQUFDO1FBRWhELHFCQUFnQixHQUFlLElBQUksVUFBVSxFQUFFLENBQUM7UUFFaEQsb0JBQWUsR0FBZSxJQUFJLFVBQVUsRUFBRSxDQUFDO1FBRS9DLDZCQUF3QixHQUFl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
// CONCATENATED MODULE: ./lib/metamodel/EmbeddableType.ts



class EmbeddableType_EmbeddableType extends ManagedType_ManagedType {
    /**
     * @inheritDoc
     */
    get persistenceType() {
        return PersistenceType.EMBEDDABLE;
    }
    /**
     * @inheritDoc
     */
    createProxyClass() {
        return this.enhancer.createProxy(binding["Managed"]);
    }
    /**
     * @inheritDoc
     */
    createObjectFactory(db) {
        return binding["ManagedFactory"].create(this, db);
    }
    /**
     * @inheritDoc
     */
    fromJsonValue(state, jsonObject, currentObject, options) {
        let obj = currentObject;
        if (jsonObject) {
            if (!(obj instanceof this.typeConstructor)) {
                obj = this.create();
            }
        }
        return super.fromJsonValue(state, jsonObject, obj, options);
    }
    toString() {
        return `EmbeddableType(${this.ref})`;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRW1iZWRkYWJsZVR5cGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJFbWJlZGRhYmxlVHlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzVDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDekMsT0FBTyxFQUFFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFLckQsTUFBTSxPQUFPLGNBQWtDLFNBQVEsV0FBYztJQUNuRTs7T0FFRztJQUNILElBQUksZUFBZTtRQUNqQixPQUFPLGVBQWUsQ0FBQyxVQUFVLENBQUM7SUFDcEMsQ0FBQztJQUVEOztPQUVHO0lBQ0gsZ0JBQWdCO1FBQ2QsT0FBTyxJQUFJLENBQUMsUUFBUyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRUQ7O09BRUc7SUFDSCxtQkFBbUIsQ0FBQyxFQUFpQjtRQUNuQyxPQUFPLGNBQWMsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFRDs7T0FFRztJQUNILGFBQWEsQ0FBQyxLQUFtQixFQUFFLFVBQWdCLEVBQUUsYUFBdUIsRUFDMUUsT0FBd0Q7UUFDeEQsSUFBSSxHQUFHLEdBQUcsYUFBYSxDQUFDO1FBRXhCLElBQUksVUFBVSxFQUFFO1lBQ2QsSUFBSSxDQUFDLENBQUMsR0FBRyxZQUFZLElBQUksQ0FBQyxlQUFlLENBQUMsRUFBRTtnQkFDMUMsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQzthQUNyQjtTQUNGO1FBRUQsT0FBTyxLQUFLLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzlELENBQUM7SUFFRCxRQUFRO1FBQ04sT0FBTyxrQkFBa0IsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDO0lBQ3ZDLENBQUM7Q0FDRiJ9
// CONCATENATED MODULE: ./lib/metamodel/ListAttribute.ts


class ListAttribute_ListAttribute extends PluralAttribute_PluralAttribute {
    /**
     * Get the type id for this list type
     */
    static get ref() {
        return '/db/collection.List';
    }
    /**
     * @inheritDoc
     */
    get collectionType() {
        return CollectionType.LIST;
    }
    /**
     * @param name
     * @param elementType
     */
    constructor(name, elementType) {
        super(name, Array, elementType);
    }
    /**
     * @inheritDoc
     */
    getJsonValue(state, object, options) {
        const value = this.getValue(object);
        if (!(value instanceof this.typeConstructor)) {
            return null;
        }
        const len = value.length;
        const persisting = new Array(len);
        const attachedState = Attribute_Attribute.attachState(value);
        const persistedState = attachedState || [];
        let changed = !attachedState || attachedState.length !== len;
        const json = new Array(len);
        for (let i = 0; i < len; i += 1) {
            const el = value[i];
            json[i] = this.elementType.toJsonValue(state, el, options);
            persisting[i] = el;
            changed = changed || persistedState[i] !== el;
        }
        if (options.persisting) {
            Attribute_Attribute.attachState(value, persisting, true);
        }
        if (changed) {
            state.setDirty();
        }
        return json;
    }
    /**
     * @inheritDoc
     */
    setJsonValue(state, object, json, options) {
        let value = null;
        if (json) {
            value = this.getValue(object);
            const len = json.length;
            if (!(value instanceof this.typeConstructor)) {
                value = new this.typeConstructor(len); // eslint-disable-line new-cap
            }
            const persisting = new Array(len);
            const persistedState = Attribute_Attribute.attachState(value) || [];
            // clear additional items
            if (len < value.length) {
                value.splice(len, value.length - len);
            }
            for (let i = 0; i < len; i += 1) {
                const el = this.elementType.fromJsonValue(state, json[i], persistedState[i], options);
                value[i] = el;
                persisting[i] = el;
            }
            if (options.persisting) {
                Attribute_Attribute.attachState(value, persisting, true);
            }
        }
        this.setValue(object, value);
    }
    /**
     * @inheritDoc
     */
    toJSON() {
        return Object.assign({ type: `${ListAttribute_ListAttribute.ref}[${this.elementType.ref}]` }, super.toJSON());
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGlzdEF0dHJpYnV0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkxpc3RBdHRyaWJ1dGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGNBQWMsRUFBRSxlQUFlLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNwRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBTXhDLE1BQU0sT0FBTyxhQUFpQixTQUFRLGVBQW1DO0lBQ3ZFOztPQUVHO0lBQ0gsTUFBTSxLQUFLLEdBQUc7UUFDWixPQUFPLHFCQUFxQixDQUFDO0lBQy9CLENBQUM7SUFFRDs7T0FFRztJQUNILElBQUksY0FBYztRQUNoQixPQUFPLGNBQWMsQ0FBQyxJQUFJLENBQUM7SUFDN0IsQ0FBQztJQUVEOzs7T0FHRztJQUNILFlBQVksSUFBWSxFQUFFLFdBQW9CO1FBQzVDLEtBQUssQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFRDs7T0FFRztJQUNILFlBQVksQ0FBQyxLQUFtQixFQUFFLE1BQWUsRUFDL0MsT0FBcUY7UUFDckYsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUVwQyxJQUFJLENBQUMsQ0FBQyxLQUFLLFlBQVksSUFBSSxDQUFDLGVBQWUsQ0FBQyxFQUFFO1lBQzVDLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFFRCxNQUFNLEdBQUcsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDO1FBQ3pCLE1BQU0sVUFBVSxHQUFpQixJQUFJLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNoRCxNQUFNLGFBQWEsR0FBc0IsU0FBUyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN0RSxNQUFNLGNBQWMsR0FBRyxhQUFhLElBQUksRUFBRSxDQUFDO1FBRTNDLElBQUksT0FBTyxHQUFHLENBQUMsYUFBYSxJQUFJLGFBQWEsQ0FBQyxNQUFNLEtBQUssR0FBRyxDQUFDO1FBRTdELE1BQU0sSUFBSSxHQUFjLElBQUksS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUMvQixNQUFNLEVBQUUsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDcEIsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFDM0QsVUFBVSxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUVuQixPQUFPLEdBQUcsT0FBTyxJQUFJLGNBQWMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDL0M7UUFFRCxJQUFJLE9BQU8sQ0FBQyxVQUFVLEVBQUU7WUFDdEIsU0FBUyxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQ2hEO1FBRUQsSUFBSSxPQUFPLEVBQUU7WUFDWCxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDbEI7UUFFRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRDs7T0FFRztJQUNILFlBQVksQ0FBQyxLQUFtQixFQUFFLE1BQWUsRUFBRSxJQUFlLEVBQ2hFLE9BQXdEO1FBQ3hELElBQUksS0FBSyxHQUF3QixJQUFJLENBQUM7UUFFdEMsSUFBSSxJQUFJLEVBQUU7WUFDUixLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUU5QixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1lBQ3hCLElBQUksQ0FBQyxDQUFDLEtBQUssWUFBWSxJQUFJLENBQUMsZUFBZSxDQUFDLEVBQUU7Z0JBQzVDLEtBQUssR0FBRyxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyw4QkFBOEI7YUFDdEU7WUFFRCxNQUFNLFVBQVUsR0FBRyxJQUFJLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNsQyxNQUFNLGNBQWMsR0FBVSxTQUFTLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUVqRSx5QkFBeUI7WUFDekIsSUFBSSxHQUFHLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRTtnQkFDdEIsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUMsQ0FBQzthQUN2QztZQUVELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDL0IsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxjQUFjLENBQUMsQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUM7Z0JBQ3RGLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7Z0JBQ2QsVUFBVSxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQzthQUNwQjtZQUVELElBQUksT0FBTyxDQUFDLFVBQVUsRUFBRTtnQkFDdEIsU0FBUyxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO2FBQ2hEO1NBQ0Y7UUFFRCxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRUQ7O09BRUc7SUFDSCxNQUFNO1FBQ0osdUJBQ0UsSUFBSSxFQUFFLEdBQUcsYUFBYSxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsR0FBRyxJQUNsRCxLQUFLLENBQUMsTUFBTSxFQUFFLEVBQ2pCO0lBQ0osQ0FBQztDQUNGIn0=
// EXTERNAL MODULE: ./lib/error/index.ts + 5 modules
var error = __webpack_require__(5);

// CONCATENATED MODULE: ./lib/metamodel/MapAttribute.ts



class MapAttribute_MapAttribute extends PluralAttribute_PluralAttribute {
    /**
     * @param name
     * @param keyType
     * @param elementType
     */
    constructor(name, keyType, elementType) {
        super(name, Map, elementType);
        this.keyType = keyType;
    }
    /**
     * Get the type id for this map type
     * @return
     */
    static get ref() {
        return '/db/collection.Map';
    }
    /**
     * @inheritDoc
     */
    get collectionType() {
        return CollectionType.MAP;
    }
    /**
     * @inheritDoc
     */
    getJsonValue(state, object, options) {
        const value = this.getValue(object);
        if (!(value instanceof this.typeConstructor)) {
            return null;
        }
        const persisting = {};
        const persistedState = Attribute_Attribute.attachState(value) || {};
        let changed = Attribute_Attribute.attachSize(value) !== value.size;
        const json = {};
        const iter = value.entries();
        for (let el = iter.next(); !el.done; el = iter.next()) {
            const entry = el.value;
            if (entry[0] === null || entry[0] === undefined) {
                throw new error["PersistentError"]('Map keys can\'t be null nor undefined.');
            }
            const jsonKey = this.keyValue(this.keyType.toJsonValue(state, entry[0], options));
            json[jsonKey] = this.elementType.toJsonValue(state, entry[1], options);
            persisting[jsonKey] = [entry[0], entry[1]];
            changed = changed || (persistedState[jsonKey] || [])[1] !== entry[1];
        }
        if (options.persisting) {
            Attribute_Attribute.attachState(value, persisting, true);
            Attribute_Attribute.attachSize(value, value.size);
        }
        if (changed) {
            state.setDirty();
        }
        return json;
    }
    /**
     * @inheritDoc
     */
    setJsonValue(state, object, json, options) {
        let value = null;
        if (json) {
            value = this.getValue(object);
            if (!(value instanceof this.typeConstructor)) {
                // eslint-disable-next-line new-cap
                value = new this.typeConstructor();
            }
            const persisting = {};
            const persistedState = Attribute_Attribute.attachState(value) || {};
            value.clear();
            const jsonKeys = Object.keys(json);
            for (let i = 0, len = jsonKeys.length; i < len; i += 1) {
                const jsonKey = jsonKeys[i];
                const persistedEntry = persistedState[jsonKey] || [];
                // ensures that "false" keys will be converted to false, disallow null as keys
                const key = this.keyType.fromJsonValue(state, jsonKey, persistedEntry[0], options);
                const val = this.elementType.fromJsonValue(state, json[jsonKey], persistedEntry[1], options);
                persisting[jsonKey] = [key, val];
                value.set(key, val);
            }
            if (options.persisting) {
                Attribute_Attribute.attachState(value, persisting, true);
                Attribute_Attribute.attachSize(value, value.size);
            }
        }
        this.setValue(object, value);
    }
    /**
     * @inheritDoc
     */
    toJSON() {
        return Object.assign({ type: `${MapAttribute_MapAttribute.ref}[${this.keyType.ref},${this.elementType.ref}]` }, super.toJSON());
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWFwQXR0cmlidXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiTWFwQXR0cmlidXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQUUsZUFBZSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDcEUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUN4QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBTTNDLE1BQU0sT0FBTyxZQUFtQixTQUFRLGVBQTJDO0lBa0JqRjs7OztPQUlHO0lBQ0gsWUFBWSxJQUFZLEVBQUUsT0FBZ0IsRUFBRSxXQUFvQjtRQUM5RCxLQUFLLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxXQUFXLENBQUMsQ0FBQztRQUM5QixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztJQUN6QixDQUFDO0lBdkJEOzs7T0FHRztJQUNILE1BQU0sS0FBSyxHQUFHO1FBQ1osT0FBTyxvQkFBb0IsQ0FBQztJQUM5QixDQUFDO0lBRUQ7O09BRUc7SUFDSCxJQUFJLGNBQWM7UUFDaEIsT0FBTyxjQUFjLENBQUMsR0FBRyxDQUFDO0lBQzVCLENBQUM7SUFZRDs7T0FFRztJQUNILFlBQVksQ0FBQyxLQUFtQixFQUFFLE1BQWUsRUFDL0MsT0FBcUY7UUFDckYsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUVwQyxJQUFJLENBQUMsQ0FBQyxLQUFLLFlBQVksSUFBSSxDQUFDLGVBQWUsQ0FBQyxFQUFFO1lBQzVDLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFFRCxNQUFNLFVBQVUsR0FBNEMsRUFBRSxDQUFDO1FBQy9ELE1BQU0sY0FBYyxHQUE0QyxTQUFTLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNuRyxJQUFJLE9BQU8sR0FBRyxTQUFTLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxL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
// CONCATENATED MODULE: ./lib/metamodel/SetAttribute.ts


class SetAttribute_SetAttribute extends PluralAttribute_PluralAttribute {
    /**
     * Get the type id for this set type
     * @return
     */
    static get ref() {
        return '/db/collection.Set';
    }
    /**
     * @inheritDoc
     */
    get collectionType() {
        return CollectionType.SET;
    }
    /**
     * @param name The name of the attribute
     * @param elementType The element type of the collection
     */
    constructor(name, elementType) {
        super(name, Set, elementType);
    }
    /**
     * @inheritDoc
     */
    getJsonValue(state, object, options) {
        const value = this.getValue(object);
        if (!(value instanceof this.typeConstructor)) {
            return null;
        }
        const persisting = {};
        const persistedState = Attribute_Attribute.attachState(value) || {};
        let changed = Attribute_Attribute.attachSize(value) !== value.size;
        const json = [];
        const iter = value.values();
        for (let item = iter.next(); !item.done; item = iter.next()) {
            const el = item.value;
            const jsonValue = this.elementType.toJsonValue(state, el, options);
            json.push(jsonValue);
            const keyValue = this.keyValue(jsonValue);
            persisting[keyValue] = el;
            changed = changed || persistedState[keyValue] !== el;
        }
        if (options.persisting) {
            Attribute_Attribute.attachState(value, persisting, true);
            Attribute_Attribute.attachSize(value, value.size);
        }
        if (changed) {
            state.setDirty();
        }
        return json;
    }
    /**
     * @inheritDoc
     */
    setJsonValue(state, object, json, options) {
        let value = null;
        if (json) {
            value = this.getValue(object);
            if (!(value instanceof this.typeConstructor)) {
                value = new this.typeConstructor(); // eslint-disable-line new-cap
            }
            const persisting = {};
            const persistedState = Attribute_Attribute.attachState(value) || {};
            value.clear();
            for (let i = 0, len = json.length; i < len; i += 1) {
                const jsonValue = json[i];
                const keyValue = this.keyValue(jsonValue);
                const el = this.elementType.fromJsonValue(state, jsonValue, persistedState[keyValue], options);
                value.add(el);
                persisting[keyValue] = el;
            }
            if (options.persisting) {
                Attribute_Attribute.attachState(value, persisting, true);
                Attribute_Attribute.attachSize(value, value.size);
            }
        }
        this.setValue(object, value);
    }
    /**
     * @inheritDoc
     */
    toJSON() {
        return Object.assign({ type: `${SetAttribute_SetAttribute.ref}[${this.elementType.ref}]` }, super.toJSON());
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2V0QXR0cmlidXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiU2V0QXR0cmlidXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQUUsZUFBZSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDcEUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQU14QyxNQUFNLE9BQU8sWUFBZ0IsU0FBUSxlQUFpQztJQUNwRTs7O09BR0c7SUFDSCxNQUFNLEtBQUssR0FBRztRQUNaLE9BQU8sb0JBQW9CLENBQUM7SUFDOUIsQ0FBQztJQUVEOztPQUVHO0lBQ0gsSUFBSSxjQUFjO1FBQ2hCLE9BQU8sY0FBYyxDQUFDLEdBQUcsQ0FBQztJQUM1QixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsWUFBWSxJQUFZLEVBQUUsV0FBb0I7UUFDNUMsS0FBSyxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVEOztPQUVHO0lBQ0gsWUFBWSxDQUFDLEtBQW1CLEVBQUUsTUFBZSxFQUMvQyxPQUFxRjtRQUNyRixNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRXBDLElBQUksQ0FBQyxDQUFDLEtBQUssWUFBWSxJQUFJLENBQUMsZUFBZSxDQUFDLEVBQUU7WUFDNUMsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUVELE1BQU0sVUFBVSxHQUFnQyxFQUFFLENBQUM7UUFDbkQsTUFBTSxjQUFjLEdBQVksU0FBUyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDbkUsSUFBSSxPQUFPLEdBQUcsU0FBUyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxLQUFLLENBQUMsSUFBSSxDQUFDO1FBRXpELE1BQU0sSUFBSSxHQUFjLEVBQUUsQ0FBQztRQUMzQixNQUFNLElBQUksR0FBRyxLQUFLLENBQUMsTUFBTSxF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
// CONCATENATED MODULE: ./lib/metamodel/ModelBuilder.ts









class ModelBuilder_ModelBuilder {
    constructor() {
        this.models = {};
        this.modelDescriptors = null;
        Object.keys(BasicType_BasicType).forEach((typeName) => {
            const basicType = BasicType_BasicType[typeName];
            if (basicType instanceof BasicType_BasicType) {
                this.models[basicType.ref] = basicType;
            }
        });
    }
    /**
     * @param ref
     * @return
     */
    getModel(ref) {
        if (ref in this.models) {
            return this.models[ref];
        }
        const model = this.buildModel(ref);
        this.models[ref] = model;
        return model;
    }
    /**
     * @param modelDescriptors
     * @return
     */
    buildModels(modelDescriptors) {
        this.modelDescriptors = {};
        modelDescriptors.forEach((modelDescriptor) => {
            this.modelDescriptors[modelDescriptor.class] = modelDescriptor;
        });
        Object.keys(this.modelDescriptors).forEach((ref) => {
            try {
                const model = this.getModel(ref);
                this.buildAttributes(model);
            }
            catch (e) {
                throw new error["PersistentError"](`Can't create model for entity class ${ref}`, e);
            }
        });
        // ensure at least an object entity
        this.getModel(EntityType_EntityType.Object.ref);
        return this.models;
    }
    /**
     * @param ref
     * @return
     */
    buildModel(ref) {
        const modelDescriptor = this.modelDescriptors[ref];
        let type;
        if (ref === EntityType_EntityType.Object.ref) {
            type = new EntityType_EntityType.Object();
        }
        else if (modelDescriptor) {
            if (modelDescriptor.embedded) {
                type = new EmbeddableType_EmbeddableType(ref);
            }
            else {
                const superTypeIdentifier = modelDescriptor.superClass || EntityType_EntityType.Object.ref;
                type = new EntityType_EntityType(ref, this.getModel(superTypeIdentifier));
            }
        }
        else {
            throw new TypeError(`No model available for ${ref}`);
        }
        type.metadata = {};
        if (modelDescriptor) {
            type.metadata = modelDescriptor.metadata || {};
            const permissions = modelDescriptor.acl || {};
            Object.keys(permissions).forEach((permission) => {
                const permissionProperty = `${permission}Permission`;
                type[permissionProperty].fromJSON(permissions[permission]);
            });
        }
        return type;
    }
    /**
     * @param model
     * @return
     */
    buildAttributes(model) {
        const modelDescriptor = this.modelDescriptors[model.ref];
        const fields = modelDescriptor.fields;
        Object.keys(fields).forEach((name) => {
            const field = fields[name];
            if (!model.getAttribute(name)) { // skip predefined attributes
                model.addAttribute(this.buildAttribute(field), field.order);
            }
        });
        if (typeof modelDescriptor.validationCode === 'string') {
            // eslint-disable-next-line no-param-reassign
            model.validationCode = intersection["Validator"].compile(model, modelDescriptor.validationCode);
        }
    }
    /**
     * @param field The field metadata
     * @param field.name The name of zhe field
     * @param field.type The type reference of the field
     * @param field.order The order number of the field
     * @param field.metadata Additional metadata of the field
     * @return
     */
    buildAttribute(field) {
        // TODO: remove readonly if createdAt and updatedAt becomes real metadata fields in the schema
        const isMetadata = field.flags && (field.flags.indexOf('METADATA') !== -1 || field.flags.indexOf('READONLY') !== -1);
        const { name } = field;
        const ref = field.type;
        if (ref.indexOf('/db/collection.') !== 0) {
            const singularAttribute = new SingularAttribute_SingularAttribute(name, this.getModel(ref), isMetadata);
            singularAttribute.metadata = field.metadata;
            return singularAttribute;
        }
        const collectionType = ref.substring(0, ref.indexOf('['));
        const elementType = ref.substring(ref.indexOf('[') + 1, ref.indexOf(']')).trim();
        switch (collectionType) {
            case ListAttribute_ListAttribute.ref:
                return new ListAttribute_ListAttribute(name, this.getModel(elementType));
            case SetAttribute_SetAttribute.ref:
                return new SetAttribute_SetAttribute(name, this.getModel(elementType));
            case MapAttribute_MapAttribute.ref: {
                const keyType = elementType.substring(0, elementType.indexOf(',')).trim();
                const valueType = elementType.substring(elementType.indexOf(',') + 1).trim();
                return new MapAttribute_MapAttribute(name, this.getModel(keyType), this.getModel(valueType));
            }
            default:
                throw new TypeError(`No collection available for ${ref}`);
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTW9kZWxCdWlsZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiTW9kZWxCdWlsZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDeEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUMxQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDbEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM5QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDOUMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUszQyxPQUFPLEVBQWMsU0FBUyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFeEQsTUFBTSxPQUFPLFlBQVk7SUFLdkI7UUFKUSxXQUFNLEdBQWtDLEVBQUUsQ0FBQztRQUUzQyxxQkFBZ0IsR0FBdUMsSUFBSSxDQUFDO1FBR2pFLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFnQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFO1lBQzFFLE1BQU0sU0FBUyxHQUFHLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN0QyxJQUFJLFNBQVMsWUFBWSxTQUFTLEVBQUU7Z0JBQ2xDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxHQUFHLFNBQVMsQ0FBQzthQUN4QztRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVEOzs7T0FHRztJQUNILFFBQVEsQ0FBQyxHQUFXO1FBQ2xCLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDdEIsT0FB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
// CONCATENATED MODULE: ./lib/metamodel/DbIndex.ts
/**
 * Creates a new index instance which is needed to create an
 * database index.
 */
class DbIndex {
    /**
     * @param keys The name of the field which will be used
     * for the index,
     * an object of an field and index type combination or
     * an array of objects to create an compound index
     * @param unique Indicates if the index will be unique
     */
    constructor(keys, unique) {
        if (typeof keys === 'string') {
            const key = {};
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
    static fromJSON(json) {
        return new DbIndex(json.keys, json.unique);
    }
    /**
     * Indicates if this index is for the given field or includes it in a compound index
     * @param name The name of the field to check for
     * @return <code>true</code> if the index contains this field
     */
    hasKey(name) {
        for (let i = 0; i < this.keys.length; i += 1) {
            if (this.keys[i][name]) {
                return true;
            }
        }
        return false;
    }
    /**
     * Indicates if this index is a compound index of multiple attributes
     * @type boolean
     * @readonly
     */
    get isCompound() {
        return this.keys.length > 1;
    }
    /**
     * Indicates if this index is an unique index
     * @type boolean
     * @readonly
     */
    get isUnique() {
        return this.unique;
    }
    /**
     * Returns a JSON representation of the Index object
     *
     * @return A Json of this Index object
     */
    toJSON() {
        return {
            unique: this.unique,
            keys: this.keys,
        };
    }
}
DbIndex.ASC = 'asc';
DbIndex.DESC = 'desc';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGJJbmRleC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkRiSW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7OztHQUdHO0FBQ0gsTUFBTSxPQUFPLE9BQU87SUF1QmxCOzs7Ozs7T0FNRztJQUNILFlBQVksSUFBcUQsRUFBRSxNQUFnQjtRQUNqRixJQUFJLE9BQU8sSUFBSSxLQUFLLFFBQVEsRUFBRTtZQUM1QixNQUFNLEdBQUcsR0FBNEIsRUFBRSxDQUFDO1lBQ3hDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDO1lBQ3hCLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNuQjthQUFNLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUM5QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztTQUNsQjthQUFNLElBQUksSUFBSSxFQUFFO1lBQ2YsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3BCO2FBQU07WUFDTCxNQUFNLElBQUksS0FBSyxDQUFDLHdEQUF3RCxDQUFDLENBQUM7U0FDM0U7UUFFRCxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sS0FBSyxJQUFJLENBQUM7SUFDaEMsQ0FBQztJQTlCRDs7OztPQUlHO0lBQ0ksTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFhO1FBQ2xDLE9BQU8sSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLElBQWlCLEVBQUUsSUFBSSxDQUFDLE1BQWlCLENBQUMsQ0FBQztJQUNyRSxDQUFDO0lBeUJEOzs7O09BSUc7SUFDSCxNQUFNLENBQUMsSUFBWTtRQUNqQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUM1QyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ3RCLE9BQU8sSUFBSSxDQUFDO2FBQ2I7U0FDRjtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxJQUFJLFVBQVU7UUFDWixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILElBQUksUUFBUTtRQUNWLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNyQixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILE1BQU07UUFDSixPQUFPO1lBQ0wsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1lBQ25CLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtTQUNoQixDQUFDO0lBQ0osQ0FBQzs7QUF2RnNCLFdBQUcsR0FBRyxLQUFLLENBQUM7QUFFWixZQUFJLEdBQUcsTUFBTSxDQUFDIn0=
// EXTERNAL MODULE: ./lib/util/index.ts + 13 modules
var util = __webpack_require__(4);

// EXTERNAL MODULE: ./lib/connector/index.ts + 5 modules
var connector = __webpack_require__(0);

// EXTERNAL MODULE: ./lib/message.ts
var message = __webpack_require__(2);

// CONCATENATED MODULE: ./lib/metamodel/Metamodel.ts








class Metamodel_Metamodel extends util["Lockable"] {
    /**
     * Constructs a new metamodel instance which represents the complete schema of one baqend app
     * @param entityManagerFactory
     */
    constructor(entityManagerFactory) {
        super();
        /**
         * Defines if the Metamodel has been finalized
         */
        this.isInitialized = false;
        this.entities = {};
        this.embeddables = {};
        this.baseTypes = {};
        this.enhancer = new binding["Enhancer"]();
        this.entityManagerFactory = entityManagerFactory;
    }
    /**
     * Prepare the Metamodel for custom schema creation
     * @param jsonMetamodel initialize the metamodel with the serialized json schema
     * @return
     */
    init(jsonMetamodel) {
        if (this.isInitialized) {
            throw new Error('Metamodel is already initialized.');
        }
        this.fromJSON(jsonMetamodel || []);
        this.isInitialized = true;
    }
    /**
     * @param arg
     * @return
     */
    getRef(arg) {
        let ref;
        if (typeof arg === 'string') {
            ref = arg;
            if (ref.indexOf('/db/') !== 0) {
                ref = `/db/${arg}`;
            }
        }
        else {
            ref = binding["Enhancer"].getIdentifier(arg);
        }
        return ref;
    }
    /**
     * Return the metamodel entity type representing the entity.
     *
     * @param typeConstructor - the type of the represented entity
     * @return the metamodel entity type or null if the class is not a managed entity
     */
    entity(typeConstructor) {
        const ref = this.getRef(typeConstructor);
        return ref ? this.entities[ref] : null;
    }
    /**
     * Return the metamodel basic type representing the native class.
     * @param typeConstructor - the type of the represented native class
     * @return the metamodel basic type
     */
    baseType(typeConstructor) {
        let ref = null;
        if (typeof typeConstructor === 'string') {
            ref = this.getRef(typeConstructor);
        }
        else {
            const baseTypesNames = Object.keys(this.baseTypes);
            for (let i = 0, len = baseTypesNames.length; i < len; i += 1) {
                const name = baseTypesNames[i];
                const type = this.baseTypes[name];
                if (!type.noResolving && type.typeConstructor === typeConstructor) {
                    ref = name;
                    break;
                }
            }
        }
        return ref ? this.baseTypes[ref] : null;
    }
    /**
     * Return the metamodel embeddable type representing the embeddable class.
     * @param typeConstructor - the type of the represented embeddable class
     * @return the metamodel embeddable type or null if the class is not a managed embeddable
     */
    embeddable(typeConstructor) {
        const ref = this.getRef(typeConstructor);
        return ref ? this.embeddables[ref] : null;
    }
    /**
     * Return the metamodel managed type representing the entity, mapped superclass, or embeddable class.
     *
     * @param typeConstructor - the type of the represented managed class
     * @return the metamodel managed type
     */
    managedType(typeConstructor) {
        return this.entity(typeConstructor) || this.embeddable(typeConstructor);
    }
    /**
     * @param type
     * @return the added type
     */
    addType(type) {
        let types = {};
        if (type.isBasic) {
            types = this.baseTypes;
        }
        else if (type.isEmbeddable) {
            type.init(this.enhancer);
            types = this.embeddables;
        }
        else if (type.isEntity) {
            const entityType = type;
            entityType.init(this.enhancer);
            types = this.entities;
            if (entityType.superType === null && entityType.ref !== EntityType_EntityType.Object.ref) {
                entityType.superType = this.entity(EntityType_EntityType.Object.ref);
            }
        }
        if (types[type.ref]) {
            throw new Error(`The type ${type.ref} is already declared.`);
        }
        types[type.ref] = type;
        return type;
    }
    /**
     * Load all schema data from the server
     * @return
     */
    load() {
        if (!this.isInitialized) {
            return this.withLock(() => {
                const msg = new message["GetAllSchemas"]();
                return this.entityManagerFactory.send(msg).then((response) => {
                    this.init(response.entity);
                    return this;
                });
            });
        }
        throw new Error('Metamodel is already initialized.');
    }
    /**
     * Store all local schema data on the server, or the provided one
     *
     * Note: The schema must be initialized, by init or load
     *
     * @param managedType The specific type to persist, if omitted the complete schema
     * will be updated
     * @return
     */
    save(managedType) {
        return this.sendUpdate(managedType || this.toJSON()).then(() => this);
    }
    /**
     * Update the metamodel with the schema
     *
     * The provided data object will be forwarded to the UpdateAllSchemas resource.
     * The underlying schema of this Metamodel object will be replaced by the result.
     *
     * @param data The JSON which will be send to the UpdateAllSchemas resource.
     * @return
     */
    update(data) {
        return this.sendUpdate(data).then((response) => {
            this.fromJSON(response.entity);
            return this;
        });
    }
    sendUpdate(data) {
        return this.withLock(() => {
            let msg;
            if (data instanceof ManagedType_ManagedType) {
                msg = new message["UpdateSchema"](data.name, data.toJSON());
            }
            else {
                msg = new message["UpdateAllSchemas"](data);
            }
            return this.entityManagerFactory.send(msg);
        });
    }
    /**
     * Get the current schema types as json
     * @return the json data
     */
    toJSON() {
        if (!this.isInitialized) {
            throw new Error('Metamodel is not initialized.');
        }
        return [].concat(Object.keys(this.entities).map((ref) => this.entities[ref].toJSON()), Object.keys(this.embeddables).map((ref) => this.embeddables[ref].toJSON()));
    }
    /**
     * Replace the current schema by the provided one in json
     * @param json The json schema data
     * @return
     */
    fromJSON(json) {
        const builder = new ModelBuilder_ModelBuilder();
        const models = builder.buildModels(json);
        this.baseTypes = {};
        this.embeddables = {};
        this.entities = {};
        Object.keys(models).forEach((ref) => this.addType(models[ref]));
    }
    /**
     * Creates an index
     *
     * @param bucket Name of the Bucket
     * @param index Will be applied for the given bucket
     * @return
     */
    createIndex(bucket, index) {
        const msg = new message["CreateDropIndex"](bucket, Object.assign(Object.assign({}, index.toJSON()), { drop: false }));
        return this.entityManagerFactory.send(msg);
    }
    /**
     * Drops an index
     *
     * @param bucket Name of the Bucket
     * @param index Will be dropped for the given bucket
     * @return
     */
    dropIndex(bucket, index) {
        const msg = new message["CreateDropIndex"](bucket, Object.assign(Object.assign({}, index.toJSON()), { drop: true }));
        return this.entityManagerFactory.send(msg);
    }
    /**
     * Drops all indexes
     *
     * @param bucket Indexes will be dropped for the given bucket
     * @return
     */
    dropAllIndexes(bucket) {
        const msg = new message["DropAllIndexes"](bucket);
        return this.entityManagerFactory.send(msg);
    }
    /**
     * Loads all indexes for the given bucket
     *
     * @param bucket Current indexes will be loaded for the given bucket
     * @return
     */
    getIndexes(bucket) {
        const msg = new message["ListIndexes"](bucket);
        return this.entityManagerFactory.send(msg)
            .then((response) => response.entity.map((el) => new DbIndex(el.keys, el.unique)))
            .catch((e) => {
            if (e.status === connector["StatusCode"].BUCKET_NOT_FOUND || e.status === connector["StatusCode"].OBJECT_NOT_FOUND) {
                return null;
            }
            throw e;
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWV0YW1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiTWV0YW1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDNUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUMxQyxPQUFPLEVBQUUsUUFBUSxFQUFXLE1BQU0sWUFBWSxDQUFDO0FBQy9DLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM5QyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQ3BDLE9BQU8sRUFDNEIsUUFBUSxHQUMxQyxNQUFNLFNBQVMsQ0FBQztBQUNqQixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQzFDLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxDQUFDO0FBTXRDLE1BQU0sT0FBTyxTQUFVLFNBQVEsUUFBUTtJQWdCckM7OztPQUdHO0lBQ0gsWUFBWSxvQkFBMEM7UUFDcEQsS0FBSyxFQUFFLENBQUM7UUFwQlY7O1dBRUc7UUFDSSxrQkFBYSxHQUFZLEtBQUssQ0FBQztRQUkvQixhQUFRLEdBQXdDLEVBQUUsQ0FBQztRQUVuRCxnQkFBVyxHQUE0QyxFQUFFLENBQUM7UUFFMUQsY0FBUyxHQUF1QyxFQUFFLENBQUM7UUFFbkQsYUFBUSxHQUFhLElBQUksUUFBUSxFQUFFLENBQUM7UUFRekMsSUFBSSxDQUFDLG9CQUFvQixHQUFHLG9CQUFvQixDQUFDO0lBQ25ELENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsSUFBSSxDQUFDLGFBQXVCO1FBQzFCLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUN0QixNQUFNLElBQUksS0FBSyxDQUFDLG1DQUFtQyxDQUFDLENBQUM7U0FDdEQ7UUFFRCxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUNuQyxJQUFJLENBQUMsYUFB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
// CONCATENATED MODULE: ./lib/metamodel/CollectionAttribute.ts

class CollectionAttribute_CollectionAttribute extends PluralAttribute_PluralAttribute {
    /**
     * @inheritDoc
     */
    get collectionType() {
        return CollectionType.COLLECTION;
    }
    /**
     * @param name - the name of the attribute
     * @param typeConstructor - The collection constructor of the attribute
     * @param elementType - The element type of the collection
     */
    constructor(name, typeConstructor, elementType) {
        super(name, typeConstructor, elementType);
        super(name, typeConstructor, elementType);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29sbGVjdGlvbkF0dHJpYnV0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkNvbGxlY3Rpb25BdHRyaWJ1dGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGNBQWMsRUFBRSxlQUFlLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUlwRSxNQUFNLE9BQWdCLG1CQUEwQixTQUFRLGVBQXFCO0lBQzNFOztPQUVHO0lBQ0gsSUFBSSxjQUFjO1FBQ2hCLE9BQU8sY0FBYyxDQUFDLFVBQVUsQ0FBQztJQUNuQyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILFlBQXNCLElBQVksRUFBRSxlQUF5QixFQUFFLFdBQW9CO1FBQ2pGLEtBQUssQ0FBQyxJQUFJLEVBQUUsZUFBZSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBQzFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsZUFBZSxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQzVDLENBQUM7Q0FDRiJ9
// CONCATENATED MODULE: ./lib/metamodel/index.ts















//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3hDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDcEMsT0FBTyxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDL0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDeEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxlQUFlLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDcEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM5QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzVDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNoRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQzFDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3hDLE9BQU8sRUFBRSxTQUFTLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxhQUFhLENBQUMifQ==

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Acl; });
/* harmony import */ var _intersection_Permission__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16);

/**
 * Creates a new Acl object, with an empty rule set for an object
 */
class Acl {
    constructor() {
        /**
         * The read permission of the object
         */
        this.read = new _intersection_Permission__WEBPACK_IMPORTED_MODULE_0__[/* Permission */ "a"]();
        /**
         * The write permission of the object
         */
        this.write = new _intersection_Permission__WEBPACK_IMPORTED_MODULE_0__[/* Permission */ "a"]();
    }
    /**
     * Removes all acl rules, read and write access is public afterwards
     *
     * @return
     * */
    clear() {
        this.read.clear();
        this.write.clear();
    }
    /**
     * Copies permissions from another ACL
     *
     * @param acl The ACL to copy from
     * @return
     */
    copy(acl) {
        this.read.copy(acl.read);
        this.write.copy(acl.write);
        return this;
    }
    /**
     * Gets whenever all users and roles have the permission to read the object
     *
     * @return <code>true</code> If public access is allowed
     */
    isPublicReadAllowed() {
        return this.read.isPublicAllowed();
    }
    /**
     * Sets whenever all users and roles should have the permission to read the object
     *
     * Note: All other allow read rules will be removed.
     *
     * @return
     * */
    setPublicReadAllowed() {
        return this.read.setPublicAllowed();
    }
    /**
     * Checks whenever the user or role is explicit allowed to read the object
     *
     * @param userOrRole The user or role to check for
     * @return <code>true</code> if read access is explicitly allowed for the given user or role
     */
    isReadAllowed(userOrRole) {
        return this.read.isAllowed(userOrRole);
    }
    /**
     * Checks whenever the user or role is explicit denied to read the object
     *
     * @param userOrRole The user or role to check for
     * @return <code>true</code> if read access is explicitly denied for the given user or role
     */
    isReadDenied(userOrRole) {
        return this.read.isDenied(userOrRole);
    }
    /**
     * Allows the given user or rule to read the object
     *
     * @param userOrRole The user or role to allow
     * @return this acl object
     */
    allowReadAccess(...userOrRole) {
        this.read.allowAccess(...userOrRole);
        return this;
    }
    /**
     * Denies the given user or rule to read the object
     *
     * @param userOrRole The user or role to deny
     * @return this acl object
     */
    denyReadAccess(...userOrRole) {
        this.read.denyAccess(...userOrRole);
        return this;
    }
    /**
     * Deletes any read allow/deny rule for the given user or role
     *
     * @param userOrRole The user or role
     * @return this acl object
     */
    deleteReadAccess(...userOrRole) {
        this.read.deleteAccess(...userOrRole);
        return this;
    }
    /**
     * Gets whenever all users and roles have the permission to write the object
     *
     * @return <code>true</code> If public access is allowed
     */
    isPublicWriteAllowed() {
        return this.write.isPublicAllowed();
    }
    /**
     * Sets whenever all users and roles should have the permission to write the object
     *
     * Note: All other allow write rules will be removed.
     *
     * @return
     * */
    setPublicWriteAllowed() {
        return this.write.setPublicAllowed();
    }
    /**
     * Checks whenever the user or role is explicit allowed to write the object
     *
     * @param userOrRole The user or role to check for
     * @return <code>true</code> if write access is explicitly allowed for the given user or role
     */
    isWriteAllowed(userOrRole) {
        return this.write.isAllowed(userOrRole);
    }
    /**
     * Checks whenever the user or role is explicit denied to write the object
     *
     * @param userOrRole The user or role to check for
     * @return <code>true</code> if write access is explicitly denied for the given user or role
     */
    isWriteDenied(userOrRole) {
        return this.write.isDenied(userOrRole);
    }
    /**
     * Allows the given user or rule to write the object
     *
     * @param userOrRole The user or role to allow
     * @return this acl object
     */
    allowWriteAccess(...userOrRole) {
        this.write.allowAccess(...userOrRole);
        return this;
    }
    /**
     * Denies the given user or rule to write the object
     *
     * @param userOrRole The user or role to deny
     * @return this acl object
     */
    denyWriteAccess(...userOrRole) {
        this.write.denyAccess(...userOrRole);
        return this;
    }
    /**
     * Deletes any write allow/deny rule for the given user or role
     *
     * @param userOrRole The user or role
     * @return this acl object
     */
    deleteWriteAccess(...userOrRole) {
        this.write.deleteAccess(...userOrRole);
        return this;
    }
    /**
     * A JSON representation of the set of rules
     *
     * @return
     */
    toJSON() {
        return {
            read: this.read.toJSON(),
            write: this.write.toJSON(),
        };
    }
    /**
     * Sets the acl rules form JSON
     *
     * @param json The json encoded acls
     * @return
     */
    fromJSON(json) {
        this.read.fromJSON(json.read || {});
        this.write.fromJSON(json.write || {});
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWNsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQWNsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUl2RDs7R0FFRztBQUNILE1BQU0sT0FBTyxHQUFHO0lBQWhCO1FBQ0U7O1dBRUc7UUFDTSxTQUFJLEdBQWUsSUFBSSxVQUFVLEVBQUUsQ0FBQztRQUU3Qzs7V0FFRztRQUNNLFVBQUssR0FBZSxJQUFJLFVBQVUsRUFBRSxDQUFDO0lBZ01oRCxDQUFDO0lBOUxDOzs7O1NBSUs7SUFDTCxLQUFLO1FBQ0gsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILElBQUksQ0FBQyxHQUFRO1FBQ1gsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMzQixPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsbUJBQW1CO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUNyQyxDQUFDO0lBRUQ7Ozs7OztTQU1LO0lBQ0wsb0JBQW9CO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQ3RDLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILGFBQWEsQ0FBQyxVQUF5QjtRQUNyQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILFlBQVksQ0FBQyxVQUF5QjtRQUNwQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILGVBQWUsQ0FBQyxHQUFHLFVBQTJCO1FBQzVDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsVUFBVSxDQUFDLENBQUM7UUFDckMsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCxjQUFjLENBQUMsR0FBRyxVQUEyQjtRQUMzQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxDQUFDO1FBQ3BDLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsZ0JBQWdCLENBQUMsR0FBRyxVQUEyQjtRQUM3QyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLFVBQVUsQ0FBQyxDQUFDO1FBQ3RDLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxvQkFBb0I7UUFDbEIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ3RDLENBQUM7SUFFRDs7Ozs7O1NBTUs7SUFDTCxxQkFBcUI7UUFDbkIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDdkMsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsY0FBYyxDQUFDLFVBQXlCO1FBQ3RDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsYUFBYSxDQUFDLFVBQXlCO1FBQ3JDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsZ0JBQWdCLENBQUMsR0FBRyxVQUEyQjtRQUM3QyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxDQUFDO1FBQ3RDLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsZUFBZSxDQUFDLEdBQUcsVUFBMkI7UUFDNUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsR0FBRyxVQUFVLENBQUMsQ0FBQztRQUNyQyxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILGlCQUFpQixDQUFDLEdBQUcsVUFBMkI7UUFDOUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsR0FBRyxVQUFVLENBQUMsQ0FBQztRQUN2QyxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsTUFBTTtRQUNKLE9BQU87WUFDTCxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDeEIsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFO1NBQzNCLENBQUM7SUFDSixDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCxRQUFRLENBQUMsSUFBYTtRQUNwQixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBZSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFnQixJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQ25ELENBQUM7Q0FDRiJ9

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeoPoint; });
/**
 * Creates a new GeoPoint instance
 * From latitude and longitude
 * From a json object
 * Or an tuple of latitude and longitude
 */
class GeoPoint {
    /**
     * @param latitude A coordinate pair (latitude first),
     * a GeoPoint like object or the GeoPoint's latitude
     * @param longitude The GeoPoint's longitude
     */
    constructor(latitude, longitude) {
        let lat;
        let lng;
        if (typeof latitude === 'string') {
            const index = latitude.indexOf(';');
            lat = Number(latitude.substring(0, index));
            lng = Number(latitude.substring(index + 1));
        }
        else if (Array.isArray(latitude)) {
            [lat, lng] = latitude;
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
            throw new Error(`Latitude ${this.latitude} is not in bound of -90 <= latitude <= 90`);
        }
        if (this.longitude < -180 || this.longitude > 180) {
            throw new Error(`Longitude ${this.longitude} is not in bound of -180 <= longitude <= 180`);
        }
    }
    /**
     * Creates a GeoPoint with the user's current location, if available.
     * @return A promise that will be resolved with a GeoPoint
     */
    static current() {
        return new Promise(((resolve, reject) => {
            if (!navigator) {
                reject(new Error('This seems not to be a browser context.'));
            }
            if (!navigator.geolocation) {
                reject(new Error('This browser does not support geolocation.'));
            }
            navigator.geolocation.getCurrentPosition((location) => {
                resolve(new GeoPoint(location.coords.latitude, location.coords.longitude));
            }, (error) => {
                reject(error);
            });
        }));
    }
    /**
     * Returns the distance from this GeoPoint to another in kilometers.
     * @param point another GeoPoint
     * @return The distance in kilometers
     *
     * @see GeoPoint#radiansTo
     */
    kilometersTo(point) {
        return Number((GeoPoint.EARTH_RADIUS_IN_KILOMETERS * this.radiansTo(point)).toFixed(3));
    }
    /**
     * Returns the distance from this GeoPoint to another in miles.
     * @param point another GeoPoint
     * @return The distance in miles
     *
     * @see GeoPoint#radiansTo
     */
    milesTo(point) {
        return Number((GeoPoint.EARTH_RADIUS_IN_MILES * this.radiansTo(point)).toFixed(3));
    }
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
    radiansTo(point) {
        const from = this;
        const to = point;
        const rad1 = from.latitude * GeoPoint.DEG_TO_RAD;
        const rad2 = to.latitude * GeoPoint.DEG_TO_RAD;
        const dLng = (to.longitude - from.longitude) * GeoPoint.DEG_TO_RAD;
        return Math.acos((Math.sin(rad1) * Math.sin(rad2)) + (Math.cos(rad1) * Math.cos(rad2) * Math.cos(dLng)));
    }
    /**
     * A String representation in latitude, longitude format
     * @return The string representation of this class
     */
    toString() {
        return `${this.latitude};${this.longitude}`;
    }
    /**
     * Returns a JSON representation of the GeoPoint
     * @return A GeoJson object of this GeoPoint
     */
    toJSON() {
        return { latitude: this.latitude, longitude: this.longitude };
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2VvUG9pbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJHZW9Qb2ludC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTs7Ozs7R0FLRztBQUNILE1BQU0sT0FBTyxRQUFRO0lBK0NuQjs7OztPQUlHO0lBQ0gsWUFBWSxRQUF1RixFQUNqRyxTQUFrQjtRQUNsQixJQUFJLEdBQVcsQ0FBQztRQUNoQixJQUFJLEdBQVcsQ0FBQztRQUNoQixJQUFJLE9BQU8sUUFBUSxLQUFLLFFBQVEsRUFBRTtZQUNoQyxNQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3BDLEdBQUcsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUMzQyxHQUFHLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDN0M7YUFBTSxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDbEMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEdBQUcsUUFBUSxDQUFDO1NBQ3ZCO2FBQU0sSUFBSSxPQUFPLFFBQVEsS0FBSyxRQUFRLEVBQUU7WUFDdkMsR0FBRyxHQUFHLFFBQVEsQ0FBQyxRQUFRLENBQUM7WUFDeEIsR0FBRyxHQUFHLFFBQVEsQ0FBQyxTQUFTLENBQUM7U0FDMUI7YUFBTTtZQUNMLEdBQUcsR0FBRyxPQUFPLFFBQVEsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2xELEdBQUcsR0FBRyxPQUFPLFNBQVMsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3JEO1FBRUQsSUFBSSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUM7UUFDckIsSUFBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUM7UUFFcEIsSUFBSSxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsRUFBRSxJQUFJLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxFQUFFO1lBQzdDLE1BQU0sSUFBSSxLQUFLLENBQUMsWUFBWSxJQUFJLENBQUMsUUFBUSwyQ0FBMkMsQ0FBQyxDQUFDO1NBQ3ZGO1FBRUQsSUFBSSxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxTQUFTLEdBQUcsR0FBRyxFQUFFO1lBQ2pELE1BQU0sSUFBSSxLQUFLLENBQUMsYUFBYSxJQUFJLENBQUMsU0FBUyw4Q0FBOEMsQ0FBQyxDQUFDO1NBQzVGO0lBQ0gsQ0FBQztJQXRERDs7O09BR0c7SUFDSCxNQUFNLENBQUMsT0FBTztRQUNaLE9BQU8sSUFBSSxPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtZQUN0QyxJQUFJLENBQUMsU0FBUyxFQUFFO2dCQUNkLE1BQU0sQ0FBQyxJQUFJLEtBQUssQ0FBQyx5Q0FBeUMsQ0FBQyxDQUFDLENBQUM7YUFDOUQ7WUFDRCxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRTtnQkFDMUIsTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDLDRDQUE0QyxDQUFDLENBQUMsQ0FBQzthQUNqRTtZQUVELFNBQVMsQ0FBQyxXQUFXLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRTtnQkFDcEQsT0FBTyxDQUFDLElBQUksUUFBUSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUM3RSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRTtnQkFDWCxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDaEIsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ04sQ0FBQztJQXFDRDs7Ozs7O09BTUc7SUFDSCxZQUFZLENBQUMsS0FBZTtRQUMxQixPQUFPLE1BQU0sQ0FBQyxDQUFDLFFBQVEsQ0FBQywwQkFBMEIsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDMUYsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNILE9BQU8sQ0FBQyxLQUFlO1FBQ3JCLE9BQU8sTUFBTSxDQUFDLENBQUMsUUFBUSxDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNyRixDQUFDO0lBRUQ7Ozs7Ozs7Ozs7O09BV0c7SUFDSCxTQUFTLENBQUMsS0FBZTtRQUN2QixNQUFNLElBQUksR0FBRyxJQUFJLENBQUM7UUFDbEIsTUFBTSxFQUFFLEdBQUcsS0FBSyxDQUFDO1FBQ2pCLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDLFVBQVUsQ0FBQztRQUNqRCxNQUFNLElBQUksR0FBRyxFQUFFLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxVQUFVLENBQUM7UUFDL0MsTUFBTSxJQUFJLEdBQUcsQ0FBQyxFQUFFLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxRQUFRLENBQUMsVUFBVSxDQUFDO1FBRW5FLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzNHLENBQUM7SUFFRDs7O09BR0c7SUFDSCxRQUFRO1FBQ04sT0FBTyxHQUFHLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQzlDLENBQUM7SUFFRDs7O09BR0c7SUFDSCxNQUFNO1FBQ0osT0FBTyxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDaEUsQ0FBQzs7QUEzSUQ7O0dBRUc7QUFDYSxtQkFBVSxHQUFHLElBQUksQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDO0FBRTNDOztHQUVHO0FBQ2EsbUNBQTBCLEdBQUcsSUFBSSxDQUFDO0FBRWxEOztHQUVHO0FBQ2EsOEJBQXFCLEdBQUcsSUFBSSxDQUFDIn0=

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "db", function() { return db; });
/* harmony import */ var _EntityManagerFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);

const db = (() => {
    const emf = new _EntityManagerFactory__WEBPACK_IMPORTED_MODULE_0__[/* EntityManagerFactory */ "a"]();
    const bq = emf.createEntityManager(true);
    Object.assign(bq, {
        configure(options) {
            emf.configure(options);
            return this;
        },
        connect(hostOrApp, secure, doneCallback, failCallback) {
            if (secure instanceof Function) {
                return this.connect(hostOrApp, undefined, secure, doneCallback);
            }
            emf.connect(hostOrApp, secure);
            return this.ready(doneCallback, failCallback);
        },
    });
    return bq;
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFxZW5kLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYmFxZW5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBOEI5RCxNQUFNLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxHQUFHLEVBQUU7SUFDdEIsTUFBTSxHQUFHLEdBQUcsSUFBSSxvQkFBb0IsRUFBRSxDQUFDO0lBQ3ZDLE1BQU0sRUFBRSxHQUFHLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUV6QyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRTtRQUNoQixTQUFTLENBQWUsT0FBTztZQUM3QixHQUFHLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3ZCLE9BQU8sSUFBSSxDQUFDO1FBQ2QsQ0FBQztRQUVELE9BQU8sQ0FBZSxTQUFpQixFQUFFLE1BQTJCLEVBQUUsWUFBa0IsRUFBRSxZQUFrQjtZQUMxRyxJQUFJLE1BQU0sWUFBWSxRQUFRLEVBQUU7Z0JBQzlCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxZQUFZLENBQUMsQ0FBQzthQUNqRTtZQUVELEdBQUcsQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQy9CLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFDaEQsQ0FBQztLQUNpQixDQUFDLENBQUM7SUFFdEIsT0FBTyxFQUFZLENBQUM7QUFDdEIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyJ9

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EntityManager; });
/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _binding__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _connector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0);
/* harmony import */ var _caching__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(15);
/* harmony import */ var _GeoPoint__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8);
/* harmony import */ var _query__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(13);
/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5);
/* harmony import */ var _metamodel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6);
/* harmony import */ var _intersection__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1);
/* harmony import */ var _connector_Message__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(11);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};











const DB_PREFIX = '/db/';
class EntityManager extends _util__WEBPACK_IMPORTED_MODULE_2__["Lockable"] {
    /**
     * @param entityManagerFactory The factory which of this entityManager instance
     */
    constructor(entityManagerFactory) {
        super();
        /**
         * Constructor for a new List collection
         */
        this.List = Array;
        /**
         * Constructor for a new Set collection
         */
        this.Set = Set;
        /**
         * Constructor for a new Map collection
         */
        this.Map = Map;
        /**
         * Constructor for a new GeoPoint
         */
        this.GeoPoint = _GeoPoint__WEBPACK_IMPORTED_MODULE_5__[/* GeoPoint */ "a"];
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
        this.log = _intersection__WEBPACK_IMPORTED_MODULE_9__["Logger"].create(this);
        /**
         * The connector used for requests
         */
        this.connection = null;
        /**
         * All managed and cached entity instances
         * @type Map<String,Entity>
         * @private
         */
        this.entities = {};
        this.modules = new _intersection__WEBPACK_IMPORTED_MODULE_9__["Modules"](this);
        /**
         * The current logged in user object
         */
        this.me = null;
        /**
         * The current registered device object
         */
        this.deviceMe = null;
        /**
         * Returns the tokenStorage which will be used to authorize all requests.
         */
        this.tokenStorage = null; // is never null after em is ready
        /**
         * The bloom filter which contains staleness information of cached objects
         */
        this.bloomFilter = null;
        /**
         * Set of object ids that were revalidated after the Bloom filter was loaded.
         */
        this.cacheWhiteList = null;
        /**
         * Set of object ids that were updated but are not yet included in the bloom filter.
         * This set essentially implements revalidation by side effect which does not work in Chrome.
         */
        this.cacheBlackList = null;
        /**
         * Bloom filter refresh interval in seconds.
         */
        this.bloomFilterRefresh = 60;
        /**
         * Bloom filter refresh Promise
         */
        this.bloomFilterLock = new _util__WEBPACK_IMPORTED_MODULE_2__["Lockable"]();
        /**
         * A File factory for file objects.
         * The file factory can be called to create new instances for files.
         * The created instances implements the {@link File} interface
         */
        this.File = null; // is never null after the em is ready
        this.entityManagerFactory = entityManagerFactory;
        this.metamodel = entityManagerFactory.metamodel;
        this.code = entityManagerFactory.code;
    }
    /**
     * Determine whether the entity manager is open.
     * true until the entity manager has been closed
     */
    get isOpen() {
        return !!this.connection;
    }
    /**
     * The authentication token if the user is logged in currently
     */
    get token() {
        return this.tokenStorage.token;
    }
    /**
     * Whether caching is disabled
     * @deprecated
     */
    get isCachingDisabled() {
        return !this.isCachingEnabled();
    }
    /**
     * Whether caching is enabled
     */
    isCachingEnabled() {
        return !!this.bloomFilter;
    }
    /**
     * Returns true if the device token is already registered, otherwise false.
     */
    get isDeviceRegistered() {
        return !!this.deviceMe;
    }
    /**
     * The authentication token if the user is logged in currently
     * @param value
     */
    set token(value) {
        this.tokenStorage.update(value);
    }
    /**
     * Connects this entityManager, used for synchronous and asynchronous initialization
     * @param connector
     * @param connectData
     * @param tokenStorage The used tokenStorage for token persistence
     */
    connected(connector, connectData, tokenStorage) {
        this.connection = connector;
        this.tokenStorage = tokenStorage;
        this.bloomFilterRefresh = this.entityManagerFactory.staleness;
        this.File = _binding__WEBPACK_IMPORTED_MODULE_1__["FileFactory"].create(this);
        this._createObjectFactory(this.metamodel.embeddables);
        this._createObjectFactory(this.metamodel.entities);
        if (connectData) {
            if (connectData.device) {
                this._updateDevice(connectData.device);
            }
            if (connectData.user && tokenStorage.token) {
                this._updateUser(connectData.user, true);
            }
            if (this.bloomFilterRefresh > 0 && connectData.bloomFilter && _util__WEBPACK_IMPORTED_MODULE_2__["atob"] && !_util__WEBPACK_IMPORTED_MODULE_2__["isNode"]) {
                this._updateBloomFilter(connectData.bloomFilter);
            }
        }
    }
    /**
     * @param types
     * @return    * @private
     */
    _createObjectFactory(types) {
        const values = Object.values(types);
        for (let i = 0; i < values.length; i += 1) {
            const type = values[i];
            const { name } = type;
            if (this[name]) {
                type.typeConstructor = this[name];
                Object.defineProperty(this, name, {
                    value: type.createObjectFactory(this),
                });
            }
            else {
                Object.defineProperty(this, name, {
                    get() {
                        Object.defineProperty(this, name, {
                            value: type.createObjectFactory(this),
                        });
                        return this[name];
                    },
                    set(typeConstructor) {
                        type.typeConstructor = typeConstructor;
                    },
                    configurable: true,
                });
            }
        }
    }
    send(message, ignoreCredentialError = true) {
        if (!this.connection) {
            throw new Error('This EntityManager is not connected.');
        }
        const msg = message;
        msg.tokenStorage(this.tokenStorage);
        let result = this.connection.send(msg);
        if (!ignoreCredentialError) {
            result = result.catch((e) => {
                if (e.status === _connector__WEBPACK_IMPORTED_MODULE_3__["StatusCode"].BAD_CREDENTIALS) {
                    this._logout();
                }
                throw e;
            });
        }
        return result;
    }
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
    getReference(entityClass, key) {
        let id = null;
        let type;
        if (key) {
            const keyAsStr = key;
            type = this.metamodel.entity(entityClass);
            if (keyAsStr.indexOf(DB_PREFIX) === 0) {
                id = keyAsStr;
            }
            else {
                id = `${type.ref}/${encodeURIComponent(keyAsStr)}`;
            }
        }
        else if (typeof entityClass === 'string') {
            const keyIndex = entityClass.indexOf('/', DB_PREFIX.length); // skip /db/
            if (keyIndex !== -1) {
                id = entityClass;
            }
            type = this.metamodel.entity(keyIndex !== -1 ? entityClass.substring(0, keyIndex) : entityClass);
        }
        else {
            type = this.metamodel.entity(entityClass);
        }
        let entity = this.entities[id];
        if (!entity) {
            entity = type.create();
            const metadata = _intersection__WEBPACK_IMPORTED_MODULE_9__["Metadata"].get(entity);
            if (id) {
                metadata.id = id;
            }
            metadata.setUnavailable();
            this._attach(entity);
        }
        return entity;
    }
    /**
     * Creates an instance of {@link Builder<T>} for query creation and execution
     *
     * The query results are instances of the resultClass argument.
     *
     * @param resultClass - the type of the query result
     * @return A query builder to create one ore more queries for the specified class
     */
    createQueryBuilder(resultClass) {
        return new _query__WEBPACK_IMPORTED_MODULE_6__["Builder"](this, resultClass);
    }
    /**
     * Clear the persistence context, causing all managed entities to become detached
     *
     * Changes made to entities that have not been flushed to the database will not be persisted.
     *
     * @return
     */
    clear() {
        this.entities = {};
    }
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
    close() {
        this.connection = null;
        return this.clear();
    }
    /**
     * Check if the instance is a managed entity instance belonging to the current persistence context
     *
     * @param entity - entity instance
     * @return boolean indicating if entity is in persistence context
     */
    contains(entity) {
        return !!entity && !!entity.id && this.entities[entity.id] === entity;
    }
    /**
     * Check if an object with the id from the given entity is already attached
     *
     * @param entity - entity instance
     * @return boolean indicating if entity with same id is attached
     */
    containsById(entity) {
        return !!(entity && entity.id && this.entities[entity.id]);
    }
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
    detach(entity) {
        const state = _intersection__WEBPACK_IMPORTED_MODULE_9__["Metadata"].get(entity);
        return state.withLock(() => {
            this.removeReference(entity);
            return Promise.resolve(entity);
        });
    }
    /**
     * Resolve the depth by loading the referenced objects of the given entity
     *
     * @param entity - entity instance
     * @param [options] The load options
     * @return
     */
    resolveDepth(entity, options) {
        if (!options || !options.depth) {
            return Promise.resolve(entity);
        }
        const resolved = options.resolved || [];
        const promises = [];
        const subOptions = Object.assign(Object.assign({}, options), { resolved, depth: options.depth === true ? true : options.depth - 1 });
        this.getSubEntities(entity, 1).forEach((subEntity) => {
            if (subEntity !== null && resolved.indexOf(subEntity) === -1 && subEntity.id) {
                resolved.push(subEntity);
                promises.push(this.load(subEntity.id, undefined, subOptions));
            }
        });
        return Promise.all(promises).then(() => entity);
    }
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
    load(entityClass, oid, options) {
        const opt = options || {};
        const entity = this.getReference(entityClass, oid);
        const state = _intersection__WEBPACK_IMPORTED_MODULE_9__["Metadata"].get(entity);
        if (!opt.refresh && opt.local && state.isAvailable) {
            return this.resolveDepth(entity, opt);
        }
        const msg = new _message__WEBPACK_IMPORTED_MODULE_0__["GetObject"](state.bucket, state.key);
        this.ensureCacheHeader(entity.id, msg, opt.refresh);
        return this.send(msg).then((response) => {
            // refresh object if loaded older version from cache
            // chrome doesn't using cache when ifNoneMatch is set
            if (entity.version && entity.version > response.entity.version) {
                opt.refresh = true;
                return this.load(entityClass, oid, opt);
            }
            this.addToWhiteList(response.entity.id);
            if (response.status !== _connector__WEBPACK_IMPORTED_MODULE_3__["StatusCode"].NOT_MODIFIED) {
                state.type.fromJsonValue(state, response.entity, entity, { persisting: true });
            }
            return this.resolveDepth(entity, opt);
        }, (e) => {
            if (e.status === _connector__WEBPACK_IMPORTED_MODULE_3__["StatusCode"].OBJECT_NOT_FOUND) {
                this.removeReference(entity);
                state.setRemoved();
                return null;
            }
            throw e;
        });
    }
    /**
     * @param entity
     * @param options
     * @return
     */
    insert(entity, options) {
        const opt = options || {};
        let isNew;
        return this._save(entity, opt, (state, json) => {
            if (state.version) {
                throw new _error__WEBPACK_IMPORTED_MODULE_7__["PersistentError"]('Existing objects can\'t be inserted.');
            }
            isNew = !state.id;
            return new _message__WEBPACK_IMPORTED_MODULE_0__["CreateObject"](state.bucket, json);
        }).then((val) => {
            if (isNew) {
                this._attach(entity);
            }
            return val;
        });
    }
    /**
     * @param entity
     * @param options
     * @return
     */
    update(entity, options) {
        const opt = options || {};
        return this._save(entity, opt, (state, json) => {
            if (!state.version) {
                throw new _error__WEBPACK_IMPORTED_MODULE_7__["PersistentError"]('New objects can\'t be inserted.');
            }
            if (opt.force) {
                const { version } = json, jsonWithoutVersion = __rest(json, ["version"]);
                return new _message__WEBPACK_IMPORTED_MODULE_0__["ReplaceObject"](state.bucket, state.key, jsonWithoutVersion)
                    .ifMatch('*');
            }
            return new _message__WEBPACK_IMPORTED_MODULE_0__["ReplaceObject"](state.bucket, state.key, json)
                .ifMatch(`${state.version}`);
        });
    }
    /**
     * @param entity
     * @param options The save options
     * @param withoutLock Set true to save the entity without locking
     * @return
     */
    save(entity, options, withoutLock = false) {
        const opt = options || {};
        const msgFactory = (state, json) => {
            if (opt.force) {
                if (!state.id) {
                    throw new _error__WEBPACK_IMPORTED_MODULE_7__["PersistentError"]('New special objects can\'t be forcefully saved.');
                }
                const { version } = json, jsonWithoutVersion = __rest(json, ["version"]);
                return new _message__WEBPACK_IMPORTED_MODULE_0__["ReplaceObject"](state.bucket, state.key, jsonWithoutVersion);
            }
            if (state.version) {
                return new _message__WEBPACK_IMPORTED_MODULE_0__["ReplaceObject"](state.bucket, state.key, json)
                    .ifMatch(state.version);
            }
            return new _message__WEBPACK_IMPORTED_MODULE_0__["CreateObject"](state.bucket, json);
        };
        return withoutLock ? this._locklessSave(entity, opt, msgFactory) : this._save(entity, opt, msgFactory);
    }
    /**
     * @param entity
     * @param cb pre-safe callback
     * @return
     */
    optimisticSave(entity, cb) {
        return _intersection__WEBPACK_IMPORTED_MODULE_9__["Metadata"].get(entity).withLock(() => this._optimisticSave(entity, cb));
    }
    /**
     * @param entity
     * @param cb pre-safe callback
     * @return
     * @private
     */
    _optimisticSave(entity, cb) {
        let abort = false;
        const abortFn = () => {
            abort = true;
        };
        const promise = Promise.resolve(cb(entity, abortFn));
        if (abort) {
            return Promise.resolve(entity);
        }
        return promise.then(() => (this.save(entity, {}, true)
            .catch((e) => {
            if (e.status === 412) {
                return this.refresh(entity, {})
                    .then(() => this._optimisticSave(entity, cb));
            }
            throw e;
        })));
    }
    /**
     * Save the object state without locking
     * @param entity
     * @param options
     * @param msgFactory
     * @return
     * @private
     */
    _locklessSave(entity, options, msgFactory) {
        this.attach(entity);
        const state = _intersection__WEBPACK_IMPORTED_MODULE_9__["Metadata"].get(entity);
        let refPromises;
        let json;
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
            const sendPromise = this.send(msgFactory(state, json)).then((response) => {
                if (state.id && state.id !== response.entity.id) {
                    this.removeReference(entity);
                    state.id = response.entity.id;
                    this._attach(entity);
                }
                state.type.fromJsonValue(state, response.entity, entity, {
                    persisting: options.refresh,
                    onlyMetadata: !options.refresh,
                });
                return entity;
            }, (e) => {
                if (e.status === _connector__WEBPACK_IMPORTED_MODULE_3__["StatusCode"].OBJECT_NOT_FOUND) {
                    this.removeReference(entity);
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
        const subOptions = Object.assign({}, options);
        subOptions.depth = 0;
        this.getSubEntities(entity, options.depth).forEach((sub) => {
            refPromises.push(this._save(sub, subOptions, msgFactory));
        });
        return Promise.all(refPromises).then(() => entity);
    }
    /**
     * Save and lock the object state
     * @param entity
     * @param options
     * @param msgFactory
     * @return
     * @private
     */
    _save(entity, options, msgFactory) {
        this.ensureBloomFilterFreshness();
        const state = _intersection__WEBPACK_IMPORTED_MODULE_9__["Metadata"].get(entity);
        if (state.version) {
            this.addToBlackList(entity.id);
        }
        return state.withLock(() => this._locklessSave(entity, options, msgFactory));
    }
    /**
     * Returns all referenced sub entities for the given depth and root entity
     * @param entity
     * @param depth
     * @param [resolved]
     * @param initialEntity
     * @return
     */
    getSubEntities(entity, depth, resolved = [], initialEntity) {
        if (!depth) {
            return resolved;
        }
        const obj = initialEntity || entity;
        const state = _intersection__WEBPACK_IMPORTED_MODULE_9__["Metadata"].get(entity);
        const iter = state.type.references();
        for (let item = iter.next(); !item.done; item = iter.next()) {
            const { value } = item;
            const subEntities = this.getSubEntitiesByPath(entity, value.path);
            for (let i = 0, len = subEntities.length; i < len; i += 1) {
                const subEntity = subEntities[i];
                if (resolved.indexOf(subEntity) === -1 && subEntity !== obj) {
                    resolved.push(subEntity);
                    this.getSubEntities(subEntity, depth === true ? depth : depth - 1, resolved, obj);
                }
            }
        }
        return resolved;
    }
    /**
     * Returns all referenced one level sub entities for the given path
     * @param entity
     * @param path
     * @return
     */
    getSubEntitiesByPath(entity, path) {
        let subEntities = [entity];
        path.forEach((attributeName) => {
            const tmpSubEntities = [];
            subEntities.forEach((subEntity) => {
                const curEntity = subEntity[attributeName];
                if (!curEntity) {
                    return;
                }
                const attribute = this.metamodel.managedType(subEntity.constructor).getAttribute(attributeName);
                if (attribute instanceof _metamodel__WEBPACK_IMPORTED_MODULE_8__["PluralAttribute"]) {
                    const iter = curEntity.entries();
                    for (let item = iter.next(); !item.done; item = iter.next()) {
                        const entry = item.value;
                        tmpSubEntities.push(entry[1]);
                        if (attribute instanceof _metamodel__WEBPACK_IMPORTED_MODULE_8__["MapAttribute"] && attribute.keyType.isEntity) {
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
    }
    /**
     * Delete the entity instance.
     * @param entity
     * @param options The delete options
     * @return
     */
    delete(entity, options) {
        const opt = options || {};
        this.attach(entity);
        const state = _intersection__WEBPACK_IMPORTED_MODULE_9__["Metadata"].get(entity);
        return state.withLock(() => {
            if (!state.version && !opt.force) {
                throw new _error__WEBPACK_IMPORTED_MODULE_7__["IllegalEntityError"](entity);
            }
            const msg = new _message__WEBPACK_IMPORTED_MODULE_0__["DeleteObject"](state.bucket, state.key);
            this.addToBlackList(entity.id);
            if (!opt.force) {
                msg.ifMatch(`${state.version}`);
            }
            const refPromises = [this.send(msg).then(() => {
                    this.removeReference(entity);
                    state.setRemoved();
                    return entity;
                })];
            const subOptions = Object.assign({}, opt);
            subOptions.depth = 0;
            this.getSubEntities(entity, opt.depth).forEach((sub) => {
                refPromises.push(this.delete(sub, subOptions));
            });
            return Promise.all(refPromises).then(() => entity);
        });
    }
    /**
     * Synchronize the persistence context to the underlying database.
     *
     * @return
     */
    flush() {
        throw new Error('Not implemented.');
    }
    /**
     * Make an instance managed and persistent.
     * @param entity - entity instance
     * @return
     */
    persist(entity) {
        this.attach(entity);
    }
    /**
     * Refresh the state of the instance from the database, overwriting changes made to the entity, if any.
     * @param entity - entity instance
     * @param options The refresh options
     * @return
     */
    refresh(entity, options) {
        if (!entity.id) {
            // entity is not persisted so far
            return Promise.resolve(entity);
        }
        return this.load(entity.id, undefined, Object.assign(Object.assign({}, options), { refresh: true }));
    }
    /**
     * Attach the instance to this database context, if it is not already attached
     * @param entity The entity to attach
     * @return
     */
    attach(entity) {
        if (!this.contains(entity)) {
            const type = this.metamodel.entity(entity.constructor);
            if (!type) {
                throw new _error__WEBPACK_IMPORTED_MODULE_7__["IllegalEntityError"](entity);
            }
            if (this.containsById(entity)) {
                throw new _error__WEBPACK_IMPORTED_MODULE_7__["EntityExistsError"](entity);
            }
            this._attach(entity);
        }
    }
    _attach(entity) {
        const metadata = _intersection__WEBPACK_IMPORTED_MODULE_9__["Metadata"].get(entity);
        if (metadata.isAttached) {
            if (metadata.db !== this) {
                throw new _error__WEBPACK_IMPORTED_MODULE_7__["EntityExistsError"](entity);
            }
        }
        else {
            metadata.db = this;
        }
        if (!metadata.id) {
            if (metadata.type.name !== 'User' && metadata.type.name !== 'Role' && metadata.type.name !== 'logs.AppLog') {
                metadata.id = `${DB_PREFIX + metadata.type.name}/${Object(_util__WEBPACK_IMPORTED_MODULE_2__["uuid"])()}`;
            }
        }
        if (metadata.id) {
            this.entities[metadata.id] = entity;
        }
    }
    removeReference(entity) {
        const state = _intersection__WEBPACK_IMPORTED_MODULE_9__["Metadata"].get(entity);
        if (!state || !state.id) {
            throw new _error__WEBPACK_IMPORTED_MODULE_7__["IllegalEntityError"](entity);
        }
        delete this.entities[state.id];
    }
    register(user, password, loginOption) {
        const login = loginOption > _binding__WEBPACK_IMPORTED_MODULE_1__["LoginOption"].NO_LOGIN;
        if (this.me && login) {
            throw new _error__WEBPACK_IMPORTED_MODULE_7__["PersistentError"]('User is already logged in.');
        }
        return this.withLock(() => {
            const msg = new _message__WEBPACK_IMPORTED_MODULE_0__["Register"]({ user, password, login });
            return this._userRequest(msg, loginOption);
        });
    }
    login(username, password, loginOption) {
        if (this.me) {
            throw new _error__WEBPACK_IMPORTED_MODULE_7__["PersistentError"]('User is already logged in.');
        }
        return this.withLock(() => {
            const msg = new _message__WEBPACK_IMPORTED_MODULE_0__["Login"]({ username, password });
            return this._userRequest(msg, loginOption);
        });
    }
    logout() {
        return this.withLock(() => this.send(new _message__WEBPACK_IMPORTED_MODULE_0__["Logout"]()).then(this._logout.bind(this)));
    }
    loginWithOAuth(provider, options) {
        if (!this.connection) {
            throw new Error('This EntityManager is not connected.');
        }
        if (this.me) {
            throw new _error__WEBPACK_IMPORTED_MODULE_7__["PersistentError"]('User is already logged in.');
        }
        const opt = Object.assign({ title: `Login with ${provider}`, timeout: 5 * 60 * 1000, state: {}, loginOption: true, oAuthVersion: 2, open: _util__WEBPACK_IMPORTED_MODULE_2__["openWindow"] }, options);
        if (opt.deviceCode) {
            return this._loginOAuthDevice(provider.toLowerCase(), opt);
        }
        if (opt.oAuthVersion !== 1 && !opt.path && !opt.deviceCode) {
            throw new Error('No OAuth path is provided to start the OAuth flow.');
        }
        if (opt.redirect) {
            Object.assign(opt.state, { redirect: opt.redirect, loginOption: opt.loginOption });
        }
        const oAuthEndpoint = `${this.connection.origin}${this.connection.basePath}/db/User/OAuth/${provider.toLowerCase()}`;
        const url = opt.oAuthVersion === 1 ? oAuthEndpoint : Object(_connector_Message__WEBPACK_IMPORTED_MODULE_10__[/* appendQueryParams */ "d"])(opt.path, {
            client_id: opt.clientId,
            scope: opt.scope,
            state: JSON.stringify(opt.state),
            redirect_uri: oAuthEndpoint,
        });
        const windowOptions = {
            title: opt.title,
            width: opt.width,
            height: opt.height,
        };
        if (opt.redirect) {
            // use oauth via redirect by opening the login in the same window
            return opt.open(url, Object.assign({ target: '_self' }, windowOptions)) || url;
        }
        const req = this._userRequest(new _connector__WEBPACK_IMPORTED_MODULE_3__["OAuthMessage"](), opt.loginOption);
        if (!opt.open(url, windowOptions)) {
            throw new Error('The OAuth flow with a Pop-Up can only be issued in browsers. Add a redirect URL to the options to return to your app via that redirect after the OAuth flow succeed.');
        }
        return new Promise((resolve, reject) => {
            const timeout = setTimeout(() => {
                reject(new _error__WEBPACK_IMPORTED_MODULE_7__["PersistentError"]('OAuth login timeout.'));
            }, opt.timeout);
            req.then(resolve, reject).then(() => {
                clearTimeout(timeout);
            });
        });
    }
    _loginOAuthDevice(provider, opt) {
        return this._userRequest(new _message__WEBPACK_IMPORTED_MODULE_0__["OAuth2"](provider, opt.deviceCode), opt.loginOption)
            .catch(() => new Promise((resolve) => setTimeout(resolve, 5000))
            .then(() => this._loginOAuthDevice(provider, opt)));
    }
    renew(loginOption) {
        return this.withLock(() => {
            const msg = new _message__WEBPACK_IMPORTED_MODULE_0__["Me"]();
            return this._userRequest(msg, loginOption);
        });
    }
    newPassword(username, password, newPassword) {
        return this.withLock(() => {
            const msg = new _message__WEBPACK_IMPORTED_MODULE_0__["NewPassword"]({ username, password, newPassword });
            return this.send(msg, true).then((response) => this._updateUser(response.entity));
        });
    }
    newPasswordWithToken(token, newPassword, loginOption) {
        return this.withLock(() => (this._userRequest(new _message__WEBPACK_IMPORTED_MODULE_0__["NewPassword"]({ token, newPassword }), loginOption)));
    }
    resetPassword(username) {
        return this.send(new _message__WEBPACK_IMPORTED_MODULE_0__["ResetPassword"]({ username }));
    }
    changeUsername(username, newUsername, password) {
        return this.send(new _message__WEBPACK_IMPORTED_MODULE_0__["ChangeUsername"]({ username, newUsername, password }));
    }
    _updateUser(obj, updateMe = false) {
        const user = this.getReference(obj.id);
        const metadata = _intersection__WEBPACK_IMPORTED_MODULE_9__["Metadata"].get(user);
        metadata.type.fromJsonValue(metadata, obj, user, { persisting: true });
        if (updateMe) {
            this.me = user;
        }
        return user;
    }
    _logout() {
        this.me = null;
        this.token = null;
    }
    _userRequest(msg, loginOption) {
        const opt = loginOption === undefined ? true : loginOption;
        const login = opt > _binding__WEBPACK_IMPORTED_MODULE_1__["LoginOption"].NO_LOGIN;
        if (login) {
            this.tokenStorage.temporary = opt < _binding__WEBPACK_IMPORTED_MODULE_1__["LoginOption"].PERSIST_LOGIN;
        }
        return this.send(msg, !login)
            .then((response) => (response.entity ? this._updateUser(response.entity, login) : null), (e) => {
            if (e.status === _connector__WEBPACK_IMPORTED_MODULE_3__["StatusCode"].OBJECT_NOT_FOUND) {
                if (login) {
                    this._logout();
                }
                return null;
            }
            throw e;
        });
    }
    /**
     * @param deviceType The OS of the device (IOS/Android)
     * @param subscription WebPush subscription
     * @param device
     * @return
     */
    registerDevice(deviceType, subscription, device) {
        const msg = new _message__WEBPACK_IMPORTED_MODULE_0__["DeviceRegister"]({ devicetype: deviceType, subscription: subscription, device });
        msg.withCredentials = true;
        return this.send(msg)
            .then((response) => this._updateDevice(response.entity));
    }
    _updateDevice(obj) {
        const device = this.getReference(obj.id);
        const metadata = _intersection__WEBPACK_IMPORTED_MODULE_9__["Metadata"].get(device);
        metadata.type.fromJsonValue(metadata, obj, device, { persisting: true });
        this.deviceMe = device;
        return device;
    }
    checkDeviceRegistration() {
        return this.send(new _message__WEBPACK_IMPORTED_MODULE_0__["DeviceRegistered"]())
            .then(() => true, (e) => {
            if (e.status === _connector__WEBPACK_IMPORTED_MODULE_3__["StatusCode"].OBJECT_NOT_FOUND) {
                return false;
            }
            throw e;
        });
    }
    pushDevice(pushMessage) {
        return this.send(new _message__WEBPACK_IMPORTED_MODULE_0__["DevicePush"](pushMessage.toJSON()));
    }
    /**
     * The given entity will be checked by the validation code of the entity type.
     *
     * @param entity
     * @return result
     */
    validate(entity) {
        const { type } = _intersection__WEBPACK_IMPORTED_MODULE_9__["Metadata"].get(entity);
        const result = new _intersection__WEBPACK_IMPORTED_MODULE_9__["ValidationResult"]();
        const iter = type.attributes();
        for (let item = iter.next(); !item.done; item = iter.next()) {
            const validate = new _intersection__WEBPACK_IMPORTED_MODULE_9__["Validator"](item.value.name, entity);
            result.fields[validate.key] = validate;
        }
        const { validationCode } = type;
        if (validationCode) {
            validationCode(result.fields);
        }
        return result;
    }
    /**
     * Adds the given object id to the cacheWhiteList if needed.
     * @param objectId The id to add.
     * @return
     */
    addToWhiteList(objectId) {
        if (this.isCachingEnabled()) {
            if (this.bloomFilter.contains(objectId)) {
                this.cacheWhiteList.add(objectId);
            }
            this.cacheBlackList.delete(objectId);
        }
    }
    /**
     * Adds the given object id to the cacheBlackList if needed.
     * @param objectId The id to add.
     * @return
     */
    addToBlackList(objectId) {
        if (this.isCachingEnabled() && objectId) {
            if (!this.bloomFilter.contains(objectId)) {
                this.cacheBlackList.add(objectId);
            }
            this.cacheWhiteList.delete(objectId);
        }
    }
    refreshBloomFilter() {
        if (!this.isCachingEnabled()) {
            return Promise.resolve(null);
        }
        const msg = new _message__WEBPACK_IMPORTED_MODULE_0__["GetBloomFilter"]();
        msg.noCache();
        return this.send(msg).then((response) => {
            this._updateBloomFilter(response.entity);
            return this.bloomFilter;
        });
    }
    _updateBloomFilter(bloomFilter) {
        this.bloomFilter = new _caching__WEBPACK_IMPORTED_MODULE_4__["BloomFilter"](bloomFilter);
        this.cacheWhiteList = new Set();
        this.cacheBlackList = new Set();
    }
    /**
     * Checks the freshness of the bloom filter and does a reload if necessary
     */
    ensureBloomFilterFreshness() {
        if (!this.isCachingEnabled()) {
            return;
        }
        const now = new Date().getTime();
        const refreshRate = this.bloomFilterRefresh * 1000;
        if (this.bloomFilterLock.isReady && now - this.bloomFilter.creation > refreshRate) {
            this.bloomFilterLock.withLock(() => this.refreshBloomFilter());
        }
    }
    /**
     * Checks for a given id, if revalidation is required, the resource is stale or caching was disabled
     * @param id The object id to check
     * @return Indicates if the resource must be revalidated
     */
    mustRevalidate(id) {
        if (_util__WEBPACK_IMPORTED_MODULE_2__["isNode"]) {
            return false;
        }
        this.ensureBloomFilterFreshness();
        if (!this.isCachingEnabled() || !this.bloomFilterLock.isReady) {
            return true;
        }
        return !this.cacheWhiteList.has(id) && (this.cacheBlackList.has(id) || this.bloomFilter.contains(id));
    }
    /**
     * @param id To check the bloom filter
     * @param message To attach the headers
     * @param refresh To force the reload headers
     * @return
     */
    ensureCacheHeader(id, message, refresh) {
        const noCache = refresh || !id || this.mustRevalidate(id);
        if (noCache) {
            message.noCache();
        }
    }
    /**
     * Creates a absolute url for the given relative one
     * @param relativePath the relative url
     * @param authorize indicates if authorization credentials should be generated and be attached to the url
     * @return a absolute url which is optionally signed with a resource token which authenticates the currently
     * logged in user
     */
    createURL(relativePath, authorize) {
        const { connection } = this;
        if (!connection) {
            throw new Error('This EntityManager is not connected.');
        }
        return this.tokenStorage.signPath(connection.basePath + relativePath, authorize)
            .then((path) => {
            let url = connection.origin + path;
            if (this.mustRevalidate(relativePath)) {
                url += `${authorize ? '&' : '?'}BCB`;
            }
            return url;
        });
    }
    /**
     * Requests a perpetual token for the given user
     *
     * Only users with the admin role are allowed to request an API token.
     *
     * @param entityClass
     * @param user The user object or id of the user object
     * @return
     */
    requestAPIToken(entityClass, user) {
        const userObj = this._getUserReference(entityClass, user);
        const msg = new _message__WEBPACK_IMPORTED_MODULE_0__["UserToken"](userObj.key);
        return this.send(msg).then((resp) => resp.entity);
    }
    /**
     * Revoke all created tokens for the given user
     *
     * This method will revoke all previously issued tokens and the user must login again.
     *
     * @param entityClass
     * @param user The user object or id of the user object
     */
    revokeAllTokens(entityClass, user) {
        const userObj = this._getUserReference(entityClass, user);
        const msg = new _message__WEBPACK_IMPORTED_MODULE_0__["RevokeUserToken"](userObj.key);
        return this.send(msg);
    }
    _getUserReference(entityClass, user) {
        if (typeof user === 'string') {
            return this.getReference(entityClass, user);
        }
        return user;
    }
}
__decorate([
    Object(_util__WEBPACK_IMPORTED_MODULE_2__["deprecated"])('EntityManager.isCachingEnabled()')
], EntityManager.prototype, "isCachingDisabled", null);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRW50aXR5TWFuYWdlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkVudGl0eU1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLEtBQUssUUFBUSxNQUFNLFdBQVcsQ0FBQztBQUN0QyxPQUFPLEVBQ0wsV0FBVyxFQU1YLFdBQVcsR0FDWixNQUFNLFdBQVcsQ0FBQztBQUNuQixPQUFPLEVBQ0wsSUFBSSxFQUNHLFVBQVUsRUFDakIsTUFBTSxFQUVOLFFBQVEsRUFDUixJQUFJLEVBQ0osVUFBVSxHQUNYLE1BQU0sUUFBUSxDQUFDO0FBQ2hCLE9BQU8sRUFDSSxVQUFVLEVBQWEsWUFBWSxHQUM3QyxNQUFNLGFBQWEsQ0FBQztBQUNyQixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQ3hDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFLdEMsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUNsQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsa0JBQWtCLEVBQUUsZUFBZSxFQUFFLE1BQU0sU0FBUyxDQUFDO0FBQ2pGLE9BQU8sRUFDTCxZQUFZLEVBQTJCLGVBQWUsR0FDdkQsTUFBTSxhQUFhLENBQUM7QUFFckIsT0FBTyxFQUVMLE1BQU0sRUFDTixRQUFRLEVBQ1IsT0FBTyxFQUdQLGdCQUFnQixFQUNoQixTQUFTLEdBQ1YsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUV4RCxNQUFNLFNBQVMsR0FBRyxNQUFNLENBQUM7QUFJekIsTUFBTSxPQUFPLGFBQWMsU0FBUSxRQUFRO0lBbUx6Qzs7T0FFRztJQUNILFlBQVksb0JBQTBDO1FBQ3BELEtBQUssRUFBRSxDQUFDO1FBdExWOztXQUVHO1FBQ2EsU0FBSSxHQUFHLEtBQUssQ0FBQztRQUU3Qjs7V0FFRztRQUNhLFFBQUcs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

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return StatusCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return appendQueryParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Message; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return OAuthMessage; });
/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);

/**
 * Checks whether the user uses a browser which does support revalidation.
 */
// @ts-ignore
const REVALIDATION_SUPPORTED = typeof navigator === 'undefined' || (typeof chrome !== 'undefined' && /google/i.test(navigator.vendor)) || (/cros i686/i.test(navigator.platform));
const StatusCode = {
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
    const queryString = typeof queryParams === 'string' ? queryParams : Object.entries(queryParams)
        .filter(([, value]) => value !== undefined)
        .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
        .join('&');
    if (!queryString) {
        return url;
    }
    const sep = url.indexOf('?') >= 0 ? '&' : '?';
    return url + sep + queryString;
}
class Message {
    /**
     * @param args The path arguments
     */
    constructor(...args) {
        this.withCredentials = false;
        this.progressCallback = null;
        this._tokenStorage = null;
        this._responseType = null;
        let index = 0;
        let path = this.spec.path[0];
        const len = this.spec.path.length;
        for (let i = 1; i < len; i += 1) {
            if (this.spec.dynamic && len - 1 === i) {
                path += args[index].split('/').map(encodeURIComponent).join('/');
            }
            else {
                path += encodeURIComponent(args[index]) + this.spec.path[i];
            }
            index += 1;
        }
        const queryParams = {};
        for (let i = 0; i < this.spec.query.length; i += 1) {
            const arg = args[index];
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
    /**
     * Returns the specification of this message
     */
    get spec() { return null; }
    /**
     * Creates a new message class with the given message specification
     * @return A created message object for the specification
     */
    static create(specification) {
        const parts = specification.path.split('?');
        const path = parts[0].split(/[:*]\w*/);
        const query = [];
        if (parts[1]) {
            parts[1].split('&').forEach((arg) => {
                const part = arg.split('=');
                query.push(part[0]);
            });
        }
        const spec = {
            path,
            query,
            status: specification.status,
            method: specification.method,
            dynamic: specification.path.indexOf('*') !== -1,
        };
        return class extends Message {
            get spec() {
                return spec;
            }
        };
    }
    get isBinary() {
        return (this.request.type && this.request.type in Message.BINARY) || this._responseType in Message.BINARY;
    }
    tokenStorage(value) {
        if (value === undefined) {
            return this._tokenStorage;
        }
        this._tokenStorage = value;
        return this;
    }
    path(path) {
        if (path !== undefined) {
            const queryIndex = this.request.path.indexOf('?') + 1;
            this.request.path = path + (queryIndex > 0 ? (path.indexOf('?') > -1 ? '&' : '?') + this.request.path.substring(queryIndex) : '');
            return this;
        }
        return this.request.path;
    }
    header(name, value) {
        if (value === null) {
            delete this.request.headers[name];
            return this;
        }
        if (value !== undefined) {
            this.request.headers[name] = value;
            return this;
        }
        return this.request.headers[name];
    }
    /**
     * Sets the entity type
     * @param data - The data to send
     * @param type - the type of the data one of 'json'|'text'|'blob'|'arraybuffer'
     * defaults detect the type based on the body data
     * @return This message object
     */
    entity(data, type) {
        let requestType = type;
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
    }
    mimeType(mimeType) {
        return this.header('content-type', mimeType);
    }
    contentLength(contentLength) {
        if (contentLength !== undefined) {
            return this.header('content-length', `${contentLength}`);
        }
        return Number(this.header('content-length'));
    }
    ifMatch(eTag) {
        return this.header('If-Match', this.formatETag(eTag));
    }
    ifNoneMatch(eTag) {
        return this.header('If-None-Match', this.formatETag(eTag));
    }
    ifUnmodifiedSince(date) {
        // IE 10 returns UTC strings and not an RFC-1123 GMT date string
        return this.header('if-unmodified-since', date && date.toUTCString().replace('UTC', 'GMT'));
    }
    /**
     * Indicates that the request should not be served by a local cache
     * @return
     */
    noCache() {
        if (!REVALIDATION_SUPPORTED) {
            this.ifMatch('') // is needed for firefox or safari (but forbidden for chrome)
                .ifNoneMatch('-'); // is needed for edge and ie (but forbidden for chrome)
        }
        return this.cacheControl('max-age=0, no-cache');
    }
    cacheControl(value) {
        return this.header('cache-control', value);
    }
    acl(acl) {
        return this.header('baqend-acl', acl && JSON.stringify(acl));
    }
    customHeaders(customHeaders) {
        return this.header('baqend-custom-headers', customHeaders && JSON.stringify(customHeaders));
    }
    accept(accept) {
        return this.header('accept', accept);
    }
    responseType(type) {
        if (type !== undefined) {
            this._responseType = type;
            return this;
        }
        return this._responseType;
    }
    progress(callback) {
        if (callback !== undefined) {
            this.progressCallback = callback;
            return this;
        }
        return this.progressCallback;
    }
    /**
     * Adds the given string to the request path
     *
     * If the parameter is an object, it will be serialized as a query string.
     *
     * @param query which will added to the request path
     * @return
     */
    addQueryString(query) {
        this.request.path = appendQueryParams(this.request.path, query);
        return this;
    }
    formatETag(eTag) {
        if (eTag === null || eTag === undefined || eTag === '*') {
            return eTag;
        }
        let tag = `${eTag}`;
        if (tag.indexOf('"') === -1) {
            tag = `"${tag}"`;
        }
        return tag;
    }
    /**
     * Handle the receive
     * @param response The received response headers and data
     * @return
     */
    doReceive(response) {
        if (this.spec.status.indexOf(response.status) === -1) {
            throw new _error__WEBPACK_IMPORTED_MODULE_0__["CommunicationError"](this, response);
        }
    }
}
Message.StatusCode = StatusCode;
Message.BINARY = {
    blob: true,
    buffer: true,
    stream: true,
    arraybuffer: true,
    'data-url': true,
    base64: true,
};
class OAuthMessage extends Message {
    get spec() {
        return {
            method: 'OAUTH',
            dynamic: false,
            path: [''],
            query: [],
            status: [200],
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWVzc2FnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIk1lc3NhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUEsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sVUFBVSxDQUFDO0FBeUI5Qzs7R0FFRztBQUNILGFBQWE7QUFDYixNQUFNLHNCQUFzQixHQUFHLE9BQU8sU0FBUyxLQUFLLFdBQVcsSUFBSSxDQUFDLE9BQU8sTUFBTSxLQUFLLFdBQVcsSUFBSSxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztBQUVsTCxNQUFNLENBQUMsTUFBTSxVQUFVLEdBQUc7SUFDeEIsWUFBWSxFQUFFLEdBQUc7SUFDakIsZUFBZSxFQUFFLEdBQUc7SUFDcEIsZ0JBQWdCLEVBQUUsR0FBRztJQUNyQiwrQkFBK0IsRUFBRSxHQUFHO0lBQ3BDLGtCQUFrQixFQUFFLEdBQUc7SUFDdkIsZ0JBQWdCLEVBQUUsR0FBRztJQUNyQixrQkFBa0IsRUFBRSxHQUFHO0lBQ3ZCLGlCQUFpQixFQUFFLEdBQUc7SUFDdEIsY0FBYyxFQUFFLEdBQUc7SUFDbkIsbUJBQW1CLEVBQUUsR0FBRztJQUN4QixxQkFBcUIsRUFBRSxHQUFHO0lBQzFCLG1CQUFtQixFQUFFLEdBQUc7SUFDeEIsWUFBWSxFQUFFLEdBQUc7SUFDakIsb0JBQW9CLEVBQUUsR0FBRztJQUN6QixtQkFBbUIsRUFBRSxHQUFHO0lBQ3hCLHFCQUFxQixFQUFFLEdBQUc7SUFDMUIsZUFBZSxFQUFFLEdBQUc7Q0FDckIsQ0FBQztBQUVGOzs7OztHQUtHO0FBQ0gsTUFBTSxVQUFVLGlCQUFpQixDQUFDLEdBQVcsRUFBRSxXQUEyRDtJQUN4RyxNQUFNLFdBQVcsR0FBRyxPQUFPLFdBQVcsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUM7U0FDNUYsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxFQUFFLEVBQUUsQ0FBQyxLQUFLLEtBQUssU0FBUyxDQUFDO1NBQzFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxFQUFFLEVBQUUsQ0FBQyxHQUFHLEdBQUcsSUFBSSxrQkFBa0IsQ0FBQyxLQUFlLENBQUMsRUFBRSxDQUFDO1NBQ3RFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUViLElBQUksQ0FBQyxXQUFXLEVBQUU7UUFDaEIsT0FBTyxHQUFHLENBQUM7S0FDWjtJQUVELE1BQU0sR0FBRyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztJQUM5QyxPQUFPLEdBQUcsR0FBRyxHQUFHLEdBQUcsV0FBVyxDQUFDO0FBQ2pDLENBQUM7QUFFRCxNQUFNLE9BQWdCLE9BQU87SUE4RDNCOztPQUVHO0lBQ0gsWUFBWSxHQUFHLElBQWM7UUFyRHRCLG9CQUFlLEdBQVksS0FBSyxDQUFDO1FBRWpDLHFCQUFnQixHQUE0QixJQUFJLENBQUM7UUFJaEQsa0JBQWEsR0FBd0IsSUFBSSxDQUFDO1FBRTFDLGtCQUFhLEdBQTRCLElBQUksQ0FBQztRQThDcEQsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ2QsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDN0IsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ2xDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUMvQixJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUN0QyxJQUFJLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDbEU7aUJBQU07Z0JBQ0wsSUFBSSxJQUFJLGtCQUFrQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQzdEO1lBQ0QsS0FBSyxJQUFJLENBQUMsQ0FBQztTQUNaO1FBRUQsTUFBTSxXQUFXLEdBQThCLEVBQUUsQ0FBQztRQUNsRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDbEQsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3hCLEtBQUssSUFBSSxDQUFDLENBQUM7WUFDWCxJQUFJLEdBQUcsS0FBSyxTQUFTLElBQUksR0FBRyxLQUFLLElBQUksRUFBRTtnQkFDckMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO2FBQ3ZDO1NBQ0Y7UUFFRCxJQUFJLENBQUMsT0FBTyxHQUFHO1lBQ2IsTUFBTSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTTtZQUN4QixJQUFJLEVBQUUsaUJBQWlCLENBQUMsSUFBSSxFQUFFLFdBQVcsQ0FBQztZQUMxQyxNQUFNLEVBQUUsSUFBSTtZQUNaLE9BQU8sRUFBRSxFQUFFO1NBQ1osQ0FBQztRQUVGLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ2YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUM7U0FDbEM7UUFFRCxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUE3RUQ7O09BRUc7SUFDSCxJQUFXLElBQUksS0FBa0IsT0FBTyxJQUFXLENBQUMsQ0FBQyxDQUFDO0lBRXREOzs7T0FHRztJQUNILE1BQU0sQ0FBQyxNQUFNLENBQUksYUFBZ0M7UUFDL0MsTUFBTSxLQUFLLEdBQUcsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDNUMsTUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUV2QyxNQUFNLEtBQUssR0FBYSxFQUFFLENBQUM7UUFDM0IsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDWixLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO2dCQUNsQyxNQUFNLElBQUksR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUM1QixLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3RCLENBQUMsQ0FBQyxDQUFDO1NBQ0o7UUFFRCxNQUFNLElBQUksR0FBZ0I7WUFDeEIsSUFBSTtZQUNKLEtBQUs7WUFDTCxNQUFNLEVBQUUsYUFBYSxDQUFDLE1BQU07WUFDNUIsTUFBTSxFQUFFLGFBQWEsQ0FBQyxNQUFNO1lBQzVCLE9BQU8sRUFBRSxhQUFhLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDaEQsQ0FBQztRQUVGLE9BQU8sS0FBTSxTQUFRLE9BQU87WUFDMUIsSUFBSSxJQUFJO2dCQUNOLE9BQU8sSUFBSSxDQUFDO1lBQ2QsQ0FBQztTQUNVLENBQUM7SUFDaEIsQ0FBQztJQUVELElBQUksUUFBUTtRQUNWLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxDQUFDLGFBQWUsSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDO0lBQzlHLENBQUM7SUFzREQsWUFBWSxDQUFDLEtBQTJCO1FBQ3RDLElBQUksS0FBSyxLQUFLLFNBQVMsRUFBRTtZQUN2QixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7U0FDM0I7UUFFRCxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztRQUMzQixPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFnQkQsSUFBSSxDQUFDLElBQWE7UUFDaEIsSUFBSSxJQUFJLEtBQUssU0FBUyxFQUFFO1lBQ3RCLE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDdEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsSUFBSSxHQUFHLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDbEksT0FBTyxJQUFJLENBQUM7U0FDYjtRQUVELE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7SUFDM0IsQ0FBQztJQW1CRCxNQUFNLENBQUMsSUFBWSxFQUFFLEtBQXFCO1FBQ3hDLElBQUksS0FBSyxLQUFLLElBQUksRUFBRTtZQUNsQixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2xDLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFFRCxJQUFJLEtBQUssS0FBSyxTQUFTLEVBQUU7WUFDdkIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDO1lBQ25DLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFFRCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSCxNQUFNLENBQUMsSUFBaUIsRUFBRSxJQUFzQjtRQUM5QyxJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUM7UUFDdkIsSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNoQixJQUFJLE9BQU8sSUFBSSxLQUFLLFFBQVEsRUFBRTtnQkFDNUIsSUFBSSwyQkFBMkIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7b0JBQzFDLFdBQVcsR0FBRyxVQUFVLENBQUM7aUJBQzFCO3FCQUFNO29CQUNMLFdBQVcsR0FBRyxNQUFNLENBQUM7aUJBQ3RCO2FBQ0Y7aUJBQU0sSUFBSSxPQUFPLElBQUksS0FBSyxXQUFXLElBQUksSUFBSSxZQUFZLElBQUksRUFBRTtnQkFDOUQsV0FBVyxHQUFHLE1BQU0sQ0FBQzthQUN0QjtpQkFBTSxJQUFJLE9BQU8sTUFBTSxLQUFLLFdBQVcsSUFBSSxJQUFJLFlBQVksTUFBTSxFQUFFO2dCQUNsRSxXQUFXLEdBQUcsUUFBUSxDQUFDO2FBQ3hCO2lCQUFNLElBQUksT0FBTyxXQUFXLEtBQUssV0FBVyxJQUFJLElBQUksWUFBWSxXQUFXLEVBQUU7Z0JBQzVFLFdBQVcsR0FBRyxhQUFhLENBQUM7YUFDN0I7aUJBQU0sSUFBSSxPQUFPLFFBQVEsS0FBSyxXQUFXLElBQUksSUFBSSxZQUFZLFFBQVEsRUFBRTtnQkFDdEUsV0FBVyxHQUFHLE1BQU0sQ0FBQzthQUN0QjtpQkFBTTtnQkFDTCxXQUFXLEdBQUcsTUFBTSxDQUFDO2FBQ3RCO1NBQ0Y7UUFFRCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksR0FBRyxXQUFXLENBQUM7UUFDaEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQzNCLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQWVELFFBQVEsQ0FBQyxRQUF3QjtRQUMvQixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFlRCxhQUFhLENBQUMsYUFBc0I7UUFDbEMsSUFBSSxhQUFhLEtBQUssU0FBUyxFQUFFO1lBQy9CLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsRUFBRSxHQUFHLGFBQWEsRUFBRSxDQUFDLENBQUM7U0FDMUQ7UUFDRCxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBZUQsT0FBTyxDQUFDLElBQTZCO1FBQ25DLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFlRCxXQUFXLENBQUMsSUFBYTtRQUN2QixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBZUQsaUJBQWlCLENBQUMsSUFBVztRQUMzQixnRUFBZ0U7UUFDaEUsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLHFCQUFxQixFQUFFLElBQUksSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQzlGLENBQUM7SUFFRDs7O09BR0c7SUFDSCxPQUFPO1FBQ0wsSUFBSSxDQUFDLHNCQUFzQixFQUFFO1lBQzNCLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsNkRBQTZEO2lCQUMzRSxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyx1REFBdUQ7U0FDN0U7UUFFRCxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMscUJBQXFCLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBZUQsWUFBWSxDQUFDLEtBQWM7UUFDekIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBZUQsR0FBRyxDQUFDLEdBQVM7UUFDWCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFFLEdBQUcsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDL0QsQ0FBQztJQWVELGFBQWEsQ0FBQyxhQUE2QztRQUN6RCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsdUJBQXVCLEVBQUUsYUFBYSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztJQUM5RixDQUFDO0lBZUQsTUFBTSxDQUFDLE1BQWU7UUFDcEIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBZUQsWUFBWSxDQUFDLElBQThCO1FBQ3pDLElBQUksSUFBSSxLQUFLLFNBQVMsRUFBRTtZQUN0QixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztZQUMxQixPQUFPLElBQUksQ0FBQztTQUNiO1FBRUQsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQzVCLENBQUM7SUFlRCxRQUFRLENBQUMsUUFBa0M7UUFDekMsSUFBSSxRQUFRLEtBQUssU0FBUyxFQUFFO1lBQzFCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxRQUFRLENBQUM7WUFDakMsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUVELE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDO0lBQy9CLENBQUM7SUFFRDs7Ozs7OztPQU9HO0lBQ0gsY0FBYyxDQUFDLEtBQXlDO1FBQ3RELElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxHQUFHLGlCQUFpQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ2hFLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVELFVBQVUsQ0FBQyxJQUE2QjtRQUN0QyxJQUFJLElBQUksS0FBSyxJQUFJLElBQUksSUFBSSxLQUFLLFNBQVMsSUFBSSxJQUFJLEtBQUssR0FBRyxFQUFFO1lBQ3ZELE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFFRCxJQUFJLEdBQUcsR0FBRyxHQUFHLElBQUksRUFBRSxDQUFDO1FBQ3BCLElBQUksR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtZQUMzQixHQUFHLEdBQUcsSUFBSSxHQUFHLEdBQUcsQ0FBQztTQUNsQjtRQUNELE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxTQUFTLENBQUMsUUFBa0I7UUFDMUIsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO1lBQ3BELE1BQU0sSUFBSSxrQkFBa0IsQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7U0FDOUM7SUFDSCxDQUFDOztBQTNjZSxrQkFBVSxHQUFHLFVBQVUsQ0FBQztBQUV4QixjQUFNLEdBQUc7SUFDdkIsSUFBSSxFQUFFLElBQUk7SUFDVixNQUFNLEVBQUUsSUFBSTtJQUNaLE1BQU0sRUFBRSxJQUFJO0lBQ1osV0FBVyxFQUFFLElBQUk7SUFDakIsVUFBVSxFQUFFLElBQUk7SUFDaEIsTUFBTSxFQUFFLElBQUk7Q0FDYixDQUFDO0FBcWNKLE1BQU0sT0FBTyxZQUFhLFNBQVEsT0FBTztJQUN2QyxJQUFJLElBQUk7UUFDTixPQUFPO1lBQ0wsTUFBTSxFQUFFLE9BQU87WUFDZixPQUFPLEVBQUUsS0FBSztZQUNkLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQztZQUNWLEtBQUssRUFBRSxFQUFFO1lBQ1QsTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDO1NBQ2QsQ0FBQztJQUNKLENBQUM7Q0FDRiJ9

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EntityManagerFactory; });
/* harmony import */ var _EntityManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _connector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var _intersection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1);
/* harmony import */ var _metamodel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6);






const CONNECTED = Symbol('Connected');
const WS = Symbol('WebSocket');
class EntityManagerFactory extends _util__WEBPACK_IMPORTED_MODULE_3__["Lockable"] {
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
    constructor(options = {}) {
        super();
        this.connection = null;
        this.metamodel = this.createMetamodel();
        this.code = new _intersection__WEBPACK_IMPORTED_MODULE_4__["Code"](this.metamodel, this);
        this.tokenStorageFactory = _intersection__WEBPACK_IMPORTED_MODULE_4__["TokenStorage"].WEB_STORAGE || _intersection__WEBPACK_IMPORTED_MODULE_4__["TokenStorage"].GLOBAL;
        this.tokenStorage = null;
        this.staleness = null;
        const opt = typeof options === 'string' ? { host: options } : options || {};
        this.configure(opt);
        let isReady = true;
        let ready = new Promise((success) => {
            this[CONNECTED] = success;
        });
        if (opt.host) {
            this.connect(opt.host, opt.port, opt.secure, opt.basePath);
        }
        else {
            isReady = false;
        }
        if (!this.tokenStorage) {
            isReady = false;
            ready = ready
                .then(() => this.tokenStorageFactory.create(this.connection.origin))
                .then((tokenStorage) => {
                this.tokenStorage = tokenStorage;
            });
        }
        if (opt.schema) {
            this.connectData = opt;
            this.metamodel.init(opt.schema);
        }
        else {
            isReady = false;
            ready = ready.then(() => {
                const msg = new _message__WEBPACK_IMPORTED_MODULE_1__["Connect"]();
                msg.withCredentials = true; // used for registered devices
                if (this.staleness === 0) {
                    msg.noCache();
                }
                return this.send(msg);
            }).then((response) => {
                this.connectData = response.entity;
                if (this.staleness === null) {
                    this.staleness = this.connectData.bloomFilterRefresh || 60;
                }
                if (!this.metamodel.isInitialized) {
                    this.metamodel.init(this.connectData.schema);
                }
                this.tokenStorage.update(this.connectData.token);
            });
        }
        if (!isReady) {
            this.withLock(() => ready, true);
        }
    }
    /**
     * Retrieves the websocket connection if the websocket SDK is available
     */
    get websocket() {
        if (!this[WS]) {
            const { secure } = this.connection;
            let url;
            if (this.connectData.websocket) {
                url = (secure ? 'wss:' : 'ws:') + this.connectData.websocket;
            }
            else {
                url = `${this.connection.origin.replace(/^http/, 'ws') + this.connection.basePath}/events`;
            }
            this[WS] = _connector__WEBPACK_IMPORTED_MODULE_2__["WebSocketConnector"].create(url);
        }
        return this[WS];
    }
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
    configure(options) {
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
    }
    connect(hostOrApp, port, secure, basePath) {
        if (this.connection) {
            throw new Error('The EntityManagerFactory is already connected.');
        }
        if (typeof port === 'boolean') {
            return this.connect(hostOrApp, 0, port, secure);
        }
        this.connection = _connector__WEBPACK_IMPORTED_MODULE_2__["Connector"].create(hostOrApp, port, secure, basePath);
        this[CONNECTED]();
        return this.ready();
    }
    /**
     * Creates a new Metamodel instance, which is not connected
     * @return A new Metamodel instance
     */
    createMetamodel() {
        return new _metamodel__WEBPACK_IMPORTED_MODULE_5__["Metamodel"](this);
    }
    /**
     * Create a new application-managed EntityManager.
     *
     * @param useSharedTokenStorage The token storage to persist the authorization token, or
     * <code>true</code> To use the shared token storage of the emf.
     * <code>false</code> To use a instance based storage.
     *
     * @return a new entityManager
     */
    createEntityManager(useSharedTokenStorage) {
        const em = new _EntityManager__WEBPACK_IMPORTED_MODULE_0__[/* EntityManager */ "a"](this);
        if (this.isReady) {
            em.connected(this.connection, this.connectData, useSharedTokenStorage ? this.tokenStorage : new _intersection__WEBPACK_IMPORTED_MODULE_4__["TokenStorage"](this.connection.origin));
        }
        else {
            em.withLock(() => this.ready().then(() => {
                em.connected(this.connection, this.connectData, useSharedTokenStorage ? this.tokenStorage : new _intersection__WEBPACK_IMPORTED_MODULE_4__["TokenStorage"](this.connection.origin));
            }), true);
        }
        return em;
    }
    send(msg) {
        if (!msg.tokenStorage()) {
            msg.tokenStorage(this.tokenStorage);
        }
        return this.connection.send(msg);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRW50aXR5TWFuYWdlckZhY3RvcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJFbnRpdHlNYW5hZ2VyRmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDaEQsT0FBTyxLQUFLLE9BQU8sTUFBTSxXQUFXLENBQUM7QUFDckMsT0FBTyxFQUNMLFNBQVMsRUFBcUIsa0JBQWtCLEdBQ2pELE1BQU0sYUFBYSxDQUFDO0FBQ3JCLE9BQU8sRUFBVyxRQUFRLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDM0MsT0FBTyxFQUFFLFlBQVksRUFBdUIsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDekUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUV4QyxNQUFNLFNBQVMsR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDdEMsTUFBTSxFQUFFLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBWS9CLE1BQU0sT0FBTyxvQkFBcUIsU0FBUSxRQUFRO0lBb0NoRDs7Ozs7Ozs7Ozs7OztPQWFHO0lBQ0gsWUFBWSxVQVNDLEVBQUU7UUFDYixLQUFLLEVBQUUsQ0FBQztRQTNESCxlQUFVLEdBQXFCLElBQUksQ0FBQztRQUVwQyxjQUFTLEdBQWMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBRTlDLFNBQUksR0FBUyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRTVDLHdCQUFtQixHQUF3QixZQUFZLENBQUMsV0FBVyxJQUFJLFlBQVksQ0FBQyxNQUFNLENBQUM7UUFFM0YsaUJBQVksR0FBd0IsSUFBSSxDQUFDO1FBRXpDLGNBQVMsR0FBa0IsSUFBSSxDQUFDO1FBbURyQyxNQUFNLEdBQUcsR0FBRyxPQUFPLE9BQU8sS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLElBQUksRUFBRSxDQUFDO1FBRTVFLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFcEIsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ25CLElBQUksS0FBSyxHQUFHLElBQUksT0FBTyxDQUFPLENBQUMsT0FBTyxFQUFFLEVBQUU7WUFDeEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLE9BQU8sQ0FBQztRQUM1QixDQUFDLENBQUMsQ0FBQztRQUVILElBQUksR0FBRyxDQUFDLElBQUksRUFBRTtZQUNaLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQzVEO2FBQU07WUFDTCxPQUFPLEdBQUcsS0FBSyxDQUFDO1NBQ2pCO1FBRUQsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDdEIsT0FBTyxHQUFHLEtBQUssQ0FBQztZQUNoQixLQUFLLEdBQUcsS0FBSztpQkFDVixJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2lCQUNwRSxJQUFJLENBQUMsQ0FBQyxZQUFZLEVBQUUsRUFBRTtnQkFDckIsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7WUFDbkMsQ0FBQyxDQUFDLENBQUM7U0FDTjtRQUVELElBQUksR0FBRyxDQUFDLE1BQU0sRUFBRTtZQUNkLElBQUksQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNqQzthQUFNO1lBQ0wsT0FBTyxHQUFHLEtBQUssQ0FBQztZQUNoQixLQUFLLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUU7Z0JBQ3RCLE1BQU0sR0FBRyxHQUFHLElBQUksT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUNsQyxHQUFHLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxDQUFDLDhCQUE4QjtnQkFFMUQsSUFBSSxJQUFJLENBQUMsU0FBUyxLQUFLLENBQUMsRUFBRTtvQkFDeEIsR0FBRyxDQUFDLE9BQU8sRUFBRSxDQUFDO2lCQUNmO2dCQUVELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN4QixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFrQixFQUFFLEVBQUU7Z0JBQzdCLElBQUksQ0FBQyxXQUFXLEdBQUcsUUFBUSxDQUFDLE1BQWlCLENBQUM7Z0JBRTlDLElBQUksSUFBSSxDQUFDLFNBQVMsS0FBSyxJQUFJLEVBQUU7b0JBQzNCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsSUFBSSxFQUFFLENBQUM7aUJBQzVEO2dCQUVELElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsRUFBRTtvQkFDakMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztpQkFDOUM7Z0JBRUQsSUFBSSxDQUFDLFlBQWEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFzQixDQUFDLENBQUM7WUFDckUsQ0FBQyxDQUFDLENBQUM7U0FDSjtRQUVELElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDWixJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztTQUNsQztJQUNILENBQUM7SUFuR0Q7O09BRUc7SUFDSCxJQUFJLFNBQVM7UUFDWCxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFO1lBQ2IsTUFBTSxFQUFFLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxVQUFXLENBQUM7WUFDcEMsSUFBSSxHQUFHLENBQUM7WUFDUixJQUFJLElBQUksQ0FBQyxXQUFZLENBQUMsU0FBUyxFQUFFO2dCQUMvQixHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVksQ0FBQyxTQUFTLENBQUM7YUFDL0Q7aUJBQU07Z0JBQ0wsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLFVBQVcsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVyxDQUFDLFFBQVEsU0FBUyxDQUFDO2FBQzlGO1lBQ0QsSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUMzQztRQUNELE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBRyxDQUFDO0lBQ3BCLENBQUM7SUFzRkQ7Ozs7Ozs7OztPQVNHO0lBQ0gsU0FBUyxDQUFDLE9BQ1k7UUFDcEIsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ25CLE1BQU0sSUFBSSxLQUFLLENBQUMseUVBQXlFLENBQUMsQ0FBQztTQUM1RjtRQUVELElBQUksT0FBTyxDQUFDLFlBQVksRUFBRTtZQUN4QixJQUFJLENBQUMsWUFBWSxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUM7U0FDMUM7UUFFRCxJQUFJLE9BQU8sQ0FBQyxtQkFBbUIsRUFBRTtZQUMvQixJQUFJLENBQUMsbUJBQW1CLEdBQUcsT0FBTyxDQUFDLG1CQUFtQixDQUFDO1NBQ3hEO1FBRUQsSUFBSSxPQUFPLENBQUMsU0FBUyxLQUFLLFNBQVMsRUFBRTtZQUNuQyxJQUFJLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUM7U0FDcEM7SUFDSCxDQUFDO0lBcUJELE9BQU8sQ0FBQyxTQUFpQixFQUFFLElBQW1DLEVBQUUsTUFBcUMsRUFDbkcsUUFBNkI7UUFDN0IsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ25CLE1BQU0sSUFBSSxLQUFLLENBQUMsZ0RBQWdELENBQUMsQ0FBQztTQUNuRTtRQUVELElBQUksT0FBTyxJQUFJLEtBQUssU0FBUyxFQUFFO1lBQzdCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxNQUFnQixDQUFDLENBQUM7U0FDM0Q7UUFFRCxJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLElBQUksRUFBRSxNQUFpQixFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBRWpGLElBQUksQ0FBQyxTQUFTLENBQUcsRUFBRSxDQUFDO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFRDs7O09BR0c7SUFDSCxlQUFlO1FBQ2IsT0FBTyxJQUFJLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRUQ7Ozs7Ozs7O09BUUc7SUFDSCxtQkFBbUIsQ0FBQyxxQkFBK0I7UUFDakQsTUFBTSxFQUFFLEdBQUcsSUFBSSxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFbkMsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2hCLEVBQUUsQ0FBQyxTQUFTLENBQ1YsSUFBSSxDQUFDLFVBQVcsRUFDaEIsSUFBSSxDQUFDLFdBQVksRUFDakIscUJBQXFCLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksWUFBWSxDQUFDLElBQUksQ0FBQyxVQUFXLENBQUMsTUFBTSxDQUFDLENBQ3ZGLENBQUM7U0FDSDthQUFNO1lBQ0wsRUFBRSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRTtnQkFDdkMsRUFBRSxDQUFDLFNBQVMsQ0FDVixJQUFJLENBQUMsVUFBVyxFQUNoQixJQUFJLENBQUMsV0FBWSxFQUNqQixxQkFBcUIsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxZQUFZLENBQUMsSUFBSSxDQUFDLFVBQVcsQ0FBQyxNQUFNLENBQUMsQ0FDdkYsQ0FBQztZQUNKLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQ1g7UUFFRCxPQUFPLEVBQUUsQ0FBQztJQUNaLENBQUM7SUFFRCxJQUFJLENBQUMsR0FBWTtRQUNmLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLEVBQUU7WUFDdkIsR0FBRyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDckM7UUFDRCxPQUFPLElBQUksQ0FBQyxVQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7Q0FDRiJ9

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "Builder", function() { return /* reexport */ Builder_Builder; });
__webpack_require__.d(__webpack_exports__, "Condition", function() { return /* reexport */ Condition; });
__webpack_require__.d(__webpack_exports__, "Filter", function() { return /* reexport */ Filter_Filter; });
__webpack_require__.d(__webpack_exports__, "Node", function() { return /* reexport */ Node_Node; });
__webpack_require__.d(__webpack_exports__, "Operator", function() { return /* reexport */ Operator_Operator; });
__webpack_require__.d(__webpack_exports__, "flatArgs", function() { return /* reexport */ flatArgs; });
__webpack_require__.d(__webpack_exports__, "Query", function() { return /* reexport */ Query; });
__webpack_require__.d(__webpack_exports__, "Stream", function() { return /* reexport */ Stream_Stream; });

// EXTERNAL MODULE: ./lib/binding/index.ts + 14 modules
var binding = __webpack_require__(3);

// CONCATENATED MODULE: ./lib/query/Query.ts
/**
 * An abstract Query which allows retrieving results
 */
class Query {
    /**
     * @param entityManager - The owning EntityManager of this query
     * @param resultClass - The result class of this query
     */
    constructor(entityManager, resultClass) {
        this.entityManager = entityManager;
        this.resultClass = resultClass;
    }
    /**
     * Add an ascending sort for the specified field to this query
     * @param field The field to sort
     * @return The resulting Query
     */
    ascending(field) {
        return this.addOrder(field, 1);
    }
    /**
     * Add an decending sort for the specified field to this query
     * @param field The field to sort
     * @return The resulting Query
     */
    descending(field) {
        return this.addOrder(field, -1);
    }
    /**
     * Sets the sort of the query and discard all existing paramaters
     * @param sort The new sort of the query which is an object whose keys are fields and the
     * values are either +1 for ascending order or -1 for descending order
     * @return The resulting Query
     *
     * @see http://docs.mongodb.org/manual/reference/method/cursor.sort/
     */
    sort(sort) {
        if (typeof sort !== 'object' || Object.getPrototypeOf(sort) !== Object.prototype) {
            throw new Error('sort must be an object.');
        }
        return this.addOrder(sort);
    }
    /**
     * Sets the offset of the query, i.e. how many elements should be skipped
     * @param offset The offset of this query
     * @return The resulting Query
     *
     * @see http://docs.mongodb.org/manual/reference/method/cursor.skip/
     */
    offset(offset) {
        if (offset < 0) {
            throw new Error('The offset can\'t be nagative.');
        }
        return this.addOffset(offset);
    }
    /**
     * Sets the limit of this query, i.e hox many objects should be returnd
     * @param limit The limit of this query
     * @return The resulting Query
     *
     * @see http://docs.mongodb.org/manual/reference/method/cursor.limit/
     */
    limit(limit) {
        if (limit < 0) {
            throw new Error('The limit can\'t be nagative.');
        }
        return this.addLimit(limit);
    }
}
Query.MAX_URI_SIZE = 2000;
function flatArgs(args) {
    return Array.prototype.concat.apply([], args);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUXVlcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJRdWVyeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFRQTs7R0FFRztBQUNILE1BQU0sT0FBZ0IsS0FBSztJQUd6Qjs7O09BR0c7SUFDSCxZQUNrQixhQUE0QixFQUM1QixXQUFxQjtRQURyQixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixnQkFBVyxHQUFYLFdBQVcsQ0FBVTtJQUNwQyxDQUFDO0lBRUo7Ozs7T0FJRztJQUNILFNBQVMsQ0FBQyxLQUFhO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxVQUFVLENBQUMsS0FBYTtRQUN0QixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVEOzs7Ozs7O09BT0c7SUFDSCxJQUFJLENBQUMsSUFBaUM7UUFDcEMsSUFBSSxPQUFPLElBQUksS0FBSyxRQUFRLElBQUksTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxNQUFNLENBQUMsU0FBUyxFQUFFO1lBQ2hGLE1BQU0sSUFBSSxLQUFLLENBQUMseUJBQXlCLENBQUMsQ0FBQztTQUM1QztRQUVELE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0gsTUFBTSxDQUFDLE1BQWM7UUFDbkIsSUFBSSxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ2QsTUFBTSxJQUFJLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1NBQ25EO1FBRUQsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSCxLQUFLLENBQUMsS0FBYTtRQUNqQixJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUU7WUFDYixNQUFNLElBQUksS0FBSyxDQUFDLCtCQUErQixDQUFDLENBQUM7U0FDbEQ7UUFFRCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7QUF6RXNCLGtCQUFZLEdBQUcsSUFBSSxDQUFDO0FBMlE3QyxNQUFNLFVBQVUsUUFBUSxDQUFDLElBQVc7SUFDbEMsT0FBTyxLQUFLLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ2hELENBQUMifQ==
// EXTERNAL MODULE: ./lib/message.ts
var message = __webpack_require__(2);

// EXTERNAL MODULE: ./lib/intersection/index.ts + 10 modules
var intersection = __webpack_require__(1);

// EXTERNAL MODULE: ./lib/util/observable.ts
var util_observable = __webpack_require__(17);

// EXTERNAL MODULE: ./lib/util/index.ts + 13 modules
var util = __webpack_require__(4);

// CONCATENATED MODULE: ./lib/query/Stream.ts
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};



class Stream_Stream {
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
    static createEventStream(entityManager, query, options) {
        const opt = options || {};
        opt.reconnects = 0;
        return Stream_Stream.streamObservable(entityManager, query, opt, (msg, next) => {
            const { type } = msg, eventProps = __rest(msg, ["type"]);
            if (msg.type === 'result') {
                msg.data.forEach((obj, index) => {
                    const event = Object.assign(Object.assign(Object.assign({ matchType: 'add', operation: 'none', initial: true }, eventProps), { data: Stream_Stream.resolveObject(entityManager, obj) }), (query.sort && { index }));
                    next(event);
                });
            }
            if (msg.type === 'match') {
                next(Object.assign(Object.assign({ initial: false }, eventProps), { data: Stream_Stream.resolveObject(entityManager, msg.data) }));
            }
        });
    }
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
    static createResultStream(entityManager, query, options) {
        const opt = options || {};
        opt.initial = true;
        opt.matchTypes = 'all';
        opt.operations = 'any';
        let result;
        const ordered = !!query.sort;
        return Stream_Stream.streamObservable(entityManager, query, opt, (event, next) => {
            if (event.type === 'result') {
                result = event.data.map((obj) => Stream_Stream.resolveObject(entityManager, obj));
                next(result.slice());
            }
            if (event.type === 'match') {
                const obj = Stream_Stream.resolveObject(entityManager, event.data);
                if (event.matchType === 'remove' || event.matchType === 'changeIndex') {
                    // if we have removed the instance our self, we do not have the cached instances anymore
                    // therefore we can't find it anymore in the result by identity
                    for (let i = 0, len = result.length; i < len; i += 1) {
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
    }
    static streamObservable(entityManager, query, options, mapper) {
        const opt = Stream_Stream.parseOptions(options);
        const socket = entityManager.entityManagerFactory.websocket;
        const observable = new util_observable["a" /* Observable */]((subscriber) => {
            const id = Object(util["uuid"])();
            const stream = socket.openStream(entityManager.tokenStorage, id);
            stream.send(Object.assign(Object.assign({ type: 'subscribe' }, query), opt));
            let closed = false;
            const next = subscriber.next.bind(subscriber);
            const subscription = stream.subscribe({
                complete() {
                    closed = true;
                    subscriber.complete();
                },
                error(e) {
                    closed = true;
                    subscriber.error(e);
                },
                next(msg) {
                    mapper(msg, next);
                },
            });
            return () => {
                if (!closed) { // send unsubscribe only when we aren't completed by the socket and call it only once
                    stream.send({ type: 'unsubscribe' });
                    subscription.unsubscribe();
                    closed = true;
                }
            };
        });
        return Stream_Stream.cachedObservable(observable, opt);
    }
    static cachedObservable(observable, options) {
        let subscription = null;
        const observers = [];
        return new util_observable["a" /* Observable */]((observer) => {
            if (!subscription) {
                let remainingRetries = options.reconnects;
                let backoff = 1;
                const subscriptionObserver = {
                    next(msg) {
                        // reset the backoff if we get a message
                        backoff = 1;
                        observers.forEach((o) => o.next(msg));
                    },
                    error(e) {
                        observers.forEach((o) => o.error(e));
                    },
                    complete() {
                        if (remainingRetries !== 0) {
                            remainingRetries = remainingRetries < 0 ? -1 : remainingRetries - 1;
                            setTimeout(() => {
                                subscription = observable.subscribe(subscriptionObserver);
                            }, backoff * 1000);
                            backoff *= 2;
                        }
                        else {
                            observers.forEach((o) => o.complete());
                        }
                    },
                };
                subscription = observable.subscribe(subscriptionObserver);
            }
            observers.push(observer);
            return () => {
                observers.splice(observers.indexOf(observer), 1);
                if (!observers.length && subscription) {
                    subscription.unsubscribe();
                    subscription = null;
                }
            };
        });
    }
    /**
     * Parses the StreamOptions
     *
     * @param [options] object containing partial options
     * @returns an object containing VALID options
     */
    static parseOptions(options) {
        const opt = options || {};
        const verified = {
            initial: opt.initial === undefined || !!opt.initial,
            matchTypes: Stream_Stream.normalizeMatchTypes(opt.matchTypes),
            operations: Stream_Stream.normalizeOperations(opt.operations),
            reconnects: Stream_Stream.normalizeReconnects(opt.reconnects),
        };
        if (verified.matchTypes.indexOf('all') === -1 && verified.operations.indexOf('any') === -1) {
            throw new Error('Only subscriptions for either operations or matchTypes are allowed. You cannot subscribe to a query using matchTypes and operations at the same time!');
        }
        return verified;
    }
    static normalizeMatchTypes(list) {
        return Stream_Stream.normalizeSortedSet(list, 'all', 'match types', ['add', 'change', 'changeIndex', 'match', 'remove']);
    }
    static normalizeReconnects(reconnects) {
        if (reconnects === undefined) {
            return -1;
        }
        return reconnects < 0 ? -1 : Number(reconnects);
    }
    static normalizeOperations(list) {
        return Stream_Stream.normalizeSortedSet(list, 'any', 'operations', ['delete', 'insert', 'none', 'update']);
    }
    static normalizeSortedSet(list, wildcard, itemType, allowedItems) {
        if (!list) {
            return [wildcard];
        }
        const li = Array.isArray(list) ? list : [list];
        if (li.length === 0) { // undefined or empty list --> default value
            return [wildcard];
        }
        // sort, remove duplicates and check whether all values are allowed
        li.sort();
        let item;
        let lastItem = null;
        for (let i = li.length - 1; i >= 0; i -= 1) {
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
                throw new Error(`${item} not allowed for ${itemType}! (permitted: ${allowedItems}.)`);
            }
            lastItem = item;
        }
        return li;
    }
    static resolveObject(entityManager, object) {
        const entity = entityManager.getReference(object.id);
        const metadata = intersection["Metadata"].get(entity);
        if (!object.version) {
            metadata.setRemoved();
            entityManager.removeReference(entity);
        }
        else if (entity.version <= object.version) {
            metadata.type.fromJsonValue(metadata, object, entity, { persisting: true });
        }
        return entity;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RyZWFtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiU3RyZWFtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBNEIsTUFBTSxvQkFBb0IsQ0FBQztBQUMxRSxPQUFPLEVBQUUsSUFBSSxFQUFXLE1BQU0sU0FBUyxDQUFDO0FBTXhDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQThEM0MsTUFBTSxPQUFPLE1BQU07SUFDakI7Ozs7Ozs7Ozs7Ozs7T0FhRztJQUNILE1BQU0sQ0FBQyxpQkFBaUIsQ0FBbUIsYUFBNEIsRUFBRSxLQUFjLEVBQ3JGLE9BQTRCO1FBQzVCLE1BQU0sR0FBRyxHQUFHLE9BQU8sSUFBSSxFQUFFLENBQUM7UUFDMUIsR0FBRyxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7UUFDbkIsT0FBTyxNQUFNLENBQUMsZ0JBQWdCLENBQW1CLGFBQWEsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxFQUFFO1lBQ3hGLE1BQU0sRUFBRSxJQUFJLEtBQW9CLEdBQUcsRUFBbEIsVUFBVSxVQUFLLEdBQUcsRUFBN0IsUUFBdUIsQ0FBTSxDQUFDO1lBRXBDLElBQUksR0FBRyxDQUFDLElBQUksS0FBSyxRQUFRLEVBQUU7Z0JBQ3pCLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxFQUFFO29CQUM5QixNQUFNLEtBQUssK0NBQ1QsU0FBUyxFQUFFLEtBQUssRUFDaEIsU0FBUyxFQUFFLE1BQU0sRUFDakIsT0FBTyxFQUFFLElBQUksSUFDVixVQUFVLEtBQ2IsSUFBSSxFQUFFLE1BQU0sQ0FBQyxhQUFhLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxLQUMzQyxDQUFDLEtBQUssQ0FBQyxJQUFJLElBQUksRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUM3QixDQUFDO29CQUVG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
// CONCATENATED MODULE: ./lib/query/Node.ts





/**
 * A Query Node saves the state of the query being built
 */
class Node_Node extends Query {
    constructor() {
        super(...arguments);
        /**
         * The offset how many results should be skipped
         */
        this.firstResult = 0;
        /**
         * The limit how many objects should be returned
         * @type number
         * @readonly
         */
        this.maxResults = -1;
        /**
         * The properties which should be used sort the result
         */
        this.order = {};
    }
    eventStream(options, onNext, onError, onComplete) {
        if (options instanceof Function) {
            return this.eventStream({}, options, onNext, onError);
        }
        const observable = Stream_Stream.createEventStream(this.entityManager, this.createRealTimeQuery(), options);
        if (onNext instanceof Function) {
            return observable.subscribe(onNext, onError, onComplete);
        }
        return observable;
    }
    resultStream(options, onNext, onError, onComplete) {
        if (options instanceof Function) {
            return this.resultStream({}, options, onNext, onError);
        }
        const observable = Stream_Stream.createResultStream(this.entityManager, this.createRealTimeQuery(), options);
        if (onNext instanceof Function) {
            return observable.subscribe(onNext, onError, onComplete);
        }
        return observable;
    }
    /**
     * @inheritDoc
     */
    resultList(options, doneCallback, failCallback) {
        var _a;
        if (options instanceof Function) {
            return this.resultList({}, options, doneCallback);
        }
        const type = this.resultClass ? this.entityManager.metamodel.entity(this.resultClass) : null;
        if (!type) {
            throw new Error('Only typed queries can be executed.');
        }
        const query = this.serializeQuery();
        const sort = this.serializeSort();
        const uriSize = (((_a = this.entityManager.connection) === null || _a === void 0 ? void 0 : _a.host.length) || 0) + query.length + sort.length;
        let msg;
        if (uriSize > Query.MAX_URI_SIZE) {
            msg = new message["AdhocQueryPOST"](type.name, this.firstResult, this.maxResults, sort)
                .entity(query, 'text');
        }
        else {
            msg = new message["AdhocQuery"](type.name, query, this.firstResult, this.maxResults, sort);
        }
        return this.entityManager.send(msg)
            .then((response) => this.createResultList(response.entity, options))
            .then(doneCallback, failCallback);
    }
    /**
     * @inheritDoc
     */
    singleResult(options, doneCallback, failCallback) {
        var _a;
        if (options instanceof Function) {
            return this.singleResult({}, options, doneCallback);
        }
        const type = this.resultClass ? this.entityManager.metamodel.entity(this.resultClass) : null;
        if (!type) {
            throw new Error('Only typed queries can be executed.');
        }
        const query = this.serializeQuery();
        const sort = this.serializeSort();
        const uriSize = (((_a = this.entityManager.connection) === null || _a === void 0 ? void 0 : _a.host.length) || 0) + query.length;
        let msg;
        if (uriSize > Query.MAX_URI_SIZE) {
            msg = new message["AdhocQueryPOST"](type.name, this.firstResult, 1, sort)
                .entity(query, 'text');
        }
        else {
            msg = new message["AdhocQuery"](type.name, query, this.firstResult, 1, sort);
        }
        return this.entityManager.send(msg)
            .then((response) => this.createResultList(response.entity, options))
            .then((list) => (list.length ? list[0] : null))
            .then(doneCallback, failCallback);
    }
    /**
     * @inheritDoc
     */
    count(doneCallback, failCallback) {
        var _a;
        const type = this.resultClass ? this.entityManager.metamodel.entity(this.resultClass) : null;
        if (!type) {
            throw new Error('Only typed queries can be executed.');
        }
        const query = this.serializeQuery();
        const uriSize = (((_a = this.entityManager.connection) === null || _a === void 0 ? void 0 : _a.host.length) || 0) + query.length;
        let msg;
        if (uriSize > Query.MAX_URI_SIZE) {
            msg = new message["AdhocCountQueryPOST"](type.name)
                .entity(query, 'text');
        }
        else {
            msg = new message["AdhocCountQuery"](type.name, query);
        }
        return this.entityManager.send(msg)
            .then((response) => response.entity.count)
            .then(doneCallback, failCallback);
    }
    serializeQuery() {
        return JSON.stringify(this, function argSerializer(k, v) {
            // this referees here to the object which owns the key k
            const typedValue = this[k];
            if (typedValue instanceof Date) {
                return { $date: v };
            }
            if (typedValue instanceof binding["Entity"]) {
                return typedValue.id;
            }
            return v;
        });
    }
    serializeSort() {
        return JSON.stringify(this.order);
    }
    createResultList(result, options) {
        if (result.length) {
            return Promise.all(result.map((el) => {
                if (el.id) {
                    const entity = this.entityManager.getReference(this.resultClass, el.id);
                    const metadata = intersection["Metadata"].get(entity);
                    metadata.type.fromJsonValue(metadata, el, entity, { persisting: true });
                    return this.entityManager.resolveDepth(entity, options);
                }
                return this.entityManager.load(Object.keys(el)[0]);
            }))
                .then((objects) => objects.filter((val) => !!val));
        }
        return Promise.resolve([]);
    }
    createRealTimeQuery() {
        const type = this.resultClass ? this.entityManager.metamodel.entity(this.resultClass) : null;
        if (!type) {
            throw new Error('Only typed queries can be executed.');
        }
        const query = {
            bucket: type.name,
            query: this.serializeQuery(),
        };
        const sort = this.serializeSort();
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
    }
    addOrder(fieldOrSort, order) {
        if (typeof fieldOrSort === 'string') {
            this.order[fieldOrSort] = order;
        }
        else {
            this.order = fieldOrSort;
        }
        return this;
    }
    addOffset(offset) {
        this.firstResult = offset;
        return this;
    }
    addLimit(limit) {
        this.maxResults = limit;
        return this;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTm9kZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIk5vZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLFlBQVksQ0FBQztBQUdwQyxPQUFPLEVBT0wsS0FBSyxHQUtOLE1BQU0sU0FBUyxDQUFDO0FBQ2pCLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxDQUFDO0FBR3RDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBRWxDOztHQUVHO0FBQ0gsTUFBTSxPQUFPLElBQXVCLFNBQVEsS0FBUTtJQUFwRDs7UUFDRTs7V0FFRztRQUNJLGdCQUFXLEdBQVcsQ0FBQyxDQUFDO1FBRS9COzs7O1dBSUc7UUFDSSxlQUFVLEdBQVcsQ0FBQyxDQUFDLENBQUM7UUFFL0I7O1dBRUc7UUFDSSxVQUFLLEdBQWdDLEVBQUUsQ0FBQztJQXFOakQsQ0FBQztJQWhOQyxXQUFXLENBQUMsT0FBbUQsRUFBRSxNQUE0QyxFQUMzRyxPQUF5QyxFQUFFLFVBQTZCO1FBRXhFLElBQUksT0FBTyxZQUFZLFFBQVEsRUFBRTtZQUMvQixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxFQUFFLE9BQStCLEVBQUUsTUFBc0IsRUFBRSxPQUEyQixDQUFDLENBQUM7U0FDbkg7UUFFRCxNQUFNLFVBQVUsR0FBRyxNQUFNLENBQUMsaUJBQWlCLENBQUksSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsbUJBQW1CLEVBQUUsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUV4RyxJQUFJLE1BQU0sWUFBWSxRQUFRLEVBQUU7WUFDOUIsT0FBTyxVQUFVLENBQUMsU0FBUyxDQUFDLE1BQThCLEVBQUUsT0FBTyxFQUFFLFVBQVUsQ0FBQyxDQUFDO1NBQ2xGO1FBRUQsT0FBTyxVQUFVLENBQUM7SUFDcEIsQ0FBQztJQUtELFlBQVksQ0FBQyxP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
// CONCATENATED MODULE: ./lib/query/Condition.ts

// eslint-disable-next-line @typescript-eslint/no-redeclare
const Condition = {
    where(conditions) {
        return this.addFilter(null, null, conditions);
    },
    equal(field, value) {
        return this.addFilter(field, null, value);
    },
    notEqual(field, value) {
        return this.addFilter(field, '$ne', value);
    },
    greaterThan(field, value) {
        return this.addFilter(field, '$gt', value);
    },
    greaterThanOrEqualTo(field, value) {
        return this.addFilter(field, '$gte', value);
    },
    lessThan(field, value) {
        return this.addFilter(field, '$lt', value);
    },
    lessThanOrEqualTo(field, value) {
        return this.addFilter(field, '$lte', value);
    },
    between(field, greaterValue, lessValue) {
        return this
            .addFilter(field, '$gt', greaterValue)
            .addFilter(field, '$lt', lessValue);
    },
    in(field, ...args) {
        return this.addFilter(field, '$in', flatArgs(args));
    },
    notIn(field, ...args) {
        return this.addFilter(field, '$nin', flatArgs(args));
    },
    isNull(field) {
        return this.equal(field, null);
    },
    isNotNull(field) {
        return this.addFilter(field, '$exists', true)
            .addFilter(field, '$ne', null);
    },
    containsAll(field, ...args) {
        return this.addFilter(field, '$all', flatArgs(args));
    },
    mod(field, divisor, remainder) {
        return this.addFilter(field, '$mod', [divisor, remainder]);
    },
    matches(field, regExp) {
        const reg = regExp instanceof RegExp ? regExp : new RegExp(regExp);
        if (reg.ignoreCase) {
            throw new Error('RegExp.ignoreCase flag is not supported.');
        }
        if (reg.global) {
            throw new Error('RegExp.global flag is not supported.');
        }
        if (reg.source.indexOf('^') !== 0) {
            throw new Error('regExp must be an anchored expression, i.e. it must be started with a ^.');
        }
        const result = this.addFilter(field, '$regex', reg.source);
        if (reg.multiline) {
            result.addFilter(field, '$options', 'm');
        }
        return result;
    },
    size(field, size) {
        return this.addFilter(field, '$size', size);
    },
    near(field, geoPoint, maxDistance) {
        return this.addFilter(field, '$nearSphere', {
            $geometry: {
                type: 'Point',
                coordinates: [geoPoint.longitude, geoPoint.latitude],
            },
            $maxDistance: maxDistance,
        });
    },
    withinPolygon(field, ...args) {
        const geoPoints = flatArgs(args);
        return this.addFilter(field, '$geoWithin', {
            $geometry: {
                type: 'Polygon',
                coordinates: [geoPoints.map((geoPoint) => [geoPoint.longitude, geoPoint.latitude])],
            },
        });
    },
};
// aliases
Object.assign(Condition, {
    eq: Condition.equal,
    ne: Condition.notEqual,
    lt: Condition.lessThan,
    le: Condition.lessThanOrEqualTo,
    gt: Condition.greaterThan,
    ge: Condition.greaterThanOrEqualTo,
    containsAny: Condition.in,
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29uZGl0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQ29uZGl0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFnVm5DLDJEQUEyRDtBQUMzRCxNQUFNLENBQUMsTUFBTSxTQUFTLEdBQTRCO0lBQ2hELEtBQUssQ0FBdUIsVUFBVTtRQUNwQyxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxVQUFVLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRUQsS0FBSyxDQUF1QixLQUFLLEVBQUUsS0FBSztRQUN0QyxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRUQsUUFBUSxDQUF1QixLQUFLLEVBQUUsS0FBSztRQUN6QyxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRUQsV0FBVyxDQUF1QixLQUFLLEVBQUUsS0FBSztRQUM1QyxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRUQsb0JBQW9CLENBQXVCLEtBQUssRUFBRSxLQUFLO1FBQ3JELE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFRCxRQUFRLENBQXVCLEtBQUssRUFBRSxLQUFLO1FBQ3pDLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFRCxpQkFBaUIsQ0FBdUIsS0FBSyxFQUFFLEtBQUs7UUFDbEQsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFB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
// CONCATENATED MODULE: ./lib/query/Filter.ts


class Filter_Filter extends Node_Node {
    constructor() {
        super(...arguments);
        /**
         * The actual filters of this node
         */
        this.filter = {};
    }
    /**
     * @inheritDoc
     */
    addFilter(field, filter, value) {
        if (field !== null) {
            if (typeof field !== 'string') {
                throw new Error('Field must be a string.');
            }
            if (filter) {
                const currentFilter = this.filter[field];
                let fieldFilter;
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
    }
    toJSON() {
        return this.filter;
    }
}
Object.assign(Filter_Filter.prototype, Condition);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmlsdGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiRmlsdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDOUIsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQVd4QyxNQUFNLE9BQU8sTUFBeUIsU0FBUSxJQUFPO0lBQXJEOztRQUNFOztXQUVHO1FBQ2EsV0FBTSxHQUFpQixFQUFFLENBQUM7SUFtQzVDLENBQUM7SUFqQ0M7O09BRUc7SUFDSCxTQUFTLENBQUMsS0FBb0IsRUFBRSxNQUFxQixFQUFFLEtBQVU7UUFDL0QsSUFBSSxLQUFLLEtBQUssSUFBSSxFQUFFO1lBQ2xCLElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxFQUFFO2dCQUM3QixNQUFNLElBQUksS0FBSyxDQUFDLHlCQUF5QixDQUFDLENBQUM7YUFDNUM7WUFFRCxJQUFJLE1BQU0sRUFBRTtnQkFDVixNQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUN6QyxJQUFJLFdBQXlCLENBQUM7Z0JBQzlCLElBQUksT0FBTyxhQUFhLEtBQUssUUFBUSxJQUFJLE1BQU0sQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLEtBQUssTUFBTSxDQUFDLFNBQVMsRUFBRTtvQkFDbEcsV0FBVyxHQUFHLGFBQTZCLENBQUM7aUJBQzdDO3FCQUFNO29CQUNMLFdBQVcsR0FBRyxFQUFFLENBQUM7b0JBQ2pCLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsV0FBVyxDQUFDO2lCQUNsQztnQkFFRCxXQUFXLENBQUMsTUFBTSxDQUFDLEdBQUcsS0FBSyxDQUFDO2FBQzdCO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsS0FBSyxDQUFDO2FBQzVCO1NBQ0Y7YUFBTTtZQUNMLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztTQUNuQztRQUVELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVELE1BQU07UUFDSixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckIsQ0FBQztDQUNGO0FBRUQsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLFNBQVMsQ0FBQyxDQUFDIn0=
// CONCATENATED MODULE: ./lib/query/Operator.ts

/**
 * An Operator saves the state of a combined query
 */
class Operator_Operator extends Node_Node {
    /**
     * @param entityManager The owning entity manager of this query
     * @param resultClass The query result class
     * @param operator The operator used to join the childes
     * @param childes The childes to join
     */
    constructor(entityManager, resultClass, operator, childes) {
        super(entityManager, resultClass);
        this.operator = operator;
        this.childes = childes;
    }
    toJSON() {
        const json = {};
        json[this.operator] = this.childes;
        return json;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT3BlcmF0b3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJPcGVyYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBSTlCOztHQUVHO0FBQ0gsTUFBTSxPQUFPLFFBQTJCLFNBQVEsSUFBTztJQVdyRDs7Ozs7T0FLRztJQUNILFlBQVksYUFBNEIsRUFBRSxXQUFxQixFQUFFLFFBQWdCLEVBQUUsT0FBa0I7UUFDbkcsS0FBSyxDQUFDLGFBQWEsRUFBRSxXQUFXLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztJQUN6QixDQUFDO0lBRUQsTUFBTTtRQUNKLE1BQU0sSUFBSSxHQUFzQyxFQUFFLENBQUM7UUFDbkQsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ25DLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztDQUNGIn0=
// CONCATENATED MODULE: ./lib/query/Builder.ts





class Builder_Builder extends Query {
    /**
     * Joins the conditions by an logical AND
     * @param args The query nodes to join
     * @return Returns a new query which joins the given queries by a logical AND
     */
    and(...args) {
        return this.addOperator('$and', flatArgs(args));
    }
    /**
     * Joins the conditions by an logical OR
     * @param args The query nodes to join
     * @return Returns a new query which joins the given queries by a logical OR
     */
    or(...args) {
        return this.addOperator('$or', flatArgs(args));
    }
    /**
     * Joins the conditions by an logical NOR
     * @param args The query nodes to join
     * @return Returns a new query which joins the given queries by a logical NOR
     */
    nor(...args) {
        return this.addOperator('$nor', flatArgs(args));
    }
    eventStream(options, onNext, onError, onComplete) {
        return this.where({}).eventStream(options, onNext, onError, onComplete);
    }
    resultStream(options, onNext, onError, onComplete) {
        return this.where({}).resultStream(options, onNext, onError, onComplete);
    }
    /**
     * @inheritDoc
     */
    resultList(options, doneCallback, failCallback) {
        return this.where({}).resultList(options, doneCallback, failCallback);
    }
    /**
     * @inheritDoc
     */
    singleResult(options, doneCallback, failCallback) {
        return this.where({}).singleResult(options, doneCallback, failCallback);
    }
    /**
     * @inheritDoc
     */
    count(doneCallback, failCallback) {
        return this.where({}).count(doneCallback, failCallback);
    }
    addOperator(operator, args) {
        if (args.length < 2) {
            throw new Error(`Only two or more queries can be joined with an ${operator} operator.`);
        }
        args.forEach((arg, index) => {
            if (!(arg instanceof Node_Node)) {
                throw new Error(`Argument at index ${index} is not a query.`);
            }
        });
        return new Operator_Operator(this.entityManager, this.resultClass, operator, args);
    }
    addOrder(fieldOrSort, order) {
        return new Filter_Filter(this.entityManager, this.resultClass).addOrder(fieldOrSort, order);
    }
    addFilter(field, filter, value) {
        return new Filter_Filter(this.entityManager, this.resultClass).addFilter(field, filter, value);
    }
    addOffset(offset) {
        return new Filter_Filter(this.entityManager, this.resultClass).addOffset(offset);
    }
    addLimit(limit) {
        return new Filter_Filter(this.entityManager, this.resultClass).addLimit(limit);
    }
}
Object.assign(Builder_Builder.prototype, Condition);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQnVpbGRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkJ1aWxkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUNsQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3hDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDdEMsT0FBTyxFQUtMLEtBQUssRUFFd0YsUUFBUSxHQUN0RyxNQUFNLFNBQVMsQ0FBQztBQUVqQixPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBTzlCLE1BQU0sT0FBTyxPQUEwQixTQUFRLEtBQVE7SUFDckQ7Ozs7T0FJRztJQUNILEdBQUcsQ0FBQyxHQUFHLElBQWtDO1FBQ3ZDLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxFQUFFLENBQUMsR0FBRyxJQUFrQztRQUN0QyxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsR0FBRyxDQUFDLEdBQUcsSUFBa0M7UUFDdkMsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBUUQsV0FBVyxDQUFDLE9BQW1ELEVBQUUsTUFBNEMsRUFDM0csT0FBeUMsRUFDekMsVUFBNkI7UUFDN0IsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxVQUFVLENBQUMsQ0FBQztJQUMxRSxDQUFDO0lBUUQsWUFBWSxDQUFDLE9BQXFELEVB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
// CONCATENATED MODULE: ./lib/query/index.ts







//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQ3BDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDeEMsT0FBTyxFQUFnQixNQUFNLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFDaEQsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUM5QixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQ3RDLE9BQU8sRUFPTCxRQUFRLEVBS1IsS0FBSyxHQUNOLE1BQU0sU0FBUyxDQUFDO0FBRWpCLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxVQUFVLENBQUMifQ==

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "EntityPartialUpdateBuilder", function() { return /* reexport */ EntityPartialUpdateBuilder_EntityPartialUpdateBuilder; });
__webpack_require__.d(__webpack_exports__, "PartialUpdateBuilder", function() { return /* reexport */ PartialUpdateBuilder_PartialUpdateBuilder; });

// CONCATENATED MODULE: ./lib/partialupdate/UpdateOperation.ts
class UpdateOperation {
    /**
     * @param name
     * @param path
     * @param [value]
     */
    constructor(name, path, value) {
        this.name = name;
        this.path = path;
        this.value = value;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXBkYXRlT3BlcmF0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiVXBkYXRlT3BlcmF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sT0FBTyxlQUFlO0lBQzFCOzs7O09BSUc7SUFDSCxZQUFtQixJQUFZLEVBQVMsSUFBWSxFQUFTLEtBQVc7UUFBckQsU0FBSSxHQUFKLElBQUksQ0FBUTtRQUFTLFNBQUksR0FBSixJQUFJLENBQVE7UUFBUyxVQUFLLEdBQUwsS0FBSyxDQUFNO0lBQUcsQ0FBQztDQUM3RSJ9
// CONCATENATED MODULE: ./lib/partialupdate/PartialUpdateBuilder.ts

const ALLOWED_OPERATIONS = [
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
class PartialUpdateBuilder_PartialUpdateBuilder {
    /**
     * @param operations
     */
    constructor(operations) {
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
    set(field, value) {
        let val = value;
        if (val instanceof Set) {
            val = Array.from(val);
        }
        else if (val instanceof Map) {
            const newValue = {};
            val.forEach((v, k) => {
                newValue[k] = v;
            });
            val = newValue;
        }
        return this.addOperation(field, '$set', val);
    }
    /**
     * Increments a field by a given value
     *
     * @param field The field to increment
     * @param by The number to increment by, defaults to 1
     * @return
     */
    inc(field, by) {
        return this.addOperation(field, '$inc', typeof by === 'number' ? by : 1);
    }
    /**
     * Decrements a field by a given value
     *
     * @param field The field to decrement
     * @param by The number to decrement by, defaults to 1
     * @return
     */
    dec(field, by) {
        return this.inc(field, typeof by === 'number' ? -by : -1);
    }
    /**
     * Multiplies a field by a given number
     *
     * @param field The field to multiply
     * @param multiplicator The number to multiply by
     * @return
     */
    mul(field, multiplicator) {
        if (typeof multiplicator !== 'number') {
            throw new Error('Multiplicator must be a number.');
        }
        return this.addOperation(field, '$mul', multiplicator);
    }
    /**
     * Divides a field by a given number
     *
     * @param field The field to divide
     * @param divisor The number to divide by
     * @return
     */
    div(field, divisor) {
        if (typeof divisor !== 'number') {
            throw new Error('Divisor must be a number.');
        }
        return this.addOperation(field, '$mul', 1 / divisor);
    }
    /**
     * Sets the highest possible value of a field
     *
     * @param field The field to compare with
     * @param value The highest possible value
     * @return
     */
    min(field, value) {
        if (typeof value !== 'number') {
            throw new Error('Value must be a number');
        }
        return this.addOperation(field, '$min', value);
    }
    /**
     * Sets the smallest possible value of a field
     *
     * @param field The field to compare with
     * @param value The smalles possible value
     * @return
     */
    max(field, value) {
        if (typeof value !== 'number') {
            throw new Error('Value must be a number');
        }
        return this.addOperation(field, '$max', value);
    }
    /**
     * Removes an item from an array or map
     *
     * @param field The field to perform the operation on
     * @param item The item to add
     * @return
     */
    remove(field, item) {
        return this.addOperation(field, '$remove', item);
    }
    /**
     * Puts an item from an array or map
     *
     * @param field The field to perform the operation on
     * @param key The map key to put the value to or an object of arguments
     * @param [value] The value to put if a key was used
     * @return
     */
    put(field, key, value) {
        const obj = {};
        if (typeof key === 'string' || typeof key === 'number') {
            obj[key] = value;
        }
        else if (typeof key === 'object') {
            Object.assign(obj, key);
        }
        return this.addOperation(field, '$put', obj);
    }
    /**
     * Pushes an item into a list
     *
     * @param field The field to perform the operation on
     * @param item The item to add
     * @return
     */
    push(field, item) {
        return this.addOperation(field, '$push', item);
    }
    /**
     * Unshifts an item into a list
     *
     * @param field The field to perform the operation on
     * @param item The item to add
     * @return
     */
    unshift(field, item) {
        return this.addOperation(field, '$unshift', item);
    }
    /**
     * Pops the last item out of a list
     *
     * @param field The field to perform the operation on
     * @return
     */
    pop(field) {
        return this.addOperation(field, '$pop');
    }
    /**
     * Shifts the first item out of a list
     *
     * @param field The field to perform the operation on
     * @return
     */
    shift(field) {
        return this.addOperation(field, '$shift');
    }
    /**
     * Adds an item to a set
     *
     * @param field The field to perform the operation on
     * @param item The item to add
     * @return
     */
    add(field, item) {
        return this.addOperation(field, '$add', item);
    }
    /**
     * Replaces an item at a given index
     *
     * @param path The path to perform the operation on
     * @param index The index where the item will be replaced
     * @param item The item to replace with
     * @return
     */
    replace(path, index, item) {
        if (this.hasOperationOnPath(path)) {
            throw new Error(`You cannot update ${path} multiple times`);
        }
        return this.addOperation(`${path}.${index}`, '$replace', item);
    }
    /**
     * Sets a datetime field to the current moment
     *
     * @param field The field to perform the operation on
     * @return
     */
    currentDate(field) {
        return this.addOperation(field, '$currentDate');
    }
    /**
     * Performs a bitwise AND on a path
     *
     * @param path The path to perform the operation on
     * @param bitmask The bitmask taking part in the operation
     * @return
     */
    and(path, bitmask) {
        return this.addOperation(path, '$and', bitmask);
    }
    /**
     * Performs a bitwise OR on a path
     *
     * @param path The path to perform the operation on
     * @param bitmask The bitmask taking part in the operation
     * @return
     */
    or(path, bitmask) {
        return this.addOperation(path, '$or', bitmask);
    }
    /**
     * Performs a bitwise XOR on a path
     *
     * @param path The path to perform the operation on
     * @param bitmask The bitmask taking part in the operation
     * @return
     */
    xor(path, bitmask) {
        return this.addOperation(path, '$xor', bitmask);
    }
    /**
     * Renames a field
     *
     * @param oldPath The old field name
     * @param newPath The new field name
     * @return
     */
    rename(oldPath, newPath) {
        return this.addOperation(oldPath, '$rename', newPath);
    }
    /**
     * Returns a JSON representation of this partial update
     *
     * @return
     */
    toJSON() {
        return this.operations.reduce((json, operation) => (Object.assign(Object.assign({}, json), { [operation.name]: Object.assign(Object.assign({}, json[operation.name]), { [operation.path]: operation.value }) })), {});
    }
    /**
     * Executes the partial update
     *
     * @return The promise resolves when the partial update has been executed successfully
     * @abstract
     */
    execute() {
        throw new Error('Cannot call "execute" on abstract PartialUpdateBuilder');
    }
    /**
     * Adds an update operation on the partial update
     *
     * @param path The path which gets modified by the operation
     * @param operator The operator of the operation to add
     * @param [value] The value used to execute the operation
     * @return
     * @private
     */
    addOperation(path, operator, value) {
        if (typeof path !== 'string') {
            throw new Error('Path must be a string');
        }
        if (ALLOWED_OPERATIONS.indexOf(operator) === -1) {
            throw new Error(`Operation invalid: ${operator}`);
        }
        if (this.hasOperationOnPath(path)) {
            throw new Error(`You cannot update ${path} multiple times`);
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
        const normalizedValue = typeof value === 'undefined' ? null : value;
        const updateOperation = new UpdateOperation(operator, path, normalizedValue);
        this.operations.push(updateOperation);
        return this;
    }
    /**
     * Adds initial operations
     *
     * @param json
     * @private
     */
    addOperations(json) {
        Object.keys(json).forEach((key) => {
            const pathValueDictionary = json[key];
            Object.keys(pathValueDictionary).forEach((path) => {
                const value = pathValueDictionary[path];
                this.operations.push(new UpdateOperation(key, path, value));
            });
        });
    }
    /**
     * Checks whether an operation on the field exists already
     *
     * @param path The path where the operation is executed on
     * @return True, if the operation does exist
     * @private
     */
    hasOperationOnPath(path) {
        return this.operations.some((op) => op.path === path);
    }
}
// aliases
Object.assign(PartialUpdateBuilder_PartialUpdateBuilder.prototype, {
    increment: PartialUpdateBuilder_PartialUpdateBuilder.prototype.inc,
    decrement: PartialUpdateBuilder_PartialUpdateBuilder.prototype.dec,
    multiply: PartialUpdateBuilder_PartialUpdateBuilder.prototype.mul,
    divide: PartialUpdateBuilder_PartialUpdateBuilder.prototype.div,
    atMost: PartialUpdateBuilder_PartialUpdateBuilder.prototype.min,
    atLeast: PartialUpdateBuilder_PartialUpdateBuilder.prototype.max,
    toNow: PartialUpdateBuilder_PartialUpdateBuilder.prototype.currentDate,
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGFydGlhbFVwZGF0ZUJ1aWxkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJQYXJ0aWFsVXBkYXRlQnVpbGRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFJcEQsTUFBTSxrQkFBa0IsR0FBRztJQUN6QixNQUFNO0lBQ04sTUFBTTtJQUNOLGNBQWM7SUFDZCxNQUFNO0lBQ04sTUFBTTtJQUNOLE1BQU07SUFDTixNQUFNO0lBQ04sTUFBTTtJQUNOLEtBQUs7SUFDTCxNQUFNO0lBQ04sT0FBTztJQUNQLE1BQU07SUFDTixTQUFTO0lBQ1QsU0FBUztJQUNULFVBQVU7SUFDVixNQUFNO0lBQ04sUUFBUTtJQUNSLFVBQVU7SUFDVixNQUFNO0NBQ1AsQ0FBQztBQW9FRixNQUFNLE9BQU8sb0JBQW9CO0lBRy9COztPQUVHO0lBQ0gsWUFBWSxVQUFtQjtRQUx4QixlQUFVLEdBQXNCLEVBQUUsQ0FBQztRQU14QyxJQUFJLFVBQVUsRUFBRTtZQUNkLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDaEM7SUFDSCxDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0gsR0FBRyxDQUFDLEtBQWEsRUFBRSxLQUFVO1FBQzNCLElBQUksR0FBRyxHQUFHLEtBQUssQ0FBQztRQUNoQixJQUFJLEdBQUcsWUFBWSxHQUFHLEVBQUU7WUFDdEIsR0FBRyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDdkI7YUFBTSxJQUFJLEdBQUcsWUFBWSxHQUFHLEVBQUU7WUFDN0IsTUFBTSxRQUFRLEdBQTJCLEVBQUUsQ0FBQztZQUM1QyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBTSxFQUFFLENBQVMsRUFBRSxFQUFFO2dCQUNoQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2xCLENBQUMsQ0FBQyxDQUFDO1lBQ0gsR0FBRyxH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
// EXTERNAL MODULE: ./lib/message.ts
var message = __webpack_require__(2);

// EXTERNAL MODULE: ./lib/intersection/index.ts + 10 modules
var intersection = __webpack_require__(1);

// CONCATENATED MODULE: ./lib/partialupdate/EntityPartialUpdateBuilder.ts



class EntityPartialUpdateBuilder_EntityPartialUpdateBuilder extends PartialUpdateBuilder_PartialUpdateBuilder {
    /**
     * @param entity
     * @param operations
     */
    constructor(entity, operations) {
        super(operations);
        this.entity = entity;
    }
    /**
     * @inheritDoc
     */
    execute() {
        const state = intersection["Metadata"].get(this.entity);
        const body = JSON.stringify(this);
        const msg = new message["UpdatePartially"](state.bucket, state.key, body);
        return state.withLock(() => (state.db.send(msg).then((response) => {
            // Update the entity’s values
            state.type.fromJsonValue(state, response.entity, this.entity, { persisting: true });
            return this.entity;
        })));
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRW50aXR5UGFydGlhbFVwZGF0ZUJ1aWxkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJFbnRpdHlQYXJ0aWFsVXBkYXRlQnVpbGRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUU5RCxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksQ0FBQztBQUV0QyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFM0MsTUFBTSxPQUFPLDBCQUE2QyxTQUFRLG9CQUF1QjtJQUN2Rjs7O09BR0c7SUFDSCxZQUE0QixNQUFTLEVBQUUsVUFBbUI7UUFDeEQsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBRFEsV0FBTSxHQUFOLE1BQU0sQ0FBRztJQUVyQyxDQUFDO0lBRUQ7O09BRUc7SUFDSCxPQUFPO1FBQ0wsTUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDeEMsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsQyxNQUFNLEdBQUcsR0FBRyxJQUFJLE9BQU8sQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsR0FBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRXhFLE9BQU8sS0FBSyxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUMxQixLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRTtZQUNuQyw2QkFBNkI7WUFDN0IsS0FBSyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1lBQ3BGLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNyQixDQUFDLENBQUMsQ0FDSCxDQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0YifQ==
// CONCATENATED MODULE: ./lib/partialupdate/index.ts


//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUMxRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQyJ9

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "BloomFilter", function() { return /* reexport */ BloomFilter_BloomFilter; });

// EXTERNAL MODULE: ./lib/util/index.ts + 13 modules
var util = __webpack_require__(4);

// CONCATENATED MODULE: ./lib/caching/BloomFilter.ts
/* eslint-disable no-bitwise,default-case,no-fallthrough */

/**
 * A Bloom Filter is a client-side kept cache sketch of the server cache
 */
class BloomFilter_BloomFilter {
    /**
     * @param bloomFilter The raw Bloom filter.
     * @param bloomFilter.m The raw Bloom filter bits.
     * @param bloomFilter.h The raw Bloom filter hashes.
     * @param bloomFilter.b The Base64-encoded raw Bloom filter bytes.
     */
    constructor(bloomFilter) {
        this.bytes = Object(util["atob"])(bloomFilter.b);
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
    contains(element) {
        const hashes = BloomFilter_BloomFilter.getHashes(element, this.bits, this.hashes);
        for (let i = 0, len = hashes.length; i < len; i += 1) {
            if (!this.isSet(hashes[i])) {
                return false;
            }
        }
        return true;
    }
    /**
     * Checks whether a bit is set at a given position.
     *
     * @param index The position index to check.
     * @return True, if the bit is set at the given position.
     */
    isSet(index) {
        const pos = Math.floor(index / 8);
        const bit = 1 << (index % 8);
        // Extract byte as int or NaN if out of range
        const byte = this.bytes.charCodeAt(pos);
        // Bit-wise AND should be non-zero (NaN always yields false)
        return (byte & bit) !== 0;
    }
    /**
     * Returns the hases of a given element in the Bloom filter.
     *
     * @param element The element to check.
     * @param bits The amount of bits.
     * @param hashes The amount of hashes.
     * @return The hashes of an element in the Bloom filter.
     */
    static getHashes(element, bits, hashes) {
        const hashValues = new Array(hashes);
        const hash1 = BloomFilter_BloomFilter.murmur3(0, element);
        const hash2 = BloomFilter_BloomFilter.murmur3(hash1, element);
        for (let i = 0; i < hashes; i += 1) {
            hashValues[i] = (hash1 + (i * hash2)) % bits;
        }
        return hashValues;
    }
    /**
     * Calculate a Murmur3 hash.
     *
     * @param seed A seed to use for the hashing.
     * @param key A key to check.
     * @return A hashed value of key.
     */
    static murmur3(seed, key) {
        const remainder = key.length & 3;
        const bytes = key.length - remainder;
        const c1 = 0xcc9e2d51;
        const c2 = 0x1b873593;
        let h1;
        let h1b;
        let k1;
        let i;
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
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmxvb21GaWx0ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJCbG9vbUZpbHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwyREFBMkQ7QUFFM0QsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUUvQjs7R0FFRztBQUNILE1BQU0sT0FBTyxXQUFXO0lBNkJ0Qjs7Ozs7T0FLRztJQUNILFlBQVksV0FBZ0Q7UUFDMUQsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxJQUFJLEdBQUcsV0FBVyxDQUFDLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsTUFBTSxHQUFHLFdBQVcsQ0FBQyxDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDN0IsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsUUFBUSxDQUFDLE9BQWU7UUFDdEIsTUFBTSxNQUFNLEdBQUcsV0FBVyxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdEUsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFHLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ3BELElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUMxQixPQUFPLEtBQUssQ0FBQzthQUNkO1NBQ0Y7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNLLEtBQUssQ0FBQyxLQUFhO1FBQ3pCLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFD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
// CONCATENATED MODULE: ./lib/caching/index.ts

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDIn0=

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Permission; });
/**
 * An aggregation of access rules for given object metadata.
 */
class Permission {
    constructor() {
        this.rules = {};
    }
    /**
     * Returns a list of user and role references of all rules
     * @return a list of references
     */
    allRules() {
        return Object.keys(this.rules);
    }
    /**
     * Removes all rules from this permission object
     * @return
     */
    clear() {
        this.rules = {};
    }
    /**
     * Copies permissions from another permission object
     * @param permission The permission to copy from
     * @return
     */
    copy(permission) {
        this.rules = Object.assign({}, permission.rules);
        return this;
    }
    /**
     * Gets whenever all users and roles have the permission to perform the operation
     * @return <code>true</code> If public access is allowed
     */
    isPublicAllowed() {
        if ('*' in this.rules) {
            return false;
        }
        return !this.allRules().some((ref) => this.rules[ref] === 'allow');
    }
    /**
     * Sets whenever all users and roles should have the permission to perform the operation
     *
     * Note: All other allow rules will be removed.
     *
     * @return
     */
    setPublicAllowed() {
        this.allRules().forEach((ref) => {
            if (this.rules[ref] === 'allow') {
                delete this.rules[ref];
            }
        });
    }
    /**
     * Returns the actual rule of the given user or role.
     * @param userOrRole The user or role to check for
     * @return The actual access rule or undefined if no rule was found
     */
    getRule(userOrRole) {
        return this.rules[this.ref(userOrRole)];
    }
    /**
     * Checks whenever the user or role is explicit allowed to perform the operation.
     *
     * @param userOrRole The user or role to check for
     * @return <code>true</code> If the given user or role is allowed
     */
    isAllowed(userOrRole) {
        return this.rules[this.ref(userOrRole)] === 'allow';
    }
    /**
     * Checks whenever the user or role is explicit denied to perform the operation.
     *
     * @param userOrRole The user or role to check for
     * @return <code>true</code> If the given user or role is denied
     */
    isDenied(userOrRole) {
        return this.rules[this.ref(userOrRole)] === 'deny';
    }
    /**
     * Allows the given users or rules to perform the operation
     * @param userOrRole The users or roles to allow
     * @return this permission object
     */
    allowAccess(...userOrRole) {
        for (let i = 0; i < userOrRole.length; i += 1) {
            this.rules[this.ref(userOrRole[i])] = 'allow';
        }
        return this;
    }
    /**
     * Denies the given users or rules to perform the operation
     * @param userOrRole The users or roles to deny
     * @return this permission object
     */
    denyAccess(...userOrRole) {
        for (let i = 0; i < userOrRole.length; i += 1) {
            this.rules[this.ref(userOrRole[i])] = 'deny';
        }
        return this;
    }
    /**
     * Deletes any allow/deny rules for the given users or roles
     * @param userOrRole The users or roles to delete rules for
     * @return this permission object
     */
    deleteAccess(...userOrRole) {
        for (let i = 0; i < userOrRole.length; i += 1) {
            delete this.rules[this.ref(userOrRole[i])];
        }
        return this;
    }
    /**
     * A Json representation of the set of rules
     * @return
     */
    toJSON() {
        return Object.assign({}, this.rules);
    }
    /**
     * Sets the permission rules from json
     * @param json The permission json representation
     * @return
     */
    fromJSON(json) {
        this.rules = json;
    }
    /**
     * Creates a permission from the given rules.
     * @param json The rules.
     * @return The permission.
     */
    static fromJSON(json) {
        const permission = new this();
        permission.fromJSON(json);
        return permission;
    }
    /**
     * Resolves user and role references and validate given references
     * @param userOrRole The user, role or reference
     * @return The resolved and validated reference
     */
    ref(userOrRole) {
        const ref = typeof userOrRole === 'string' ? userOrRole : userOrRole.id;
        if (ref.indexOf('/db/User/') === 0 || ref.indexOf('/db/Role/') === 0) {
            return ref;
        }
        throw new TypeError('The given object isn\'t a user, role or a valid reference.');
    }
}
Permission.BASE_PERMISSIONS = ['load', 'update', 'delete', 'query', 'insert'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGVybWlzc2lvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlBlcm1pc3Npb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTUE7O0dBRUc7QUFDSCxNQUFNLE9BQU8sVUFBVTtJQUF2QjtRQUdTLFVBQUssR0FBOEIsRUFBRSxDQUFDO0lBcUsvQyxDQUFDO0lBbktDOzs7T0FHRztJQUNILFFBQVE7UUFDTixPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFRDs7O09BR0c7SUFDSCxLQUFLO1FBQ0gsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7SUFDbEIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxJQUFJLENBQUMsVUFBc0I7UUFDekIsSUFBSSxDQUFDLEtBQUsscUJBQVEsVUFBVSxDQUFDLEtBQUssQ0FBRSxDQUFDO1FBQ3JDLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVEOzs7T0FHRztJQUNILGVBQWU7UUFDYixJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ3JCLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFFRCxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsS0FBSyxPQUFPLENBQUMsQ0FBQztJQUNyRSxDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0gsZ0JBQWdCO1FBQ2QsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO1lBQzlCLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsS0FBSyxPQUFPLEVBQUU7Z0JBQy9CLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUN4QjtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FB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

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Observable; });
/* unused harmony export Subscription */
/* unused harmony export Subscriber */
function optionalRxjsDependency() {
    throw new Error('This functionality is only available, if the optional rxjs dependency is also provided.');
}
let rxjs = {
    Observable: optionalRxjsDependency,
    Subscription: optionalRxjsDependency,
    Subscriber: optionalRxjsDependency,
};
try {
    // we load this module as an optional external dependency
    // eslint-disable-next-line global-require
    rxjs = __webpack_require__(20);
}
catch (e) {
    // ignore loading optional module error
}
// eslint-disable-next-line @typescript-eslint/no-redeclare
const { Observable, Subscription, Subscriber } = rxjs;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2JzZXJ2YWJsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm9ic2VydmFibGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsU0FBUyxzQkFBc0I7SUFDN0IsTUFBTSxJQUFJLEtBQUssQ0FBQyx5RkFBeUYsQ0FBQyxDQUFDO0FBQzdHLENBQUM7QUFFRCxJQUFJLElBQUksR0FBRztJQUNULFVBQVUsRUFBRSxzQkFBc0Q7SUFDbEUsWUFBWSxFQUFFLHNCQUFzRDtJQUNwRSxVQUFVLEVBQUUsc0JBQXNEO0NBQ25FLENBQUM7QUFFRixJQUFJO0lBQ0YseURBQXlEO0lBQ3pELDBDQUEwQztJQUMxQyxJQUFJLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0NBQ3hCO0FBQUMsT0FBTyxDQUFDLEVBQUU7SUFDVix1Q0FBdUM7Q0FDeEM7QUFNRCwyREFBMkQ7QUFDM0QsTUFBTSxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLEdBQUcsSUFBSSxDQUFDO0FBRXRELE9BQU8sRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxDQUFDIn0=

/***/ }),
/* 18 */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),
/* 19 */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),
/* 20 */
/***/ (function(module, exports) {

if(typeof rxjs === 'undefined') {var e = new Error("Cannot find module 'rxjs'"); e.code = 'MODULE_NOT_FOUND'; throw e;}
module.exports = rxjs;

/***/ }),
/* 21 */
/***/ (function(module, exports) {

if(typeof validator === 'undefined') {var e = new Error("Cannot find module 'validator'"); e.code = 'MODULE_NOT_FOUND'; throw e;}
module.exports = validator;

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "binding", function() { return /* reexport */ binding; });
__webpack_require__.d(__webpack_exports__, "connector", function() { return /* reexport */ connector; });
__webpack_require__.d(__webpack_exports__, "error", function() { return /* reexport */ error; });
__webpack_require__.d(__webpack_exports__, "message", function() { return /* reexport */ message; });
__webpack_require__.d(__webpack_exports__, "metamodel", function() { return /* reexport */ metamodel; });
__webpack_require__.d(__webpack_exports__, "util", function() { return /* reexport */ util; });
__webpack_require__.d(__webpack_exports__, "intersection", function() { return /* reexport */ intersection; });
__webpack_require__.d(__webpack_exports__, "caching", function() { return /* reexport */ caching; });
__webpack_require__.d(__webpack_exports__, "query", function() { return /* reexport */ query; });
__webpack_require__.d(__webpack_exports__, "partialupdate", function() { return /* reexport */ partialupdate; });
__webpack_require__.d(__webpack_exports__, "model", function() { return /* reexport */ model_namespaceObject; });
__webpack_require__.d(__webpack_exports__, "EntityManagerFactory", function() { return /* reexport */ EntityManagerFactory["a" /* EntityManagerFactory */]; });
__webpack_require__.d(__webpack_exports__, "EntityManager", function() { return /* reexport */ EntityManager["a" /* EntityManager */]; });
__webpack_require__.d(__webpack_exports__, "Acl", function() { return /* reexport */ Acl["a" /* Acl */]; });
__webpack_require__.d(__webpack_exports__, "GeoPoint", function() { return /* reexport */ GeoPoint["a" /* GeoPoint */]; });
__webpack_require__.d(__webpack_exports__, "db", function() { return /* reexport */ baqend["db"]; });
__webpack_require__.d(__webpack_exports__, "connect", function() { return /* reexport */ connect; });
__webpack_require__.d(__webpack_exports__, "configure", function() { return /* reexport */ configure; });
__webpack_require__.d(__webpack_exports__, "Set", function() { return /* binding */ SetType; });
__webpack_require__.d(__webpack_exports__, "List", function() { return /* binding */ ListType; });
__webpack_require__.d(__webpack_exports__, "Map", function() { return /* binding */ MapType; });

// NAMESPACE OBJECT: ./lib/model/index.ts
var model_namespaceObject = {};
__webpack_require__.r(model_namespaceObject);

// EXTERNAL MODULE: ./lib/baqend.ts
var baqend = __webpack_require__(9);

// EXTERNAL MODULE: ./lib/binding/index.ts + 14 modules
var binding = __webpack_require__(3);

// EXTERNAL MODULE: ./lib/connector/index.ts + 5 modules
var connector = __webpack_require__(0);

// EXTERNAL MODULE: ./lib/error/index.ts + 5 modules
var error = __webpack_require__(5);

// EXTERNAL MODULE: ./lib/message.ts
var message = __webpack_require__(2);

// EXTERNAL MODULE: ./lib/metamodel/index.ts + 15 modules
var metamodel = __webpack_require__(6);

// EXTERNAL MODULE: ./lib/util/index.ts + 13 modules
var util = __webpack_require__(4);

// EXTERNAL MODULE: ./lib/intersection/index.ts + 10 modules
var intersection = __webpack_require__(1);

// EXTERNAL MODULE: ./lib/caching/index.ts + 1 modules
var caching = __webpack_require__(15);

// EXTERNAL MODULE: ./lib/query/index.ts + 7 modules
var query = __webpack_require__(13);

// EXTERNAL MODULE: ./lib/partialupdate/index.ts + 3 modules
var partialupdate = __webpack_require__(14);

// CONCATENATED MODULE: ./lib/model/index.ts

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIn0=
// EXTERNAL MODULE: ./lib/EntityManagerFactory.ts
var EntityManagerFactory = __webpack_require__(12);

// EXTERNAL MODULE: ./lib/EntityManager.ts
var EntityManager = __webpack_require__(10);

// EXTERNAL MODULE: ./lib/Acl.ts
var Acl = __webpack_require__(7);

// EXTERNAL MODULE: ./lib/GeoPoint.ts
var GeoPoint = __webpack_require__(8);

// CONCATENATED MODULE: ./lib/deperecated-exports.ts

















function deprecateExports(target, targetName, newImportSignature, exports) {
    Object.keys(exports).forEach((exported) => {
        const decorate = Object(util["deprecated"])(newImportSignature.replace('$export', exported));
        Object.defineProperty(target, exported, decorate(targetName, exported, {
            get() {
                return exports[exported];
            },
        }));
    });
}
deprecateExports(util, 'util', 'intersection.$export', {
    Permission: intersection["Permission"], Metadata: intersection["Metadata"], TokenStorage: intersection["TokenStorage"], Validator: intersection["Validator"], PushMessage: intersection["PushMessage"], Code: intersection["Code"], Modules: intersection["Modules"], Logger: intersection["Logger"],
});
deprecateExports(EntityManager["a" /* EntityManager */].prototype, 'db', 'import { $export } from \'baqend\'', {
    db: baqend["db"],
    binding: binding,
    connector: connector,
    error: error,
    message: message,
    util: util,
    caching: caching,
    query: query,
    partialupdate: partialupdate,
    intersection: intersection,
    EntityManagerFactory: EntityManagerFactory["a" /* EntityManagerFactory */],
    EntityManager: EntityManager["a" /* EntityManager */],
    Acl: Acl["a" /* Acl */],
});
deprecateExports(metamodel["Metamodel"].prototype, 'metamodel', 'import { metamodel } from \'baqend\';', metamodel);
function configure() {
    throw new Error('Please use Baqend.db.configure() or import { db } from \'baqend\' instead.');
}
function connect() {
    throw new Error('Please use Baqend.db.connect() or import { db } from \'baqend\' instead.');
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVwZXJlY2F0ZWQtZXhwb3J0cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRlcGVyZWNhdGVkLWV4cG9ydHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxLQUFLLE9BQU8sTUFBTSxXQUFXLENBQUM7QUFDckMsT0FBTyxLQUFLLFNBQVMsTUFBTSxhQUFhLENBQUM7QUFDekMsT0FBTyxLQUFLLEtBQUssTUFBTSxTQUFTLENBQUM7QUFDakMsT0FBTyxLQUFLLE9BQU8sTUFBTSxXQUFXLENBQUM7QUFDckMsT0FBTyxLQUFLLElBQUksTUFBTSxRQUFRLENBQUM7QUFDL0IsT0FBTyxLQUFLLE9BQU8sTUFBTSxXQUFXLENBQUM7QUFDckMsT0FBTyxLQUFLLEtBQUssTUFBTSxTQUFTLENBQUM7QUFDakMsT0FBTyxLQUFLLGFBQWEsTUFBTSxpQkFBaUIsQ0FBQztBQUNqRCxPQUFPLEtBQUssWUFBWSxNQUFNLGdCQUFnQixDQUFDO0FBQy9DLE9BQU8sS0FBSyxTQUFTLE1BQU0sYUFBYSxDQUFDO0FBRXpDLE9BQU8sRUFDTCxVQUFVLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsTUFBTSxHQUNsRixNQUFNLGdCQUFnQixDQUFDO0FBQ3hCLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDeEMsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDOUQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxPQUFPLENBQUM7QUFFNUIsT0FBTyxFQUFFLEVBQUUsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUM5QixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBRXBDLFNBQVMsZ0JBQWdCLENBQUMsTUFBYyxFQUFFLFVBQWtCLEVBQUUsa0JBQTBCLEVBQUUsT0FFekY7SUFDQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFO1FBQ3hDLE1BQU0sUUFBUSxHQUFHLFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDN0UsTUFBTSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQyxVQUFVLEVBQUUsUUFBUSxFQUFFO1lBQ3JFLEdBQUc7Z0JBQ0QsT0FBUSxPQUFlLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDcEMsQ0FBQztTQUNGLENBQUMsQ0FBQyxDQUFDO0lBQ04sQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDO0FBRUQsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxzQkFBc0IsRUFBRTtJQUNyRCxVQUFVLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsTUFBTTtDQUNsRixDQUFDLENBQUM7QUFFSCxnQkFBZ0IsQ0FBQyxhQUFhLENBQUMsU0FBUyxFQUFFLElBQUksRUFBRSxvQ0FBb0MsRUFBRTtJQUNwRixFQUFFO0lBQ0YsT0FBTztJQUNQLFNBQVM7SUFDVCxLQUFLO0lBQ0wsT0FBTztJQUNQLElBQUk7SUFDSixPQUFPO0lBQ1AsS0FBSztJQUNMLGFBQWE7SUFDYixZQUFZO0lBRVosb0JBQW9CO0lBQ3BCLGFBQWE7SUFDYixHQUFHO0NBQ0osQ0FBQyxDQUFDO0FBRUgsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxXQUFXLEVBQUUsdUNBQXVDLEVBQUUsU0FBUyxDQUFDLENBQUM7QUFFdkcsTUFBTSxVQUFVLFNBQVM7SUFDdkIsTUFBTSxJQUFJLEtBQUssQ0FBQyw0RUFBNEUsQ0FBQyxDQUFDO0FBQ2hHLENBQUM7QUFFRCxNQUFNLFVBQVUsT0FBTztJQUNyQixNQUFNLElBQUksS0FBSyxDQUFDLDBFQUEwRSxDQUFDLENBQUM7QUFDOUYsQ0FBQyJ9
// CONCATENATED MODULE: ./lib/index.ts





























const SetType = Set;
const MapType = Map;
const ListType = Array;

// Use one global default export of this module
// eslint-disable-next-line import/no-default-export
/* harmony default export */ var lib = __webpack_exports__["default"] = (baqend["db"]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsRUFBRSxFQUFFLE1BQU0sVUFBVSxDQUFDOzJCQUVMLFdBQVc7c0JBQXhCLE9BQU87NkJBQ1EsYUFBYTt3QkFBNUIsU0FBUzt5QkFDRSxTQUFTO29CQUFwQixLQUFLOzJCQUNRLFdBQVc7c0JBQXhCLE9BQU87NkJBQ1EsYUFBYTt3QkFBNUIsU0FBUzt3QkFDQyxRQUFRO21CQUFsQixJQUFJO2dDQUNjLGdCQUFnQjsyQkFBbEMsWUFBWTsyQkFDQyxXQUFXO3NCQUF4QixPQUFPO3lCQUNJLFNBQVM7b0JBQXBCLEtBQUs7aUNBQ2MsaUJBQWlCOzRCQUFwQyxhQUFhO3lCQUNGLFNBQVM7b0JBQXBCLEtBQUs7QUFFakIsT0FBTyxFQUFFLG9CQUFvQixFQUFlLE1BQU0sd0JBQXdCLENBQUM7QUFDM0UsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxPQUFPLENBQUM7QUFDNUIsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUN0QyxPQUFPLEVBQUUsRUFBRSxFQUFVLE1BQU0sVUFBVSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFM0QsTUFBTSxPQUFPLEdBQUcsR0FBRyxDQUFDO0FBQ3BCLE1BQU0sT0FBTyxHQUFHLEdBQUcsQ0FBQztBQUNwQixNQUFNLFFBQVEsR0FBRyxLQUFLLENBQUM7QUFFdkIsT0FBTyxFQUFFLE9BQU8sSUFBSSxHQUFHLEVBQUUsUUFBUSxJQUFJLElBQUksRUFBRSxPQUFPLElBQUksR0FBRyxFQUFFLENBQUM7QUFFNUQsK0NBQStDO0FBQy9DLG9EQUFvRDtBQUNwRCxlQUFlLEVBQUUsQ0FBQyJ9

/***/ })
/******/ ]);


Baqend === undefined && console.error('esm-webpack-plugin: nothing exported!');
const _Baqend$binding = Baqend['binding'];
const _Baqend$connector = Baqend['connector'];
const _Baqend$error = Baqend['error'];
const _Baqend$message = Baqend['message'];
const _Baqend$metamodel = Baqend['metamodel'];
const _Baqend$util = Baqend['util'];
const _Baqend$intersection = Baqend['intersection'];
const _Baqend$caching = Baqend['caching'];
const _Baqend$query = Baqend['query'];
const _Baqend$partialupdate = Baqend['partialupdate'];
const _Baqend$model = Baqend['model'];
const _Baqend$EntityManagerFactory = Baqend['EntityManagerFactory'];
const _Baqend$EntityManager = Baqend['EntityManager'];
const _Baqend$Acl = Baqend['Acl'];
const _Baqend$GeoPoint = Baqend['GeoPoint'];
const _Baqend$db = Baqend['db'];
const _Baqend$connect = Baqend['connect'];
const _Baqend$configure = Baqend['configure'];
const _Baqend$Set = Baqend['Set'];
const _Baqend$List = Baqend['List'];
const _Baqend$Map = Baqend['Map'];
export default Baqend['default'];

export {
    _Baqend$binding as binding,
    _Baqend$connector as connector,
    _Baqend$error as error,
    _Baqend$message as message,
    _Baqend$metamodel as metamodel,
    _Baqend$util as util,
    _Baqend$intersection as intersection,
    _Baqend$caching as caching,
    _Baqend$query as query,
    _Baqend$partialupdate as partialupdate,
    _Baqend$model as model,
    _Baqend$EntityManagerFactory as EntityManagerFactory,
    _Baqend$EntityManager as EntityManager,
    _Baqend$Acl as Acl,
    _Baqend$GeoPoint as GeoPoint,
    _Baqend$db as db,
    _Baqend$connect as connect,
    _Baqend$configure as configure,
    _Baqend$Set as Set,
    _Baqend$List as List,
    _Baqend$Map as Map
}
//# sourceMappingURL=baqend.es2015.js.map
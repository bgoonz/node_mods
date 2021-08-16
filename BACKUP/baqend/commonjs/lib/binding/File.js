"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var __rest = (this && this.__rest) || function (s, e) {
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.File = void 0;
var error_1 = require("../error");
var Acl_1 = require("../Acl");
var util_1 = require("../util");
var message = __importStar(require("../message"));
var connector_1 = require("../connector");
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
        var data = options.data, type = options.type, metadata = __rest(options, ["data", "type"]);
        if (!data) {
            return;
        }
        // Set data
        this[DATA] = { type: type, data: data };
        var mimeType = this.guessMimeType(options) || undefined;
        this.fromJSON(__assign(__assign({}, metadata), { mimeType: mimeType }));
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
        this[METADATA] = __assign(__assign({}, this[METADATA]), { mimeType: json.mimeType, lastModified: (json.lastModified && new Date(json.lastModified)) || meta.lastModified, createdAt: (json.createdAt && new Date(json.createdAt)) || meta.createdAt, eTag: json.eTag || meta.eTag, acl: acl, size: typeof json.size === 'number' ? json.size : json.contentLength, headers: json.headers || meta.headers || {} });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmlsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9iaW5kaW5nL0ZpbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0Esa0NBQTJDO0FBQzNDLDhCQUE2QjtBQUM3QixnQ0FHaUI7QUFDakIsa0RBQXNDO0FBQ3RDLDBDQUVzQjtBQUl0QixJQUFNLFdBQVcsR0FBRyxPQUFPLENBQUM7QUFDNUIsSUFBTSxrQkFBa0IsR0FBRyxXQUFXLENBQUMsTUFBTSxDQUFDO0FBRTlDLElBQU0sRUFBRSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUN4QixJQUFNLFFBQVEsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDcEMsSUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBd0U1Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBNkNHO0FBQ0g7SUFxSkU7Ozs7T0FJRztJQUNILGNBQVksV0FBd0I7UUFwSnBDOztXQUVHO1FBQ0ksT0FBRSxHQUFrQixJQUFXLENBQUMsQ0FBQyxxQ0FBcUM7UUFNckUsUUFBTSxHQUFvQixJQUFJLENBQUM7UUE0SXJDLDZCQUE2QjtRQUM3QixJQUFNLEdBQUcsR0FBRyxPQUFPLFdBQVcsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUV4RixJQUFJLEdBQUcsQ0FBQyxFQUFFLEVBQUU7WUFDVix1QkFBdUI7WUFDdkIsSUFBTSxhQUFhLEdBQUcsR0FBRyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUMzRCxJQUFJLGFBQWEsS0FBSyxDQUFDLENB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
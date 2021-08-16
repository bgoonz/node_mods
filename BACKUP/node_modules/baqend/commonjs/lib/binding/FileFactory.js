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
exports.FileFactory = void 0;
var Factory_1 = require("./Factory");
var File_1 = require("./File");
var message = __importStar(require("../message"));
var util_1 = require("../util");
var connector_1 = require("../connector");
var intersection_1 = require("../intersection");
var FileFactory = /** @class */ (function (_super) {
    __extends(FileFactory, _super);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmlsZUZhY3RvcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9saWIvYmluZGluZy9GaWxlRmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEscUNBQW9DO0FBQ3BDLCtCQUEyQztBQUMzQyxrREFBc0M7QUFDdEMsZ0NBQW1EO0FBQ25ELDBDQUEwQztBQUUxQyxnREFBNkM7QUErQjdDO0lBQWlDLCtCQUFhO0lBQTlDO1FBQUEscUVBMEhDO1FBOUdDOztXQUVHO1FBQ0ksUUFBRSxHQUFrQixJQUFXLENBQUM7O0lBMkd6QyxDQUFDO0lBekhDOzs7O09BSUc7SUFDSSxrQkFBTSxHQUFiLFVBQWMsRUFBaUI7UUFDN0IsSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBb0IsV0FBSSxDQUFDLENBQUM7UUFDNUQsT0FBTyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDaEIsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQztJQU9EOzs7OztPQUtHO0lBQ0gsaUNBQVcsR0FBWCxVQUFZLElBQXFCO1FBQy9CLElBQU0sUUFBUSxHQUFHLGlCQUFNLFdBQVcsWUFBQyxJQUFJLENBQUMsQ0FBQztRQUN6QyxRQUFRLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUM7UUFDdEIsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCw4QkFBUSxHQUFSLFVBQVMsSUFBYTtRQUNwQixJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQVksQ0FBQyxDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwQixPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRDs7Ozs7OztPQU9HO0lBQ0gsa0NBQVksR0FBWixVQUFhLE1BQWMsRUFBRSxR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
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity = void 0;
var Managed_1 = require("./Managed");
var partialupdate_1 = require("../partialupdate");
var enumerable_1 = require("../util/enumerable");
var error_1 = require("../error");
var Enhancer_1 = require("./Enhancer");
var Entity = /** @class */ (function (_super) {
    __extends(Entity, _super);
    function Entity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Entity.prototype, "id", {
        /**
         * The unique id of this object
         *
         * Sets the unique id of this object, if the id is not formatted as an valid id,
         * it will be used as the key component of the id has the same affect as setting the key
         *
         * @type string
         */
        get: function () {
            return this._metadata.id;
        },
        set: function (value) {
            if (this._metadata.id) {
                throw new Error("The id can't be set twice: " + value);
            }
            var val = "" + value;
            if (val.indexOf("/db/" + this._metadata.bucket + "/") === 0) {
                this._metadata.id = value;
            }
            else {
                this.key = value;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Entity.prototype, "key", {
        /**
         * The unique key part of the id
         * When the key of the unique id is set an error will be thrown if an id is already set.
         * @type string
         */
        get: function () {
            return this._metadata.key;
        },
        set: function (value) {
            this._metadata.key = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Entity.prototype, "version", {
        /**
         * The version of this object
         * @type number
         * @readonly
         */
        get: function () {
            return this._metadata.version;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Entity.prototype, "acl", {
        /**
         * The object read/write permissions
         * @type Acl
         * @readonly
         */
        get: function () {
            this._metadata.throwUnloadedPropertyAccess('acl');
            return this._metadata.acl;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Attach this object to the given db
     * @param db The db which will be used for future crud operations
     * @return
     */
    Entity.prototype.attach = function (db) {
        db.attach(this);
    };
    Entity.prototype.ready = function (doneCallback) {
        var _this = this;
        return this._metadata.ready().then(function () { return _this; }).then(doneCallback);
    };
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
    Entity.prototype.save = function (options, doneCallback, failCallback) {
        if (typeof options === 'function') {
            return this.save({}, options, doneCallback);
        }
        return this._metadata.db.save(this, options).then(doneCallback, failCallback);
    };
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
    Entity.prototype.insert = function (options, doneCallback, failCallback) {
        if (typeof options === 'function') {
            return this.insert({}, options, doneCallback);
        }
        return this._metadata.db.insert(this, options).then(doneCallback, failCallback);
    };
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
    Entity.prototype.update = function (options, doneCallback, failCallback) {
        if (typeof options === 'function') {
            return this.update({}, options, doneCallback);
        }
        return this._metadata.db.update(this, options).then(doneCallback, failCallback);
    };
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
    Entity.prototype.load = function (options, doneCallback, failCallback) {
        if (typeof options === 'function') {
            return this.load({}, options, doneCallback);
        }
        var opt = __assign({ local: true }, options);
        if (this.id === null) {
            throw new error_1.PersistentError("This object can't be loaded, it does have an id.");
        }
        return this._metadata.db.load(this.id, undefined, opt).then(doneCallback, failCallback);
    };
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
    Entity.prototype.delete = function (options, doneCallback, failCallback) {
        if (typeof options === 'function') {
            return this.delete({}, options, doneCallback);
        }
        return this._metadata.db.delete(this, options).then(doneCallback, failCallback);
    };
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
    Entity.prototype.optimisticSave = function (cb, doneCallback, failCallback) {
        return this._metadata.db.optimisticSave(this, cb).then(doneCallback, failCallback);
    };
    Entity.prototype.attr = function () {
        throw new Error('Attr is not yet implemented.');
    };
    /**
     * Validates the entity by using the validation code of the entity type
     *
     * @return Contains the result of the Validation
     * @method
     */
    Entity.prototype.validate = function () {
        return this._metadata.db.validate(this);
    };
    /**
     * Starts a partial update on this entity
     *
     * @param operations initial operations which should be executed
     * @return
     */
    Entity.prototype.partialUpdate = function (operations) {
        return new partialupdate_1.EntityPartialUpdateBuilder(this, operations);
    };
    /**
     * Get all objects which refer to this object
     *
     * @param [options] Some options to pass
     * @param [options.classes] An array of class names to filter for, null for no filter
     * @return A promise resolving with an array of all referencing objects
     * @method
     */
    Entity.prototype.getReferencing = function (options) {
        var _this = this;
        var db = this._metadata.db;
        var references = this._metadata.type.getReferencing(db, options);
        // Query all possibly referencing objects
        var allResults = Array.from(references).map(function (_a) {
            var ref = _a[0], attrs = _a[1];
            // Create query for given entity
            var qb = db.createQueryBuilder(ref.typeConstructor);
            // Add term for each attribute
            var terms = [];
            attrs.forEach(function (attr) {
                terms.push(qb.equal(attr, _this));
            });
            // If more than one term, put everything in a disjunction
            var query = terms.length === 1 ? terms[0] : qb.or(terms);
            return query.resultList();
        });
        return Promise.all(allResults).then(function (results) { return (
        // Filter out all objects which did not match
        results.filter(function (result) { return !!result.length; })); }).then(function (results) { return (
        // Flat the array of results
        Array.prototype.concat.apply([], results)); });
    };
    /**
     * Returns this object identifier or the baqend type of this object
     * @return the object id or type whatever is available
     */
    Entity.prototype.toString = function () {
        var type = Enhancer_1.Enhancer.getBaqendType(this.constructor);
        return this.id || type.ref;
    };
    /**
     * Converts the object to an JSON-Object
     * @param [options=false] to json options by default excludes the metadata
     * @param [options.excludeMetadata=false] Excludes the metadata form the serialized json
     * @param [options.depth=0] Includes up to depth referenced objects into the serialized json
     * @return JSON-Object
     * @method
     */
    Entity.prototype.toJSON = function (options) {
        // JSON.stringify calls toJSON with the parent key as the first argument.
        // Therefore ignore all unknown option types.
        var opt = options;
        if (typeof opt === 'boolean') {
            opt = {
                excludeMetadata: opt,
            };
        }
        if (typeof opt !== 'object') {
            opt = {};
        }
        var state = this._metadata;
        return state.type.toJsonValue(state, this, opt);
    };
    __decorate([
        enumerable_1.enumerable(true)
    ], Entity.prototype, "id", null);
    __decorate([
        enumerable_1.enumerable(false)
    ], Entity.prototype, "key", null);
    __decorate([
        enumerable_1.enumerable(true)
    ], Entity.prototype, "version", null);
    __decorate([
        enumerable_1.enumerable(true)
    ], Entity.prototype, "acl", null);
    __decorate([
        enumerable_1.enumerable(false)
    ], Entity.prototype, "attach", null);
    __decorate([
        enumerable_1.enumerable(false)
    ], Entity.prototype, "ready", null);
    __decorate([
        enumerable_1.enumerable(false)
    ], Entity.prototype, "save", null);
    __decorate([
        enumerable_1.enumerable(false)
    ], Entity.prototype, "insert", null);
    __decorate([
        enumerable_1.enumerable(false)
    ], Entity.prototype, "update", null);
    __decorate([
        enumerable_1.enumerable(false)
    ], Entity.prototype, "load", null);
    __decorate([
        enumerable_1.enumerable(false)
    ], Entity.prototype, "delete", null);
    __decorate([
        enumerable_1.enumerable(false)
    ], Entity.prototype, "optimisticSave", null);
    __decorate([
        enumerable_1.enumerable(false)
    ], Entity.prototype, "attr", null);
    __decorate([
        enumerable_1.enumerable(false)
    ], Entity.prototype, "validate", null);
    __decorate([
        enumerable_1.enumerable(false)
    ], Entity.prototype, "partialUpdate", null);
    __decorate([
        enumerable_1.enumerable(false)
    ], Entity.prototype, "getReferencing", null);
    __decorate([
        enumerable_1.enumerable(false)
    ], Entity.prototype, "toString", null);
    __decorate([
        enumerable_1.enumerable(false)
    ], Entity.prototype, "toJSON", null);
    return Entity;
}(Managed_1.Managed));
exports.Entity = Entity;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRW50aXR5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbGliL2JpbmRpbmcvRW50aXR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEscUNBQW9DO0FBQ3BDLGtEQUE4RDtBQUM5RCxpREFBZ0Q7QUFDaEQsa0NBQTJDO0FBSzNDLHVDQUFzQztBQVF0QztJQUE0QiwwQkFBTztJQUFuQzs7SUFnV0EsQ0FBQztJQXBVQyxzQkFBSSxzQkFBRTtRQVROOzs7Ozs7O1dBT0c7YUFFSDtZQUNFLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUM7UUFDM0IsQ0FBQzthQUVELFVBQU8sS0FBb0I7WUFDekIsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsRUFBRTtnQkFDckIsTUFBTSxJQUFJLEtBQUssQ0FBQyxnQ0FBOEIsS0FBTyxDQUFDLENBQUM7YUFDeEQ7WUFFRCxJQUFNLEdBQUcsR0FBRyxLQUFHLEtBQU8sQ0FBQztZQUN2QixJQUFJLEdBQUcsQ0FBQyxPQUFPLENBQUMsU0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sTUFBRyxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUN0RCxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsR0FBRyxLQUFLLENBQUM7YUFDM0I7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUM7YUFDbEI7UUFDSCxDQUFDOzs7T0FiQTtJQXFCRCxzQkFBSSx1QkFBRztRQU5QOzs7O1dBSUc7YUFFSDtZQUNFLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUM7UUFDNUIsQ0FBQzthQUVELFVBQVEsS0FBSztZQUNYLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQztRQUM3QixDQUFDOzs7T0FKQTtJQVlELHNCQUFJLDJCQUFPO1FBTlg7Ozs7V0FJRzthQUVIO1lBQ0UsT0FB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
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Metadata = exports.MetadataState = void 0;
var Acl_1 = require("../Acl");
var util_1 = require("../util");
var error_1 = require("../error");
var MetadataState;
(function (MetadataState) {
    MetadataState[MetadataState["UNAVAILABLE"] = -1] = "UNAVAILABLE";
    MetadataState[MetadataState["PERSISTENT"] = 0] = "PERSISTENT";
    MetadataState[MetadataState["DIRTY"] = 1] = "DIRTY";
})(MetadataState = exports.MetadataState || (exports.MetadataState = {}));
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
var Metadata = /** @class */ (function (_super) {
    __extends(Metadata, _super);
    /**
     * @param type
     */
    function Metadata(type) {
        var _this = _super.call(this) || this;
        _this.entityManager = null;
        _this.decodedKey = null;
        _this.id = null;
        _this.state = MetadataState.DIRTY;
        _this.enabled = true;
        _this.id = null;
        _this.version = null;
        _this.type = type;
        _this.acl = new Acl_1.Acl();
        return _this;
    }
    Metadata.create = function (type, db) {
        if (type.isEntity) {
            return new Metadata(type);
        }
        if (type.isEmbeddable) {
            return { type: type, db: db, setDirty: function () { } };
        }
        throw new Error("Illegal type " + type);
    };
    /**
     * Returns the metadata of the managed object
     * @param managed
     * @return
     */
    Metadata.get = function (managed) {
        // eslint-disable-next-line no-underscore-dangle
        return managed._metadata;
    };
    Object.defineProperty(Metadata.prototype, "db", {
        /**
         * @type EntityManager
         */
        get: function () {
            if (this.entityManager) {
                return this.entityManager;
            }
            this.entityManager = require('../baqend').db; // eslint-disable-line global-require
            return this.entityManager;
        },
        /**
         * @param db
         */
        set: function (db) {
            if (!this.entityManager) {
                this.entityManager = db;
            }
            else {
                throw new Error('DB has already been set.');
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Metadata.prototype, "bucket", {
        /**
         * @type string
         * @readonly
         */
        get: function () {
            return this.type.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Metadata.prototype, "key", {
        /**
         * @type string
         * @readonly
         */
        get: function () {
            if (!this.decodedKey && this.id) {
                var index = this.id.lastIndexOf('/');
                this.decodedKey = decodeURIComponent(this.id.substring(index + 1));
            }
            return this.decodedKey;
        },
        /**
         * @param value
         */
        set: function (value) {
            var val = "" + value;
            if (this.id) {
                throw new Error('The id can\'t be set twice.');
            }
            this.id = "/db/" + this.bucket + "/" + encodeURIComponent(val);
            this.decodedKey = val;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Metadata.prototype, "isAttached", {
        /**
         * Indicates if this object already belongs to an db
         * <code>true</code> if this object belongs already to an db otherwise <code>false</code>
         * @type boolean
         * @readonly
         */
        get: function () {
            return !!this.entityManager;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Metadata.prototype, "isAvailable", {
        /**
         * Indicates if this object is represents a db object, but was not loaded up to now
         * @type boolean
         * @readonly
         */
        get: function () {
            return this.state > MetadataState.UNAVAILABLE;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Metadata.prototype, "isPersistent", {
        /**
         * Indicates if this object represents the state of the db and was not modified in any manner
         * @type boolean
         * @readonly
         */
        get: function () {
            return this.state === MetadataState.PERSISTENT;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Metadata.prototype, "isDirty", {
        /**
         * Indicates that this object was modified and the object was not written back to the db
         * @type boolean
         * @readonly
         */
        get: function () {
            return this.state === MetadataState.DIRTY;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Enable/Disable state change tracking of this object
     * @param newStateTrackingState The new change tracking state
     * @return
     */
    Metadata.prototype.enable = function (newStateTrackingState) {
        this.enabled = newStateTrackingState;
    };
    /**
     * Throws the corresponding error if a property is accessed before the owning object is loaded
     * @throws an exception if the object properties aren't available and the object is enabled
     */
    Metadata.prototype.throwUnloadedPropertyAccess = function (property) {
        if (this.enabled && !this.isAvailable) {
            throw new error_1.PersistentError("Illegal property access on " + this.id + "#" + property + " , ensure that this reference is loaded before it's properties are accessed.");
        }
    };
    /**
     * Indicates that the associated object isn't available
     * @return
     */
    Metadata.prototype.setUnavailable = function () {
        this.state = MetadataState.UNAVAILABLE;
    };
    /**
     * Indicates that the associated object is not stale
     *
     * An object is stale if it correlates the database state and is not modified by the user.
     *
     * @return
     */
    Metadata.prototype.setPersistent = function () {
        this.state = MetadataState.PERSISTENT;
    };
    /**
     * Indicates the the object is modified by the user
     * @return
     */
    Metadata.prototype.setDirty = function () {
        this.state = MetadataState.DIRTY;
    };
    /**
     * Indicates the the object is removed
     * @return
     */
    Metadata.prototype.setRemoved = function () {
        // mark the object only as dirty if it was already available
        if (this.isAvailable) {
            this.setDirty();
            this.version = null;
        }
    };
    return Metadata;
}(util_1.Lockable));
exports.Metadata = Metadata;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWV0YWRhdGEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9saWIvaW50ZXJzZWN0aW9uL01ldGFkYXRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDhCQUE2QjtBQUM3QixnQ0FBbUM7QUFHbkMsa0NBQTJDO0FBYzNDLElBQVksYUFJWDtBQUpELFdBQVksYUFBYTtJQUN2QixnRUFBZ0IsQ0FBQTtJQUNoQiw2REFBYyxDQUFBO0lBQ2QsbURBQVMsQ0FBQTtBQUNYLENBQUMsRUFKVyxhQUFhLEdBQWIscUJBQWEsS0FBYixxQkFBYSxRQUl4QjtBQUVEOzs7Ozs7Ozs7R0FTRztBQUNIO0lBQThCLDRCQUFRO0lBc0pwQzs7T0FFRztJQUNILGtCQUFZLElBQXFCO1FBQWpDLFlBQ0UsaUJBQU8sU0FRUjtRQWpLRCxtQkFBYSxHQUF5QixJQUFJLENBQUM7UUFJM0MsZ0JBQVUsR0FBa0IsSUFBSSxDQUFDO1FBRWpDLFFBQUUsR0FBa0IsSUFBSSxDQUFDO1FBcUp2QixLQUFJLENBQUMsS0FBSyxHQUFHLGFBQWEsQ0FBQyxLQUFLLENBQUM7UUFDakMsS0FBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDcEIsS0FBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUM7UUFDZixLQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUNwQixLQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixLQUFJLENBQUMsR0FBRyxHQUFHLElBQUksU0FBRyxFQUFFLENBQUM7O0lBQ3ZCLENBQUM7SUEvSE0sZUFBTSxHQUFiLFVBQWdDLElBQW9CLEVBQUUsRUFBa0I7UUFDdEUsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLE9BQU8sSUFBSSxRQUFRLENBQUMsSUFBcUIsQ0FBQyxDQUFDO1NBQzVDO1FBQUMsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3ZCLE9BQU8sRUFBRSxJQUFJLE1B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
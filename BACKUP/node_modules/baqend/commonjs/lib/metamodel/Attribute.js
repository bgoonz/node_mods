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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Attribute = exports.PersistentAttributeType = void 0;
var binding_1 = require("../binding");
var PersistentAttributeType;
(function (PersistentAttributeType) {
    PersistentAttributeType[PersistentAttributeType["BASIC"] = 0] = "BASIC";
    PersistentAttributeType[PersistentAttributeType["ELEMENT_COLLECTION"] = 1] = "ELEMENT_COLLECTION";
    PersistentAttributeType[PersistentAttributeType["EMBEDDED"] = 2] = "EMBEDDED";
    PersistentAttributeType[PersistentAttributeType["MANY_TO_MANY"] = 3] = "MANY_TO_MANY";
    PersistentAttributeType[PersistentAttributeType["MANY_TO_ONE"] = 4] = "MANY_TO_ONE";
    PersistentAttributeType[PersistentAttributeType["ONE_TO_MANY"] = 5] = "ONE_TO_MANY";
    PersistentAttributeType[PersistentAttributeType["ONE_TO_ONE"] = 6] = "ONE_TO_ONE";
})(PersistentAttributeType = exports.PersistentAttributeType || (exports.PersistentAttributeType = {}));
var ATTACHED_STATE = Symbol('AttachedState');
var ATTACHED_SIZE = Symbol('AttachedSize');
var Attribute = /** @class */ (function () {
    /**
     * @param name The attribute name
     * @param isMetadata <code>true</code> if the attribute is an metadata attribute
     */
    function Attribute(name, isMetadata) {
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
    Attribute.attachState = function (obj, state, overwriteExistingValue) {
        if (overwriteExistingValue === void 0) { overwriteExistingValue = false; }
        if (state !== undefined && (overwriteExistingValue || obj[ATTACHED_STATE] === undefined)) {
            // ensure that this property is not visible on browsers which do not support Symbols
            Object.defineProperty(obj, ATTACHED_STATE, { value: state, configurable: true });
        }
        return obj[ATTACHED_STATE];
    };
    /**
     * Attach and returns the the given size on the collection, in a meaner that it isn't enumerable
     * @param {Set<*>|Map<*,*>} collection The collection where the size is attached on
     * @param {number} size The size which should be attached, the previously attached size will be
     * returned if omitted
     * @return {number} The actual or new attached size whenever a new size was provided or not
     */
    Attribute.attachSize = function (collection, size) {
        if (size !== undefined) {
            // ensure that this property is not visible on browsers which do not support Symbols
            Object.defineProperty(collection, ATTACHED_SIZE, { value: size, configurable: true });
        }
        return collection[ATTACHED_SIZE] || -1;
    };
    Object.defineProperty(Attribute.prototype, "persistentAttributeType", {
        /**
         * Returns the persistent attribute type
         */
        get: function () {
            return -1;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Attribute.prototype, "isAssociation", {
        /**
         * @type boolean
         * @readonly
         */
        get: function () {
            return this.persistentAttributeType > PersistentAttributeType.EMBEDDED;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Attribute.prototype, "isCollection", {
        get: function () {
            return this.persistentAttributeType === PersistentAttributeType.ELEMENT_COLLECTION;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * @param declaringType The type that owns this attribute
     * @param order Position of the attribute
     * @return
     */
    Attribute.prototype.init = function (declaringType, order) {
        if (this.declaringType) {
            throw new Error('The attribute is already initialized.');
        }
        this.order = order;
        this.accessor = new binding_1.Accessor();
        this.declaringType = declaringType;
    };
    /**
     * @param entity
     * @return
     */
    Attribute.prototype.getValue = function (entity) {
        return this.accessor.getValue(entity, this);
    };
    /**
     * @param entity
     * @param value
     */
    Attribute.prototype.setValue = function (entity, value) {
        this.accessor.setValue(entity, this, value);
    };
    /**
     * Retrieves whether this type has specific metadata
     *
     * @param key
     * @return
     */
    Attribute.prototype.hasMetadata = function (key) {
        return !!this.metadata && key in this.metadata;
    };
    /**
     * Gets some metadata of this type
     *
     * @param key
     * @return
     */
    Attribute.prototype.getMetadata = function (key) {
        if (!this.hasMetadata(key)) {
            return null;
        }
        return this.metadata[key] || null;
    };
    /**
     * Converts this attribute field to json
     * @return The attribute description as json
     */
    Attribute.prototype.toJSON = function () {
        return __assign({ name: this.name, order: this.order }, (this.metadata && { metadata: this.metadata }));
    };
    Attribute.PersistentAttributeType = PersistentAttributeType;
    return Attribute;
}());
exports.Attribute = Attribute;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXR0cmlidXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbGliL21ldGFtb2RlbC9BdHRyaWJ1dGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBK0M7QUFLL0MsSUFBWSx1QkFRWDtBQVJELFdBQVksdUJBQXVCO0lBQ2pDLHVFQUFTLENBQUE7SUFDVCxpR0FBc0IsQ0FBQTtJQUN0Qiw2RUFBWSxDQUFBO0lBQ1oscUZBQWdCLENBQUE7SUFDaEIsbUZBQWUsQ0FBQTtJQUNmLG1GQUFlLENBQUE7SUFDZixpRkFBYyxDQUFBO0FBQ2hCLENBQUMsRUFSVyx1QkFBdUIsR0FBdkIsK0JBQXVCLEtBQXZCLCtCQUF1QixRQVFsQztBQUVELElBQU0sY0FBYyxHQUFHLE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUMvQyxJQUFNLGFBQWEsR0FBRyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUM7QUFFN0M7SUFrRkU7OztPQUdHO0lBQ0gsbUJBQXNCLElBQVksRUFBRSxVQUFvQjtRQWpGakQsU0FBSSxHQUFHLEtBQUssQ0FBQztRQUViLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFFbEIsVUFBSyxHQUFHLEtBQUssQ0FBQztRQUlkLFVBQUssR0FBa0IsSUFBSSxDQUFDO1FBRTVCLGFBQVEsR0FBb0IsSUFBSSxDQUFDO1FBRWpDLGtCQUFhLEdBQTRCLElBQUksQ0FBQztRQUU5QyxhQUFRLEdBQXNDLElBQUksQ0FBQztRQW9FeEQsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsVUFBVSxDQUFDO1FBQy9CLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ25CLENBQUM7SUFsRE0scUJBQVcsR0FBbEIsVUFBc0IsR0FBb0QsRUFBRSxLQUFTLEVBQ25GLHNCQUF1QztRQUF2Qyx1Q0FBQSxFQUFBLDhCQUF1QztRQUN2QyxJQUFJLEtBQUssS0FBSyxTQUFTLElBQUksQ0FBQyxzQkFBc0IsSUFBSyxH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
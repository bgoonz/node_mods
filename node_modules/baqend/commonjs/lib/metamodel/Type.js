"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Type = exports.PersistenceType = void 0;
var PersistenceType;
(function (PersistenceType) {
    PersistenceType[PersistenceType["BASIC"] = 0] = "BASIC";
    PersistenceType[PersistenceType["EMBEDDABLE"] = 1] = "EMBEDDABLE";
    PersistenceType[PersistenceType["ENTITY"] = 2] = "ENTITY";
    PersistenceType[PersistenceType["MAPPED_SUPERCLASS"] = 3] = "MAPPED_SUPERCLASS";
})(PersistenceType = exports.PersistenceType || (exports.PersistenceType = {}));
var Type = /** @class */ (function () {
    /**
     * @param ref
     * @param typeConstructor
     */
    function Type(ref, typeConstructor) {
        if (ref.indexOf('/db/') !== 0) {
            throw new SyntaxError("Type ref " + ref + " is invalid.");
        }
        this.ref = ref;
        this.name = ref.substring(4);
        this._typeConstructor = typeConstructor;
    }
    Object.defineProperty(Type.prototype, "persistenceType", {
        /**
         * The persistent type of this type
         */
        get: function () {
            return -1;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Type.prototype, "isBasic", {
        /**
         * @type boolean
         * @readonly
         */
        get: function () {
            return this.persistenceType === PersistenceType.BASIC;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Type.prototype, "isEmbeddable", {
        /**
         * @type boolean
         * @readonly
         */
        get: function () {
            return this.persistenceType === PersistenceType.EMBEDDABLE;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Type.prototype, "isEntity", {
        /**
         * @type boolean
         * @readonly
         */
        get: function () {
            return this.persistenceType === PersistenceType.ENTITY;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Type.prototype, "isMappedSuperclass", {
        /**
         * @type boolean
         * @readonly
         */
        get: function () {
            return this.persistenceType === PersistenceType.MAPPED_SUPERCLASS;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Type.prototype, "typeConstructor", {
        /**
         * The type constructor of this type
         */
        get: function () {
            return this._typeConstructor;
        },
        /**
         * @param typeConstructor - sets the type constructor of this type if it is not already set
         */
        set: function (typeConstructor) {
            if (this._typeConstructor) {
                throw new Error('typeConstructor has already been set.');
            }
            this._typeConstructor = typeConstructor;
        },
        enumerable: false,
        configurable: true
    });
    return Type;
}());
exports.Type = Type;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVHlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9tZXRhbW9kZWwvVHlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFHQSxJQUFZLGVBS1g7QUFMRCxXQUFZLGVBQWU7SUFDekIsdURBQVMsQ0FBQTtJQUNULGlFQUFjLENBQUE7SUFDZCx5REFBVSxDQUFBO0lBQ1YsK0VBQXFCLENBQUE7QUFDdkIsQ0FBQyxFQUxXLGVBQWUsR0FBZix1QkFBZSxLQUFmLHVCQUFlLFFBSzFCO0FBRUQ7SUFpRUU7OztPQUdHO0lBQ0gsY0FBc0IsR0FBVyxFQUFFLGVBQTBCO1FBQzNELElBQUksR0FBRyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDN0IsTUFBTSxJQUFJLFdBQVcsQ0FBQyxjQUFZLEdBQUcsaUJBQWMsQ0FBQyxDQUFDO1NBQ3REO1FBRUQsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDZixJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLGdCQUFnQixHQUFHLGVBQWUsQ0FBQztJQUMxQyxDQUFDO0lBakVELHNCQUFJLGlDQUFlO1FBSG5COztXQUVHO2FBQ0g7WUFDRSxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQ1osQ0FBQzs7O09BQUE7SUFNRCxzQkFBSSx5QkFBTztRQUpYOzs7V0FHRzthQUNIO1lBQ0UsT0FBTyxJQUFJLENBQUMsZUFBZSxLQUFLLGVBQWUsQ0FBQyxLQUFLLENBQUM7UUFDeEQsQ0FBQzs7O09BQUE7SUFNRCxzQkFBSSw4QkFBWTtRQUpoQjs7O1dBR0c7YUFDSDtZQUNFLE9BQU8sSUFBSSxDQUFDLGVBQWUsS0FBSyxlQUFlLENBQUMsVUFBVSxDQUFDO1FBQzdELENBQUM7OztPQUFBO0lBTUQsc0JBQUksMEJBQVE7UUFKWjs7O1dBR0c7YUFDSDtZQUNFLE9BQU8sSUFBSSxDQUFDLGVBQWUsS0FBSyxlQUFlLENBQUMsTUFBTSxDQUFDO1FBQ3pELENBQUM7OztPQUFBO0lBTUQsc0JBQUksb0NBQWtCO1FBSnRCOzs7V0FHRzthQUNIO1lBQ0UsT0FBTyxJQUFJLENBQUMsZUFBZSxLQUFLLGVBQWUsQ0FBQyxpQkFBaUIsQ0FBQztRQUNwRSxDQUFDOzs7T0FBQTtJQUtELHNCQUFJLGlDQUFlO1FBSG5COztXQUVHO2FBQ0g7WUFDRSxPQUFPLElBQUksQ0FBQyxnQkFBa0IsQ0FBQztRQUNqQyxDQUFDO1FBRUQ7O1dBRUc7YUFDSCxVQUFvQixlQUF5QjtZQUMzQyxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtnQkFDekIsTUFBTSxJQUFJLEtBQUssQ0FBQyx1Q0FBdUMsQ0FBQyxDQUFDO2FBQzFEO1lBQ0QsSUFBSSxDQUFDLGdCQUFnQixHQUFHLGVBQWUsQ0FBQztRQUMxQyxDQUFDOzs7T0FWQTtJQXNESCxXQUFDO0FBQUQsQ0FBQyxBQTNHRCxJQTJHQztBQTNHcUIsb0JBQUkifQ==
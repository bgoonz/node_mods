"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModelBuilder = void 0;
var BasicType_1 = require("./BasicType");
var EntityType_1 = require("./EntityType");
var EmbeddableType_1 = require("./EmbeddableType");
var ListAttribute_1 = require("./ListAttribute");
var MapAttribute_1 = require("./MapAttribute");
var SetAttribute_1 = require("./SetAttribute");
var SingularAttribute_1 = require("./SingularAttribute");
var error_1 = require("../error");
var intersection_1 = require("../intersection");
var ModelBuilder = /** @class */ (function () {
    function ModelBuilder() {
        var _this = this;
        this.models = {};
        this.modelDescriptors = null;
        Object.keys(BasicType_1.BasicType).forEach(function (typeName) {
            var basicType = BasicType_1.BasicType[typeName];
            if (basicType instanceof BasicType_1.BasicType) {
                _this.models[basicType.ref] = basicType;
            }
        });
    }
    /**
     * @param ref
     * @return
     */
    ModelBuilder.prototype.getModel = function (ref) {
        if (ref in this.models) {
            return this.models[ref];
        }
        var model = this.buildModel(ref);
        this.models[ref] = model;
        return model;
    };
    /**
     * @param modelDescriptors
     * @return
     */
    ModelBuilder.prototype.buildModels = function (modelDescriptors) {
        var _this = this;
        this.modelDescriptors = {};
        modelDescriptors.forEach(function (modelDescriptor) {
            _this.modelDescriptors[modelDescriptor.class] = modelDescriptor;
        });
        Object.keys(this.modelDescriptors).forEach(function (ref) {
            try {
                var model = _this.getModel(ref);
                _this.buildAttributes(model);
            }
            catch (e) {
                throw new error_1.PersistentError("Can't create model for entity class " + ref, e);
            }
        });
        // ensure at least an object entity
        this.getModel(EntityType_1.EntityType.Object.ref);
        return this.models;
    };
    /**
     * @param ref
     * @return
     */
    ModelBuilder.prototype.buildModel = function (ref) {
        var modelDescriptor = this.modelDescriptors[ref];
        var type;
        if (ref === EntityType_1.EntityType.Object.ref) {
            type = new EntityType_1.EntityType.Object();
        }
        else if (modelDescriptor) {
            if (modelDescriptor.embedded) {
                type = new EmbeddableType_1.EmbeddableType(ref);
            }
            else {
                var superTypeIdentifier = modelDescriptor.superClass || EntityType_1.EntityType.Object.ref;
                type = new EntityType_1.EntityType(ref, this.getModel(superTypeIdentifier));
            }
        }
        else {
            throw new TypeError("No model available for " + ref);
        }
        type.metadata = {};
        if (modelDescriptor) {
            type.metadata = modelDescriptor.metadata || {};
            var permissions_1 = modelDescriptor.acl || {};
            Object.keys(permissions_1).forEach(function (permission) {
                var permissionProperty = permission + "Permission";
                type[permissionProperty].fromJSON(permissions_1[permission]);
            });
        }
        return type;
    };
    /**
     * @param model
     * @return
     */
    ModelBuilder.prototype.buildAttributes = function (model) {
        var _this = this;
        var modelDescriptor = this.modelDescriptors[model.ref];
        var fields = modelDescriptor.fields;
        Object.keys(fields).forEach(function (name) {
            var field = fields[name];
            if (!model.getAttribute(name)) { // skip predefined attributes
                model.addAttribute(_this.buildAttribute(field), field.order);
            }
        });
        if (typeof modelDescriptor.validationCode === 'string') {
            // eslint-disable-next-line no-param-reassign
            model.validationCode = intersection_1.Validator.compile(model, modelDescriptor.validationCode);
        }
    };
    /**
     * @param field The field metadata
     * @param field.name The name of zhe field
     * @param field.type The type reference of the field
     * @param field.order The order number of the field
     * @param field.metadata Additional metadata of the field
     * @return
     */
    ModelBuilder.prototype.buildAttribute = function (field) {
        // TODO: remove readonly if createdAt and updatedAt becomes real metadata fields in the schema
        var isMetadata = field.flags && (field.flags.indexOf('METADATA') !== -1 || field.flags.indexOf('READONLY') !== -1);
        var name = field.name;
        var ref = field.type;
        if (ref.indexOf('/db/collection.') !== 0) {
            var singularAttribute = new SingularAttribute_1.SingularAttribute(name, this.getModel(ref), isMetadata);
            singularAttribute.metadata = field.metadata;
            return singularAttribute;
        }
        var collectionType = ref.substring(0, ref.indexOf('['));
        var elementType = ref.substring(ref.indexOf('[') + 1, ref.indexOf(']')).trim();
        switch (collectionType) {
            case ListAttribute_1.ListAttribute.ref:
                return new ListAttribute_1.ListAttribute(name, this.getModel(elementType));
            case SetAttribute_1.SetAttribute.ref:
                return new SetAttribute_1.SetAttribute(name, this.getModel(elementType));
            case MapAttribute_1.MapAttribute.ref: {
                var keyType = elementType.substring(0, elementType.indexOf(',')).trim();
                var valueType = elementType.substring(elementType.indexOf(',') + 1).trim();
                return new MapAttribute_1.MapAttribute(name, this.getModel(keyType), this.getModel(valueType));
            }
            default:
                throw new TypeError("No collection available for " + ref);
        }
    };
    return ModelBuilder;
}());
exports.ModelBuilder = ModelBuilder;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTW9kZWxCdWlsZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbGliL21ldGFtb2RlbC9Nb2RlbEJ1aWxkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEseUNBQXdDO0FBQ3hDLDJDQUEwQztBQUMxQyxtREFBa0Q7QUFDbEQsaURBQWdEO0FBQ2hELCtDQUE4QztBQUM5QywrQ0FBOEM7QUFDOUMseURBQXdEO0FBQ3hELGtDQUEyQztBQUszQyxnREFBd0Q7QUFFeEQ7SUFLRTtRQUFBLGlCQU9DO1FBWE8sV0FBTSxHQUFrQyxFQUFFLENBQUM7UUFFM0MscUJBQWdCLEdBQXVDLElBQUksQ0FBQztRQUdqRSxNQUFNLENBQUMsSUFBSSxDQUFDLHFCQUFTLENBQWdDLENBQUMsT0FBTyxDQUFDLFVBQUMsUUFBUTtZQUN0RSxJQUFNLFNBQVMsR0FBRyxxQkFBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3RDLElBQUksU0FBUyxZQUFZLHFCQUFTLEVBQUU7Z0JBQ2xDLEtBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxHQUFHLFNBQVMsQ0FBQzthQUN4QztRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVEOzs7T0FHRztJQUNILCtCQUFRLEdBQVIsVUFBUyxHQUFXO1FBQ2xCLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDdEIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBcUIsQ0FBQztTQUM3QztRQUVELElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDbkMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUM7UUFDekIsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsa0NBQVcsR0FBWCxVQUFZLGdCQUEyQjtRQUF2QyxpQkFvQkM7UUFuQkMsSUFBSSxD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
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.typings = void 0;
/* eslint-disable no-continue */
const os_1 = __importDefault(require("os"));
const baqend_1 = require("baqend");
const helper_1 = require("./helper");
const { CollectionType } = baqend_1.metamodel.PluralAttribute;
const tsTypeMapping = {
    Boolean: 'boolean',
    Double: 'number',
    Integer: 'number',
    String: 'string',
    DateTime: 'Date',
    Time: 'Date',
    Date: 'Date',
    GeoPoint: 'GeoPoint',
    JsonArray: '[]',
    JsonObject: '{}',
    File: 'binding.File',
};
const nativeTypes = ['User', 'Role', 'Device'];
const push = Function.prototype.apply.bind(Array.prototype.push);
function typings(args) {
    if (!args.app) {
        return Promise.reject(new Error('Please specify the app parameter.'));
    }
    return createTypings(args.app, args.dest);
}
exports.typings = typings;
function createTypings(app, dest) {
    const factory = new baqend_1.EntityManagerFactory({ host: app });
    return factory.ready().then(() => {
        const types = typingsFromMetamodel(factory.metamodel);
        return helper_1.ensureDir(dest)
            .then(() => helper_1.writeFile(`${dest}/baqend-model.d.ts`, types.join(os_1.default.EOL)))
            .then(() => console.log(`Typings successfully saved to: ${dest}/baqend-model.d.ts`));
    });
}
function typingsFromMetamodel(metamodel) {
    const typing = [];
    const namespaces = {};
    // import all native types, so they can be easily used in definitions
    typing.push('import {binding, GeoPoint} from "baqend";');
    typing.push('');
    const module = [];
    module.push('declare module "baqend" {');
    module.push('');
    module.push('  interface baqend {');
    const model = [];
    model.push('  namespace model {');
    for (const key of Object.keys(metamodel.entities)) {
        const entity = metamodel.entities[key];
        if (entity.name === 'Object') {
            continue;
        }
        if (nativeTypes.includes(entity.name)) {
            continue;
        }
        if (helper_1.isNativeClassNamespace(entity.name)) {
            continue;
        }
        // register only user defined types
        if (entity.name.indexOf('.') !== -1) {
            const [namespace, entityName] = entity.name.split('.');
            module.push(`    ["${entity.name}"]: binding.EntityFactory<model.${entity.name}>;`);
            if (!namespaces[namespace])
                namespaces[namespace] = [];
            push(namespaces[namespace], typingsFromSchema(entityName, entity, 'Entity'));
        }
        else {
            module.push(`    ${entity.name}: binding.EntityFactory<model.${entity.name}>;`);
            push(model, typingsFromSchema(entity.name, entity, 'Entity'));
        }
        model.push('');
    }
    for (const key of Object.keys(metamodel.embeddables)) {
        const embeddable = metamodel.embeddables[key];
        if (embeddable.name.indexOf('.') !== -1)
            continue;
        module.push(`    ${embeddable.name}: binding.ManagedFactory<model.${embeddable.name}>;`);
        push(model, typingsFromSchema(embeddable.name, embeddable, 'Managed'));
        model.push('');
    }
    module.push('  }');
    module.push('');
    for (const key of Object.keys(namespaces)) {
        model.push(`  namespace ${key} {`);
        push(model, namespaces[key]);
        model.push('  }');
    }
    model.push('  }');
    push(module, model);
    module.push('}');
    push(typing, module);
    return typing;
}
function typingsFromSchema(typeName, entity, type) {
    const typing = [];
    typing.push(`    interface ${typeName} extends binding.${type} {`);
    for (const attribute of entity.declaredAttributes) {
        if (!attribute.isMetadata) {
            if (attribute.isCollection) {
                switch (attribute.collectionType) {
                    case CollectionType.LIST:
                        typing.push(`      ${attribute.name}: Array<${typingsFromType(attribute.elementType)}>;`);
                        break;
                    case CollectionType.MAP: {
                        const mapAttr = attribute;
                        typing.push(`      ${attribute.name}: Map<${typingsFromType(mapAttr.keyType)}, ${typingsFromType(mapAttr.elementType)}>;`);
                        break;
                    }
                    case CollectionType.SET:
                        typing.push(`      ${attribute.name}: Set<${typingsFromType(attribute.elementType)}>;`);
                        break;
                    default:
                        break;
                }
            }
            else {
                typing.push(`      ${attribute.name}: ${typingsFromType(attribute.type)};`);
            }
        }
    }
    typing.push('    }');
    return typing;
}
function typingsFromType(type) {
    if (type.isBasic) {
        return tsTypeMapping[type.name];
    }
    return type.name.split('.').pop();
}
/**
 import {binding} from "baqend";

 declare module "baqend" {

  interface baqend {
    Campaign:binding.EntityFactory<Campaign>;
    Profile:binding.EntityFactory<Profile>;
  }

  export interface Campaign extends binding.Entity {

  }

  export interface Profile extends binding.Entity {

  }

}
* */
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwaW5ncy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInR5cGluZ3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsZ0NBQWdDO0FBQ2hDLDRDQUFvQjtBQUNwQixtQ0FBaUU7QUFDakUscUNBRWtCO0FBRWxCLE1BQU0sRUFBRSxjQUFjLEVBQUUsR0FBRyxrQkFBSSxDQUFDLGVBQWUsQ0FBQztBQUVoRCxNQUFNLGFBQWEsR0FBK0I7SUFDaEQsT0FBTyxFQUFFLFNBQVM7SUFDbEIsTUFBTSxFQUFFLFFBQVE7SUFDaEIsT0FBTyxFQUFFLFFBQVE7SUFDakIsTUFBTSxFQUFFLFFBQVE7SUFDaEIsUUFBUSxFQUFFLE1BQU07SUFDaEIsSUFBSSxFQUFFLE1BQU07SUFDWixJQUFJLEVBQUUsTUFBTTtJQUNaLFFBQVEsRUFBRSxVQUFVO0lBQ3BCLFNBQVMsRUFBRSxJQUFJO0lBQ2YsVUFBVSxFQUFFLElBQUk7SUFDaEIsSUFBSSxFQUFFLGNBQWM7Q0FDckIsQ0FBQztBQUVGLE1BQU0sV0FBVyxHQUFHLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQztBQUMvQyxNQUFNLElBQUksR0FBRyxRQUFRLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQU9qRSxTQUFnQixPQUFPLENBQUMsSUFBZ0I7SUFDdEMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUU7UUFDYixPQUFPLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxLQUFLLENBQUMsbUNBQW1DLENBQUMsQ0FBQyxDQUFDO0tBQ3ZFO0lBQ0QsT0FBTyxhQUFhLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDNUMsQ0FBQztBQUxELDBCQUtDO0FBRUQsU0FBUyxhQUFhLENBQUMsR0FBVyxFQUFFLElBQVk7SUFDOUMsTUFBTSxPQUFPLEdB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
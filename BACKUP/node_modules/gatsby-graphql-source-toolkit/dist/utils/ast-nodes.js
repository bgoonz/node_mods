"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringValue = exports.boolValue = exports.skipDirective = exports.directive = exports.fragmentSpread = exports.namedType = exports.name = exports.arg = exports.field = exports.selectionSet = exports.inlineFragment = exports.fragmentDefinition = exports.document = void 0;
function document(definitions) {
    return {
        kind: "Document",
        definitions,
    };
}
exports.document = document;
function fragmentDefinition(fragmentName, typeName, selections) {
    return {
        kind: "FragmentDefinition",
        name: name(fragmentName !== null && fragmentName !== void 0 ? fragmentName : typeName),
        typeCondition: namedType(typeName),
        selectionSet: selectionSet(selections),
    };
}
exports.fragmentDefinition = fragmentDefinition;
function inlineFragment(typeCondition, selections) {
    return {
        kind: "InlineFragment",
        typeCondition: namedType(typeCondition),
        selectionSet: selectionSet(selections),
    };
}
exports.inlineFragment = inlineFragment;
function selectionSet(selections = []) {
    return {
        kind: "SelectionSet",
        selections: selections,
    };
}
exports.selectionSet = selectionSet;
function field(fieldName, alias, args, selections, directives) {
    return {
        kind: "Field",
        name: name(fieldName),
        alias: alias ? name(alias) : undefined,
        arguments: args,
        selectionSet: selectionSet(selections),
        directives,
    };
}
exports.field = field;
function arg(argName, value) {
    return {
        kind: "Argument",
        name: name(argName),
        value,
    };
}
exports.arg = arg;
function name(value) {
    return {
        kind: "Name",
        value: value,
    };
}
exports.name = name;
function namedType(typeName) {
    return {
        kind: "NamedType",
        name: name(typeName),
    };
}
exports.namedType = namedType;
function fragmentSpread(fragmentName) {
    return {
        kind: "FragmentSpread",
        name: name(fragmentName),
    };
}
exports.fragmentSpread = fragmentSpread;
function directive(directiveName, args) {
    return {
        kind: "Directive",
        name: name(directiveName),
        arguments: args,
    };
}
exports.directive = directive;
function skipDirective(condition = true) {
    return directive(`skip`, [arg(`if`, boolValue(condition))]);
}
exports.skipDirective = skipDirective;
function boolValue(value) {
    return {
        kind: "BooleanValue",
        value,
    };
}
exports.boolValue = boolValue;
function stringValue(value) {
    return {
        kind: "StringValue",
        value,
    };
}
exports.stringValue = stringValue;
//# sourceMappingURL=ast-nodes.js.map
import { Visitor, ASTKindToNode, TypeInfo } from "graphql";
interface IAddVariableDefinitionsArgs {
    typeInfo: TypeInfo;
}
export declare function addVariableDefinitions({ typeInfo, }: IAddVariableDefinitionsArgs): Visitor<ASTKindToNode>;
export {};

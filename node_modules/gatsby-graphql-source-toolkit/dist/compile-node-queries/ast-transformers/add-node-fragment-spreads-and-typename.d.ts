import { ASTKindToNode, FragmentDefinitionNode, Visitor } from "graphql";
export declare function addNodeFragmentSpreadsAndTypename(nodeFragments: FragmentDefinitionNode[]): Visitor<ASTKindToNode>;

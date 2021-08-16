import { JsonMap } from '../util';
import { Type } from './Type';
import { ManagedType } from './ManagedType';
import { Attribute } from './Attribute';
export declare class ModelBuilder {
    private models;
    private modelDescriptors;
    constructor();
    /**
     * @param ref
     * @return
     */
    getModel(ref: string): ManagedType<any>;
    /**
     * @param modelDescriptors
     * @return
     */
    buildModels(modelDescriptors: JsonMap[]): {
        [name: string]: Type<any>;
    };
    /**
     * @param ref
     * @return
     */
    buildModel(ref: string): ManagedType<any>;
    /**
     * @param model
     * @return
     */
    buildAttributes(model: ManagedType<any>): void;
    /**
     * @param field The field metadata
     * @param field.name The name of zhe field
     * @param field.type The type reference of the field
     * @param field.order The order number of the field
     * @param field.metadata Additional metadata of the field
     * @return
     */
    buildAttribute(field: {
        name: string;
        type: string;
        order: number;
        metadata: {
            [key: string]: string;
        };
        flags: string[];
    }): Attribute<any>;
}

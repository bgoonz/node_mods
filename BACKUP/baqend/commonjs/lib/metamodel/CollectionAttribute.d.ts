import { CollectionType, PluralAttribute } from './PluralAttribute';
import { Class } from '../util';
import { Type } from './Type';
export declare abstract class CollectionAttribute<T, E> extends PluralAttribute<T, E> {
    /**
     * @inheritDoc
     */
    get collectionType(): CollectionType;
    /**
     * @param name - the name of the attribute
     * @param typeConstructor - The collection constructor of the attribute
     * @param elementType - The element type of the collection
     */
    protected constructor(name: string, typeConstructor: Class<T>, elementType: Type<E>);
}

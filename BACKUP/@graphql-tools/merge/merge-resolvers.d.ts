import { IResolvers } from '@graphql-tools/utils';
export declare type ResolversFactory<TContext> = (...args: any[]) => IResolvers<any, TContext>;
export declare type ResolversDefinition<TContext> = IResolvers<any, TContext> | ResolversFactory<TContext>;
/**
 * Additional options for merging resolvers
 */
export interface MergeResolversOptions {
    exclusions?: string[];
}
/**
 * Deep merges multiple resolver definition objects into a single definition.
 * @param resolversDefinitions Resolver definitions to be merged
 * @param options Additional options
 *
 * ```js
 * const { mergeResolvers } = require('@graphql-tools/merge');
 * const clientResolver = require('./clientResolver');
 * const productResolver = require('./productResolver');
 *
 * const resolvers = mergeResolvers([
 *  clientResolver,
 *  productResolver,
 * ]);
 * ```
 *
 * If you don't want to manually create the array of resolver objects, you can
 * also use this function along with loadFiles:
 *
 * ```js
 * const path = require('path');
 * const { mergeResolvers } = require('@graphql-tools/merge');
 * const { loadFilesSync } = require('@graphql-tools/load-files');
 *
 * const resolversArray = loadFilesSync(path.join(__dirname, './resolvers'));
 *
 * const resolvers = mergeResolvers(resolversArray)
 * ```
 */
export declare function mergeResolvers<TContext, T extends ResolversDefinition<TContext>>(resolversDefinitions: T[], options?: MergeResolversOptions): T;

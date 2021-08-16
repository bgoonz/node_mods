import { Factory } from './Factory';
import { File, FileOptions } from './File';
import { JsonMap } from '../util';
import type { EntityManager } from '../EntityManager';
import { Permission } from '../intersection';
export declare type RootFolderMetadata = {
    /**
     * The load permission which grants read access to all stored
     * files under the specified bucket
     */
    load?: Permission;
    /**
     * The insert permission which is required to insert new
     * files into the bucket
     */
    insert?: Permission;
    /**
     * The update permission which is required to update existing
     * files within the bucket
     */
    update?: Permission;
    /**
     * The delete permission which is required to delete existing
     * files within the bucket
     */
    delete?: Permission;
    /**
     * The query permission which is required to list all files
     * within a bucket
     */
    query?: Permission;
};
export interface FileFactory extends Factory<File>, FileConstructor {
}
export declare class FileFactory extends Factory<File> {
    /**
     * Creates a new FileFactory for the given type
     * @param db
     * @return A new file factory
     */
    static create(db: EntityManager): FileFactory;
    /**
     * The owning EntityManager where this factory belongs to
     */
    db: EntityManager;
    /**
     * Creates a new file
     * @param args Constructor arguments used for instantiation, the constructor will not be called
     * when no arguments are passed
     * @return A new created file
     */
    newInstance(args: [FileOptions]): File;
    /**
     * Deserialize the file metadata from a json object back to a new file instance
     * @param json The file metadata as json
     * @return The deserialize File instance
     */
    fromJSON(json: JsonMap): File;
    /**
     * Updates the metadata of the root file directory formally the file "bucket"
     * @param bucket The name of the root file directory
     * @param metadata The new metadata for the bucket
     * @param doneCallback Invoked if the operation succeeds
     * @param failCallback The callback is invoked if any error has occurred
     * @return A promise which will fulfilled with the updated metadata
     */
    saveMetadata(bucket: string, metadata: RootFolderMetadata, doneCallback?: any, failCallback?: any): Promise<any>;
    /**
     * Gets the metadata of the root folder (formally the file "bucket")
     * @param bucket The name of the root file directory
     * @param options The load metadata options
     * @param [options.refresh=false] Force a revalidation while fetching the metadata
     * @param doneCallback
     * The callback is invoked after the metadata is fetched
     * @param failCallback The callback is invoked if any error has occurred
     * @return A promise which will be fulfilled with the bucket ACLs
     */
    loadMetadata(bucket: string, options?: {
        refresh?: boolean;
    }, doneCallback?: any, failCallback?: any): Promise<RootFolderMetadata>;
    /**
     * Lists all the buckets.
     * @param doneCallback The callback is invoked with the listed buckets
     * @param failCallback The callback is invoked if any error has occurred
     * @return The listed buckets.
     */
    listBuckets(doneCallback?: any, failCallback?: any): Promise<File[]>;
    /**
     * Lists the files (and folders) in the given folder.
     *
     * @param folderOrPath The folder/path to list.
     * @param start The file/folder from where to start listing (not included)
     * @param count The maximum number of files to return.
     * @param doneCallback The callback is invoked with the listed files
     * @param failCallback The callback is invoked if any error has occurred
     * @return The listed files/folders.
     */
    listFiles(folderOrPath: File | string, start: File, count: number, doneCallback?: any, failCallback?: any): Promise<File[]>;
}
interface FileConstructor {
    /**
     * Creates a new file object which represents the file at the given ID
     *
     * Data provided to the constructor will be uploaded by invoking {@link upload()}.
     *
     * @param fileOptions The fileOptions used to create a new file object, or just the id of the
     * file object
     * @return A new file instance
     */
    new (fileOptions: FileOptions): File;
}
export {};

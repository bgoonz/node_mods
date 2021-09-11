/// <reference types="node" />
import type { ReadStream } from 'fs';
import { Acl } from '../Acl';
import { Json, JsonArray, JsonMap } from '../util';
import { Message, ProgressListener, RequestBodyType, ResponseBodyType } from '../connector';
import type { EntityManager } from '../EntityManager';
declare const ID: unique symbol;
declare const METADATA: unique symbol;
declare const DATA: unique symbol;
export interface FileIdentifiers {
    /**
     * The id of the file.
     */
    id?: string;
    /**
     * The filename without the id. If omitted and data is provided as a file object,
     * the {@link File#name} will be used otherwise a UUID will be generated.
     */
    name?: string;
    /**
     * The parent folder which contains the file
     */
    parent?: string;
    /**
     * The full path of the file.
     * You might either specify the path of the file or a combination of parent and file name.
     */
    path?: string;
}
export interface FileData {
    /**
     * The initial file content, which will be uploaded by
     * invoking {@link #upload} later on.
     */
    data?: string | Blob | ArrayBuffer | JsonArray | JsonMap | ReadStream;
    /**
     * A optional type hint used to correctly interpret the provided data
     */
    type?: RequestBodyType;
}
export interface FileMetadata {
    /**
     * The mimType of the file. Defaults to the mimeType of the provided data if
     * it is a file object, blob or data-url
     */
    mimeType?: string;
    /**
     * The size of the file content in bytes
     */
    size?: number;
    /**
     * The optional current ETag of the file
     */
    eTag?: string;
    /**
     * The creation date of the file
     */
    createdAt?: string | Date;
    /**
     * The optional last modified date
     */
    lastModified?: string | Date;
    /**
     * The file acl which will be set, if the file is uploaded afterwards
     */
    acl?: Acl;
    /**
     * The custom headers which will be send with the file after updating it
     */
    headers?: {
        [header: string]: string;
    };
}
/**
 * A file name or all file options
 */
export declare type FileOptions = (FileIdentifiers & FileData & FileMetadata) | string;
/**
 * Creates a file object, which represents one specific file reference.
 * This File object can afterwards be used to up- and download the file contents or to retrieves and change the files
 * metadata.
 *
 * The file data can be uploaded and downloaded as:
 *
 *  <table class="table">
 *   <tr>
 *     <th>type</th>
 *     <th>JavaScript type</th>
 *     <th>Description</th>
 *   </tr>
 *   <tr>
 *     <td>'arraybuffer'</td>
 *     <td>ArrayBuffer</td>
 *     <td>The content is represented as a fixed-length raw binary data buffer</td>
 *   </tr>
 *   <tr>
 *     <td>'blob'</th>
 *     <td>Blob</td>
 *     <td>The content is represented as a simple blob</td>
 *   </tr>
 *   <tr>
 *     <td>'json'</td>
 *     <td>object|array|string</td>
 *     <td>The file content is represented as json</td>
 *   </tr>
 *   <tr>
 *     <td>'text'</td>
 *     <td>string</td>
 *     <td>The file content is represented through the string</td>
 *   </tr>
 *   <tr>
 *     <td>'base64'</td>
 *     <td>string</td>
 *     <td>The file content as base64 encoded string</td>
 *   </tr>
 *   <tr>
 *     <td>'data-url'</td>
 *     <td>string</td>
 *     <td>A data url which represents the file content</td>
 *   </tr>
 * </table>
 *
 */
export declare class File {
    /**
     * Specifies whether this file is a folder.
     */
    readonly isFolder: boolean;
    /**
     * The database connection to use
     */
    db: EntityManager;
    private [ID];
    private [METADATA];
    private [DATA];
    /**
     * The complete id of the file, including folder and name
     */
    get id(): string;
    get url(): string;
    /**
     * The name of the file
     */
    get name(): string;
    /**
     * The mimeType of the file, only accessible after fetching the metadata or downloading/uploading/providing the file
     */
    get mimeType(): string | undefined;
    /**
     * The current file acl, only accessible after fetching the metadata or downloading/uploading/providing the file
     */
    get acl(): Acl | undefined;
    /**
     * The last modified date of the file, only accessible after fetching the metadata
     * or downloading/uploading/providing the eTag
     */
    get lastModified(): Date | undefined;
    /**
     * The creation date of the file, only accessible after fetching the metadata
     * or downloading/uploading/providing the eTag
     */
    get createdAt(): Date | undefined;
    /**
     * The eTag of the file, only accessible after fetching the metadata or downloading/uploading/providing the file
     */
    get eTag(): string | undefined;
    /**
     * The custom headers of the file, only accessible after fetching the metadata or downloading/uploading/providing
     * the file
     */
    get headers(): {
        [name: string]: string;
    };
    /**
     * The size of the file, only accessible after fetching the metadata or downloading/uploading/providing the file
     */
    get size(): number | undefined;
    /**
     * The root bucket of this file
     */
    get bucket(): string;
    /**
     * The full path under the bucket of this file
     */
    get key(): string;
    /**
     * The full path of the file.
     */
    get path(): string;
    /**
     * The parent folder of the file.
     */
    get parent(): string;
    /**
     * Indicates if the metadata are loaded.
     */
    get isMetadataLoaded(): boolean;
    /**
     * Creates a new file object which represents a file at the given id. Data which is provided to the constructor will
     * be uploaded by invoking {@link upload()}
     * @param fileOptions The fileOptions used to create a new file object, or just the id of the file
     */
    constructor(fileOptions: FileOptions);
    /**
     * Parses an E-Tag header
     * @param eTag The E-Tag to parse or something falsy
     * @return Returns the parsed E-Tag or null, if it could not be parsed
     */
    static parseETag(eTag?: string): string | null;
    /**
     * The fully url to the file, can be directly used to link the file, i.e. in link tags ot image sources
     * @param authorize - Authorize the the link with an temporary token, to give authorized access to this protected
     * resource default false if the root bucket is www, true otherwise
     * @return A url with an optional token, to give direct access o the linked resource
     */
    createURL(authorize?: boolean): Promise<string>;
    /**
     * Uploads the file content which was provided in the constructor or by uploadOptions.data
     * @param uploadOptions The upload options
     * @param [uploadOptions.force=false] force the upload and overwrite any existing files without validating
     * it
     * @param [uploadOptions.progress] listen to progress changes during upload
     * @param doneCallback The callback is invoked after the upload succeed successfully
     * @param failCallback The callback is invoked if any error is occurred
     * @return A promise which will be fulfilled with this file object where the metadata is updated
     */
    upload(uploadOptions?: FileData & FileMetadata & {
        force?: boolean;
        progress?: ProgressListener;
    }, doneCallback?: any, failCallback?: any): Promise<this>;
    /**
     * Download a file and providing it in the requested type
     * @param downloadOptions The download options
     * @param downloadOptions.type="blob" The type used to provide the file
     * @param downloadOptions.refresh=false Indicates to make a revalidation request and not use the cache
     * @param doneCallback The callback is invoked after the download succeed
     * successfully
     * @param failCallback The callback is invoked if any error is occurred
     * @return A promise which will be fulfilled with the downloaded file content
     */
    download(downloadOptions?: {
        type?: ResponseBodyType;
        refresh?: false;
    }, doneCallback?: any, failCallback?: any): Promise<string | Blob | File | ArrayBuffer | Json | ReadStream>;
    /**
     * Deletes a file
     * @param deleteOptions The delete options
     * @param deleteOptions.force=false force the deletion without verifying any version
     * @param doneCallback The callback is invoked after the deletion succeed successfully
     * @param failCallback The callback is invoked if any error is occurred
     * @return A promise which will be fulfilled with this file object,
     * or with a list of all deleted files, if this file is an folder
     */
    delete(deleteOptions?: {
        force?: boolean;
    }, doneCallback?: any, failCallback?: any): Promise<this | File[]>;
    /**
     * Creates the file id from given options.
     * @param fileOptions
     * @return
     */
    private createIdFromOptions;
    /**
     * Makes the given message a conditional request based on the file metadata
     * @param msg The message to make conditional
     * @param options additional request options
     * @param options.force=false Force the request operation by didn't make it conditional
     */
    conditional(msg: Message, options: {
        force?: boolean;
    }): void;
    /**
     * Gets the file metadata of a file
     * @param options The load metadata options
     * @param [options.refresh=false] Force a revalidation while fetching the metadata
     * @param doneCallback The callback is invoked after the metadata is fetched
     * @param failCallback The callback is invoked if any error has occurred
     * @return A promise which will be fulfilled with this file
     */
    loadMetadata(options?: {
        refresh?: boolean;
    }, doneCallback?: any, failCallback?: any): Promise<this>;
    /**
     * Updates the mata data of this file.
     * @param options The save metadata options
     * @param [options.force=false] force the update and overwrite the existing metadata without validating it
     * @param doneCallback The callback is invoked after the metadata is saved
     * @param failCallback The callback is invoked if any error has occurred
     * @return A promise which will be fulfilled with this file
     */
    saveMetadata(options?: {
        force?: boolean;
    }, doneCallback?: any, failCallback?: any): Promise<this>;
    /**
     * Validates and sets the file metadata based on the given options
     * @param options
     * @private
     */
    setDataOptions(options: FileData & FileMetadata): void;
    /**
     * Gets the MIME type of given file options.
     * @param options
     * @return Returns the guessed MIME type or null, if it could not be guessed.
     * @private
     */
    guessMimeType(options: FileData & FileMetadata): string | null;
    /**
     * @param headers
     */
    private fromHeaders;
    /**
     * Deserialize the given JSON file metadata back to this file instance
     *
     * If the JSON object contains an ID, it must match with this file ID, otherwise an exception is thrown.
     *
     * @param json The json to deserialize
     */
    fromJSON(json: JsonMap | FileMetadata): void;
    /**
     * Serialize the file metadata of this object to json
     * @return The serialized file metadata as json
     */
    toJSON(): JsonMap;
    /**
     * Checks whenever metadata are already loaded of the file, throws an error otherwise
     * @return
     */
    checkAvailable(): void;
}
export {};

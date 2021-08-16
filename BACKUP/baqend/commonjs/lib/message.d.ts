import { Message } from './connector';
import { Json as json } from './util';
interface ListAllResources {
    /**
     * Get the list of all available subresources
     */
    new (): Message;
}
export declare const ListAllResources: ListAllResources;
interface ApiVersion {
    /**
     * Get the API version of the Orestes-Server
     */
    new (): Message;
}
export declare const ApiVersion: ApiVersion;
interface Specification {
    /**
     * The Swagger specification of the Orestes-Server
     */
    new (): Message;
}
export declare const Specification: Specification;
interface GetBloomFilter {
    /**
     * Returns all changed objects
     *
     * @param rules indicates whether the AssetFilter rules should be returned with the current BloomFilter
     */
    new (rules?: boolean): Message;
}
export declare const GetBloomFilter: GetBloomFilter;
interface GetBloomFilterExpirations {
    /**
     * Returns all changed objects
     */
    new (): Message;
}
export declare const GetBloomFilterExpirations: GetBloomFilterExpirations;
interface DeleteBloomFilter {
    /**
     * Clears the Bloom filter (TTLs and stale entries)
     *
     * @param flush indeicates all maintained caches should also be flushed (CDN and SW Caches)
     */
    new (flush?: boolean): Message;
}
export declare const DeleteBloomFilter: DeleteBloomFilter;
interface GetOrestesConfig {
    /**
     * Get the current Orestes config
     */
    new (): Message;
}
export declare const GetOrestesConfig: GetOrestesConfig;
interface UpdateOrestesConfig {
    /**
     * Updates the current Orestes config
     *
     * @param body The massage Content
     */
    new (body?: json): Message;
}
export declare const UpdateOrestesConfig: UpdateOrestesConfig;
interface Connect {
    /**
     * Connects a browser to this server
     */
    new (): Message;
}
export declare const Connect: Connect;
interface Status {
    /**
     * Gets the status of the server health
     */
    new (): Message;
}
export declare const Status: Status;
interface EventsUrl {
    /**
     * Gets the event Endpoint
     */
    new (): Message;
}
export declare const EventsUrl: EventsUrl;
interface BannedIp {
    /**
     * Determines whether the IP has exceeded its rate limit
     *
     * @param ip The ip to test
     */
    new (ip: string): Message;
}
export declare const BannedIp: BannedIp;
interface Banned {
    /**
     * Always returns banned status for proper CDN handling
     */
    new (): Message;
}
export declare const Banned: Banned;
interface Unban {
    /**
     * Clears all rate-limiting information for all IPs
     */
    new (): Message;
}
export declare const Unban: Unban;
interface UnbanIp {
    /**
     * Clears rate-limiting information for given IPs
     *
     * @param ip The ip to reset
     */
    new (ip: string): Message;
}
export declare const UnbanIp: UnbanIp;
interface GetBucketNames {
    /**
     * List all bucket names
     * List all buckets
     */
    new (): Message;
}
export declare const GetBucketNames: GetBucketNames;
interface GetBucketIds {
    /**
     * List objects in bucket
     * List all object ids of the given bucket
     *
     * @param bucket The bucket name
     * @param start The offset to skip
     * @param count The upper limit to return
     */
    new (bucket: string, start?: number, count?: number): Message;
}
export declare const GetBucketIds: GetBucketIds;
interface ExportBucket {
    /**
     * Dump objects of bucket
     * Exports the complete data set of the bucket
     *
     * @param bucket The bucket name
     */
    new (bucket: string): Message;
}
export declare const ExportBucket: ExportBucket;
interface ImportBucket {
    /**
     * Upload all objects to the bucket
     * Imports the complete data set. For large uploads, this call will always return the status code 200.
     * If failures occur, they will be returned in the response body.
     *
     * @param bucket The bucket name
     * @param body The massage Content
     */
    new (bucket: string, body?: json): Message;
}
export declare const ImportBucket: ImportBucket;
interface TruncateBucket {
    /**
     * Delete all objects in bucket
     * Delete all objects in the given bucket
     *
     * @param bucket The bucket name
     */
    new (bucket: string): Message;
}
export declare const TruncateBucket: TruncateBucket;
interface CreateObject {
    /**
     * Create object
     * Create the given object.
     * The created object will get a unique id.
     *
     * @param bucket The bucket name
     * @param body The massage Content
     */
    new (bucket: string, body?: json): Message;
}
export declare const CreateObject: CreateObject;
interface GetObject {
    /**
     * Get object
     * Returns the specified object. Each object has one unique identifier and therefore only one URL.
     *
     * @param bucket The bucket name
     * @param oid The unique object identifier
     */
    new (bucket: string, oid: string): Message;
}
export declare const GetObject: GetObject;
interface ReplaceObject {
    /**
     * Replace object
     * Replace the current object with the updated one.
     * To update a specific version of the object a version can be provided in the If-Match header.
     * The update will only be accepted, if the current version matches the provided one, otherwise the update
     * will be rejected.
     * The * wildcard matches any existing object but prevents an insertion if the object does not exist.
     *
     * @param bucket The bucket name
     * @param oid The unique object identifier
     * @param body The massage Content
     */
    new (bucket: string, oid: string, body?: json): Message;
}
export declare const ReplaceObject: ReplaceObject;
interface DeleteObject {
    /**
     * Delete object
     * Deletes the object. The If-Match Header can be used to specify an expected version. The object will
     * only be deleted if the version matches the provided one. The * wildcard can be used to match any existing
     * version but results in an error if the object does not exist.
     *
     * @param bucket The bucket name
     * @param oid The unique object identifier
     */
    new (bucket: string, oid: string): Message;
}
export declare const DeleteObject: DeleteObject;
interface GetAllSchemas {
    /**
     * Get all available class schemas
     * Gets the complete schema
     */
    new (): Message;
}
export declare const GetAllSchemas: GetAllSchemas;
interface UpdateAllSchemas {
    /**
     * Create new class schemas and update existing class schemas
     * Updates the complete schema, merge all changes, reject the schema update if the schema changes aren't compatible
     *
     * @param body The massage Content
     */
    new (body?: json): Message;
}
export declare const UpdateAllSchemas: UpdateAllSchemas;
interface ReplaceAllSchemas {
    /**
     * Replace all currently created schemas with the new ones
     * Replace the complete schema, with the new one.
     *
     * @param body The massage Content
     */
    new (body?: json): Message;
}
export declare const ReplaceAllSchemas: ReplaceAllSchemas;
interface GetSchema {
    /**
     * Get the class schema
     * Returns the schema definition of the class
     * The class definition contains a link to its parent class and all persistable fields with there types of the class
     *
     * @param bucket The bucket name
     */
    new (bucket: string): Message;
}
export declare const GetSchema: GetSchema;
interface UpdateSchema {
    /**
     * Update the class schema
     * Modify the schema definition of the class by adding all missing fields
     *
     * @param bucket The bucket name
     * @param body The massage Content
     */
    new (bucket: string, body?: json): Message;
}
export declare const UpdateSchema: UpdateSchema;
interface ReplaceSchema {
    /**
     * Replace the class schema
     * Replace the schema definition of the class
     *
     * @param bucket The bucket name
     * @param body The massage Content
     */
    new (bucket: string, body?: json): Message;
}
export declare const ReplaceSchema: ReplaceSchema;
interface DeleteSchema {
    /**
     * Delete the class schema
     * Delete the schema definition of the class
     *
     * @param bucket The bucket name
     */
    new (bucket: string): Message;
}
export declare const DeleteSchema: DeleteSchema;
interface AdhocQuery {
    /**
     * Executes a basic ad-hoc query
     * Executes the given query and returns a list of matching objects.
     *
     * @param bucket The bucket name
     * @param q The query
     * @param start The offset to start from
     * @param count The number of objects to list
     * @param sort The sort object
     * @param eager indicates if the query result should be sent back as ids or as objects
     * @param hinted indicates whether the query should be cached even when capacity limit is reached
     */
    new (bucket: string, q: string, start?: number, count?: number, sort?: string, eager?: boolean, hinted?: boolean): Message;
}
export declare const AdhocQuery: AdhocQuery;
interface AdhocQueryPOST {
    /**
     * Executes a basic ad-hoc query
     * Executes the given query and returns a list of matching objects.
     *
     * @param bucket The bucket name
     * @param start The offset to start from
     * @param count The number of objects to list
     * @param sort The sort object
     * @param body The massage Content
     */
    new (bucket: string, start?: number, count?: number, sort?: string, body?: string): Message;
}
export declare const AdhocQueryPOST: AdhocQueryPOST;
interface AdhocCountQuery {
    /**
     * Executes a count query
     * Executes the given query and returns the number of objects that match the query
     *
     * @param bucket The bucket name
     * @param q The query
     */
    new (bucket: string, q: string): Message;
}
export declare const AdhocCountQuery: AdhocCountQuery;
interface AdhocCountQueryPOST {
    /**
     * Executes a count query
     * Executes the given query and returns the number of objects that match the query
     *
     * @param bucket The bucket name
     * @param body The massage Content
     */
    new (bucket: string, body?: string): Message;
}
export declare const AdhocCountQueryPOST: AdhocCountQueryPOST;
interface ListQueryResources {
    /**
     * List all Query subresources
     */
    new (): Message;
}
export declare const ListQueryResources: ListQueryResources;
interface CreateQuery {
    /**
     * Creates a prepared query
     *
     * @param body The massage Content
     */
    new (body?: json): Message;
}
export declare const CreateQuery: CreateQuery;
interface ListThisQueryResources {
    /**
     * List all subresources of a query
     *
     * @param qid The query id
     */
    new (qid: string): Message;
}
export declare const ListThisQueryResources: ListThisQueryResources;
interface GetQueryCode {
    /**
     * Get the query string
     *
     * @param qid The query id
     */
    new (qid: string): Message;
}
export declare const GetQueryCode: GetQueryCode;
interface RunQuery {
    /**
     * Executes a prepared query
     *
     * @param qid The query id
     * @param start The offset from where to start from
     * @param count The number of objects to enlist
     */
    new (qid: string, start?: number, count?: number): Message;
}
export declare const RunQuery: RunQuery;
interface GetQueryParameters {
    /**
     * Get the declared query parameters
     *
     * @param qid The query id
     */
    new (qid: string): Message;
}
export declare const GetQueryParameters: GetQueryParameters;
interface NewTransaction {
    /**
     * Starts a new Transaction
     */
    new (): Message;
}
export declare const NewTransaction: NewTransaction;
interface CommitTransaction {
    /**
     * Commits the transaction
     * If the transaction can be completed a list of all changed objects with their updated versions are returned.
     *
     * @param tid The transaction id
     * @param body The massage Content
     */
    new (tid: string, body?: json): Message;
}
export declare const CommitTransaction: CommitTransaction;
interface UpdatePartially {
    /**
     * Update the object
     * Executes the partial updates on the object.
     * To update an object an explicit version must be provided in the If-Match header.
     * If the version is not equal to the current object version the update will be aborted.
     * The version identifier Any (*) can be used to skip the version validation and therefore
     * the update will always be applied.
     *
     * @param bucket The bucket name
     * @param oid The unique object identifier
     * @param body The massage Content
     */
    new (bucket: string, oid: string, body?: json): Message;
}
export declare const UpdatePartially: UpdatePartially;
interface UpdateField {
    /**
     * Update the object field
     * Executes the partial update on a object field.
     * To update an object an explicit version must be provided in the If-Match header.
     * If the version is not equal to the current object version the update will be aborted.
     * The version identifier Any (*) can be used to skip the version validation and therefore
     * the update will always be applied.
     *
     * @param bucket The bucket name
     * @param oid The unique object identifier
     * @param field The field name
     * @param body The massage Content
     */
    new (bucket: string, oid: string, field: string, body?: json): Message;
}
export declare const UpdateField: UpdateField;
interface Login {
    /**
     * Method to login a user
     * Log in a user by it's credentials
     *
     * @param body The massage Content
     */
    new (body?: json): Message;
}
export declare const Login: Login;
interface Register {
    /**
     * Method to register a user
     * Register and creates a new user
     *
     * @param body The massage Content
     */
    new (body?: json): Message;
}
export declare const Register: Register;
interface Me {
    /**
     * Method to load the current user object
     * Gets the user object of the currently logged in user
     */
    new (): Message;
}
export declare const Me: Me;
interface ValidateUser {
    /**
     * Method to validate a user token
     * Validates if a given token is still valid
     */
    new (): Message;
}
export declare const ValidateUser: ValidateUser;
interface Logout {
    /**
     * Method to remove token cookie
     * Log out a user by removing the cookie token
     */
    new (): Message;
}
export declare const Logout: Logout;
interface NewPassword {
    /**
     * Method to change the password
     *
     * @param body The massage Content
     */
    new (body?: json): Message;
}
export declare const NewPassword: NewPassword;
interface ResetPassword {
    /**
     * Method to request a new password
     *
     * @param body The massage Content
     */
    new (body?: json): Message;
}
export declare const ResetPassword: ResetPassword;
interface Verify {
    /**
     * Method to verify user by a given token
     *
     * @param token Token to verify the user
     */
    new (token?: string): Message;
}
export declare const Verify: Verify;
interface ChangeUsername {
    /**
     * Method to request a change of the username
     *
     * @param body The massage Content
     */
    new (body?: json): Message;
}
export declare const ChangeUsername: ChangeUsername;
interface VerifyUsername {
    /**
     * Method to verify a username by a given token
     *
     * @param token Token to verify the user
     */
    new (token?: string): Message;
}
export declare const VerifyUsername: VerifyUsername;
interface OAuth2 {
    /**
     * Method to register or login using an OAuth provider.
     * This resource is should be invoked by the provider with a redirect after the user granted permission.
     *
     * @param provider The OAuth provider
     * @param device_code The device_code wich was received from the device OAuth request
     * @param state Additional form encoded state. Can contain an optional redirect (url) that will be called after login with the user token attached as query parameter.
     * @param code The code wich was received from the normal OAuth flow
     * @param oauth_verifier OAuth 1.0 code
     * @param oauth_token OAuth 1.0 identifier
     * @param error_description The error description of the oauth provider
     */
    new (provider: string, device_code?: string, state?: string, code?: string, oauth_verifier?: string, oauth_token?: string, error_description?: string): Message;
}
export declare const OAuth2: OAuth2;
interface OAuth1 {
    /**
     * Method to invoke a OAuth-1.0 login/register
     * The resource requests a request-token and redirects the user to the provider page to log-in and grant permission for
     * your application.
     *
     * @param provider The OAuth provider
     */
    new (provider: string): Message;
}
export declare const OAuth1: OAuth1;
interface UserToken {
    /**
     * Generate a token without lifetime
     * Method to generate a token without lifetime
     *
     * @param oid The unique object identifier
     */
    new (oid: string): Message;
}
export declare const UserToken: UserToken;
interface RevokeUserToken {
    /**
     * Revoke all tokens
     * Method to revoke all previously created tokens
     *
     * @param oid The unique object identifier
     */
    new (oid: string): Message;
}
export declare const RevokeUserToken: RevokeUserToken;
interface GetBaqendCode {
    /**
     * Gets the code of the the given bucket and type
     *
     * @param bucket The bucket name
     * @param type The type of the script
     */
    new (bucket: string, type: string): Message;
}
export declare const GetBaqendCode: GetBaqendCode;
interface SetBaqendCode {
    /**
     * Sets the code of the bucket and type
     *
     * @param bucket The bucket name
     * @param type The type of the script
     * @param body The massage Content
     */
    new (bucket: string, type: string, body?: string): Message;
}
export declare const SetBaqendCode: SetBaqendCode;
interface DeleteBaqendCode {
    /**
     * Delete the code of the given bucket and type
     *
     * @param bucket The bucket name
     * @param type The type of the script
     */
    new (bucket: string, type: string): Message;
}
export declare const DeleteBaqendCode: DeleteBaqendCode;
interface PostBaqendModule {
    /**
     * Calls the module of the specific bucket
     *
     * @param bucket The method name
     */
    new (bucket: string): Message;
}
export declare const PostBaqendModule: PostBaqendModule;
interface GetBaqendModule {
    /**
     * Calls the module of the specific bucket
     *
     * @param bucket The module name
     */
    new (bucket: string): Message;
}
export declare const GetBaqendModule: GetBaqendModule;
interface GetAllModules {
    /**
     * List all available modules
     */
    new (): Message;
}
export declare const GetAllModules: GetAllModules;
interface ListFiles {
    /**
     * Get all file ID's in the given folder
     * Retrieve meta-information about all accessible Files and folders in a specified folder.
     *
     * @param bucket The bucket name
     * @param path The folder to list
     * @param start The file/folder name from where to start listing
     * @param count The upper limit to return, -1 is equal to the upper limit of 1000
     * @param deep If true, files of subdirectories are returned as well
     */
    new (bucket: string, path?: string, start?: string, count?: number, deep?: boolean): Message;
}
export declare const ListFiles: ListFiles;
interface ListBuckets {
    /**
     * Get all buckets
     * Gets all buckets.
     */
    new (): Message;
}
export declare const ListBuckets: ListBuckets;
interface DownloadArchive {
    /**
     * Download a bucket archive
     * Downloads an archive containing the bucket contents.
     *
     * @param archive The archive file name
     */
    new (archive: string): Message;
}
export declare const DownloadArchive: DownloadArchive;
interface UploadPatchArchive {
    /**
     * Upload a patch bucket archive
     * Uploads an archive; files contained within that archive will be replaced within the bucket.
     *
     * @param archive The archive file name
     * @param body The massage Content
     */
    new (archive: string, body?: string): Message;
}
export declare const UploadPatchArchive: UploadPatchArchive;
interface GetFileBucketMetadata {
    /**
     * Retrieve the bucket Metadata
     * The bucket metadata object contains the bucketAcl.
     *
     * @param bucket The bucket name
     */
    new (bucket: string): Message;
}
export declare const GetFileBucketMetadata: GetFileBucketMetadata;
interface SetFileBucketMetadata {
    /**
     * Set the Bucket Metadata
     * Creates or replaces the bucket Metadata to control permission access to all included Files.
     *
     * @param bucket The bucket name
     * @param body The massage Content
     */
    new (bucket: string, body?: json): Message;
}
export declare const SetFileBucketMetadata: SetFileBucketMetadata;
interface DeleteFileBucket {
    /**
     * Delete all files of a file Bucket
     * Deletes the bucket and all its content.
     *
     * @param bucket The bucket name
     */
    new (bucket: string): Message;
}
export declare const DeleteFileBucket: DeleteFileBucket;
interface CreateFile {
    /**
     * Creates a new file with a random UUID
     * Creates a file with a random ID, only Insert permissions are required.
     *
     * @param bucket The bucket name
     */
    new (bucket: string): Message;
}
export declare const CreateFile: CreateFile;
interface DownloadFile {
    /**
     * Download a file
     * Downloads a file by its ID.
     *
     * @param bucket The bucket name
     * @param oid The unique object identifier
     */
    new (bucket: string, oid: string): Message;
}
export declare const DownloadFile: DownloadFile;
interface UploadFile {
    /**
     * Upload a new file
     * Uploads and replace an existing file with a new one.
     * The If-Match or If-Unmodified-Since header can be used to make a conditional update
     *
     * @param bucket The bucket name
     * @param oid The unique file identifier
     */
    new (bucket: string, oid: string): Message;
}
export declare const UploadFile: UploadFile;
interface GetFileMetadata {
    /**
     * Get the file metadata
     * Gets the file Acl and metadata.
     *
     * @param bucket The bucket name
     * @param oid The unique object identifier
     */
    new (bucket: string, oid: string): Message;
}
export declare const GetFileMetadata: GetFileMetadata;
interface UpdateFileMetadata {
    /**
     * Update File Metadata
     * Updates the file Metadata.
     *
     * @param bucket The bucket name
     * @param oid The unique object identifier
     * @param body The massage Content
     */
    new (bucket: string, oid: string, body?: json): Message;
}
export declare const UpdateFileMetadata: UpdateFileMetadata;
interface DeleteFile {
    /**
     * Delete a file
     * Deletes a file or a folder with all its contents.
     * The If-Match or If-Unmodified-Since header can be used to make a conditional deletion
     *
     * @param bucket The bucket name
     * @param oid The unique file identifier
     */
    new (bucket: string, oid: string): Message;
}
export declare const DeleteFile: DeleteFile;
interface CreateManifest {
    /**
     * Creates the manifest
     * Creates the manifest with the given data
     *
     * @param body The massage Content
     */
    new (body?: json): Message;
}
export declare const CreateManifest: CreateManifest;
interface DownloadAsset {
    /**
     * Downloads (and clones) an external asset
     * Downloads an external file.
     *
     * @param url The url of the external asset to download
     */
    new (url: string): Message;
}
export declare const DownloadAsset: DownloadAsset;
interface RevalidateAssets {
    /**
     * Checks and purges assets
     * Checks and purges assets for the SpeedKit.
     *
     * @param body The massage Content
     */
    new (body?: json): Message;
}
export declare const RevalidateAssets: RevalidateAssets;
interface GetRevalidationStatus {
    /**
     * Gets the status
     * Get the current status of the revalidation
     *
     * @param id The status id
     */
    new (id: string): Message;
}
export declare const GetRevalidationStatus: GetRevalidationStatus;
interface CancelRevalidation {
    /**
     * Cancel the revalidation
     * Cancel the revalidation for the given ID
     *
     * @param id The revalidation id
     */
    new (id: string): Message;
}
export declare const CancelRevalidation: CancelRevalidation;
interface GetAllRevalidationStatus {
    /**
     * Gets all status
     * Get all revalidation status
     *
     * @param state Filter status by its state
     */
    new (state?: string): Message;
}
export declare const GetAllRevalidationStatus: GetAllRevalidationStatus;
interface CleanUpAssets {
    /**
     * Checks for expired assets
     * Purges assets, which has been expired.
     *
     * @param body The massage Content
     */
    new (body?: string): Message;
}
export declare const CleanUpAssets: CleanUpAssets;
interface CleanUpStorage {
    /**
     * Check for missing DB entries
     * Deletes assets without a DB entry from storage.
     */
    new (): Message;
}
export declare const CleanUpStorage: CleanUpStorage;
interface ListIndexes {
    /**
     * List bucket indexes
     * List all indexes of the given bucket
     *
     * @param bucket The bucket name
     */
    new (bucket: string): Message;
}
export declare const ListIndexes: ListIndexes;
interface CreateDropIndex {
    /**
     * Create or drop bucket index
     * Create or drop a index for the given bucket
     *
     * @param bucket The bucket name
     * @param body The massage Content
     */
    new (bucket: string, body?: json): Message;
}
export declare const CreateDropIndex: CreateDropIndex;
interface DropAllIndexes {
    /**
     * Drop all indexes
     * Drop all indexes on the given bucket
     *
     * @param bucket The bucket name
     */
    new (bucket: string): Message;
}
export declare const DropAllIndexes: DropAllIndexes;
interface DeviceRegister {
    /**
     * Method to register a new device
     * Registers a new devices
     *
     * @param body The massage Content
     */
    new (body?: json): Message;
}
export declare const DeviceRegister: DeviceRegister;
interface DevicePush {
    /**
     * Method to push a message to devices
     * Pushes a message to devices
     *
     * @param body The massage Content
     */
    new (body?: json): Message;
}
export declare const DevicePush: DevicePush;
interface DeviceRegistered {
    /**
     * Check if device is registered
     * Checks if the device is already registered
     */
    new (): Message;
}
export declare const DeviceRegistered: DeviceRegistered;
interface VAPIDKeys {
    /**
     * Generate VAPID Keys
     * Generate VAPID Keys for web push
     */
    new (): Message;
}
export declare const VAPIDKeys: VAPIDKeys;
interface VAPIDPublicKey {
    /**
     * Get VAPID Public Key
     * Get VAPID Public Key for web push
     */
    new (): Message;
}
export declare const VAPIDPublicKey: VAPIDPublicKey;
interface GCMAKey {
    /**
     * Set GCM-API-Key
     * Sets the GCM/FCM API-Key for Android Push
     *
     * @param body The massage Content
     */
    new (body?: string): Message;
}
export declare const GCMAKey: GCMAKey;
interface UploadAPNSCertificate {
    /**
     * Upload APNS certificate
     * Upload APNS certificate for IOS Push
     */
    new (): Message;
}
export declare const UploadAPNSCertificate: UploadAPNSCertificate;
interface Install {
    /**
     * Provides the speed kit installation script
     * Provides the speed kit installation script
     *
     * @param x ignored - Workaround to allow regex in path. TODO: Allow regex for all path in restful-jetty
     * @param d The domain to get the corresponding config
     */
    new (x: string, d?: string): Message;
}
export declare const Install: Install;
interface SW {
    /**
     * Provides the service worker script
     * Provides the service worker script
     *
     * @param x ignored - Workaround to allow regex in path. TODO: Allow regex for all path in restful-jetty
     * @param r String The ID of the Speed Kit install object
     * @param v The version of a released Speed Kit version
     */
    new (x: string, r?: string, v?: string): Message;
}
export declare const SW: SW;
interface Beacon {
    /**
     * Insert RUM Beacon
     * Inserts a RUM Beacon in JSON format.
     *
     * @param body The massage Content
     */
    new (body?: json): Message;
}
export declare const Beacon: Beacon;
export {};

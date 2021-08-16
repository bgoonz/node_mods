"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logout = exports.ValidateUser = exports.Me = exports.Register = exports.Login = exports.UpdateField = exports.UpdatePartially = exports.CommitTransaction = exports.NewTransaction = exports.GetQueryParameters = exports.RunQuery = exports.GetQueryCode = exports.ListThisQueryResources = exports.CreateQuery = exports.ListQueryResources = exports.AdhocCountQueryPOST = exports.AdhocCountQuery = exports.AdhocQueryPOST = exports.AdhocQuery = exports.DeleteSchema = exports.ReplaceSchema = exports.UpdateSchema = exports.GetSchema = exports.ReplaceAllSchemas = exports.UpdateAllSchemas = exports.GetAllSchemas = exports.DeleteObject = exports.ReplaceObject = exports.GetObject = exports.CreateObject = exports.TruncateBucket = exports.ImportBucket = exports.ExportBucket = exports.GetBucketIds = exports.GetBucketNames = exports.UnbanIp = exports.Unban = exports.Banned = exports.BannedIp = exports.EventsUrl = exports.Status = exports.Connect = exports.UpdateOrestesConfig = exports.GetOrestesConfig = exports.DeleteBloomFilter = exports.GetBloomFilterExpirations = exports.GetBloomFilter = exports.Specification = exports.ApiVersion = exports.ListAllResources = void 0;
exports.Beacon = exports.SW = exports.Install = exports.UploadAPNSCertificate = exports.GCMAKey = exports.VAPIDPublicKey = exports.VAPIDKeys = exports.DeviceRegistered = exports.DevicePush = exports.DeviceRegister = exports.DropAllIndexes = exports.CreateDropIndex = exports.ListIndexes = exports.CleanUpStorage = exports.CleanUpAssets = exports.GetAllRevalidationStatus = exports.CancelRevalidation = exports.GetRevalidationStatus = exports.RevalidateAssets = exports.DownloadAsset = exports.CreateManifest = exports.DeleteFile = exports.UpdateFileMetadata = exports.GetFileMetadata = exports.UploadFile = exports.DownloadFile = exports.CreateFile = exports.DeleteFileBucket = exports.SetFileBucketMetadata = exports.GetFileBucketMetadata = exports.UploadPatchArchive = exports.DownloadArchive = exports.ListBuckets = exports.ListFiles = exports.GetAllModules = exports.GetBaqendModule = exports.PostBaqendModule = exports.DeleteBaqendCode = exports.SetBaqendCode = exports.GetBaqendCode = exports.RevokeUserToken = exports.UserToken = exports.OAuth1 = exports.OAuth2 = exports.VerifyUsername = exports.ChangeUsername = exports.Verify = exports.ResetPassword = exports.NewPassword = void 0;
/* DO NOT TOUCH THIS AUTO-GENERATED FILE */
/* eslint-disable max-len,@typescript-eslint/no-redeclare */
var connector_1 = require("./connector");
exports.ListAllResources = connector_1.Message.create({
    method: 'GET',
    path: '/',
    status: [200],
});
exports.ApiVersion = connector_1.Message.create({
    method: 'GET',
    path: '/version',
    status: [200],
});
exports.Specification = connector_1.Message.create({
    method: 'GET',
    path: '/spec',
    status: [200],
});
exports.GetBloomFilter = connector_1.Message.create({
    method: 'GET',
    path: '/bloomfilter?rules=false',
    status: [200],
});
exports.GetBloomFilterExpirations = connector_1.Message.create({
    method: 'GET',
    path: '/bloomfilter/expirations',
    status: [200],
});
exports.DeleteBloomFilter = connector_1.Message.create({
    method: 'DELETE',
    path: '/bloomfilter?flush=true',
    status: [204],
});
exports.GetOrestesConfig = connector_1.Message.create({
    method: 'GET',
    path: '/config',
    status: [200],
});
exports.UpdateOrestesConfig = connector_1.Message.create({
    method: 'PUT',
    path: '/config',
    status: [200, 202],
});
exports.Connect = connector_1.Message.create({
    method: 'GET',
    path: '/connect',
    status: [200],
});
exports.Status = connector_1.Message.create({
    method: 'GET',
    path: '/status',
    status: [200],
});
exports.EventsUrl = connector_1.Message.create({
    method: 'GET',
    path: '/events-url',
    status: [200],
});
exports.BannedIp = connector_1.Message.create({
    method: 'GET',
    path: '/banned/:ip',
    status: [204],
});
exports.Banned = connector_1.Message.create({
    method: 'GET',
    path: '/banned',
    status: [],
});
exports.Unban = connector_1.Message.create({
    method: 'DELETE',
    path: '/banned',
    status: [204],
});
exports.UnbanIp = connector_1.Message.create({
    method: 'DELETE',
    path: '/banned/:ip',
    status: [204],
});
exports.GetBucketNames = connector_1.Message.create({
    method: 'GET',
    path: '/db',
    status: [200],
});
exports.GetBucketIds = connector_1.Message.create({
    method: 'GET',
    path: '/db/:bucket/ids?start=0&count=-1',
    status: [200],
});
exports.ExportBucket = connector_1.Message.create({
    method: 'GET',
    path: '/db/:bucket',
    status: [200],
});
exports.ImportBucket = connector_1.Message.create({
    method: 'PUT',
    path: '/db/:bucket',
    status: [200],
});
exports.TruncateBucket = connector_1.Message.create({
    method: 'DELETE',
    path: '/db/:bucket',
    status: [200],
});
exports.CreateObject = connector_1.Message.create({
    method: 'POST',
    path: '/db/:bucket',
    status: [201, 202],
});
exports.GetObject = connector_1.Message.create({
    method: 'GET',
    path: '/db/:bucket/:oid',
    status: [200, 304],
});
exports.ReplaceObject = connector_1.Message.create({
    method: 'PUT',
    path: '/db/:bucket/:oid',
    status: [200, 202],
});
exports.DeleteObject = connector_1.Message.create({
    method: 'DELETE',
    path: '/db/:bucket/:oid',
    status: [202, 204],
});
exports.GetAllSchemas = connector_1.Message.create({
    method: 'GET',
    path: '/schema',
    status: [200],
});
exports.UpdateAllSchemas = connector_1.Message.create({
    method: 'POST',
    path: '/schema',
    status: [200],
});
exports.ReplaceAllSchemas = connector_1.Message.create({
    method: 'PUT',
    path: '/schema',
    status: [200],
});
exports.GetSchema = connector_1.Message.create({
    method: 'GET',
    path: '/schema/:bucket',
    status: [200],
});
exports.UpdateSchema = connector_1.Message.create({
    method: 'POST',
    path: '/schema/:bucket',
    status: [200],
});
exports.ReplaceSchema = connector_1.Message.create({
    method: 'PUT',
    path: '/schema/:bucket',
    status: [200],
});
exports.DeleteSchema = connector_1.Message.create({
    method: 'DELETE',
    path: '/schema/:bucket',
    status: [204],
});
exports.AdhocQuery = connector_1.Message.create({
    method: 'GET',
    path: '/db/:bucket/query?q&start=0&count=-1&sort=&eager=&hinted=',
    status: [200],
});
exports.AdhocQueryPOST = connector_1.Message.create({
    method: 'POST',
    path: '/db/:bucket/query?start=0&count=-1&sort=',
    status: [200],
});
exports.AdhocCountQuery = connector_1.Message.create({
    method: 'GET',
    path: '/db/:bucket/count?q',
    status: [200],
});
exports.AdhocCountQueryPOST = connector_1.Message.create({
    method: 'POST',
    path: '/db/:bucket/count',
    status: [200],
});
exports.ListQueryResources = connector_1.Message.create({
    method: 'GET',
    path: '/query',
    status: [200],
});
exports.CreateQuery = connector_1.Message.create({
    method: 'POST',
    path: '/query',
    status: [201],
});
exports.ListThisQueryResources = connector_1.Message.create({
    method: 'GET',
    path: '/query/:qid',
    status: [200],
});
exports.GetQueryCode = connector_1.Message.create({
    method: 'GET',
    path: '/query/:qid/source',
    status: [200],
});
exports.RunQuery = connector_1.Message.create({
    method: 'GET',
    path: '/query/:qid/result?start=0&count=-1',
    status: [200],
});
exports.GetQueryParameters = connector_1.Message.create({
    method: 'GET',
    path: '/query/:qid/parameters',
    status: [200],
});
exports.NewTransaction = connector_1.Message.create({
    method: 'POST',
    path: '/transaction',
    status: [201],
});
exports.CommitTransaction = connector_1.Message.create({
    method: 'PUT',
    path: '/transaction/:tid/committed',
    status: [200],
});
exports.UpdatePartially = connector_1.Message.create({
    method: 'POST',
    path: '/db/:bucket/:oid',
    status: [200],
});
exports.UpdateField = connector_1.Message.create({
    method: 'POST',
    path: '/db/:bucket/:oid/:field',
    status: [200],
});
exports.Login = connector_1.Message.create({
    method: 'POST',
    path: '/db/User/login',
    status: [200],
});
exports.Register = connector_1.Message.create({
    method: 'POST',
    path: '/db/User/register',
    status: [200, 204],
});
exports.Me = connector_1.Message.create({
    method: 'GET',
    path: '/db/User/me',
    status: [200],
});
exports.ValidateUser = connector_1.Message.create({
    method: 'GET',
    path: '/db/User/validate',
    status: [200],
});
exports.Logout = connector_1.Message.create({
    method: 'GET',
    path: '/db/User/logout',
    status: [204],
});
exports.NewPassword = connector_1.Message.create({
    method: 'POST',
    path: '/db/User/password',
    status: [200],
});
exports.ResetPassword = connector_1.Message.create({
    method: 'POST',
    path: '/db/User/reset',
    status: [200],
});
exports.Verify = connector_1.Message.create({
    method: 'GET',
    path: '/db/User/verify?token=',
    status: [204],
});
exports.ChangeUsername = connector_1.Message.create({
    method: 'POST',
    path: '/db/User/changeUsername',
    status: [204],
});
exports.VerifyUsername = connector_1.Message.create({
    method: 'GET',
    path: '/db/User/verifyUsername?token=',
    status: [204],
});
exports.OAuth2 = connector_1.Message.create({
    method: 'GET',
    path: '/db/User/OAuth/:provider?device_code=&state=&code=&oauth_verifier=&oauth_token=&error_description=',
    status: [200],
});
exports.OAuth1 = connector_1.Message.create({
    method: 'GET',
    path: '/db/User/OAuth1/:provider',
    status: [200],
});
exports.UserToken = connector_1.Message.create({
    method: 'POST',
    path: '/db/User/:oid/token',
    status: [200],
});
exports.RevokeUserToken = connector_1.Message.create({
    method: 'DELETE',
    path: '/db/User/:oid/token',
    status: [204],
});
exports.GetBaqendCode = connector_1.Message.create({
    method: 'GET',
    path: '/code/:bucket/:type',
    status: [200],
});
exports.SetBaqendCode = connector_1.Message.create({
    method: 'PUT',
    path: '/code/:bucket/:type',
    status: [200, 202],
});
exports.DeleteBaqendCode = connector_1.Message.create({
    method: 'DELETE',
    path: '/code/:bucket/:type',
    status: [202, 204],
});
exports.PostBaqendModule = connector_1.Message.create({
    method: 'POST',
    path: '/code/:bucket',
    status: [200, 204],
});
exports.GetBaqendModule = connector_1.Message.create({
    method: 'GET',
    path: '/code/:bucket',
    status: [200, 204],
});
exports.GetAllModules = connector_1.Message.create({
    method: 'GET',
    path: '/code',
    status: [200],
});
exports.ListFiles = connector_1.Message.create({
    method: 'GET',
    path: '/file/:bucket/ids?path=/&start=&count=-1&deep=false',
    status: [200],
});
exports.ListBuckets = connector_1.Message.create({
    method: 'GET',
    path: '/file/buckets',
    status: [200],
});
exports.DownloadArchive = connector_1.Message.create({
    method: 'GET',
    path: '/file',
    status: [200],
});
exports.UploadPatchArchive = connector_1.Message.create({
    method: 'POST',
    path: '/file',
    status: [200],
});
exports.GetFileBucketMetadata = connector_1.Message.create({
    method: 'GET',
    path: '/file/:bucket',
    status: [200],
});
exports.SetFileBucketMetadata = connector_1.Message.create({
    method: 'PUT',
    path: '/file/:bucket',
    status: [204],
});
exports.DeleteFileBucket = connector_1.Message.create({
    method: 'DELETE',
    path: '/file/:bucket',
    status: [204],
});
exports.CreateFile = connector_1.Message.create({
    method: 'POST',
    path: '/file/:bucket',
    status: [200],
});
exports.DownloadFile = connector_1.Message.create({
    method: 'GET',
    path: '/file/:bucket/*oid',
    status: [200, 304],
});
exports.UploadFile = connector_1.Message.create({
    method: 'PUT',
    path: '/file/:bucket/*oid',
    status: [200],
});
exports.GetFileMetadata = connector_1.Message.create({
    method: 'HEAD',
    path: '/file/:bucket/*oid',
    status: [200],
});
exports.UpdateFileMetadata = connector_1.Message.create({
    method: 'POST',
    path: '/file/:bucket/*oid',
    status: [200],
});
exports.DeleteFile = connector_1.Message.create({
    method: 'DELETE',
    path: '/file/:bucket/*oid',
    status: [200, 204],
});
exports.CreateManifest = connector_1.Message.create({
    method: 'POST',
    path: '/pwa/manifest',
    status: [202],
});
exports.DownloadAsset = connector_1.Message.create({
    method: 'GET',
    path: '/asset/*url',
    status: [200, 304],
});
exports.RevalidateAssets = connector_1.Message.create({
    method: 'POST',
    path: '/asset/revalidate',
    status: [202],
});
exports.GetRevalidationStatus = connector_1.Message.create({
    method: 'GET',
    path: '/asset/revalidate/:id',
    status: [200, 202],
});
exports.CancelRevalidation = connector_1.Message.create({
    method: 'DELETE',
    path: '/asset/revalidate/:id',
    status: [202],
});
exports.GetAllRevalidationStatus = connector_1.Message.create({
    method: 'GET',
    path: '/asset/revalidate?state=',
    status: [200],
});
exports.CleanUpAssets = connector_1.Message.create({
    method: 'POST',
    path: '/asset/cleanup',
    status: [202],
});
exports.CleanUpStorage = connector_1.Message.create({
    method: 'POST',
    path: '/asset/cleanup/storage',
    status: [202],
});
exports.ListIndexes = connector_1.Message.create({
    method: 'GET',
    path: '/index/:bucket',
    status: [200],
});
exports.CreateDropIndex = connector_1.Message.create({
    method: 'POST',
    path: '/index/:bucket',
    status: [202],
});
exports.DropAllIndexes = connector_1.Message.create({
    method: 'DELETE',
    path: '/index/:bucket',
    status: [202],
});
exports.DeviceRegister = connector_1.Message.create({
    method: 'POST',
    path: '/db/Device/register',
    status: [200],
});
exports.DevicePush = connector_1.Message.create({
    method: 'POST',
    path: '/db/Device/push',
    status: [204],
});
exports.DeviceRegistered = connector_1.Message.create({
    method: 'GET',
    path: '/db/Device/registered',
    status: [200],
});
exports.VAPIDKeys = connector_1.Message.create({
    method: 'POST',
    path: '/config/VAPIDKeys',
    status: [200],
});
exports.VAPIDPublicKey = connector_1.Message.create({
    method: 'GET',
    path: '/config/VAPIDPublicKey',
    status: [200],
});
exports.GCMAKey = connector_1.Message.create({
    method: 'POST',
    path: '/config/GCMKey',
    status: [204],
});
exports.UploadAPNSCertificate = connector_1.Message.create({
    method: 'POST',
    path: '/config/APNSCert',
    status: [204],
});
exports.Install = connector_1.Message.create({
    method: 'GET',
    path: '/speedkit?d=',
    status: [200],
});
exports.SW = connector_1.Message.create({
    method: 'GET',
    path: '/speedkit?r=&v=',
    status: [200],
});
exports.Beacon = connector_1.Message.create({
    method: 'POST',
    path: '/rum/pi',
    status: [200],
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2xpYi9tZXNzYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSwyQ0FBMkM7QUFDM0MsNERBQTREO0FBQzVELHlDQUFzQztBQVN6QixRQUFBLGdCQUFnQixHQUFHLG1CQUFPLENBQUMsTUFBTSxDQUFtQjtJQUMvRCxNQUFNLEVBQUUsS0FBSztJQUNiLElBQUksRUFBRSxHQUFHO0lBQ1QsTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDO0NBQ2QsQ0FBQyxDQUFDO0FBUVUsUUFBQSxVQUFVLEdBQUcsbUJBQU8sQ0FBQyxNQUFNLENBQWE7SUFDbkQsTUFBTSxFQUFFLEtBQUs7SUFDYixJQUFJLEVBQUUsVUFBVTtJQUNoQixNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUM7Q0FDZCxDQUFDLENBQUM7QUFRVSxRQUFBLGFBQWEsR0FBRyxtQkFBTyxDQUFDLE1BQU0sQ0FBZ0I7SUFDekQsTUFBTSxFQUFFLEtBQUs7SUFDYixJQUFJLEVBQUUsT0FBTztJQUNiLE1BQU0sRUFBRSxDQUFDLEdBQUcsQ0FBQztDQUNkLENBQUMsQ0FBQztBQVVVLFFBQUEsY0FBYyxHQUFHLG1CQUFPLENBQUMsTUFBTSxDQUFpQjtJQUMzRCxNQUFNLEVBQUUsS0FBSztJQUNiLElBQUksRUFBRSwwQkFBMEI7SUFDaEMsTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDO0NBQ2QsQ0FBQyxDQUFDO0FBUVUsUUFBQSx5QkFBeUIsR0FBRyxtQkFBTyxDQUFDLE1BQU0sQ0FBNEI7SUFDakYsTUFBTSxFQUFFLEtBQUs7SUFDYixJQUFJLEVBQUUsMEJBQTBCO0lBQ2hDLE1BQU0sRUFBRSxDQUFDLEdBQUcsQ0FBQztDQUNkLENBQUMsQ0FBQztBQVVVLFFBQUEsaUJBQWlCLEdBQUcsbUJBQU8sQ0FBQyxNQUFNLENBQW9CO0lBQ2pFLE1BQU0sRUFBRSxRQUFRO0lBQ2hCLElBQUksRUFBRSx5QkFBeUI7SUFDL0IsTUFBTSxF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
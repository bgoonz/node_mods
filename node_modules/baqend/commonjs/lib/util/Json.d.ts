export declare type Json = boolean | number | string | null | JsonArray | JsonMap;
export interface JsonMap {
    [key: string]: Json;
}
export interface JsonArray extends Array<Json> {
}
export declare type JsonSerializable = {
    toJSON(): JsonLike;
};
export declare type JsonLike = boolean | number | string | null | JsonSerializable | Array<JsonLike> | {
    [P in any]: JsonLike;
};

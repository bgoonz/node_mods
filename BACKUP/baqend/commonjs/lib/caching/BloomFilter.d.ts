/**
 * A Bloom Filter is a client-side kept cache sketch of the server cache
 */
export declare class BloomFilter {
    /**
     * The raw bytes of this Bloom filter.
     * @type string
     * @readonly
     */
    readonly bytes: string;
    /**
     * The amount of bits.
     * @type number
     * @readonly
     */
    readonly bits: number;
    /**
     * The amount of hashes.
     * @type number
     * @readonly
     */
    readonly hashes: number;
    /**
     * The creation timestamp of this bloom filter.
     * @type number
     * @readonly
     */
    readonly creation: number;
    /**
     * @param bloomFilter The raw Bloom filter.
     * @param bloomFilter.m The raw Bloom filter bits.
     * @param bloomFilter.h The raw Bloom filter hashes.
     * @param bloomFilter.b The Base64-encoded raw Bloom filter bytes.
     */
    constructor(bloomFilter: {
        m: number;
        h: number;
        b: string;
    });
    /**
     * Returns whether this Bloom filter contains the given element.
     *
     * @param element The element to check if it is contained.
     * @return True, if the element is contained in this Bloom filter.
     */
    contains(element: string): boolean;
    /**
     * Checks whether a bit is set at a given position.
     *
     * @param index The position index to check.
     * @return True, if the bit is set at the given position.
     */
    private isSet;
    /**
     * Returns the hases of a given element in the Bloom filter.
     *
     * @param element The element to check.
     * @param bits The amount of bits.
     * @param hashes The amount of hashes.
     * @return The hashes of an element in the Bloom filter.
     */
    private static getHashes;
    /**
     * Calculate a Murmur3 hash.
     *
     * @param seed A seed to use for the hashing.
     * @param key A key to check.
     * @return A hashed value of key.
     */
    private static murmur3;
}

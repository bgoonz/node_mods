import { JsonMap } from './util';
/**
 * Creates a new GeoPoint instance
 * From latitude and longitude
 * From a json object
 * Or an tuple of latitude and longitude
 */
export declare class GeoPoint {
    /**
     * How many radians fit in one degree.
     */
    static readonly DEG_TO_RAD: number;
    /**
     * The Earth radius in kilometers used by {@link GeoPoint#kilometersTo}
     */
    static readonly EARTH_RADIUS_IN_KILOMETERS = 6371;
    /**
     * The Earth radius in miles used by {@link GeoPoint#milesTo}
     */
    static readonly EARTH_RADIUS_IN_MILES = 3956;
    /**
     * Longitude of the given point
     */
    longitude: number;
    /**
     * Latitude of the given point
     */
    latitude: number;
    /**
     * Creates a GeoPoint with the user's current location, if available.
     * @return A promise that will be resolved with a GeoPoint
     */
    static current(): Promise<GeoPoint>;
    /**
     * @param latitude A coordinate pair (latitude first),
     * a GeoPoint like object or the GeoPoint's latitude
     * @param longitude The GeoPoint's longitude
     */
    constructor(latitude?: number | string | {
        latitude: number;
        longitude: number;
    } | [number, number], longitude?: number);
    /**
     * Returns the distance from this GeoPoint to another in kilometers.
     * @param point another GeoPoint
     * @return The distance in kilometers
     *
     * @see GeoPoint#radiansTo
     */
    kilometersTo(point: GeoPoint): number;
    /**
     * Returns the distance from this GeoPoint to another in miles.
     * @param point another GeoPoint
     * @return The distance in miles
     *
     * @see GeoPoint#radiansTo
     */
    milesTo(point: GeoPoint): number;
    /**
     * Computes the arc, in radian, between two WGS-84 positions.
     *
     * The haversine formula implementation is taken from:
     * {@link http://www.movable-type.co.uk/scripts/latlong.html}
     *
     * Returns the distance from this GeoPoint to another in radians.
     * @param point another GeoPoint
     * @return the arc, in radian, between two WGS-84 positions
     *
     * @see http://en.wikipedia.org/wiki/Haversine_formula
     */
    radiansTo(point: GeoPoint): number;
    /**
     * A String representation in latitude, longitude format
     * @return The string representation of this class
     */
    toString(): string;
    /**
     * Returns a JSON representation of the GeoPoint
     * @return A GeoJson object of this GeoPoint
     */
    toJSON(): JsonMap;
}

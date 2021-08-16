"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeoPoint = void 0;
/**
 * Creates a new GeoPoint instance
 * From latitude and longitude
 * From a json object
 * Or an tuple of latitude and longitude
 */
var GeoPoint = /** @class */ (function () {
    /**
     * @param latitude A coordinate pair (latitude first),
     * a GeoPoint like object or the GeoPoint's latitude
     * @param longitude The GeoPoint's longitude
     */
    function GeoPoint(latitude, longitude) {
        var lat;
        var lng;
        if (typeof latitude === 'string') {
            var index = latitude.indexOf(';');
            lat = Number(latitude.substring(0, index));
            lng = Number(latitude.substring(index + 1));
        }
        else if (Array.isArray(latitude)) {
            lat = latitude[0], lng = latitude[1];
        }
        else if (typeof latitude === 'object') {
            lat = latitude.latitude;
            lng = latitude.longitude;
        }
        else {
            lat = typeof latitude === 'number' ? latitude : 0;
            lng = typeof longitude === 'number' ? longitude : 0;
        }
        this.longitude = lng;
        this.latitude = lat;
        if (this.latitude < -90 || this.latitude > 90) {
            throw new Error("Latitude " + this.latitude + " is not in bound of -90 <= latitude <= 90");
        }
        if (this.longitude < -180 || this.longitude > 180) {
            throw new Error("Longitude " + this.longitude + " is not in bound of -180 <= longitude <= 180");
        }
    }
    /**
     * Creates a GeoPoint with the user's current location, if available.
     * @return A promise that will be resolved with a GeoPoint
     */
    GeoPoint.current = function () {
        return new Promise((function (resolve, reject) {
            if (!navigator) {
                reject(new Error('This seems not to be a browser context.'));
            }
            if (!navigator.geolocation) {
                reject(new Error('This browser does not support geolocation.'));
            }
            navigator.geolocation.getCurrentPosition(function (location) {
                resolve(new GeoPoint(location.coords.latitude, location.coords.longitude));
            }, function (error) {
                reject(error);
            });
        }));
    };
    /**
     * Returns the distance from this GeoPoint to another in kilometers.
     * @param point another GeoPoint
     * @return The distance in kilometers
     *
     * @see GeoPoint#radiansTo
     */
    GeoPoint.prototype.kilometersTo = function (point) {
        return Number((GeoPoint.EARTH_RADIUS_IN_KILOMETERS * this.radiansTo(point)).toFixed(3));
    };
    /**
     * Returns the distance from this GeoPoint to another in miles.
     * @param point another GeoPoint
     * @return The distance in miles
     *
     * @see GeoPoint#radiansTo
     */
    GeoPoint.prototype.milesTo = function (point) {
        return Number((GeoPoint.EARTH_RADIUS_IN_MILES * this.radiansTo(point)).toFixed(3));
    };
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
    GeoPoint.prototype.radiansTo = function (point) {
        var from = this;
        var to = point;
        var rad1 = from.latitude * GeoPoint.DEG_TO_RAD;
        var rad2 = to.latitude * GeoPoint.DEG_TO_RAD;
        var dLng = (to.longitude - from.longitude) * GeoPoint.DEG_TO_RAD;
        return Math.acos((Math.sin(rad1) * Math.sin(rad2)) + (Math.cos(rad1) * Math.cos(rad2) * Math.cos(dLng)));
    };
    /**
     * A String representation in latitude, longitude format
     * @return The string representation of this class
     */
    GeoPoint.prototype.toString = function () {
        return this.latitude + ";" + this.longitude;
    };
    /**
     * Returns a JSON representation of the GeoPoint
     * @return A GeoJson object of this GeoPoint
     */
    GeoPoint.prototype.toJSON = function () {
        return { latitude: this.latitude, longitude: this.longitude };
    };
    /**
     * How many radians fit in one degree.
     */
    GeoPoint.DEG_TO_RAD = Math.PI / 180;
    /**
     * The Earth radius in kilometers used by {@link GeoPoint#kilometersTo}
     */
    GeoPoint.EARTH_RADIUS_IN_KILOMETERS = 6371;
    /**
     * The Earth radius in miles used by {@link GeoPoint#milesTo}
     */
    GeoPoint.EARTH_RADIUS_IN_MILES = 3956;
    return GeoPoint;
}());
exports.GeoPoint = GeoPoint;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2VvUG9pbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9saWIvR2VvUG9pbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBRUE7Ozs7O0dBS0c7QUFDSDtJQStDRTs7OztPQUlHO0lBQ0gsa0JBQVksUUFBdUYsRUFDakcsU0FBa0I7UUFDbEIsSUFBSSxHQUFXLENBQUM7UUFDaEIsSUFBSSxHQUFXLENBQUM7UUFDaEIsSUFBSSxPQUFPLFFBQVEsS0FBSyxRQUFRLEVBQUU7WUFDaEMsSUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNwQyxHQUFHLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDM0MsR0FBRyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzdDO2FBQU0sSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQ2pDLEdBQUcsR0FBUyxRQUFRLEdBQWpCLEVBQUUsR0FBRyxHQUFJLFFBQVEsR0FBWixDQUFhO1NBQ3ZCO2FBQU0sSUFBSSxPQUFPLFFBQVEsS0FBSyxRQUFRLEVBQUU7WUFDdkMsR0FBRyxHQUFHLFFBQVEsQ0FBQyxRQUFRLENBQUM7WUFDeEIsR0FBRyxHQUFHLFFBQVEsQ0FBQyxTQUFTLENBQUM7U0FDMUI7YUFBTTtZQUNMLEdBQUcsR0FBRyxPQUFPLFFBQVEsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2xELEdBQUcsR0FBRyxPQUFPLFNBQVMsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3JEO1FBRUQsSUFBSSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUM7UUFDckIs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
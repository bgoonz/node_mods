"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityPartialUpdateBuilder = void 0;
var PartialUpdateBuilder_1 = require("./PartialUpdateBuilder");
var message = __importStar(require("../message"));
var intersection_1 = require("../intersection");
var EntityPartialUpdateBuilder = /** @class */ (function (_super) {
    __extends(EntityPartialUpdateBuilder, _super);
    /**
     * @param entity
     * @param operations
     */
    function EntityPartialUpdateBuilder(entity, operations) {
        var _this = _super.call(this, operations) || this;
        _this.entity = entity;
        return _this;
    }
    /**
     * @inheritDoc
     */
    EntityPartialUpdateBuilder.prototype.execute = function () {
        var _this = this;
        var state = intersection_1.Metadata.get(this.entity);
        var body = JSON.stringify(this);
        var msg = new message.UpdatePartially(state.bucket, state.key, body);
        return state.withLock(function () { return (state.db.send(msg).then(function (response) {
            // Update the entity’s values
            state.type.fromJsonValue(state, response.entity, _this.entity, { persisting: true });
            return _this.entity;
        })); });
    };
    return EntityPartialUpdateBuilder;
}(PartialUpdateBuilder_1.PartialUpdateBuilder));
exports.EntityPartialUpdateBuilder = EntityPartialUpdateBuilder;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRW50aXR5UGFydGlhbFVwZGF0ZUJ1aWxkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9saWIvcGFydGlhbHVwZGF0ZS9FbnRpdHlQYXJ0aWFsVXBkYXRlQnVpbGRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0RBQThEO0FBRTlELGtEQUFzQztBQUV0QyxnREFBMkM7QUFFM0M7SUFBa0UsOENBQXVCO0lBQ3ZGOzs7T0FHRztJQUNILG9DQUE0QixNQUFTLEVBQUUsVUFBbUI7UUFBMUQsWUFDRSxrQkFBTSxVQUFVLENBQUMsU0FDbEI7UUFGMkIsWUFBTSxHQUFOLE1BQU0sQ0FBRzs7SUFFckMsQ0FBQztJQUVEOztPQUVHO0lBQ0gsNENBQU8sR0FBUDtRQUFBLGlCQVlDO1FBWEMsSUFBTSxLQUFLLEdBQUcsdUJBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3hDLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEMsSUFBTSxHQUFHLEdBQUcsSUFBSSxPQUFPLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLEdBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUV4RSxPQUFPLEtBQUssQ0FBQyxRQUFRLENBQUMsY0FBTSxPQUFBLENBQzFCLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLFFBQVE7WUFDL0IsNkJBQTZCO1lBQzdCLEtBQUssQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsTUFBTSxFQUFFLEtBQUksQ0FBQyxNQUFNLEVBQUUsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztZQUNwRixPQUFPLEtBQUksQ0FBQyxNQUFNLENBQUM7UUFDckIsQ0FBQyxDQUFDLENBQ0gsRUFOMkIsQ0FNM0IsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNILGlDQUFDO0FBQUQsQ0FBQyxBQXpCRCxDQUFrRSwyQ0FBb0IsR0F5QnJGO0FBekJZLGdFQUEwQiJ9
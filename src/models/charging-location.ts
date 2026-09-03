import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { location1Schema, type Location1 } from "./location1.js";

export type ChargingLocation = {
  name?: string;
  type?: string;
  distanceMiles?: number;
  amenities?: string;
  availableStalls?: number;
  totalStalls?: number;
  siteClosed?: boolean;
  billingInfo?: string;
  location?: Location1;
};

export const chargingLocationSchema: Schema<ChargingLocation> = s.object<ChargingLocation>({
  name: s.optional(s.string()),
  type: s.optional(s.string()),
  distanceMiles: s.optional(s.number()),
  amenities: s.optional(s.string()),
  availableStalls: s.optional(s.number()),
  totalStalls: s.optional(s.number()),
  siteClosed: s.optional(s.boolean()),
  billingInfo: s.optional(s.string()),
  location: s.optional(s.lazy(() => location1Schema)),
  _keysMap: {
    distanceMiles: "distance_miles",
    availableStalls: "available_stalls",
    totalStalls: "total_stalls",
    siteClosed: "site_closed",
    billingInfo: "billing_info",
  },
});

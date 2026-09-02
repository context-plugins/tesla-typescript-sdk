import { s, type Schema } from "../core/index.js";
import { chargingLocationSchema, type ChargingLocation } from "./charging-location.js";

export type Response3 = {
  destinationCharging?: ChargingLocation[];
  superchargers?: ChargingLocation[];
  timestamp?: number;
};

export const response3Schema: Schema<Response3> = s.object<Response3>({
  destinationCharging: s.optional(s.array(s.lazy(() => chargingLocationSchema))),
  superchargers: s.optional(s.array(s.lazy(() => chargingLocationSchema))),
  timestamp: s.optional(s.number()),
  _keysMap: {
    destinationCharging: "destination_charging",
  },
});

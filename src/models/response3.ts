import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { chargingLocationSchema, type ChargingLocation } from "./charging-location.js";

export type Response3 = {
  destinationCharging?: ChargingLocation[];
  superchargers?: ChargingLocation[];
  timestamp?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const response3Schema: Schema<Response3> = s.object<Response3>(
  {
    destinationCharging: s.optional(s.array(s.lazy(() => chargingLocationSchema))),
    superchargers: s.optional(s.array(s.lazy(() => chargingLocationSchema))),
    timestamp: s.optional(s.int()),
    _keysMap: {
      destinationCharging: "destination_charging",
    },
  },
  { additionalProperties: s.json() },
);

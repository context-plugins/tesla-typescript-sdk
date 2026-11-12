import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Response1 = {
  fleetTelemetryErrorVins: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const response1Schema: Schema<Response1> = s.object<Response1>(
  {
    fleetTelemetryErrorVins: s.array(s.string()),
    _keysMap: {
      fleetTelemetryErrorVins: "fleet_telemetry_error_vins",
    },
  },
  { additionalProperties: s.json() },
);

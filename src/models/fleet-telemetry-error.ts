import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type FleetTelemetryError = {
  name: string;
  error: string;
  vin: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const fleetTelemetryErrorSchema: Schema<FleetTelemetryError> = s.object<FleetTelemetryError>(
  {
    name: s.string(),
    error: s.string(),
    vin: s.string(),
  },
  { additionalProperties: s.json() },
);

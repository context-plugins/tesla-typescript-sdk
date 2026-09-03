import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FleetTelemetryError = {
  name: string;
  error: string;
  vin: string;
};

export const fleetTelemetryErrorSchema: Schema<FleetTelemetryError> = s.object<FleetTelemetryError>({
  name: s.string(),
  error: s.string(),
  vin: s.string(),
});

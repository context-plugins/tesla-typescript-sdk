import { s, type Schema } from "../core/index.js";

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

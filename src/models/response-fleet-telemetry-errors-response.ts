import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { fleetTelemetryErrorSchema, type FleetTelemetryError } from "./fleet-telemetry-error.js";

export type ResponseFleetTelemetryErrorsResponse = {
  fleetTelemetryErrors: FleetTelemetryError[];
};

export const responseFleetTelemetryErrorsResponseSchema: Schema<ResponseFleetTelemetryErrorsResponse> =
  s.object<ResponseFleetTelemetryErrorsResponse>({
    fleetTelemetryErrors: s.array(s.lazy(() => fleetTelemetryErrorSchema)),
    _keysMap: {
      fleetTelemetryErrors: "fleet_telemetry_errors",
    },
  });

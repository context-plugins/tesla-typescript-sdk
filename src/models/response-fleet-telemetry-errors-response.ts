import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { fleetTelemetryErrorSchema, type FleetTelemetryError } from "./fleet-telemetry-error.js";

export type ResponseFleetTelemetryErrorsResponse = {
  fleetTelemetryErrors: FleetTelemetryError[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const responseFleetTelemetryErrorsResponseSchema: Schema<ResponseFleetTelemetryErrorsResponse> =
  s.object<ResponseFleetTelemetryErrorsResponse>(
    {
      fleetTelemetryErrors: s.array(s.lazy(() => fleetTelemetryErrorSchema)),
      _keysMap: {
        fleetTelemetryErrors: "fleet_telemetry_errors",
      },
    },
    { additionalProperties: s.json() },
  );

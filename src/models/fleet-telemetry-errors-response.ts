import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  responseFleetTelemetryErrorsResponseSchema,
  type ResponseFleetTelemetryErrorsResponse,
} from "./response-fleet-telemetry-errors-response.js";

export type FleetTelemetryErrorsResponse = {
  response: ResponseFleetTelemetryErrorsResponse;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const fleetTelemetryErrorsResponseSchema: Schema<FleetTelemetryErrorsResponse> =
  s.object<FleetTelemetryErrorsResponse>(
    {
      response: responseFleetTelemetryErrorsResponseSchema,
    },
    { additionalProperties: s.json() },
  );

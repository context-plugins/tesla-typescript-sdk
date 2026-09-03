import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  responseFleetTelemetryErrorsResponseSchema,
  type ResponseFleetTelemetryErrorsResponse,
} from "./response-fleet-telemetry-errors-response.js";

export type FleetTelemetryErrorsResponse = {
  response: ResponseFleetTelemetryErrorsResponse;
};

export const fleetTelemetryErrorsResponseSchema: Schema<FleetTelemetryErrorsResponse> =
  s.object<FleetTelemetryErrorsResponse>({
    response: responseFleetTelemetryErrorsResponseSchema,
  });

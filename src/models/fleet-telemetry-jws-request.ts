import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type FleetTelemetryJwsRequest = {
  token?: string;
  vins?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const fleetTelemetryJwsRequestSchema: Schema<FleetTelemetryJwsRequest> =
  s.object<FleetTelemetryJwsRequest>(
    {
      token: s.optional(s.string()),
      vins: s.optional(s.array(s.string())),
    },
    { additionalProperties: s.json() },
  );

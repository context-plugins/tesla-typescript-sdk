import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FleetTelemetryJwsRequest = {
  token?: string;
  vins?: string[];
};

export const fleetTelemetryJwsRequestSchema: Schema<FleetTelemetryJwsRequest> =
  s.object<FleetTelemetryJwsRequest>({
    token: s.optional(s.string()),
    vins: s.optional(s.array(s.string())),
  });

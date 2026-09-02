import { s, type Schema } from "../core/index.js";

export type FleetTelemetryJwsRequest = {
  token?: string;
  vins?: string[];
};

export const fleetTelemetryJwsRequestSchema: Schema<FleetTelemetryJwsRequest> =
  s.object<FleetTelemetryJwsRequest>({
    token: s.optional(s.string()),
    vins: s.optional(s.array(s.string())),
  });

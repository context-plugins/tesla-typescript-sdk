import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Response1 = {
  fleetTelemetryErrorVins: string[];
};

export const response1Schema: Schema<Response1> = s.object<Response1>({
  fleetTelemetryErrorVins: s.array(s.string()),
  _keysMap: {
    fleetTelemetryErrorVins: "fleet_telemetry_error_vins",
  },
});

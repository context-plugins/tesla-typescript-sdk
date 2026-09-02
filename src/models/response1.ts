import { s, type Schema } from "../core/index.js";

export type Response1 = {
  fleetTelemetryErrorVins: string[];
};

export const response1Schema: Schema<Response1> = s.object<Response1>({
  fleetTelemetryErrorVins: s.array(s.string()),
  _keysMap: {
    fleetTelemetryErrorVins: "fleet_telemetry_error_vins",
  },
});

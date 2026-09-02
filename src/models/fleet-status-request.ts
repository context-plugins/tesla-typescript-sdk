import { s, type Schema } from "../core/index.js";

export type FleetStatusRequest = {
  vins?: string[];
};

export const fleetStatusRequestSchema: Schema<FleetStatusRequest> = s.object<FleetStatusRequest>({
  vins: s.optional(s.array(s.string())),
});

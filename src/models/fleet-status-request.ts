import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FleetStatusRequest = {
  vins?: string[];
};

export const fleetStatusRequestSchema: Schema<FleetStatusRequest> = s.object<FleetStatusRequest>({
  vins: s.optional(s.array(s.string())),
});

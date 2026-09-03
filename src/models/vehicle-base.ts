import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type VehicleBase = {
  id?: number;
  vehicleId?: number;
  vin?: string;
  displayName?: string;
  accessType?: string;
  state?: string;
  inService?: boolean;
  calendarEnabled?: boolean;
};

export const vehicleBaseSchema: Schema<VehicleBase> = s.object<VehicleBase>({
  id: s.optional(s.number()),
  vehicleId: s.optional(s.number()),
  vin: s.optional(s.string()),
  displayName: s.optional(s.string()),
  accessType: s.optional(s.string()),
  state: s.optional(s.string()),
  inService: s.optional(s.boolean()),
  calendarEnabled: s.optional(s.boolean()),
  _keysMap: {
    vehicleId: "vehicle_id",
    displayName: "display_name",
    accessType: "access_type",
    inService: "in_service",
    calendarEnabled: "calendar_enabled",
  },
});

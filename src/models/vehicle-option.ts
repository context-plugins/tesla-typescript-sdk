import { s, type Schema } from "../core/index.js";

export type VehicleOption = {
  code?: string;
  displayName?: string;
  colorCode?: string | null;
  isActive?: boolean;
};

export const vehicleOptionSchema: Schema<VehicleOption> = s.object<VehicleOption>({
  code: s.optional(s.string()),
  displayName: s.optional(s.string()),
  colorCode: s.optionalNullable(s.string()),
  isActive: s.optional(s.boolean()),
});

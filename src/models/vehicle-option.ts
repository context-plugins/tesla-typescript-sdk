import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type VehicleOption = {
  code?: string;
  displayName?: string;
  colorCode?: string | null;
  isActive?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const vehicleOptionSchema: Schema<VehicleOption> = s.object<VehicleOption>(
  {
    code: s.optional(s.string()),
    displayName: s.optional(s.string()),
    colorCode: s.optionalNullable(s.string()),
    isActive: s.optional(s.boolean()),
  },
  { additionalProperties: s.json() },
);

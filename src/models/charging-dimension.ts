import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ChargingDimension = {
  type?: string;
  volume?: number;
};

export const chargingDimensionSchema: Schema<ChargingDimension> = s.object<ChargingDimension>({
  type: s.optional(s.string()),
  volume: s.optional(s.number()),
});

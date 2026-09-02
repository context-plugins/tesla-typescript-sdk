import { s, type Schema } from "../core/index.js";

export type ChargingDimension = {
  type?: string;
  volume?: number;
};

export const chargingDimensionSchema: Schema<ChargingDimension> = s.object<ChargingDimension>({
  type: s.optional(s.string()),
  volume: s.optional(s.number()),
});

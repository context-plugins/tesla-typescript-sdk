import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ChargingDimension = {
  type?: string;
  volume?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const chargingDimensionSchema: Schema<ChargingDimension> = s.object<ChargingDimension>(
  {
    type: s.optional(s.string()),
    volume: s.optional(s.float64()),
  },
  { additionalProperties: s.json() },
);

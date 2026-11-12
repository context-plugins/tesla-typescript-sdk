import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { chargingDimensionSchema, type ChargingDimension } from "./charging-dimension.js";

export type ChargingPeriod = {
  startDateTime?: string;
  dimensions?: ChargingDimension[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const chargingPeriodSchema: Schema<ChargingPeriod> = s.object<ChargingPeriod>(
  {
    startDateTime: s.optional(s.string()),
    dimensions: s.optional(s.array(s.lazy(() => chargingDimensionSchema))),
    _keysMap: {
      startDateTime: "start_date_time",
    },
  },
  { additionalProperties: s.json() },
);

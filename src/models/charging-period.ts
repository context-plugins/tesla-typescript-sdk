import { s, type Schema } from "../core/index.js";
import { chargingDimensionSchema, type ChargingDimension } from "./charging-dimension.js";

export type ChargingPeriod = {
  startDateTime?: string;
  dimensions?: ChargingDimension[];
};

export const chargingPeriodSchema: Schema<ChargingPeriod> = s.object<ChargingPeriod>({
  startDateTime: s.optional(s.string()),
  dimensions: s.optional(s.array(s.lazy(() => chargingDimensionSchema))),
  _keysMap: {
    startDateTime: "start_date_time",
  },
});

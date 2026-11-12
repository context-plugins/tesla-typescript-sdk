import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { chargingPeriodSchema, type ChargingPeriod } from "./charging-period.js";
import { locationSchema, type Location } from "./location.js";
import { tariffsSchema, type Tariffs } from "./tariffs.js";
import { totalCostSchema, type TotalCost } from "./total-cost.js";

export type ChargingSession = {
  id?: string;
  vin?: string;
  model?: string;
  startDateTime?: string;
  stopDateTime?: string;
  totalEnergy?: number;
  totalTime?: number;
  totalCost?: TotalCost;
  location?: Location;
  chargingPeriods?: ChargingPeriod[];
  tariffs?: Tariffs;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const chargingSessionSchema: Schema<ChargingSession> = s.object<ChargingSession>(
  {
    id: s.optional(s.string()),
    vin: s.optional(s.string()),
    model: s.optional(s.string()),
    startDateTime: s.optional(s.string()),
    stopDateTime: s.optional(s.string()),
    totalEnergy: s.optional(s.float64()),
    totalTime: s.optional(s.float64()),
    totalCost: s.optional(s.lazy(() => totalCostSchema)),
    location: s.optional(s.lazy(() => locationSchema)),
    chargingPeriods: s.optional(s.array(s.lazy(() => chargingPeriodSchema))),
    tariffs: s.optional(s.lazy(() => tariffsSchema)),
    _keysMap: {
      startDateTime: "start_date_time",
      stopDateTime: "stop_date_time",
      totalEnergy: "total_energy",
      totalTime: "total_time",
      totalCost: "total_cost",
      chargingPeriods: "charging_periods",
    },
  },
  { additionalProperties: s.json() },
);

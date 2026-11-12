import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { chargeDurationSchema, type ChargeDuration } from "./charge-duration.js";
import { chargeStartTimeSchema, type ChargeStartTime } from "./charge-start-time.js";

export type ChargeHistory = {
  chargeStartTime: ChargeStartTime;
  chargeDuration: ChargeDuration;
  energyAddedWh: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const chargeHistorySchema: Schema<ChargeHistory> = s.object<ChargeHistory>(
  {
    chargeStartTime: chargeStartTimeSchema,
    chargeDuration: chargeDurationSchema,
    energyAddedWh: s.int(),
    _keysMap: {
      chargeStartTime: "charge_start_time",
      chargeDuration: "charge_duration",
      energyAddedWh: "energy_added_wh",
    },
  },
  { additionalProperties: s.json() },
);

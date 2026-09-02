import { s, type Schema } from "../core/index.js";
import { chargeDurationSchema, type ChargeDuration } from "./charge-duration.js";
import { chargeStartTimeSchema, type ChargeStartTime } from "./charge-start-time.js";

export type ChargeHistory = {
  chargeStartTime: ChargeStartTime;
  chargeDuration: ChargeDuration;
  energyAddedWh: number;
};

export const chargeHistorySchema: Schema<ChargeHistory> = s.object<ChargeHistory>({
  chargeStartTime: chargeStartTimeSchema,
  chargeDuration: chargeDurationSchema,
  energyAddedWh: s.number(),
  _keysMap: {
    chargeStartTime: "charge_start_time",
    chargeDuration: "charge_duration",
    energyAddedWh: "energy_added_wh",
  },
});

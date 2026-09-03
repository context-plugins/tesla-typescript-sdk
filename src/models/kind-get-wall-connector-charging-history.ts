import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const KindGetWallConnectorChargingHistory = {
  Charge: "charge",
} as const;
export type KindGetWallConnectorChargingHistory =
  | (typeof KindGetWallConnectorChargingHistory)[keyof typeof KindGetWallConnectorChargingHistory]
  | (string & {});

export const kindGetWallConnectorChargingHistorySchema: EnumSchema<KindGetWallConnectorChargingHistory> =
  s.enumOf<KindGetWallConnectorChargingHistory>(KindGetWallConnectorChargingHistory);

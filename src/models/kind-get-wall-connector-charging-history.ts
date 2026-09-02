import { s, type EnumSchema } from "../core/index.js";

export const KindGetWallConnectorChargingHistory = {
  Charge: "charge",
} as const;
export type KindGetWallConnectorChargingHistory =
  | (typeof KindGetWallConnectorChargingHistory)[keyof typeof KindGetWallConnectorChargingHistory]
  | (string & {});

export const kindGetWallConnectorChargingHistorySchema: EnumSchema<KindGetWallConnectorChargingHistory> =
  s.enumOf<KindGetWallConnectorChargingHistory>(KindGetWallConnectorChargingHistory);

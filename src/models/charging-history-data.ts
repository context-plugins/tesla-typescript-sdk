import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { chargingHistoryItemSchema, type ChargingHistoryItem } from "./charging-history-item.js";

export type ChargingHistoryData = {
  data: ChargingHistoryItem[];
};

export const chargingHistoryDataSchema: Schema<ChargingHistoryData> = s.object<ChargingHistoryData>({
  data: s.array(s.lazy(() => chargingHistoryItemSchema)),
});

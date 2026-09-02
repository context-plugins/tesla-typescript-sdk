import { s, type Schema } from "../core/index.js";
import { chargingHistoryItemSchema, type ChargingHistoryItem } from "./charging-history-item.js";

export type ChargingHistoryData = {
  data: ChargingHistoryItem[];
};

export const chargingHistoryDataSchema: Schema<ChargingHistoryData> = s.object<ChargingHistoryData>({
  data: s.array(s.lazy(() => chargingHistoryItemSchema)),
});

import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { chargingHistoryItemSchema, type ChargingHistoryItem } from "./charging-history-item.js";

export type ChargingHistoryData = {
  data: ChargingHistoryItem[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const chargingHistoryDataSchema: Schema<ChargingHistoryData> = s.object<ChargingHistoryData>(
  {
    data: s.array(s.lazy(() => chargingHistoryItemSchema)),
  },
  { additionalProperties: s.json() },
);

import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { chargingHistoryDataSchema, type ChargingHistoryData } from "./charging-history-data.js";

export type ChargingHistoryResponse = {
  response: ChargingHistoryData;
};

export const chargingHistoryResponseSchema: Schema<ChargingHistoryResponse> =
  s.object<ChargingHistoryResponse>({
    response: chargingHistoryDataSchema,
  });

import { s, type Schema } from "../core/index.js";
import { chargingHistoryDataSchema, type ChargingHistoryData } from "./charging-history-data.js";

export type ChargingHistoryResponse = {
  response: ChargingHistoryData;
};

export const chargingHistoryResponseSchema: Schema<ChargingHistoryResponse> =
  s.object<ChargingHistoryResponse>({
    response: chargingHistoryDataSchema,
  });

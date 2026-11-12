import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { chargingHistoryDataSchema, type ChargingHistoryData } from "./charging-history-data.js";

export type ChargingHistoryResponse = {
  response: ChargingHistoryData;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const chargingHistoryResponseSchema: Schema<ChargingHistoryResponse> =
  s.object<ChargingHistoryResponse>(
    {
      response: chargingHistoryDataSchema,
    },
    { additionalProperties: s.json() },
  );

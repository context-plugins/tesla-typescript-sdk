import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  responseChargeHistoryResponseSchema,
  type ResponseChargeHistoryResponse,
} from "./response-charge-history-response.js";

export type ChargeHistoryResponse = {
  response: ResponseChargeHistoryResponse;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const chargeHistoryResponseSchema: Schema<ChargeHistoryResponse> = s.object<ChargeHistoryResponse>(
  {
    response: responseChargeHistoryResponseSchema,
  },
  { additionalProperties: s.json() },
);

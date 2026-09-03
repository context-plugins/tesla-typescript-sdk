import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  responseChargeHistoryResponseSchema,
  type ResponseChargeHistoryResponse,
} from "./response-charge-history-response.js";

export type ChargeHistoryResponse = {
  response: ResponseChargeHistoryResponse;
};

export const chargeHistoryResponseSchema: Schema<ChargeHistoryResponse> = s.object<ChargeHistoryResponse>({
  response: responseChargeHistoryResponseSchema,
});

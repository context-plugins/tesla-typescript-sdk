import { s, type Schema } from "../core/index.js";
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

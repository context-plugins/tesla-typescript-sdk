import { s, type Schema } from "../core/index.js";
import { chargeHistorySchema, type ChargeHistory } from "./charge-history.js";

export type ResponseChargeHistoryResponse = {
  chargeHistory: ChargeHistory[];
};

export const responseChargeHistoryResponseSchema: Schema<ResponseChargeHistoryResponse> =
  s.object<ResponseChargeHistoryResponse>({
    chargeHistory: s.array(s.lazy(() => chargeHistorySchema)),
    _keysMap: {
      chargeHistory: "charge_history",
    },
  });

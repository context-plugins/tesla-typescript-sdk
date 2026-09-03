import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
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

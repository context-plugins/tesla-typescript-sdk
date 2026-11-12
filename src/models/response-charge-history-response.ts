import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { chargeHistorySchema, type ChargeHistory } from "./charge-history.js";

export type ResponseChargeHistoryResponse = {
  chargeHistory: ChargeHistory[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const responseChargeHistoryResponseSchema: Schema<ResponseChargeHistoryResponse> =
  s.object<ResponseChargeHistoryResponse>(
    {
      chargeHistory: s.array(s.lazy(() => chargeHistorySchema)),
      _keysMap: {
        chargeHistory: "charge_history",
      },
    },
    { additionalProperties: s.json() },
  );

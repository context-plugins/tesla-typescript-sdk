import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ChargeStartTime = {
  seconds: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const chargeStartTimeSchema: Schema<ChargeStartTime> = s.object<ChargeStartTime>(
  {
    seconds: s.int(),
  },
  { additionalProperties: s.json() },
);

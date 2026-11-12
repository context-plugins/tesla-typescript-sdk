import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ChargeDuration = {
  seconds: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const chargeDurationSchema: Schema<ChargeDuration> = s.object<ChargeDuration>(
  {
    seconds: s.int(),
  },
  { additionalProperties: s.json() },
);

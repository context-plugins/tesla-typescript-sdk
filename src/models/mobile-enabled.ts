import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type MobileEnabled = {
  result?: boolean;
  reason?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const mobileEnabledSchema: Schema<MobileEnabled> = s.object<MobileEnabled>(
  {
    result: s.optional(s.boolean()),
    reason: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);

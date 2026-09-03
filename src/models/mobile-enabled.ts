import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type MobileEnabled = {
  result?: boolean;
  reason?: string;
};

export const mobileEnabledSchema: Schema<MobileEnabled> = s.object<MobileEnabled>({
  result: s.optional(s.boolean()),
  reason: s.optional(s.string()),
});

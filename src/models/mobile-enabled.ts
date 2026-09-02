import { s, type Schema } from "../core/index.js";

export type MobileEnabled = {
  result?: boolean;
  reason?: string;
};

export const mobileEnabledSchema: Schema<MobileEnabled> = s.object<MobileEnabled>({
  result: s.optional(s.boolean()),
  reason: s.optional(s.string()),
});

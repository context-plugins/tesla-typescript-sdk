import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SiteInfoResponse = {
  response?: Record<string, unknown>;
};

export const siteInfoResponseSchema: Schema<SiteInfoResponse> = s.object<SiteInfoResponse>({
  response: s.optional(s.record(s.string(), s.unknown())),
});

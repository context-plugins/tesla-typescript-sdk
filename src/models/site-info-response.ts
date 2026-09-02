import { s, type Schema } from "../core/index.js";

export type SiteInfoResponse = {
  response?: Record<string, unknown>;
};

export const siteInfoResponseSchema: Schema<SiteInfoResponse> = s.object<SiteInfoResponse>({
  response: s.optional(s.record(s.string(), s.unknown())),
});

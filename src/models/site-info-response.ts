import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type SiteInfoResponse = {
  response?: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const siteInfoResponseSchema: Schema<SiteInfoResponse> = s.object<SiteInfoResponse>(
  {
    response: s.optional(s.record(s.string(), s.unknown())),
  },
  { additionalProperties: s.json() },
);

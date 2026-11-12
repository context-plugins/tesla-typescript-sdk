import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type RegisterPartnerRequest = {
  domain: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const registerPartnerRequestSchema: Schema<RegisterPartnerRequest> = s.object<RegisterPartnerRequest>(
  {
    domain: s.string(),
  },
  { additionalProperties: s.json() },
);

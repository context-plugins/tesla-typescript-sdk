import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type RegisterPartnerRequest = {
  domain: string;
};

export const registerPartnerRequestSchema: Schema<RegisterPartnerRequest> = s.object<RegisterPartnerRequest>({
  domain: s.string(),
});

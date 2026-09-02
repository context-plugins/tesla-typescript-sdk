import { s, type Schema } from "../core/index.js";

export type RegisterPartnerRequest = {
  domain: string;
};

export const registerPartnerRequestSchema: Schema<RegisterPartnerRequest> = s.object<RegisterPartnerRequest>({
  domain: s.string(),
});

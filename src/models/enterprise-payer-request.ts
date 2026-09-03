import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type EnterprisePayerRequest = {
  role: string;
  federationId?: string;
  accountId?: string;
};

export const enterprisePayerRequestSchema: Schema<EnterprisePayerRequest> = s.object<EnterprisePayerRequest>({
  role: s.string(),
  federationId: s.optional(s.string()),
  accountId: s.optional(s.string()),
  _keysMap: {
    federationId: "federation_id",
    accountId: "account_id",
  },
});

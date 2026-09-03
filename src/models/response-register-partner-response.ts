import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ResponseRegisterPartnerResponse = {
  clientId: string;
  name: string;
  description?: string;
  domain: string;
  ca?: string | null;
  createdAt: Date;
  updatedAt: Date;
  enterpriseTier: string;
  accountId: string;
  issuer?: string | null;
  csr?: string | null;
  csrUpdatedAt?: Date | null;
  publicKey: string;
  publicKeyHash: string;
};

export const responseRegisterPartnerResponseSchema: Schema<ResponseRegisterPartnerResponse> =
  s.object<ResponseRegisterPartnerResponse>({
    clientId: s.string(),
    name: s.string(),
    description: s.optional(s.string()),
    domain: s.string(),
    ca: s.optionalNullable(s.string()),
    createdAt: s.dateTime(),
    updatedAt: s.dateTime(),
    enterpriseTier: s.string(),
    accountId: s.string(),
    issuer: s.optionalNullable(s.string()),
    csr: s.optionalNullable(s.string()),
    csrUpdatedAt: s.optionalNullable(s.dateTime()),
    publicKey: s.string(),
    publicKeyHash: s.string(),
    _keysMap: {
      clientId: "client_id",
      createdAt: "created_at",
      updatedAt: "updated_at",
      enterpriseTier: "enterprise_tier",
      accountId: "account_id",
      csrUpdatedAt: "csr_updated_at",
      publicKey: "public_key",
      publicKeyHash: "public_key_hash",
    },
  });

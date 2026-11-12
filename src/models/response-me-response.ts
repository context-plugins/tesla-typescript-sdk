import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ResponseMeResponse = {
  email: string;
  fullName: string;
  profileImageUrl: string;
  vaultUuid: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const responseMeResponseSchema: Schema<ResponseMeResponse> = s.object<ResponseMeResponse>(
  {
    email: s.string(),
    fullName: s.string(),
    profileImageUrl: s.string(),
    vaultUuid: s.string(),
    _keysMap: {
      fullName: "full_name",
      profileImageUrl: "profile_image_url",
      vaultUuid: "vault_uuid",
    },
  },
  { additionalProperties: s.json() },
);

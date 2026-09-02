import { s, type Schema } from "../core/index.js";

export type ResponseMeResponse = {
  email: string;
  fullName: string;
  profileImageUrl: string;
  vaultUuid: string;
};

export const responseMeResponseSchema: Schema<ResponseMeResponse> = s.object<ResponseMeResponse>({
  email: s.string(),
  fullName: s.string(),
  profileImageUrl: s.string(),
  vaultUuid: s.string(),
  _keysMap: {
    fullName: "full_name",
    profileImageUrl: "profile_image_url",
    vaultUuid: "vault_uuid",
  },
});

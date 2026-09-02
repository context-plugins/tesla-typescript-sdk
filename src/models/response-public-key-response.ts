import { s, type Schema } from "../core/index.js";

export type ResponsePublicKeyResponse = {
  publicKey: string;
};

export const responsePublicKeyResponseSchema: Schema<ResponsePublicKeyResponse> =
  s.object<ResponsePublicKeyResponse>({
    publicKey: s.string(),
    _keysMap: {
      publicKey: "public_key",
    },
  });

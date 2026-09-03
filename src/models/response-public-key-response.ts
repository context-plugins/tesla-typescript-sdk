import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

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

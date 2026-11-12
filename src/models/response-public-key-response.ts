import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ResponsePublicKeyResponse = {
  publicKey: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const responsePublicKeyResponseSchema: Schema<ResponsePublicKeyResponse> =
  s.object<ResponsePublicKeyResponse>(
    {
      publicKey: s.string(),
      _keysMap: {
        publicKey: "public_key",
      },
    },
    { additionalProperties: s.json() },
  );

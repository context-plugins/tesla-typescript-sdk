import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  responsePublicKeyResponseSchema,
  type ResponsePublicKeyResponse,
} from "./response-public-key-response.js";

export type PublicKeyResponse = {
  response: ResponsePublicKeyResponse;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const publicKeyResponseSchema: Schema<PublicKeyResponse> = s.object<PublicKeyResponse>(
  {
    response: responsePublicKeyResponseSchema,
  },
  { additionalProperties: s.json() },
);

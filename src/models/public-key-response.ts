import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  responsePublicKeyResponseSchema,
  type ResponsePublicKeyResponse,
} from "./response-public-key-response.js";

export type PublicKeyResponse = {
  response: ResponsePublicKeyResponse;
};

export const publicKeyResponseSchema: Schema<PublicKeyResponse> = s.object<PublicKeyResponse>({
  response: responsePublicKeyResponseSchema,
});

import { s, type Schema } from "../core/index.js";
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

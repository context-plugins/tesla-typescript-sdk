import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  responseRegisterPartnerResponseSchema,
  type ResponseRegisterPartnerResponse,
} from "./response-register-partner-response.js";

export type RegisterPartnerResponse = {
  response: ResponseRegisterPartnerResponse;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const registerPartnerResponseSchema: Schema<RegisterPartnerResponse> =
  s.object<RegisterPartnerResponse>(
    {
      response: responseRegisterPartnerResponseSchema,
    },
    { additionalProperties: s.json() },
  );

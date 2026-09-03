import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  responseRegisterPartnerResponseSchema,
  type ResponseRegisterPartnerResponse,
} from "./response-register-partner-response.js";

export type RegisterPartnerResponse = {
  response: ResponseRegisterPartnerResponse;
};

export const registerPartnerResponseSchema: Schema<RegisterPartnerResponse> =
  s.object<RegisterPartnerResponse>({
    response: responseRegisterPartnerResponseSchema,
  });

import { s, type Schema } from "../core/index.js";
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

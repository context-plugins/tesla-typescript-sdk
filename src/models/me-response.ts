import { s, type Schema } from "../core/index.js";
import { responseMeResponseSchema, type ResponseMeResponse } from "./response-me-response.js";

export type MeResponse = {
  response: ResponseMeResponse;
};

export const meResponseSchema: Schema<MeResponse> = s.object<MeResponse>({
  response: responseMeResponseSchema,
});

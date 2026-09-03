import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { responseMeResponseSchema, type ResponseMeResponse } from "./response-me-response.js";

export type MeResponse = {
  response: ResponseMeResponse;
};

export const meResponseSchema: Schema<MeResponse> = s.object<MeResponse>({
  response: responseMeResponseSchema,
});

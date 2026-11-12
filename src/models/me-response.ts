import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { responseMeResponseSchema, type ResponseMeResponse } from "./response-me-response.js";

export type MeResponse = {
  response: ResponseMeResponse;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const meResponseSchema: Schema<MeResponse> = s.object<MeResponse>(
  {
    response: responseMeResponseSchema,
  },
  { additionalProperties: s.json() },
);

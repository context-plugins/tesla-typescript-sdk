import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { responseRegionResponseSchema, type ResponseRegionResponse } from "./response-region-response.js";

export type RegionResponse = {
  response: ResponseRegionResponse;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const regionResponseSchema: Schema<RegionResponse> = s.object<RegionResponse>(
  {
    response: responseRegionResponseSchema,
  },
  { additionalProperties: s.json() },
);

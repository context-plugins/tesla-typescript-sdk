import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { responseRegionResponseSchema, type ResponseRegionResponse } from "./response-region-response.js";

export type RegionResponse = {
  response: ResponseRegionResponse;
};

export const regionResponseSchema: Schema<RegionResponse> = s.object<RegionResponse>({
  response: responseRegionResponseSchema,
});

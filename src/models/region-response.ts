import { s, type Schema } from "../core/index.js";
import { responseRegionResponseSchema, type ResponseRegionResponse } from "./response-region-response.js";

export type RegionResponse = {
  response: ResponseRegionResponse;
};

export const regionResponseSchema: Schema<RegionResponse> = s.object<RegionResponse>({
  response: responseRegionResponseSchema,
});

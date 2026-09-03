import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ResponseRegionResponse = {
  region: string;
  fleetApiBaseUrl: string;
};

export const responseRegionResponseSchema: Schema<ResponseRegionResponse> = s.object<ResponseRegionResponse>({
  region: s.string(),
  fleetApiBaseUrl: s.string(),
  _keysMap: {
    fleetApiBaseUrl: "fleet_api_base_url",
  },
});

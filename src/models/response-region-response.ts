import { s, type Schema } from "../core/index.js";

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

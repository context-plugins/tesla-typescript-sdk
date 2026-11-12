import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ResponseRegionResponse = {
  region: string;
  fleetApiBaseUrl: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const responseRegionResponseSchema: Schema<ResponseRegionResponse> = s.object<ResponseRegionResponse>(
  {
    region: s.string(),
    fleetApiBaseUrl: s.string(),
    _keysMap: {
      fleetApiBaseUrl: "fleet_api_base_url",
    },
  },
  { additionalProperties: s.json() },
);

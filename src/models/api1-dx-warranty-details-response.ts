import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  responseApi1DxWarrantyDetailsResponseSchema,
  type ResponseApi1DxWarrantyDetailsResponse,
} from "./response-api1-dx-warranty-details-response.js";

export type Api1DxWarrantyDetailsResponse = {
  response?: ResponseApi1DxWarrantyDetailsResponse;
};

export const api1DxWarrantyDetailsResponseSchema: Schema<Api1DxWarrantyDetailsResponse> =
  s.object<Api1DxWarrantyDetailsResponse>({
    response: s.optional(s.lazy(() => responseApi1DxWarrantyDetailsResponseSchema)),
  });

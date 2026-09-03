import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  responseApi1DxVehiclesOptionsResponseSchema,
  type ResponseApi1DxVehiclesOptionsResponse,
} from "./response-api1-dx-vehicles-options-response.js";

export type Api1DxVehiclesOptionsResponse = {
  response?: ResponseApi1DxVehiclesOptionsResponse;
};

export const api1DxVehiclesOptionsResponseSchema: Schema<Api1DxVehiclesOptionsResponse> =
  s.object<Api1DxVehiclesOptionsResponse>({
    response: s.optional(s.lazy(() => responseApi1DxVehiclesOptionsResponseSchema)),
  });

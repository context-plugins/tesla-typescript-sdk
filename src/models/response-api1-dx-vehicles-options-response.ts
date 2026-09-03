import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { vehicleOptionSchema, type VehicleOption } from "./vehicle-option.js";

export type ResponseApi1DxVehiclesOptionsResponse = {
  codes?: VehicleOption[];
};

export const responseApi1DxVehiclesOptionsResponseSchema: Schema<ResponseApi1DxVehiclesOptionsResponse> =
  s.object<ResponseApi1DxVehiclesOptionsResponse>({
    codes: s.optional(s.array(s.lazy(() => vehicleOptionSchema))),
  });

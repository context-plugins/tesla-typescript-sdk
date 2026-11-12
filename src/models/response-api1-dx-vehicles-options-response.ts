import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { vehicleOptionSchema, type VehicleOption } from "./vehicle-option.js";

export type ResponseApi1DxVehiclesOptionsResponse = {
  codes?: VehicleOption[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const responseApi1DxVehiclesOptionsResponseSchema: Schema<ResponseApi1DxVehiclesOptionsResponse> =
  s.object<ResponseApi1DxVehiclesOptionsResponse>(
    {
      codes: s.optional(s.array(s.lazy(() => vehicleOptionSchema))),
    },
    { additionalProperties: s.json() },
  );

import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { vehicleBaseSchema, type VehicleBase } from "./vehicle-base.js";

export type Api1VehiclesResponseGetVehicle = {
  response?: VehicleBase;
};

export const api1VehiclesResponseGetVehicleSchema: Schema<Api1VehiclesResponseGetVehicle> =
  s.object<Api1VehiclesResponseGetVehicle>({
    response: s.optional(s.lazy(() => vehicleBaseSchema)),
  });

import { s, type Schema } from "../core/index.js";
import { vehicleBaseSchema, type VehicleBase } from "./vehicle-base.js";

export type Api1VehiclesResponseGetVehicle = {
  response?: VehicleBase;
};

export const api1VehiclesResponseGetVehicleSchema: Schema<Api1VehiclesResponseGetVehicle> =
  s.object<Api1VehiclesResponseGetVehicle>({
    response: s.optional(s.lazy(() => vehicleBaseSchema)),
  });

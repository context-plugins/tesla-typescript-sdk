import { s, type Schema } from "../core/index.js";
import { vehicleBaseSchema, type VehicleBase } from "./vehicle-base.js";

export type Api1VehiclesWakeUpResponse = {
  response?: VehicleBase;
};

export const api1VehiclesWakeUpResponseSchema: Schema<Api1VehiclesWakeUpResponse> =
  s.object<Api1VehiclesWakeUpResponse>({
    response: s.optional(s.lazy(() => vehicleBaseSchema)),
  });

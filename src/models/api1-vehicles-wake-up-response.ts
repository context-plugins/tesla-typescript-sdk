import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { vehicleBaseSchema, type VehicleBase } from "./vehicle-base.js";

export type Api1VehiclesWakeUpResponse = {
  response?: VehicleBase;
};

export const api1VehiclesWakeUpResponseSchema: Schema<Api1VehiclesWakeUpResponse> =
  s.object<Api1VehiclesWakeUpResponse>({
    response: s.optional(s.lazy(() => vehicleBaseSchema)),
  });

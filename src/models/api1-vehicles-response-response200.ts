import { s, type Schema } from "../core/index.js";
import { vehicleBaseSchema, type VehicleBase } from "./vehicle-base.js";

export type Api1VehiclesResponseResponse200 = {
  response?: VehicleBase;
};

export const api1VehiclesResponseResponse200Schema: Schema<Api1VehiclesResponseResponse200> =
  s.object<Api1VehiclesResponseResponse200>({
    response: s.optional(s.lazy(() => vehicleBaseSchema)),
  });

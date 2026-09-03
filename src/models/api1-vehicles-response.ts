import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { paginationSchema, type Pagination } from "./pagination.js";
import { vehicleBaseSchema, type VehicleBase } from "./vehicle-base.js";

export type Api1VehiclesResponse = {
  response?: VehicleBase[];
  pagination?: Pagination;
  count?: number;
};

export const api1VehiclesResponseSchema: Schema<Api1VehiclesResponse> = s.object<Api1VehiclesResponse>({
  response: s.optional(s.array(s.lazy(() => vehicleBaseSchema))),
  pagination: s.optional(s.lazy(() => paginationSchema)),
  count: s.optional(s.number()),
});

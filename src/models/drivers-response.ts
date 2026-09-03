import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { driverSchema, type Driver } from "./driver.js";

export type DriversResponse = {
  response?: Driver[];
  count?: number;
};

export const driversResponseSchema: Schema<DriversResponse> = s.object<DriversResponse>({
  response: s.optional(s.array(s.lazy(() => driverSchema))),
  count: s.optional(s.number()),
});

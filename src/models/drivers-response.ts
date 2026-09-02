import { s, type Schema } from "../core/index.js";
import { driverSchema, type Driver } from "./driver.js";

export type DriversResponse = {
  response?: Driver[];
  count?: number;
};

export const driversResponseSchema: Schema<DriversResponse> = s.object<DriversResponse>({
  response: s.optional(s.array(s.lazy(() => driverSchema))),
  count: s.optional(s.number()),
});

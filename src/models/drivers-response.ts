import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { driverSchema, type Driver } from "./driver.js";

export type DriversResponse = {
  response?: Driver[];
  count?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const driversResponseSchema: Schema<DriversResponse> = s.object<DriversResponse>(
  {
    response: s.optional(s.array(s.lazy(() => driverSchema))),
    count: s.optional(s.int()),
  },
  { additionalProperties: s.json() },
);

import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { vehicleBaseSchema, type VehicleBase } from "./vehicle-base.js";

export type Api1VehiclesResponseResponse200 = {
  response?: VehicleBase;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const api1VehiclesResponseResponse200Schema: Schema<Api1VehiclesResponseResponse200> =
  s.object<Api1VehiclesResponseResponse200>(
    {
      response: s.optional(s.lazy(() => vehicleBaseSchema)),
    },
    { additionalProperties: s.json() },
  );

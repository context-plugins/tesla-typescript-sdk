import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { vehicleBaseSchema, type VehicleBase } from "./vehicle-base.js";

export type Api1VehiclesWakeUpResponse = {
  response?: VehicleBase;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const api1VehiclesWakeUpResponseSchema: Schema<Api1VehiclesWakeUpResponse> =
  s.object<Api1VehiclesWakeUpResponse>(
    {
      response: s.optional(s.lazy(() => vehicleBaseSchema)),
    },
    { additionalProperties: s.json() },
  );

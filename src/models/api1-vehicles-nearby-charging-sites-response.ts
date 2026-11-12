import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { response3Schema, type Response3 } from "./response3.js";

export type Api1VehiclesNearbyChargingSitesResponse = {
  response?: Response3;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const api1VehiclesNearbyChargingSitesResponseSchema: Schema<Api1VehiclesNearbyChargingSitesResponse> =
  s.object<Api1VehiclesNearbyChargingSitesResponse>(
    {
      response: s.optional(s.lazy(() => response3Schema)),
    },
    { additionalProperties: s.json() },
  );

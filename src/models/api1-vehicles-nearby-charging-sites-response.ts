import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { response3Schema, type Response3 } from "./response3.js";

export type Api1VehiclesNearbyChargingSitesResponse = {
  response?: Response3;
};

export const api1VehiclesNearbyChargingSitesResponseSchema: Schema<Api1VehiclesNearbyChargingSitesResponse> =
  s.object<Api1VehiclesNearbyChargingSitesResponse>({
    response: s.optional(s.lazy(() => response3Schema)),
  });

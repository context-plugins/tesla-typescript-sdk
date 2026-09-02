import { s, type Schema } from "../core/index.js";
import { response3Schema, type Response3 } from "./response3.js";

export type Api1VehiclesNearbyChargingSitesResponse = {
  response?: Response3;
};

export const api1VehiclesNearbyChargingSitesResponseSchema: Schema<Api1VehiclesNearbyChargingSitesResponse> =
  s.object<Api1VehiclesNearbyChargingSitesResponse>({
    response: s.optional(s.lazy(() => response3Schema)),
  });

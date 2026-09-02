import { s, type Schema } from "../core/index.js";
import { mobileEnabledSchema, type MobileEnabled } from "./mobile-enabled.js";

export type Api1VehiclesMobileEnabledResponse = {
  response?: MobileEnabled;
};

export const api1VehiclesMobileEnabledResponseSchema: Schema<Api1VehiclesMobileEnabledResponse> =
  s.object<Api1VehiclesMobileEnabledResponse>({
    response: s.optional(s.lazy(() => mobileEnabledSchema)),
  });

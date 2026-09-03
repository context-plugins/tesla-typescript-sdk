import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { mobileEnabledSchema, type MobileEnabled } from "./mobile-enabled.js";

export type Api1VehiclesMobileEnabledResponse = {
  response?: MobileEnabled;
};

export const api1VehiclesMobileEnabledResponseSchema: Schema<Api1VehiclesMobileEnabledResponse> =
  s.object<Api1VehiclesMobileEnabledResponse>({
    response: s.optional(s.lazy(() => mobileEnabledSchema)),
  });

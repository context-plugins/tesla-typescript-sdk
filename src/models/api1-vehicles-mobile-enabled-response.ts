import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { mobileEnabledSchema, type MobileEnabled } from "./mobile-enabled.js";

export type Api1VehiclesMobileEnabledResponse = {
  response?: MobileEnabled;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const api1VehiclesMobileEnabledResponseSchema: Schema<Api1VehiclesMobileEnabledResponse> =
  s.object<Api1VehiclesMobileEnabledResponse>(
    {
      response: s.optional(s.lazy(() => mobileEnabledSchema)),
    },
    { additionalProperties: s.json() },
  );

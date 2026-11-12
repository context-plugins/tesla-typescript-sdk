import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type GuestModeRequest = {
  /** Enable or disable Guest Mode */
  enable: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const guestModeRequestSchema: Schema<GuestModeRequest> = s.object<GuestModeRequest>(
  {
    enable: s.boolean(),
  },
  { additionalProperties: s.json() },
);

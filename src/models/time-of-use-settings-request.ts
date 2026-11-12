import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { touSettingsSchema, type TouSettings } from "./tou-settings.js";

export type TimeOfUseSettingsRequest = {
  touSettings: TouSettings;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const timeOfUseSettingsRequestSchema: Schema<TimeOfUseSettingsRequest> =
  s.object<TimeOfUseSettingsRequest>(
    {
      touSettings: touSettingsSchema,
      _keysMap: {
        touSettings: "tou_settings",
      },
    },
    { additionalProperties: s.json() },
  );

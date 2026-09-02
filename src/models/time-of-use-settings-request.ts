import { s, type Schema } from "../core/index.js";
import { touSettingsSchema, type TouSettings } from "./tou-settings.js";

export type TimeOfUseSettingsRequest = {
  touSettings: TouSettings;
};

export const timeOfUseSettingsRequestSchema: Schema<TimeOfUseSettingsRequest> =
  s.object<TimeOfUseSettingsRequest>({
    touSettings: touSettingsSchema,
    _keysMap: {
      touSettings: "tou_settings",
    },
  });

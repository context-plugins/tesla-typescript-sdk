import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TouSettings = {
  tariffContentV2?: Record<string, unknown>;
};

export const touSettingsSchema: Schema<TouSettings> = s.object<TouSettings>({
  tariffContentV2: s.optional(s.record(s.string(), s.unknown())),
  _keysMap: {
    tariffContentV2: "tariff_content_v2",
  },
});

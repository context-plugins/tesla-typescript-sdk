import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type TouSettings = {
  tariffContentV2?: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const touSettingsSchema: Schema<TouSettings> = s.object<TouSettings>(
  {
    tariffContentV2: s.optional(s.record(s.string(), s.unknown())),
    _keysMap: {
      tariffContentV2: "tariff_content_v2",
    },
  },
  { additionalProperties: s.json() },
);

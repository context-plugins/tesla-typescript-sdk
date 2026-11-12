import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type StormModeRequest = {
  enabled: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const stormModeRequestSchema: Schema<StormModeRequest> = s.object<StormModeRequest>(
  {
    enabled: s.boolean(),
  },
  { additionalProperties: s.json() },
);

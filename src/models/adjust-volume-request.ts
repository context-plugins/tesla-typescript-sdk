import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type AdjustVolumeRequest = {
  volume: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const adjustVolumeRequestSchema: Schema<AdjustVolumeRequest> = s.object<AdjustVolumeRequest>(
  {
    volume: s.int(),
  },
  { additionalProperties: s.json() },
);

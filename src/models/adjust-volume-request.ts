import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AdjustVolumeRequest = {
  volume: number;
};

export const adjustVolumeRequestSchema: Schema<AdjustVolumeRequest> = s.object<AdjustVolumeRequest>({
  volume: s.number(),
});

import { s, type Schema } from "../core/index.js";

export type AdjustVolumeRequest = {
  volume: number;
};

export const adjustVolumeRequestSchema: Schema<AdjustVolumeRequest> = s.object<AdjustVolumeRequest>({
  volume: s.number(),
});

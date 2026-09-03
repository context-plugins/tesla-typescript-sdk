import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ChargeDuration = {
  seconds: number;
};

export const chargeDurationSchema: Schema<ChargeDuration> = s.object<ChargeDuration>({
  seconds: s.number(),
});

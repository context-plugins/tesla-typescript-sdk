import { s, type Schema } from "../core/index.js";

export type ChargeDuration = {
  seconds: number;
};

export const chargeDurationSchema: Schema<ChargeDuration> = s.object<ChargeDuration>({
  seconds: s.number(),
});

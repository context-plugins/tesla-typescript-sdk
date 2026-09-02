import { s, type Schema } from "../core/index.js";

export type ChargeStartTime = {
  seconds: number;
};

export const chargeStartTimeSchema: Schema<ChargeStartTime> = s.object<ChargeStartTime>({
  seconds: s.number(),
});

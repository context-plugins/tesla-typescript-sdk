import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const DefaultRealMode = {
  Autonomous: "autonomous",
  SelfConsumption: "self_consumption",
} as const;
export type DefaultRealMode = (typeof DefaultRealMode)[keyof typeof DefaultRealMode] | (string & {});

export const defaultRealModeSchema: EnumSchema<DefaultRealMode> = s.enumOf<DefaultRealMode>(DefaultRealMode);

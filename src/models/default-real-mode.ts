import { s, type EnumSchema } from "../core/index.js";

export const DefaultRealMode = {
  Autonomous: "autonomous",
  SelfConsumption: "self_consumption",
} as const;
export type DefaultRealMode = (typeof DefaultRealMode)[keyof typeof DefaultRealMode] | (string & {});

export const defaultRealModeSchema: EnumSchema<DefaultRealMode> = s.enumOf<DefaultRealMode>(DefaultRealMode);

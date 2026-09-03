import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const WhichTrunk = {
  Front: "front",
  Rear: "rear",
} as const;
export type WhichTrunk = (typeof WhichTrunk)[keyof typeof WhichTrunk] | (string & {});

export const whichTrunkSchema: EnumSchema<WhichTrunk> = s.enumOf<WhichTrunk>(WhichTrunk);

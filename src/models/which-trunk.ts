import { s, type EnumSchema } from "../core/index.js";

export const WhichTrunk = {
  Front: "front",
  Rear: "rear",
} as const;
export type WhichTrunk = (typeof WhichTrunk)[keyof typeof WhichTrunk] | (string & {});

export const whichTrunkSchema: EnumSchema<WhichTrunk> = s.enumOf<WhichTrunk>(WhichTrunk);

import { s, type EnumSchema } from "../core/index.js";

export const Kind = {
  Backup: "backup",
  Energy: "energy",
} as const;
export type Kind = (typeof Kind)[keyof typeof Kind] | (string & {});

export const kindSchema: EnumSchema<Kind> = s.enumOf<Kind>(Kind);

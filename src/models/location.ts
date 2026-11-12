import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Location = {
  country?: string;
  name?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const locationSchema: Schema<Location> = s.object<Location>(
  {
    country: s.optional(s.string()),
    name: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);

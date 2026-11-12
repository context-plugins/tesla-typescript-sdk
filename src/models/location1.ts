import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Location1 = {
  lat?: number;
  long?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const location1Schema: Schema<Location1> = s.object<Location1>(
  {
    lat: s.optional(s.float64()),
    long: s.optional(s.float64()),
  },
  { additionalProperties: s.json() },
);

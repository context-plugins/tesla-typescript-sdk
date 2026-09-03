import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Location1 = {
  lat?: number;
  long?: number;
};

export const location1Schema: Schema<Location1> = s.object<Location1>({
  lat: s.optional(s.number()),
  long: s.optional(s.number()),
});

import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Location = {
  country?: string;
  name?: string;
};

export const locationSchema: Schema<Location> = s.object<Location>({
  country: s.optional(s.string()),
  name: s.optional(s.string()),
});

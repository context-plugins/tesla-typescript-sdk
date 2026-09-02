import { s, type Schema } from "../core/index.js";

export type Location = {
  country?: string;
  name?: string;
};

export const locationSchema: Schema<Location> = s.object<Location>({
  country: s.optional(s.string()),
  name: s.optional(s.string()),
});

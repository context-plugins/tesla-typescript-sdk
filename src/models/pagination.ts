import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Pagination = {
  previous?: number | null;
  next?: number | null;
  current?: number;
  perPage?: number;
  count?: number;
  pages?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const paginationSchema: Schema<Pagination> = s.object<Pagination>(
  {
    previous: s.optionalNullable(s.int()),
    next: s.optionalNullable(s.int()),
    current: s.optional(s.int()),
    perPage: s.optional(s.int()),
    count: s.optional(s.int()),
    pages: s.optional(s.int()),
    _keysMap: {
      perPage: "per_page",
    },
  },
  { additionalProperties: s.json() },
);

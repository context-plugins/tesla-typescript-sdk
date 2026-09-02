import { s, type Schema } from "../core/index.js";

export type Pagination = {
  previous?: number | null;
  next?: number | null;
  current?: number;
  perPage?: number;
  count?: number;
  pages?: number;
};

export const paginationSchema: Schema<Pagination> = s.object<Pagination>({
  previous: s.optionalNullable(s.number()),
  next: s.optionalNullable(s.number()),
  current: s.optional(s.number()),
  perPage: s.optional(s.number()),
  count: s.optional(s.number()),
  pages: s.optional(s.number()),
  _keysMap: {
    perPage: "per_page",
  },
});

import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ProductsResponse = {
  response?: Record<string, unknown>[];
  count?: number;
};

export const productsResponseSchema: Schema<ProductsResponse> = s.object<ProductsResponse>({
  response: s.optional(s.array(s.record(s.string(), s.unknown()))),
  count: s.optional(s.number()),
});

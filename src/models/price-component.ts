import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PriceComponent = {
  type?: string;
  price?: number;
  stepSize?: number;
};

export const priceComponentSchema: Schema<PriceComponent> = s.object<PriceComponent>({
  type: s.optional(s.string()),
  price: s.optional(s.number()),
  stepSize: s.optional(s.number()),
  _keysMap: {
    stepSize: "step_size",
  },
});

import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PriceComponent = {
  type?: string;
  price?: number;
  stepSize?: number;
};

export const priceComponentSchema: Schema<PriceComponent> = s.object<PriceComponent>({
  type: s.optional(s.string()),
  price: s.optional(s.float64()),
  stepSize: s.optional(s.float64()),
  _keysMap: {
    stepSize: "step_size",
  },
});

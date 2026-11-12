import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PriceComponent = {
  type?: string;
  price?: number;
  stepSize?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const priceComponentSchema: Schema<PriceComponent> = s.object<PriceComponent>(
  {
    type: s.optional(s.string()),
    price: s.optional(s.float64()),
    stepSize: s.optional(s.float64()),
    _keysMap: {
      stepSize: "step_size",
    },
  },
  { additionalProperties: s.json() },
);

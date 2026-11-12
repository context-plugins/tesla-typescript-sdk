import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { priceComponentSchema, type PriceComponent } from "./price-component.js";

export type TariffElement = {
  priceComponents?: PriceComponent[];
  restrictions?: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const tariffElementSchema: Schema<TariffElement> = s.object<TariffElement>(
  {
    priceComponents: s.optional(s.array(s.lazy(() => priceComponentSchema))),
    restrictions: s.optional(s.record(s.string(), s.unknown())),
    _keysMap: {
      priceComponents: "price_components",
    },
  },
  { additionalProperties: s.json() },
);

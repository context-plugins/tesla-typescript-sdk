import { s, type Schema } from "../core/index.js";
import { priceComponentSchema, type PriceComponent } from "./price-component.js";

export type TariffElement = {
  priceComponents?: PriceComponent[];
  restrictions?: Record<string, Record<string, unknown>>;
};

export const tariffElementSchema: Schema<TariffElement> = s.object<TariffElement>({
  priceComponents: s.optional(s.array(s.lazy(() => priceComponentSchema))),
  restrictions: s.optional(s.record(s.string(), s.record(s.string(), s.unknown()))),
  _keysMap: {
    priceComponents: "price_components",
  },
});

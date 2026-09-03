import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { tariffElementSchema, type TariffElement } from "./tariff-element.js";

export type Tariffs = {
  currency?: string;
  elements?: TariffElement[];
};

export const tariffsSchema: Schema<Tariffs> = s.object<Tariffs>({
  currency: s.optional(s.string()),
  elements: s.optional(s.array(s.lazy(() => tariffElementSchema))),
});

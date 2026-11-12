import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { tariffElementSchema, type TariffElement } from "./tariff-element.js";

export type Tariffs = {
  currency?: string;
  elements?: TariffElement[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const tariffsSchema: Schema<Tariffs> = s.object<Tariffs>(
  {
    currency: s.optional(s.string()),
    elements: s.optional(s.array(s.lazy(() => tariffElementSchema))),
  },
  { additionalProperties: s.json() },
);

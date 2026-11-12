import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type TotalCost = {
  exclVat?: number;
  inclVat?: number;
  vat?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const totalCostSchema: Schema<TotalCost> = s.object<TotalCost>(
  {
    exclVat: s.optional(s.float64()),
    inclVat: s.optional(s.float64()),
    vat: s.optional(s.float64()),
    _keysMap: {
      exclVat: "excl_vat",
      inclVat: "incl_vat",
    },
  },
  { additionalProperties: s.json() },
);

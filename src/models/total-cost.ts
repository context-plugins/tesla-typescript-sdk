import { s, type Schema } from "../core/index.js";

export type TotalCost = {
  exclVat?: number;
  inclVat?: number;
  vat?: number;
};

export const totalCostSchema: Schema<TotalCost> = s.object<TotalCost>({
  exclVat: s.optional(s.number()),
  inclVat: s.optional(s.number()),
  vat: s.optional(s.number()),
  _keysMap: {
    exclVat: "excl_vat",
    inclVat: "incl_vat",
  },
});

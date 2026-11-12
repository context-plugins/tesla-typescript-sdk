import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ChargingInvoice = {
  fileName?: string;
  contentId?: string;
  invoiceType?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const chargingInvoiceSchema: Schema<ChargingInvoice> = s.object<ChargingInvoice>(
  {
    fileName: s.optional(s.string()),
    contentId: s.optional(s.string()),
    invoiceType: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);

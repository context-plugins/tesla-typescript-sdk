import { s, type Schema } from "../core/index.js";

export type ChargingInvoice = {
  fileName?: string;
  contentId?: string;
  invoiceType?: string;
};

export const chargingInvoiceSchema: Schema<ChargingInvoice> = s.object<ChargingInvoice>({
  fileName: s.optional(s.string()),
  contentId: s.optional(s.string()),
  invoiceType: s.optional(s.string()),
});

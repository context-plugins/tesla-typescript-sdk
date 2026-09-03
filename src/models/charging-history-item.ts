import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { chargingFeeSchema, type ChargingFee } from "./charging-fee.js";
import { chargingInvoiceSchema, type ChargingInvoice } from "./charging-invoice.js";

export type ChargingHistoryItem = {
  sessionId: number;
  vin: string;
  siteLocationName?: string;
  chargeStartDateTime?: Date;
  chargeStopDateTime?: Date;
  unlatchDateTime?: Date;
  countryCode?: string;
  fees?: ChargingFee[];
  billingType?: string;
  invoices?: ChargingInvoice[];
  vehicleMakeType?: string;
};

export const chargingHistoryItemSchema: Schema<ChargingHistoryItem> = s.object<ChargingHistoryItem>({
  sessionId: s.number(),
  vin: s.string(),
  siteLocationName: s.optional(s.string()),
  chargeStartDateTime: s.optional(s.dateTime()),
  chargeStopDateTime: s.optional(s.dateTime()),
  unlatchDateTime: s.optional(s.dateTime()),
  countryCode: s.optional(s.string()),
  fees: s.optional(s.array(s.lazy(() => chargingFeeSchema))),
  billingType: s.optional(s.string()),
  invoices: s.optional(s.array(s.lazy(() => chargingInvoiceSchema))),
  vehicleMakeType: s.optional(s.string()),
});

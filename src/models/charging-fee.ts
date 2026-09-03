import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ChargingFee = {
  sessionFeeId?: number;
  feeType?: string;
  currencyCode?: string;
  pricingType?: string;
  rateBase?: number;
  rateTier1?: number;
  rateTier2?: number;
  rateTier3?: number | null;
  rateTier4?: number | null;
  usageBase?: number;
  usageTier1?: number;
  usageTier2?: number;
  usageTier3?: number | null;
  usageTier4?: number | null;
  totalBase?: number;
  totalTier1?: number;
  totalTier2?: number;
  totalTier3?: number;
  totalTier4?: number;
  totalDue?: number;
  netDue?: number;
  uom?: string;
  isPaid?: boolean;
  status?: string;
};

export const chargingFeeSchema: Schema<ChargingFee> = s.object<ChargingFee>({
  sessionFeeId: s.optional(s.number()),
  feeType: s.optional(s.string()),
  currencyCode: s.optional(s.string()),
  pricingType: s.optional(s.string()),
  rateBase: s.optional(s.number()),
  rateTier1: s.optional(s.number()),
  rateTier2: s.optional(s.number()),
  rateTier3: s.optionalNullable(s.number()),
  rateTier4: s.optionalNullable(s.number()),
  usageBase: s.optional(s.number()),
  usageTier1: s.optional(s.number()),
  usageTier2: s.optional(s.number()),
  usageTier3: s.optionalNullable(s.number()),
  usageTier4: s.optionalNullable(s.number()),
  totalBase: s.optional(s.number()),
  totalTier1: s.optional(s.number()),
  totalTier2: s.optional(s.number()),
  totalTier3: s.optional(s.number()),
  totalTier4: s.optional(s.number()),
  totalDue: s.optional(s.number()),
  netDue: s.optional(s.number()),
  uom: s.optional(s.string()),
  isPaid: s.optional(s.boolean()),
  status: s.optional(s.string()),
});

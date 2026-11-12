import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

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
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const chargingFeeSchema: Schema<ChargingFee> = s.object<ChargingFee>(
  {
    sessionFeeId: s.optional(s.int()),
    feeType: s.optional(s.string()),
    currencyCode: s.optional(s.string()),
    pricingType: s.optional(s.string()),
    rateBase: s.optional(s.float64()),
    rateTier1: s.optional(s.float64()),
    rateTier2: s.optional(s.float64()),
    rateTier3: s.optionalNullable(s.float64()),
    rateTier4: s.optionalNullable(s.float64()),
    usageBase: s.optional(s.float64()),
    usageTier1: s.optional(s.float64()),
    usageTier2: s.optional(s.float64()),
    usageTier3: s.optionalNullable(s.float64()),
    usageTier4: s.optionalNullable(s.float64()),
    totalBase: s.optional(s.float64()),
    totalTier1: s.optional(s.float64()),
    totalTier2: s.optional(s.float64()),
    totalTier3: s.optional(s.float64()),
    totalTier4: s.optional(s.float64()),
    totalDue: s.optional(s.float64()),
    netDue: s.optional(s.float64()),
    uom: s.optional(s.string()),
    isPaid: s.optional(s.boolean()),
    status: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);

import { s, type Schema } from "../core/index.js";

export type WarrantyItem = {
  warrantyType?: string;
  warrantyDisplayName?: string;
  expirationDate?: Date;
  expirationOdometer?: number;
  odometerUnit?: string;
  warrantyExpiredOn?: string | null;
  coverageAgeInYears?: number;
};

export const warrantyItemSchema: Schema<WarrantyItem> = s.object<WarrantyItem>({
  warrantyType: s.optional(s.string()),
  warrantyDisplayName: s.optional(s.string()),
  expirationDate: s.optional(s.dateTime()),
  expirationOdometer: s.optional(s.number()),
  odometerUnit: s.optional(s.string()),
  warrantyExpiredOn: s.optionalNullable(s.string()),
  coverageAgeInYears: s.optional(s.number()),
});

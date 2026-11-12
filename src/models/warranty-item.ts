import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type WarrantyItem = {
  warrantyType?: string;
  warrantyDisplayName?: string;
  expirationDate?: Date;
  expirationOdometer?: number;
  odometerUnit?: string;
  warrantyExpiredOn?: string | null;
  coverageAgeInYears?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const warrantyItemSchema: Schema<WarrantyItem> = s.object<WarrantyItem>(
  {
    warrantyType: s.optional(s.string()),
    warrantyDisplayName: s.optional(s.string()),
    expirationDate: s.optional(s.dateTime()),
    expirationOdometer: s.optional(s.int()),
    odometerUnit: s.optional(s.string()),
    warrantyExpiredOn: s.optionalNullable(s.string()),
    coverageAgeInYears: s.optional(s.int()),
  },
  { additionalProperties: s.json() },
);

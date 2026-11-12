import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { warrantyItemSchema, type WarrantyItem } from "./warranty-item.js";

export type ResponseApi1DxWarrantyDetailsResponse = {
  activeWarranty?: WarrantyItem[];
  upcomingWarranty?: WarrantyItem[];
  expiredWarranty?: WarrantyItem[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const responseApi1DxWarrantyDetailsResponseSchema: Schema<ResponseApi1DxWarrantyDetailsResponse> =
  s.object<ResponseApi1DxWarrantyDetailsResponse>(
    {
      activeWarranty: s.optional(s.array(s.lazy(() => warrantyItemSchema))),
      upcomingWarranty: s.optional(s.array(s.lazy(() => warrantyItemSchema))),
      expiredWarranty: s.optional(s.array(s.lazy(() => warrantyItemSchema))),
    },
    { additionalProperties: s.json() },
  );

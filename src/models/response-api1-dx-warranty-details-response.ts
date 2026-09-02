import { s, type Schema } from "../core/index.js";
import { warrantyItemSchema, type WarrantyItem } from "./warranty-item.js";

export type ResponseApi1DxWarrantyDetailsResponse = {
  activeWarranty?: WarrantyItem[];
  upcomingWarranty?: WarrantyItem[];
  expiredWarranty?: WarrantyItem[];
};

export const responseApi1DxWarrantyDetailsResponseSchema: Schema<ResponseApi1DxWarrantyDetailsResponse> =
  s.object<ResponseApi1DxWarrantyDetailsResponse>({
    activeWarranty: s.optional(s.array(s.lazy(() => warrantyItemSchema))),
    upcomingWarranty: s.optional(s.array(s.lazy(() => warrantyItemSchema))),
    expiredWarranty: s.optional(s.array(s.lazy(() => warrantyItemSchema))),
  });

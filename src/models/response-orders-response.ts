import { s, type Schema } from "../core/index.js";

export type ResponseOrdersResponse = {
  vehicleMapId: number;
  referenceNumber: string;
  vin: string;
  orderStatus: string;
  orderSubstatus: string;
  modelCode: string;
  countryCode: string;
  locale: string;
  mktOptions: string;
  isB2B: boolean;
};

export const responseOrdersResponseSchema: Schema<ResponseOrdersResponse> = s.object<ResponseOrdersResponse>({
  vehicleMapId: s.number(),
  referenceNumber: s.string(),
  vin: s.string(),
  orderStatus: s.string(),
  orderSubstatus: s.string(),
  modelCode: s.string(),
  countryCode: s.string(),
  locale: s.string(),
  mktOptions: s.string(),
  isB2B: s.boolean(),
  _keysMap: {
    isB2B: "isB2b",
  },
});

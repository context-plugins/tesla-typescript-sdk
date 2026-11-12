import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

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
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const responseOrdersResponseSchema: Schema<ResponseOrdersResponse> = s.object<ResponseOrdersResponse>(
  {
    vehicleMapId: s.int(),
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
  },
  { additionalProperties: s.json() },
);

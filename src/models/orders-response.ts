import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { responseOrdersResponseSchema, type ResponseOrdersResponse } from "./response-orders-response.js";

export type OrdersResponse = {
  response: ResponseOrdersResponse[];
  count: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const ordersResponseSchema: Schema<OrdersResponse> = s.object<OrdersResponse>(
  {
    response: s.array(s.lazy(() => responseOrdersResponseSchema)),
    count: s.int(),
  },
  { additionalProperties: s.json() },
);

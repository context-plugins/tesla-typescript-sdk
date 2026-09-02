import { s, type Schema } from "../core/index.js";
import { responseOrdersResponseSchema, type ResponseOrdersResponse } from "./response-orders-response.js";

export type OrdersResponse = {
  response: ResponseOrdersResponse[];
  count: number;
};

export const ordersResponseSchema: Schema<OrdersResponse> = s.object<OrdersResponse>({
  response: s.array(s.lazy(() => responseOrdersResponseSchema)),
  count: s.number(),
});

import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { eventSchema, type Event } from "./event.js";

export type ResponseCalendarHistoryResponse = {
  events: Event[];
  totalEvents: number;
};

export const responseCalendarHistoryResponseSchema: Schema<ResponseCalendarHistoryResponse> =
  s.object<ResponseCalendarHistoryResponse>({
    events: s.array(s.lazy(() => eventSchema)),
    totalEvents: s.number(),
    _keysMap: {
      totalEvents: "total_events",
    },
  });

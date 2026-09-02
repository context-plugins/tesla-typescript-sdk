import { s, type Schema } from "../core/index.js";
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

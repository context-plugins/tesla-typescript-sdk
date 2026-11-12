import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { eventSchema, type Event } from "./event.js";

export type ResponseCalendarHistoryResponse = {
  events: Event[];
  totalEvents: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const responseCalendarHistoryResponseSchema: Schema<ResponseCalendarHistoryResponse> =
  s.object<ResponseCalendarHistoryResponse>(
    {
      events: s.array(s.lazy(() => eventSchema)),
      totalEvents: s.int(),
      _keysMap: {
        totalEvents: "total_events",
      },
    },
    { additionalProperties: s.json() },
  );

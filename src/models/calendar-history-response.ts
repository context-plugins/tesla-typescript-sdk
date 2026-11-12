import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  responseCalendarHistoryResponseSchema,
  type ResponseCalendarHistoryResponse,
} from "./response-calendar-history-response.js";

export type CalendarHistoryResponse = {
  response: ResponseCalendarHistoryResponse;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const calendarHistoryResponseSchema: Schema<CalendarHistoryResponse> =
  s.object<CalendarHistoryResponse>(
    {
      response: responseCalendarHistoryResponseSchema,
    },
    { additionalProperties: s.json() },
  );

import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  responseCalendarHistoryResponseSchema,
  type ResponseCalendarHistoryResponse,
} from "./response-calendar-history-response.js";

export type CalendarHistoryResponse = {
  response: ResponseCalendarHistoryResponse;
};

export const calendarHistoryResponseSchema: Schema<CalendarHistoryResponse> =
  s.object<CalendarHistoryResponse>({
    response: responseCalendarHistoryResponseSchema,
  });

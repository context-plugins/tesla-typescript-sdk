import { s, type Schema } from "../core/index.js";
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

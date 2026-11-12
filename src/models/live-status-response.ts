import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  responseLiveStatusResponseSchema,
  type ResponseLiveStatusResponse,
} from "./response-live-status-response.js";

export type LiveStatusResponse = {
  response: ResponseLiveStatusResponse;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const liveStatusResponseSchema: Schema<LiveStatusResponse> = s.object<LiveStatusResponse>(
  {
    response: responseLiveStatusResponseSchema,
  },
  { additionalProperties: s.json() },
);

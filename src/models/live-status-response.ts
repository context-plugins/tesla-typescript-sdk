import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  responseLiveStatusResponseSchema,
  type ResponseLiveStatusResponse,
} from "./response-live-status-response.js";

export type LiveStatusResponse = {
  response: ResponseLiveStatusResponse;
};

export const liveStatusResponseSchema: Schema<LiveStatusResponse> = s.object<LiveStatusResponse>({
  response: responseLiveStatusResponseSchema,
});

import { s, type Schema } from "../core/index.js";
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

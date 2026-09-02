import { s, type Schema } from "../core/index.js";
import { signalingSchema, type Signaling } from "./signaling.js";

export type Response2 = {
  signaling: Signaling;
};

export const response2Schema: Schema<Response2> = s.object<Response2>({
  signaling: signalingSchema,
});

import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { signalingSchema, type Signaling } from "./signaling.js";

export type Response2 = {
  signaling: Signaling;
};

export const response2Schema: Schema<Response2> = s.object<Response2>({
  signaling: signalingSchema,
});

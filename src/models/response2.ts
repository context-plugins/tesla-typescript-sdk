import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { signalingSchema, type Signaling } from "./signaling.js";

export type Response2 = {
  signaling: Signaling;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const response2Schema: Schema<Response2> = s.object<Response2>(
  {
    signaling: signalingSchema,
  },
  { additionalProperties: s.json() },
);

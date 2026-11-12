import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Event = {
  timestamp: Date;
  duration: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const eventSchema: Schema<Event> = s.object<Event>(
  {
    timestamp: s.dateTime(),
    duration: s.int(),
  },
  { additionalProperties: s.json() },
);

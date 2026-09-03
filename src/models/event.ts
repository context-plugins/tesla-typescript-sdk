import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Event = {
  timestamp: Date;
  duration: number;
};

export const eventSchema: Schema<Event> = s.object<Event>({
  timestamp: s.dateTime(),
  duration: s.number(),
});

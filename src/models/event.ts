import { s, type Schema } from "../core/index.js";

export type Event = {
  timestamp: Date;
  duration: number;
};

export const eventSchema: Schema<Event> = s.object<Event>({
  timestamp: s.dateTime(),
  duration: s.number(),
});

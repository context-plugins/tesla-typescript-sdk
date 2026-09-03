import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AddChargeScheduleRequest = {
  lat: number;
  lon: number;
  id: number;
  daysOfWeek?: string;
  startEnabled?: boolean;
  startTime?: number;
  endEnabled?: boolean;
  endTime?: number;
  oneTime?: boolean;
  enabled: boolean;
};

export const addChargeScheduleRequestSchema: Schema<AddChargeScheduleRequest> =
  s.object<AddChargeScheduleRequest>({
    lat: s.number(),
    lon: s.number(),
    id: s.number(),
    daysOfWeek: s.optional(s.string()),
    startEnabled: s.optional(s.boolean()),
    startTime: s.optional(s.number()),
    endEnabled: s.optional(s.boolean()),
    endTime: s.optional(s.number()),
    oneTime: s.optional(s.boolean()),
    enabled: s.boolean(),
    _keysMap: {
      daysOfWeek: "days_of_week",
      startEnabled: "start_enabled",
      startTime: "start_time",
      endEnabled: "end_enabled",
      endTime: "end_time",
      oneTime: "one_time",
    },
  });

import { s, type Schema } from "../core/index.js";

export type AddPreconditionScheduleRequest = {
  lat: number;
  lon: number;
  id: number;
  daysOfWeek?: string;
  preconditionTime?: number;
  oneTime?: boolean;
  enabled: boolean;
};

export const addPreconditionScheduleRequestSchema: Schema<AddPreconditionScheduleRequest> =
  s.object<AddPreconditionScheduleRequest>({
    lat: s.number(),
    lon: s.number(),
    id: s.number(),
    daysOfWeek: s.optional(s.string()),
    preconditionTime: s.optional(s.number()),
    oneTime: s.optional(s.boolean()),
    enabled: s.boolean(),
    _keysMap: {
      daysOfWeek: "days_of_week",
      preconditionTime: "precondition_time",
      oneTime: "one_time",
    },
  });

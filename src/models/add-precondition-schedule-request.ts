import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type AddPreconditionScheduleRequest = {
  lat: number;
  lon: number;
  id: number;
  daysOfWeek?: string;
  preconditionTime?: number;
  oneTime?: boolean;
  enabled: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const addPreconditionScheduleRequestSchema: Schema<AddPreconditionScheduleRequest> =
  s.object<AddPreconditionScheduleRequest>(
    {
      lat: s.float64(),
      lon: s.float64(),
      id: s.int(),
      daysOfWeek: s.optional(s.string()),
      preconditionTime: s.optional(s.int()),
      oneTime: s.optional(s.boolean()),
      enabled: s.boolean(),
      _keysMap: {
        daysOfWeek: "days_of_week",
        preconditionTime: "precondition_time",
        oneTime: "one_time",
      },
    },
    { additionalProperties: s.json() },
  );

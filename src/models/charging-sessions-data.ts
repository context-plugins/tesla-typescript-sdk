import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { chargingSessionSchema, type ChargingSession } from "./charging-session.js";

export type ChargingSessionsData = {
  data?: ChargingSession[];
  statusCode?: number;
  statusMessage?: string;
  timestamp?: Record<string, string>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const chargingSessionsDataSchema: Schema<ChargingSessionsData> = s.object<ChargingSessionsData>(
  {
    data: s.optional(s.array(s.lazy(() => chargingSessionSchema))),
    statusCode: s.optional(s.int()),
    statusMessage: s.optional(s.string()),
    timestamp: s.optional(s.record(s.string(), s.string())),
    _keysMap: {
      statusCode: "status_code",
      statusMessage: "status_message",
    },
  },
  { additionalProperties: s.json() },
);

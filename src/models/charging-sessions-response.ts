import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { chargingSessionsDataSchema, type ChargingSessionsData } from "./charging-sessions-data.js";

export type ChargingSessionsResponse = {
  response: ChargingSessionsData;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const chargingSessionsResponseSchema: Schema<ChargingSessionsResponse> =
  s.object<ChargingSessionsResponse>(
    {
      response: chargingSessionsDataSchema,
    },
    { additionalProperties: s.json() },
  );

import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { chargingSessionsDataSchema, type ChargingSessionsData } from "./charging-sessions-data.js";

export type ChargingSessionsResponse = {
  response: ChargingSessionsData;
};

export const chargingSessionsResponseSchema: Schema<ChargingSessionsResponse> =
  s.object<ChargingSessionsResponse>({
    response: chargingSessionsDataSchema,
  });

import { s, type Schema } from "../core/index.js";
import { chargingSessionsDataSchema, type ChargingSessionsData } from "./charging-sessions-data.js";

export type ChargingSessionsResponse = {
  response: ChargingSessionsData;
};

export const chargingSessionsResponseSchema: Schema<ChargingSessionsResponse> =
  s.object<ChargingSessionsResponse>({
    response: chargingSessionsDataSchema,
  });

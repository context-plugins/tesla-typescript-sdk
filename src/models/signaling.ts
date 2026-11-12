import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Signaling = {
  enabled: boolean;
  subscribeConnectivity: boolean;
  useAuthToken: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const signalingSchema: Schema<Signaling> = s.object<Signaling>(
  {
    enabled: s.boolean(),
    subscribeConnectivity: s.boolean(),
    useAuthToken: s.boolean(),
    _keysMap: {
      subscribeConnectivity: "subscribe_connectivity",
      useAuthToken: "use_auth_token",
    },
  },
  { additionalProperties: s.json() },
);

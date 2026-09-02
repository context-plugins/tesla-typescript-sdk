import { s, type Schema } from "../core/index.js";

export type Signaling = {
  enabled: boolean;
  subscribeConnectivity: boolean;
  useAuthToken: boolean;
};

export const signalingSchema: Schema<Signaling> = s.object<Signaling>({
  enabled: s.boolean(),
  subscribeConnectivity: s.boolean(),
  useAuthToken: s.boolean(),
  _keysMap: {
    subscribeConnectivity: "subscribe_connectivity",
    useAuthToken: "use_auth_token",
  },
});

import { s, type Schema } from "../core/index.js";

export type GuestModeRequest = {
  enable: boolean;
};

export const guestModeRequestSchema: Schema<GuestModeRequest> = s.object<GuestModeRequest>({
  enable: s.boolean(),
});

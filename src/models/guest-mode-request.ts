import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type GuestModeRequest = {
  enable: boolean;
};

export const guestModeRequestSchema: Schema<GuestModeRequest> = s.object<GuestModeRequest>({
  enable: s.boolean(),
});

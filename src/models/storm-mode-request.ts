import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type StormModeRequest = {
  enabled: boolean;
};

export const stormModeRequestSchema: Schema<StormModeRequest> = s.object<StormModeRequest>({
  enabled: s.boolean(),
});

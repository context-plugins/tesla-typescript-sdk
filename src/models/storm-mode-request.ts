import { s, type Schema } from "../core/index.js";

export type StormModeRequest = {
  enabled: boolean;
};

export const stormModeRequestSchema: Schema<StormModeRequest> = s.object<StormModeRequest>({
  enabled: s.boolean(),
});

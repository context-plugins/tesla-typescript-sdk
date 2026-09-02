import { s, type Schema } from "../core/index.js";
import { defaultRealModeSchema, type DefaultRealMode } from "./default-real-mode.js";

export type OperationRequest = {
  defaultRealMode: DefaultRealMode;
};

export const operationRequestSchema: Schema<OperationRequest> = s.object<OperationRequest>({
  defaultRealMode: defaultRealModeSchema,
  _keysMap: {
    defaultRealMode: "default_real_mode",
  },
});

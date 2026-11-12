import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { defaultRealModeSchema, type DefaultRealMode } from "./default-real-mode.js";

export type OperationRequest = {
  defaultRealMode: DefaultRealMode;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const operationRequestSchema: Schema<OperationRequest> = s.object<OperationRequest>(
  {
    defaultRealMode: defaultRealModeSchema,
    _keysMap: {
      defaultRealMode: "default_real_mode",
    },
  },
  { additionalProperties: s.json() },
);

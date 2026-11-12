import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { commandResultSchema, type CommandResult } from "./command-result.js";

export type CommandResponse = {
  response?: CommandResult;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const commandResponseSchema: Schema<CommandResponse> = s.object<CommandResponse>(
  {
    response: s.optional(s.lazy(() => commandResultSchema)),
  },
  { additionalProperties: s.json() },
);

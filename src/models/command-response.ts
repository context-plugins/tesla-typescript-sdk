import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { commandResultSchema, type CommandResult } from "./command-result.js";

export type CommandResponse = {
  response?: CommandResult;
};

export const commandResponseSchema: Schema<CommandResponse> = s.object<CommandResponse>({
  response: s.optional(s.lazy(() => commandResultSchema)),
});

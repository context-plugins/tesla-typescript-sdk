import { s, type Schema } from "../core/index.js";
import { commandResultSchema, type CommandResult } from "./command-result.js";

export type CommandResponse = {
  response?: CommandResult;
};

export const commandResponseSchema: Schema<CommandResponse> = s.object<CommandResponse>({
  response: s.optional(s.lazy(() => commandResultSchema)),
});

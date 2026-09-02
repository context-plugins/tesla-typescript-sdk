import { s, type Schema } from "../core/index.js";

export type CommandResult = {
  result: boolean;
  reason: string;
};

export const commandResultSchema: Schema<CommandResult> = s.object<CommandResult>({
  result: s.boolean(),
  reason: s.string(),
});

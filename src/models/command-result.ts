import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CommandResult = {
  result: boolean;
  reason: string;
};

export const commandResultSchema: Schema<CommandResult> = s.object<CommandResult>({
  result: s.boolean(),
  reason: s.string(),
});

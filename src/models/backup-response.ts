import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { responseSchema, type Response } from "./response.js";

export type BackupResponse = {
  response: Response;
};

export const backupResponseSchema: Schema<BackupResponse> = s.object<BackupResponse>({
  response: responseSchema,
});

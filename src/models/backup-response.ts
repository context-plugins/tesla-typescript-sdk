import { s, type Schema } from "../core/index.js";
import { responseSchema, type Response } from "./response.js";

export type BackupResponse = {
  response: Response;
};

export const backupResponseSchema: Schema<BackupResponse> = s.object<BackupResponse>({
  response: responseSchema,
});

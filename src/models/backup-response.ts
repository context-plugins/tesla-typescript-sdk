import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { responseSchema, type Response } from "./response.js";

export type BackupResponse = {
  response: Response;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const backupResponseSchema: Schema<BackupResponse> = s.object<BackupResponse>(
  {
    response: responseSchema,
  },
  { additionalProperties: s.json() },
);

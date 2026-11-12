import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type BackupRequest = {
  backupReservePercent: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const backupRequestSchema: Schema<BackupRequest> = s.object<BackupRequest>(
  {
    backupReservePercent: s.int(),
    _keysMap: {
      backupReservePercent: "backup_reserve_percent",
    },
  },
  { additionalProperties: s.json() },
);

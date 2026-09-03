import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type BackupRequest = {
  backupReservePercent: number;
};

export const backupRequestSchema: Schema<BackupRequest> = s.object<BackupRequest>({
  backupReservePercent: s.number(),
  _keysMap: {
    backupReservePercent: "backup_reserve_percent",
  },
});

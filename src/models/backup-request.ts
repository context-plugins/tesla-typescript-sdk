import { s, type Schema } from "../core/index.js";

export type BackupRequest = {
  backupReservePercent: number;
};

export const backupRequestSchema: Schema<BackupRequest> = s.object<BackupRequest>({
  backupReservePercent: s.number(),
  _keysMap: {
    backupReservePercent: "backup_reserve_percent",
  },
});

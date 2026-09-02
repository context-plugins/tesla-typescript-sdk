import { s, type Schema } from "../core/index.js";

export type Driver = {
  myTeslaUniqueId?: number;
  userId?: number;
  userIdS?: string;
  vaultUuid?: string;
  driverFirstName?: string;
  driverLastName?: string;
  granularAccess?: Record<string, unknown>;
  activePubkeys?: string[];
  publicKey?: string;
};

export const driverSchema: Schema<Driver> = s.object<Driver>({
  myTeslaUniqueId: s.optional(s.number()),
  userId: s.optional(s.number()),
  userIdS: s.optional(s.string()),
  vaultUuid: s.optional(s.string()),
  driverFirstName: s.optional(s.string()),
  driverLastName: s.optional(s.string()),
  granularAccess: s.optional(s.record(s.string(), s.unknown())),
  activePubkeys: s.optional(s.array(s.string())),
  publicKey: s.optional(s.string()),
  _keysMap: {
    myTeslaUniqueId: "my_tesla_unique_id",
    userId: "user_id",
    userIdS: "user_id_s",
    vaultUuid: "vault_uuid",
    driverFirstName: "driver_first_name",
    driverLastName: "driver_last_name",
    granularAccess: "granular_access",
    activePubkeys: "active_pubkeys",
    publicKey: "public_key",
  },
});

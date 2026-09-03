import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { whichTrunkSchema, type WhichTrunk } from "./which-trunk.js";

export type ActuateTrunkRequest = {
  whichTrunk: WhichTrunk;
};

export const actuateTrunkRequestSchema: Schema<ActuateTrunkRequest> = s.object<ActuateTrunkRequest>({
  whichTrunk: whichTrunkSchema,
  _keysMap: {
    whichTrunk: "which_trunk",
  },
});

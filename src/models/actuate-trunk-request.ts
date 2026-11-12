import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { whichTrunkSchema, type WhichTrunk } from "./which-trunk.js";

export type ActuateTrunkRequest = {
  whichTrunk: WhichTrunk;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const actuateTrunkRequestSchema: Schema<ActuateTrunkRequest> = s.object<ActuateTrunkRequest>(
  {
    whichTrunk: whichTrunkSchema,
    _keysMap: {
      whichTrunk: "which_trunk",
    },
  },
  { additionalProperties: s.json() },
);

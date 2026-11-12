import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ResponseLiveStatusResponse = {
  solarPower: number;
  energyLeft: number;
  totalPackEnergy: number;
  percentageCharged: number;
  backupCapable: boolean;
  batteryPower?: number;
  loadPower?: number;
  gridStatus?: string;
  gridPower?: number;
  islandStatus?: string;
  stormModeActive?: boolean;
  timestamp?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const responseLiveStatusResponseSchema: Schema<ResponseLiveStatusResponse> =
  s.object<ResponseLiveStatusResponse>(
    {
      solarPower: s.float64(),
      energyLeft: s.float64(),
      totalPackEnergy: s.float64(),
      percentageCharged: s.float64(),
      backupCapable: s.boolean(),
      batteryPower: s.optional(s.float64()),
      loadPower: s.optional(s.float64()),
      gridStatus: s.optional(s.string()),
      gridPower: s.optional(s.float64()),
      islandStatus: s.optional(s.string()),
      stormModeActive: s.optional(s.boolean()),
      timestamp: s.optional(s.dateTime()),
      _keysMap: {
        solarPower: "solar_power",
        energyLeft: "energy_left",
        totalPackEnergy: "total_pack_energy",
        percentageCharged: "percentage_charged",
        backupCapable: "backup_capable",
        batteryPower: "battery_power",
        loadPower: "load_power",
        gridStatus: "grid_status",
        gridPower: "grid_power",
        islandStatus: "island_status",
        stormModeActive: "storm_mode_active",
      },
    },
    { additionalProperties: s.json() },
  );

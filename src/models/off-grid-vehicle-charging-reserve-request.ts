import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type OffGridVehicleChargingReserveRequest = {
  offGridVehicleChargingReservePercent: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const offGridVehicleChargingReserveRequestSchema: Schema<OffGridVehicleChargingReserveRequest> =
  s.object<OffGridVehicleChargingReserveRequest>(
    {
      offGridVehicleChargingReservePercent: s.int(),
      _keysMap: {
        offGridVehicleChargingReservePercent: "off_grid_vehicle_charging_reserve_percent",
      },
    },
    { additionalProperties: s.json() },
  );

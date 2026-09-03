import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type OffGridVehicleChargingReserveRequest = {
  offGridVehicleChargingReservePercent: number;
};

export const offGridVehicleChargingReserveRequestSchema: Schema<OffGridVehicleChargingReserveRequest> =
  s.object<OffGridVehicleChargingReserveRequest>({
    offGridVehicleChargingReservePercent: s.number(),
    _keysMap: {
      offGridVehicleChargingReservePercent: "off_grid_vehicle_charging_reserve_percent",
    },
  });

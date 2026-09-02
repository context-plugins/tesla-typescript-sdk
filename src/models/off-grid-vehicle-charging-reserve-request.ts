import { s, type Schema } from "../core/index.js";

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

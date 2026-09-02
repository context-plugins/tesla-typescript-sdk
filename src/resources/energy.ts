import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, anyAuth, s } from "../core/index.js";
import { backupRequestSchema, type BackupRequest } from "../models/backup-request.js";
import { backupResponseSchema, type BackupResponse } from "../models/backup-response.js";
import {
  calendarHistoryResponseSchema,
  type CalendarHistoryResponse,
} from "../models/calendar-history-response.js";
import {
  chargeHistoryResponseSchema,
  type ChargeHistoryResponse,
} from "../models/charge-history-response.js";
import {
  genericUpdateResponseSchema,
  type GenericUpdateResponse,
} from "../models/generic-update-response.js";
import {
  kindGetWallConnectorChargingHistorySchema,
  type KindGetWallConnectorChargingHistory,
} from "../models/kind-get-wall-connector-charging-history.js";
import { kindSchema, type Kind } from "../models/kind.js";
import { liveStatusResponseSchema, type LiveStatusResponse } from "../models/live-status-response.js";
import {
  offGridVehicleChargingReserveRequestSchema,
  type OffGridVehicleChargingReserveRequest,
} from "../models/off-grid-vehicle-charging-reserve-request.js";
import { operationRequestSchema, type OperationRequest } from "../models/operation-request.js";
import { productsResponseSchema, type ProductsResponse } from "../models/products-response.js";
import { siteInfoResponseSchema, type SiteInfoResponse } from "../models/site-info-response.js";
import { stormModeRequestSchema, type StormModeRequest } from "../models/storm-mode-request.js";
import {
  timeOfUseSettingsRequestSchema,
  type TimeOfUseSettingsRequest,
} from "../models/time-of-use-settings-request.js";
import type { Servers } from "../servers.js";

export class Energy {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  adjustSiteSBackupReserve(
    request: Energy.AdjustSiteSBackupReserveRequest,
    options?: RequestOptions,
  ): ApiPromise<BackupResponse, ResponseError> {
    return this.#rawClient.execute<BackupResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/api/1/energy_sites/{energy_site_id}/backup"),
        auth: anyAuth(
          this.#auth.thirdpartytokenAuthorizationCode,
          this.#auth.thirdpartytokenClientCredentials,
        ),
        pathParams: [{ name: "energy_site_id", value: request.energySiteId, schema: s.string() }],
        body: { kind: "json", value: request.body, schema: backupRequestSchema },
      },
      {
        success: { kind: "json", schema: backupResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  adjustSiteSOffGridVehicleChargingReserve(
    request: Energy.AdjustSiteSOffGridVehicleChargingReserveRequest,
    options?: RequestOptions,
  ): ApiPromise<GenericUpdateResponse, ResponseError> {
    return this.#rawClient.execute<GenericUpdateResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/api/1/energy_sites/{energy_site_id}/off_grid_vehicle_charging_reserve"),
        auth: anyAuth(
          this.#auth.thirdpartytokenAuthorizationCode,
          this.#auth.thirdpartytokenClientCredentials,
        ),
        pathParams: [{ name: "energy_site_id", value: request.energySiteId, schema: s.string() }],
        body: { kind: "json", value: request.body, schema: offGridVehicleChargingReserveRequestSchema },
      },
      {
        success: { kind: "json", schema: genericUpdateResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  allowDisallowChargingFromTheGridAndExportingEnergyToTheGrid(
    request: Energy.AllowDisallowChargingFromTheGridAndExportingEnergyToTheGridRequest,
    options?: RequestOptions,
  ): ApiPromise<GenericUpdateResponse, ResponseError> {
    return this.#rawClient.execute<GenericUpdateResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/api/1/energy_sites/{energy_site_id}/grid_import_export"),
        auth: anyAuth(
          this.#auth.thirdpartytokenAuthorizationCode,
          this.#auth.thirdpartytokenClientCredentials,
        ),
        pathParams: [{ name: "energy_site_id", value: request.energySiteId, schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.optional(s.record(s.string(), s.unknown())) },
      },
      {
        success: { kind: "json", schema: genericUpdateResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  getBackupOrEnergyHistory(
    request: Energy.GetBackupOrEnergyHistoryRequest,
    options?: RequestOptions,
  ): ApiPromise<CalendarHistoryResponse, ResponseError> {
    return this.#rawClient.execute<CalendarHistoryResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/api/1/energy_sites/{energy_site_id}/calendar_history"),
        auth: anyAuth(
          this.#auth.thirdpartytokenAuthorizationCode,
          this.#auth.thirdpartytokenClientCredentials,
        ),
        pathParams: [{ name: "energy_site_id", value: request.energySiteId, schema: s.string() }],
        query: [
          { name: "kind", value: request.kind, schema: kindSchema },
          { name: "start_date", value: request.startDate, schema: s.dateTime() },
          { name: "end_date", value: request.endDate, schema: s.dateTime() },
          { name: "period", value: request.period, schema: s.optional(s.string()) },
          { name: "time_zone", value: request.timeZone, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: calendarHistoryResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  getLiveSiteStatus(
    request: Energy.GetLiveSiteStatusRequest,
    options?: RequestOptions,
  ): ApiPromise<LiveStatusResponse, ResponseError> {
    return this.#rawClient.execute<LiveStatusResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/api/1/energy_sites/{energy_site_id}/live_status"),
        auth: anyAuth(
          this.#auth.thirdpartytokenAuthorizationCode,
          this.#auth.thirdpartytokenClientCredentials,
        ),
        pathParams: [{ name: "energy_site_id", value: request.energySiteId, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: liveStatusResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  getSiteInformationAssetsSettingsFeatures(
    request: Energy.GetSiteInformationAssetsSettingsFeaturesRequest,
    options?: RequestOptions,
  ): ApiPromise<SiteInfoResponse, ResponseError> {
    return this.#rawClient.execute<SiteInfoResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/api/1/energy_sites/{energy_site_id}/site_info"),
        auth: anyAuth(
          this.#auth.thirdpartytokenAuthorizationCode,
          this.#auth.thirdpartytokenClientCredentials,
        ),
        pathParams: [{ name: "energy_site_id", value: request.energySiteId, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: siteInfoResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  getUserProductsVehiclesEnergySites(options?: RequestOptions): ApiPromise<ProductsResponse, ResponseError> {
    return this.#rawClient.execute<ProductsResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/api/1/products"),
        auth: anyAuth(
          this.#auth.thirdpartytokenAuthorizationCode,
          this.#auth.thirdpartytokenClientCredentials,
        ),
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: productsResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  getWallConnectorChargingHistory(
    request: Energy.GetWallConnectorChargingHistoryRequest,
    options?: RequestOptions,
  ): ApiPromise<ChargeHistoryResponse, ResponseError> {
    return this.#rawClient.execute<ChargeHistoryResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/api/1/energy_sites/{energy_site_id}/telemetry_history"),
        auth: anyAuth(
          this.#auth.thirdpartytokenAuthorizationCode,
          this.#auth.thirdpartytokenClientCredentials,
        ),
        pathParams: [{ name: "energy_site_id", value: request.energySiteId, schema: s.string() }],
        query: [
          { name: "kind", value: request.kind, schema: kindGetWallConnectorChargingHistorySchema },
          { name: "start_date", value: request.startDate, schema: s.dateTime() },
          { name: "end_date", value: request.endDate, schema: s.dateTime() },
          { name: "time_zone", value: request.timeZone, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: chargeHistoryResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  setSiteModeAutonomousOrSelfConsumption(
    request: Energy.SetSiteModeAutonomousOrSelfConsumptionRequest,
    options?: RequestOptions,
  ): ApiPromise<GenericUpdateResponse, ResponseError> {
    return this.#rawClient.execute<GenericUpdateResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/api/1/energy_sites/{energy_site_id}/operation"),
        auth: anyAuth(
          this.#auth.thirdpartytokenAuthorizationCode,
          this.#auth.thirdpartytokenClientCredentials,
        ),
        pathParams: [{ name: "energy_site_id", value: request.energySiteId, schema: s.string() }],
        body: { kind: "json", value: request.body, schema: operationRequestSchema },
      },
      {
        success: { kind: "json", schema: genericUpdateResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  updateStormWatchParticipation(
    request: Energy.UpdateStormWatchParticipationRequest,
    options?: RequestOptions,
  ): ApiPromise<GenericUpdateResponse, ResponseError> {
    return this.#rawClient.execute<GenericUpdateResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/api/1/energy_sites/{energy_site_id}/storm_mode"),
        auth: anyAuth(
          this.#auth.thirdpartytokenAuthorizationCode,
          this.#auth.thirdpartytokenClientCredentials,
        ),
        pathParams: [{ name: "energy_site_id", value: request.energySiteId, schema: s.string() }],
        body: { kind: "json", value: request.body, schema: stormModeRequestSchema },
      },
      {
        success: { kind: "json", schema: genericUpdateResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  updateTimeOfUseTouSettings(
    request: Energy.UpdateTimeOfUseTouSettingsRequest,
    options?: RequestOptions,
  ): ApiPromise<GenericUpdateResponse, ResponseError> {
    return this.#rawClient.execute<GenericUpdateResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/api/1/energy_sites/{energy_site_id}/time_of_use_settings"),
        auth: anyAuth(
          this.#auth.thirdpartytokenAuthorizationCode,
          this.#auth.thirdpartytokenClientCredentials,
        ),
        pathParams: [{ name: "energy_site_id", value: request.energySiteId, schema: s.string() }],
        body: { kind: "json", value: request.body, schema: timeOfUseSettingsRequestSchema },
      },
      {
        success: { kind: "json", schema: genericUpdateResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace Energy {
  export type AdjustSiteSBackupReserveRequest = {
    energySiteId: string;
    body: BackupRequest;
  };

  export type AdjustSiteSOffGridVehicleChargingReserveRequest = {
    energySiteId: string;
    body: OffGridVehicleChargingReserveRequest;
  };

  export type AllowDisallowChargingFromTheGridAndExportingEnergyToTheGridRequest = {
    energySiteId: string;
    body?: Record<string, unknown>;
  };

  export type GetBackupOrEnergyHistoryRequest = {
    energySiteId: string;
    kind: Kind;
    startDate: Date;
    endDate: Date;
    period?: string;
    timeZone?: string;
  };

  export type GetLiveSiteStatusRequest = {
    energySiteId: string;
  };

  export type GetSiteInformationAssetsSettingsFeaturesRequest = {
    energySiteId: string;
  };

  export type GetWallConnectorChargingHistoryRequest = {
    energySiteId: string;
    kind: KindGetWallConnectorChargingHistory;
    startDate: Date;
    endDate: Date;
    timeZone?: string;
  };

  export type SetSiteModeAutonomousOrSelfConsumptionRequest = {
    energySiteId: string;
    body: OperationRequest;
  };

  export type UpdateStormWatchParticipationRequest = {
    energySiteId: string;
    body: StormModeRequest;
  };

  export type UpdateTimeOfUseTouSettingsRequest = {
    energySiteId: string;
    body: TimeOfUseSettingsRequest;
  };
}

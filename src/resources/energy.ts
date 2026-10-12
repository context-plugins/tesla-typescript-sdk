import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
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

/**
 * Energy site and Powerwall endpoints
 */
export class Energy {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * adjustSiteSBackupReserve
   *
   * @returns Backup reserve updated
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TeslaFleetManagementApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  adjustSiteSBackupReserve(
    request: Energy.AdjustSiteSBackupReserveRequest,
    options?: RequestOptions,
  ): ApiPromise<BackupResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/1/energy_sites/{energy_site_id}/backup"),
        auth: anyAuth(
          this.#auth.thirdpartytokenAuthorizationCode,
          this.#auth.thirdpartytokenClientCredentials,
        ),
        pathParams: [{ name: "energy_site_id", value: request.energySiteId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: backupRequestSchema },
      },
      {
        success: { kind: "json", schema: backupResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * adjustSiteSOffGridVehicleChargingReserve
   *
   * @returns Reserve updated
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TeslaFleetManagementApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  adjustSiteSOffGridVehicleChargingReserve(
    request: Energy.AdjustSiteSOffGridVehicleChargingReserveRequest,
    options?: RequestOptions,
  ): ApiPromise<GenericUpdateResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/api/1/energy_sites/{energy_site_id}/off_grid_vehicle_charging_reserve",
        ),
        auth: anyAuth(
          this.#auth.thirdpartytokenAuthorizationCode,
          this.#auth.thirdpartytokenClientCredentials,
        ),
        pathParams: [{ name: "energy_site_id", value: request.energySiteId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: offGridVehicleChargingReserveRequestSchema },
      },
      {
        success: { kind: "json", schema: genericUpdateResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * allowDisallowChargingFromTheGridAndExportingEnergyToTheGrid
   *
   * @returns Grid import/export updated
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TeslaFleetManagementApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  allowDisallowChargingFromTheGridAndExportingEnergyToTheGrid(
    request: Energy.AllowDisallowChargingFromTheGridAndExportingEnergyToTheGridRequest,
    options?: RequestOptions,
  ): ApiPromise<GenericUpdateResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/1/energy_sites/{energy_site_id}/grid_import_export"),
        auth: anyAuth(
          this.#auth.thirdpartytokenAuthorizationCode,
          this.#auth.thirdpartytokenClientCredentials,
        ),
        pathParams: [{ name: "energy_site_id", value: request.energySiteId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.optional(s.record(s.string(), s.unknown())) },
      },
      {
        success: { kind: "json", schema: genericUpdateResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * getBackupOrEnergyHistory
   *
   * @returns History retrieved
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TeslaFleetManagementApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getBackupOrEnergyHistory(
    request: Energy.GetBackupOrEnergyHistoryRequest,
    options?: RequestOptions,
  ): ApiPromise<CalendarHistoryResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/1/energy_sites/{energy_site_id}/calendar_history"),
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
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: calendarHistoryResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * getLiveSiteStatus
   *
   * @returns Live status retrieved
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TeslaFleetManagementApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getLiveSiteStatus(
    request: Energy.GetLiveSiteStatusRequest,
    options?: RequestOptions,
  ): ApiPromise<LiveStatusResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/1/energy_sites/{energy_site_id}/live_status"),
        auth: anyAuth(
          this.#auth.thirdpartytokenAuthorizationCode,
          this.#auth.thirdpartytokenClientCredentials,
        ),
        pathParams: [{ name: "energy_site_id", value: request.energySiteId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: liveStatusResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * getSiteInformationAssetsSettingsFeatures
   *
   * @returns Site info retrieved
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TeslaFleetManagementApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getSiteInformationAssetsSettingsFeatures(
    request: Energy.GetSiteInformationAssetsSettingsFeaturesRequest,
    options?: RequestOptions,
  ): ApiPromise<SiteInfoResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/1/energy_sites/{energy_site_id}/site_info"),
        auth: anyAuth(
          this.#auth.thirdpartytokenAuthorizationCode,
          this.#auth.thirdpartytokenClientCredentials,
        ),
        pathParams: [{ name: "energy_site_id", value: request.energySiteId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: siteInfoResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * getUserProductsVehiclesEnergySites
   *
   * @returns Products retrieved
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TeslaFleetManagementApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getUserProductsVehiclesEnergySites(options?: RequestOptions): ApiPromise<ProductsResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/1/products"),
        auth: anyAuth(
          this.#auth.thirdpartytokenAuthorizationCode,
          this.#auth.thirdpartytokenClientCredentials,
        ),
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: productsResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * getWallConnectorChargingHistory
   *
   * @returns Charging history retrieved
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TeslaFleetManagementApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getWallConnectorChargingHistory(
    request: Energy.GetWallConnectorChargingHistoryRequest,
    options?: RequestOptions,
  ): ApiPromise<ChargeHistoryResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/1/energy_sites/{energy_site_id}/telemetry_history"),
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
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: chargeHistoryResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * setSiteModeAutonomousOrSelfConsumption
   *
   * @returns Operation mode updated
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TeslaFleetManagementApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  setSiteModeAutonomousOrSelfConsumption(
    request: Energy.SetSiteModeAutonomousOrSelfConsumptionRequest,
    options?: RequestOptions,
  ): ApiPromise<GenericUpdateResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/1/energy_sites/{energy_site_id}/operation"),
        auth: anyAuth(
          this.#auth.thirdpartytokenAuthorizationCode,
          this.#auth.thirdpartytokenClientCredentials,
        ),
        pathParams: [{ name: "energy_site_id", value: request.energySiteId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: operationRequestSchema },
      },
      {
        success: { kind: "json", schema: genericUpdateResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * updateStormWatchParticipation
   *
   * @returns Storm mode updated
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TeslaFleetManagementApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  updateStormWatchParticipation(
    request: Energy.UpdateStormWatchParticipationRequest,
    options?: RequestOptions,
  ): ApiPromise<GenericUpdateResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/1/energy_sites/{energy_site_id}/storm_mode"),
        auth: anyAuth(
          this.#auth.thirdpartytokenAuthorizationCode,
          this.#auth.thirdpartytokenClientCredentials,
        ),
        pathParams: [{ name: "energy_site_id", value: request.energySiteId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: stormModeRequestSchema },
      },
      {
        success: { kind: "json", schema: genericUpdateResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * updateTimeOfUseTouSettings
   *
   * @returns TOU settings updated
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TeslaFleetManagementApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  updateTimeOfUseTouSettings(
    request: Energy.UpdateTimeOfUseTouSettingsRequest,
    options?: RequestOptions,
  ): ApiPromise<GenericUpdateResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/1/energy_sites/{energy_site_id}/time_of_use_settings"),
        auth: anyAuth(
          this.#auth.thirdpartytokenAuthorizationCode,
          this.#auth.thirdpartytokenClientCredentials,
        ),
        pathParams: [{ name: "energy_site_id", value: request.energySiteId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: timeOfUseSettingsRequestSchema },
      },
      {
        success: { kind: "json", schema: genericUpdateResponseSchema },
        errorFactory: ApiError,
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

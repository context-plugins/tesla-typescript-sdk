import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  api1DxVehiclesOptionsResponseSchema,
  type Api1DxVehiclesOptionsResponse,
} from "../models/api1-dx-vehicles-options-response.js";
import {
  api1DxWarrantyDetailsResponseSchema,
  type Api1DxWarrantyDetailsResponse,
} from "../models/api1-dx-warranty-details-response.js";
import {
  api1VehiclesMobileEnabledResponseSchema,
  type Api1VehiclesMobileEnabledResponse,
} from "../models/api1-vehicles-mobile-enabled-response.js";
import {
  api1VehiclesNearbyChargingSitesResponseSchema,
  type Api1VehiclesNearbyChargingSitesResponse,
} from "../models/api1-vehicles-nearby-charging-sites-response.js";
import {
  api1VehiclesResponseResponse200Schema,
  type Api1VehiclesResponseResponse200,
} from "../models/api1-vehicles-response-response200.js";
import { api1VehiclesResponseSchema, type Api1VehiclesResponse } from "../models/api1-vehicles-response.js";
import {
  api1VehiclesWakeUpResponseSchema,
  type Api1VehiclesWakeUpResponse,
} from "../models/api1-vehicles-wake-up-response.js";
import { driversResponseSchema, type DriversResponse } from "../models/drivers-response.js";
import {
  enterprisePayerRequestSchema,
  type EnterprisePayerRequest,
} from "../models/enterprise-payer-request.js";
import { fleetStatusRequestSchema, type FleetStatusRequest } from "../models/fleet-status-request.js";
import {
  fleetTelemetryJwsRequestSchema,
  type FleetTelemetryJwsRequest,
} from "../models/fleet-telemetry-jws-request.js";
import { simpleOkResponseSchema, type SimpleOkResponse } from "../models/simple-ok-response.js";
import { siteInfoResponseSchema, type SiteInfoResponse } from "../models/site-info-response.js";
import type { Servers } from "../servers.js";

export class Vehicles {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * configureFleetTelemetryUsingSignedJwsToken
   *
   * @returns Telemetry configuration result
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TeslaFleetManagementApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  configureFleetTelemetryUsingSignedJwsToken(
    request: Vehicles.ConfigureFleetTelemetryUsingSignedJwsTokenRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/1/vehicles/fleet_telemetry_config_jws"),
        auth: anyAuth(
          this.#auth.thirdpartytokenAuthorizationCode,
          this.#auth.thirdpartytokenClientCredentials,
        ),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: fleetTelemetryJwsRequestSchema },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * createOrUpdateFleetTelemetryConfiguration
   *
   * @returns Telemetry configuration result
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TeslaFleetManagementApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  createOrUpdateFleetTelemetryConfiguration(
    request: Vehicles.CreateOrUpdateFleetTelemetryConfigurationRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/1/vehicles/fleet_telemetry_config"),
        auth: anyAuth(
          this.#auth.thirdpartytokenAuthorizationCode,
          this.#auth.thirdpartytokenClientCredentials,
        ),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.record(s.string(), s.unknown()) },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * deleteFleetTelemetryConfiguration
   *
   * @returns Configuration deleted
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TeslaFleetManagementApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  deleteFleetTelemetryConfiguration(
    request: Vehicles.DeleteFleetTelemetryConfigurationRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/1/vehicles/{vehicle_tag}/fleet_telemetry_config"),
        auth: anyAuth(
          this.#auth.thirdpartytokenAuthorizationCode,
          this.#auth.thirdpartytokenClientCredentials,
        ),
        pathParams: [{ name: "vehicle_tag", value: request.vehicleTag, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * getAllowedDriversForAVehicle
   *
   * @returns List of drivers
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TeslaFleetManagementApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getAllowedDriversForAVehicle(
    request: Vehicles.GetAllowedDriversForAVehicleRequest,
    options?: RequestOptions,
  ): ApiPromise<DriversResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/1/vehicles/{vehicle_tag}/drivers"),
        auth: anyAuth(
          this.#auth.thirdpartytokenAuthorizationCode,
          this.#auth.thirdpartytokenClientCredentials,
        ),
        pathParams: [{ name: "vehicle_tag", value: request.vehicleTag, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: driversResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * getEligibleVehicleSubscriptions
   *
   * @returns Eligible subscriptions
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TeslaFleetManagementApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getEligibleVehicleSubscriptions(
    request: Vehicles.GetEligibleVehicleSubscriptionsRequest,
    options?: RequestOptions,
  ): ApiPromise<SiteInfoResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/1/dx/vehicles/subscriptions/eligibility"),
        auth: anyAuth(
          this.#auth.thirdpartytokenAuthorizationCode,
          this.#auth.thirdpartytokenClientCredentials,
        ),
        pathParams: [],
        query: [{ name: "vin", value: request.vin, schema: s.string() }],
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
   * getEligibleVehicleUpgrades
   *
   * @returns Eligible upgrades
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TeslaFleetManagementApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getEligibleVehicleUpgrades(
    request: Vehicles.GetEligibleVehicleUpgradesRequest,
    options?: RequestOptions,
  ): ApiPromise<SiteInfoResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/1/dx/vehicles/upgrades/eligibility"),
        auth: anyAuth(
          this.#auth.thirdpartytokenAuthorizationCode,
          this.#auth.thirdpartytokenClientCredentials,
        ),
        pathParams: [],
        query: [{ name: "vin", value: request.vin, schema: s.string() }],
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
   * getEnterpriseRolesForAVehicle
   *
   * @returns Enterprise roles
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TeslaFleetManagementApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getEnterpriseRolesForAVehicle(
    request: Vehicles.GetEnterpriseRolesForAVehicleRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/1/dx/enterprise/v1/{vin}/roles"),
        auth: anyAuth(
          this.#auth.thirdpartytokenAuthorizationCode,
          this.#auth.thirdpartytokenClientCredentials,
        ),
        pathParams: [{ name: "vin", value: request.vin, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * getFleetStatusForVehicles
   *
   * @returns Fleet status
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TeslaFleetManagementApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getFleetStatusForVehicles(
    request: Vehicles.GetFleetStatusForVehiclesRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/1/vehicles/fleet_status"),
        auth: anyAuth(
          this.#auth.thirdpartytokenAuthorizationCode,
          this.#auth.thirdpartytokenClientCredentials,
        ),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: fleetStatusRequestSchema },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * getFleetTelemetryConfiguration
   *
   * @returns Fleet telemetry configuration
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TeslaFleetManagementApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getFleetTelemetryConfiguration(
    request: Vehicles.GetFleetTelemetryConfigurationRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/1/vehicles/{vehicle_tag}/fleet_telemetry_config"),
        auth: anyAuth(
          this.#auth.thirdpartytokenAuthorizationCode,
          this.#auth.thirdpartytokenClientCredentials,
        ),
        pathParams: [{ name: "vehicle_tag", value: request.vehicleTag, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * getFleetTelemetryErrorsForAVehicle
   *
   * @returns Fleet telemetry errors
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TeslaFleetManagementApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getFleetTelemetryErrorsForAVehicle(
    request: Vehicles.GetFleetTelemetryErrorsForAVehicleRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/1/vehicles/{vehicle_tag}/fleet_telemetry_errors"),
        auth: anyAuth(
          this.#auth.thirdpartytokenAuthorizationCode,
          this.#auth.thirdpartytokenClientCredentials,
        ),
        pathParams: [{ name: "vehicle_tag", value: request.vehicleTag, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * getVehicle
   *
   * @returns Vehicle info
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TeslaFleetManagementApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getVehicle(
    request: Vehicles.GetVehicleRequest,
    options?: RequestOptions,
  ): ApiPromise<Api1VehiclesResponseResponse200, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/1/vehicles/{vehicle_tag}"),
        auth: anyAuth(
          this.#auth.thirdpartytokenAuthorizationCode,
          this.#auth.thirdpartytokenClientCredentials,
        ),
        pathParams: [{ name: "vehicle_tag", value: request.vehicleTag, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: api1VehiclesResponseResponse200Schema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * listVehicles
   *
   * @returns Vehicles list
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TeslaFleetManagementApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  listVehicles(options?: RequestOptions): ApiPromise<Api1VehiclesResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/1/vehicles"),
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
        success: { kind: "json", schema: api1VehiclesResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * mobileEnabled
   *
   * @returns Mobile access status
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TeslaFleetManagementApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  mobileEnabled(
    request: Vehicles.MobileEnabledRequest,
    options?: RequestOptions,
  ): ApiPromise<Api1VehiclesMobileEnabledResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/1/vehicles/{vehicle_tag}/mobile_enabled"),
        auth: anyAuth(
          this.#auth.thirdpartytokenAuthorizationCode,
          this.#auth.thirdpartytokenClientCredentials,
        ),
        pathParams: [{ name: "vehicle_tag", value: request.vehicleTag, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: api1VehiclesMobileEnabledResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * nearbyChargingSites
   *
   * @returns Charging sites
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TeslaFleetManagementApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  nearbyChargingSites(
    request: Vehicles.NearbyChargingSitesRequest,
    options?: RequestOptions,
  ): ApiPromise<Api1VehiclesNearbyChargingSitesResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/1/vehicles/{vehicle_tag}/nearby_charging_sites"),
        auth: anyAuth(
          this.#auth.thirdpartytokenAuthorizationCode,
          this.#auth.thirdpartytokenClientCredentials,
        ),
        pathParams: [{ name: "vehicle_tag", value: request.vehicleTag, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: api1VehiclesNearbyChargingSitesResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * removeDriverAccessFromAVehicle
   *
   * @returns Driver removed
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TeslaFleetManagementApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  removeDriverAccessFromAVehicle(
    request: Vehicles.RemoveDriverAccessFromAVehicleRequest,
    options?: RequestOptions,
  ): ApiPromise<SimpleOkResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/1/vehicles/{vehicle_tag}/drivers"),
        auth: anyAuth(
          this.#auth.thirdpartytokenAuthorizationCode,
          this.#auth.thirdpartytokenClientCredentials,
        ),
        pathParams: [{ name: "vehicle_tag", value: request.vehicleTag, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: simpleOkResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * setEnterprisePayerRoles
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TeslaFleetManagementApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  setEnterprisePayerRoles(
    request: Vehicles.SetEnterprisePayerRolesRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/1/dx/enterprise/v1/{vin}/payer"),
        auth: anyAuth(
          this.#auth.thirdpartytokenAuthorizationCode,
          this.#auth.thirdpartytokenClientCredentials,
        ),
        pathParams: [{ name: "vin", value: request.vin, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: enterprisePayerRequestSchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * vehicleLiveData
   *
   * @returns Realtime vehicle data
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TeslaFleetManagementApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  vehicleLiveData(
    request: Vehicles.VehicleLiveDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SiteInfoResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/1/vehicles/{vehicle_tag}/vehicle_data"),
        auth: anyAuth(
          this.#auth.thirdpartytokenAuthorizationCode,
          this.#auth.thirdpartytokenClientCredentials,
        ),
        pathParams: [{ name: "vehicle_tag", value: request.vehicleTag, schema: s.string() }],
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
   * vehicleOptions
   *
   * @returns Vehicle options
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TeslaFleetManagementApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  vehicleOptions(
    request: Vehicles.VehicleOptionsRequest,
    options?: RequestOptions,
  ): ApiPromise<Api1DxVehiclesOptionsResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/1/dx/vehicles/options"),
        auth: anyAuth(
          this.#auth.thirdpartytokenAuthorizationCode,
          this.#auth.thirdpartytokenClientCredentials,
        ),
        pathParams: [],
        query: [{ name: "vin", value: request.vin, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: api1DxVehiclesOptionsResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * vehicleSpecs
   *
   * @returns Vehicle specifications
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TeslaFleetManagementApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  vehicleSpecs(
    request: Vehicles.VehicleSpecsRequest,
    options?: RequestOptions,
  ): ApiPromise<SiteInfoResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/1/vehicles/{vin}/specs"),
        auth: anyAuth(
          this.#auth.thirdpartytokenAuthorizationCode,
          this.#auth.thirdpartytokenClientCredentials,
        ),
        pathParams: [{ name: "vin", value: request.vin, schema: s.string() }],
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
   * wakeUpVehicle
   *
   * @returns Vehicle awakened
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TeslaFleetManagementApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  wakeUpVehicle(
    request: Vehicles.WakeUpVehicleRequest,
    options?: RequestOptions,
  ): ApiPromise<Api1VehiclesWakeUpResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/1/vehicles/{vehicle_tag}/wake_up"),
        auth: anyAuth(
          this.#auth.thirdpartytokenAuthorizationCode,
          this.#auth.thirdpartytokenClientCredentials,
        ),
        pathParams: [{ name: "vehicle_tag", value: request.vehicleTag, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: api1VehiclesWakeUpResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * warrantyDetails
   *
   * @returns Warranty information
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TeslaFleetManagementApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  warrantyDetails(options?: RequestOptions): ApiPromise<Api1DxWarrantyDetailsResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/1/dx/warranty/details"),
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
        success: { kind: "json", schema: api1DxWarrantyDetailsResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace Vehicles {
  export type ConfigureFleetTelemetryUsingSignedJwsTokenRequest = {
    body: FleetTelemetryJwsRequest;
  };

  export type CreateOrUpdateFleetTelemetryConfigurationRequest = {
    body: Record<string, unknown>;
  };

  export type DeleteFleetTelemetryConfigurationRequest = {
    vehicleTag: string;
  };

  export type GetAllowedDriversForAVehicleRequest = {
    vehicleTag: string;
  };

  export type GetEligibleVehicleSubscriptionsRequest = {
    vin: string;
  };

  export type GetEligibleVehicleUpgradesRequest = {
    vin: string;
  };

  export type GetEnterpriseRolesForAVehicleRequest = {
    vin: string;
  };

  export type GetFleetStatusForVehiclesRequest = {
    body: FleetStatusRequest;
  };

  export type GetFleetTelemetryConfigurationRequest = {
    vehicleTag: string;
  };

  export type GetFleetTelemetryErrorsForAVehicleRequest = {
    vehicleTag: string;
  };

  export type GetVehicleRequest = {
    vehicleTag: string;
  };

  export type MobileEnabledRequest = {
    vehicleTag: string;
  };

  export type NearbyChargingSitesRequest = {
    vehicleTag: string;
  };

  export type RemoveDriverAccessFromAVehicleRequest = {
    vehicleTag: string;
  };

  export type SetEnterprisePayerRolesRequest = {
    vin: string;
    body: EnterprisePayerRequest;
  };

  export type VehicleLiveDataRequest = {
    vehicleTag: string;
  };

  export type VehicleOptionsRequest = {
    vin: string;
  };

  export type VehicleSpecsRequest = {
    vin: string;
  };

  export type WakeUpVehicleRequest = {
    vehicleTag: string;
  };
}

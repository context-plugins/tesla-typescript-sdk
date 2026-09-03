import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
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

  configureFleetTelemetryUsingSignedJwsToken(
    request: Vehicles.ConfigureFleetTelemetryUsingSignedJwsTokenRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, ResponseError> {
    return this.#rawClient.execute<Record<string, unknown>, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/api/1/vehicles/fleet_telemetry_config_jws"),
        auth: anyAuth(
          this.#auth.thirdpartytokenAuthorizationCode,
          this.#auth.thirdpartytokenClientCredentials,
        ),
        body: { kind: "json", value: request.body, schema: fleetTelemetryJwsRequestSchema },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  createOrUpdateFleetTelemetryConfiguration(
    request: Vehicles.CreateOrUpdateFleetTelemetryConfigurationRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, ResponseError> {
    return this.#rawClient.execute<Record<string, unknown>, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/api/1/vehicles/fleet_telemetry_config"),
        auth: anyAuth(
          this.#auth.thirdpartytokenAuthorizationCode,
          this.#auth.thirdpartytokenClientCredentials,
        ),
        body: { kind: "json", value: request.body, schema: s.record(s.string(), s.unknown()) },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  deleteFleetTelemetryConfiguration(
    request: Vehicles.DeleteFleetTelemetryConfigurationRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, ResponseError> {
    return this.#rawClient.execute<Record<string, unknown>, ResponseError>(
      {
        method: "DELETE",
        url: this.#servers.default("/api/1/vehicles/{vehicle_tag}/fleet_telemetry_config"),
        auth: anyAuth(
          this.#auth.thirdpartytokenAuthorizationCode,
          this.#auth.thirdpartytokenClientCredentials,
        ),
        pathParams: [{ name: "vehicle_tag", value: request.vehicleTag, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  getAllowedDriversForAVehicle(
    request: Vehicles.GetAllowedDriversForAVehicleRequest,
    options?: RequestOptions,
  ): ApiPromise<DriversResponse, ResponseError> {
    return this.#rawClient.execute<DriversResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/api/1/vehicles/{vehicle_tag}/drivers"),
        auth: anyAuth(
          this.#auth.thirdpartytokenAuthorizationCode,
          this.#auth.thirdpartytokenClientCredentials,
        ),
        pathParams: [{ name: "vehicle_tag", value: request.vehicleTag, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: driversResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  getEligibleVehicleSubscriptions(
    request: Vehicles.GetEligibleVehicleSubscriptionsRequest,
    options?: RequestOptions,
  ): ApiPromise<SiteInfoResponse, ResponseError> {
    return this.#rawClient.execute<SiteInfoResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/api/1/dx/vehicles/subscriptions/eligibility"),
        auth: anyAuth(
          this.#auth.thirdpartytokenAuthorizationCode,
          this.#auth.thirdpartytokenClientCredentials,
        ),
        query: [{ name: "vin", value: request.vin, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: siteInfoResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  getEligibleVehicleUpgrades(
    request: Vehicles.GetEligibleVehicleUpgradesRequest,
    options?: RequestOptions,
  ): ApiPromise<SiteInfoResponse, ResponseError> {
    return this.#rawClient.execute<SiteInfoResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/api/1/dx/vehicles/upgrades/eligibility"),
        auth: anyAuth(
          this.#auth.thirdpartytokenAuthorizationCode,
          this.#auth.thirdpartytokenClientCredentials,
        ),
        query: [{ name: "vin", value: request.vin, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: siteInfoResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  getEnterpriseRolesForAVehicle(
    request: Vehicles.GetEnterpriseRolesForAVehicleRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, ResponseError> {
    return this.#rawClient.execute<Record<string, unknown>, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/api/1/dx/enterprise/v1/{vin}/roles"),
        auth: anyAuth(
          this.#auth.thirdpartytokenAuthorizationCode,
          this.#auth.thirdpartytokenClientCredentials,
        ),
        pathParams: [{ name: "vin", value: request.vin, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  getFleetStatusForVehicles(
    request: Vehicles.GetFleetStatusForVehiclesRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, ResponseError> {
    return this.#rawClient.execute<Record<string, unknown>, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/api/1/vehicles/fleet_status"),
        auth: anyAuth(
          this.#auth.thirdpartytokenAuthorizationCode,
          this.#auth.thirdpartytokenClientCredentials,
        ),
        body: { kind: "json", value: request.body, schema: fleetStatusRequestSchema },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  getFleetTelemetryConfiguration(
    request: Vehicles.GetFleetTelemetryConfigurationRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, ResponseError> {
    return this.#rawClient.execute<Record<string, unknown>, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/api/1/vehicles/{vehicle_tag}/fleet_telemetry_config"),
        auth: anyAuth(
          this.#auth.thirdpartytokenAuthorizationCode,
          this.#auth.thirdpartytokenClientCredentials,
        ),
        pathParams: [{ name: "vehicle_tag", value: request.vehicleTag, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  getFleetTelemetryErrorsForAVehicle(
    request: Vehicles.GetFleetTelemetryErrorsForAVehicleRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, ResponseError> {
    return this.#rawClient.execute<Record<string, unknown>, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/api/1/vehicles/{vehicle_tag}/fleet_telemetry_errors"),
        auth: anyAuth(
          this.#auth.thirdpartytokenAuthorizationCode,
          this.#auth.thirdpartytokenClientCredentials,
        ),
        pathParams: [{ name: "vehicle_tag", value: request.vehicleTag, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  getVehicle(
    request: Vehicles.GetVehicleRequest,
    options?: RequestOptions,
  ): ApiPromise<Api1VehiclesResponseResponse200, ResponseError> {
    return this.#rawClient.execute<Api1VehiclesResponseResponse200, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/api/1/vehicles/{vehicle_tag}"),
        auth: anyAuth(
          this.#auth.thirdpartytokenAuthorizationCode,
          this.#auth.thirdpartytokenClientCredentials,
        ),
        pathParams: [{ name: "vehicle_tag", value: request.vehicleTag, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: api1VehiclesResponseResponse200Schema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listVehicles(options?: RequestOptions): ApiPromise<Api1VehiclesResponse, ResponseError> {
    return this.#rawClient.execute<Api1VehiclesResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/api/1/vehicles"),
        auth: anyAuth(
          this.#auth.thirdpartytokenAuthorizationCode,
          this.#auth.thirdpartytokenClientCredentials,
        ),
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: api1VehiclesResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  mobileEnabled(
    request: Vehicles.MobileEnabledRequest,
    options?: RequestOptions,
  ): ApiPromise<Api1VehiclesMobileEnabledResponse, ResponseError> {
    return this.#rawClient.execute<Api1VehiclesMobileEnabledResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/api/1/vehicles/{vehicle_tag}/mobile_enabled"),
        auth: anyAuth(
          this.#auth.thirdpartytokenAuthorizationCode,
          this.#auth.thirdpartytokenClientCredentials,
        ),
        pathParams: [{ name: "vehicle_tag", value: request.vehicleTag, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: api1VehiclesMobileEnabledResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  nearbyChargingSites(
    request: Vehicles.NearbyChargingSitesRequest,
    options?: RequestOptions,
  ): ApiPromise<Api1VehiclesNearbyChargingSitesResponse, ResponseError> {
    return this.#rawClient.execute<Api1VehiclesNearbyChargingSitesResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/api/1/vehicles/{vehicle_tag}/nearby_charging_sites"),
        auth: anyAuth(
          this.#auth.thirdpartytokenAuthorizationCode,
          this.#auth.thirdpartytokenClientCredentials,
        ),
        pathParams: [{ name: "vehicle_tag", value: request.vehicleTag, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: api1VehiclesNearbyChargingSitesResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  removeDriverAccessFromAVehicle(
    request: Vehicles.RemoveDriverAccessFromAVehicleRequest,
    options?: RequestOptions,
  ): ApiPromise<SimpleOkResponse, ResponseError> {
    return this.#rawClient.execute<SimpleOkResponse, ResponseError>(
      {
        method: "DELETE",
        url: this.#servers.default("/api/1/vehicles/{vehicle_tag}/drivers"),
        auth: anyAuth(
          this.#auth.thirdpartytokenAuthorizationCode,
          this.#auth.thirdpartytokenClientCredentials,
        ),
        pathParams: [{ name: "vehicle_tag", value: request.vehicleTag, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: simpleOkResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  setEnterprisePayerRoles(
    request: Vehicles.SetEnterprisePayerRolesRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ResponseError> {
    return this.#rawClient.execute<undefined, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/api/1/dx/enterprise/v1/{vin}/payer"),
        auth: anyAuth(
          this.#auth.thirdpartytokenAuthorizationCode,
          this.#auth.thirdpartytokenClientCredentials,
        ),
        pathParams: [{ name: "vin", value: request.vin, schema: s.string() }],
        body: { kind: "json", value: request.body, schema: enterprisePayerRequestSchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  vehicleLiveData(
    request: Vehicles.VehicleLiveDataRequest,
    options?: RequestOptions,
  ): ApiPromise<SiteInfoResponse, ResponseError> {
    return this.#rawClient.execute<SiteInfoResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/api/1/vehicles/{vehicle_tag}/vehicle_data"),
        auth: anyAuth(
          this.#auth.thirdpartytokenAuthorizationCode,
          this.#auth.thirdpartytokenClientCredentials,
        ),
        pathParams: [{ name: "vehicle_tag", value: request.vehicleTag, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: siteInfoResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  vehicleOptions(
    request: Vehicles.VehicleOptionsRequest,
    options?: RequestOptions,
  ): ApiPromise<Api1DxVehiclesOptionsResponse, ResponseError> {
    return this.#rawClient.execute<Api1DxVehiclesOptionsResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/api/1/dx/vehicles/options"),
        auth: anyAuth(
          this.#auth.thirdpartytokenAuthorizationCode,
          this.#auth.thirdpartytokenClientCredentials,
        ),
        query: [{ name: "vin", value: request.vin, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: api1DxVehiclesOptionsResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  vehicleSpecs(
    request: Vehicles.VehicleSpecsRequest,
    options?: RequestOptions,
  ): ApiPromise<SiteInfoResponse, ResponseError> {
    return this.#rawClient.execute<SiteInfoResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/api/1/vehicles/{vin}/specs"),
        auth: anyAuth(
          this.#auth.thirdpartytokenAuthorizationCode,
          this.#auth.thirdpartytokenClientCredentials,
        ),
        pathParams: [{ name: "vin", value: request.vin, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: siteInfoResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  wakeUpVehicle(
    request: Vehicles.WakeUpVehicleRequest,
    options?: RequestOptions,
  ): ApiPromise<Api1VehiclesWakeUpResponse, ResponseError> {
    return this.#rawClient.execute<Api1VehiclesWakeUpResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/api/1/vehicles/{vehicle_tag}/wake_up"),
        auth: anyAuth(
          this.#auth.thirdpartytokenAuthorizationCode,
          this.#auth.thirdpartytokenClientCredentials,
        ),
        pathParams: [{ name: "vehicle_tag", value: request.vehicleTag, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: api1VehiclesWakeUpResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  warrantyDetails(options?: RequestOptions): ApiPromise<Api1DxWarrantyDetailsResponse, ResponseError> {
    return this.#rawClient.execute<Api1DxWarrantyDetailsResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/api/1/dx/warranty/details"),
        auth: anyAuth(
          this.#auth.thirdpartytokenAuthorizationCode,
          this.#auth.thirdpartytokenClientCredentials,
        ),
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: api1DxWarrantyDetailsResponseSchema },
        errorFactory: ResponseError,
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

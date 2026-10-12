import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { backupResponseSchema, type BackupResponse } from "../models/backup-response.js";
import {
  fleetTelemetryErrorsResponseSchema,
  type FleetTelemetryErrorsResponse,
} from "../models/fleet-telemetry-errors-response.js";
import { publicKeyResponseSchema, type PublicKeyResponse } from "../models/public-key-response.js";
import {
  registerPartnerRequestSchema,
  type RegisterPartnerRequest,
} from "../models/register-partner-request.js";
import {
  registerPartnerResponseSchema,
  type RegisterPartnerResponse,
} from "../models/register-partner-response.js";
import type { Servers } from "../servers.js";

/**
 * Partner account and telemetry endpoints
 */
export class Partner {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * getPublicKeyForADomain
   *
   * @returns Public key retrieved
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TeslaFleetManagementApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getPublicKeyForADomain(
    request: Partner.GetPublicKeyForADomainRequest,
    options?: RequestOptions,
  ): ApiPromise<PublicKeyResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/1/partner_accounts/public_key"),
        auth: anyAuth(
          this.#auth.thirdpartytokenAuthorizationCode,
          this.#auth.thirdpartytokenClientCredentials,
        ),
        pathParams: [],
        query: [{ name: "domain", value: request.domain, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: publicKeyResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * getRecentFleetTelemetryErrors
   *
   * @returns Fleet telemetry errors retrieved
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TeslaFleetManagementApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getRecentFleetTelemetryErrors(
    options?: RequestOptions,
  ): ApiPromise<FleetTelemetryErrorsResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/1/partner_accounts/fleet_telemetry_errors"),
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
        success: { kind: "json", schema: fleetTelemetryErrorsResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * getVinsWithFleetTelemetryErrors
   *
   * @returns List of VINs with telemetry errors
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TeslaFleetManagementApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getVinsWithFleetTelemetryErrors(options?: RequestOptions): ApiPromise<BackupResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/1/partner_accounts/fleet_telemetry_error_vins"),
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
        success: { kind: "json", schema: backupResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * registerAPartnerAccount
   *
   * @returns Partner account registered
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TeslaFleetManagementApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  registerAPartnerAccount(
    request: Partner.RegisterAPartnerAccountRequest,
    options?: RequestOptions,
  ): ApiPromise<RegisterPartnerResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/1/partner_accounts"),
        auth: anyAuth(
          this.#auth.thirdpartytokenAuthorizationCode,
          this.#auth.thirdpartytokenClientCredentials,
        ),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: registerPartnerRequestSchema },
      },
      {
        success: { kind: "json", schema: registerPartnerResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace Partner {
  export type GetPublicKeyForADomainRequest = {
    domain: string;
  };

  export type RegisterAPartnerAccountRequest = {
    body: RegisterPartnerRequest;
  };
}

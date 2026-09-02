import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, anyAuth, s } from "../core/index.js";
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

export class Partner {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  getPublicKeyForADomain(
    request: Partner.GetPublicKeyForADomainRequest,
    options?: RequestOptions,
  ): ApiPromise<PublicKeyResponse, ResponseError> {
    return this.#rawClient.execute<PublicKeyResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/api/1/partner_accounts/public_key"),
        auth: anyAuth(
          this.#auth.thirdpartytokenAuthorizationCode,
          this.#auth.thirdpartytokenClientCredentials,
        ),
        query: [{ name: "domain", value: request.domain, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: publicKeyResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  getRecentFleetTelemetryErrors(
    options?: RequestOptions,
  ): ApiPromise<FleetTelemetryErrorsResponse, ResponseError> {
    return this.#rawClient.execute<FleetTelemetryErrorsResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/api/1/partner_accounts/fleet_telemetry_errors"),
        auth: anyAuth(
          this.#auth.thirdpartytokenAuthorizationCode,
          this.#auth.thirdpartytokenClientCredentials,
        ),
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: fleetTelemetryErrorsResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  getVinsWithFleetTelemetryErrors(options?: RequestOptions): ApiPromise<BackupResponse, ResponseError> {
    return this.#rawClient.execute<BackupResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/api/1/partner_accounts/fleet_telemetry_error_vins"),
        auth: anyAuth(
          this.#auth.thirdpartytokenAuthorizationCode,
          this.#auth.thirdpartytokenClientCredentials,
        ),
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: backupResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  registerAPartnerAccount(
    request: Partner.RegisterAPartnerAccountRequest,
    options?: RequestOptions,
  ): ApiPromise<RegisterPartnerResponse, ResponseError> {
    return this.#rawClient.execute<RegisterPartnerResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/api/1/partner_accounts"),
        auth: anyAuth(
          this.#auth.thirdpartytokenAuthorizationCode,
          this.#auth.thirdpartytokenClientCredentials,
        ),
        body: { kind: "json", value: request.body, schema: registerPartnerRequestSchema },
      },
      {
        success: { kind: "json", schema: registerPartnerResponseSchema },
        errorFactory: ResponseError,
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

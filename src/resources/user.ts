import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
import { backupResponseSchema, type BackupResponse } from "../models/backup-response.js";
import { meResponseSchema, type MeResponse } from "../models/me-response.js";
import { ordersResponseSchema, type OrdersResponse } from "../models/orders-response.js";
import { regionResponseSchema, type RegionResponse } from "../models/region-response.js";
import type { Servers } from "../servers.js";

export class User {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  getActiveOrdersForAUser(options?: RequestOptions): ApiPromise<OrdersResponse, ResponseError> {
    return this.#rawClient.execute<OrdersResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/api/1/users/orders"),
        auth: anyAuth(
          this.#auth.thirdpartytokenAuthorizationCode,
          this.#auth.thirdpartytokenClientCredentials,
        ),
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: ordersResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  getCustomFeatureFlagsForAUser(options?: RequestOptions): ApiPromise<BackupResponse, ResponseError> {
    return this.#rawClient.execute<BackupResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/api/1/users/feature_config"),
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

  getSummaryOfAUserSAccount(options?: RequestOptions): ApiPromise<MeResponse, ResponseError> {
    return this.#rawClient.execute<MeResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/api/1/users/me"),
        auth: anyAuth(
          this.#auth.thirdpartytokenAuthorizationCode,
          this.#auth.thirdpartytokenClientCredentials,
        ),
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: meResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  getUserSRegionAndFleetApiBaseUrl(options?: RequestOptions): ApiPromise<RegionResponse, ResponseError> {
    return this.#rawClient.execute<RegionResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/api/1/users/region"),
        auth: anyAuth(
          this.#auth.thirdpartytokenAuthorizationCode,
          this.#auth.thirdpartytokenClientCredentials,
        ),
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: regionResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

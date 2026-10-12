import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { backupResponseSchema, type BackupResponse } from "../models/backup-response.js";
import { meResponseSchema, type MeResponse } from "../models/me-response.js";
import { ordersResponseSchema, type OrdersResponse } from "../models/orders-response.js";
import { regionResponseSchema, type RegionResponse } from "../models/region-response.js";
import type { Servers } from "../servers.js";

/**
 * User account and settings endpoints
 */
export class User {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * getActiveOrdersForAUser
   *
   * @returns User orders retrieved
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TeslaFleetManagementApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getActiveOrdersForAUser(options?: RequestOptions): ApiPromise<OrdersResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/1/users/orders"),
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
        success: { kind: "json", schema: ordersResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * getCustomFeatureFlagsForAUser
   *
   * @returns Feature flags retrieved
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TeslaFleetManagementApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getCustomFeatureFlagsForAUser(options?: RequestOptions): ApiPromise<BackupResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/1/users/feature_config"),
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
   * getSummaryOfAUserSAccount
   *
   * @returns User account retrieved
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TeslaFleetManagementApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getSummaryOfAUserSAccount(options?: RequestOptions): ApiPromise<MeResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/1/users/me"),
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
        success: { kind: "json", schema: meResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * getUserSRegionAndFleetApiBaseUrl
   *
   * @returns Region information retrieved
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TeslaFleetManagementApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getUserSRegionAndFleetApiBaseUrl(options?: RequestOptions): ApiPromise<RegionResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/1/users/region"),
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
        success: { kind: "json", schema: regionResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

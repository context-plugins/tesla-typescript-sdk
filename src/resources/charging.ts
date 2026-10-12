import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
import {
  chargingHistoryResponseSchema,
  type ChargingHistoryResponse,
} from "../models/charging-history-response.js";
import {
  chargingSessionsResponseSchema,
  type ChargingSessionsResponse,
} from "../models/charging-sessions-response.js";
import type { Servers } from "../servers.js";

/**
 * Charging history, invoices, and session data
 */
export class Charging {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * getChargingHistory
   *
   * @remarks
   * Returns the paginated charging history for the authenticated account.
   *
   * @returns Charging history retrieved successfully
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TeslaFleetManagementApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getChargingHistory(options?: RequestOptions): ApiPromise<ChargingHistoryResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/1/dx/charging/history"),
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
        success: { kind: "json", schema: chargingHistoryResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * getChargingInvoice
   *
   * @remarks
   * Returns a charging invoice PDF for a charging session.
   *
   * @returns Invoice PDF document
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TeslaFleetManagementApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getChargingInvoice(
    request: Charging.GetChargingInvoiceRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/1/dx/charging/invoice/{id}"),
        auth: anyAuth(
          this.#auth.thirdpartytokenAuthorizationCode,
          this.#auth.thirdpartytokenClientCredentials,
        ),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * getChargingSessions
   *
   * @remarks
   * Returns charging session information. Only available for business fleet owners.
   *
   * @returns Charging sessions retrieved successfully
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TeslaFleetManagementApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getChargingSessions(options?: RequestOptions): ApiPromise<ChargingSessionsResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/1/dx/charging/sessions"),
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
        success: { kind: "json", schema: chargingSessionsResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace Charging {
  export type GetChargingInvoiceRequest = {
    /** Charging session invoice identifier */
    id: string;
  };
}

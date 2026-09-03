import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
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

export class Charging {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  getChargingHistory(options?: RequestOptions): ApiPromise<ChargingHistoryResponse, ResponseError> {
    return this.#rawClient.execute<ChargingHistoryResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/api/1/dx/charging/history"),
        auth: anyAuth(
          this.#auth.thirdpartytokenAuthorizationCode,
          this.#auth.thirdpartytokenClientCredentials,
        ),
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: chargingHistoryResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  getChargingInvoice(
    request: Charging.GetChargingInvoiceRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ResponseError> {
    return this.#rawClient.execute<undefined, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/api/1/dx/charging/invoice/{id}"),
        auth: anyAuth(
          this.#auth.thirdpartytokenAuthorizationCode,
          this.#auth.thirdpartytokenClientCredentials,
        ),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  getChargingSessions(options?: RequestOptions): ApiPromise<ChargingSessionsResponse, ResponseError> {
    return this.#rawClient.execute<ChargingSessionsResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/api/1/dx/charging/sessions"),
        auth: anyAuth(
          this.#auth.thirdpartytokenAuthorizationCode,
          this.#auth.thirdpartytokenClientCredentials,
        ),
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: chargingSessionsResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace Charging {
  export type GetChargingInvoiceRequest = {
    id: string;
  };
}

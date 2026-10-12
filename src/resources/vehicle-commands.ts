import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { actuateTrunkRequestSchema, type ActuateTrunkRequest } from "../models/actuate-trunk-request.js";
import {
  addChargeScheduleRequestSchema,
  type AddChargeScheduleRequest,
} from "../models/add-charge-schedule-request.js";
import {
  addPreconditionScheduleRequestSchema,
  type AddPreconditionScheduleRequest,
} from "../models/add-precondition-schedule-request.js";
import { adjustVolumeRequestSchema, type AdjustVolumeRequest } from "../models/adjust-volume-request.js";
import { commandResponseSchema, type CommandResponse } from "../models/command-response.js";
import { guestModeRequestSchema, type GuestModeRequest } from "../models/guest-mode-request.js";
import type { Servers } from "../servers.js";

/**
 * Commands that control vehicle behavior
 */
export class VehicleCommands {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Actuate trunk
   *
   * @remarks
   * Controls the front or rear trunk
   *
   * @returns Vehicle command response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TeslaFleetManagementApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  actuatetrunk(
    request: VehicleCommands.ActuatetrunkRequest,
    options?: RequestOptions,
  ): ApiPromise<CommandResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/1/vehicles/{vehicle_tag}/command/actuate_trunk"),
        auth: anyAuth(
          this.#auth.thirdpartytokenAuthorizationCode,
          this.#auth.thirdpartytokenClientCredentials,
        ),
        pathParams: [{ name: "vehicle_tag", value: request.vehicleTag, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: actuateTrunkRequestSchema },
      },
      {
        success: { kind: "json", schema: commandResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Add charge schedule
   *
   * @returns Vehicle command response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TeslaFleetManagementApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  addchargeschedule(
    request: VehicleCommands.AddchargescheduleRequest,
    options?: RequestOptions,
  ): ApiPromise<CommandResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/1/vehicles/{vehicle_tag}/command/add_charge_schedule"),
        auth: anyAuth(
          this.#auth.thirdpartytokenAuthorizationCode,
          this.#auth.thirdpartytokenClientCredentials,
        ),
        pathParams: [{ name: "vehicle_tag", value: request.vehicleTag, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: addChargeScheduleRequestSchema },
      },
      {
        success: { kind: "json", schema: commandResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Add precondition schedule
   *
   * @returns Vehicle command response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TeslaFleetManagementApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  addpreconditionschedule(
    request: VehicleCommands.AddpreconditionscheduleRequest,
    options?: RequestOptions,
  ): ApiPromise<CommandResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/1/vehicles/{vehicle_tag}/command/add_precondition_schedule"),
        auth: anyAuth(
          this.#auth.thirdpartytokenAuthorizationCode,
          this.#auth.thirdpartytokenClientCredentials,
        ),
        pathParams: [{ name: "vehicle_tag", value: request.vehicleTag, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: addPreconditionScheduleRequestSchema },
      },
      {
        success: { kind: "json", schema: commandResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Adjust media volume
   *
   * @returns Vehicle command response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TeslaFleetManagementApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  adjustmediavolume(
    request: VehicleCommands.AdjustmediavolumeRequest,
    options?: RequestOptions,
  ): ApiPromise<CommandResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/1/vehicles/{vehicle_tag}/command/adjust_volume"),
        auth: anyAuth(
          this.#auth.thirdpartytokenAuthorizationCode,
          this.#auth.thirdpartytokenClientCredentials,
        ),
        pathParams: [{ name: "vehicle_tag", value: request.vehicleTag, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: adjustVolumeRequestSchema },
      },
      {
        success: { kind: "json", schema: commandResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Cancel software update
   *
   * @returns Vehicle command response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TeslaFleetManagementApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  cancelsoftwareupdate(
    request: VehicleCommands.CancelsoftwareupdateRequest,
    options?: RequestOptions,
  ): ApiPromise<CommandResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/1/vehicles/{vehicle_tag}/command/cancel_software_update"),
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
        success: { kind: "json", schema: commandResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Charge max range
   *
   * @returns Vehicle command response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TeslaFleetManagementApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  chargemaxrange(
    request: VehicleCommands.ChargemaxrangeRequest,
    options?: RequestOptions,
  ): ApiPromise<CommandResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/1/vehicles/{vehicle_tag}/command/charge_max_range"),
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
        success: { kind: "json", schema: commandResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Charge standard
   *
   * @returns Vehicle command response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TeslaFleetManagementApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  chargestandard(
    request: VehicleCommands.ChargestandardRequest,
    options?: RequestOptions,
  ): ApiPromise<CommandResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/1/vehicles/{vehicle_tag}/command/charge_standard"),
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
        success: { kind: "json", schema: commandResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Clear PIN to Drive (admin)
   *
   * @remarks
   * Deactivates PIN to Drive and resets the associated PIN for supported firmware versions.
   *
   * @returns Vehicle command response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TeslaFleetManagementApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  clearPiNtoDriveAdmin(
    request: VehicleCommands.ClearPiNtoDriveAdminRequest,
    options?: RequestOptions,
  ): ApiPromise<CommandResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/1/vehicles/{vehicle_tag}/command/clear_pin_to_drive_admin"),
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
        success: { kind: "json", schema: commandResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Close charge port door
   *
   * @returns Vehicle command response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TeslaFleetManagementApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  closechargeportdoor(
    request: VehicleCommands.ClosechargeportdoorRequest,
    options?: RequestOptions,
  ): ApiPromise<CommandResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/1/vehicles/{vehicle_tag}/command/charge_port_door_close"),
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
        success: { kind: "json", schema: commandResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Enable or disable Guest Mode
   *
   * @returns Vehicle command response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TeslaFleetManagementApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  enableordisableGuestMode(
    request: VehicleCommands.EnableordisableGuestModeRequest,
    options?: RequestOptions,
  ): ApiPromise<CommandResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/1/vehicles/{vehicle_tag}/command/guest_mode"),
        auth: anyAuth(
          this.#auth.thirdpartytokenAuthorizationCode,
          this.#auth.thirdpartytokenClientCredentials,
        ),
        pathParams: [{ name: "vehicle_tag", value: request.vehicleTag, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: guestModeRequestSchema },
      },
      {
        success: { kind: "json", schema: commandResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Erase user data
   *
   * @remarks
   * Erases user data from the vehicle UI. Requires Guest Mode.
   *
   * @returns Vehicle command response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TeslaFleetManagementApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  eraseuserdata(
    request: VehicleCommands.EraseuserdataRequest,
    options?: RequestOptions,
  ): ApiPromise<CommandResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/1/vehicles/{vehicle_tag}/command/erase_user_data"),
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
        success: { kind: "json", schema: commandResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Flash lights
   *
   * @remarks
   * Briefly flashes vehicle headlights.
   *
   * @returns Vehicle command response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TeslaFleetManagementApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  flashlights(
    request: VehicleCommands.FlashlightsRequest,
    options?: RequestOptions,
  ): ApiPromise<CommandResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/1/vehicles/{vehicle_tag}/command/flash_lights"),
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
        success: { kind: "json", schema: commandResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Honk horn
   *
   * @returns Vehicle command response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TeslaFleetManagementApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  honkhorn(
    request: VehicleCommands.HonkhornRequest,
    options?: RequestOptions,
  ): ApiPromise<CommandResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/1/vehicles/{vehicle_tag}/command/honk_horn"),
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
        success: { kind: "json", schema: commandResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Lock doors
   *
   * @returns Vehicle command response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TeslaFleetManagementApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  lockdoors(
    request: VehicleCommands.LockdoorsRequest,
    options?: RequestOptions,
  ): ApiPromise<CommandResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/1/vehicles/{vehicle_tag}/command/door_lock"),
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
        success: { kind: "json", schema: commandResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Next favorite media track
   *
   * @returns Vehicle command response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TeslaFleetManagementApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  nextfavoritemediatrack(
    request: VehicleCommands.NextfavoritemediatrackRequest,
    options?: RequestOptions,
  ): ApiPromise<CommandResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/1/vehicles/{vehicle_tag}/command/media_next_fav"),
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
        success: { kind: "json", schema: commandResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Open charge port door
   *
   * @returns Vehicle command response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TeslaFleetManagementApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  openchargeportdoor(
    request: VehicleCommands.OpenchargeportdoorRequest,
    options?: RequestOptions,
  ): ApiPromise<CommandResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/1/vehicles/{vehicle_tag}/command/charge_port_door_open"),
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
        success: { kind: "json", schema: commandResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Start charging
   *
   * @returns Vehicle command response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TeslaFleetManagementApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  startcharging(
    request: VehicleCommands.StartchargingRequest,
    options?: RequestOptions,
  ): ApiPromise<CommandResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/1/vehicles/{vehicle_tag}/command/charge_start"),
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
        success: { kind: "json", schema: commandResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Start climate preconditioning
   *
   * @returns Vehicle command response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TeslaFleetManagementApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  startclimatepreconditioning(
    request: VehicleCommands.StartclimatepreconditioningRequest,
    options?: RequestOptions,
  ): ApiPromise<CommandResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/1/vehicles/{vehicle_tag}/command/auto_conditioning_start"),
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
        success: { kind: "json", schema: commandResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Stop charging
   *
   * @returns Vehicle command response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TeslaFleetManagementApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  stopcharging(
    request: VehicleCommands.StopchargingRequest,
    options?: RequestOptions,
  ): ApiPromise<CommandResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/1/vehicles/{vehicle_tag}/command/charge_stop"),
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
        success: { kind: "json", schema: commandResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Stop climate preconditioning
   *
   * @returns Vehicle command response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TeslaFleetManagementApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  stopclimatepreconditioning(
    request: VehicleCommands.StopclimatepreconditioningRequest,
    options?: RequestOptions,
  ): ApiPromise<CommandResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/1/vehicles/{vehicle_tag}/command/auto_conditioning_stop"),
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
        success: { kind: "json", schema: commandResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Unlock doors
   *
   * @returns Vehicle command response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TeslaFleetManagementApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  unlockdoors(
    request: VehicleCommands.UnlockdoorsRequest,
    options?: RequestOptions,
  ): ApiPromise<CommandResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/1/vehicles/{vehicle_tag}/command/door_unlock"),
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
        success: { kind: "json", schema: commandResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace VehicleCommands {
  export type ActuatetrunkRequest = {
    vehicleTag: string;
    body: ActuateTrunkRequest;
  };

  export type AddchargescheduleRequest = {
    vehicleTag: string;
    body: AddChargeScheduleRequest;
  };

  export type AddpreconditionscheduleRequest = {
    vehicleTag: string;
    body: AddPreconditionScheduleRequest;
  };

  export type AdjustmediavolumeRequest = {
    vehicleTag: string;
    body: AdjustVolumeRequest;
  };

  export type CancelsoftwareupdateRequest = {
    vehicleTag: string;
  };

  export type ChargemaxrangeRequest = {
    vehicleTag: string;
  };

  export type ChargestandardRequest = {
    vehicleTag: string;
  };

  export type ClearPiNtoDriveAdminRequest = {
    vehicleTag: string;
  };

  export type ClosechargeportdoorRequest = {
    vehicleTag: string;
  };

  export type EnableordisableGuestModeRequest = {
    vehicleTag: string;
    body: GuestModeRequest;
  };

  export type EraseuserdataRequest = {
    vehicleTag: string;
  };

  export type FlashlightsRequest = {
    vehicleTag: string;
  };

  export type HonkhornRequest = {
    vehicleTag: string;
  };

  export type LockdoorsRequest = {
    vehicleTag: string;
  };

  export type NextfavoritemediatrackRequest = {
    vehicleTag: string;
  };

  export type OpenchargeportdoorRequest = {
    vehicleTag: string;
  };

  export type StartchargingRequest = {
    vehicleTag: string;
  };

  export type StartclimatepreconditioningRequest = {
    vehicleTag: string;
  };

  export type StopchargingRequest = {
    vehicleTag: string;
  };

  export type StopclimatepreconditioningRequest = {
    vehicleTag: string;
  };

  export type UnlockdoorsRequest = {
    vehicleTag: string;
  };
}

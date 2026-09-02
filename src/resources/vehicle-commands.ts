import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, anyAuth, s } from "../core/index.js";
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

export class VehicleCommands {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  actuatetrunk(
    request: VehicleCommands.ActuatetrunkRequest,
    options?: RequestOptions,
  ): ApiPromise<CommandResponse, ResponseError> {
    return this.#rawClient.execute<CommandResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/api/1/vehicles/{vehicle_tag}/command/actuate_trunk"),
        auth: anyAuth(
          this.#auth.thirdpartytokenAuthorizationCode,
          this.#auth.thirdpartytokenClientCredentials,
        ),
        pathParams: [{ name: "vehicle_tag", value: request.vehicleTag, schema: s.string() }],
        body: { kind: "json", value: request.body, schema: actuateTrunkRequestSchema },
      },
      {
        success: { kind: "json", schema: commandResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  addchargeschedule(
    request: VehicleCommands.AddchargescheduleRequest,
    options?: RequestOptions,
  ): ApiPromise<CommandResponse, ResponseError> {
    return this.#rawClient.execute<CommandResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/api/1/vehicles/{vehicle_tag}/command/add_charge_schedule"),
        auth: anyAuth(
          this.#auth.thirdpartytokenAuthorizationCode,
          this.#auth.thirdpartytokenClientCredentials,
        ),
        pathParams: [{ name: "vehicle_tag", value: request.vehicleTag, schema: s.string() }],
        body: { kind: "json", value: request.body, schema: addChargeScheduleRequestSchema },
      },
      {
        success: { kind: "json", schema: commandResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  addpreconditionschedule(
    request: VehicleCommands.AddpreconditionscheduleRequest,
    options?: RequestOptions,
  ): ApiPromise<CommandResponse, ResponseError> {
    return this.#rawClient.execute<CommandResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/api/1/vehicles/{vehicle_tag}/command/add_precondition_schedule"),
        auth: anyAuth(
          this.#auth.thirdpartytokenAuthorizationCode,
          this.#auth.thirdpartytokenClientCredentials,
        ),
        pathParams: [{ name: "vehicle_tag", value: request.vehicleTag, schema: s.string() }],
        body: { kind: "json", value: request.body, schema: addPreconditionScheduleRequestSchema },
      },
      {
        success: { kind: "json", schema: commandResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  adjustmediavolume(
    request: VehicleCommands.AdjustmediavolumeRequest,
    options?: RequestOptions,
  ): ApiPromise<CommandResponse, ResponseError> {
    return this.#rawClient.execute<CommandResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/api/1/vehicles/{vehicle_tag}/command/adjust_volume"),
        auth: anyAuth(
          this.#auth.thirdpartytokenAuthorizationCode,
          this.#auth.thirdpartytokenClientCredentials,
        ),
        pathParams: [{ name: "vehicle_tag", value: request.vehicleTag, schema: s.string() }],
        body: { kind: "json", value: request.body, schema: adjustVolumeRequestSchema },
      },
      {
        success: { kind: "json", schema: commandResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  cancelsoftwareupdate(
    request: VehicleCommands.CancelsoftwareupdateRequest,
    options?: RequestOptions,
  ): ApiPromise<CommandResponse, ResponseError> {
    return this.#rawClient.execute<CommandResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/api/1/vehicles/{vehicle_tag}/command/cancel_software_update"),
        auth: anyAuth(
          this.#auth.thirdpartytokenAuthorizationCode,
          this.#auth.thirdpartytokenClientCredentials,
        ),
        pathParams: [{ name: "vehicle_tag", value: request.vehicleTag, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: commandResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  chargemaxrange(
    request: VehicleCommands.ChargemaxrangeRequest,
    options?: RequestOptions,
  ): ApiPromise<CommandResponse, ResponseError> {
    return this.#rawClient.execute<CommandResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/api/1/vehicles/{vehicle_tag}/command/charge_max_range"),
        auth: anyAuth(
          this.#auth.thirdpartytokenAuthorizationCode,
          this.#auth.thirdpartytokenClientCredentials,
        ),
        pathParams: [{ name: "vehicle_tag", value: request.vehicleTag, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: commandResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  chargestandard(
    request: VehicleCommands.ChargestandardRequest,
    options?: RequestOptions,
  ): ApiPromise<CommandResponse, ResponseError> {
    return this.#rawClient.execute<CommandResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/api/1/vehicles/{vehicle_tag}/command/charge_standard"),
        auth: anyAuth(
          this.#auth.thirdpartytokenAuthorizationCode,
          this.#auth.thirdpartytokenClientCredentials,
        ),
        pathParams: [{ name: "vehicle_tag", value: request.vehicleTag, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: commandResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  clearPiNtoDriveAdmin(
    request: VehicleCommands.ClearPiNtoDriveAdminRequest,
    options?: RequestOptions,
  ): ApiPromise<CommandResponse, ResponseError> {
    return this.#rawClient.execute<CommandResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/api/1/vehicles/{vehicle_tag}/command/clear_pin_to_drive_admin"),
        auth: anyAuth(
          this.#auth.thirdpartytokenAuthorizationCode,
          this.#auth.thirdpartytokenClientCredentials,
        ),
        pathParams: [{ name: "vehicle_tag", value: request.vehicleTag, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: commandResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  closechargeportdoor(
    request: VehicleCommands.ClosechargeportdoorRequest,
    options?: RequestOptions,
  ): ApiPromise<CommandResponse, ResponseError> {
    return this.#rawClient.execute<CommandResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/api/1/vehicles/{vehicle_tag}/command/charge_port_door_close"),
        auth: anyAuth(
          this.#auth.thirdpartytokenAuthorizationCode,
          this.#auth.thirdpartytokenClientCredentials,
        ),
        pathParams: [{ name: "vehicle_tag", value: request.vehicleTag, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: commandResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  enableordisableGuestMode(
    request: VehicleCommands.EnableordisableGuestModeRequest,
    options?: RequestOptions,
  ): ApiPromise<CommandResponse, ResponseError> {
    return this.#rawClient.execute<CommandResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/api/1/vehicles/{vehicle_tag}/command/guest_mode"),
        auth: anyAuth(
          this.#auth.thirdpartytokenAuthorizationCode,
          this.#auth.thirdpartytokenClientCredentials,
        ),
        pathParams: [{ name: "vehicle_tag", value: request.vehicleTag, schema: s.string() }],
        body: { kind: "json", value: request.body, schema: guestModeRequestSchema },
      },
      {
        success: { kind: "json", schema: commandResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  eraseuserdata(
    request: VehicleCommands.EraseuserdataRequest,
    options?: RequestOptions,
  ): ApiPromise<CommandResponse, ResponseError> {
    return this.#rawClient.execute<CommandResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/api/1/vehicles/{vehicle_tag}/command/erase_user_data"),
        auth: anyAuth(
          this.#auth.thirdpartytokenAuthorizationCode,
          this.#auth.thirdpartytokenClientCredentials,
        ),
        pathParams: [{ name: "vehicle_tag", value: request.vehicleTag, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: commandResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  flashlights(
    request: VehicleCommands.FlashlightsRequest,
    options?: RequestOptions,
  ): ApiPromise<CommandResponse, ResponseError> {
    return this.#rawClient.execute<CommandResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/api/1/vehicles/{vehicle_tag}/command/flash_lights"),
        auth: anyAuth(
          this.#auth.thirdpartytokenAuthorizationCode,
          this.#auth.thirdpartytokenClientCredentials,
        ),
        pathParams: [{ name: "vehicle_tag", value: request.vehicleTag, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: commandResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  honkhorn(
    request: VehicleCommands.HonkhornRequest,
    options?: RequestOptions,
  ): ApiPromise<CommandResponse, ResponseError> {
    return this.#rawClient.execute<CommandResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/api/1/vehicles/{vehicle_tag}/command/honk_horn"),
        auth: anyAuth(
          this.#auth.thirdpartytokenAuthorizationCode,
          this.#auth.thirdpartytokenClientCredentials,
        ),
        pathParams: [{ name: "vehicle_tag", value: request.vehicleTag, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: commandResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  lockdoors(
    request: VehicleCommands.LockdoorsRequest,
    options?: RequestOptions,
  ): ApiPromise<CommandResponse, ResponseError> {
    return this.#rawClient.execute<CommandResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/api/1/vehicles/{vehicle_tag}/command/door_lock"),
        auth: anyAuth(
          this.#auth.thirdpartytokenAuthorizationCode,
          this.#auth.thirdpartytokenClientCredentials,
        ),
        pathParams: [{ name: "vehicle_tag", value: request.vehicleTag, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: commandResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  nextfavoritemediatrack(
    request: VehicleCommands.NextfavoritemediatrackRequest,
    options?: RequestOptions,
  ): ApiPromise<CommandResponse, ResponseError> {
    return this.#rawClient.execute<CommandResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/api/1/vehicles/{vehicle_tag}/command/media_next_fav"),
        auth: anyAuth(
          this.#auth.thirdpartytokenAuthorizationCode,
          this.#auth.thirdpartytokenClientCredentials,
        ),
        pathParams: [{ name: "vehicle_tag", value: request.vehicleTag, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: commandResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  openchargeportdoor(
    request: VehicleCommands.OpenchargeportdoorRequest,
    options?: RequestOptions,
  ): ApiPromise<CommandResponse, ResponseError> {
    return this.#rawClient.execute<CommandResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/api/1/vehicles/{vehicle_tag}/command/charge_port_door_open"),
        auth: anyAuth(
          this.#auth.thirdpartytokenAuthorizationCode,
          this.#auth.thirdpartytokenClientCredentials,
        ),
        pathParams: [{ name: "vehicle_tag", value: request.vehicleTag, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: commandResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  startcharging(
    request: VehicleCommands.StartchargingRequest,
    options?: RequestOptions,
  ): ApiPromise<CommandResponse, ResponseError> {
    return this.#rawClient.execute<CommandResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/api/1/vehicles/{vehicle_tag}/command/charge_start"),
        auth: anyAuth(
          this.#auth.thirdpartytokenAuthorizationCode,
          this.#auth.thirdpartytokenClientCredentials,
        ),
        pathParams: [{ name: "vehicle_tag", value: request.vehicleTag, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: commandResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  startclimatepreconditioning(
    request: VehicleCommands.StartclimatepreconditioningRequest,
    options?: RequestOptions,
  ): ApiPromise<CommandResponse, ResponseError> {
    return this.#rawClient.execute<CommandResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/api/1/vehicles/{vehicle_tag}/command/auto_conditioning_start"),
        auth: anyAuth(
          this.#auth.thirdpartytokenAuthorizationCode,
          this.#auth.thirdpartytokenClientCredentials,
        ),
        pathParams: [{ name: "vehicle_tag", value: request.vehicleTag, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: commandResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  stopcharging(
    request: VehicleCommands.StopchargingRequest,
    options?: RequestOptions,
  ): ApiPromise<CommandResponse, ResponseError> {
    return this.#rawClient.execute<CommandResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/api/1/vehicles/{vehicle_tag}/command/charge_stop"),
        auth: anyAuth(
          this.#auth.thirdpartytokenAuthorizationCode,
          this.#auth.thirdpartytokenClientCredentials,
        ),
        pathParams: [{ name: "vehicle_tag", value: request.vehicleTag, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: commandResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  stopclimatepreconditioning(
    request: VehicleCommands.StopclimatepreconditioningRequest,
    options?: RequestOptions,
  ): ApiPromise<CommandResponse, ResponseError> {
    return this.#rawClient.execute<CommandResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/api/1/vehicles/{vehicle_tag}/command/auto_conditioning_stop"),
        auth: anyAuth(
          this.#auth.thirdpartytokenAuthorizationCode,
          this.#auth.thirdpartytokenClientCredentials,
        ),
        pathParams: [{ name: "vehicle_tag", value: request.vehicleTag, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: commandResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  unlockdoors(
    request: VehicleCommands.UnlockdoorsRequest,
    options?: RequestOptions,
  ): ApiPromise<CommandResponse, ResponseError> {
    return this.#rawClient.execute<CommandResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/api/1/vehicles/{vehicle_tag}/command/door_unlock"),
        auth: anyAuth(
          this.#auth.thirdpartytokenAuthorizationCode,
          this.#auth.thirdpartytokenClientCredentials,
        ),
        pathParams: [{ name: "vehicle_tag", value: request.vehicleTag, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: commandResponseSchema },
        errorFactory: ResponseError,
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

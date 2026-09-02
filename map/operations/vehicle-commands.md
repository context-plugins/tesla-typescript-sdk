<!-- Generated file — do not edit; regenerated with the SDK. -->

# VehicleCommands — operations

Accessor: `client.vehicleCommands` · Source: `src/resources/vehicle-commands.ts` · 21 operations · Request types: namespace `VehicleCommands`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `tesla-fleet-management-api`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### actuatetrunk

- **Signature**: `actuatetrunk(request: VehicleCommands.ActuatetrunkRequest, options?: RequestOptions): ApiPromise<CommandResponse, ResponseError>`
- **Wire**: `POST /api/1/vehicles/{vehicle_tag}/command/actuate_trunk`
- **Auth**: any of `thirdpartytokenAuthorizationCode`, `thirdpartytokenClientCredentials` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `CommandResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `VehicleCommands.ActuatetrunkRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `vehicleTag` | `path` | `vehicle_tag` | `string` | yes |
| `body` | `body` | — | `ActuateTrunkRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ActuateTrunkRequest` | `actuateTrunkRequestSchema` | `src/models/actuate-trunk-request.ts` |
| `CommandResponse` | `commandResponseSchema` | `src/models/command-response.ts` |

### addchargeschedule

- **Signature**: `addchargeschedule(request: VehicleCommands.AddchargescheduleRequest, options?: RequestOptions): ApiPromise<CommandResponse, ResponseError>`
- **Wire**: `POST /api/1/vehicles/{vehicle_tag}/command/add_charge_schedule`
- **Auth**: any of `thirdpartytokenAuthorizationCode`, `thirdpartytokenClientCredentials` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `CommandResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `VehicleCommands.AddchargescheduleRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `vehicleTag` | `path` | `vehicle_tag` | `string` | yes |
| `body` | `body` | — | `AddChargeScheduleRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AddChargeScheduleRequest` | `addChargeScheduleRequestSchema` | `src/models/add-charge-schedule-request.ts` |
| `CommandResponse` | `commandResponseSchema` | `src/models/command-response.ts` |

### addpreconditionschedule

- **Signature**: `addpreconditionschedule(request: VehicleCommands.AddpreconditionscheduleRequest, options?: RequestOptions): ApiPromise<CommandResponse, ResponseError>`
- **Wire**: `POST /api/1/vehicles/{vehicle_tag}/command/add_precondition_schedule`
- **Auth**: any of `thirdpartytokenAuthorizationCode`, `thirdpartytokenClientCredentials` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `CommandResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `VehicleCommands.AddpreconditionscheduleRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `vehicleTag` | `path` | `vehicle_tag` | `string` | yes |
| `body` | `body` | — | `AddPreconditionScheduleRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AddPreconditionScheduleRequest` | `addPreconditionScheduleRequestSchema` | `src/models/add-precondition-schedule-request.ts` |
| `CommandResponse` | `commandResponseSchema` | `src/models/command-response.ts` |

### adjustmediavolume

- **Signature**: `adjustmediavolume(request: VehicleCommands.AdjustmediavolumeRequest, options?: RequestOptions): ApiPromise<CommandResponse, ResponseError>`
- **Wire**: `POST /api/1/vehicles/{vehicle_tag}/command/adjust_volume`
- **Auth**: any of `thirdpartytokenAuthorizationCode`, `thirdpartytokenClientCredentials` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `CommandResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `VehicleCommands.AdjustmediavolumeRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `vehicleTag` | `path` | `vehicle_tag` | `string` | yes |
| `body` | `body` | — | `AdjustVolumeRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AdjustVolumeRequest` | `adjustVolumeRequestSchema` | `src/models/adjust-volume-request.ts` |
| `CommandResponse` | `commandResponseSchema` | `src/models/command-response.ts` |

### cancelsoftwareupdate

- **Signature**: `cancelsoftwareupdate(request: VehicleCommands.CancelsoftwareupdateRequest, options?: RequestOptions): ApiPromise<CommandResponse, ResponseError>`
- **Wire**: `POST /api/1/vehicles/{vehicle_tag}/command/cancel_software_update`
- **Auth**: any of `thirdpartytokenAuthorizationCode`, `thirdpartytokenClientCredentials` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CommandResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `VehicleCommands.CancelsoftwareupdateRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `vehicleTag` | `path` | `vehicle_tag` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CommandResponse` | `commandResponseSchema` | `src/models/command-response.ts` |

### chargemaxrange

- **Signature**: `chargemaxrange(request: VehicleCommands.ChargemaxrangeRequest, options?: RequestOptions): ApiPromise<CommandResponse, ResponseError>`
- **Wire**: `POST /api/1/vehicles/{vehicle_tag}/command/charge_max_range`
- **Auth**: any of `thirdpartytokenAuthorizationCode`, `thirdpartytokenClientCredentials` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CommandResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `VehicleCommands.ChargemaxrangeRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `vehicleTag` | `path` | `vehicle_tag` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CommandResponse` | `commandResponseSchema` | `src/models/command-response.ts` |

### chargestandard

- **Signature**: `chargestandard(request: VehicleCommands.ChargestandardRequest, options?: RequestOptions): ApiPromise<CommandResponse, ResponseError>`
- **Wire**: `POST /api/1/vehicles/{vehicle_tag}/command/charge_standard`
- **Auth**: any of `thirdpartytokenAuthorizationCode`, `thirdpartytokenClientCredentials` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CommandResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `VehicleCommands.ChargestandardRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `vehicleTag` | `path` | `vehicle_tag` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CommandResponse` | `commandResponseSchema` | `src/models/command-response.ts` |

### clearPiNtoDriveAdmin

- **Signature**: `clearPiNtoDriveAdmin(request: VehicleCommands.ClearPiNtoDriveAdminRequest, options?: RequestOptions): ApiPromise<CommandResponse, ResponseError>`
- **Wire**: `POST /api/1/vehicles/{vehicle_tag}/command/clear_pin_to_drive_admin`
- **Auth**: any of `thirdpartytokenAuthorizationCode`, `thirdpartytokenClientCredentials` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CommandResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `VehicleCommands.ClearPiNtoDriveAdminRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `vehicleTag` | `path` | `vehicle_tag` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CommandResponse` | `commandResponseSchema` | `src/models/command-response.ts` |

### closechargeportdoor

- **Signature**: `closechargeportdoor(request: VehicleCommands.ClosechargeportdoorRequest, options?: RequestOptions): ApiPromise<CommandResponse, ResponseError>`
- **Wire**: `POST /api/1/vehicles/{vehicle_tag}/command/charge_port_door_close`
- **Auth**: any of `thirdpartytokenAuthorizationCode`, `thirdpartytokenClientCredentials` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CommandResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `VehicleCommands.ClosechargeportdoorRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `vehicleTag` | `path` | `vehicle_tag` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CommandResponse` | `commandResponseSchema` | `src/models/command-response.ts` |

### enableordisableGuestMode

- **Signature**: `enableordisableGuestMode(request: VehicleCommands.EnableordisableGuestModeRequest, options?: RequestOptions): ApiPromise<CommandResponse, ResponseError>`
- **Wire**: `POST /api/1/vehicles/{vehicle_tag}/command/guest_mode`
- **Auth**: any of `thirdpartytokenAuthorizationCode`, `thirdpartytokenClientCredentials` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `CommandResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `VehicleCommands.EnableordisableGuestModeRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `vehicleTag` | `path` | `vehicle_tag` | `string` | yes |
| `body` | `body` | — | `GuestModeRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GuestModeRequest` | `guestModeRequestSchema` | `src/models/guest-mode-request.ts` |
| `CommandResponse` | `commandResponseSchema` | `src/models/command-response.ts` |

### eraseuserdata

- **Signature**: `eraseuserdata(request: VehicleCommands.EraseuserdataRequest, options?: RequestOptions): ApiPromise<CommandResponse, ResponseError>`
- **Wire**: `POST /api/1/vehicles/{vehicle_tag}/command/erase_user_data`
- **Auth**: any of `thirdpartytokenAuthorizationCode`, `thirdpartytokenClientCredentials` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CommandResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `VehicleCommands.EraseuserdataRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `vehicleTag` | `path` | `vehicle_tag` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CommandResponse` | `commandResponseSchema` | `src/models/command-response.ts` |

### flashlights

- **Signature**: `flashlights(request: VehicleCommands.FlashlightsRequest, options?: RequestOptions): ApiPromise<CommandResponse, ResponseError>`
- **Wire**: `POST /api/1/vehicles/{vehicle_tag}/command/flash_lights`
- **Auth**: any of `thirdpartytokenAuthorizationCode`, `thirdpartytokenClientCredentials` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CommandResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `VehicleCommands.FlashlightsRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `vehicleTag` | `path` | `vehicle_tag` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CommandResponse` | `commandResponseSchema` | `src/models/command-response.ts` |

### honkhorn

- **Signature**: `honkhorn(request: VehicleCommands.HonkhornRequest, options?: RequestOptions): ApiPromise<CommandResponse, ResponseError>`
- **Wire**: `POST /api/1/vehicles/{vehicle_tag}/command/honk_horn`
- **Auth**: any of `thirdpartytokenAuthorizationCode`, `thirdpartytokenClientCredentials` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CommandResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `VehicleCommands.HonkhornRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `vehicleTag` | `path` | `vehicle_tag` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CommandResponse` | `commandResponseSchema` | `src/models/command-response.ts` |

### lockdoors

- **Signature**: `lockdoors(request: VehicleCommands.LockdoorsRequest, options?: RequestOptions): ApiPromise<CommandResponse, ResponseError>`
- **Wire**: `POST /api/1/vehicles/{vehicle_tag}/command/door_lock`
- **Auth**: any of `thirdpartytokenAuthorizationCode`, `thirdpartytokenClientCredentials` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CommandResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `VehicleCommands.LockdoorsRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `vehicleTag` | `path` | `vehicle_tag` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CommandResponse` | `commandResponseSchema` | `src/models/command-response.ts` |

### nextfavoritemediatrack

- **Signature**: `nextfavoritemediatrack(request: VehicleCommands.NextfavoritemediatrackRequest, options?: RequestOptions): ApiPromise<CommandResponse, ResponseError>`
- **Wire**: `POST /api/1/vehicles/{vehicle_tag}/command/media_next_fav`
- **Auth**: any of `thirdpartytokenAuthorizationCode`, `thirdpartytokenClientCredentials` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CommandResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `VehicleCommands.NextfavoritemediatrackRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `vehicleTag` | `path` | `vehicle_tag` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CommandResponse` | `commandResponseSchema` | `src/models/command-response.ts` |

### openchargeportdoor

- **Signature**: `openchargeportdoor(request: VehicleCommands.OpenchargeportdoorRequest, options?: RequestOptions): ApiPromise<CommandResponse, ResponseError>`
- **Wire**: `POST /api/1/vehicles/{vehicle_tag}/command/charge_port_door_open`
- **Auth**: any of `thirdpartytokenAuthorizationCode`, `thirdpartytokenClientCredentials` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CommandResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `VehicleCommands.OpenchargeportdoorRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `vehicleTag` | `path` | `vehicle_tag` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CommandResponse` | `commandResponseSchema` | `src/models/command-response.ts` |

### startcharging

- **Signature**: `startcharging(request: VehicleCommands.StartchargingRequest, options?: RequestOptions): ApiPromise<CommandResponse, ResponseError>`
- **Wire**: `POST /api/1/vehicles/{vehicle_tag}/command/charge_start`
- **Auth**: any of `thirdpartytokenAuthorizationCode`, `thirdpartytokenClientCredentials` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CommandResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `VehicleCommands.StartchargingRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `vehicleTag` | `path` | `vehicle_tag` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CommandResponse` | `commandResponseSchema` | `src/models/command-response.ts` |

### startclimatepreconditioning

- **Signature**: `startclimatepreconditioning(request: VehicleCommands.StartclimatepreconditioningRequest, options?: RequestOptions): ApiPromise<CommandResponse, ResponseError>`
- **Wire**: `POST /api/1/vehicles/{vehicle_tag}/command/auto_conditioning_start`
- **Auth**: any of `thirdpartytokenAuthorizationCode`, `thirdpartytokenClientCredentials` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CommandResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `VehicleCommands.StartclimatepreconditioningRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `vehicleTag` | `path` | `vehicle_tag` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CommandResponse` | `commandResponseSchema` | `src/models/command-response.ts` |

### stopcharging

- **Signature**: `stopcharging(request: VehicleCommands.StopchargingRequest, options?: RequestOptions): ApiPromise<CommandResponse, ResponseError>`
- **Wire**: `POST /api/1/vehicles/{vehicle_tag}/command/charge_stop`
- **Auth**: any of `thirdpartytokenAuthorizationCode`, `thirdpartytokenClientCredentials` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CommandResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `VehicleCommands.StopchargingRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `vehicleTag` | `path` | `vehicle_tag` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CommandResponse` | `commandResponseSchema` | `src/models/command-response.ts` |

### stopclimatepreconditioning

- **Signature**: `stopclimatepreconditioning(request: VehicleCommands.StopclimatepreconditioningRequest, options?: RequestOptions): ApiPromise<CommandResponse, ResponseError>`
- **Wire**: `POST /api/1/vehicles/{vehicle_tag}/command/auto_conditioning_stop`
- **Auth**: any of `thirdpartytokenAuthorizationCode`, `thirdpartytokenClientCredentials` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CommandResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `VehicleCommands.StopclimatepreconditioningRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `vehicleTag` | `path` | `vehicle_tag` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CommandResponse` | `commandResponseSchema` | `src/models/command-response.ts` |

### unlockdoors

- **Signature**: `unlockdoors(request: VehicleCommands.UnlockdoorsRequest, options?: RequestOptions): ApiPromise<CommandResponse, ResponseError>`
- **Wire**: `POST /api/1/vehicles/{vehicle_tag}/command/door_unlock`
- **Auth**: any of `thirdpartytokenAuthorizationCode`, `thirdpartytokenClientCredentials` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CommandResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `VehicleCommands.UnlockdoorsRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `vehicleTag` | `path` | `vehicle_tag` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CommandResponse` | `commandResponseSchema` | `src/models/command-response.ts` |


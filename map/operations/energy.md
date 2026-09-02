<!-- Generated file — do not edit; regenerated with the SDK. -->

# Energy — operations

Accessor: `client.energy` · Source: `src/resources/energy.ts` · 11 operations · Request types: namespace `Energy`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `tesla-fleet-management-api`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### adjustSiteSBackupReserve

- **Signature**: `adjustSiteSBackupReserve(request: Energy.AdjustSiteSBackupReserveRequest, options?: RequestOptions): ApiPromise<BackupResponse, ResponseError>`
- **Wire**: `POST /api/1/energy_sites/{energy_site_id}/backup`
- **Auth**: any of `thirdpartytokenAuthorizationCode`, `thirdpartytokenClientCredentials` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `BackupResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Energy.AdjustSiteSBackupReserveRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `energySiteId` | `path` | `energy_site_id` | `string` | yes |
| `body` | `body` | — | `BackupRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BackupRequest` | `backupRequestSchema` | `src/models/backup-request.ts` |
| `BackupResponse` | `backupResponseSchema` | `src/models/backup-response.ts` |

### adjustSiteSOffGridVehicleChargingReserve

- **Signature**: `adjustSiteSOffGridVehicleChargingReserve(request: Energy.AdjustSiteSOffGridVehicleChargingReserveRequest, options?: RequestOptions): ApiPromise<GenericUpdateResponse, ResponseError>`
- **Wire**: `POST /api/1/energy_sites/{energy_site_id}/off_grid_vehicle_charging_reserve`
- **Auth**: any of `thirdpartytokenAuthorizationCode`, `thirdpartytokenClientCredentials` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `GenericUpdateResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Energy.AdjustSiteSOffGridVehicleChargingReserveRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `energySiteId` | `path` | `energy_site_id` | `string` | yes |
| `body` | `body` | — | `OffGridVehicleChargingReserveRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `OffGridVehicleChargingReserveRequest` | `offGridVehicleChargingReserveRequestSchema` | `src/models/off-grid-vehicle-charging-reserve-request.ts` |
| `GenericUpdateResponse` | `genericUpdateResponseSchema` | `src/models/generic-update-response.ts` |

### allowDisallowChargingFromTheGridAndExportingEnergyToTheGrid

- **Signature**: `allowDisallowChargingFromTheGridAndExportingEnergyToTheGrid(request: Energy.AllowDisallowChargingFromTheGridAndExportingEnergyToTheGridRequest, options?: RequestOptions): ApiPromise<GenericUpdateResponse, ResponseError>`
- **Wire**: `POST /api/1/energy_sites/{energy_site_id}/grid_import_export`
- **Auth**: any of `thirdpartytokenAuthorizationCode`, `thirdpartytokenClientCredentials` — the first one configured is sent
- **Request body**: `application/json` — the `body` field, a bare top-level JSON map with no fixed keys
- **Returns**: `GenericUpdateResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Energy.AllowDisallowChargingFromTheGridAndExportingEnergyToTheGridRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `energySiteId` | `path` | `energy_site_id` | `string` | yes |
| `body` | `body` | — | `Record<string, unknown>` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `GenericUpdateResponse` | `genericUpdateResponseSchema` | `src/models/generic-update-response.ts` |

### getBackupOrEnergyHistory

- **Signature**: `getBackupOrEnergyHistory(request: Energy.GetBackupOrEnergyHistoryRequest, options?: RequestOptions): ApiPromise<CalendarHistoryResponse, ResponseError>`
- **Wire**: `GET /api/1/energy_sites/{energy_site_id}/calendar_history`
- **Auth**: any of `thirdpartytokenAuthorizationCode`, `thirdpartytokenClientCredentials` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CalendarHistoryResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Energy.GetBackupOrEnergyHistoryRequest` (6):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `energySiteId` | `path` | `energy_site_id` | `string` | yes |
| `kind` | `query` | — | `Kind` | yes |
| `startDate` | `query` | `start_date` | `Date` (date-time) | yes |
| `endDate` | `query` | `end_date` | `Date` (date-time) | yes |
| `period` | `query` | — | `string` | no |
| `timeZone` | `query` | `time_zone` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Kind` | `kindSchema` | `src/models/kind.ts` |
| `CalendarHistoryResponse` | `calendarHistoryResponseSchema` | `src/models/calendar-history-response.ts` |

### getLiveSiteStatus

- **Signature**: `getLiveSiteStatus(request: Energy.GetLiveSiteStatusRequest, options?: RequestOptions): ApiPromise<LiveStatusResponse, ResponseError>`
- **Wire**: `GET /api/1/energy_sites/{energy_site_id}/live_status`
- **Auth**: any of `thirdpartytokenAuthorizationCode`, `thirdpartytokenClientCredentials` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `LiveStatusResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Energy.GetLiveSiteStatusRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `energySiteId` | `path` | `energy_site_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `LiveStatusResponse` | `liveStatusResponseSchema` | `src/models/live-status-response.ts` |

### getSiteInformationAssetsSettingsFeatures

- **Signature**: `getSiteInformationAssetsSettingsFeatures(request: Energy.GetSiteInformationAssetsSettingsFeaturesRequest, options?: RequestOptions): ApiPromise<SiteInfoResponse, ResponseError>`
- **Wire**: `GET /api/1/energy_sites/{energy_site_id}/site_info`
- **Auth**: any of `thirdpartytokenAuthorizationCode`, `thirdpartytokenClientCredentials` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SiteInfoResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Energy.GetSiteInformationAssetsSettingsFeaturesRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `energySiteId` | `path` | `energy_site_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SiteInfoResponse` | `siteInfoResponseSchema` | `src/models/site-info-response.ts` |

### getUserProductsVehiclesEnergySites

- **Signature**: `getUserProductsVehiclesEnergySites(options?: RequestOptions): ApiPromise<ProductsResponse, ResponseError>`
- **Wire**: `GET /api/1/products`
- **Auth**: any of `thirdpartytokenAuthorizationCode`, `thirdpartytokenClientCredentials` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ProductsResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

| Type | Schema value | Source |
| --- | --- | --- |
| `ProductsResponse` | `productsResponseSchema` | `src/models/products-response.ts` |

### getWallConnectorChargingHistory

- **Signature**: `getWallConnectorChargingHistory(request: Energy.GetWallConnectorChargingHistoryRequest, options?: RequestOptions): ApiPromise<ChargeHistoryResponse, ResponseError>`
- **Wire**: `GET /api/1/energy_sites/{energy_site_id}/telemetry_history`
- **Auth**: any of `thirdpartytokenAuthorizationCode`, `thirdpartytokenClientCredentials` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ChargeHistoryResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Energy.GetWallConnectorChargingHistoryRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `energySiteId` | `path` | `energy_site_id` | `string` | yes |
| `kind` | `query` | — | `KindGetWallConnectorChargingHistory` | yes |
| `startDate` | `query` | `start_date` | `Date` (date-time) | yes |
| `endDate` | `query` | `end_date` | `Date` (date-time) | yes |
| `timeZone` | `query` | `time_zone` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `KindGetWallConnectorChargingHistory` | `kindGetWallConnectorChargingHistorySchema` | `src/models/kind-get-wall-connector-charging-history.ts` |
| `ChargeHistoryResponse` | `chargeHistoryResponseSchema` | `src/models/charge-history-response.ts` |

### setSiteModeAutonomousOrSelfConsumption

- **Signature**: `setSiteModeAutonomousOrSelfConsumption(request: Energy.SetSiteModeAutonomousOrSelfConsumptionRequest, options?: RequestOptions): ApiPromise<GenericUpdateResponse, ResponseError>`
- **Wire**: `POST /api/1/energy_sites/{energy_site_id}/operation`
- **Auth**: any of `thirdpartytokenAuthorizationCode`, `thirdpartytokenClientCredentials` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `GenericUpdateResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Energy.SetSiteModeAutonomousOrSelfConsumptionRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `energySiteId` | `path` | `energy_site_id` | `string` | yes |
| `body` | `body` | — | `OperationRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `OperationRequest` | `operationRequestSchema` | `src/models/operation-request.ts` |
| `GenericUpdateResponse` | `genericUpdateResponseSchema` | `src/models/generic-update-response.ts` |

### updateStormWatchParticipation

- **Signature**: `updateStormWatchParticipation(request: Energy.UpdateStormWatchParticipationRequest, options?: RequestOptions): ApiPromise<GenericUpdateResponse, ResponseError>`
- **Wire**: `POST /api/1/energy_sites/{energy_site_id}/storm_mode`
- **Auth**: any of `thirdpartytokenAuthorizationCode`, `thirdpartytokenClientCredentials` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `GenericUpdateResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Energy.UpdateStormWatchParticipationRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `energySiteId` | `path` | `energy_site_id` | `string` | yes |
| `body` | `body` | — | `StormModeRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `StormModeRequest` | `stormModeRequestSchema` | `src/models/storm-mode-request.ts` |
| `GenericUpdateResponse` | `genericUpdateResponseSchema` | `src/models/generic-update-response.ts` |

### updateTimeOfUseTouSettings

- **Signature**: `updateTimeOfUseTouSettings(request: Energy.UpdateTimeOfUseTouSettingsRequest, options?: RequestOptions): ApiPromise<GenericUpdateResponse, ResponseError>`
- **Wire**: `POST /api/1/energy_sites/{energy_site_id}/time_of_use_settings`
- **Auth**: any of `thirdpartytokenAuthorizationCode`, `thirdpartytokenClientCredentials` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `GenericUpdateResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Energy.UpdateTimeOfUseTouSettingsRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `energySiteId` | `path` | `energy_site_id` | `string` | yes |
| `body` | `body` | — | `TimeOfUseSettingsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TimeOfUseSettingsRequest` | `timeOfUseSettingsRequestSchema` | `src/models/time-of-use-settings-request.ts` |
| `GenericUpdateResponse` | `genericUpdateResponseSchema` | `src/models/generic-update-response.ts` |


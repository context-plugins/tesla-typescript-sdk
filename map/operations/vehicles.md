<!-- Generated file — do not edit; regenerated with the SDK. -->

# Vehicles — operations

Accessor: `client.vehicles` · Source: `src/resources/vehicles.ts` · 21 operations · Request types: namespace `Vehicles`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `tesla-fleet-management-api`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### configureFleetTelemetryUsingSignedJwsToken

- **Signature**: `configureFleetTelemetryUsingSignedJwsToken(request: Vehicles.ConfigureFleetTelemetryUsingSignedJwsTokenRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, ResponseError>`
- **Wire**: `POST /api/1/vehicles/fleet_telemetry_config_jws`
- **Auth**: any of `thirdpartytokenAuthorizationCode`, `thirdpartytokenClientCredentials` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Vehicles.ConfigureFleetTelemetryUsingSignedJwsTokenRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `FleetTelemetryJwsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `FleetTelemetryJwsRequest` | `fleetTelemetryJwsRequestSchema` | `src/models/fleet-telemetry-jws-request.ts` |

### createOrUpdateFleetTelemetryConfiguration

- **Signature**: `createOrUpdateFleetTelemetryConfiguration(request: Vehicles.CreateOrUpdateFleetTelemetryConfigurationRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, ResponseError>`
- **Wire**: `POST /api/1/vehicles/fleet_telemetry_config`
- **Auth**: any of `thirdpartytokenAuthorizationCode`, `thirdpartytokenClientCredentials` — the first one configured is sent
- **Request body**: `application/json` — the `body` field, a bare top-level JSON map with no fixed keys
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Vehicles.CreateOrUpdateFleetTelemetryConfigurationRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `Record<string, unknown>` | yes |

### deleteFleetTelemetryConfiguration

- **Signature**: `deleteFleetTelemetryConfiguration(request: Vehicles.DeleteFleetTelemetryConfigurationRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, ResponseError>`
- **Wire**: `DELETE /api/1/vehicles/{vehicle_tag}/fleet_telemetry_config`
- **Auth**: any of `thirdpartytokenAuthorizationCode`, `thirdpartytokenClientCredentials` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Vehicles.DeleteFleetTelemetryConfigurationRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `vehicleTag` | `path` | `vehicle_tag` | `string` | yes |

### getAllowedDriversForAVehicle

- **Signature**: `getAllowedDriversForAVehicle(request: Vehicles.GetAllowedDriversForAVehicleRequest, options?: RequestOptions): ApiPromise<DriversResponse, ResponseError>`
- **Wire**: `GET /api/1/vehicles/{vehicle_tag}/drivers`
- **Auth**: any of `thirdpartytokenAuthorizationCode`, `thirdpartytokenClientCredentials` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DriversResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Vehicles.GetAllowedDriversForAVehicleRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `vehicleTag` | `path` | `vehicle_tag` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DriversResponse` | `driversResponseSchema` | `src/models/drivers-response.ts` |

### getEligibleVehicleSubscriptions

- **Signature**: `getEligibleVehicleSubscriptions(request: Vehicles.GetEligibleVehicleSubscriptionsRequest, options?: RequestOptions): ApiPromise<SiteInfoResponse, ResponseError>`
- **Wire**: `GET /api/1/dx/vehicles/subscriptions/eligibility`
- **Auth**: any of `thirdpartytokenAuthorizationCode`, `thirdpartytokenClientCredentials` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SiteInfoResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Vehicles.GetEligibleVehicleSubscriptionsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `vin` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SiteInfoResponse` | `siteInfoResponseSchema` | `src/models/site-info-response.ts` |

### getEligibleVehicleUpgrades

- **Signature**: `getEligibleVehicleUpgrades(request: Vehicles.GetEligibleVehicleUpgradesRequest, options?: RequestOptions): ApiPromise<SiteInfoResponse, ResponseError>`
- **Wire**: `GET /api/1/dx/vehicles/upgrades/eligibility`
- **Auth**: any of `thirdpartytokenAuthorizationCode`, `thirdpartytokenClientCredentials` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SiteInfoResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Vehicles.GetEligibleVehicleUpgradesRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `vin` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SiteInfoResponse` | `siteInfoResponseSchema` | `src/models/site-info-response.ts` |

### getEnterpriseRolesForAVehicle

- **Signature**: `getEnterpriseRolesForAVehicle(request: Vehicles.GetEnterpriseRolesForAVehicleRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, ResponseError>`
- **Wire**: `GET /api/1/dx/enterprise/v1/{vin}/roles`
- **Auth**: any of `thirdpartytokenAuthorizationCode`, `thirdpartytokenClientCredentials` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Vehicles.GetEnterpriseRolesForAVehicleRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `vin` | `path` | `string` | yes |

### getFleetStatusForVehicles

- **Signature**: `getFleetStatusForVehicles(request: Vehicles.GetFleetStatusForVehiclesRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, ResponseError>`
- **Wire**: `POST /api/1/vehicles/fleet_status`
- **Auth**: any of `thirdpartytokenAuthorizationCode`, `thirdpartytokenClientCredentials` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Vehicles.GetFleetStatusForVehiclesRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `FleetStatusRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `FleetStatusRequest` | `fleetStatusRequestSchema` | `src/models/fleet-status-request.ts` |

### getFleetTelemetryConfiguration

- **Signature**: `getFleetTelemetryConfiguration(request: Vehicles.GetFleetTelemetryConfigurationRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, ResponseError>`
- **Wire**: `GET /api/1/vehicles/{vehicle_tag}/fleet_telemetry_config`
- **Auth**: any of `thirdpartytokenAuthorizationCode`, `thirdpartytokenClientCredentials` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Vehicles.GetFleetTelemetryConfigurationRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `vehicleTag` | `path` | `vehicle_tag` | `string` | yes |

### getFleetTelemetryErrorsForAVehicle

- **Signature**: `getFleetTelemetryErrorsForAVehicle(request: Vehicles.GetFleetTelemetryErrorsForAVehicleRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, ResponseError>`
- **Wire**: `GET /api/1/vehicles/{vehicle_tag}/fleet_telemetry_errors`
- **Auth**: any of `thirdpartytokenAuthorizationCode`, `thirdpartytokenClientCredentials` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Vehicles.GetFleetTelemetryErrorsForAVehicleRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `vehicleTag` | `path` | `vehicle_tag` | `string` | yes |

### getVehicle

- **Signature**: `getVehicle(request: Vehicles.GetVehicleRequest, options?: RequestOptions): ApiPromise<Api1VehiclesResponseResponse200, ResponseError>`
- **Wire**: `GET /api/1/vehicles/{vehicle_tag}`
- **Auth**: any of `thirdpartytokenAuthorizationCode`, `thirdpartytokenClientCredentials` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Api1VehiclesResponseResponse200`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Vehicles.GetVehicleRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `vehicleTag` | `path` | `vehicle_tag` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Api1VehiclesResponseResponse200` | `api1VehiclesResponseResponse200Schema` | `src/models/api1-vehicles-response-response200.ts` |

### listVehicles

- **Signature**: `listVehicles(options?: RequestOptions): ApiPromise<Api1VehiclesResponse, ResponseError>`
- **Wire**: `GET /api/1/vehicles`
- **Auth**: any of `thirdpartytokenAuthorizationCode`, `thirdpartytokenClientCredentials` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Api1VehiclesResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

| Type | Schema value | Source |
| --- | --- | --- |
| `Api1VehiclesResponse` | `api1VehiclesResponseSchema` | `src/models/api1-vehicles-response.ts` |

### mobileEnabled

- **Signature**: `mobileEnabled(request: Vehicles.MobileEnabledRequest, options?: RequestOptions): ApiPromise<Api1VehiclesMobileEnabledResponse, ResponseError>`
- **Wire**: `GET /api/1/vehicles/{vehicle_tag}/mobile_enabled`
- **Auth**: any of `thirdpartytokenAuthorizationCode`, `thirdpartytokenClientCredentials` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Api1VehiclesMobileEnabledResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Vehicles.MobileEnabledRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `vehicleTag` | `path` | `vehicle_tag` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Api1VehiclesMobileEnabledResponse` | `api1VehiclesMobileEnabledResponseSchema` | `src/models/api1-vehicles-mobile-enabled-response.ts` |

### nearbyChargingSites

- **Signature**: `nearbyChargingSites(request: Vehicles.NearbyChargingSitesRequest, options?: RequestOptions): ApiPromise<Api1VehiclesNearbyChargingSitesResponse, ResponseError>`
- **Wire**: `GET /api/1/vehicles/{vehicle_tag}/nearby_charging_sites`
- **Auth**: any of `thirdpartytokenAuthorizationCode`, `thirdpartytokenClientCredentials` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Api1VehiclesNearbyChargingSitesResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Vehicles.NearbyChargingSitesRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `vehicleTag` | `path` | `vehicle_tag` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Api1VehiclesNearbyChargingSitesResponse` | `api1VehiclesNearbyChargingSitesResponseSchema` | `src/models/api1-vehicles-nearby-charging-sites-response.ts` |

### removeDriverAccessFromAVehicle

- **Signature**: `removeDriverAccessFromAVehicle(request: Vehicles.RemoveDriverAccessFromAVehicleRequest, options?: RequestOptions): ApiPromise<SimpleOkResponse, ResponseError>`
- **Wire**: `DELETE /api/1/vehicles/{vehicle_tag}/drivers`
- **Auth**: any of `thirdpartytokenAuthorizationCode`, `thirdpartytokenClientCredentials` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SimpleOkResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Vehicles.RemoveDriverAccessFromAVehicleRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `vehicleTag` | `path` | `vehicle_tag` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SimpleOkResponse` | `simpleOkResponseSchema` | `src/models/simple-ok-response.ts` |

### setEnterprisePayerRoles

- **Signature**: `setEnterprisePayerRoles(request: Vehicles.SetEnterprisePayerRolesRequest, options?: RequestOptions): ApiPromise<undefined, ResponseError>`
- **Wire**: `POST /api/1/dx/enterprise/v1/{vin}/payer`
- **Auth**: any of `thirdpartytokenAuthorizationCode`, `thirdpartytokenClientCredentials` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Vehicles.SetEnterprisePayerRolesRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `vin` | `path` | `string` | yes |
| `body` | `body` | `EnterprisePayerRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `EnterprisePayerRequest` | `enterprisePayerRequestSchema` | `src/models/enterprise-payer-request.ts` |

### vehicleLiveData

- **Signature**: `vehicleLiveData(request: Vehicles.VehicleLiveDataRequest, options?: RequestOptions): ApiPromise<SiteInfoResponse, ResponseError>`
- **Wire**: `GET /api/1/vehicles/{vehicle_tag}/vehicle_data`
- **Auth**: any of `thirdpartytokenAuthorizationCode`, `thirdpartytokenClientCredentials` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SiteInfoResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Vehicles.VehicleLiveDataRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `vehicleTag` | `path` | `vehicle_tag` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SiteInfoResponse` | `siteInfoResponseSchema` | `src/models/site-info-response.ts` |

### vehicleOptions

- **Signature**: `vehicleOptions(request: Vehicles.VehicleOptionsRequest, options?: RequestOptions): ApiPromise<Api1DxVehiclesOptionsResponse, ResponseError>`
- **Wire**: `GET /api/1/dx/vehicles/options`
- **Auth**: any of `thirdpartytokenAuthorizationCode`, `thirdpartytokenClientCredentials` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Api1DxVehiclesOptionsResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Vehicles.VehicleOptionsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `vin` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Api1DxVehiclesOptionsResponse` | `api1DxVehiclesOptionsResponseSchema` | `src/models/api1-dx-vehicles-options-response.ts` |

### vehicleSpecs

- **Signature**: `vehicleSpecs(request: Vehicles.VehicleSpecsRequest, options?: RequestOptions): ApiPromise<SiteInfoResponse, ResponseError>`
- **Wire**: `GET /api/1/vehicles/{vin}/specs`
- **Auth**: any of `thirdpartytokenAuthorizationCode`, `thirdpartytokenClientCredentials` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SiteInfoResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Vehicles.VehicleSpecsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `vin` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SiteInfoResponse` | `siteInfoResponseSchema` | `src/models/site-info-response.ts` |

### wakeUpVehicle

- **Signature**: `wakeUpVehicle(request: Vehicles.WakeUpVehicleRequest, options?: RequestOptions): ApiPromise<Api1VehiclesWakeUpResponse, ResponseError>`
- **Wire**: `POST /api/1/vehicles/{vehicle_tag}/wake_up`
- **Auth**: any of `thirdpartytokenAuthorizationCode`, `thirdpartytokenClientCredentials` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Api1VehiclesWakeUpResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Vehicles.WakeUpVehicleRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `vehicleTag` | `path` | `vehicle_tag` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Api1VehiclesWakeUpResponse` | `api1VehiclesWakeUpResponseSchema` | `src/models/api1-vehicles-wake-up-response.ts` |

### warrantyDetails

- **Signature**: `warrantyDetails(options?: RequestOptions): ApiPromise<Api1DxWarrantyDetailsResponse, ResponseError>`
- **Wire**: `GET /api/1/dx/warranty/details`
- **Auth**: any of `thirdpartytokenAuthorizationCode`, `thirdpartytokenClientCredentials` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Api1DxWarrantyDetailsResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

| Type | Schema value | Source |
| --- | --- | --- |
| `Api1DxWarrantyDetailsResponse` | `api1DxWarrantyDetailsResponseSchema` | `src/models/api1-dx-warranty-details-response.ts` |


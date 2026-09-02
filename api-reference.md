# Reference

> Source: [TeslaFleetManagementApiClient](src/client.ts)

## Charging

> Source: [Charging](src/resources/charging.ts)

<details>
<summary><code>getChargingHistory(options?: RequestOptions): ApiPromise&lt;ChargingHistoryResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the paginated charging history for the authenticated account.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.charging.getChargingHistory();
  // TODO: Handle 'response' of type ChargingHistoryResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ChargingHistoryResponse](src/models/charging-history-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getChargingInvoice(request: Charging.GetChargingInvoiceRequest, options?: RequestOptions): ApiPromise&lt;undefined, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a charging invoice PDF for a charging session.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  await client.charging.getChargingInvoice({ id });
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | Charging session invoice identifier |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getChargingSessions(options?: RequestOptions): ApiPromise&lt;ChargingSessionsResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns charging session information. Only available for business fleet owners.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.charging.getChargingSessions();
  // TODO: Handle 'response' of type ChargingSessionsResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ChargingSessionsResponse](src/models/charging-sessions-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Energy

> Source: [Energy](src/resources/energy.ts)

<details>
<summary><code>adjustSiteSBackupReserve(request: Energy.AdjustSiteSBackupReserveRequest, options?: RequestOptions): ApiPromise&lt;BackupResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.energy.adjustSiteSBackupReserve({ energySiteId, body });
  // TODO: Handle 'response' of type BackupResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>energySiteId</code> | <code>string</code> | - |
| <code>body</code> | <code>[BackupRequest](src/models/backup-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BackupResponse](src/models/backup-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>adjustSiteSOffGridVehicleChargingReserve(request: Energy.AdjustSiteSOffGridVehicleChargingReserveRequest, options?: RequestOptions): ApiPromise&lt;GenericUpdateResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.energy.adjustSiteSOffGridVehicleChargingReserve({ energySiteId, body });
  // TODO: Handle 'response' of type GenericUpdateResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>energySiteId</code> | <code>string</code> | - |
| <code>body</code> | <code>[OffGridVehicleChargingReserveRequest](src/models/off-grid-vehicle-charging-reserve-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GenericUpdateResponse](src/models/generic-update-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>allowDisallowChargingFromTheGridAndExportingEnergyToTheGrid(request: Energy.AllowDisallowChargingFromTheGridAndExportingEnergyToTheGridRequest, options?: RequestOptions): ApiPromise&lt;GenericUpdateResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.energy.allowDisallowChargingFromTheGridAndExportingEnergyToTheGrid({
    energySiteId,
  });
  // TODO: Handle 'response' of type GenericUpdateResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>energySiteId</code> | <code>string</code> | - |
| <code>body?</code> | <code>Record&lt;string, unknown&gt;</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GenericUpdateResponse](src/models/generic-update-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getBackupOrEnergyHistory(request: Energy.GetBackupOrEnergyHistoryRequest, options?: RequestOptions): ApiPromise&lt;CalendarHistoryResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.energy.getBackupOrEnergyHistory({ energySiteId, kind, startDate, endDate });
  // TODO: Handle 'response' of type CalendarHistoryResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>energySiteId</code> | <code>string</code> | - |
| <code>kind</code> | <code>[Kind](src/models/kind.ts)</code> | - |
| <code>startDate</code> | <code>Date</code> (date-time) | - |
| <code>endDate</code> | <code>Date</code> (date-time) | - |
| <code>period?</code> | <code>string</code> | - |
| <code>timeZone?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CalendarHistoryResponse](src/models/calendar-history-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getLiveSiteStatus(request: Energy.GetLiveSiteStatusRequest, options?: RequestOptions): ApiPromise&lt;LiveStatusResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.energy.getLiveSiteStatus({ energySiteId });
  // TODO: Handle 'response' of type LiveStatusResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>energySiteId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[LiveStatusResponse](src/models/live-status-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getSiteInformationAssetsSettingsFeatures(request: Energy.GetSiteInformationAssetsSettingsFeaturesRequest, options?: RequestOptions): ApiPromise&lt;SiteInfoResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.energy.getSiteInformationAssetsSettingsFeatures({ energySiteId });
  // TODO: Handle 'response' of type SiteInfoResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>energySiteId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SiteInfoResponse](src/models/site-info-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getUserProductsVehiclesEnergySites(options?: RequestOptions): ApiPromise&lt;ProductsResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.energy.getUserProductsVehiclesEnergySites();
  // TODO: Handle 'response' of type ProductsResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ProductsResponse](src/models/products-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getWallConnectorChargingHistory(request: Energy.GetWallConnectorChargingHistoryRequest, options?: RequestOptions): ApiPromise&lt;ChargeHistoryResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.energy.getWallConnectorChargingHistory({
    energySiteId,
    kind,
    startDate,
    endDate,
  });
  // TODO: Handle 'response' of type ChargeHistoryResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>energySiteId</code> | <code>string</code> | - |
| <code>kind</code> | <code>[KindGetWallConnectorChargingHistory](src/models/kind-get-wall-connector-charging-history.ts)</code> | - |
| <code>startDate</code> | <code>Date</code> (date-time) | - |
| <code>endDate</code> | <code>Date</code> (date-time) | - |
| <code>timeZone?</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[ChargeHistoryResponse](src/models/charge-history-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>setSiteModeAutonomousOrSelfConsumption(request: Energy.SetSiteModeAutonomousOrSelfConsumptionRequest, options?: RequestOptions): ApiPromise&lt;GenericUpdateResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.energy.setSiteModeAutonomousOrSelfConsumption({ energySiteId, body });
  // TODO: Handle 'response' of type GenericUpdateResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>energySiteId</code> | <code>string</code> | - |
| <code>body</code> | <code>[OperationRequest](src/models/operation-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GenericUpdateResponse](src/models/generic-update-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateStormWatchParticipation(request: Energy.UpdateStormWatchParticipationRequest, options?: RequestOptions): ApiPromise&lt;GenericUpdateResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.energy.updateStormWatchParticipation({ energySiteId, body });
  // TODO: Handle 'response' of type GenericUpdateResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>energySiteId</code> | <code>string</code> | - |
| <code>body</code> | <code>[StormModeRequest](src/models/storm-mode-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GenericUpdateResponse](src/models/generic-update-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateTimeOfUseTouSettings(request: Energy.UpdateTimeOfUseTouSettingsRequest, options?: RequestOptions): ApiPromise&lt;GenericUpdateResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.energy.updateTimeOfUseTouSettings({ energySiteId, body });
  // TODO: Handle 'response' of type GenericUpdateResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>energySiteId</code> | <code>string</code> | - |
| <code>body</code> | <code>[TimeOfUseSettingsRequest](src/models/time-of-use-settings-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[GenericUpdateResponse](src/models/generic-update-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Partner

> Source: [Partner](src/resources/partner.ts)

<details>
<summary><code>getPublicKeyForADomain(request: Partner.GetPublicKeyForADomainRequest, options?: RequestOptions): ApiPromise&lt;PublicKeyResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.partner.getPublicKeyForADomain({ domain });
  // TODO: Handle 'response' of type PublicKeyResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>domain</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[PublicKeyResponse](src/models/public-key-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getRecentFleetTelemetryErrors(options?: RequestOptions): ApiPromise&lt;FleetTelemetryErrorsResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.partner.getRecentFleetTelemetryErrors();
  // TODO: Handle 'response' of type FleetTelemetryErrorsResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[FleetTelemetryErrorsResponse](src/models/fleet-telemetry-errors-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getVinsWithFleetTelemetryErrors(options?: RequestOptions): ApiPromise&lt;BackupResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.partner.getVinsWithFleetTelemetryErrors();
  // TODO: Handle 'response' of type BackupResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BackupResponse](src/models/backup-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>registerAPartnerAccount(request: Partner.RegisterAPartnerAccountRequest, options?: RequestOptions): ApiPromise&lt;RegisterPartnerResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.partner.registerAPartnerAccount({ body });
  // TODO: Handle 'response' of type RegisterPartnerResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[RegisterPartnerRequest](src/models/register-partner-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RegisterPartnerResponse](src/models/register-partner-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## User

> Source: [User](src/resources/user.ts)

<details>
<summary><code>getActiveOrdersForAUser(options?: RequestOptions): ApiPromise&lt;OrdersResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.user.getActiveOrdersForAUser();
  // TODO: Handle 'response' of type OrdersResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[OrdersResponse](src/models/orders-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getCustomFeatureFlagsForAUser(options?: RequestOptions): ApiPromise&lt;BackupResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.user.getCustomFeatureFlagsForAUser();
  // TODO: Handle 'response' of type BackupResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[BackupResponse](src/models/backup-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getSummaryOfAUserSAccount(options?: RequestOptions): ApiPromise&lt;MeResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.user.getSummaryOfAUserSAccount();
  // TODO: Handle 'response' of type MeResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[MeResponse](src/models/me-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getUserSRegionAndFleetApiBaseUrl(options?: RequestOptions): ApiPromise&lt;RegionResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.user.getUserSRegionAndFleetApiBaseUrl();
  // TODO: Handle 'response' of type RegionResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[RegionResponse](src/models/region-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Vehicles

> Source: [Vehicles](src/resources/vehicles.ts)

<details>
<summary><code>configureFleetTelemetryUsingSignedJwsToken(request: Vehicles.ConfigureFleetTelemetryUsingSignedJwsTokenRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, ResponseError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.vehicles.configureFleetTelemetryUsingSignedJwsToken({ body });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[FleetTelemetryJwsRequest](src/models/fleet-telemetry-jws-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Record&lt;string, unknown&gt;</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createOrUpdateFleetTelemetryConfiguration(request: Vehicles.CreateOrUpdateFleetTelemetryConfigurationRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, ResponseError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.vehicles.createOrUpdateFleetTelemetryConfiguration({ body });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>Record&lt;string, unknown&gt;</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Record&lt;string, unknown&gt;</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteFleetTelemetryConfiguration(request: Vehicles.DeleteFleetTelemetryConfigurationRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, ResponseError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.vehicles.deleteFleetTelemetryConfiguration({ vehicleTag });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>vehicleTag</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Record&lt;string, unknown&gt;</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getAllowedDriversForAVehicle(request: Vehicles.GetAllowedDriversForAVehicleRequest, options?: RequestOptions): ApiPromise&lt;DriversResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.vehicles.getAllowedDriversForAVehicle({ vehicleTag });
  // TODO: Handle 'response' of type DriversResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>vehicleTag</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[DriversResponse](src/models/drivers-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getEligibleVehicleSubscriptions(request: Vehicles.GetEligibleVehicleSubscriptionsRequest, options?: RequestOptions): ApiPromise&lt;SiteInfoResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.vehicles.getEligibleVehicleSubscriptions({ vin });
  // TODO: Handle 'response' of type SiteInfoResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>vin</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SiteInfoResponse](src/models/site-info-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getEligibleVehicleUpgrades(request: Vehicles.GetEligibleVehicleUpgradesRequest, options?: RequestOptions): ApiPromise&lt;SiteInfoResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.vehicles.getEligibleVehicleUpgrades({ vin });
  // TODO: Handle 'response' of type SiteInfoResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>vin</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SiteInfoResponse](src/models/site-info-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getEnterpriseRolesForAVehicle(request: Vehicles.GetEnterpriseRolesForAVehicleRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, ResponseError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.vehicles.getEnterpriseRolesForAVehicle({ vin });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>vin</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Record&lt;string, unknown&gt;</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getFleetStatusForVehicles(request: Vehicles.GetFleetStatusForVehiclesRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, ResponseError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.vehicles.getFleetStatusForVehicles({ body });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[FleetStatusRequest](src/models/fleet-status-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Record&lt;string, unknown&gt;</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getFleetTelemetryConfiguration(request: Vehicles.GetFleetTelemetryConfigurationRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, ResponseError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.vehicles.getFleetTelemetryConfiguration({ vehicleTag });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>vehicleTag</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Record&lt;string, unknown&gt;</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getFleetTelemetryErrorsForAVehicle(request: Vehicles.GetFleetTelemetryErrorsForAVehicleRequest, options?: RequestOptions): ApiPromise&lt;Record&lt;string, unknown&gt;, ResponseError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.vehicles.getFleetTelemetryErrorsForAVehicle({ vehicleTag });
  // TODO: Handle 'response' of type Record<string, unknown>
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>vehicleTag</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>Record&lt;string, unknown&gt;</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getVehicle(request: Vehicles.GetVehicleRequest, options?: RequestOptions): ApiPromise&lt;Api1VehiclesResponseResponse200, ResponseError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.vehicles.getVehicle({ vehicleTag });
  // TODO: Handle 'response' of type Api1VehiclesResponseResponse200
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>vehicleTag</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Api1VehiclesResponseResponse200](src/models/api1-vehicles-response-response200.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listVehicles(options?: RequestOptions): ApiPromise&lt;Api1VehiclesResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.vehicles.listVehicles();
  // TODO: Handle 'response' of type Api1VehiclesResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Api1VehiclesResponse](src/models/api1-vehicles-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>mobileEnabled(request: Vehicles.MobileEnabledRequest, options?: RequestOptions): ApiPromise&lt;Api1VehiclesMobileEnabledResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.vehicles.mobileEnabled({ vehicleTag });
  // TODO: Handle 'response' of type Api1VehiclesMobileEnabledResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>vehicleTag</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Api1VehiclesMobileEnabledResponse](src/models/api1-vehicles-mobile-enabled-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>nearbyChargingSites(request: Vehicles.NearbyChargingSitesRequest, options?: RequestOptions): ApiPromise&lt;Api1VehiclesNearbyChargingSitesResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.vehicles.nearbyChargingSites({ vehicleTag });
  // TODO: Handle 'response' of type Api1VehiclesNearbyChargingSitesResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>vehicleTag</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Api1VehiclesNearbyChargingSitesResponse](src/models/api1-vehicles-nearby-charging-sites-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>removeDriverAccessFromAVehicle(request: Vehicles.RemoveDriverAccessFromAVehicleRequest, options?: RequestOptions): ApiPromise&lt;SimpleOkResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.vehicles.removeDriverAccessFromAVehicle({ vehicleTag });
  // TODO: Handle 'response' of type SimpleOkResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>vehicleTag</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SimpleOkResponse](src/models/simple-ok-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>setEnterprisePayerRoles(request: Vehicles.SetEnterprisePayerRolesRequest, options?: RequestOptions): ApiPromise&lt;undefined, ResponseError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  await client.vehicles.setEnterprisePayerRoles({ vin, body });
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>vin</code> | <code>string</code> | - |
| <code>body</code> | <code>[EnterprisePayerRequest](src/models/enterprise-payer-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>undefined</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>vehicleLiveData(request: Vehicles.VehicleLiveDataRequest, options?: RequestOptions): ApiPromise&lt;SiteInfoResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.vehicles.vehicleLiveData({ vehicleTag });
  // TODO: Handle 'response' of type SiteInfoResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>vehicleTag</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SiteInfoResponse](src/models/site-info-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>vehicleOptions(request: Vehicles.VehicleOptionsRequest, options?: RequestOptions): ApiPromise&lt;Api1DxVehiclesOptionsResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.vehicles.vehicleOptions({ vin });
  // TODO: Handle 'response' of type Api1DxVehiclesOptionsResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>vin</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Api1DxVehiclesOptionsResponse](src/models/api1-dx-vehicles-options-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>vehicleSpecs(request: Vehicles.VehicleSpecsRequest, options?: RequestOptions): ApiPromise&lt;SiteInfoResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.vehicles.vehicleSpecs({ vin });
  // TODO: Handle 'response' of type SiteInfoResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>vin</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[SiteInfoResponse](src/models/site-info-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>wakeUpVehicle(request: Vehicles.WakeUpVehicleRequest, options?: RequestOptions): ApiPromise&lt;Api1VehiclesWakeUpResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.vehicles.wakeUpVehicle({ vehicleTag });
  // TODO: Handle 'response' of type Api1VehiclesWakeUpResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>vehicleTag</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Api1VehiclesWakeUpResponse](src/models/api1-vehicles-wake-up-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>warrantyDetails(options?: RequestOptions): ApiPromise&lt;Api1DxWarrantyDetailsResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.vehicles.warrantyDetails();
  // TODO: Handle 'response' of type Api1DxWarrantyDetailsResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[Api1DxWarrantyDetailsResponse](src/models/api1-dx-warranty-details-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## VehicleCommands

> Source: [VehicleCommands](src/resources/vehicle-commands.ts)

<details>
<summary><code>actuatetrunk(request: VehicleCommands.ActuatetrunkRequest, options?: RequestOptions): ApiPromise&lt;CommandResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Controls the front or rear trunk

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.vehicleCommands.actuatetrunk({ vehicleTag, body });
  // TODO: Handle 'response' of type CommandResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>vehicleTag</code> | <code>string</code> | - |
| <code>body</code> | <code>[ActuateTrunkRequest](src/models/actuate-trunk-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CommandResponse](src/models/command-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>addchargeschedule(request: VehicleCommands.AddchargescheduleRequest, options?: RequestOptions): ApiPromise&lt;CommandResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.vehicleCommands.addchargeschedule({ vehicleTag, body });
  // TODO: Handle 'response' of type CommandResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>vehicleTag</code> | <code>string</code> | - |
| <code>body</code> | <code>[AddChargeScheduleRequest](src/models/add-charge-schedule-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CommandResponse](src/models/command-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>addpreconditionschedule(request: VehicleCommands.AddpreconditionscheduleRequest, options?: RequestOptions): ApiPromise&lt;CommandResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.vehicleCommands.addpreconditionschedule({ vehicleTag, body });
  // TODO: Handle 'response' of type CommandResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>vehicleTag</code> | <code>string</code> | - |
| <code>body</code> | <code>[AddPreconditionScheduleRequest](src/models/add-precondition-schedule-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CommandResponse](src/models/command-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>adjustmediavolume(request: VehicleCommands.AdjustmediavolumeRequest, options?: RequestOptions): ApiPromise&lt;CommandResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.vehicleCommands.adjustmediavolume({ vehicleTag, body });
  // TODO: Handle 'response' of type CommandResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>vehicleTag</code> | <code>string</code> | - |
| <code>body</code> | <code>[AdjustVolumeRequest](src/models/adjust-volume-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CommandResponse](src/models/command-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>cancelsoftwareupdate(request: VehicleCommands.CancelsoftwareupdateRequest, options?: RequestOptions): ApiPromise&lt;CommandResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.vehicleCommands.cancelsoftwareupdate({ vehicleTag });
  // TODO: Handle 'response' of type CommandResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>vehicleTag</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CommandResponse](src/models/command-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>chargemaxrange(request: VehicleCommands.ChargemaxrangeRequest, options?: RequestOptions): ApiPromise&lt;CommandResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.vehicleCommands.chargemaxrange({ vehicleTag });
  // TODO: Handle 'response' of type CommandResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>vehicleTag</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CommandResponse](src/models/command-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>chargestandard(request: VehicleCommands.ChargestandardRequest, options?: RequestOptions): ApiPromise&lt;CommandResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.vehicleCommands.chargestandard({ vehicleTag });
  // TODO: Handle 'response' of type CommandResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>vehicleTag</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CommandResponse](src/models/command-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>clearPiNtoDriveAdmin(request: VehicleCommands.ClearPiNtoDriveAdminRequest, options?: RequestOptions): ApiPromise&lt;CommandResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deactivates PIN to Drive and resets the associated PIN for supported firmware versions.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.vehicleCommands.clearPiNtoDriveAdmin({ vehicleTag });
  // TODO: Handle 'response' of type CommandResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>vehicleTag</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CommandResponse](src/models/command-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>closechargeportdoor(request: VehicleCommands.ClosechargeportdoorRequest, options?: RequestOptions): ApiPromise&lt;CommandResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.vehicleCommands.closechargeportdoor({ vehicleTag });
  // TODO: Handle 'response' of type CommandResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>vehicleTag</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CommandResponse](src/models/command-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>enableordisableGuestMode(request: VehicleCommands.EnableordisableGuestModeRequest, options?: RequestOptions): ApiPromise&lt;CommandResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.vehicleCommands.enableordisableGuestMode({ vehicleTag, body });
  // TODO: Handle 'response' of type CommandResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>vehicleTag</code> | <code>string</code> | - |
| <code>body</code> | <code>[GuestModeRequest](src/models/guest-mode-request.ts)</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CommandResponse](src/models/command-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>eraseuserdata(request: VehicleCommands.EraseuserdataRequest, options?: RequestOptions): ApiPromise&lt;CommandResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Erases user data from the vehicle UI. Requires Guest Mode.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.vehicleCommands.eraseuserdata({ vehicleTag });
  // TODO: Handle 'response' of type CommandResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>vehicleTag</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CommandResponse](src/models/command-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>flashlights(request: VehicleCommands.FlashlightsRequest, options?: RequestOptions): ApiPromise&lt;CommandResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Briefly flashes vehicle headlights.

</dd>
</dl>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.vehicleCommands.flashlights({ vehicleTag });
  // TODO: Handle 'response' of type CommandResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>vehicleTag</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CommandResponse](src/models/command-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>honkhorn(request: VehicleCommands.HonkhornRequest, options?: RequestOptions): ApiPromise&lt;CommandResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.vehicleCommands.honkhorn({ vehicleTag });
  // TODO: Handle 'response' of type CommandResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>vehicleTag</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CommandResponse](src/models/command-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>lockdoors(request: VehicleCommands.LockdoorsRequest, options?: RequestOptions): ApiPromise&lt;CommandResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.vehicleCommands.lockdoors({ vehicleTag });
  // TODO: Handle 'response' of type CommandResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>vehicleTag</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CommandResponse](src/models/command-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>nextfavoritemediatrack(request: VehicleCommands.NextfavoritemediatrackRequest, options?: RequestOptions): ApiPromise&lt;CommandResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.vehicleCommands.nextfavoritemediatrack({ vehicleTag });
  // TODO: Handle 'response' of type CommandResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>vehicleTag</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CommandResponse](src/models/command-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>openchargeportdoor(request: VehicleCommands.OpenchargeportdoorRequest, options?: RequestOptions): ApiPromise&lt;CommandResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.vehicleCommands.openchargeportdoor({ vehicleTag });
  // TODO: Handle 'response' of type CommandResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>vehicleTag</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CommandResponse](src/models/command-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>startcharging(request: VehicleCommands.StartchargingRequest, options?: RequestOptions): ApiPromise&lt;CommandResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.vehicleCommands.startcharging({ vehicleTag });
  // TODO: Handle 'response' of type CommandResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>vehicleTag</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CommandResponse](src/models/command-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>startclimatepreconditioning(request: VehicleCommands.StartclimatepreconditioningRequest, options?: RequestOptions): ApiPromise&lt;CommandResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.vehicleCommands.startclimatepreconditioning({ vehicleTag });
  // TODO: Handle 'response' of type CommandResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>vehicleTag</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CommandResponse](src/models/command-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>stopcharging(request: VehicleCommands.StopchargingRequest, options?: RequestOptions): ApiPromise&lt;CommandResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.vehicleCommands.stopcharging({ vehicleTag });
  // TODO: Handle 'response' of type CommandResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>vehicleTag</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CommandResponse](src/models/command-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>stopclimatepreconditioning(request: VehicleCommands.StopclimatepreconditioningRequest, options?: RequestOptions): ApiPromise&lt;CommandResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.vehicleCommands.stopclimatepreconditioning({ vehicleTag });
  // TODO: Handle 'response' of type CommandResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>vehicleTag</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CommandResponse](src/models/command-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>unlockdoors(request: VehicleCommands.UnlockdoorsRequest, options?: RequestOptions): ApiPromise&lt;CommandResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Usage

<dl>
<dd>

```ts
try {
  const response = await client.vehicleCommands.unlockdoors({ vehicleTag });
  // TODO: Handle 'response' of type CommandResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>vehicleTag</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**OnSuccess**: <code>[CommandResponse](src/models/command-response.ts)</code>

**OnError**: <code>[ResponseError](src/core/response-error.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>


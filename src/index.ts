export { TeslaFleetManagementApiClient } from "./client.js";
export { DEFAULT_CLIENT_OPTIONS, type ClientOptions } from "./client-options.js";

export {
  PkceMethod,
  type TokenProvider,
  type OAuth2AuthorizationCodeCredentials,
  type OAuth2RefreshableTokenStrategy,
  type OAuth2ClientCredentials,
  type OAuth2TokenStrategy,
  type OAuthToken,
  type OAuth2CredentialPlacement,
  type OAuthTokenRefreshable,
  type AuthorizationCodePrompt,
} from "./core/index.js";

export { ServerEnvironment, DEFAULT_SERVER_OPTIONS } from "./servers.js";
export type { ServerOptions, DefaultServerOptions } from "./servers.js";

export { Charging } from "./resources/charging.js";
export { Energy } from "./resources/energy.js";
export { Partner } from "./resources/partner.js";
export { User } from "./resources/user.js";
export { Vehicles } from "./resources/vehicles.js";
export { VehicleCommands } from "./resources/vehicle-commands.js";

export { actuateTrunkRequestSchema, type ActuateTrunkRequest } from "./models/actuate-trunk-request.js";
export {
  addChargeScheduleRequestSchema,
  type AddChargeScheduleRequest,
} from "./models/add-charge-schedule-request.js";
export {
  addPreconditionScheduleRequestSchema,
  type AddPreconditionScheduleRequest,
} from "./models/add-precondition-schedule-request.js";
export { adjustVolumeRequestSchema, type AdjustVolumeRequest } from "./models/adjust-volume-request.js";
export {
  api1DxVehiclesOptionsResponseSchema,
  type Api1DxVehiclesOptionsResponse,
} from "./models/api1-dx-vehicles-options-response.js";
export {
  api1DxWarrantyDetailsResponseSchema,
  type Api1DxWarrantyDetailsResponse,
} from "./models/api1-dx-warranty-details-response.js";
export {
  api1VehiclesMobileEnabledResponseSchema,
  type Api1VehiclesMobileEnabledResponse,
} from "./models/api1-vehicles-mobile-enabled-response.js";
export {
  api1VehiclesNearbyChargingSitesResponseSchema,
  type Api1VehiclesNearbyChargingSitesResponse,
} from "./models/api1-vehicles-nearby-charging-sites-response.js";
export { api1VehiclesResponseSchema, type Api1VehiclesResponse } from "./models/api1-vehicles-response.js";
export {
  api1VehiclesResponseGetVehicleSchema,
  type Api1VehiclesResponseGetVehicle,
} from "./models/api1-vehicles-response-get-vehicle.js";
export {
  api1VehiclesResponseResponse200Schema,
  type Api1VehiclesResponseResponse200,
} from "./models/api1-vehicles-response-response200.js";
export {
  api1VehiclesWakeUpResponseSchema,
  type Api1VehiclesWakeUpResponse,
} from "./models/api1-vehicles-wake-up-response.js";
export { backupRequestSchema, type BackupRequest } from "./models/backup-request.js";
export { backupResponseSchema, type BackupResponse } from "./models/backup-response.js";
export {
  calendarHistoryResponseSchema,
  type CalendarHistoryResponse,
} from "./models/calendar-history-response.js";
export { chargeDurationSchema, type ChargeDuration } from "./models/charge-duration.js";
export { chargeHistorySchema, type ChargeHistory } from "./models/charge-history.js";
export { chargeHistoryResponseSchema, type ChargeHistoryResponse } from "./models/charge-history-response.js";
export { chargeStartTimeSchema, type ChargeStartTime } from "./models/charge-start-time.js";
export { chargingDimensionSchema, type ChargingDimension } from "./models/charging-dimension.js";
export { chargingFeeSchema, type ChargingFee } from "./models/charging-fee.js";
export { chargingHistoryDataSchema, type ChargingHistoryData } from "./models/charging-history-data.js";
export { chargingHistoryItemSchema, type ChargingHistoryItem } from "./models/charging-history-item.js";
export {
  chargingHistoryResponseSchema,
  type ChargingHistoryResponse,
} from "./models/charging-history-response.js";
export { chargingInvoiceSchema, type ChargingInvoice } from "./models/charging-invoice.js";
export { chargingLocationSchema, type ChargingLocation } from "./models/charging-location.js";
export { chargingPeriodSchema, type ChargingPeriod } from "./models/charging-period.js";
export { chargingSessionSchema, type ChargingSession } from "./models/charging-session.js";
export { chargingSessionsDataSchema, type ChargingSessionsData } from "./models/charging-sessions-data.js";
export {
  chargingSessionsResponseSchema,
  type ChargingSessionsResponse,
} from "./models/charging-sessions-response.js";
export { commandResponseSchema, type CommandResponse } from "./models/command-response.js";
export { commandResultSchema, type CommandResult } from "./models/command-result.js";
export { DefaultRealMode, defaultRealModeSchema } from "./models/default-real-mode.js";
export { driverSchema, type Driver } from "./models/driver.js";
export { driversResponseSchema, type DriversResponse } from "./models/drivers-response.js";
export {
  enterprisePayerRequestSchema,
  type EnterprisePayerRequest,
} from "./models/enterprise-payer-request.js";
export { eventSchema, type Event } from "./models/event.js";
export { fleetStatusRequestSchema, type FleetStatusRequest } from "./models/fleet-status-request.js";
export { fleetTelemetryErrorSchema, type FleetTelemetryError } from "./models/fleet-telemetry-error.js";
export {
  fleetTelemetryErrorsResponseSchema,
  type FleetTelemetryErrorsResponse,
} from "./models/fleet-telemetry-errors-response.js";
export {
  fleetTelemetryJwsRequestSchema,
  type FleetTelemetryJwsRequest,
} from "./models/fleet-telemetry-jws-request.js";
export { genericUpdateResponseSchema, type GenericUpdateResponse } from "./models/generic-update-response.js";
export { guestModeRequestSchema, type GuestModeRequest } from "./models/guest-mode-request.js";
export { liveStatusResponseSchema, type LiveStatusResponse } from "./models/live-status-response.js";
export { locationSchema, type Location } from "./models/location.js";
export { location1Schema, type Location1 } from "./models/location1.js";
export { meResponseSchema, type MeResponse } from "./models/me-response.js";
export { mobileEnabledSchema, type MobileEnabled } from "./models/mobile-enabled.js";
export {
  offGridVehicleChargingReserveRequestSchema,
  type OffGridVehicleChargingReserveRequest,
} from "./models/off-grid-vehicle-charging-reserve-request.js";
export { operationRequestSchema, type OperationRequest } from "./models/operation-request.js";
export { ordersResponseSchema, type OrdersResponse } from "./models/orders-response.js";
export { paginationSchema, type Pagination } from "./models/pagination.js";
export { priceComponentSchema, type PriceComponent } from "./models/price-component.js";
export { productsResponseSchema, type ProductsResponse } from "./models/products-response.js";
export { publicKeyResponseSchema, type PublicKeyResponse } from "./models/public-key-response.js";
export { regionResponseSchema, type RegionResponse } from "./models/region-response.js";
export {
  registerPartnerRequestSchema,
  type RegisterPartnerRequest,
} from "./models/register-partner-request.js";
export {
  registerPartnerResponseSchema,
  type RegisterPartnerResponse,
} from "./models/register-partner-response.js";
export { responseSchema, type Response } from "./models/response.js";
export { response1Schema, type Response1 } from "./models/response1.js";
export { response2Schema, type Response2 } from "./models/response2.js";
export { response3Schema, type Response3 } from "./models/response3.js";
export {
  responseApi1DxVehiclesOptionsResponseSchema,
  type ResponseApi1DxVehiclesOptionsResponse,
} from "./models/response-api1-dx-vehicles-options-response.js";
export {
  responseApi1DxWarrantyDetailsResponseSchema,
  type ResponseApi1DxWarrantyDetailsResponse,
} from "./models/response-api1-dx-warranty-details-response.js";
export {
  responseCalendarHistoryResponseSchema,
  type ResponseCalendarHistoryResponse,
} from "./models/response-calendar-history-response.js";
export {
  responseChargeHistoryResponseSchema,
  type ResponseChargeHistoryResponse,
} from "./models/response-charge-history-response.js";
export {
  responseFleetTelemetryErrorsResponseSchema,
  type ResponseFleetTelemetryErrorsResponse,
} from "./models/response-fleet-telemetry-errors-response.js";
export {
  responseLiveStatusResponseSchema,
  type ResponseLiveStatusResponse,
} from "./models/response-live-status-response.js";
export { responseMeResponseSchema, type ResponseMeResponse } from "./models/response-me-response.js";
export {
  responseOrdersResponseSchema,
  type ResponseOrdersResponse,
} from "./models/response-orders-response.js";
export {
  responsePublicKeyResponseSchema,
  type ResponsePublicKeyResponse,
} from "./models/response-public-key-response.js";
export {
  responseRegionResponseSchema,
  type ResponseRegionResponse,
} from "./models/response-region-response.js";
export {
  responseRegisterPartnerResponseSchema,
  type ResponseRegisterPartnerResponse,
} from "./models/response-register-partner-response.js";
export { signalingSchema, type Signaling } from "./models/signaling.js";
export { simpleOkResponseSchema, type SimpleOkResponse } from "./models/simple-ok-response.js";
export { siteInfoResponseSchema, type SiteInfoResponse } from "./models/site-info-response.js";
export { stormModeRequestSchema, type StormModeRequest } from "./models/storm-mode-request.js";
export { tariffElementSchema, type TariffElement } from "./models/tariff-element.js";
export { tariffsSchema, type Tariffs } from "./models/tariffs.js";
export {
  timeOfUseSettingsRequestSchema,
  type TimeOfUseSettingsRequest,
} from "./models/time-of-use-settings-request.js";
export { totalCostSchema, type TotalCost } from "./models/total-cost.js";
export { touSettingsSchema, type TouSettings } from "./models/tou-settings.js";
export { vehicleBaseSchema, type VehicleBase } from "./models/vehicle-base.js";
export { vehicleOptionSchema, type VehicleOption } from "./models/vehicle-option.js";
export { warrantyItemSchema, type WarrantyItem } from "./models/warranty-item.js";
export { WhichTrunk, whichTrunkSchema } from "./models/which-trunk.js";
export { Kind, kindSchema } from "./models/kind.js";
export {
  KindGetWallConnectorChargingHistory,
  kindGetWallConnectorChargingHistorySchema,
} from "./models/kind-get-wall-connector-charging-history.js";

export {
  CoreError as TeslaFleetManagementApiError,
  ResponseError,
  ConnectionError,
  TimeoutError,
  AbortError,
  SdkError,
  SchemaError,
  AuthError,
} from "./core/index.js";
export type {
  ApiPromise,
  RequestOptions,
  ApiResult,
  ErrorKind,
  ErrorPayload,
  Declared,
  Schema,
  EnumSchema,
  Encoded,
} from "./core/index.js";

<!-- Generated file — do not edit; regenerated with the SDK. -->

# Partner — operations

Accessor: `client.partner` · Source: `src/resources/partner.ts` · 4 operations · Request types: namespace `Partner`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `tesla-fleet-management-api`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### getPublicKeyForADomain

- **Signature**: `getPublicKeyForADomain(request: Partner.GetPublicKeyForADomainRequest, options?: RequestOptions): ApiPromise<PublicKeyResponse, ResponseError>`
- **Wire**: `GET /api/1/partner_accounts/public_key`
- **Auth**: any of `thirdpartytokenAuthorizationCode`, `thirdpartytokenClientCredentials` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PublicKeyResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Partner.GetPublicKeyForADomainRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `domain` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PublicKeyResponse` | `publicKeyResponseSchema` | `src/models/public-key-response.ts` |

### getRecentFleetTelemetryErrors

- **Signature**: `getRecentFleetTelemetryErrors(options?: RequestOptions): ApiPromise<FleetTelemetryErrorsResponse, ResponseError>`
- **Wire**: `GET /api/1/partner_accounts/fleet_telemetry_errors`
- **Auth**: any of `thirdpartytokenAuthorizationCode`, `thirdpartytokenClientCredentials` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `FleetTelemetryErrorsResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

| Type | Schema value | Source |
| --- | --- | --- |
| `FleetTelemetryErrorsResponse` | `fleetTelemetryErrorsResponseSchema` | `src/models/fleet-telemetry-errors-response.ts` |

### getVinsWithFleetTelemetryErrors

- **Signature**: `getVinsWithFleetTelemetryErrors(options?: RequestOptions): ApiPromise<BackupResponse, ResponseError>`
- **Wire**: `GET /api/1/partner_accounts/fleet_telemetry_error_vins`
- **Auth**: any of `thirdpartytokenAuthorizationCode`, `thirdpartytokenClientCredentials` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BackupResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

| Type | Schema value | Source |
| --- | --- | --- |
| `BackupResponse` | `backupResponseSchema` | `src/models/backup-response.ts` |

### registerAPartnerAccount

- **Signature**: `registerAPartnerAccount(request: Partner.RegisterAPartnerAccountRequest, options?: RequestOptions): ApiPromise<RegisterPartnerResponse, ResponseError>`
- **Wire**: `POST /api/1/partner_accounts`
- **Auth**: any of `thirdpartytokenAuthorizationCode`, `thirdpartytokenClientCredentials` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `RegisterPartnerResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Partner.RegisterAPartnerAccountRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `RegisterPartnerRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `RegisterPartnerRequest` | `registerPartnerRequestSchema` | `src/models/register-partner-request.ts` |
| `RegisterPartnerResponse` | `registerPartnerResponseSchema` | `src/models/register-partner-response.ts` |


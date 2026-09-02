<!-- Generated file — do not edit; regenerated with the SDK. -->

# Charging — operations

Accessor: `client.charging` · Source: `src/resources/charging.ts` · 3 operations · Request types: namespace `Charging`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `tesla-fleet-management-api`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### getChargingHistory

- **Signature**: `getChargingHistory(options?: RequestOptions): ApiPromise<ChargingHistoryResponse, ResponseError>`
- **Wire**: `GET /api/1/dx/charging/history`
- **Auth**: any of `thirdpartytokenAuthorizationCode`, `thirdpartytokenClientCredentials` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ChargingHistoryResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

| Type | Schema value | Source |
| --- | --- | --- |
| `ChargingHistoryResponse` | `chargingHistoryResponseSchema` | `src/models/charging-history-response.ts` |

### getChargingInvoice

- **Signature**: `getChargingInvoice(request: Charging.GetChargingInvoiceRequest, options?: RequestOptions): ApiPromise<undefined, ResponseError>`
- **Wire**: `GET /api/1/dx/charging/invoice/{id}`
- **Auth**: any of `thirdpartytokenAuthorizationCode`, `thirdpartytokenClientCredentials` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Charging.GetChargingInvoiceRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

### getChargingSessions

- **Signature**: `getChargingSessions(options?: RequestOptions): ApiPromise<ChargingSessionsResponse, ResponseError>`
- **Wire**: `GET /api/1/dx/charging/sessions`
- **Auth**: any of `thirdpartytokenAuthorizationCode`, `thirdpartytokenClientCredentials` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ChargingSessionsResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

| Type | Schema value | Source |
| --- | --- | --- |
| `ChargingSessionsResponse` | `chargingSessionsResponseSchema` | `src/models/charging-sessions-response.ts` |


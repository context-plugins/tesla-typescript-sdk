<!-- Generated file — do not edit; regenerated with the SDK. -->

# User — operations

Accessor: `client.user` · Source: `src/resources/user.ts` · 4 operations · Request types: namespace `User`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `tesla-fleet-management-api`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### getActiveOrdersForAUser

- **Signature**: `getActiveOrdersForAUser(options?: RequestOptions): ApiPromise<OrdersResponse, ResponseError>`
- **Wire**: `GET /api/1/users/orders`
- **Auth**: any of `thirdpartytokenAuthorizationCode`, `thirdpartytokenClientCredentials` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `OrdersResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

| Type | Schema value | Source |
| --- | --- | --- |
| `OrdersResponse` | `ordersResponseSchema` | `src/models/orders-response.ts` |

### getCustomFeatureFlagsForAUser

- **Signature**: `getCustomFeatureFlagsForAUser(options?: RequestOptions): ApiPromise<BackupResponse, ResponseError>`
- **Wire**: `GET /api/1/users/feature_config`
- **Auth**: any of `thirdpartytokenAuthorizationCode`, `thirdpartytokenClientCredentials` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BackupResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

| Type | Schema value | Source |
| --- | --- | --- |
| `BackupResponse` | `backupResponseSchema` | `src/models/backup-response.ts` |

### getSummaryOfAUserSAccount

- **Signature**: `getSummaryOfAUserSAccount(options?: RequestOptions): ApiPromise<MeResponse, ResponseError>`
- **Wire**: `GET /api/1/users/me`
- **Auth**: any of `thirdpartytokenAuthorizationCode`, `thirdpartytokenClientCredentials` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `MeResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

| Type | Schema value | Source |
| --- | --- | --- |
| `MeResponse` | `meResponseSchema` | `src/models/me-response.ts` |

### getUserSRegionAndFleetApiBaseUrl

- **Signature**: `getUserSRegionAndFleetApiBaseUrl(options?: RequestOptions): ApiPromise<RegionResponse, ResponseError>`
- **Wire**: `GET /api/1/users/region`
- **Auth**: any of `thirdpartytokenAuthorizationCode`, `thirdpartytokenClientCredentials` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `RegionResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

| Type | Schema value | Source |
| --- | --- | --- |
| `RegionResponse` | `regionResponseSchema` | `src/models/region-response.ts` |


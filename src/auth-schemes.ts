import type { ClientOptions } from "./client-options.js";
import type { AuthScheme, RawClient } from "./core/index.js";
import {
  bearerAuth,
  oauth2AuthorizationCodeStrategy,
  oauth2ClientCredentialsStrategy,
  oauth2RefreshableScheme,
  oauth2Scheme,
} from "./core/index.js";
import type { Servers } from "./servers.js";

export type AuthSchemes = {
  readonly bearerAuth: AuthScheme;
  readonly thirdpartytokenAuthorizationCode: AuthScheme;
  readonly thirdpartytokenClientCredentials: AuthScheme;
};

export function buildAuthSchemes(
  options: ClientOptions,
  servers: Servers,
  rawClient: RawClient,
): AuthSchemes {
  return {
    bearerAuth: bearerAuth(options.bearerAuth),
    thirdpartytokenAuthorizationCode: oauth2RefreshableScheme(
      options.thirdpartytokenAuthorizationCode,
      options.thirdpartytokenAuthorizationCodeStrategy ??
        oauth2AuthorizationCodeStrategy({
          authorizationUrl: servers.default("/authorize"),
          tokenUrl: servers.default("/token"),
          rawClient,
          placement: "body",
        }),
    ),
    thirdpartytokenClientCredentials: oauth2Scheme(
      options.thirdpartytokenClientCredentials,
      options.thirdpartytokenClientCredentialsStrategy ??
        oauth2ClientCredentialsStrategy({
          tokenUrl: servers.default("/token"),
          rawClient,
          placement: "body",
        }),
    ),
  };
}

import type { ClientOptions } from "./client-options.js";
import type { AuthScheme } from "./core/api-request.js";
import { oauth2RefreshableScheme, oauth2Scheme } from "./core/auth/oauth2-schemes.js";
import {
  oauth2AuthorizationCodeStrategy,
  oauth2ClientCredentialsStrategy,
} from "./core/auth/oauth2-strategies.js";
import { bearerAuth } from "./core/auth/schemes.js";
import type { RawClient } from "./core/raw-client.js";
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

import type {
  FetchLike,
  OAuth2AuthorizationCodeCredentials,
  OAuth2ClientCredentials,
  OAuth2RefreshableTokenStrategy,
  OAuth2TokenStrategy,
  TokenProvider,
} from "./core/index.js";
import { ServerEnvironment, type ServerOptions } from "./servers.js";

export type ClientOptions = {
  readonly serverEnvironment: ServerEnvironment;
  readonly serverOptions: ServerOptions;
  readonly timeout: number;
  readonly fetch?: FetchLike | undefined;
  readonly bearerAuth?: TokenProvider | undefined;
  readonly thirdpartytokenAuthorizationCode?: OAuth2AuthorizationCodeCredentials | undefined;
  readonly thirdpartytokenAuthorizationCodeStrategy?:
    | OAuth2RefreshableTokenStrategy<OAuth2AuthorizationCodeCredentials>
    | undefined;
  readonly thirdpartytokenClientCredentials?: OAuth2ClientCredentials | undefined;
  readonly thirdpartytokenClientCredentialsStrategy?:
    | OAuth2TokenStrategy<OAuth2ClientCredentials>
    | undefined;
};

export const DEFAULT_CLIENT_OPTIONS: ClientOptions = {
  serverEnvironment: ServerEnvironment.Production,
  serverOptions: {},
  timeout: 60_000,
};

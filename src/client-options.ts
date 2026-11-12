import type {
  OAuth2AuthorizationCodeCredentials,
  OAuth2ClientCredentials,
  TokenProvider,
} from "./core/auth/credentials.js";
import type { OAuth2RefreshableTokenStrategy, OAuth2TokenStrategy } from "./core/auth/oauth2-strategies.js";
import type { CoreClientOptions } from "./core/client-options.js";

export type ClientOptions = SdkClientOptions & CoreClientOptions;

type SdkClientOptions = ServerOptions & {
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

type ServerOptions = {
  readonly serverOptions?: {
    /** Production */
    default?: {
      baseUrl?: string;
    };
    /** Production */
    authServer?: {
      baseUrl?: string;
    };
  };
};

import { buildAuthSchemes, type AuthSchemes } from "./auth-schemes.js";
import type { ClientOptions } from "./client-options.js";
import { buildCoreClientOptions } from "./core/client-options.js";
import { RawClient } from "./core/raw-client.js";
import * as host from "./core/runtime-environment.js";
import * as s from "./core/validation/index.js";
import { Charging } from "./resources/charging.js";
import { Energy } from "./resources/energy.js";
import { Partner } from "./resources/partner.js";
import { User } from "./resources/user.js";
import { VehicleCommands } from "./resources/vehicle-commands.js";
import { Vehicles } from "./resources/vehicles.js";
import { buildServers, type Servers } from "./servers.js";

/**
 * Unofficial OpenAPI specification for Tesla Fleet Management Charging endpoints.
 */
export class TeslaFleetManagementApiClient {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;
  #charging?: Charging;
  #energy?: Energy;
  #partner?: Partner;
  #user?: User;
  #vehicles?: Vehicles;
  #vehicleCommands?: VehicleCommands;

  constructor(options: ClientOptions = {}) {
    this.#rawClient = new RawClient({
      ...buildCoreClientOptions(options, "TESLA_FLEET_MANAGEMENT_API_CLIENT_LOG"),
      defaultHeaders: [
        { name: "User-Agent", value: "TeslaFleetManagementApiClient/1.0.0 TypeScript", schema: s.string() },
        { name: "X-APIMatic-Lang", value: "TypeScript", schema: s.string() },
        { name: "X-APIMatic-Package-Version", value: "1.0.0", schema: s.string() },
        { name: "X-APIMatic-Gen-Version", value: "4.0.0", schema: s.string() },
        { name: "X-APIMatic-OS", value: host.operatingSystem(), schema: s.optional(s.string()) },
        { name: "X-APIMatic-Runtime", value: host.runtimeDescription(), schema: s.optional(s.string()) },
      ],
      defaultQuery: [],
      defaultPathParams: [],
    });

    this.#servers = buildServers(options);

    this.#auth = buildAuthSchemes(options, this.#servers, this.#rawClient);
  }

  /**
   * Charging history, invoices, and session data
   */
  get charging(): Charging {
    return (this.#charging ??= new Charging(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Energy site and Powerwall endpoints
   */
  get energy(): Energy {
    return (this.#energy ??= new Energy(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Partner account and telemetry endpoints
   */
  get partner(): Partner {
    return (this.#partner ??= new Partner(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * User account and settings endpoints
   */
  get user(): User {
    return (this.#user ??= new User(this.#rawClient, this.#servers, this.#auth));
  }

  get vehicles(): Vehicles {
    return (this.#vehicles ??= new Vehicles(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Commands that control vehicle behavior
   */
  get vehicleCommands(): VehicleCommands {
    return (this.#vehicleCommands ??= new VehicleCommands(this.#rawClient, this.#servers, this.#auth));
  }
}

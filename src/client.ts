import { buildAuthSchemes, type AuthSchemes } from "./auth-schemes.js";
import { DEFAULT_CLIENT_OPTIONS, type ClientOptions } from "./client-options.js";
import { RawClient } from "./core/raw-client.js";
import { Charging } from "./resources/charging.js";
import { Energy } from "./resources/energy.js";
import { Partner } from "./resources/partner.js";
import { User } from "./resources/user.js";
import { VehicleCommands } from "./resources/vehicle-commands.js";
import { Vehicles } from "./resources/vehicles.js";
import { buildServers, type Servers } from "./servers.js";

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

  constructor(clientOptions: Partial<ClientOptions> = {}) {
    const options = { ...DEFAULT_CLIENT_OPTIONS, ...clientOptions };

    this.#rawClient = new RawClient({
      timeout: options.timeout,
      defaultHeaders: [],
      defaultQuery: [],
      defaultPathParams: [],
      fetch: options.fetch,
    });

    this.#servers = buildServers(options.serverEnvironment, options.serverOptions);

    this.#auth = buildAuthSchemes(options, this.#servers, this.#rawClient);
  }

  get charging(): Charging {
    return (this.#charging ??= new Charging(this.#rawClient, this.#servers, this.#auth));
  }

  get energy(): Energy {
    return (this.#energy ??= new Energy(this.#rawClient, this.#servers, this.#auth));
  }

  get partner(): Partner {
    return (this.#partner ??= new Partner(this.#rawClient, this.#servers, this.#auth));
  }

  get user(): User {
    return (this.#user ??= new User(this.#rawClient, this.#servers, this.#auth));
  }

  get vehicles(): Vehicles {
    return (this.#vehicles ??= new Vehicles(this.#rawClient, this.#servers, this.#auth));
  }

  get vehicleCommands(): VehicleCommands {
    return (this.#vehicleCommands ??= new VehicleCommands(this.#rawClient, this.#servers, this.#auth));
  }
}

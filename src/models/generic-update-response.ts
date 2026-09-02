import { s, type Schema } from "../core/index.js";
import { responseSchema, type Response } from "./response.js";

export type GenericUpdateResponse = {
  response: Response;
};

export const genericUpdateResponseSchema: Schema<GenericUpdateResponse> = s.object<GenericUpdateResponse>({
  response: responseSchema,
});

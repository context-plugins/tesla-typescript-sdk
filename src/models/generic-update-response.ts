import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { responseSchema, type Response } from "./response.js";

export type GenericUpdateResponse = {
  response: Response;
};

export const genericUpdateResponseSchema: Schema<GenericUpdateResponse> = s.object<GenericUpdateResponse>({
  response: responseSchema,
});

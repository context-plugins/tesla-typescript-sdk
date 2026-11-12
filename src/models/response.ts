import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Response = {
  code: number;
  message: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const responseSchema: Schema<Response> = s.object<Response>(
  {
    code: s.int(),
    message: s.string(),
  },
  { additionalProperties: s.json() },
);

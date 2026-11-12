import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type SimpleOkResponse = {
  response?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const simpleOkResponseSchema: Schema<SimpleOkResponse> = s.object<SimpleOkResponse>(
  {
    response: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);

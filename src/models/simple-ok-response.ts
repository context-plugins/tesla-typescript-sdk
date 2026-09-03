import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SimpleOkResponse = {
  response?: string;
};

export const simpleOkResponseSchema: Schema<SimpleOkResponse> = s.object<SimpleOkResponse>({
  response: s.optional(s.string()),
});

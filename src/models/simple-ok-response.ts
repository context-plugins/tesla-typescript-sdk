import { s, type Schema } from "../core/index.js";

export type SimpleOkResponse = {
  response?: string;
};

export const simpleOkResponseSchema: Schema<SimpleOkResponse> = s.object<SimpleOkResponse>({
  response: s.optional(s.string()),
});

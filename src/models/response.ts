import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Response = {
  code: number;
  message: string;
};

export const responseSchema: Schema<Response> = s.object<Response>({
  code: s.number(),
  message: s.string(),
});

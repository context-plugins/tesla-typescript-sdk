import { s, type Schema } from "../core/index.js";

export type Response = {
  code: number;
  message: string;
};

export const responseSchema: Schema<Response> = s.object<Response>({
  code: s.number(),
  message: s.string(),
});

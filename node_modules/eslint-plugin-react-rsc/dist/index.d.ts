import { ESLint, Linter } from "eslint";
//#region src/index.d.ts
type ConfigName = "disable-experimental" | "recommended" | "recommended-typescript" | "strict" | "strict-typescript";
declare const finalPlugin: ESLint.Plugin & {
  configs: Record<ConfigName, Linter.Config>;
};
//#endregion
export { finalPlugin as default };
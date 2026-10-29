import { ESLint, Linter } from "eslint";
//#region src/index.d.ts
type ConfigName = "recommended";
declare const finalPlugin: ESLint.Plugin & {
  configs: Record<ConfigName, Linter.Config>;
};
//#endregion
export { finalPlugin as default };
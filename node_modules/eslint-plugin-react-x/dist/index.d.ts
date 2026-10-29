import { ESLint, Linter } from "eslint";
//#region src/index.d.ts
type ConfigName = "disable-experimental" | "disable-type-checked" | "disable-conflict-eslint-plugin-react" | "disable-conflict-eslint-plugin-react-hooks" | "recommended" | "recommended-type-checked" | "recommended-typescript" | "strict" | "strict-type-checked" | "strict-typescript";
declare const finalPlugin: ESLint.Plugin & {
  configs: Record<ConfigName, Linter.Config>;
};
//#endregion
export { finalPlugin as default };
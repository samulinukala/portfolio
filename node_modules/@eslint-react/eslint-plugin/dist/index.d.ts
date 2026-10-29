import { ESLint, Linter } from "eslint";
//#region src/index.d.ts
type ConfigName = "all" | "disable-conflict-eslint-plugin-react" | "disable-conflict-eslint-plugin-react-hooks" | "disable-dom" | "disable-experimental" | "disable-jsx" | "disable-naming-convention" | "disable-rsc" | "disable-type-checked" | "disable-web-api" | "dom" | "jsx" | "naming-convention" | "off" | "recommended" | "recommended-type-checked" | "recommended-typescript" | "rsc" | "strict" | "strict-type-checked" | "strict-typescript" | "web-api" | "x";
declare const finalPlugin: ESLint.Plugin & {
  /**
   * For more information about each preset, please refer to the documentation.
   * @see https://eslint-react.xyz/docs/presets
   */
  configs: Record<ConfigName, Linter.Config>;
};
//#endregion
export { finalPlugin as default };
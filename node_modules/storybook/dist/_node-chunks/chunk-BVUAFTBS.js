import CJS_COMPAT_NODE_URL_46ljd37t7s8 from 'node:url';
import CJS_COMPAT_NODE_PATH_46ljd37t7s8 from 'node:path';
import CJS_COMPAT_NODE_MODULE_46ljd37t7s8 from "node:module";

var __filename = CJS_COMPAT_NODE_URL_46ljd37t7s8.fileURLToPath(import.meta.url);
var __dirname = CJS_COMPAT_NODE_PATH_46ljd37t7s8.dirname(__filename);
var require = CJS_COMPAT_NODE_MODULE_46ljd37t7s8.createRequire(import.meta.url);

// ------------------------------------------------------------
// end of CJS compatibility banner, injected by Storybook's esbuild configuration
// ------------------------------------------------------------

// src/shared/constants/extensions.ts
var jsModuleExtensions = [".mjs", ".js", ".cjs"], jsTsSourceExtensions = [".ts", ".tsx", ".js", ".jsx", ".mjs", ".cjs"], storybookConfigExtensions = [
  ".js",
  ".ts",
  ".jsx",
  ".tsx",
  ".mjs",
  ".mts",
  ".mtsx",
  ".cjs",
  ".cts",
  ".ctsx"
], userModuleExtensions = [
  ".astro",
  ".js",
  ".mjs",
  ".cjs",
  ".ts",
  ".tsx",
  ".jsx",
  ".json",
  ".vue",
  ".svelte"
];

export {
  jsModuleExtensions,
  jsTsSourceExtensions,
  storybookConfigExtensions,
  userModuleExtensions
};

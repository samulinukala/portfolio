import CJS_COMPAT_NODE_URL_46ljd37t7s8 from 'node:url';
import CJS_COMPAT_NODE_PATH_46ljd37t7s8 from 'node:path';
import CJS_COMPAT_NODE_MODULE_46ljd37t7s8 from "node:module";

var __filename = CJS_COMPAT_NODE_URL_46ljd37t7s8.fileURLToPath(import.meta.url);
var __dirname = CJS_COMPAT_NODE_PATH_46ljd37t7s8.dirname(__filename);
var require = CJS_COMPAT_NODE_MODULE_46ljd37t7s8.createRequire(import.meta.url);

// ------------------------------------------------------------
// end of CJS compatibility banner, injected by Storybook's esbuild configuration
// ------------------------------------------------------------

// src/common/versions.ts
var versions_default = {
  "@storybook/addon-a11y": "10.6.5",
  "@storybook/addon-docs": "10.6.5",
  "@storybook/addon-links": "10.6.5",
  "@storybook/addon-mcp": "10.6.5",
  "@storybook/addon-onboarding": "10.6.5",
  "storybook-addon-pseudo-states": "10.6.5",
  "@storybook/addon-themes": "10.6.5",
  "@storybook/addon-vitest": "10.6.5",
  "@storybook/builder-vite": "10.6.5",
  "@storybook/builder-webpack5": "10.6.5",
  storybook: "10.6.5",
  "@storybook/angular": "10.6.5",
  "@storybook/angular-vite": "10.6.5",
  "@storybook/ember": "10.6.5",
  "@storybook/html-vite": "10.6.5",
  "@storybook/nextjs": "10.6.5",
  "@storybook/nextjs-vite": "10.6.5",
  "@storybook/preact-vite": "10.6.5",
  "@storybook/react-native-web-vite": "10.6.5",
  "@storybook/react-vite": "10.6.5",
  "@storybook/react-webpack5": "10.6.5",
  "@storybook/server-webpack5": "10.6.5",
  "@storybook/svelte-vite": "10.6.5",
  "@storybook/sveltekit": "10.6.5",
  "@storybook/tanstack-react": "10.6.5",
  "@storybook/vue3-vite": "10.6.5",
  "@storybook/web-components-vite": "10.6.5",
  sb: "10.6.5",
  "@storybook/cli": "10.6.5",
  "@storybook/codemod": "10.6.5",
  "@storybook/core-webpack": "10.6.5",
  "create-storybook": "10.6.5",
  "eslint-plugin-storybook": "10.6.5",
  "@storybook/mcp": "10.6.5",
  "@storybook/react-dom-shim": "10.6.5",
  "vite-plugin-storybook-nextjs": "10.6.5",
  "@storybook/preset-create-react-app": "10.6.5",
  "@storybook/preset-react-webpack": "10.6.5",
  "@storybook/preset-server-webpack": "10.6.5",
  "@storybook/html": "10.6.5",
  "@storybook/preact": "10.6.5",
  "@storybook/react": "10.6.5",
  "@storybook/server": "10.6.5",
  "@storybook/svelte": "10.6.5",
  "@storybook/vue3": "10.6.5",
  "@storybook/web-components": "10.6.5"
};

// src/common/node-version.ts
import { satisfies } from "semver";
var MIN_SUPPORTED_NODE_VERSIONS = [
  { major: 20, minor: 19, patch: 0 },
  { major: 22, minor: 12, patch: 0 }
];
function formatMinVersion(v) {
  return v.minor === 0 && v.patch === 0 ? `${v.major}+` : v.patch === 0 ? `${v.major}.${v.minor}+` : `${v.major}.${v.minor}.${v.patch}+`;
}
var MIN_SUPPORTED_NODE_DESCRIPTION = MIN_SUPPORTED_NODE_VERSIONS.map(formatMinVersion).join(" or ");
function isNodeVersionSupported(major, minor, patch) {
  let sortedMinimums = [...MIN_SUPPORTED_NODE_VERSIONS].sort((a, b) => a.major - b.major), supportedRange = sortedMinimums.map((min, index) => {
    let next = sortedMinimums[index + 1], lowerBound = `>=${min.major}.${min.minor}.${min.patch}`;
    return next ? `${lowerBound} <${next.major}.0.0` : lowerBound;
  }).join(" || ");
  return satisfies(`${major}.${minor}.${patch}`, supportedRange);
}

export {
  versions_default,
  MIN_SUPPORTED_NODE_VERSIONS,
  formatMinVersion,
  MIN_SUPPORTED_NODE_DESCRIPTION,
  isNodeVersionSupported
};

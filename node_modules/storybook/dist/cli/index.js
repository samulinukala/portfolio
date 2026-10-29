import CJS_COMPAT_NODE_URL_46ljd37t7s8 from 'node:url';
import CJS_COMPAT_NODE_PATH_46ljd37t7s8 from 'node:path';
import CJS_COMPAT_NODE_MODULE_46ljd37t7s8 from "node:module";

var __filename = CJS_COMPAT_NODE_URL_46ljd37t7s8.fileURLToPath(import.meta.url);
var __dirname = CJS_COMPAT_NODE_PATH_46ljd37t7s8.dirname(__filename);
var require = CJS_COMPAT_NODE_MODULE_46ljd37t7s8.createRequire(import.meta.url);

// ------------------------------------------------------------
// end of CJS compatibility banner, injected by Storybook's esbuild configuration
// ------------------------------------------------------------
import {
  ANALOG_VITE_PLUGIN_ANGULAR_VERSION,
  ANGULAR_JSON_PATH,
  AddonVitestService,
  AngularJSON,
  ProjectType,
  SUPPORTED_ESLINT_EXTENSIONS,
  addToDevDependenciesIfNotPresent,
  adjustTemplate,
  canInstallLatestVitest,
  cliStoriesTargetPath,
  coerceSemver,
  configureEslintPlugin,
  configureFlatConfig,
  copyTemplate,
  copyTemplateFiles,
  editJsonText,
  extractEslintInfo,
  findEslintFile,
  getBabelDependencies,
  getRendererDir,
  getVersionSafe,
  hasStorybookDependencies,
  isStorybookTarget,
  normalizeExtends,
  readFileAsJson,
  suggestESLintPlugin,
  toDevkitVersion,
  writeFileAsJson
} from "../_node-chunks/chunk-FB5WOPDY.js";
import "../_node-chunks/chunk-XUG57B3N.js";
import {
  detectIncompatiblePackageVersions,
  detectLanguage,
  getStorybookData,
  getWorkingDir
} from "../_node-chunks/chunk-O2NM2VKZ.js";
import {
  detectPnp
} from "../_node-chunks/chunk-H5TSEG2S.js";
import "../_node-chunks/chunk-W24BMV57.js";
import "../_node-chunks/chunk-IIFHKFLI.js";
import {
  Settings,
  _clearGlobalSettings,
  globalSettings
} from "../_node-chunks/chunk-NQINKDQ7.js";
import "../_node-chunks/chunk-IOXZHIQM.js";
import "../_node-chunks/chunk-KZM6COOZ.js";
import "../_node-chunks/chunk-UOIWQDF4.js";
import "../_node-chunks/chunk-VNKXU76C.js";
import "../_node-chunks/chunk-BVUAFTBS.js";
import "../_node-chunks/chunk-YTZSZYIW.js";
import "../_node-chunks/chunk-4TDJMHK7.js";
import "../_node-chunks/chunk-XWRA4VWZ.js";
import "../_node-chunks/chunk-3RD3RIT6.js";
import "../_node-chunks/chunk-F3OLTPHI.js";
export {
  ANALOG_VITE_PLUGIN_ANGULAR_VERSION,
  ANGULAR_JSON_PATH,
  AddonVitestService,
  AngularJSON,
  ProjectType,
  SUPPORTED_ESLINT_EXTENSIONS,
  Settings,
  _clearGlobalSettings,
  addToDevDependenciesIfNotPresent,
  adjustTemplate,
  canInstallLatestVitest,
  cliStoriesTargetPath,
  coerceSemver,
  configureEslintPlugin,
  configureFlatConfig,
  copyTemplate,
  copyTemplateFiles,
  detectIncompatiblePackageVersions,
  detectLanguage,
  detectPnp,
  editJsonText,
  extractEslintInfo,
  findEslintFile,
  getBabelDependencies,
  getRendererDir,
  getStorybookData,
  getVersionSafe,
  getWorkingDir,
  globalSettings,
  hasStorybookDependencies,
  isStorybookTarget,
  normalizeExtends,
  readFileAsJson,
  suggestESLintPlugin,
  toDevkitVersion,
  writeFileAsJson
};

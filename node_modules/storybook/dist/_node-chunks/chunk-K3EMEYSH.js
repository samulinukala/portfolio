import CJS_COMPAT_NODE_URL_46ljd37t7s8 from 'node:url';
import CJS_COMPAT_NODE_PATH_46ljd37t7s8 from 'node:path';
import CJS_COMPAT_NODE_MODULE_46ljd37t7s8 from "node:module";

var __filename = CJS_COMPAT_NODE_URL_46ljd37t7s8.fileURLToPath(import.meta.url);
var __dirname = CJS_COMPAT_NODE_PATH_46ljd37t7s8.dirname(__filename);
var require = CJS_COMPAT_NODE_MODULE_46ljd37t7s8.createRequire(import.meta.url);

// ------------------------------------------------------------
// end of CJS compatibility banner, injected by Storybook's esbuild configuration
// ------------------------------------------------------------

// src/cli/skills/content/setup-utils/docs-markdown-url.ts
function getDocsMarkdownUrl(path, projectInfo) {
  let { majorVersion, renderer = "react", language = "ts" } = projectInfo ?? {}, versionSegment = majorVersion ? `/${majorVersion}` : "", params = new URLSearchParams();
  renderer && params.set("renderer", renderer), params.set("language", language);
  let query = params.toString();
  return `https://storybook.js.org/docs${versionSegment}/${path}.md${query ? `?${query}` : ""}`;
}

export {
  getDocsMarkdownUrl
};

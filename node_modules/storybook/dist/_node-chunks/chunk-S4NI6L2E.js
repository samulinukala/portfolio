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
  words
} from "./chunk-UC5MWG2K.js";

// ../../node_modules/es-toolkit/dist/string/kebabCase.mjs
function kebabCase(str) {
  return words(str).map((word) => word.toLowerCase()).join("-");
}

// src/shared/open-service/toolset-names.ts
function parseToolsetMethodId(methodId) {
  let separator = methodId.indexOf(".");
  if (separator <= 0 || separator !== methodId.lastIndexOf(".") || separator === methodId.length - 1)
    throw new Error(
      `Invalid toolset method id "${methodId}". Expected exactly one separator: toolsetId.methodName.`
    );
  return {
    toolsetId: methodId.slice(0, separator),
    methodName: methodId.slice(separator + 1)
  };
}
function toCliMethodName(methodName) {
  return kebabCase(methodName);
}
function toCliPath(method) {
  let { toolsetId, methodName } = parseToolsetMethodId(method);
  return `${toolsetId} ${toCliMethodName(methodName)}`;
}
function toMcpToolName(method) {
  let { toolsetId, methodName } = parseToolsetMethodId(method);
  return `${kebabCase(toolsetId)}-${toCliMethodName(methodName)}`;
}
function getToolName(context) {
  return (method) => {
    switch (context.transport) {
      case "mcp":
        return toMcpToolName(method);
      case "cli":
        return `npx storybook tools ${toCliPath(method)}`;
      case "sdk":
        return method;
      default:
        return context.transport;
    }
  };
}

export {
  parseToolsetMethodId,
  toCliMethodName,
  toMcpToolName,
  getToolName
};

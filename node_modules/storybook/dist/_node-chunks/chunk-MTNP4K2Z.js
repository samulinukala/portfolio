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
  nanoid
} from "./chunk-WUHH33UL.js";

// src/telemetry/session-id.ts
import { cache } from "storybook/internal/common";
var SESSION_TIMEOUT = 1e3 * 60 * 60 * 2, sessionId, resetSessionIdForTest = (val = void 0) => {
  sessionId = val;
}, getSessionId = async () => {
  let now = Date.now();
  if (!sessionId) {
    let session = await cache.get("session");
    session && session.lastUsed >= now - SESSION_TIMEOUT ? sessionId = session.id : sessionId = nanoid();
  }
  return await cache.set("session", { id: sessionId, lastUsed: now }), sessionId;
};

export {
  SESSION_TIMEOUT,
  resetSessionIdForTest,
  getSessionId
};

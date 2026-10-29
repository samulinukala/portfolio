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
  oxcParse
} from "../_node-chunks/chunk-YX6SW5FI.js";
import "../_node-chunks/chunk-YTZSZYIW.js";
import "../_node-chunks/chunk-4TDJMHK7.js";
import "../_node-chunks/chunk-XWRA4VWZ.js";
import "../_node-chunks/chunk-F3OLTPHI.js";

// src/oxc-parser/worker.ts
import { parentPort } from "node:worker_threads";
if (!parentPort)
  throw new Error("oxc-parser worker must be run as a worker thread");
var port = parentPort;
port.on("message", async (msg) => {
  try {
    let edges = await oxcParse(msg.filePath, msg.source), response = { id: msg.id, ok: !0, edges };
    port.postMessage(response);
  } catch (error) {
    let err = error, response = {
      id: msg.id,
      ok: !1,
      message: err?.message ?? String(error),
      name: err?.name ?? "Error"
    };
    port.postMessage(response);
  }
});

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
  createTools
} from "../../../_node-chunks/chunk-5V4BMQDR.js";
import "../../../_node-chunks/chunk-ABWYAN64.js";
import {
  ToolsRuntimeError
} from "../../../_node-chunks/chunk-Y3BHF34T.js";
import "../../../_node-chunks/chunk-FIHDFDQT.js";
import "../../../_node-chunks/chunk-S4NI6L2E.js";
import {
  serializeError
} from "../../../_node-chunks/chunk-UC5MWG2K.js";
import "../../../_node-chunks/chunk-YTZSZYIW.js";
import "../../../_node-chunks/chunk-4TDJMHK7.js";
import "../../../_node-chunks/chunk-XWRA4VWZ.js";
import "../../../_node-chunks/chunk-F3OLTPHI.js";

// src/cli/tools/sdk/child-host.ts
import { pathToFileURL } from "node:url";
async function runChildHost({
  send = (message) => {
    process.send?.(message);
  },
  subscribe = (handler) => {
    process.on("message", handler);
  },
  cwd = () => process.cwd()
} = {}) {
  process.on("disconnect", () => {
    process.exit(0);
  }), process.env.STORYBOOK_TOOLS_CHILD_HOST = "true";
  let tools, controllers = /* @__PURE__ */ new Map(), handle = async (raw) => {
    let message = raw;
    switch (message.type) {
      case "init": {
        tools = await createTools({
          ...message.options,
          cwd: cwd(),
          mode: message.options.mode ?? "attached",
          autoSpawn: !1
        }), send({
          type: "hello",
          version: 1,
          storybook: tools.storybook,
          clientInfo: tools.clientInfo
        });
        return;
      }
      case "describe": {
        await reply(message.id, tools, () => tools.describe(message.options));
        return;
      }
      case "call": {
        let controller = new AbortController();
        controllers.set(message.id, controller);
        try {
          await reply(
            message.id,
            tools,
            () => tools.call(message.ref, message.input, { signal: controller.signal })
          );
        } finally {
          controllers.delete(message.id);
        }
        return;
      }
      case "cancel": {
        controllers.get(message.id)?.abort();
        return;
      }
      case "close": {
        await tools?.close(), process.exit(0);
        return;
      }
      default:
        throw message;
    }
  };
  async function reply(id, host, run) {
    if (!host) {
      send({
        type: "error",
        id,
        error: serializeError(
          new ToolsRuntimeError({
            reason: "command-unhandled",
            message: "The child host has not been initialized."
          })
        )
      });
      return;
    }
    try {
      send({ type: "result", id, value: await run() });
    } catch (error) {
      send({ type: "error", id, error: serializeError(error) });
    }
  }
  subscribe((message) => {
    handle(message).catch((error) => {
      let fallbackId = typeof message == "object" && message !== null && "id" in message && typeof message.id == "string" ? message.id : "init";
      send({ type: "error", id: fallbackId, error: serializeError(error) });
    });
  });
}
function isExecutedAsEntry() {
  let entry = process.argv[1];
  if (!entry)
    return !1;
  try {
    return import.meta.url === pathToFileURL(entry).href;
  } catch {
    return !1;
  }
}
isExecutedAsEntry() && runChildHost();
export {
  runChildHost
};

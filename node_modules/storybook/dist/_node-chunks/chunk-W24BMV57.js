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
  StorybookError
} from "./chunk-YTZSZYIW.js";

// src/manager-errors.ts
var StatusTypeIdMismatchError = class extends StorybookError {
  constructor(data) {
    super({
      name: "StatusTypeIdMismatchError",
      category: "MANAGER_API" /* MANAGER_API */,
      code: 1,
      message: `Status has typeId "${data.status.typeId}" but was added to store with typeId "${data.typeId}". Full status: ${JSON.stringify(
        data.status,
        null,
        2
      )}`
    });
    this.data = data;
  }
}, UniversalStoreFollowerTimeoutError = class extends StorybookError {
  constructor(followerId) {
    super({
      name: "UniversalStoreFollowerTimeoutError",
      category: "MANAGER_UNIVERSAL-STORE" /* MANAGER_UNIVERSAL_STORE */,
      code: 1,
      message: `Timed out waiting for leader state for UniversalStore follower with id: '${followerId}'. Ensure a leader with the same id exists and is reachable before creating a follower.`
    });
  }
};

export {
  StatusTypeIdMismatchError,
  UniversalStoreFollowerTimeoutError
};

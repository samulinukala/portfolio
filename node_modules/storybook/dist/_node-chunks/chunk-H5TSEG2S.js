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
  StatusTypeIdMismatchError as StatusTypeIdMismatchError2
} from "./chunk-W24BMV57.js";
import {
  any
} from "./chunk-IOXZHIQM.js";
import {
  StatusTypeIdMismatchError,
  StorybookError
} from "./chunk-YTZSZYIW.js";
import {
  require_dist
} from "./chunk-4TDJMHK7.js";
import {
  __toESM
} from "./chunk-F3OLTPHI.js";

// src/cli/detect.ts
async function detectPnp() {
  return !!any([".pnp.js", ".pnp.cjs"]);
}

// src/preview-errors.ts
var import_ts_dedent = __toESM(require_dist(), 1);
var StatusTypeIdMismatchError3 = class extends StorybookError {
  constructor(data) {
    super({
      name: "StatusTypeIdMismatchError",
      category: "PREVIEW_API" /* PREVIEW_API */,
      code: 16,
      message: `Status has typeId "${data.status.typeId}" but was added to store with typeId "${data.typeId}". Full status: ${JSON.stringify(
        data.status,
        null,
        2
      )}`
    });
    this.data = data;
  }
};

// src/shared/status-store/index.ts
var CHANGE_DETECTION_STATUS_TYPE_ID = "storybook/change-detection";
var UNIVERSAL_STATUS_STORE_OPTIONS = {
  id: "storybook/status",
  leader: !0,
  initialState: {}
}, StatusStoreEventType = {
  SELECT: "select"
};
function createStatusStore({
  universalStatusStore,
  useUniversalStore,
  environment
}) {
  let fullStatusStore = {
    getAll() {
      return universalStatusStore.getState();
    },
    set(statuses) {
      universalStatusStore.setState((state) => {
        let newState = { ...state };
        for (let status of statuses) {
          let { storyId, typeId } = status;
          newState[storyId] = { ...newState[storyId] ?? {}, [typeId]: status };
        }
        return newState;
      });
    },
    onAllStatusChange(listener) {
      return universalStatusStore.onStateChange((state, prevState) => {
        listener(state, prevState);
      });
    },
    onSelect(listener) {
      return universalStatusStore.subscribe(StatusStoreEventType.SELECT, (event) => {
        listener(event.payload);
      });
    },
    selectStatuses: (statuses) => {
      universalStatusStore.send({ type: StatusStoreEventType.SELECT, payload: statuses });
    },
    unset(storyIds) {
      if (!storyIds) {
        universalStatusStore.setState({});
        return;
      }
      universalStatusStore.setState((state) => {
        let newState = { ...state };
        for (let storyId of storyIds)
          delete newState[storyId];
        return newState;
      });
    },
    typeId: void 0
  }, getStatusStoreByTypeId = (typeId) => ({
    getAll: fullStatusStore.getAll,
    set(statuses) {
      universalStatusStore.setState((state) => {
        let newState = { ...state };
        for (let status of statuses) {
          let { storyId } = status;
          if (status.typeId !== typeId)
            switch (environment) {
              case "server":
                throw new StatusTypeIdMismatchError({
                  status,
                  typeId
                });
              case "manager":
                throw new StatusTypeIdMismatchError2({
                  status,
                  typeId
                });
              default:
                throw new StatusTypeIdMismatchError3({
                  status,
                  typeId
                });
            }
          newState[storyId] = { ...newState[storyId] ?? {}, [typeId]: status };
        }
        return newState;
      });
    },
    onAllStatusChange: fullStatusStore.onAllStatusChange,
    onSelect(listener) {
      return universalStatusStore.subscribe(StatusStoreEventType.SELECT, (event) => {
        event.payload.some((status) => status.typeId === typeId) && listener(event.payload);
      });
    },
    unset(storyIds) {
      universalStatusStore.setState((state) => {
        let newState = { ...state };
        for (let storyId in newState)
          if (newState[storyId]?.[typeId] && (!storyIds || storyIds?.includes(storyId))) {
            let { [typeId]: omittedStatus, ...storyStatusesWithoutTypeId } = newState[storyId];
            newState[storyId] = storyStatusesWithoutTypeId;
          }
        return newState;
      });
    },
    typeId
  });
  return useUniversalStore ? {
    getStatusStoreByTypeId,
    fullStatusStore,
    universalStatusStore,
    useStatusStore: (selector) => useUniversalStore(universalStatusStore, selector)[0]
  } : { getStatusStoreByTypeId, fullStatusStore, universalStatusStore };
}

export {
  detectPnp,
  CHANGE_DETECTION_STATUS_TYPE_ID,
  UNIVERSAL_STATUS_STORE_OPTIONS,
  createStatusStore
};

import { contextBridge, ipcRenderer, IpcRendererEvent } from "electron";
export type Channels = "ipc-example";

const api = {
  get: async (data?: any) => ipcRenderer.invoke("get", data),
  post: async (data: any) => ipcRenderer.invoke("post", data),
  webhook: (callback: any) => ipcRenderer.on("webhook", callback),
};
const versions = {
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron,
  ping: () => ipcRenderer.invoke("ping"),
  env: () => process.env,
};
const electronHandler = {
  ipcRenderer: {
    sendMessage(channel: Channels, ...args: unknown[]) {
      ipcRenderer.send(channel, ...args);
    },
    on(channel: Channels, func: (...args: unknown[]) => void) {
      const subscription = (_event: IpcRendererEvent, ...args: unknown[]) =>
        func(...args);
      ipcRenderer.on(channel, subscription);

      return () => {
        ipcRenderer.removeListener(channel, subscription);
      };
    },
    once(channel: Channels, func: (...args: unknown[]) => void) {
      ipcRenderer.once(channel, (_event, ...args) => func(...args));
    },
  },
};

contextBridge.exposeInMainWorld("api", api);
contextBridge.exposeInMainWorld("versions", versions);
contextBridge.exposeInMainWorld("electron", electronHandler);

export type ElectronHandler = typeof electronHandler;
export type Api = typeof api;
export type Versions = typeof versions;

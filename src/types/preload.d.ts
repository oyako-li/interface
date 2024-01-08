import { ElectronHandler, Api, Versions } from "../main/preload";

declare global {
  // eslint-disable-next-line no-unused-vars
  interface Window {
    electron: ElectronHandler;
    api: Api;
    version: Versions;
  }
}

export {};

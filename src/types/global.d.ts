export interface BookApi {
  openFile: () => void;
}

declare global {
  interface Window {
    api: BookApi;
  }
}

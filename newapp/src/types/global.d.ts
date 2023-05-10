export type BookApi = {
  openBook: () => void;
};

declare global {
  interface Window {
    api: BookApi;
  }
}

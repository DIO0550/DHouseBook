declare global {
    interface Window {
      api: BookAPI;
    }
}
  
export interface BookAPI {
    saveBook:(filePath: string, jsonStr: String) => void
}
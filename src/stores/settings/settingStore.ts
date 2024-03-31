import Store from 'electron-store';

type StoreType = {
  themeColor: string;
};

const store = new Store<StoreType>();

export const SettingStore = {
  set: (key: keyof StoreType, value: string) => {
    store.set(key, value);
  },
  get: (key: keyof StoreType) => store.get(key),
  delete: (key: keyof StoreType) => store.delete(key),
} as const;

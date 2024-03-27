import Store from 'electron-store';

const store = new Store();

export const SettingStoreKey = {
  ThemeColor: 'ThemeColor',
} as const;

export type SettingKey = (typeof SettingStoreKey)[keyof typeof SettingStoreKey];

export const SettingStore = {
  set: (key: SettingKey, value: string) => {
    store.set(key, value);
  },
  get: (key: SettingKey) => store.get(key),
  delete: (key: SettingKey) => store.delete(key),
} as const;

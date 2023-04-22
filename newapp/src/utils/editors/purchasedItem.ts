import { v4 as uuidv4 } from 'uuid';

export type PurchasedItem = {
  // id
  id: string;
  // 名前
  name: string;
  // 値段
  price: number;
  // 種類
  type: string;
  // 購入日
  date: string;
};

export const PurchasedItem = {
  init: () => {
    const id = uuidv4();

    return { id, name: '', print: 0, type: '', date: '' };
  },
};

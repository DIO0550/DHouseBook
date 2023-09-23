import { v4 as uuidv4 } from 'uuid';

export type HouseBookItem = {
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

export const HouseBookItem = {
  init: () => {
    const id = uuidv4();
    const item: HouseBookItem = { id, name: '', price: 0, type: '', date: '' };

    return item;
  },
};

export type HouseBookItems = HouseBookItem[];

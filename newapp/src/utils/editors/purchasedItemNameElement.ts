import { CustomText } from './CustomText';

export type PurchasedItemNameElement = {
  type: typeof PurchasedItemNameElement.type;
  children: CustomText[];
};

export const PurchasedItemNameElement = {
  type: 'name',
};

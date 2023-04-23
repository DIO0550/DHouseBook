import { CustomText } from './customText';

export type PurchasedItemNameElement = {
  type: typeof PurchasedItemNameElement.type;
  children: CustomText[];
};

export const PurchasedItemNameElement = {
  type: 'name',

  fromName: (name: string) => {
    const customText = {
      text: name,
    };

    const nameElement: PurchasedItemNameElement = {
      type: PurchasedItemNameElement.type,
      children: [customText],
    };

    return nameElement;
  },
};

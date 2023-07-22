import { CustomText } from './customText';

/**
 * 購入日
 */
export type PurchasedItemDateElement = {
  type: typeof PurchasedItemDateElement.type;
  children: CustomText[];
};

export const PurchasedItemDateElement = {
  type: 'date',

  fromDate: (date: string) => {
    const customText = {
      text: date,
    };

    const dateElement: PurchasedItemDateElement = {
      type: PurchasedItemDateElement.type,
      children: [customText],
    };

    return dateElement;
  },
};

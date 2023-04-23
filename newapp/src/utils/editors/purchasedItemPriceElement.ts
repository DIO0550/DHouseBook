import { CustomText } from './customText';

/**
 * 値段
 */
export type PurchasedItemPriceElement = {
  type: typeof PurchasedItemPriceElement.type;
  children: CustomText[];
};

/**
 * 値段
 */
export const PurchasedItemPriceElement = {
  type: 'price',

  fromPrice: (price: string) => {
    const customText = {
      text: price,
    };

    const priceElement: PurchasedItemPriceElement = {
      type: PurchasedItemPriceElement.type,
      children: [customText],
    };

    return priceElement;
  },
};

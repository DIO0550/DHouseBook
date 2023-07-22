import { CustomText } from './customText';

/**
 * 種類
 */
export type PurchasedItemTypeElement = {
  type: typeof PurchasedItemTypeElement.type;
  children: CustomText[];
};

export const PurchasedItemTypeElement = {
  type: 'type',
  fromType: (type: string) => {
    const customText = {
      text: type,
    };

    const typeElement: PurchasedItemTypeElement = {
      type: PurchasedItemTypeElement.type,
      children: [customText],
    };

    return typeElement;
  },
};

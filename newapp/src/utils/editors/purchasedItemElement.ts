import { PurchasedItem } from './purchasedItem';
import { PurchasedItemDateElement } from './purchasedItemDateElement';
import { PurchasedItemNameElement } from './purchasedItemNameElement';
import { PurchasedItemPriceElement } from './purchasedItemPriceElement';
import { PurchasedItemTypeElement } from './purchasedItemTypeElement';

export type PurchasedItemChildrenType =
  | PurchasedItemNameElement
  | PurchasedItemPriceElement
  | PurchasedItemTypeElement
  | PurchasedItemDateElement;

export type PurchasedItemElement = {
  type: typeof PurchasedItemElement.type;
  id: string;
  children: PurchasedItemChildrenType[];
};

export const PurchasedItemElement = {
  type: 'puchesedItem',
  fromPurchasedItem: (prchasedItem: PurchasedItem) => {
    const nameElement = PurchasedItemNameElement.fromName(prchasedItem.name);
    const priceElement = PurchasedItemPriceElement.fromPrice(
      prchasedItem.price,
    );
    const typeElement = PurchasedItemTypeElement.fromType(prchasedItem.type);
    const dateElement = PurchasedItemDateElement.fromDate(prchasedItem.date);

    const purchasedItemElement: PurchasedItemElement = {
      type: PurchasedItemElement.type,
      id: prchasedItem.id,
      children: [nameElement, priceElement, typeElement, dateElement],
    };

    return purchasedItemElement;
  },
};

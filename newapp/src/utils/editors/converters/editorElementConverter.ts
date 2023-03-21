import { HouseBook } from 'types/housebook';
import {
  CustomText,
  NameElement,
  PriceElement,
  PurchasedItemElement,
  PurchaseItemEditorConst,
} from '../purchaseItemEditorConst';

/**
 * 名前要素生成
 * @param nameValue 設定する値
 * @returns 名前要素
 */
const createNameElement = (nameValue: string) =>
  ({
    type: PurchaseItemEditorConst.CustomElement.Name,
    children: [
      {
        text: nameValue,
      } as CustomText,
    ],
  } as NameElement);

const createPriceElement = (priceValue: number) =>
  ({
    type: PurchaseItemEditorConst.CustomElement.Price,
    children: [
      {
        text: String(priceValue),
      } as CustomText,
    ],
  } as PriceElement);

const createTypeElement = (typeValue: string) => ({
  type: PurchaseItemEditorConst.CustomElement.Type,
  children: [
    {
      text: typeValue,
    } as CustomText,
  ],
});

const createDateElement = (dateValue: string) => ({
  type: PurchaseItemEditorConst.CustomElement.Date,
  children: [
    {
      text: dateValue,
    } as CustomText,
  ],
});

/**
 * jsonデータをEditor用の要素の配列にして返す
 * @param data jsonのデータ
 * @return Editor用の要素の配列
 */
export const convertDataToElement = (
  data: HouseBook,
): PurchasedItemElement[] => {
  const purchasedItemElements = data.items.map((e) => {
    const nameElement = createNameElement(e.name);
    const priceElement = createPriceElement(e.price);
    const typeElement = createTypeElement(e.type);
    const dateElement = createDateElement(e.date);

    const purchasedItemElement = {
      type: PurchaseItemEditorConst.CustomElement.PucheseItem,
      id: e.id,
      children: [nameElement, priceElement, typeElement, dateElement],
    } as PurchasedItemElement;

    return purchasedItemElement;
  });

  return purchasedItemElements;
};

const PurchaseItemEditorConst = {
  CustomElement: {
    PucheseItem: 'pucheseItem',
    Name: 'name',
    Price: 'price',
    Type: 'type',
    Date: 'date',
  },
};

export { PurchaseItemEditorConst };

export type PurchasedItemElement = {
  type: typeof PurchaseItemEditorConst.CustomElement.PucheseItem;
  id: string;
  children: PurchasedItemType[];
};

export type PurchasedItemType =
  | NameElement
  | PriceElement
  | TypeElement
  | DateElement;

/**
 * 名前
 */
export type NameElement = {
  type: typeof PurchaseItemEditorConst.CustomElement.Name;
  children: CustomText[];
};

/**
 * 値段
 */
export type PriceElement = {
  type: typeof PurchaseItemEditorConst.CustomElement.Price;
  children: CustomText[];
};

/**
 * 種類
 */
export type TypeElement = {
  type: typeof PurchaseItemEditorConst.CustomElement.Type;
  children: CustomText[];
};

/**
 * 購入日
 */
export type DateElement = {
  type: typeof PurchaseItemEditorConst.CustomElement.Date;
  children: CustomText[];
};

/**
 * テキスト
 */
export type CustomText = {
  text: string;
};

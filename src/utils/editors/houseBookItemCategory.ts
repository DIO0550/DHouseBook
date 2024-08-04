const HouseBookItemCategoryList = {
  Name: 'Name',
  Price: 'Price',
  Type: 'Type',
  Date: 'Date',
} as const;

export type HouseBookItemCategory =
  (typeof HouseBookItemCategoryList)[keyof typeof HouseBookItemCategoryList];

export const HouseBookItemCategory = {
  ...HouseBookItemCategoryList,

  displayName: (category: HouseBookItemCategory) => {
    const HouseBookItemCategoryDisplayName: {
      [key in HouseBookItemCategory]: string;
    } = {
      [HouseBookItemCategoryList.Name]: '名前',
      [HouseBookItemCategoryList.Price]: '値段',
      [HouseBookItemCategoryList.Type]: '種類',
      [HouseBookItemCategoryList.Date]: '購入日',
    } as const;

    if (Object.hasOwn(HouseBookItemCategoryDisplayName, category)) {
      return HouseBookItemCategoryDisplayName[category];
    }

    return '';
  },
} as const;

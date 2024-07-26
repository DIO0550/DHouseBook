import {
  HouseBookFilter,
  HouseBookFilterCategory,
} from '@/stores/atoms/houseBookFilterState';
import { memo } from 'react';
import { HouseBookEditorFilterItemName } from '../HouseBookEditorFilterItemName/HouseBookEditorFilterItemName';
import { HouseBookEditorFilterItemPurchaseDate } from '../HouseBookEditorFilterItemPurchaseDate/HouseBookEditorFilterItemPurchaseDate';
import { HouseBookEditorFilterItemPrice } from '../HouseBookEditorFilterItemPrice/HouseBookEditorFilterItemPrice';
import { HouseBookEditorFilterItemType } from '../HouseBookEditorFilterItemType/HouseBookEditorFilterItemType';

type Props = {
  filter: HouseBookFilter;
};
const HouseBookEditorFilterItem = memo<Props>(({ filter }) => {
  switch (filter.category) {
    case HouseBookFilterCategory.Name:
      return <HouseBookEditorFilterItemName filter={filter} />;

    case HouseBookFilterCategory.Price:
      return <HouseBookEditorFilterItemPrice filter={filter} />;

    case HouseBookFilterCategory.Type:
      return <HouseBookEditorFilterItemType filter={filter} />;

    case HouseBookFilterCategory.PurchaseDate:
      return <HouseBookEditorFilterItemPurchaseDate filter={filter} />;

    default:
      return null;
  }
});

export { HouseBookEditorFilterItem };

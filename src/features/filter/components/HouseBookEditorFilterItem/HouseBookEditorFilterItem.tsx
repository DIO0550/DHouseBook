import { HouseBookFilter } from '@/stores/atoms/houseBookFilterState';
import { memo } from 'react';
import { HouseBookItemCategory } from '@/utils/editors/houseBookItemCategory';
import { HouseBookEditorFilterItemName } from '../HouseBookEditorFilterItemName/HouseBookEditorFilterItemName';
import { HouseBookEditorFilterItemDate } from '../HouseBookEditorFilterItemPurchaseDate/HouseBookEditorFilterItemPurchaseDate';
import { HouseBookEditorFilterItemPrice } from '../HouseBookEditorFilterItemPrice/HouseBookEditorFilterItemPrice';
import { HouseBookEditorFilterItemType } from '../HouseBookEditorFilterItemType/HouseBookEditorFilterItemType';

type Props = {
  filter: HouseBookFilter;
};
const HouseBookEditorFilterItem = memo<Props>(({ filter }) => {
  switch (filter.category) {
    case HouseBookItemCategory.Name:
      return (
        <HouseBookEditorFilterItemName filterId={filter.id} filter={filter} />
      );

    case HouseBookItemCategory.Price:
      return (
        <HouseBookEditorFilterItemPrice filterId={filter.id} filter={filter} />
      );

    case HouseBookItemCategory.Type:
      return (
        <HouseBookEditorFilterItemType filterId={filter.id} filter={filter} />
      );

    case HouseBookItemCategory.Date:
      return (
        <HouseBookEditorFilterItemDate filterId={filter.id} filter={filter} />
      );

    default:
      return null;
  }
});

export { HouseBookEditorFilterItem };

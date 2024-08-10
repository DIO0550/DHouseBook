import { HouseBookFilter } from '@/stores/atoms/houseBookFilterState';
import { memo } from 'react';
import { HouseBookItemCategory } from '@/utils/editors/houseBookItemCategory';
import { HouseBookEditorFilterItemName } from '../HouseBookEditorFilterItemName/HouseBookEditorFilterItemName';
import { HouseBookEditorFilterItemDate } from '../HouseBookEditorFilterItemPurchaseDate/HouseBookEditorFilterItemPurchaseDate';
import { HouseBookEditorFilterItemPrice } from '../HouseBookEditorFilterItemPrice/HouseBookEditorFilterItemPrice';
import { HouseBookEditorFilterItemType } from '../HouseBookEditorFilterItemType/HouseBookEditorFilterItemType';

type Props = {
  filter: HouseBookFilter;
  removeFilter: (id: string) => void;
};
const HouseBookEditorFilterItem = memo<Props>(({ filter, removeFilter }) => {
  switch (filter.category) {
    case HouseBookItemCategory.Name:
      return (
        <HouseBookEditorFilterItemName
          filterId={filter.id}
          filter={filter}
          removeFilter={removeFilter}
        />
      );

    case HouseBookItemCategory.Price:
      return (
        <HouseBookEditorFilterItemPrice
          filterId={filter.id}
          filter={filter}
          removeFilter={removeFilter}
        />
      );

    case HouseBookItemCategory.Type:
      return (
        <HouseBookEditorFilterItemType
          filterId={filter.id}
          filter={filter}
          removeFilter={removeFilter}
        />
      );

    case HouseBookItemCategory.Date:
      return (
        <HouseBookEditorFilterItemDate
          filterId={filter.id}
          filter={filter}
          removeFilter={removeFilter}
        />
      );

    default:
      return null;
  }
});

export { HouseBookEditorFilterItem };

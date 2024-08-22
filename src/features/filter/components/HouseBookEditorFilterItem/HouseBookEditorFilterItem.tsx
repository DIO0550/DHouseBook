import { HouseBookFilter } from '@/stores/atoms/houseBookFilterState';
import { memo } from 'react';
import { HouseBookItemCategory } from '@/utils/editors/houseBookItemCategory';
import {
  RemoveFilter,
  UpdateFilter,
} from '@/features/filter/hooks/useHouseBookEditorFilter';
import { HouseBookEditorFilterItemName } from '../HouseBookEditorFilterItemName/HouseBookEditorFilterItemName';
import { HouseBookEditorFilterItemDate } from '../HouseBookEditorFilterItemDate/HouseBookEditorFilterItemDate';
import { HouseBookEditorFilterItemPrice } from '../HouseBookEditorFilterItemPrice/HouseBookEditorFilterItemPrice';
import { HouseBookEditorFilterItemType } from '../HouseBookEditorFilterItemType/HouseBookEditorFilterItemType';

type Props = {
  filter: HouseBookFilter;
  updateFilter: UpdateFilter;
  removeFilter: RemoveFilter;
};
const HouseBookEditorFilterItem = memo<Props>(
  ({ filter, updateFilter, removeFilter }) => {
    switch (filter.category) {
      case HouseBookItemCategory.Name:
        return (
          <HouseBookEditorFilterItemName
            filterId={filter.id}
            filter={filter}
            updateFilter={updateFilter}
            removeFilter={removeFilter}
          />
        );

      case HouseBookItemCategory.Price:
        return (
          <HouseBookEditorFilterItemPrice
            filterId={filter.id}
            filter={filter}
            updateFilter={updateFilter}
            removeFilter={removeFilter}
          />
        );

      case HouseBookItemCategory.Type:
        return (
          <HouseBookEditorFilterItemType
            filterId={filter.id}
            filter={filter}
            updateFilter={updateFilter}
            removeFilter={removeFilter}
          />
        );

      case HouseBookItemCategory.Date:
        return (
          <HouseBookEditorFilterItemDate
            filterId={filter.id}
            filter={filter}
            updateFilter={updateFilter}
            removeFilter={removeFilter}
          />
        );

      default:
        return null;
    }
  },
);

export { HouseBookEditorFilterItem };

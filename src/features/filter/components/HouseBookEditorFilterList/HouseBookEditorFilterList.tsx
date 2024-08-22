import { HouseBookFilter } from '@/stores/atoms/houseBookFilterState';
import { memo } from 'react';
import { HouseBookEditorFilterItem } from '../HouseBookEditorFilterItem/HouseBookEditorFilterItem';
import {
  RemoveFilter,
  UpdateFilter,
} from '../../hooks/useHouseBookEditorFilter';

type Props = {
  filters: HouseBookFilter[] | undefined;
  updateFilter: UpdateFilter;
  removeFilter: RemoveFilter;
};

const HouseBookEditorFilterList = memo<Props>(
  ({ filters = [] as HouseBookFilter[], updateFilter, removeFilter }) => (
    <div>
      {filters.map((v) => (
        <HouseBookEditorFilterItem
          key={v.id}
          filter={v}
          updateFilter={updateFilter}
          removeFilter={removeFilter}
        />
      ))}
    </div>
  ),
);

export { HouseBookEditorFilterList };

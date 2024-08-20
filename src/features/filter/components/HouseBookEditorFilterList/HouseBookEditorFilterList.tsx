import { HouseBookFilter } from '@/stores/atoms/houseBookFilterState';
import { memo } from 'react';
import { HouseBookEditorFilterItem } from '../HouseBookEditorFilterItem/HouseBookEditorFilterItem';
import { UpdateTarget } from '../../hooks/useHouseBookEditorFilter';

type Props = {
  filters: HouseBookFilter[] | undefined;
  updateFilter: (id: string, target: UpdateTarget) => void;
  removeFilter: (id: string) => void;
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

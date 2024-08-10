import { HouseBookFilter } from '@/stores/atoms/houseBookFilterState';
import { memo } from 'react';
import { HouseBookEditorFilterItem } from '../HouseBookEditorFilterItem/HouseBookEditorFilterItem';

type Props = {
  filters: HouseBookFilter[] | undefined;
  removeFilter: (id: string) => void;
};

const HouseBookEditorFilterList = memo<Props>(
  ({ filters = [] as HouseBookFilter[], removeFilter }) => (
    <div>
      {filters.map((v) => (
        <HouseBookEditorFilterItem filter={v} removeFilter={removeFilter} />
      ))}
    </div>
  ),
);

export { HouseBookEditorFilterList };

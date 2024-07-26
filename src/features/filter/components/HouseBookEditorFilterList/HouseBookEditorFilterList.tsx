import { HouseBookFilter } from '@/stores/atoms/houseBookFilterState';
import { memo } from 'react';
import { HouseBookEditorFilterItem } from '../HouseBookEditorFilterItem/HouseBookEditorFilterItem';

type Props = {
  filters: HouseBookFilter[];
};

const HouseBookEditorFilterList = memo<Props>(({ filters }) => (
  <div>
    {filters.map((v) => (
      <HouseBookEditorFilterItem filter={v} />
    ))}
  </div>
));

export { HouseBookEditorFilterList };

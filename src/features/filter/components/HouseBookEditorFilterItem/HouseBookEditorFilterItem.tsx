import { HouseBookFilter } from '@/stores/atoms/houseBookFilterState';
import { memo } from 'react';

type Props = {
  filter: HouseBookFilter;
};

const HouseBookEditorFilterItem = memo<Props>(() => (
  <div>
    <input type="text" />
  </div>
));

export { HouseBookEditorFilterItem };

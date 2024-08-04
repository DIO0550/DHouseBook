import { HouseBookFilter } from '@/stores/atoms/houseBookFilterState';
import { memo } from 'react';
import { HouseBookEditorFilterItem } from '../HouseBookEditorFilterItem/HouseBookEditorFilterItem';

type Props = {
  filters: HouseBookFilter[] | undefined;
};

const HouseBookEditorFilterList = memo<Props>(
  ({ filters = [] as HouseBookFilter[] }) => {
    console.log(filters);

    return (
      <div>
        {filters.map((v) => (
          <HouseBookEditorFilterItem filter={v} />
        ))}
      </div>
    );
  },
);

export { HouseBookEditorFilterList };

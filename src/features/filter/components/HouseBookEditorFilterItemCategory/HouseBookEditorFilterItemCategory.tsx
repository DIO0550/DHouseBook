import { HouseBookItemCategory } from '@/utils/editors/houseBookItemCategory';
import { memo } from 'react';
import { UpdateFilter } from '../../hooks/useHouseBookEditorFilter';

type Props = {
  filterId: string;
  category: HouseBookItemCategory;
  updateFilter: UpdateFilter;
};

const HouseBookEditorFiterItemCategory = memo<Props>(
  ({ filterId, category, updateFilter }) => (
    <select
      value={category}
      onChange={(e) => {
        updateFilter(filterId, {
          type: 'Category',
          value: e.currentTarget.value as HouseBookItemCategory,
        });
      }}
    >
      {Object.values(HouseBookItemCategory).map((v) => {
        if (typeof v !== 'string') {
          return null;
        }

        return (
          <option value={v}>{HouseBookItemCategory.displayName(v)}</option>
        );
      })}
    </select>
  ),
);

export { HouseBookEditorFiterItemCategory };

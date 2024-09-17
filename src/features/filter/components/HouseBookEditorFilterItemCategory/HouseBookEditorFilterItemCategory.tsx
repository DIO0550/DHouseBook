import { HouseBookItemCategory } from '@/utils/editors/houseBookItemCategory';
import { memo } from 'react';
import { Option } from '@/components/Elements/PrimarySelect/useSelect';
import { PrimarySelect } from '@/components/Elements/PrimarySelect/PrimarySelect';
import { UpdateFilter } from '@/features/filter/hooks/useHouseBookEditorFilter';

type Props = {
  filterId: string;
  category: HouseBookItemCategory;
  updateFilter: UpdateFilter;
};

const HouseBookEditorFilterItemCategory = memo<Props>(
  ({ filterId, category, updateFilter }) => {
    const options = Object.values(HouseBookItemCategory).reduce((acc, cur) => {
      if (typeof cur !== 'string') {
        return acc;
      }

      const option: Option = {
        label: HouseBookItemCategory.displayName(cur),
        value: cur,
      };

      return [...acc, option];
    }, [] as Option[]);

    return (
      <PrimarySelect
        value={category}
        options={options}
        onChange={(v: string) => {
          updateFilter(filterId, {
            type: 'Category',
            value: v as HouseBookItemCategory,
          });
        }}
      />
    );
  },
);

export { HouseBookEditorFilterItemCategory };

import { HouseBookFilterCondition } from '@/utils/filters/houseBookFilterCondition';
import { UpdateFilter } from '@/features/filter/hooks/useHouseBookEditorFilter';
import { memo } from 'react';
import { HouseBookItemCategory } from '@/utils/editors/houseBookItemCategory';
import { PrimarySelect } from '@/components/Elements/PrimarySelect/PrimarySelect';
import { Option } from '@/components/Elements/PrimarySelect/useSelect';

type Props = {
  filterId: string;
  category: HouseBookItemCategory;
  condition: HouseBookFilterCondition;
  updateFilter: UpdateFilter;
};

const HouseBookEditorFilterItemCondition = memo<Props>(
  ({ filterId, category, condition, updateFilter }) => {
    const conditions = HouseBookFilterCondition.conditions(category);

    const options = Object.values(conditions).reduce((acc, cur) => {
      if (typeof cur !== 'string') {
        return acc;
      }

      const option: Option = {
        label: HouseBookFilterCondition.label(category, cur),
        value: cur,
      };

      return [...acc, option];
    }, [] as Option[]);

    return (
      <PrimarySelect
        value={condition}
        options={options}
        onChange={(v) => {
          updateFilter(filterId, {
            type: 'Condition',
            value: v as HouseBookFilterCondition,
          });
        }}
      />
    );
  },
);

export default HouseBookEditorFilterItemCondition;

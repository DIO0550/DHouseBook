import {
  HouseBookFilterName,
  HouseBookFilterNameCondition,
} from '@/stores/atoms/houseBookFilterState';
import { memo } from 'react';
import { PrimarySubButton } from '@/components/Elements';
import { HouseBookEditorFilterItemOperation } from '../HouseBookEditorFilterItemOperation/HouseBookEditorFilterItemOperation';
import { HouseBookEditorFiterItemCategory } from '../HouseBookEditorFilterItemCategory/HouseBookEditorFilterItemCategory';

const HouseBookFilterNameConditionLabel: {
  [x in HouseBookFilterNameCondition]: string;
} = {
  [HouseBookFilterNameCondition.Include]: '含む',
  [HouseBookFilterNameCondition.NotInclude]: '含まない',
};

type Props = {
  filterId: string;
  filter: HouseBookFilterName;
  removeFilter: (id: string) => void;
};
const HouseBookEditorFilterItemName = memo<Props>(
  ({ filterId, filter, removeFilter }) => (
    <div>
      <HouseBookEditorFilterItemOperation operation={filter.operation} />
      <HouseBookEditorFiterItemCategory category={filter.category} />
      <select defaultValue={filter.condition}>
        {Object.values(HouseBookFilterNameCondition).map((v) => (
          <option value={v}>{HouseBookFilterNameConditionLabel[v]}</option>
        ))}
      </select>
      <input type="text" defaultValue={filter.value} />
      <PrimarySubButton
        title="削除"
        onClick={() => {
          removeFilter(filterId);
        }}
      />
    </div>
  ),
);

export { HouseBookEditorFilterItemName };

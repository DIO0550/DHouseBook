import {
  HouseBookFilterType,
  HouseBookFilterTypeCondition,
} from '@/stores/atoms/houseBookFilterState';
import { memo } from 'react';
import { PrimarySubButton } from '@/components/Elements';
import { HouseBookEditorFilterItemOperation } from '../HouseBookEditorFilterItemOperation/HouseBookEditorFilterItemOperation';

const HouseBookFilterTypeConditionLabel: {
  [x in HouseBookFilterTypeCondition]: string;
} = {
  [HouseBookFilterTypeCondition.Include]: '含む',
  [HouseBookFilterTypeCondition.NotInclude]: '含まない',
};

type Props = {
  filterId: string;
  filter: HouseBookFilterType;
  removeFilter: (id: string) => void;
};
const HouseBookEditorFilterItemType = memo<Props>(
  ({ filterId, filter, removeFilter }) => (
    <div>
      <HouseBookEditorFilterItemOperation operation={filter.operation} />
      <select defaultValue={filter.condition}>
        {Object.values(HouseBookFilterTypeCondition).map((v) => (
          <option value={v}>{HouseBookFilterTypeConditionLabel[v]}</option>
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

export { HouseBookEditorFilterItemType };

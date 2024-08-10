import {
  HouseBookFilterType,
  HouseBookFilterTypeCondition,
} from '@/stores/atoms/houseBookFilterState';
import { memo } from 'react';
import { HouseBookEditorFilterItemOperation } from '../HouseBookEditorFilterItemOperation/HouseBookEditorFilterItemOperation';
import { HouseBookEditorFilterRemoveButton } from '../HouseBookEditorFilterRemoveButton';

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
      <HouseBookEditorFilterRemoveButton
        filterId={filterId}
        onClick={removeFilter}
      />
    </div>
  ),
);

export { HouseBookEditorFilterItemType };

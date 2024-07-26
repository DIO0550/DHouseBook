import {
  HouseBookFilterType,
  HouseBookFilterTypeCondition,
} from '@/stores/atoms/houseBookFilterState';
import { memo } from 'react';
import { HouseBookEditorFilterItemOperation } from '../HouseBookEditorFilterItemOperation/HouseBookEditorFilterItemOperation';

const HouseBookFilterTypeConditionLabel: {
  [x in HouseBookFilterTypeCondition]: string;
} = {
  [HouseBookFilterTypeCondition.Include]: '含む',
  [HouseBookFilterTypeCondition.NotInclude]: '含まない',
};

type Props = {
  filter: HouseBookFilterType;
};
const HouseBookEditorFilterItemType = memo<Props>(({ filter }) => (
  <div>
    <HouseBookEditorFilterItemOperation operation={filter.operation} />
    <select defaultValue={filter.condition}>
      {Object.values(HouseBookFilterTypeCondition).map((v) => (
        <option value={v}>{HouseBookFilterTypeConditionLabel[v]}</option>
      ))}
    </select>
    <input type="text" defaultValue={filter.value} />
  </div>
));

export { HouseBookEditorFilterItemType };

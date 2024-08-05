import {
  HouseBookFilterType,
  HouseBookFilterTypeCondition,
} from '@/stores/atoms/houseBookFilterState';
import { memo } from 'react';
import { HouseBookEditorFilterItemOperation } from '../HouseBookEditorFilterItemOperation/HouseBookEditorFilterItemOperation';
import { HouuseBookEditorFilterRemoveButtonFilter } from '../HouseBookEditorFilterRemoveButton';

const HouseBookFilterTypeConditionLabel: {
  [x in HouseBookFilterTypeCondition]: string;
} = {
  [HouseBookFilterTypeCondition.Include]: '含む',
  [HouseBookFilterTypeCondition.NotInclude]: '含まない',
};

type Props = {
  filterId: string;
  filter: HouseBookFilterType;
};
const HouseBookEditorFilterItemType = memo<Props>(({ filterId, filter }) => (
  <div>
    <HouseBookEditorFilterItemOperation operation={filter.operation} />
    <select defaultValue={filter.condition}>
      {Object.values(HouseBookFilterTypeCondition).map((v) => (
        <option value={v}>{HouseBookFilterTypeConditionLabel[v]}</option>
      ))}
    </select>
    <input type="text" defaultValue={filter.value} />
    <HouuseBookEditorFilterRemoveButtonFilter filterId={filterId} />
  </div>
));

export { HouseBookEditorFilterItemType };

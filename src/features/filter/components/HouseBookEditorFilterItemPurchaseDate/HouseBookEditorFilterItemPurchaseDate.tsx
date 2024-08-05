import {
  HouseBookFilterDate,
  HouseBookFilterDateCondition,
} from '@/stores/atoms/houseBookFilterState';
import { memo } from 'react';
import { HouseBookEditorFilterItemOperation } from '../HouseBookEditorFilterItemOperation/HouseBookEditorFilterItemOperation';
import { HouseBookEditorFiterItemCategory } from '../HouseBookEditorFilterItemCategory/HouseBookEditorFilterItemCategory';
import { HouuseBookEditorFilterRemoveButtonFilter } from '../HouseBookEditorFilterRemoveButton';

const HouseBookFilterDateConditionLabel: {
  [x in HouseBookFilterDateCondition]: string;
} = {
  [HouseBookFilterDateCondition.GreaterThan]: 'より後',
  [HouseBookFilterDateCondition.GreaterThanOrEqual]: '以降',
  [HouseBookFilterDateCondition.LessThan]: 'より前',
  [HouseBookFilterDateCondition.LessThanOrEqual]: '以前',
};

type Props = {
  filterId: string;
  filter: HouseBookFilterDate;
};
const HouseBookEditorFilterItemDate = memo<Props>(({ filterId, filter }) => (
  <div>
    <HouseBookEditorFiterItemCategory category={filter.category} />
    <HouseBookEditorFilterItemOperation operation={filter.operation} />
    <select defaultValue={filter.condition}>
      {Object.values(HouseBookFilterDateCondition).map((v) => (
        <option value={v}>{HouseBookFilterDateConditionLabel[v]}</option>
      ))}
    </select>
    <input type="text" defaultValue={filter.value} />
    <HouuseBookEditorFilterRemoveButtonFilter filterId={filterId} />
  </div>
));

export { HouseBookEditorFilterItemDate };

import {
  HouseBookFilterName,
  HouseBookFilterNameCondition,
} from '@/stores/atoms/houseBookFilterState';
import { memo } from 'react';
import { HouseBookEditorFilterItemOperation } from '../HouseBookEditorFilterItemOperation/HouseBookEditorFilterItemOperation';
import { HouseBookEditorFiterItemCategory } from '../HouseBookEditorFilterItemCategory/HouseBookEditorFilterItemCategory';
import { HouuseBookEditorFilterRemoveButtonFilter } from '../HouseBookEditorFilterRemoveButton';

const HouseBookFilterNameConditionLabel: {
  [x in HouseBookFilterNameCondition]: string;
} = {
  [HouseBookFilterNameCondition.Include]: '含む',
  [HouseBookFilterNameCondition.NotInclude]: '含まない',
};

type Props = {
  filterId: string;
  filter: HouseBookFilterName;
};
const HouseBookEditorFilterItemName = memo<Props>(({ filterId, filter }) => (
  <div>
    <HouseBookEditorFiterItemCategory category={filter.category} />
    <HouseBookEditorFilterItemOperation operation={filter.operation} />
    <select defaultValue={filter.condition}>
      {Object.values(HouseBookFilterNameCondition).map((v) => (
        <option value={v}>{HouseBookFilterNameConditionLabel[v]}</option>
      ))}
    </select>
    <input type="text" defaultValue={filter.value} />
    <HouuseBookEditorFilterRemoveButtonFilter filterId={filterId} />
  </div>
));

export { HouseBookEditorFilterItemName };

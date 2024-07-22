import {
  HouseBookFilterName,
  HouseBookFilterNameCondition,
} from '@/stores/atoms/houseBookFilterState';
import { memo } from 'react';

const HouseBookFilterNameConditionLabel: {
  [x in HouseBookFilterNameCondition]: string;
} = {
  [HouseBookFilterNameCondition.Include]: '含む',
  [HouseBookFilterNameCondition.NotInclude]: '含まない',
};

type Props = {
  filter: HouseBookFilterName;
};
const HouseBookEditorFilterItemName = memo<Props>(({ filter }) => (
  <div>
    <select defaultValue={filter.condition}>
      {Object.values(HouseBookFilterNameCondition).map((v) => (
        <option value={v}>{HouseBookFilterNameConditionLabel[v]}</option>
      ))}
    </select>
    <input type="text" defaultValue={filter.value} />
  </div>
));

export { HouseBookEditorFilterItemName };

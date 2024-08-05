import {
  HouseBookFilterPrice,
  HouseBookFilterPriceCondition,
} from '@/stores/atoms/houseBookFilterState';
import { memo } from 'react';
import { HouseBookEditorFilterItemOperation } from '../HouseBookEditorFilterItemOperation/HouseBookEditorFilterItemOperation';
import { HouseBookEditorFiterItemCategory } from '../HouseBookEditorFilterItemCategory/HouseBookEditorFilterItemCategory';
import { HouuseBookEditorFilterRemoveButtonFilter } from '../HouseBookEditorFilterRemoveButton';

const HouseBookFilterPriceConditionLabel: {
  [x in HouseBookFilterPriceCondition]: string;
} = {
  [HouseBookFilterPriceCondition.GreaterThan]: 'より大きい',
  [HouseBookFilterPriceCondition.GreaterThanOrEqual]: '以上',
  [HouseBookFilterPriceCondition.LessThan]: 'より小さい',
  [HouseBookFilterPriceCondition.LessThanOrEqual]: '以下',
};

type Props = {
  filterId: string;
  filter: HouseBookFilterPrice;
};
const HouseBookEditorFilterItemPrice = memo<Props>(({ filterId, filter }) => (
  <div>
    <HouseBookEditorFiterItemCategory category={filter.category} />
    <HouseBookEditorFilterItemOperation operation={filter.operation} />
    <select defaultValue={filter.condition}>
      {Object.values(HouseBookFilterPriceCondition).map((v) => (
        <option value={v}>{HouseBookFilterPriceConditionLabel[v]}</option>
      ))}
    </select>
    <input type="text" defaultValue={filter.value} />
    <HouuseBookEditorFilterRemoveButtonFilter filterId={filterId} />
  </div>
));

export { HouseBookEditorFilterItemPrice };

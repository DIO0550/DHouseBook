import {
  HouseBookFilterPrice,
  HouseBookFilterPriceCondition,
} from '@/stores/atoms/houseBookFilterState';
import { memo } from 'react';
import { HouseBookEditorFilterItemOperation } from '../HouseBookEditorFilterItemOperation/HouseBookEditorFilterItemOperation';
import { HouseBookEditorFiterItemCategory } from '../HouseBookEditorFilterItemCategory/HouseBookEditorFilterItemCategory';
import { HouuseBookEditorFilterRemoveButton } from '../HouseBookEditorFilterRemoveButton';

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
  removeFilter: (id: string) => void;
};
const HouseBookEditorFilterItemPrice = memo<Props>(
  ({ filterId, filter, removeFilter }) => (
    <div>
      <HouseBookEditorFiterItemCategory category={filter.category} />
      <HouseBookEditorFilterItemOperation operation={filter.operation} />
      <select defaultValue={filter.condition}>
        {Object.values(HouseBookFilterPriceCondition).map((v) => (
          <option value={v}>{HouseBookFilterPriceConditionLabel[v]}</option>
        ))}
      </select>
      <input type="text" defaultValue={filter.value} />
      <HouuseBookEditorFilterRemoveButton
        filterId={filterId}
        onClick={removeFilter}
      />
    </div>
  ),
);

export { HouseBookEditorFilterItemPrice };

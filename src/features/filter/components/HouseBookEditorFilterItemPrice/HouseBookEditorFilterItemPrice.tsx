import {
  HouseBookFilterPrice,
  HouseBookFilterPriceCondition,
} from '@/stores/atoms/houseBookFilterState';
import { memo } from 'react';
import { PrimarySubButton } from '@/components/Elements';
import { HouseBookEditorFilterItemOperation } from '../HouseBookEditorFilterItemOperation/HouseBookEditorFilterItemOperation';
import { HouseBookEditorFiterItemCategory } from '../HouseBookEditorFilterItemCategory/HouseBookEditorFilterItemCategory';

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
      <HouseBookEditorFilterItemOperation operation={filter.operation} />
      <HouseBookEditorFiterItemCategory category={filter.category} />
      <select defaultValue={filter.condition}>
        {Object.values(HouseBookFilterPriceCondition).map((v) => (
          <option value={v}>{HouseBookFilterPriceConditionLabel[v]}</option>
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

export { HouseBookEditorFilterItemPrice };

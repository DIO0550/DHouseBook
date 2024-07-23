import {
  HouseBookFilterPrice,
  HouseBookFilterPriceCondition,
} from '@/stores/atoms/houseBookFilterState';
import { memo } from 'react';

const HouseBookFilterPriceConditionLabel: {
  [x in HouseBookFilterPriceCondition]: string;
} = {
  [HouseBookFilterPriceCondition.GreaterThan]: 'より大きい',
  [HouseBookFilterPriceCondition.GreaterThanOrEqual]: '以上',
  [HouseBookFilterPriceCondition.LessThan]: 'より小さい',
  [HouseBookFilterPriceCondition.LessThanOrEqual]: '以下',
};

type Props = {
  filter: HouseBookFilterPrice;
};
const HouseBookEditorFilterItemPrice = memo<Props>(({ filter }) => (
  <div>
    <select defaultValue={filter.condition}>
      {Object.values(HouseBookFilterPriceCondition).map((v) => (
        <option value={v}>{HouseBookFilterPriceConditionLabel[v]}</option>
      ))}
    </select>
    <input type="text" defaultValue={filter.value} />
  </div>
));

export { HouseBookEditorFilterItemPrice };

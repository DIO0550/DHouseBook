import {
  HouseBookFilterPurchaseDate,
  HouseBookFilterPurchaseDateCondition,
} from '@/stores/atoms/houseBookFilterState';
import { memo } from 'react';

const HouseBookFilterPurchaseDateConditionLabel: {
  [x in HouseBookFilterPurchaseDateCondition]: string;
} = {
  [HouseBookFilterPurchaseDateCondition.GreaterThan]: 'より後',
  [HouseBookFilterPurchaseDateCondition.GreaterThanOrEqual]: '以降',
  [HouseBookFilterPurchaseDateCondition.LessThan]: 'より前',
  [HouseBookFilterPurchaseDateCondition.LessThanOrEqual]: '以前',
};

type Props = {
  filter: HouseBookFilterPurchaseDate;
};
const HouseBookEditorFilterItemPurchaseDate = memo<Props>(({ filter }) => (
  <div>
    <select defaultValue={filter.condition}>
      {Object.values(HouseBookFilterPurchaseDateCondition).map((v) => (
        <option value={v}>
          {HouseBookFilterPurchaseDateConditionLabel[v]}
        </option>
      ))}
    </select>
    <input type="text" defaultValue={filter.value} />
  </div>
));

export { HouseBookEditorFilterItemPurchaseDate };

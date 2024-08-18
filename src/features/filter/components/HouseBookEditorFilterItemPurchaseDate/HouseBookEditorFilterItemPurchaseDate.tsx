import { memo } from 'react';
import { PrimarySubButton } from '@/components/Elements';
import {
  HouseBookFilterDateCondition,
  HouseBookFilterDate,
} from '@/utils/filters/houseBookFilterDate';
import { HouseBookEditorFilterItemOperation } from '../HouseBookEditorFilterItemOperation/HouseBookEditorFilterItemOperation';
import { HouseBookEditorFiterItemCategory } from '../HouseBookEditorFilterItemCategory/HouseBookEditorFilterItemCategory';

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
  removeFilter: (id: string) => void;
};
const HouseBookEditorFilterItemDate = memo<Props>(
  ({ filterId, filter, removeFilter }) => (
    <div>
      <HouseBookEditorFilterItemOperation operation={filter.operation} />
      <HouseBookEditorFiterItemCategory category={filter.category} />
      <select defaultValue={filter.condition}>
        {Object.values(HouseBookFilterDateCondition).map((v) => (
          <option value={v}>{HouseBookFilterDateConditionLabel[v]}</option>
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

export { HouseBookEditorFilterItemDate };

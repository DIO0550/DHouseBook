import { memo } from 'react';
import { PrimarySubButton } from '@/components/Elements';
import {
  HouseBookFilterDateCondition,
  HouseBookFilterDate,
} from '@/utils/filters/houseBookFilterDate';
import {
  RemoveFilter,
  UpdateFilter,
} from '@/features/filter/hooks/useHouseBookEditorFilter';
import { HouseBookEditorFilterItemOperation } from '../HouseBookEditorFilterItemOperation/HouseBookEditorFilterItemOperation';
import { HouseBookEditorFiterItemCategory } from '../HouseBookEditorFilterItemCategory/HouseBookEditorFilterItemCategory';
import styles from './HouseBookEditorFilterItemDate.module.scss';

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
  updateFilter: UpdateFilter;
  removeFilter: RemoveFilter;
};
const HouseBookEditorFilterItemDate = memo<Props>(
  ({ filterId, filter, updateFilter, removeFilter }) => (
    <div>
      {/* オペレーション */}
      <div className={`${styles['operation-block']}`}>
        <HouseBookEditorFilterItemOperation
          filterId={filterId}
          operation={filter.operation}
          updateFilter={updateFilter}
        />
      </div>
      {/* カテゴリー */}
      <div className={`${styles['category-block']}`}>
        <HouseBookEditorFiterItemCategory
          filterId={filterId}
          category={filter.category}
          updateFilter={updateFilter}
        />
      </div>

      {/* コンディション */}
      <div className={`${styles['condition-block']}`}>
        <select
          value={filter.condition}
          onChange={(e) => {
            updateFilter(filterId, {
              type: 'Condition',
              value: e.currentTarget.value as HouseBookFilterDateCondition,
            });
          }}
        >
          {Object.values(HouseBookFilterDateCondition).map((v) => (
            <option value={v}>{HouseBookFilterDateConditionLabel[v]}</option>
          ))}
        </select>
      </div>

      {/* 値 */}
      <div className={`${styles['value-block']}`}>
        <input
          type="text"
          value={filter.value}
          onChange={(e) => {
            updateFilter(filterId, {
              type: 'Value',
              value: e.currentTarget.value,
            });
          }}
        />
      </div>

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

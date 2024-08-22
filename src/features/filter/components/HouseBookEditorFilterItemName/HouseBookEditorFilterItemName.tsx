import { memo } from 'react';
import { PrimarySubButton } from '@/components/Elements';
import { HouseBookEditorFiterItemCategory } from '@/features/filter/components/HouseBookEditorFilterItemCategory/HouseBookEditorFilterItemCategory';
import { HouseBookEditorFilterItemOperation } from '@/features/filter/components/HouseBookEditorFilterItemOperation/HouseBookEditorFilterItemOperation';
import {
  HouseBookFilterNameCondition,
  HouseBookFilterName,
} from '@/utils/filters/houseBookFilterName';
import styles from './HouseBookEditorFilterItemName.module.scss';
import {
  RemoveFilter,
  UpdateFilter,
} from '../../hooks/useHouseBookEditorFilter';

const HouseBookFilterNameConditionLabel: {
  [x in HouseBookFilterNameCondition]: string;
} = {
  [HouseBookFilterNameCondition.Include]: '含む',
  [HouseBookFilterNameCondition.NotInclude]: '含まない',
};

type Props = {
  filterId: string;
  filter: HouseBookFilterName;
  updateFilter: UpdateFilter;
  removeFilter: RemoveFilter;
};
const HouseBookEditorFilterItemName = memo<Props>(
  ({ filterId, filter, updateFilter, removeFilter }) => (
    <div className={`${styles['item-container']}`}>
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
              value: e.currentTarget.value as HouseBookFilterNameCondition,
            });
          }}
        >
          {Object.values(HouseBookFilterNameCondition).map((v) => (
            <option value={v}>{HouseBookFilterNameConditionLabel[v]}</option>
          ))}
        </select>
      </div>
      {/* 値 */}
      <div className={`${styles['value-block']}`}>
        <input
          onChange={(e) => {
            updateFilter(filterId, {
              type: 'Value',
              value: e.currentTarget.value,
            });
          }}
          type="text"
          value={filter.value}
        />
      </div>

      {/* 削除 */}
      <PrimarySubButton
        title="削除"
        onClick={() => {
          removeFilter(filterId);
        }}
      />
    </div>
  ),
);

export { HouseBookEditorFilterItemName };

import { memo } from 'react';
import { PrimarySubButton } from '@/components/Elements';
import {
  HouseBookFilterTypeCondition,
  HouseBookFilterType,
} from '@/utils/filters/houseBookFilterType';
import {
  RemoveFilter,
  UpdateFilter,
} from '@/features/filter/hooks/useHouseBookEditorFilter';
import { HouseBookEditorFilterItemOperation } from '../HouseBookEditorFilterItemOperation/HouseBookEditorFilterItemOperation';
import styles from './HouseBookEditorFilterItemType.module.scss';
import { HouseBookEditorFilterItemCategory } from '../HouseBookEditorFilterItemCategory/HouseBookEditorFilterItemCategory';

const HouseBookFilterTypeConditionLabel: {
  [x in HouseBookFilterTypeCondition]: string;
} = {
  [HouseBookFilterTypeCondition.Include]: '含む',
  [HouseBookFilterTypeCondition.NotInclude]: '含まない',
};

type Props = {
  filterId: string;
  filter: HouseBookFilterType;
  validate: boolean;
  updateFilter: UpdateFilter;
  removeFilter: RemoveFilter;
};
const HouseBookEditorFilterItemType = memo<Props>(
  ({ filterId, filter, validate, updateFilter, removeFilter }) => (
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
        <HouseBookEditorFilterItemCategory
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
              value: e.currentTarget.value as HouseBookFilterTypeCondition,
            });
          }}
        >
          {Object.values(HouseBookFilterTypeCondition).map((v) => (
            <option value={v}>{HouseBookFilterTypeConditionLabel[v]}</option>
          ))}
        </select>
      </div>

      {/* 値 */}
      <div className={`${styles['value-block']}`}>
        <input
          type="text"
          value={filter.value}
          className={`${validate ? '' : styles['invalid-input']}`}
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

export { HouseBookEditorFilterItemType };

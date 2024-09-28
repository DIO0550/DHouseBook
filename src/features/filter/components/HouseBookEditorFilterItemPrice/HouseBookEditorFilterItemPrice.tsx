import { memo } from 'react';
import { PrimarySubButton } from '@/components/Elements';
import { HouseBookFilterPrice } from '@/utils/filters/houseBookFilterPrice';
import {
  RemoveFilter,
  UpdateFilter,
} from '@/features/filter/hooks/useHouseBookEditorFilter';
import { HouseBookEditorFilterItemOperation } from '../HouseBookEditorFilterItemOperation/HouseBookEditorFilterItemOperation';
import { HouseBookEditorFilterItemCategory } from '../HouseBookEditorFilterItemCategory/HouseBookEditorFilterItemCategory';
import styles from './HouseBookEditorFilterItemPrice.module.scss';
import HouseBookEditorFilterItemCondition from '../HouseBookEditorFilterItemCondition/HouseBookEditorFilterItemCondition';

type Props = {
  filterId: string;
  filter: HouseBookFilterPrice;
  validate: boolean;
  updateFilter: UpdateFilter;
  removeFilter: RemoveFilter;
};
const HouseBookEditorFilterItemPrice = memo<Props>(
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
        <HouseBookEditorFilterItemCondition
          filterId={filterId}
          category={filter.category}
          condition={filter.condition}
          updateFilter={updateFilter}
        />
      </div>

      {/* 値 */}
      <div className={`${styles['value-block']}`}>
        <input
          className={`${validate ? '' : styles['invalid-input']}`}
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

      {/* 削除 */}
      <div className={`${styles['remove-btn-block']}`}>
        <PrimarySubButton
          title="削除"
          onClick={() => {
            removeFilter(filterId);
          }}
        />
      </div>
    </div>
  ),
);

export { HouseBookEditorFilterItemPrice };

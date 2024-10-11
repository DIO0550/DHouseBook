import { memo } from 'react';
import { PrimarySubButton } from '@/components/Elements';
import { HouseBookFilterType } from '@/utils/filters/houseBookFilterType';
import {
  RemoveFilter,
  UpdateFilter,
} from '@/features/filter/hooks/useHouseBookEditorFilter';
import { PrimaryColorInput } from '@/components/Elements/PrimaryColorInput';
import { HouseBookEditorFilterItemOperation } from '../HouseBookEditorFilterItemOperation/HouseBookEditorFilterItemOperation';
import styles from './HouseBookEditorFilterItemType.module.scss';
import { HouseBookEditorFilterItemCategory } from '../HouseBookEditorFilterItemCategory/HouseBookEditorFilterItemCategory';
import HouseBookEditorFilterItemCondition from '../HouseBookEditorFilterItemCondition/HouseBookEditorFilterItemCondition';

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
        <HouseBookEditorFilterItemCondition
          filterId={filterId}
          category={filter.category}
          condition={filter.condition}
          updateFilter={updateFilter}
        />
      </div>

      {/* 値 */}
      <div className={`${styles['value-block']}`}>
        <PrimaryColorInput
          type="text"
          value={filter.value}
          className={`${
            validate
              ? ''
              : styles['invalid-input'] + styles['invalid-input-skin']
          }
          `}
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

export { HouseBookEditorFilterItemType };

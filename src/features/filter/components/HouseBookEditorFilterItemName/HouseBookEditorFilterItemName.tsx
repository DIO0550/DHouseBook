import { memo } from 'react';
import { PrimarySubButton } from '@/components/Elements';
import { HouseBookEditorFilterItemCategory } from '@/features/filter/components/HouseBookEditorFilterItemCategory/HouseBookEditorFilterItemCategory';
import { HouseBookEditorFilterItemOperation } from '@/features/filter/components/HouseBookEditorFilterItemOperation/HouseBookEditorFilterItemOperation';
import { HouseBookFilterName } from '@/utils/filters/houseBookFilterName';
import { PrimaryRoundInput } from '@/components/Elements/Primary/PrimaryRoundInput/PrimaryRoundInput';
import {
  RemoveFilter,
  UpdateFilter,
} from '@/features/filter/hooks/useHouseBookEditorFilter';
import HouseBookEditorFilterItemCondition from '../HouseBookEditorFilterItemCondition/HouseBookEditorFilterItemCondition';
import styles from './HouseBookEditorFilterItemName.module.scss';

type Props = {
  filterId: string;
  filter: HouseBookFilterName;
  validate: boolean;
  updateFilter: UpdateFilter;
  removeFilter: RemoveFilter;
};
const HouseBookEditorFilterItemName = memo<Props>(
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
        <PrimaryRoundInput
          type="text"
          value={filter.value}
          className={`${validate ? '' : `${styles['invalid-input-skin']}`}
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

export { HouseBookEditorFilterItemName };

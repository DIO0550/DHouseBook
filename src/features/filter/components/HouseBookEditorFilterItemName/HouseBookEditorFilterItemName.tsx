import {
  HouseBookFilterName,
  HouseBookFilterNameCondition,
} from '@/stores/atoms/houseBookFilterState';
import { memo } from 'react';
import { PrimarySubButton } from '@/components/Elements';
import { HouseBookEditorFiterItemCategory } from '@/features/filter/components/HouseBookEditorFilterItemCategory/HouseBookEditorFilterItemCategory';
import { HouseBookEditorFilterItemOperation } from '@/features/filter/components/HouseBookEditorFilterItemOperation/HouseBookEditorFilterItemOperation';
import styles from './HouseBookEditorFilterItemName.module.scss';

const HouseBookFilterNameConditionLabel: {
  [x in HouseBookFilterNameCondition]: string;
} = {
  [HouseBookFilterNameCondition.Include]: '含む',
  [HouseBookFilterNameCondition.NotInclude]: '含まない',
};

type Props = {
  filterId: string;
  filter: HouseBookFilterName;
  removeFilter: (id: string) => void;
};
const HouseBookEditorFilterItemName = memo<Props>(
  ({ filterId, filter, removeFilter }) => (
    <div className={`${styles['item-container']}`}>
      {/* オペレーション */}
      <div className={`${styles['operation-block']}`}>
        <HouseBookEditorFilterItemOperation operation={filter.operation} />
      </div>
      {/* カテゴリー */}
      <div className={`${styles['category-block']}`}>
        <HouseBookEditorFiterItemCategory category={filter.category} />
      </div>
      {/* コンディション */}
      <div className={`${styles['condition-block']}`}>
        <select defaultValue={filter.condition}>
          {Object.values(HouseBookFilterNameCondition).map((v) => (
            <option value={v}>{HouseBookFilterNameConditionLabel[v]}</option>
          ))}
        </select>
      </div>
      {/* 値 */}
      <div className={`${styles['value-block']}`}>
        <input type="text" defaultValue={filter.value} />
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

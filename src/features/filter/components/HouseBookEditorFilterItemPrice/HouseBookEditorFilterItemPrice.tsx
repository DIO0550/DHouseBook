import { memo } from 'react';
import { PrimarySubButton } from '@/components/Elements';
import {
  HouseBookFilterPriceCondition,
  HouseBookFilterPrice,
} from '@/utils/filters/houseBookFilterPrice';
import {
  RemoveFilter,
  UpdateFilter,
} from '@/features/filter/hooks/useHouseBookEditorFilter';
import { HouseBookEditorFilterItemOperation } from '../HouseBookEditorFilterItemOperation/HouseBookEditorFilterItemOperation';
import { HouseBookEditorFilterItemCategory } from '../HouseBookEditorFilterItemCategory/HouseBookEditorFilterItemCategory';
import styles from './HouseBookEditorFilterItemPrice.module.scss';

const HouseBookFilterPriceConditionLabel: {
  [x in HouseBookFilterPriceCondition]: string;
} = {
  [HouseBookFilterPriceCondition.GreaterThan]: 'より大きい',
  [HouseBookFilterPriceCondition.GreaterThanOrEqual]: '以上',
  [HouseBookFilterPriceCondition.LessThan]: 'より小さい',
  [HouseBookFilterPriceCondition.LessThanOrEqual]: '以下',
};

type Props = {
  filterId: string;
  filter: HouseBookFilterPrice;
  validate: boolean;
  updateFilter: UpdateFilter;
  removeFilter: RemoveFilter;
};
const HouseBookEditorFilterItemPrice = memo<Props>(
  ({ filterId, filter, validate, updateFilter, removeFilter }) => {
    console.log(validate);

    return (
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
                value: e.currentTarget.value as HouseBookFilterPriceCondition,
              });
            }}
          >
            {Object.values(HouseBookFilterPriceCondition).map((v) => (
              <option value={v}>{HouseBookFilterPriceConditionLabel[v]}</option>
            ))}
          </select>
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
    );
  },
);

export { HouseBookEditorFilterItemPrice };

import { memo } from 'react';
import { PurchasedItemName } from '@/features/editors/components/cells/PurchasedItemName';
import { PurchasedItemPrice } from '@/features/editors/components/cells/PurchasedItemPrice';
import { PurchasedItemType } from '@/features/editors/components/cells/PurchasedItemType';
import { PurchasedItemDate } from '@/features/editors/components/cells/PurchasedItemDate';
import { UpdateEntity } from '@/utils/editors/houseBookItemsEntity';
import { useThemeContext } from '@/providers/themes/hooks/useThemeContext';
import { HouseBookEditorMode } from '@/features/editors/hooks/useHouseBookEditorMode';
import styles from './PurchasedItemRow.module.scss';
import { PurchasedItemSelect } from '../../cells/PurchasedItemSelect/PurchasedItemSelect';

type Props = {
  mode: HouseBookEditorMode;
  id: string;
  name: string;
  price: string;
  type: string;
  date: string;
  isSelected: boolean;
  onUpdateData: (updateEntity: UpdateEntity) => void;
  onChangeSelect: (id: string) => void;
};

const PurchasedItemRow = memo<Props>(
  ({
    mode,
    id,
    name,
    price,
    type,
    date,
    isSelected,
    onUpdateData,
    onChangeSelect,
  }) => {
    const { themeColor } = useThemeContext();

    return (
      <div
        className={`${styles.container} ${styles['container-skin']} ${styles[themeColor]}`}
      >
        {mode === HouseBookEditorMode.Select && (
          <div className={`${styles['select-block']}`}>
            <PurchasedItemSelect
              id={id}
              checked={isSelected}
              onChange={onChangeSelect}
            />
          </div>
        )}

        <div className={`${styles['name-block']}`}>
          <PurchasedItemName
            id={id}
            defaultValue={name}
            onUpdate={onUpdateData}
          />
        </div>
        <div className={`${styles['price-block']}`}>
          <PurchasedItemPrice
            id={id}
            defaultValue={price}
            onUpdate={onUpdateData}
          />
        </div>
        <div className={`${styles['type-block']}`}>
          <PurchasedItemType
            id={id}
            defaultValue={type}
            onUpdate={onUpdateData}
          />
        </div>
        <div className={`${styles['date-block']}`}>
          <PurchasedItemDate
            id={id}
            defaultValue={date}
            onUpdate={onUpdateData}
          />
        </div>
      </div>
    );
  },
);

export { PurchasedItemRow };

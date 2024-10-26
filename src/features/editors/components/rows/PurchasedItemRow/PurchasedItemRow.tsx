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
        <PurchasedItemSelect
          mode={mode}
          id={id}
          checked={isSelected}
          onChange={onChangeSelect}
        />
        <PurchasedItemName
          id={id}
          defaultValue={name}
          onUpdate={onUpdateData}
        />
        <PurchasedItemPrice
          id={id}
          defaultValue={price}
          onUpdate={onUpdateData}
        />
        <PurchasedItemType
          id={id}
          defaultValue={type}
          onUpdate={onUpdateData}
        />
        <PurchasedItemDate
          id={id}
          defaultValue={date}
          onUpdate={onUpdateData}
        />
      </div>
    );
  },
);

export { PurchasedItemRow };

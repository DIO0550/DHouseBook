import { memo } from 'react';
import { HouseBookItem } from '@/utils/editors/houseBookItem';
import { UpdateEntity } from '@/utils/editors/houseBookItemsEntity';
import { PurchasedItemRow } from '@/features/editors/components/rows/PurchasedItemRow';
import { SelectPurchasedItems } from '@/features/editors/hooks/usePurchasedItemSelect';
import { HouseBookEditorMode } from '@/features/editors/hooks/useHouseBookEditorMode';
import { PurchasedItemListHeader } from '../PurchasedItemListHeader/PurchasedItemListHeader';
import styles from './PurchasedItemList.module.scss';

type Props = {
  mode: HouseBookEditorMode;
  purchasedItems: HouseBookItem[];
  onUpdateData: (updateEntity: UpdateEntity) => void;
  selectedItems: SelectPurchasedItems;
  onChangeSelect: (id: string) => void;
};

const PurchasedItemList = memo<Props>(
  ({ mode, purchasedItems, onUpdateData, selectedItems, onChangeSelect }) => (
    <div className={`${styles['purchased-item-list']}`}>
      <PurchasedItemListHeader mode={mode} />
      {purchasedItems.map((item) => (
        <PurchasedItemRow
          key={item.id}
          mode={mode}
          id={item.id}
          name={item.name}
          price={String(item.price)}
          type={item.type}
          date={item.date}
          isSelected={selectedItems[item.id] !== undefined}
          onUpdateData={onUpdateData}
          onChangeSelect={onChangeSelect}
        />
      ))}
    </div>
  ),
);

export { PurchasedItemList };

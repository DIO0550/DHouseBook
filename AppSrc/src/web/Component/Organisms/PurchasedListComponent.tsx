import { FC } from 'react';
import usePurchasedItemList from '../../CustomHook/usePurchasedItemList';
import PurchasedItemCell from '../Molecules/PurchasedItemCell';

const PurchasedListComponent: FC = () => {
  const { purchasedItemList, insertParchasedItem, saveFile, isLoading } =
    usePurchasedItemList();
  return (
    <div>
      <div>{isLoading}</div>
      {purchasedItemList.ids.map((ids) => {
        const item = purchasedItemList.entities[ids];
        return (
          <PurchasedItemCell
            key={String(item?.id)}
            id={String(item?.id)}
            name={item?.name!}
            price={String(item?.price!)}
            type={item?.type!}
            purchasedDate={item?.purchasedDate!}
          />
        );
      })}
      <button type='button' onClick={insertParchasedItem}>
        新規追加
      </button>
      <button type='button' onClick={saveFile}>
        保存
      </button>
    </div>
  );
};

export default PurchasedListComponent;

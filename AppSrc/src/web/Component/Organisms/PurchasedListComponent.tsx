import { FC } from 'react';
import usePurchasedItemList from '../../CustomHook/usePurchasedItemList';
import useBooksDate from '../../CustomHook/useBooksDate';
import PurchasedItemCell from '../Molecules/PurchasedItemCell';
import useBookFile from '../../CustomHook/useBookFile';

const PurchasedListComponent: FC = () => {
  const { purchasedItemList, insertParchasedItem, saveData } =
    usePurchasedItemList();
  const { dateStr } = useBooksDate();
  const date = new Date(dateStr);
  const _ = useBookFile();
  return (
    <div>
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
      <button type='button' onClick={() => insertParchasedItem()}>
        新規追加
      </button>
      <button
        type='button'
        onClick={() => saveData(date.getFullYear(), date.getMonth() + 1)}
      >
        保存
      </button>
    </div>
  );
};

export default PurchasedListComponent;

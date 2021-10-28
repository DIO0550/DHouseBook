import { FC } from 'react';
import usePurchasedItemList from '../../CustomHook/usePurchasedItemList';
import useBooksDate from '../../CustomHook/useBooksDate';
import PurchasedItemCell from '../Molecules/PuchasedItemCell';

const PurchasedListComponent: FC = () => {
  const { purchasedItemList, insertParchasedItem, saveData } =
    usePurchasedItemList();
  const { dateStr } = useBooksDate();
  const date = new Date(dateStr);
  const ids = purchasedItemList.ids;
  return (
    <div>
      {purchasedItemList.ids.map((item) => (
        <PurchasedItemCell ids={String(item)} />
      ))}
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

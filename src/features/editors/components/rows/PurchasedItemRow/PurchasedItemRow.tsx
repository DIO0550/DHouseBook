import { memo } from 'react';
import { PurchasedItemName } from '@/features/editors/components/cells/PurchasedItemName';
import { PurchasedItemPrice } from '@/features/editors/components/cells/PurchasedItemPrice';
import { PurchasedItemType } from '@/features/editors/components/cells/PurchasedItemType';
import { PurchasedItemDate } from '@/features/editors/components/cells/PurchasedItemDate';
import styles from './PurchasedItemRow.module.scss';

type Props = {
  name: string;
  price: string;
  type: string;
  date: string;
};

const PurchasedItemRow = memo<Props>(({ name, price, type, date }) => (
  <div className={styles.container}>
    <PurchasedItemName defaultValue={name} />
    <PurchasedItemPrice defaultValue={price} />
    <PurchasedItemType defaultValue={type} />
    <PurchasedItemDate defaultValue={date} />
  </div>
));

export { PurchasedItemRow };

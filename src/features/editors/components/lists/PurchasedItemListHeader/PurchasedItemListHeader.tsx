import { memo } from 'react';
import styles from './PurchasedItemListHeader.module.scss';

const PurchasedItemListHeader = memo(() => (
  <header className={styles['header-container']}>
    <div>商品名</div>
    <div>値段</div>
    <div>種類</div>
    <div>購入日</div>
  </header>
));

export { PurchasedItemListHeader };

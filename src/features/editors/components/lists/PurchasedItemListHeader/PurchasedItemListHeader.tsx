import { memo } from 'react';
import { useThemeContext } from '@/components/Providers';
import styles from './PurchasedItemListHeader.module.scss';

const PurchasedItemListHeader = memo(() => {
  const theme = useThemeContext();

  return (
    <header className={`${styles['header-container']} ${styles[theme]}`}>
      <div
        className={`${styles.header} ${styles['header-skin']} ${styles['header-name']}`}
      >
        商品名
      </div>
      <div
        className={`${styles.header} ${styles['header-skin']} ${styles['header-price']}`}
      >
        値段
      </div>
      <div
        className={`${styles.header} ${styles['header-skin']} ${styles['header-type']}`}
      >
        種類
      </div>
      <div
        className={`${styles.header} ${styles['header-skin']} ${styles['header-date']}`}
      >
        購入日
      </div>
    </header>
  );
});

export { PurchasedItemListHeader };

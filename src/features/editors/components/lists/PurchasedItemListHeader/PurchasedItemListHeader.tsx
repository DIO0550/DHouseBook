import { memo } from 'react';
import { useThemeContext } from '@/providers/themes/hooks/useThemeContext';
import { HouseBookItemCategory } from '@/utils/editors/houseBookItemCategory';
import { PrimaryCheckbox } from '@/components/Elements/Primary/PrimaryCheckbox';
import { HouseBookEditorMode } from '@/features/editors/hooks/useHouseBookEditorMode';
import styles from './PurchasedItemListHeader.module.scss';

type Props = {
  mode: HouseBookEditorMode;
};

const PurchasedItemListHeader = memo<Props>(({ mode }) => {
  const { themeColor } = useThemeContext();

  return (
    <header className={`${styles['header-container']} ${styles[themeColor]}`}>
      {mode === HouseBookEditorMode.Select && (
        <div
          className={`${styles.header} ${styles['header-skin']} ${styles['header-select']}`}
        >
          <PrimaryCheckbox />
        </div>
      )}
      <div
        className={`${styles.header} ${styles['header-skin']} ${styles['header-name']}`}
      >
        <div className={`${styles['header-category-wrapper']}`}>
          {HouseBookItemCategory.displayName(HouseBookItemCategory.Name)}
        </div>
      </div>
      <div
        className={`${styles.header} ${styles['header-skin']} ${styles['header-price']}`}
      >
        <div className={`${styles['header-category-wrapper']}`}>
          {HouseBookItemCategory.displayName(HouseBookItemCategory.Price)}
        </div>
      </div>
      <div
        className={`${styles.header} ${styles['header-skin']} ${styles['header-type']}`}
      >
        <div className={`${styles['header-category-wrapper']}`}>
          {HouseBookItemCategory.displayName(HouseBookItemCategory.Type)}
        </div>
      </div>
      <div
        className={`${styles.header} ${styles['header-skin']} ${styles['header-date']}`}
      >
        <div className={`${styles['header-category-wrapper']}`}>
          {HouseBookItemCategory.displayName(HouseBookItemCategory.Date)}
        </div>
      </div>
    </header>
  );
});

export { PurchasedItemListHeader };

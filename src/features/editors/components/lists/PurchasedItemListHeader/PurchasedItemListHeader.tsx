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
        {HouseBookItemCategory.displayName(HouseBookItemCategory.Name)}
      </div>
      <div
        className={`${styles.header} ${styles['header-skin']} ${styles['header-price']}`}
      >
        {HouseBookItemCategory.displayName(HouseBookItemCategory.Price)}
      </div>
      <div
        className={`${styles.header} ${styles['header-skin']} ${styles['header-type']}`}
      >
        {HouseBookItemCategory.displayName(HouseBookItemCategory.Type)}
      </div>
      <div
        className={`${styles.header} ${styles['header-skin']} ${styles['header-date']}`}
      >
        {HouseBookItemCategory.displayName(HouseBookItemCategory.Date)}
      </div>
    </header>
  );
});

export { PurchasedItemListHeader };

/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { memo, useState } from 'react';
import { useHouseBookFilterState } from '@/stores/atoms/useHouseBookFilterState';
import { PrimarySwitchButton } from '@/components/Elements/PrimarySwitchButton/PrimarySwitchButton';
import { useThemeContext } from '@/providers/themes/hooks/useThemeContext';
import styles from './HouseBookEditorFilter.module.scss';
import { HouseBookEditorFilterModalDialog } from '../HouseBookEditorFilterModalDialog/HouseBookEditorFilterModalDialog';

const HouseBookEditorFilter = memo(() => {
  const { filters, isApplyFilter } = useHouseBookFilterState();
  const { themeColor } = useThemeContext();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <HouseBookEditorFilterModalDialog
        initFilters={filters}
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
      />
      <div className={`${styles['filter-btn-block']}`}>
        <PrimarySwitchButton
          className={`${styles['filter-btn']}`}
          checked={isApplyFilter}
          type="button"
          onClick={() => {
            setIsOpen(true);
          }}
        >
          <div
            className={`${isApplyFilter ? styles.on : styles.off} ${
              styles[themeColor]
            } ${styles['filter-btn-icon']} ${styles['filter-btn-icon-skin']}`}
          />
        </PrimarySwitchButton>
      </div>
    </>
  );
});

export { HouseBookEditorFilter };

/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { memo, useState } from 'react';
import { useHouseBookFilterState } from '@/stores/atoms/useHouseBookFilterState';
import { useThemeContext } from '@/providers/themes/hooks/useThemeContext';
import styles from './HouseBookEditorFilter.module.scss';
import { HouseBookEditorFilterModalDialog } from '../HouseBookEditorFilterModalDialog/HouseBookEditorFilterModalDialog';

const HouseBookEditorFilter = memo(() => {
  const { filters, isApplyFilter } = useHouseBookFilterState();
  const [isOpen, setIsOpen] = useState(false);
  const { themeColor } = useThemeContext();

  return (
    <>
      <HouseBookEditorFilterModalDialog
        initFilters={filters}
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
      />
      <div>
        <button
          className={`${styles['filter-btn']} ${styles['filter-btn-skin']} ${
            isApplyFilter ? styles.on : ''
          } ${styles[themeColor]}`}
          type="button"
          onClick={() => {
            console.log('filter');
            setIsOpen(true);
          }}
        >
          フィルター
        </button>
      </div>
    </>
  );
});

export { HouseBookEditorFilter };

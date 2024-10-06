/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { memo, useState } from 'react';
import { useHouseBookFilterState } from '@/stores/atoms/useHouseBookFilterState';
import { PrimarySwitchButton } from '@/components/Elements/PrimarySwitchButton/PrimarySwitchButton';
import styles from './HouseBookEditorFilter.module.scss';
import { HouseBookEditorFilterModalDialog } from '../HouseBookEditorFilterModalDialog/HouseBookEditorFilterModalDialog';

const HouseBookEditorFilter = memo(() => {
  const { filters, isApplyFilter } = useHouseBookFilterState();
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
      <div className={`${styles['filter-btn']}`}>
        <PrimarySwitchButton
          checked={isApplyFilter}
          type="button"
          onClick={() => {
            setIsOpen(true);
          }}
        >
          フィルター
        </PrimarySwitchButton>
      </div>
    </>
  );
});

export { HouseBookEditorFilter };

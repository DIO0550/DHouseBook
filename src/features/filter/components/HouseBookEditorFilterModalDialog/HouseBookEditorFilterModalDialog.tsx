import { PrimaryButton } from '@/components/Elements';
import { ModalDialog } from '@/components/Elements/ModalDialog/ModalDialog';
import { HouseBookFilter } from '@/stores/atoms/houseBookFilterState';
import { memo, ComponentProps } from 'react';
import { useHouseBookEditorFilter } from '@/features/filter/hooks/useHouseBookEditorFilter';
import { useSetHouseBookFilterState } from '@/stores/atoms/useSetHouseBookFilterState';
import { OutlineCancelActionButton } from '@/components/Elements/OutlineCancelActionButton/OutlineCancelActionButton';
import { PrimaryOutlineButton } from '@/components/Elements/PrimaryOutlineButton/PrimaryOutlineButton';
import { HouseBookEditorFilterList } from '../HouseBookEditorFilterList/HouseBookEditorFilterList';
import styles from './HouseBookEditorFilterModalDialog.module.scss';

type DialogProps = {
  initFilters: HouseBookFilter[] | undefined;
  onClose: () => void;
};

const DialogComponent = memo<DialogProps>(({ initFilters, onClose }) => {
  const { setHouseBookFilters } = useSetHouseBookFilterState();
  const {
    validate,
    validates,
    filters,
    addNewFilter,
    updateFilter,
    removeFilterById,
  } = useHouseBookEditorFilter({
    initFilters,
  });

  return (
    <ModalDialog isOpen onClose={onClose}>
      <div className={styles['dialog-container']}>
        <div className={`${styles['dialog-header']}`}>
          <div>フィルター設定</div>
        </div>
        <div className={`${styles['list-block']}`}>
          <HouseBookEditorFilterList
            filters={filters}
            validates={validates}
            updateFilter={updateFilter}
            removeFilter={removeFilterById}
          />
        </div>
        <div
          className={`${styles['dialog-footer']} ${styles['dialog-footer-skin']}`}
        >
          <div className={styles['add-button']}>
            <PrimaryButton
              title="+"
              onClick={(e) => {
                e?.stopPropagation();
                addNewFilter();
              }}
            />
          </div>

          <div className={styles['operation-btn-block']}>
            <OutlineCancelActionButton title="キャンセル" onClick={onClose} />
            <PrimaryOutlineButton
              disabled={!validate}
              title="設定"
              onClick={() => {
                setHouseBookFilters(filters);
                onClose();
              }}
            />
          </div>
        </div>
      </div>
    </ModalDialog>
  );
});

type Props = Omit<
  {
    initFilters: HouseBookFilter[] | undefined;
  } & ComponentProps<typeof ModalDialog>,
  'children'
>;

const HouseBookEditorFilterModalDialog = memo<Props>(
  ({ initFilters, isOpen, onClose }) => {
    if (!isOpen) {
      return null;
    }

    return <DialogComponent initFilters={initFilters} onClose={onClose} />;
  },
);

export { HouseBookEditorFilterModalDialog };

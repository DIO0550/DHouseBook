import { PrimaryButton, SecondaryButton } from '@/components/Elements';
import { ModalDialog } from '@/components/Elements/ModalDialog/ModalDialog';
import { HouseBookFilter } from '@/stores/atoms/houseBookFilterState';
import { memo, ComponentProps } from 'react';
import { useHouseBookEditorFilter } from '@/features/filter/hooks/useHouseBookEditorFilter';
import { useSetHouseBookFilterState } from '@/stores/atoms/useSetHouseBookFilterState';
import { HouseBookEditorFilterList } from '../HouseBookEditorFilterList/HouseBookEditorFilterList';
import styles from './HouseBookEditorFilterModalDialog.module.scss';

type DialogProps = {
  initFilters: HouseBookFilter[] | undefined;
  onClose: () => void;
};

const DialogComponent = memo<DialogProps>(({ initFilters, onClose }) => {
  const { setHouseBookFilters } = useSetHouseBookFilterState();
  const { filters, addNewFilter, updateFilter, removeFilterById } =
    useHouseBookEditorFilter({
      initFilters,
    });

  return (
    <ModalDialog isOpen onClose={onClose}>
      <div>
        <div>
          <div>フィルター設定</div>
        </div>
        <HouseBookEditorFilterList
          filters={filters}
          updateFilter={updateFilter}
          removeFilter={removeFilterById}
        />
        <div>
          <div className={styles['add-button']}>
            <PrimaryButton
              title="追加"
              onClick={(e) => {
                e?.stopPropagation();
                addNewFilter();
              }}
            />
          </div>

          <div className={styles['operation-btn']}>
            <PrimaryButton
              onClick={() => {
                setHouseBookFilters(filters);
              }}
              title="設定"
            />
            <SecondaryButton title="キャンセル" onClick={onClose} />
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

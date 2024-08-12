import { PrimaryButton } from '@/components/Elements';
import { ModalDialog } from '@/components/Elements/ModalDialog/ModalDialog';
import { HouseBookFilter } from '@/stores/atoms/houseBookFilterState';
import { memo, ComponentProps } from 'react';
import { useHouseBookEditorFilter } from '@/features/filter/hooks/useHouseBookEditorFilter';
import { HouseBookEditorFilterList } from '../HouseBookEditorFilterList/HouseBookEditorFilterList';

type DialogProps = {
  initFilters: HouseBookFilter[] | undefined;
  onClose: () => void;
};

const DialogComponent = memo<DialogProps>(({ initFilters, onClose }) => {
  const { filters, addNewFilter, removeFilterById } = useHouseBookEditorFilter({
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
          removeFilter={removeFilterById}
        />
        <div>
          <PrimaryButton
            title="追加"
            onClick={(e) => {
              e?.stopPropagation();
              addNewFilter();
            }}
          />
          <button type="button">設定</button>
          <button type="button" onClick={onClose}>
            キャンセル
          </button>
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

/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { memo } from 'react';
import { useModalDialog } from '@/hooks/dialogs/useModalDialog';
import { useHouseBookFilterState } from '@/stores/atoms/useHouseBookFilterState';
import { useThemeContext } from '@/providers/themes/hooks/useThemeContext';
import { PrimaryButton } from '@/components/Elements';
import styles from './HouseBookEditorFilter.module.scss';
import { useHouseBookEditorFilter } from '../../hooks/useHouseBookEditorFilter';
import { HouseBookEditorFilterList } from '../HouseBookEditorFilterList/HouseBookEditorFilterList';

const HouseBookEditorFilter = memo(() => {
  const { isApplyFilter } = useHouseBookFilterState();
  const { showDialog, closeDialog, ModalDialog } = useModalDialog();
  const { themeColor } = useThemeContext();
  const { filters, addNewFilter } = useHouseBookEditorFilter();

  return (
    <>
      <ModalDialog>
        <div>
          <div>
            <div>フィルター設定</div>
          </div>
          <HouseBookEditorFilterList filters={filters} />
          <div>
            <PrimaryButton
              title="追加"
              onClick={(e) => {
                e?.stopPropagation();
                addNewFilter();
              }}
            />
            <button type="button" onClick={closeDialog}>
              キャンセル
            </button>
          </div>
        </div>
      </ModalDialog>
      <div>
        <button
          className={`${styles['filter-btn']} ${styles['filter-btn-skin']} ${
            isApplyFilter ? styles.on : ''
          } ${styles[themeColor]}`}
          type="button"
          onClick={showDialog}
        >
          フィルター
        </button>
      </div>
    </>
  );
});

export { HouseBookEditorFilter };

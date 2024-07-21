import { memo } from 'react';
import { useModalDialog } from '@/hooks/dialogs/useModalDialog';
import { useHouseBookFilterState } from '@/stores/atoms/useHouseBookFilterState';
import { useThemeContext } from '@/providers/themes/hooks/useThemeContext';
import styles from './HouseBookEditorFilter.module.scss';

const HouseBookEditorFilter = memo(() => {
  const { isApplyFilter } = useHouseBookFilterState();
  const { showDialog, closeDialog, ModalDialog } = useModalDialog();
  const { themeColor } = useThemeContext();

  return (
    <>
      <ModalDialog>
        <div>
          <div>フィルター設定</div>
        </div>
        <div>
          <button type="button" onClick={closeDialog}>
            キャンセル
          </button>
        </div>
        ``
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

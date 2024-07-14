import { memo } from 'react';
import { useModalDialog } from '@/hooks/dialogs/useModalDialog';

const HouseBookEditorFilter = memo(() => {
  const { showDialog, closeDialog, ModalDialog } = useModalDialog();

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
      </ModalDialog>
      <div>
        <button type="button" onClick={showDialog}>
          フィルター
        </button>
      </div>
    </>
  );
});

export { HouseBookEditorFilter };

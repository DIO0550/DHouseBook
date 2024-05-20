import { HouseBookDate } from '@/features/files/utils/houseBookDate';
import { useModalDialog } from '@/hooks/dialogs/useModalDialog';
import { memo } from 'react';
import { HouseBookDatePicker } from '../HouseBookDatePicker/HouseBookDatePicker';
import { Month } from '../HouseBookDatePickerMonth/month';

type Props = {
  date: HouseBookDate | undefined;
  onChangeDate: (date: HouseBookDate) => void;
};

const HouseBookEditorDate = memo<Props>(({ date, onChangeDate }) => {
  const { showDialog, closeDialog, ModalDialog } = useModalDialog();

  return (
    <>
      {date && (
        <ModalDialog>
          <HouseBookDatePicker
            initialYear={date.year}
            initialMonth={date.month as Month}
            onSelectDate={(houseBookDate: HouseBookDate) => {
              closeDialog();
              onChangeDate(houseBookDate);
            }}
          />
        </ModalDialog>
      )}
      <button type="button" onClick={showDialog}>
        <div>{date ? `${date.year}年${date.month}月` : '----'}</div>
      </button>
    </>
  );
});

export { HouseBookEditorDate };

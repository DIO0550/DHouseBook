import { memo } from 'react';
import { PrimaryLabelRadioButton } from '@/components/Elements/PrimaryLabelRadioButton/PrimaryLabelRadioButton';
import { Month } from './month';

type Props = {
  month: Month;
  isSelected: boolean;
  onClick?: (month: Month) => void;
};

const HouseBookDatePickerMonth = memo<Props>(
  ({ month, isSelected, onClick }) => (
    <PrimaryLabelRadioButton
      id={`${month}`}
      name="house-book-date-picker"
      onChange={() => {
        onClick?.(month);
      }}
      checked={isSelected}
      label={`${month}月`}
    />
  ),
);

export { HouseBookDatePickerMonth };

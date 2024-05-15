import { useState } from 'react';
import { Month } from '../HouseBookDatePickerMonth/month';

type Props = {
  initialYear: number;
  initialMonth: Month;
};

const useDatePicker = ({ initialYear, initialMonth }: Props) => {
  const [year, setYear] = useState(initialYear);
  const [month, setMonth] = useState(initialMonth);

  const incrementYear = () => {
    setYear((cur) => cur + 1);
  };

  const decrementYear = () => {
    setYear((cur) => cur - 1);
  };

  const changeMonth = (value: Month) => {
    setMonth(value);
  };

  return {
    year,
    incrementYear,
    decrementYear,
    month,
    changeMonth,
  };
};
export { useDatePicker };

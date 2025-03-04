import { memo } from 'react';
import { HouseBookDate } from '@/features/files/utils/houseBookDate';
import { PrimaryBlock } from '@/components/Elements/PrimaryBlock';
import { useDatePicker } from './useDatePicker';
import styles from './HouseBookDatePicker.module.scss';
import { Month, Months } from '../HouseBookDatePickerMonth/month';
import { HouseBookDatePickerMonth } from '../HouseBookDatePickerMonth/HouseBookDatePickerMonth';

type Props = {
  initialYear: number;
  initialMonth: Month;
  onSelectDate: (date: HouseBookDate) => void;
};

const HouseBookDatePicker = memo<Props>(
  ({ initialYear, initialMonth, onSelectDate }) => {
    const { year, incrementYear, decrementYear, month, changeMonth } =
      useDatePicker({
        initialYear,
        initialMonth,
      });

    return (
      <div>
        <div className={`${styles.container}`}>
          <PrimaryBlock>
            <div
              className={`${styles['year-block']} ${styles['year-block-skin']}`}
            >
              <button
                className={`${styles['decrement-btn']}`}
                aria-label="decrement"
                type="button"
                onClick={decrementYear}
              />
              <div className={`${styles.year} ${styles['year-skin']}`}>
                {year}
              </div>
              <button
                className={`${styles['increment-btn']}`}
                aria-label="increment"
                type="button"
                onClick={incrementYear}
              />
            </div>
          </PrimaryBlock>

          <div className={`${styles['month-block']}`}>
            {Months.map((m) => (
              <div
                className={`${styles.month} ${styles['month-skin']}`}
                key={m}
              >
                <HouseBookDatePickerMonth
                  month={m}
                  isSelected={m === month}
                  onClick={(v: Month) => {
                    changeMonth(v);
                    onSelectDate({
                      year,
                      month: v,
                    });
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  },
);

export { HouseBookDatePicker };

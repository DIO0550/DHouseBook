import React from 'react';
import useBooksDate from '../../hooks/useBooksDate';

import dateControlStyle from './DateControl.module.scss';

const DateControlComponent: React.VFC = () => {
  const { dateStr, incrementMonth, decrementMonth } = useBooksDate();
  const date = new Date(dateStr);
  const dateBlockValue = `${date.getFullYear()}年${date.getMonth() + 1}月`;

  return (
    <div className={dateControlStyle['date-control-container']}>
      <div className={dateControlStyle['date-control-block']}>
        <div className={dateControlStyle['date-button-block']}>
          <button
            type="button"
            className={`${dateControlStyle['date-button']} ${dateControlStyle.left}`}
            onClick={decrementMonth}
          >
            &lt;
          </button>
        </div>
        <div className={dateControlStyle['date-block']}>{dateBlockValue}</div>
        <div className={dateControlStyle['date-button-block']}>
          <button
            type="button"
            className={`${dateControlStyle['date-button']} ${dateControlStyle.right}`}
            onClick={incrementMonth}
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default DateControlComponent;

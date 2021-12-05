import React from 'react';
import useBooksDate from '../../hooks/useBooksDate';

import dateControlStyle from './DateControl.module.scss';

const DateControlComponent: React.VFC = () => {
  const { dateStr, incrementMonth, decrementMonth } = useBooksDate();
  const date = new Date(dateStr);
  return (
    <div className={dateControlStyle['date-control-container']}>
      <div className={dateControlStyle['date-control-block']}>
        <div className={dateControlStyle['date-button-block']}>
          <button
            className={dateControlStyle['date-button']}
            onClick={decrementMonth}
          >
            &lt;
          </button>
        </div>
        <div className={dateControlStyle['date-block']}>
          {date.getFullYear()}年{date.getMonth() + 1}月
        </div>
        <div className={dateControlStyle['date-button-block']}>
          <button
            className={dateControlStyle['date-button']}
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

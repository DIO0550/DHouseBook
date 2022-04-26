/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import useBooksDate from '../../hooks/useBooksDate';

import dateControlStyle from './DateControl.module.scss';

const DateControlComponent: React.FC = () => {
  const { dateStr, incrementMonth, decrementMonth } = useBooksDate();
  const date = new Date(dateStr);
  const dateBlockValue = `${date.getFullYear()}年${date.getMonth() + 1}月`;

  return (
    <div className={dateControlStyle['date-control-container']}>
      <div className={dateControlStyle['date-control-block']}>
        <div className={dateControlStyle['date-button-block']}>
          <button
            type="button"
            className={`${dateControlStyle['date-button']}`}
            onClick={decrementMonth}
          >
            <div className={`${dateControlStyle.left}`} />
          </button>
        </div>
        <div className={dateControlStyle['date-block']}>{dateBlockValue}</div>
        <div className={dateControlStyle['date-button-block']}>
          <button
            type="button"
            className={`${dateControlStyle['date-button']}`}
            onClick={incrementMonth}
          >
            <div className={`${dateControlStyle.right}`} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DateControlComponent;

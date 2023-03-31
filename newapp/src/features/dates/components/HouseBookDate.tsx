import React from 'react';
import { useBookDateState } from '@/hooks/states/useBookDateState';

const HouseBookDate = React.memo(() => {
  const { year, month, incrementDateMonth, decrementDateMonth } =
    useBookDateState();

  return (
    <div>
      <button
        type="button"
        onClick={() => {
          decrementDateMonth();
        }}
      >
        <div>{'<'}</div>
      </button>
      <div>
        {year}年{month}月
      </div>
      <button type="button" onClick={incrementDateMonth}>
        <div>{'>'}</div>
      </button>
    </div>
  );
});

export { HouseBookDate };

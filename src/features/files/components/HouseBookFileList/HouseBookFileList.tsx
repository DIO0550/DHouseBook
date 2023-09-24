import React from 'react';
import { houseBookIds } from '@/stores/atoms/houseBookFileState';
import { useRecoilValue } from 'recoil';
import { HouseBookFileCell } from '../HouseBookFileCell';

const HouseBookList = React.memo(() => {
  const ids = useRecoilValue(houseBookIds);

  return (
    <ul>
      {ids.map((id) => (
        <HouseBookFileCell key={id} fileId={id} />
      ))}
    </ul>
  );
});

export { HouseBookList };

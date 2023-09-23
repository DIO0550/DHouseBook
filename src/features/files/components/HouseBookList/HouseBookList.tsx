import React from 'react';
import { useActiveFileIdState } from '@/stores/atoms/useActiveFileIdState';
import { HouseBookFileProperty } from '../../utils/houseBookFileProperty';
import { HouseBookListCell } from '../HouseBookListCell';

type Props = {
  houseBookFiles: HouseBookFileProperty[] | undefined;
};

const HouseBookList = React.memo<Props>(({ houseBookFiles = [] }) => {
  const { isActive } = useActiveFileIdState();

  return (
    <ul>
      {houseBookFiles.map((file) => {
        const isActiveValue = isActive(file.id);

        return (
          <HouseBookListCell
            key={file.id}
            isActive={isActiveValue}
            fileId={file.id}
            filePath={file.filePath}
          />
        );
      })}
    </ul>
  );
});

export { HouseBookList };

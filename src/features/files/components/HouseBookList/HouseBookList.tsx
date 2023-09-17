import React from 'react';
import { useActiveFileIdState } from '@/stores/atoms/useActiveFileIdState';
import { HouseBookFile } from '../../utils/houseBookFile';
import { HouseBookListCell } from '../HouseBookListCell';

type Props = {
  houseBookFiles: HouseBookFile[] | undefined;
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

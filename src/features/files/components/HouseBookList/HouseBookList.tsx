import React from 'react';
import { HouseBookFile } from '../../utils/houseBookFile';
import { HouseBookListCell } from '../HouseBookListCell';

type Props = {
  houseBookFiles: HouseBookFile[] | undefined;
};

const HouseBookList = React.memo<Props>(({ houseBookFiles = [] }) => (
  <div>
    {houseBookFiles.map((file) => (
      <HouseBookListCell
        key={file.id}
        fileName="ファイル名"
        filePath={file.filePath}
      />
    ))}
  </div>
));

export { HouseBookList };

import React from 'react';
import { HouseBookFile } from '../../utils/houseBookFile';
import { HouseBookListCell } from '../HouseBookListCell';

type Props = {
  houseBookFiles: HouseBookFile[] | undefined;
};

const HouseBookList = React.memo<Props>(({ houseBookFiles = [] }) => (
  <ul>
    {houseBookFiles.map((file) => (
      <HouseBookListCell key={file.id} filePath={file.filePath} />
    ))}
  </ul>
));

export { HouseBookList };

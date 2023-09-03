import { memo } from 'react';

type Props = {
  fileName: string;
  filePath: string;
};

const HouseBookListCell = memo<Props>(({ fileName, filePath }) => (
  <div>
    <div>{fileName}</div>
    <div>{filePath}</div>
  </div>
));

export { HouseBookListCell };

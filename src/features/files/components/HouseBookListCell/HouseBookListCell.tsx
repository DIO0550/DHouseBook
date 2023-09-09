import { memo } from 'react';
import { FilePath } from '@/features/files/utils/filePath';
import styles from './HouseBookListCell.module.scss';

type Props = {
  filePath: string;
};

const HouseBookListCell = memo<Props>(({ filePath }) => {
  const fileName = FilePath.getFileName(filePath);

  return (
    <li>
      <div>
        <div className={styles['file-name']}>{fileName}</div>
        <div className={styles['file-path']}>{filePath}</div>
      </div>
    </li>
  );
});

export { HouseBookListCell };

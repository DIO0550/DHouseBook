import { memo } from 'react';
import { FilePath } from '@/features/files/utils/filePath';
import { useThemeContext } from '@/components/Providers';
import { useSetActiveFileIdState } from '@/stores/atoms/useSetActiveFileIdState';
import { useRecoilValue } from 'recoil';
import { houseBookFilePropertyState } from '@/stores/atoms/houseBookFileState';
import { useActiveFileIdState } from '@/stores/atoms/useActiveFileIdState';
import styles from './HouseBookFileCell.module.scss';

type Props = {
  fileId: string;
};

const HouseBookFileCell = memo<Props>(({ fileId }) => {
  const themeColor = useThemeContext();
  const fileProperty = useRecoilValue(
    houseBookFilePropertyState({ id: fileId }),
  );
  const { isActive } = useActiveFileIdState();
  const fileName = FilePath.getFileName(fileProperty.filePath);
  const { setActiveFileId } = useSetActiveFileIdState();
  const handleClick = () => {
    setActiveFileId(fileId);
  };

  return (
    <li>
      <button
        className={`${styles['file-container']} ${styles[themeColor]} ${
          isActive(fileId) ? styles['is-active'] : ''
        }`}
        type="button"
        onClick={handleClick}
      >
        <div className={`${styles.name}`}>{fileName}</div>
        <div className={`${styles.name}`}>{fileProperty.filePath}</div>
      </button>
    </li>
  );
});

export { HouseBookFileCell };

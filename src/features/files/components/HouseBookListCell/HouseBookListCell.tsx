import { memo } from 'react';
import { FilePath } from '@/features/files/utils/filePath';
import { useThemeContext } from '@/components/Providers';
import { useSetActiveFileIdState } from '@/stores/atoms/useSetActiveFileIdState';
import styles from './HouseBookListCell.module.scss';

type Props = {
  isActive: boolean;
  fileId: string;
  filePath: string;
};

const HouseBookListCell = memo<Props>(({ fileId, isActive, filePath }) => {
  const fileName = FilePath.getFileName(filePath);
  const themeColor = useThemeContext();
  const { setActiveFileId } = useSetActiveFileIdState();
  const handleClick = () => {
    setActiveFileId(fileId);
  };

  return (
    <li>
      <button
        className={`${styles['file-container']} ${styles[themeColor]} ${
          isActive ? styles['is-active'] : ''
        }`}
        type="button"
        onClick={handleClick}
      >
        <div className={`${styles.name}`}>{fileName}</div>
        <div className={`${styles.name}`}>{filePath}</div>
      </button>
    </li>
  );
});

export { HouseBookListCell };

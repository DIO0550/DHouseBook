import { memo } from 'react';
import { FilePath } from '@/features/files/utils/filePath';
import { useThemeContext } from '@/components/Providers';
import { useSetActiveFileIdState } from '@/stores/atoms/useSetActiveFileIdState';
import { useRecoilValue } from 'recoil';
import { houseBookFilePropertyState } from '@/stores/atoms/houseBookState';
import { useActiveFileIdState } from '@/stores/atoms/useActiveFileIdState';
import styles from './HouseBookFileCell.module.scss';
import { FileState } from '../../utils/houseBookFileProperty';

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
        <div className={`${styles['file-info-block']}`}>
          <div
            className={`${styles['file-info']} ${styles['file-info-skin']} ${styles['file-name']} ${styles['file-name-skin']}`}
          >
            {fileName}
          </div>

          <div
            className={`${styles['file-info']} ${styles['file-info-skin']} ${styles['file-path']}`}
          >
            {fileProperty.filePath}
          </div>
        </div>

        <div
          className={`${styles['file-info']} ${styles['file-info-skin']} ${styles.dirty}`}
        >
          {fileProperty.fileState === FileState.Dirty ||
          fileProperty.fileState === FileState.NewFile
            ? '●'
            : ''}
        </div>
      </button>
    </li>
  );
});

export { HouseBookFileCell };

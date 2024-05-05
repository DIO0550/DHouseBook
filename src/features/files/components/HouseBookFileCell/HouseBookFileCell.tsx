import { memo } from 'react';
import { FilePath } from '@/features/files/utils/filePath';
import { useThemeContext } from '@/providers/themes/hooks/useThemeContext';
import { useSetActiveFileIdState } from '@/stores/atoms/useSetActiveFileIdState';
import { useRecoilValue } from 'recoil';
import { houseBookFilePropertyState } from '@/stores/atoms/houseBookState';
import { useActiveFileIdState } from '@/stores/atoms/useActiveFileIdState';
import styles from './HouseBookFileCell.module.scss';
import {
  HouseBookFileState,
  HouseBookFileProperty,
} from '../../utils/houseBookFileProperty';
import { useHouseBookFileClose } from '../../hooks/useHouseBookFileClose';

type Props = {
  fileId: string;
};

const fileName = (path: string, isNewFile: boolean) => {
  if (isNewFile) {
    return HouseBookFileProperty.newFileName;
  }

  return FilePath.getFileName(path);
};

const filePath = (path: string, isNewFile: boolean) => {
  if (isNewFile) {
    return HouseBookFileProperty.newFilePath;
  }

  return path;
};

const HouseBookFileCell = memo<Props>(({ fileId }) => {
  const { themeColor } = useThemeContext();
  const { closeHouseBookFile } = useHouseBookFileClose({ id: fileId });
  const fileProperty = useRecoilValue(
    houseBookFilePropertyState({ id: fileId }),
  );
  const { isActive } = useActiveFileIdState();
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
            {fileName(fileProperty.filePath, fileProperty.isNewFile)}
          </div>

          <div
            className={`${styles['file-info']} ${styles['file-info-skin']} ${styles['file-path']}`}
          >
            {filePath(fileProperty.filePath, fileProperty.isNewFile)}
          </div>
        </div>

        <div
          className={`${styles['file-info']} ${styles['file-info-skin']} ${styles.dirty}`}
        >
          {fileProperty.fileState === HouseBookFileState.Dirty ? '●' : ''}
        </div>
        <div className={`${styles['close-btn-wrapper']}`}>
          <button
            className={`${styles.close} ${styles['close-skin']} `}
            aria-label="close"
            type="button"
            onClick={() => {
              void closeHouseBookFile();
            }}
          />
        </div>
      </button>
    </li>
  );
});

export { HouseBookFileCell };

import { PrimaryOutlineButton } from '@/components/Elements/PrimaryOutlineButton/PrimaryOutlineButton';
import { memo } from 'react';
import { useThemeContext } from '@/providers/themes/hooks/useThemeContext';
import styles from './HouseBookEditButton.module.scss';

type Props = {
  // 追加ボタンクリック
  onClick?: () => void;
};

const HouseBookEditButton = memo<Props>(({ onClick }) => {
  const { themeColor } = useThemeContext();

  return (
    <div
      className={`${styles['edit-btn-block']} ${styles['edit-btn-block-skin']}`}
    >
      <PrimaryOutlineButton
        className={`${styles['edit-btn']}`}
        onClick={onClick}
      >
        <div
          aria-hidden
          className={`${styles.icon} ${styles['icon-skin']} ${styles[themeColor]}`}
        />
      </PrimaryOutlineButton>
    </div>
  );
});

export { HouseBookEditButton };

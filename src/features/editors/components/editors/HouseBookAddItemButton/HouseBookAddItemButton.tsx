import { PrimaryOutlineButton } from '@/components/Elements/PrimaryOutlineButton/PrimaryOutlineButton';
import { memo } from 'react';
import styles from './HouseBookAddItemButton.module.scss';

type Props = {
  // 追加ボタンクリック
  onClick: () => void;
};

const HouseBookAddItemButton = memo<Props>(({ onClick }) => (
  <div className={`${styles['add-btn-block']} ${styles['add-btn-block-skin']}`}>
    <PrimaryOutlineButton
      className={`${styles['add-btn']} ${styles['add-btn-skin']}`}
      onClick={onClick}
    >
      <div>+</div>
    </PrimaryOutlineButton>
  </div>
));

export { HouseBookAddItemButton };

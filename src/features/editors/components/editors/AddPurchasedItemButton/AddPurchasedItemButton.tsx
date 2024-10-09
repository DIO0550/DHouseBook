import { PrimaryOutlineButton } from '@/components/Elements/PrimaryOutlineButton/PrimaryOutlineButton';
import { memo } from 'react';
import styles from './AddPurchasedItemButton.module.scss';

type Props = {
  // 追加ボタンクリック
  onClick: () => void;
};

const AddPurchasedItemButton = memo<Props>(({ onClick }) => (
  <div className={`${styles['add-btn-block']} ${styles['add-btn-block-skin']}`}>
    <PrimaryOutlineButton
      className={`${styles['add-btn']} ${styles['add-btn-skin']}`}
      title="+"
      onClick={onClick}
    />
  </div>
));

export { AddPurchasedItemButton };

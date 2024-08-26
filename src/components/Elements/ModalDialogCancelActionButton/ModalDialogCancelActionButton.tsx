import { memo, MouseEventHandler } from 'react';
import styles from './ModalDialogCancelActionButton.module.scss';

type Props = {
  title: string;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
};

const ModalDialogCancelActionButton = memo<Props>(({ title, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className={styles['cancel-action-btn']}
  >
    <div>{title}</div>
  </button>
));

export { ModalDialogCancelActionButton };

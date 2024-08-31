import { memo, MouseEventHandler } from 'react';
import styles from './OutlineCancelActionButton.module.scss';

type Props = {
  title: string;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
};

const OutlineCancelActionButton = memo<Props>(({ title, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className={`${styles['cancel-action-btn']} ${styles['cancel-action-btn-skin']}`}
  >
    <div>{title}</div>
  </button>
));

export { OutlineCancelActionButton };

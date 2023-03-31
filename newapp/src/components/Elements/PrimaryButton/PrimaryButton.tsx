import { memo, MouseEvent } from 'react';
import styles from './PrimaryButton.module.scss';

type Props = {
  title: string;
  handleClick: (e?: MouseEvent) => void;
};

const PrimaryButton = memo<Props>(({ title, handleClick }) => (
  <button
    type="button"
    onClick={handleClick}
    className={`${styles.primary} ${styles.blue}`}
  >
    <div>{title}</div>
  </button>
));

export { PrimaryButton };

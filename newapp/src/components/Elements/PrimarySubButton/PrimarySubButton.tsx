import { memo, MouseEvent } from 'react';
import styles from './PrimarySubButton.module.scss';
import { useThemeContext } from '@/components/Providers';

type Props = {
  title: string;
  handleClick: (e?: MouseEvent) => void;
};

const PrimarySubButton = memo<Props>(({ title, handleClick }) => {
  const theme = useThemeContext();

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`${styles['primary-sub']} ${styles[theme]}`}
    >
      <div>{title}</div>
    </button>
  );
});

export { PrimarySubButton };

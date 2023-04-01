import { memo, MouseEvent } from 'react';
import styles from './SecondaryButton.module.scss';
import { useThemeContext } from '@/components/Providers';

type Props = {
  title: string;
  handleClick: (e?: MouseEvent) => void;
};

const SecondaryButton = memo<Props>(({ title, handleClick }) => {
  const theme = useThemeContext();

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`${styles.secondary} ${styles[theme]}`}
    >
      <div>{title}</div>
    </button>
  );
});

export { SecondaryButton };

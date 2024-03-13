import { memo, MouseEvent } from 'react';
import { useThemeContext } from '@/providers/themes/hooks/useThemeContext';
import styles from './SecondaryButton.module.scss';

type Props = {
  title: string;
  handleClick: (e?: MouseEvent) => void;
};

const SecondaryButton = memo<Props>(({ title, handleClick }) => {
  const { themeColor } = useThemeContext();

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`${styles.secondary} ${styles[themeColor]}`}
    >
      <div>{title}</div>
    </button>
  );
});

export { SecondaryButton };

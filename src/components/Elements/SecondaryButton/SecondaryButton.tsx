import { memo, MouseEvent } from 'react';
import { useThemeContext } from '@/providers/themes/hooks/useThemeContext';
import styles from './SecondaryButton.module.scss';

type Props = {
  title: string;
  onClick: (e?: MouseEvent) => void;
};

const SecondaryButton = memo<Props>(({ title, onClick }) => {
  const { themeColor } = useThemeContext();

  return (
    <button
      type="button"
      onClick={onClick}
      className={`${styles.secondary} ${styles[themeColor]}`}
    >
      <div>{title}</div>
    </button>
  );
});

export { SecondaryButton };

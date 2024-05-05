import { memo, MouseEvent } from 'react';
import { useThemeContext } from '@/providers/themes/hooks/useThemeContext';
import styles from './PrimaryButton.module.scss';

type Props = {
  title: string;
  onClick: (e?: MouseEvent) => void;
};

const PrimaryButton = memo<Props>(({ title, onClick }) => {
  const { themeColor } = useThemeContext();

  return (
    <button
      type="button"
      onClick={onClick}
      className={`${styles.primary} ${styles[themeColor]}`}
    >
      <div>{title}</div>
    </button>
  );
});

export { PrimaryButton };

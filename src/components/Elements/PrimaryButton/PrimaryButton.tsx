import { memo, MouseEvent } from 'react';
import { useThemeContext } from '@/providers/themes/hooks/useThemeContext';
import styles from './PrimaryButton.module.scss';

type Props = {
  title: string;
  handleClick: (e?: MouseEvent) => void;
};

const PrimaryButton = memo<Props>(({ title, handleClick }) => {
  const { themeColor } = useThemeContext();

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`${styles.primary} ${styles[themeColor]}`}
    >
      <div>{title}</div>
    </button>
  );
});

export { PrimaryButton };

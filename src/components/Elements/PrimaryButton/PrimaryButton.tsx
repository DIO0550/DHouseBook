import { memo, MouseEvent } from 'react';
import styles from './PrimaryButton.module.scss';
import { useThemeContext } from '@/components/Providers';

type Props = {
  title: string;
  handleClick: (e?: MouseEvent) => void;
};

const PrimaryButton = memo<Props>(({ title, handleClick }) => {
  const theme = useThemeContext();

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`${styles.primary} ${styles[theme]}`}
    >
      <div>{title}</div>
    </button>
  );
});

export { PrimaryButton };

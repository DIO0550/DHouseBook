import { memo, MouseEvent } from 'react';
import { useThemeContext } from '@/components/Providers';
import styles from './PrimaryButton.module.scss';

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

import { memo, MouseEvent } from 'react';
import { useThemeContext } from '@/providers/themes/hooks/useThemeContext';
import styles from './PrimarySubButton.module.scss';

type Props = {
  title: string;
  onClick: (e?: MouseEvent) => void;
};

const PrimarySubButton = memo<Props>(({ title, onClick }) => {
  const { themeColor } = useThemeContext();

  return (
    <button
      type="button"
      onClick={onClick}
      className={`${styles['primary-sub']} ${styles[themeColor]}`}
    >
      <div>{title}</div>
    </button>
  );
});

export { PrimarySubButton };

import { memo, MouseEventHandler } from 'react';
import { useThemeContext } from '@/providers/themes/hooks/useThemeContext';
import styles from './PrimaryOutlineButton.module.scss';

type Props = {
  title: string;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
};

const PrimaryOutlineButton = memo<Props>(({ title, onClick }) => {
  const { themeColor } = useThemeContext();

  return (
    <button
      type="button"
      onClick={onClick}
      className={`${styles['outline-btn']} ${styles['outline-btn-skin']} ${styles[themeColor]}`}
    >
      <div>{title}</div>
    </button>
  );
});

export { PrimaryOutlineButton };

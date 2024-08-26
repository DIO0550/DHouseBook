import { memo, MouseEventHandler } from 'react';
import { useThemeContext } from '@/providers/themes/hooks/useThemeContext';
import styles from './ModalDialogActionButton.module.scss';

type Props = {
  title: string;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
};

const ModalDialogActionButton = memo<Props>(({ title, onClick }) => {
  const { themeColor } = useThemeContext();

  return (
    <button
      type="button"
      onClick={onClick}
      className={`${styles['action-btn']} ${styles[themeColor]}`}
    >
      <div>{title}</div>
    </button>
  );
});

export { ModalDialogActionButton };

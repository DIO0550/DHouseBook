import { ButtonHTMLAttributes, memo } from 'react';
import { useThemeContext } from '@/providers/themes/hooks/useThemeContext';
import styles from './PrimaryOutlineButton.module.scss';

type Props = {
  title: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const PrimaryOutlineButton = memo<Props>((props) => {
  const { title, className, ...buttonProps } = props;
  const { themeColor } = useThemeContext();

  return (
    <button
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...buttonProps}
      type="button"
      className={`${styles['outline-btn']} ${styles['outline-btn-skin']} ${styles[themeColor]} ${className}`}
    >
      <div>{title}</div>
    </button>
  );
});

export { PrimaryOutlineButton };

// eslint-disable-next-line import/order
import styles from './PrimaryOutlineButton.module.scss';
import { ButtonHTMLAttributes, memo } from 'react';
import { useThemeContext } from '@/providers/themes/hooks/useThemeContext';

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

const PrimaryOutlineButton = memo<Props>((props) => {
  const { children, className, ...buttonProps } = props;
  const { themeColor } = useThemeContext();

  return (
    <button
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...buttonProps}
      type="button"
      className={`${styles['outline-btn']} ${styles['outline-btn-skin']} ${styles[themeColor]} ${className}`}
    >
      {children}
    </button>
  );
});

export { PrimaryOutlineButton };

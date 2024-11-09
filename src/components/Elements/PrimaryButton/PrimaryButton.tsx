import { ButtonHTMLAttributes, memo } from 'react';
import { useThemeContext } from '@/providers/themes/hooks/useThemeContext';
import styles from './PrimaryButton.module.scss';

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

const PrimaryButton = memo<Props>((props) => {
  const { themeColor } = useThemeContext();
  const { children, className, ...buttonProps } = props;

  return (
    <button
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...buttonProps}
      type="button"
      className={`${styles.primary} ${styles[themeColor]} ${className}`}
    >
      {children}
    </button>
  );
});

export { PrimaryButton };

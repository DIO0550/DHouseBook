import { ButtonHTMLAttributes, memo, ReactNode } from 'react';
import { useThemeContext } from '@/providers/themes/hooks/useThemeContext';
import styles from './PrimarySwitchButton.module.scss';

type Props = {
  children: ReactNode;
  checked: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const PrimarySwitchButton = memo<Props>((props) => {
  const { children, checked, ...buttonProps } = props;
  const { themeColor } = useThemeContext();

  return (
    <button
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...buttonProps}
      type="button"
      className={`${styles['switch-btn']} ${styles['switch-btn-skin']} ${
        styles[themeColor]
      } ${checked ? styles.checked : ''}`}
    >
      {children}
    </button>
  );
});

export { PrimarySwitchButton };

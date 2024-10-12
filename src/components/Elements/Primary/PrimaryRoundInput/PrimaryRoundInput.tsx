import { InputHTMLAttributes, memo } from 'react';
import { useThemeContext } from '@/providers/themes/hooks/useThemeContext';
import styles from './PrimaryRoundInput.module.scss';

type Props = InputHTMLAttributes<HTMLInputElement>;

const PrimaryRoundInput = memo<Props>((props) => {
  const { themeColor } = useThemeContext();
  const { className, ...inputProps } = props;

  return (
    <input
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...inputProps}
      className={`${styles[themeColor]} ${styles.primary} ${styles['primary-skin']} ${className}`}
    />
  );
});

export { PrimaryRoundInput };

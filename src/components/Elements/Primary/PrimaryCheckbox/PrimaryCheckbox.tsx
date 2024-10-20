/* eslint-disable react/jsx-props-no-spreading */
import { useThemeContext } from '@/providers/themes/hooks/useThemeContext';
import { InputHTMLAttributes, memo } from 'react';
import styles from './PrimaryCheckbox.module.scss';

type Props = InputHTMLAttributes<HTMLInputElement>;

const PrimaryCheckbox = memo<Props>((props) => {
  const { className, ...inputProps } = props;
  const { themeColor } = useThemeContext();

  return (
    <input
      {...inputProps}
      type="checkbox"
      className={`${styles.input} ${styles['input-skin']} ${styles[themeColor]} ${className}`}
    />
  );
});

export { PrimaryCheckbox };

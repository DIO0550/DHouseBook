import { useThemeContext } from '@/providers/themes/hooks/useThemeContext';
import { InputHTMLAttributes, memo } from 'react';
import styles from './PrimaryThreeStateCheckbox.module.scss';

type Props = InputHTMLAttributes<HTMLInputElement> & {
  indeterminate?: boolean;
};

const PrimaryThreeStateCheckbox = memo<Props>(
  ({ indeterminate = false, ...props }) => {
    const { className, ...inputProps } = props;
    const { themeColor } = useThemeContext();

    return (
      <input
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...inputProps}
        type="checkbox"
        className={`${styles.input} ${styles['input-skin']} ${
          styles[themeColor]
        }
        } ${indeterminate ? styles.indeterminate : ''} ${className}`}
      />
    );
  },
);

export { PrimaryThreeStateCheckbox };

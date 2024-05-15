import { MouseEventHandler, memo } from 'react';
import { useThemeContext } from '@/providers/themes/hooks/useThemeContext';
import styles from './PrimaryLabelRadioButton.module.scss';

type Props = {
  id?: string;
  value?: string;
  label: string;
  name?: string;
  checked?: boolean;
  onChange: MouseEventHandler<HTMLInputElement> | undefined;
};

const PrimaryLabelRadioButton = memo<Props>(
  ({ id, value, label, name, checked, onChange }) => {
    const { themeColor } = useThemeContext();

    return (
      <>
        <input
          type="radio"
          id={id}
          value={value}
          name={name}
          onClick={onChange}
          checked={checked}
          className={`${styles.input}`}
        />
        <label htmlFor={id} className={`${styles.label} ${styles[themeColor]}`}>
          {label}
        </label>
      </>
    );
  },
);

export { PrimaryLabelRadioButton };

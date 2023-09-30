import { useThemeContext } from '@/components/Providers/ThemeProvider/ThemeProvider';
import { memo } from 'react';
import styles from './PrimaryColorInput.module.scss';

type Props = {
  // デフォルトの値
  defaultValue: string;
  // type
  type?: string;
  // 変更イベント
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
};

const PrimaryColorInput = memo<Props>(
  ({ defaultValue, type = 'text', onChange }) => {
    const theme = useThemeContext();

    return (
      <input
        className={`${styles.primary} ${styles[theme]}`}
        defaultValue={defaultValue}
        type={type}
        onChange={onChange}
      />
    );
  },
);

export { PrimaryColorInput };

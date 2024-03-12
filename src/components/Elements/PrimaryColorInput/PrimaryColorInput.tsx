import { memo } from 'react';
import { useThemeContext } from '@/providers/themes/hooks/useThemeContext';
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
    const { themeColor } = useThemeContext();

    return (
      <input
        className={`${styles.primary} ${styles[themeColor]}`}
        defaultValue={defaultValue}
        type={type}
        onChange={onChange}
      />
    );
  },
);

export { PrimaryColorInput };

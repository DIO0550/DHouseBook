import { memo, ReactNode } from 'react';
import { useThemeContext } from '@/providers/themes/hooks/useThemeContext';
import styles from './PrimaryBlock.module.scss';

type Props = {
  children: ReactNode;
};

const PrimaryBlock = memo<Props>(({ children }) => {
  const { themeColor } = useThemeContext();

  return (
    <div className={`${styles.primary} ${styles[themeColor]}`}>{children}</div>
  );
});

export { PrimaryBlock };

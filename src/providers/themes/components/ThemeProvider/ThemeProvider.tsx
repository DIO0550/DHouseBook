import { memo, ReactNode } from 'react';
import { ThemeColor } from './ThemeColor';
import { useThemeColor } from '../../hooks/useThemeColor';
import { ThemeContext } from './ThemeContext';

type ThemeProviderProps = {
  initialValue?: ThemeColor;
  children: ReactNode;
};

// Provider
export const ThemeProvider = memo<ThemeProviderProps>(
  ({ initialValue = ThemeColor.red, children }) => {
    const { themeColorState } = useThemeColor({ initialValue });

    return (
      <ThemeContext.Provider value={themeColorState}>
        {children}
      </ThemeContext.Provider>
    );
  },
);

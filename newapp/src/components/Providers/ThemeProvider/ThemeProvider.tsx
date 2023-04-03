import { createContext, memo, ReactNode, useContext } from 'react';

export const BookThemeColor = {
  red: 'red',
  purple: 'purple',
  blue: 'blue',
  cyan: 'cyan',
  green: 'green',
  yellow: 'yellow',
  orange: 'orange',
  gray: 'gray',
} as const;

export type BookThemeColor = typeof BookThemeColor[keyof typeof BookThemeColor];

const ThemeContext = createContext<BookThemeColor>(BookThemeColor.red);
export const useThemeContext = () => useContext(ThemeContext);

type ThemeProviderProps = {
  initialValue?: BookThemeColor;
  children: ReactNode;
};

// Provider
export const ThemeProvider = memo<ThemeProviderProps>(
  ({ initialValue = BookThemeColor.red, children }) => (
    <ThemeContext.Provider value={initialValue}>
      {children}
    </ThemeContext.Provider>
  ),
);

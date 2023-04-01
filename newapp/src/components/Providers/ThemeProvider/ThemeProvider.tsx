import { createContext, memo, ReactNode, useContext } from 'react';

const BookThemeColor = {
  red: 'red',
  purple: 'purple',
  blue: 'blue',
  cyan: 'cyan',
  green: 'green',
  yellow: 'yellow',
  orange: 'orange',
  gray: 'gray',
} as const;

type BookThemeColor = typeof BookThemeColor[keyof typeof BookThemeColor];

const ThemeContext = createContext<BookThemeColor>(BookThemeColor.red);
export const useThemeContext = () => useContext(ThemeContext);

type ThemeProviderProps = {
  children: ReactNode;
};

// Provider
export const ThemeProvider = memo<ThemeProviderProps>(({ children }) => (
  <ThemeContext.Provider value={BookThemeColor.red}>
    {children}
  </ThemeContext.Provider>
));

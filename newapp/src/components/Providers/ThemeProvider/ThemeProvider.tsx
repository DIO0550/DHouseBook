import { createContext, memo, ReactNode, useContext } from 'react';

type BookThemeColor = {
  primaryColor: string;
  primaryVariant: string;
  secondaryColor: string;
};

const BookThemeColor: { [key in string]: BookThemeColor } = {
  white: {
    primaryColor: '#ffffff',
    primaryVariant: '#ffffff',
    secondaryColor: '#ffffff',
  } as const,
} as const;

const ThemeContext = createContext(BookThemeColor.white);
export const useThemeContext = () => useContext(ThemeContext);

type ThemeProviderProps = {
  children: ReactNode;
};

// Provider
export const ThemeProvider = memo<ThemeProviderProps>(({ children }) => (
  <ThemeContext.Provider value={BookThemeColor.white}>
    {children}
  </ThemeContext.Provider>
));

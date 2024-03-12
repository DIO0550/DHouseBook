import { createContext } from 'react';
import { ThemeColorState } from '@/providers/themes/hooks/useThemeColor';

export const ThemeContext = createContext<ThemeColorState>(
  {} as ThemeColorState,
);

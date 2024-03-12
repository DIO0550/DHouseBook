import { useContext } from 'react';
import { ThemeContext } from '@/providers/themes/components/ThemeProvider/ThemeContext';

export const useThemeContext = () => useContext(ThemeContext);

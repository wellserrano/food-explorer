import { createContext } from 'react';
import { darkTheme } from '../styles/theme';

export const ThemeContext = createContext({
  theme: darkTheme,
  toggleTheme: () => {},
});
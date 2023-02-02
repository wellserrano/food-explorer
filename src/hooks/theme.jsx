import React, { createContext, useState } from 'react';
import { darkTheme, lightTheme } from '../styles/theme';

export const ThemeContext = createContext({
  theme: darkTheme,
  toggleTheme: () => {},
});
// ThemeContext.tsx
import React, { createContext, useState, ReactNode, useMemo } from 'react';
import { ThemeProvider, Theme } from '@mui/material/styles';
import { lightTheme, darkTheme } from './theme';

interface ThemeContextType {
  toggleTheme: () => void;
  currentTheme: Theme;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const theme = useMemo(() => (isDarkMode ? darkTheme : lightTheme), [isDarkMode]);

  return (
    <ThemeContext.Provider value={{ toggleTheme, currentTheme: theme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

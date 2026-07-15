import React, { createContext, useContext, useMemo } from 'react';
import { Theme } from './types';
import { brandATheme } from '../themes/brandA/theme';
import { brandBTheme } from '../themes/brandB/theme';

const ThemeContext = createContext<Theme | undefined>(undefined);

interface ThemeProviderProps {
  brandId: string;
  children: React.ReactNode;
}

const themeMap: Record<string, Theme> = {
  brandA: brandATheme,
  brandB: brandBTheme,
};

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ brandId, children }) => {
  const theme = useMemo(() => {
    return themeMap[brandId] || brandATheme;
  }, [brandId]);

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): Theme => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

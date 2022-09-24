import { useState, useMemo, useEffect } from 'react';
import { PaletteMode } from '@mui/material';
import { lightTheme, darkTheme } from '../../styles/theme';
import { ThemeModeContext } from '../../context';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { getLocalStorageItem, setLocalStorageItem } from '../../utils/localStorage';

interface PropTypes {
  children: React.ReactNode;
}

const ThemeModeProvider = ({
  children,
}: PropTypes) => {
  const [mode, setMode] = useState<PaletteMode>('light');

  const themeMode = useMemo(
    () => ({
      mode,
      toggleThemeMode: () => {
        setMode((prevMode: PaletteMode) => {
          const nextTheme = prevMode === 'light' ? 'dark' : 'light';
          setLocalStorageItem('themeMode', nextTheme);
          return nextTheme;
        },
        );
      },
    }),
    [mode],
  );

  useEffect(() => {
    setMode(getLocalStorageItem('themeMode', 'light'));
  }, []);

  const theme = useMemo(() => (
    mode === 'light' ? lightTheme : darkTheme
  ), [mode]);

  return (
    <ThemeModeContext.Provider value={themeMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeModeContext.Provider>
  );
};

export default ThemeModeProvider;

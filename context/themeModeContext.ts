import { createContext } from 'react';

const ThemeModeContext = createContext({
  mode: 'dark',
  toggleThemeMode: () => { },
});

export default ThemeModeContext;

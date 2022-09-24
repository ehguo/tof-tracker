import { createContext } from 'react';

const ThemeModeContext = createContext({
  mode: 'light',
  toggleThemeMode: () => { },
});

export default ThemeModeContext;

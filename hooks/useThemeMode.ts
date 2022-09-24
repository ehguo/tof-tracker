import { useContext } from 'react';
import { ThemeModeContext } from '../context';

const useThemeMode = () => useContext(ThemeModeContext);

export default useThemeMode;
